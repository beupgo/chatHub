// 简化的后台脚本 - 只在newtab页面修改response header

// 存储当前活跃的新标签页
let activeNewTabIds = new Set();

// 监听标签页更新，检测新标签页
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.url && tab.url) {
    const isNewTab = tab.url.includes('chrome://newtab/') ||
                     (tab.url.includes('chrome-extension://') && tab.url.includes('index.html'));
    
    if (isNewTab) {
      // 新标签页 - 启用规则
      if (!activeNewTabIds.has(tabId)) {
        activeNewTabIds.add(tabId);
        await enableFrameRules();
      }
    } else {
      // 非新标签页 - 移除并检查是否需要禁用规则
      if (activeNewTabIds.has(tabId)) {
        activeNewTabIds.delete(tabId);
        if (activeNewTabIds.size === 0) {
          await disableFrameRules();
        }
      }
    }
  }
});

// 监听标签页关闭
chrome.tabs.onRemoved.addListener(async (tabId) => {
  if (activeNewTabIds.has(tabId)) {
    activeNewTabIds.delete(tabId);
    if (activeNewTabIds.size === 0) {
      await disableFrameRules();
    }
  }
});

// 启用iframe规则
async function enableFrameRules() {
  try {
    // 定义规则ID，用于先移除再添加（原子操作）
    const ruleIds = [1, 2, 3];

    // 添加新规则
    const rules = [
      {
        id: 1,
        priority: 100,
        action: {
          type: "modifyHeaders",
          responseHeaders: [
            { header: "x-frame-options", operation: "remove" }
          ]
        },
        condition: {
          urlFilter: "*",
          resourceTypes: ["main_frame", "sub_frame"]
        }
      },
      {
        id: 2,
        priority: 100,
        action: {
          type: "modifyHeaders",
          responseHeaders: [
            { header: "content-security-policy", operation: "remove" }
          ]
        },
        condition: {
          urlFilter: "*",
          resourceTypes: ["main_frame", "sub_frame"]
        }
      },
      {
        id: 3,
        priority: 100,
        action: {
          type: "modifyHeaders",
          responseHeaders: [
            { header: "permissions-policy", operation: "remove" }
          ]
        },
        condition: {
          urlFilter: "*",
          resourceTypes: ["main_frame", "sub_frame"]
        }
      }
    ];
    
    // 在同一个调用中先移除旧规则再添加新规则，避免并发时ID冲突
    await chrome.declarativeNetRequest.updateSessionRules({
      removeRuleIds: ruleIds,
      addRules: rules
    });
    
  } catch (error) {
  }
}

// 禁用iframe规则
async function disableFrameRules() {
  try {
    const existingRules = await chrome.declarativeNetRequest.getSessionRules();
    if (existingRules.length > 0) {
      await chrome.declarativeNetRequest.updateSessionRules({
        removeRuleIds: existingRules.map(rule => rule.id)
      });
    }
  } catch (error) {
  }
}

// 监听来自内容脚本的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'checkFrameBlocking') {
    const isActive = activeNewTabIds.size > 0;
    sendResponse({
      status: isActive ? 'active' : 'inactive',
      message: isActive ? 'iframe规则已启用' : 'iframe规则已禁用',
      activeTabsCount: activeNewTabIds.size
    });
  }
  
  if (request.action === 'newTabLoaded' && sender.tab) {
    activeNewTabIds.add(sender.tab.id);
    enableFrameRules();
    sendResponse({ status: 'acknowledged' });
  }
  
  // 处理注入剪贴板修复脚本的请求
  if (request.action === 'injectClipboardFix' && request.tabId && request.frameId !== undefined) {
    injectClipboardFixScript(request.tabId, request.frameId)
      .then(() => sendResponse({ status: 'injected' }))
      .catch(error => sendResponse({ status: 'error', message: error.message }));
    return true; // 保持消息通道开放
  }
  
  return false;
});

// 注入剪贴板修复脚本到指定frame - 使用MAIN世界以便覆盖页面的clipboard API
async function injectClipboardFixScript(tabId, frameId) {
  try {
    // 注入到MAIN世界，这样可以覆盖页面的navigator.clipboard
    await chrome.scripting.executeScript({
      target: { tabId: tabId, frameIds: [frameId] },
      files: ['content-scripts/gemini-fix.js'],
      world: 'MAIN'  // 关键：在页面的主执行环境中运行
    });
  } catch (error) {
    throw error;
  }
}

// 扩展启动时检查现有标签页
chrome.runtime.onStartup.addListener(async () => {
  const tabs = await chrome.tabs.query({});
  activeNewTabIds.clear();
  
  for (const tab of tabs) {
    if (tab.url && (tab.url.includes('chrome://newtab/') ||
        (tab.url.includes('chrome-extension://') && tab.url.includes('index.html')))) {
      activeNewTabIds.add(tab.id);
    }
  }
  
  if (activeNewTabIds.size > 0) {
    await enableFrameRules();
  }
});

// 需要注入剪贴板修复脚本的站点列表
const clipboardFixSites = [
  'gemini.google.com',
  'chat.z.ai',
  'z.ai',
  'chat.qwen.ai',
  'qwen.ai'
];

// 检查URL是否需要注入剪贴板修复脚本
function needsClipboardFix(url) {
  return clipboardFixSites.some(site => url.includes(site));
}

// 已注入的frame记录，避免重复注入
const injectedFrames = new Set();

// 生成唯一的frame标识
function getFrameKey(tabId, frameId) {
  return `${tabId}-${frameId}`;
}

// 监听子frame导航提交事件 - 尽早注入
chrome.webNavigation.onCommitted.addListener(
  async (details) => {
    if (details.frameId > 0 && needsClipboardFix(details.url)) {
      const frameKey = getFrameKey(details.tabId, details.frameId);
      
      // 清除旧的注入记录（因为页面重新导航了）
      injectedFrames.delete(frameKey);
      
      // 稍微延迟以确保DOM可用
      setTimeout(async () => {
        if (!injectedFrames.has(frameKey)) {
          try {
            await injectClipboardFixScript(details.tabId, details.frameId);
            injectedFrames.add(frameKey);
          } catch (error) {
          }
        }
      }, 100);
    }
  }
);

// 监听子frame导航完成事件 - 作为备份
chrome.webNavigation.onCompleted.addListener(
  async (details) => {
    if (details.frameId > 0 && needsClipboardFix(details.url)) {
      const frameKey = getFrameKey(details.tabId, details.frameId);
      
      if (!injectedFrames.has(frameKey)) {
        try {
          await injectClipboardFixScript(details.tabId, details.frameId);
          injectedFrames.add(frameKey);
        } catch (error) {
        }
      }
    }
  }
);

// 清理已关闭标签页的注入记录
chrome.tabs.onRemoved.addListener((tabId) => {
  // 清除该标签页的所有frame记录
  for (const key of injectedFrames) {
    if (key.startsWith(`${tabId}-`)) {
      injectedFrames.delete(key);
    }
  }
});
