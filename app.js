// 默认菜单项
const defaultMenus = [
  {
    id: 1,
    name: "Kimi",
    url: "https://www.kimi.com/",
    icon: "kimi",
    openInNewTab: false,
  },
  {
    id: 2,
    name: "Z.AI",
    url: "https://chat.z.ai/",
    icon: "zai",
    openInNewTab: false,
  },
  {
    id: 3,
    name: "Gemini",
    url: "https://gemini.google.com/app",
    icon: "gemini",
    openInNewTab: false,
  },
  {
    id: 4,
    name: "DeepSeek",
    url: "https://chat.deepseek.com/",
    icon: "deepseek",
    openInNewTab: false,
  },
  {
    id: 5,
    name: "MiniMax",
    url: "https://agent.minimaxi.com/",
    icon: "minimax",
    openInNewTab: false,
  },
  {
    id: 6,
    name: "豆包",
    url: "https://www.doubao.com/chat/",
    icon: "doubao",
    openInNewTab: false,
  },
  {
    id: 7,
    name: "QWen",
    url: "https://chat.qwen.ai/",
    icon: "qwen",
    openInNewTab: false,
  },
  {
    id: 8,
    name: "ChatGLM",
    url: "https://chatglm.cn/main/alltoolsdetail",
    icon: "chatglm",
    openInNewTab: false,
  },
  {
    id: 9,
    name: "ChatGPT",
    url: "https://chatgpt.com/",
    icon: "chatgpt",
    openInNewTab: false,
  },
  {
    id: 10,
    name: "Claude",
    url: "https://claude.ai/new",
    icon: "claude",
    openInNewTab: false,
  },
  {
    id: 11,
    name: "腾讯元宝",
    url: "https://yuanbao.tencent.com/",
    icon: "yuanbao",
    openInNewTab: false,
  },
];

// SVG图标定义
const menuIcons = {
  qwen: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="qwenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4dabf7;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#339af0;stop-opacity:1" />
      </linearGradient>
    </defs>
    <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" stroke="url(#qwenGradient)" stroke-width="2" fill="none"/>
    <circle cx="12" cy="12" r="3" fill="url(#qwenGradient)"/>
  </svg>`,

  zai: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="zaiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4dabf7;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#339af0;stop-opacity:1" />
      </linearGradient>
    </defs>
    <path d="M3 6h18M3 12h18M3 18h18" stroke="url(#zaiGradient)" stroke-width="2" stroke-linecap="round"/>
    <circle cx="20" cy="6" r="2" fill="url(#zaiGradient)"/>
  </svg>`,

  kimi: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="kimiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4dabf7;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#339af0;stop-opacity:1" />
      </linearGradient>
    </defs>
    <path d="M12 2L22 8.5v7L12 22 2 15.5v-7L12 2z" stroke="url(#kimiGradient)" stroke-width="2" fill="none"/>
    <path d="M8 10l4 4 4-4" stroke="url(#kimiGradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  deepseek: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="deepseekGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4dabf7;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#339af0;stop-opacity:1" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" stroke="url(#deepseekGradient)" stroke-width="2" fill="none"/>
    <path d="M8 12l2 2 4-4" stroke="url(#deepseekGradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  doubao: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="doubaoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4dabf7;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#339af0;stop-opacity:1" />
      </linearGradient>
    </defs>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="url(#doubaoGradient)" stroke-width="2" fill="none"/>
    <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="url(#doubaoGradient)" stroke-width="2" stroke-linecap="round"/>
    <circle cx="9" cy="9" r="1" fill="url(#doubaoGradient)"/>
    <circle cx="15" cy="9" r="1" fill="url(#doubaoGradient)"/>
  </svg>`,

  chatglm: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="chatglmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4dabf7;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#339af0;stop-opacity:1" />
      </linearGradient>
    </defs>
    <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" stroke="url(#chatglmGradient)" stroke-width="2" fill="none"/>
    <path d="M8 10l2 2 4-4" stroke="url(#chatglmGradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  chatgpt: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="chatgptGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4dabf7;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#339af0;stop-opacity:1" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" stroke="url(#chatgptGradient)" stroke-width="2" fill="none"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="url(#chatgptGradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 17h.01" stroke="url(#chatgptGradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  gemini: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="geminiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4dabf7;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#339af0;stop-opacity:1" />
      </linearGradient>
    </defs>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="url(#geminiGradient)" stroke-width="2" fill="none"/>
  </svg>`,

  claude: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="claudeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4dabf7;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#339af0;stop-opacity:1" />
      </linearGradient>
    </defs>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="url(#claudeGradient)" stroke-width="2" fill="none"/>
    <polyline points="7.5,10.5 12,15 16.5,10.5" stroke="url(#claudeGradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  yuanbao: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="yuanbaoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4dabf7;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#339af0;stop-opacity:1" />
      </linearGradient>
    </defs>
    <path d="M12 4L3 9l9 5 9-5-9-5z" stroke="url(#yuanbaoGradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3 14l9 5 9-5" stroke="url(#yuanbaoGradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  minimax: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="minimaxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4dabf7;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#339af0;stop-opacity:1" />
      </linearGradient>
    </defs>
    <path d="M4 8l4 8 4-8 4 8 4-8" stroke="url(#minimaxGradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="12" cy="5" r="2" fill="url(#minimaxGradient)"/>
  </svg>`,

  default: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="defaultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4dabf7;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#339af0;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="url(#defaultGradient)" stroke-width="2" fill="none"/>
    <circle cx="12" cy="12" r="2" fill="url(#defaultGradient)"/>
  </svg>`,
};

// 从localStorage获取菜单项，如果没有则使用默认菜单
let menus =
  JSON.parse(localStorage.getItem("webDirectoryMenus")) || defaultMenus;

// 更新现有菜单数据，为没有icon和openInNewTab的菜单项添加相应属性
function updateMenusWithIcons() {
  let updated = false;
  menus = menus.map((menu) => {
    let updatedMenu = { ...menu };

    if (!menu.icon) {
      updated = true;
      // 根据菜单名称分配对应的图标
      if (menu.name.toLowerCase().includes("qwen")) {
        updatedMenu.icon = "qwen";
      } else if (
        menu.name.toLowerCase().includes("z.ai") ||
        menu.name.toLowerCase().includes("zai")
      ) {
        updatedMenu.icon = "zai";
      } else if (menu.name.toLowerCase().includes("kimi")) {
        updatedMenu.icon = "kimi";
      } else if (menu.name.toLowerCase().includes("deepseek")) {
        updatedMenu.icon = "deepseek";
      } else if (
        menu.name.toLowerCase().includes("豆包") ||
        menu.name.toLowerCase().includes("doubao")
      ) {
        updatedMenu.icon = "doubao";
      } else if (
        menu.name.toLowerCase().includes("chatglm") ||
        menu.name.toLowerCase().includes("智谱")
      ) {
        updatedMenu.icon = "chatglm";
      } else if (
        menu.name.toLowerCase().includes("chatgpt") ||
        menu.name.toLowerCase().includes("gpt")
      ) {
        updatedMenu.icon = "chatgpt";
      } else if (menu.name.toLowerCase().includes("gemini")) {
        updatedMenu.icon = "gemini";
      } else if (menu.name.toLowerCase().includes("claude")) {
        updatedMenu.icon = "claude";
      } else if (
        menu.name.toLowerCase().includes("yuanbao") ||
        menu.name.includes("元宝")
      ) {
        updatedMenu.icon = "yuanbao";
      } else if (menu.name.toLowerCase().includes("minimax")) {
        updatedMenu.icon = "minimax";
      } else {
        updatedMenu.icon = "default";
      }
    }

    // 为没有openInNewTab属性的菜单项添加默认值
    if (menu.openInNewTab === undefined) {
      updated = true;
      updatedMenu.openInNewTab = false;
    }

    return updatedMenu;
  });

  if (updated) {
    localStorage.setItem("webDirectoryMenus", JSON.stringify(menus));
  }
}

// 调用更新函数
updateMenusWithIcons();
let activeMenuId = null;
let editingMenuId = null;
let iframeCache = {}; // 用于缓存iframe元素
let currentUrl = null;
let loadTimeout = null; // 用于存储加载超时定时器

// 拖拽相关变量
let draggedElement = null;
let draggedMenuId = null;
let dragPlaceholder = null;
let isDragging = false;
let dragStartTime = 0;

// DOM元素变量声明
let sidebar,
  toggleBtn,
  menuList,
  contentTitle,
  contentFrame,
  errorMessage,
  closeErrorBtn,
  openInNewTab,
  menuModal,
  menuName,
  menuUrl,
  openInNewTabCheckbox,
  cancelBtn,
  saveBtn,
  notification;

// 初始化
// 确保DOM加载完成后执行初始化
document.addEventListener("DOMContentLoaded", init);

function init() {
  // 监听来自iframe的剪贴板复制请求
  window.addEventListener("message", handleIframeMessage);

  // 通知background脚本新标签页已加载
  notifyNewTabLoaded();

  // 初始化DOM元素
  sidebar = document.getElementById("sidebar");
  toggleBtn = document.getElementById("toggleBtn");
  menuList = document.getElementById("menuList");
  contentTitle = document.getElementById("contentTitle");
  contentFrame = document.getElementById("contentFrame");
  errorMessage = document.getElementById("errorMessage");
  closeErrorBtn = document.getElementById("closeErrorBtn");
  openInNewTab = document.getElementById("openInNewTab");
  menuModal = document.getElementById("menuModal");
  menuName = document.getElementById("menuName");
  menuUrl = document.getElementById("menuUrl");
  openInNewTabCheckbox = document.getElementById("openInNewTabCheckbox");
  cancelBtn = document.getElementById("cancelBtn");
  saveBtn = document.getElementById("saveBtn");
  notification = document.getElementById("notification");

  // 初始化菜单渲染
  renderMenus();

  // 默认打开第一个iframe类型的菜单
  const savedActiveMenuId = localStorage.getItem("activeMenuId");
  const iframeMenus = menus.filter((menu) => !menu.openInNewTab);

  if (savedActiveMenuId) {
    const savedMenu = menus.find((menu) => menu.id == savedActiveMenuId);
    if (savedMenu && !savedMenu.openInNewTab) {
      activeMenuId = parseInt(savedActiveMenuId);
      activateMenu(activeMenuId);
    } else if (iframeMenus.length > 0) {
      activateMenu(iframeMenus[0].id);
    } else {
      // 没有iframe菜单，显示提示信息
      setDefaultContentState();
    }
  } else if (iframeMenus.length > 0) {
    activateMenu(iframeMenus[0].id);
  } else {
    // 没有iframe菜单，显示提示信息
    setDefaultContentState();
  }

  // 设置默认内容状态
  function setDefaultContentState() {
    activeMenuId = null;
    const titleElement = document.querySelector(".content-title");
    const textNodes = Array.from(titleElement.childNodes).filter(
      (node) => node.nodeType === Node.TEXT_NODE,
    );
    if (textNodes.length > 0) {
      textNodes[textNodes.length - 1].textContent = "请添加一个菜单项";
    } else {
      titleElement.appendChild(document.createTextNode("请添加一个菜单项"));
    }
    localStorage.removeItem("activeMenuId");
    document.title = "ChatHub";
  }

  // 添加菜单按钮事件监听
  const addMenuHeaderBtn = document.getElementById("addMenuHeaderBtn");
  if (addMenuHeaderBtn) {
    addMenuHeaderBtn.addEventListener("click", () => {
      editingMenuId = null;
      menuName.value = "";
      menuUrl.value = "";
      openInNewTabCheckbox.checked = false;
      menuModal.style.display = "flex";
    });
  }

  // 折叠按钮事件监听
  if (toggleBtn) {
    toggleBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      sidebar.classList.toggle("collapsed");
    });
  }

  // 其他事件监听器
  if (closeErrorBtn) {
    closeErrorBtn.addEventListener("click", () => {
      errorMessage.style.display = "none";
    });
  }

  if (openInNewTab) {
    openInNewTab.addEventListener("click", () => {
      if (currentUrl) {
        window.open(currentUrl, "_blank");
        showNotification("已在新标签页打开");
      }
    });
  }

  // 重新加载按钮事件监听
  const reloadIframe = document.getElementById("reloadIframe");
  if (reloadIframe) {
    reloadIframe.addEventListener("click", () => {
      errorMessage.style.display = "none";
      reloadCurrentIframe();
      showNotification("正在重新加载...");
    });
  }

  if (saveBtn) {
    saveBtn.addEventListener("click", handleSaveMenu);
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", () => {
      menuModal.style.display = "none";
    });
  }

  // 检查后台脚本状态
  checkBackgroundScriptStatus();

  // 添加拖拽事件监听器到 menuList
  menuList.addEventListener("dragstart", handleDragStart);
  menuList.addEventListener("dragover", handleDragOver);
  menuList.addEventListener("dragenter", handleDragEnter);
  menuList.addEventListener("dragleave", handleDragLeave);
  menuList.addEventListener("drop", handleDrop);
  menuList.addEventListener("dragend", handleDragEnd);

  // 启动后台预加载其他菜单站点
  preloadMenus();
}

// 通知background脚本新标签页已加载
function notifyNewTabLoaded() {
  if (chrome.runtime && chrome.runtime.sendMessage) {
    try {
      chrome.runtime.sendMessage({ action: "newTabLoaded" }, () => {
        if (chrome.runtime.lastError) {
          return;
        }
      });
    } catch (error) {
    }
  }
}

// 检查后台脚本状态
function checkBackgroundScriptStatus() {
  if (chrome.runtime && chrome.runtime.sendMessage) {
    try {
      chrome.runtime.sendMessage(
        { action: "checkFrameBlocking" },
        () => {
          if (chrome.runtime.lastError) {
            return;
          }
        },
      );
    } catch (error) {
    }
  }
}

// 渲染菜单
// 渲染菜单
function renderMenus() {
  renderSidebarMenus();
  renderHeaderLinks();
}

// 渲染侧边栏菜单（iframe类型）
function renderSidebarMenus() {
  menuList.innerHTML = "";

  // 只显示 openInNewTab 为 false 的菜单项
  const iframeMenus = menus.filter((menu) => !menu.openInNewTab);

  iframeMenus.forEach((menu) => {
    const menuItem = document.createElement("div");
    menuItem.className = `menu-item ${
      menu.id === activeMenuId ? "active" : ""
    }`;
    menuItem.dataset.id = menu.id;
    // 添加拖拽属性
    menuItem.draggable = true;

    // 添加删除按钮的事件监听
    menuItem.innerHTML = `
      <div class="menu-item-icon">${menuIcons[menu.icon || "default"] || menuIcons.default}</div>
      <span class="menu-item-text">${menu.name}</span>
      <div class="menu-item-actions">
        <button class="action-btn delete-btn" data-id="${menu.id}" title="删除">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
          </svg>
        </button>
      </div>
    `;

    menuList.appendChild(menuItem);
  });

  // 为菜单项添加点击事件监听
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      // 如果点击的是删除按钮，不处理菜单激活
      if (e.target.closest(".delete-btn")) {
        return;
      }
      // 如果正在拖拽或刚刚完成拖拽，不处理点击
      if (isDragging || Date.now() - dragStartTime < 200) {
        return;
      }
      const menuId = parseInt(item.dataset.id);
      activateMenu(menuId);
    });
  });

  // 为删除按钮添加事件监听
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const menuId = parseInt(btn.dataset.id);
      deleteMenu(menuId);
    });
  });
}

// 渲染头部链接（新标签类型）
function renderHeaderLinks() {
  const headerLinks = document.getElementById("headerLinks");
  if (!headerLinks) return;

  headerLinks.innerHTML = "";

  // 只显示 openInNewTab 为 true 的菜单项
  const linkMenus = menus.filter((menu) => menu.openInNewTab);

  linkMenus.forEach((menu) => {
    const linkItem = document.createElement("a");
    linkItem.className = "header-link-item";
    linkItem.href = menu.url;
    linkItem.target = "_blank";
    linkItem.title = `在新标签页打开 ${menu.name}`;
    linkItem.dataset.id = menu.id;

    // 获取图标，如果没有则使用默认图标
    const iconKey = menu.icon || "default";
    const iconSvg = menuIcons[iconKey] || menuIcons.default;

    linkItem.innerHTML = `
      <span>${menu.name}</span>
      <button class="action-btn delete-btn" data-id="${menu.id}" title="删除" style="margin-left: 4px;">
        <svg viewBox="0 0 24 24" width="12" height="12">
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
        </svg>
      </button>
    `;

    // 阻止删除按钮触发链接跳转
    const deleteBtn = linkItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const menuId = parseInt(deleteBtn.dataset.id);
      deleteMenu(menuId);
    });

    headerLinks.appendChild(linkItem);
  });
}

// 激活菜单（只处理iframe类型的菜单）
function activateMenu(menuId) {
  const menu = menus.find((m) => m.id === menuId);

  // 如果是新标签类型的菜单，不处理激活逻辑
  if (menu && menu.openInNewTab) {
    return;
  }

  activeMenuId = menuId;

  if (menu) {
    // 更新标题
    const titleElement = document.querySelector(".content-title");
    // 查找并更新文本节点，跳过按钮元素
    const textNodes = Array.from(titleElement.childNodes).filter(
      (node) => node.nodeType === Node.TEXT_NODE,
    );
    if (textNodes.length > 0) {
      textNodes[textNodes.length - 1].textContent = menu.name;
    } else {
      titleElement.appendChild(document.createTextNode(menu.name));
    }

    currentUrl = menu.url;

    // 隐藏错误消息
    errorMessage.style.display = "none";

    // 在切换菜单前，确保后台规则已更新
    if (chrome.runtime && chrome.runtime.sendMessage) {
      try {
        chrome.runtime.sendMessage({ action: "newTabLoaded" }, () => {
          switchToIframe(menuId, menu.url);
        });
      } catch (error) {
        switchToIframe(menuId, menu.url);
      }
    } else {
      // 如果无法通信，直接加载
      switchToIframe(menuId, menu.url);
    }

    // 保存活动菜单ID到localStorage
    localStorage.setItem("activeMenuId", menuId);

    // Update document title
    document.title = `${menu.name} | ChatHub`;

    // 更新菜单项的激活状态
    document.querySelectorAll(".menu-item").forEach((item) => {
      item.classList.toggle("active", parseInt(item.dataset.id) === menuId);
    });
  }
}

// 切换到指定的iframe
function switchToIframe(menuId, url) {
  const iframeContainer = document.querySelector(".iframe-container");

  // 隐藏所有现有的iframe
  const existingIframes = iframeContainer.querySelectorAll("iframe");
  existingIframes.forEach((iframe) => {
    iframe.style.display = "none";
  });

  // 隐藏新标签页提示信息
  const existingMessage = iframeContainer.querySelector(".new-tab-message");
  if (existingMessage) {
    existingMessage.remove();
  }

  // 检查是否已经有这个菜单的iframe
  let targetIframe = iframeCache[menuId];

  if (!targetIframe) {
    // 创建新的iframe
    targetIframe = document.createElement("iframe");
    targetIframe.id = `contentFrame-${menuId}`;
    targetIframe.style.width = "100%";
    targetIframe.style.height = "100%";
    targetIframe.style.border = "none";
    targetIframe.style.overflow = "hidden";

    // 添加加载事件监听
    targetIframe.addEventListener("load", handleIframeLoad);
    targetIframe.addEventListener("error", handleIframeError);

    // 根据URL决定沙箱策略
    const isTrustedSite = isTrustedAISite(url);
    if (isTrustedSite) {
      // 对于信任的AI网站，移除沙箱限制以避免功能问题
      // 由于扩展已经通过规则移除了安全限制，这里不需要严格的沙箱
      targetIframe.removeAttribute("sandbox");
    } else {
      // 对于其他网站，使用基本的沙箱设置
      targetIframe.setAttribute(
        "sandbox",
        "allow-scripts allow-forms allow-popups allow-presentation",
      );
    }

    // 设置referrer策略
    targetIframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");

    // 缓存iframe
    iframeCache[menuId] = targetIframe;

    // 添加到容器
    iframeContainer.appendChild(targetIframe);

    // 延迟加载以确保规则生效
    setTimeout(() => {
      loadIframeWithRetry(targetIframe, url, 0);
    }, 100);

    // 设置超时检查
    loadTimeout = setTimeout(() => {
      try {
        const iframeDoc =
          targetIframe.contentDocument || targetIframe.contentWindow.document;
        if (!iframeDoc || !iframeDoc.body || iframeDoc.body.innerHTML === "") {
          showError();
        }
      } catch (e) {
        showError();
      }
    }, 10000); // 增加超时时间到10秒
  } else {
    // 对于缓存的iframe，检查是否需要重新加载
    const currentSrc = targetIframe.src;
    if (currentSrc !== url) {
      // URL发生变化，重新加载
      setTimeout(() => {
        loadIframeWithRetry(targetIframe, url, 0);
      }, 100);
    } else {
      // URL相同，直接显示，但添加一个小延迟确保规则生效
      setTimeout(() => {
        targetIframe.style.display = "block";
      }, 50);
    }
  }

  // 更新全局引用
  window.contentFrame = targetIframe;
}

// 后台预加载其他菜单站点
// 在第一个菜单加载后，每隔1秒在后台预加载一个尚未缓存的菜单站点
function preloadMenus() {
  const iframeMenus = menus.filter((menu) => !menu.openInNewTab);
  // 获取需要预加载的菜单（排除当前激活的菜单）
  const menusToPreload = iframeMenus.filter(
    (menu) => menu.id !== activeMenuId && !iframeCache[menu.id],
  );

  if (menusToPreload.length === 0) {
    return;
  }

  let index = 0;

  const preloadNext = () => {
    if (index >= menusToPreload.length) {
      return;
    }

    const menu = menusToPreload[index];

    // 如果在预加载期间用户已经手动切换到了该菜单，跳过
    if (iframeCache[menu.id]) {
      index++;
      preloadNext();
      return;
    }

    const iframeContainer = document.querySelector(".iframe-container");

    // 创建隐藏的iframe用于预加载
    const iframe = document.createElement("iframe");
    iframe.id = `contentFrame-${menu.id}`;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.overflow = "hidden";
    iframe.style.display = "none"; // 隐藏，不影响当前显示

    // 添加加载事件监听
    iframe.addEventListener("load", handleIframeLoad);
    iframe.addEventListener("error", handleIframeError);

    // 根据URL决定沙箱策略
    const isTrustedSite = isTrustedAISite(menu.url);
    if (isTrustedSite) {
      iframe.removeAttribute("sandbox");
    } else {
      iframe.setAttribute(
        "sandbox",
        "allow-scripts allow-forms allow-popups allow-presentation",
      );
    }

    // 设置referrer策略
    iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");

    // 缓存iframe
    iframeCache[menu.id] = iframe;

    // 添加到容器
    iframeContainer.appendChild(iframe);

    // 延迟加载以确保规则生效
    setTimeout(() => {
      loadIframeWithRetry(iframe, menu.url, 0);
    }, 100);

    index++;

    // 1秒后预加载下一个
    setTimeout(preloadNext, 1000);
  };

  // 延迟2秒后开始预加载，给第一个菜单足够的加载时间
  setTimeout(preloadNext, 2000);
}

// 检查是否为信任的AI网站
function isTrustedAISite(url) {
  const trustedDomains = [
    "chat.deepseek.com",
    "chat.qwen.ai",
    "chat.z.ai",
    "www.kimi.com",
    "chatgpt.com",
    "chat.openai.com",
    "claude.ai",
    "bard.google.com",
    "gemini.google.com",
    "yiyan.baidu.com",
    "wenxin.baidu.com",
    "www.doubao.com",
    "doubao.com",
    "chatglm.cn",
    "www.chatglm.cn",
    "yuanbao.tencent.com",
    "www.yuanbao.tencent.com",
    "agent.minimaxi.com",
  ];

  try {
    const urlObj = new URL(url);
    return trustedDomains.some(
      (domain) =>
        urlObj.hostname === domain || urlObj.hostname.endsWith("." + domain),
    );
  } catch (e) {
    return false;
  }
}

// 带重试机制的iframe加载函数
function loadIframeWithRetry(iframe, url, retryCount) {
  const maxRetries = 3;

  // 在加载前先通知后台脚本确保规则生效
  if (chrome.runtime && chrome.runtime.sendMessage) {
    try {
      chrome.runtime.sendMessage(
        { action: "checkFrameBlocking" },
        () => {
          if (chrome.runtime.lastError) {
            return;
          }
        },
      );
    } catch (error) {
    }
  }

  iframe.src = url;

  // 如果重试次数超过限制，不再重试
  if (retryCount >= maxRetries) {
    return;
  }

  // 设置重试定时器
  const retryTimeout = setTimeout(() => {
    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      if (!iframeDoc || !iframeDoc.body || iframeDoc.body.innerHTML === "") {
        // 在重试前稍微延迟，给规则更多时间生效
        setTimeout(() => {
          loadIframeWithRetry(iframe, url, retryCount + 1);
        }, 500);
      }
    } catch (e) {
      setTimeout(() => {
        loadIframeWithRetry(iframe, url, retryCount + 1);
      }, 500);
    }
  }, 4000); // 增加重试间隔到4秒

  // 如果iframe成功加载，清除重试定时器
  const loadHandler = () => {
    clearTimeout(retryTimeout);
    iframe.removeEventListener("load", loadHandler);
  };

  iframe.addEventListener("load", loadHandler);
}

// 重新加载当前iframe的URL
function reloadCurrentIframe() {
  if (activeMenuId && iframeCache[activeMenuId]) {
    const currentIframe = iframeCache[activeMenuId];
    const menu = menus.find((m) => m.id === activeMenuId);
    if (menu) {
      loadIframeWithRetry(currentIframe, menu.url, 0);
    }
  }
}

// 处理iframe加载成功事件
function handleIframeLoad() {
  // 清除超时定时器
  if (loadTimeout) {
    clearTimeout(loadTimeout);
    loadTimeout = null;
  }

  // 隐藏错误消息
  errorMessage.style.display = "none";
}

// 处理iframe加载错误事件
function handleIframeError() {
  // 清除超时定时器
  if (loadTimeout) {
    clearTimeout(loadTimeout);
    loadTimeout = null;
  }

  if (chrome.runtime && chrome.runtime.sendMessage) {
    try {
      chrome.runtime.sendMessage(
        { action: "forceRefreshRules" },
        (response) => {
          if (chrome.runtime.lastError) {
            showError();
            return;
          }

          if (response && response.status === "force_refreshed") {
            setTimeout(() => {
              if (activeMenuId && iframeCache[activeMenuId]) {
                const menu = menus.find((m) => m.id === activeMenuId);
                if (menu) {
                  loadIframeWithRetry(iframeCache[activeMenuId], menu.url, 0);
                }
              }
            }, 1000);
          } else {
            showError();
          }
        },
      );
    } catch (error) {
      showError();
    }
  } else {
    // 显示错误消息
    showError();
  }
}

// 显示错误消息
function showError() {
  // 更新错误消息内容
  const errorContent = errorMessage.querySelector("p");
  if (errorContent) {
    errorContent.innerHTML = `
      由于网站的安全策略（X-Frame-Options 或 Content-Security-Policy），无法直接嵌入。<br>
      扩展已尝试移除这些限制，但某些网站可能需要重新加载扩展才能生效。<br><br>
      您可以：<br>
      1. 点击"重新加载"按钮重试<br>
      2. 点击"强制刷新规则"按钮强制更新安全规则<br>
      3. 在新标签页中打开该网站<br>
      4. 重新加载整个扩展 (chrome://extensions/) 后再试<br>
      5. 将此菜单设置为"新标签页打开"
    `;
  }

  // 检查是否已经有强制刷新按钮
  let forceRefreshBtn = errorMessage.querySelector(".force-refresh-btn");
  if (!forceRefreshBtn) {
    forceRefreshBtn = document.createElement("button");
    forceRefreshBtn.className = "force-refresh-btn";
    forceRefreshBtn.textContent = "强制刷新规则";
    forceRefreshBtn.style.cssText = `
      margin-left: 10px;
      padding: 8px 16px;
      background-color: #ff6b6b;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    `;

    forceRefreshBtn.addEventListener("click", () => {
      if (chrome.runtime && chrome.runtime.sendMessage) {
        try {
          chrome.runtime.sendMessage(
            { action: "forceRefreshRules" },
            (response) => {
              if (chrome.runtime.lastError) {
                showNotification("通信错误，请重新加载扩展");
                return;
              }

              if (response && response.status === "force_refreshed") {
                showNotification("规则已强制刷新，正在重试...");
                setTimeout(() => {
                  reloadCurrentIframe();
                }, 1000);
              } else {
                showNotification("强制刷新失败，请重新加载扩展");
              }
            },
          );
        } catch (error) {
          showNotification("发送消息失败，请重新加载扩展");
        }
      }
    });

    // 将按钮添加到重新加载按钮旁边
    const reloadBtn = errorMessage.querySelector("#reloadIframe");
    if (reloadBtn && reloadBtn.parentNode) {
      reloadBtn.parentNode.insertBefore(forceRefreshBtn, reloadBtn.nextSibling);
    }
  }

  errorMessage.style.display = "block";
}

// 显示新标签页打开的提示信息
function showNewTabMessage(menuName, menuUrl) {
  const iframeContainer = document.querySelector(".iframe-container");

  // 移除现有的新标签页提示
  const existingMessage = iframeContainer.querySelector(".new-tab-message");
  if (existingMessage) {
    existingMessage.remove();
  }

  // 创建新标签页提示元素
  const newTabMessage = document.createElement("div");
  newTabMessage.className = "new-tab-message";
  newTabMessage.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background-color: #fff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    z-index: 10;
  `;

  newTabMessage.innerHTML = `
    <div style="margin-bottom: 20px;">
      <svg viewBox="0 0 24 24" style="width: 48px; height: 48px; fill: #4dabf7; margin-bottom: 16px;">
        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
      </svg>
    </div>
    <h3 style="color: #343a40; margin-bottom: 15px; font-size: 20px;">${menuName} 已在新标签页打开</h3>
    <p style="color: #6c757d; margin-bottom: 20px; line-height: 1.6;">
      此菜单项配置为在新标签页中打开，而不是在当前页面的iframe中嵌入。
    </p>
    <button onclick="window.open('${menuUrl}', '_blank')" style="
      padding: 10px 20px;
      background-color: #4dabf7;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      margin-right: 10px;
      transition: background-color 0.2s;
    " onmouseover="this.style.backgroundColor='#339af0'" onmouseout="this.style.backgroundColor='#4dabf7'">
      重新打开
    </button>
  `;

  iframeContainer.appendChild(newTabMessage);
}

// 这些事件监听器已移至init函数中

// 编辑菜单
function editMenu(menuId) {
  const menu = menus.find((m) => m.id === menuId);
  if (menu) {
    editingMenuId = menuId;
    menuName.value = menu.name;
    menuUrl.value = menu.url;
    openInNewTabCheckbox.checked = menu.openInNewTab || false;
    menuModal.style.display = "flex";
  }
}

// 删除菜单
function deleteMenu(menuId) {
  if (confirm("确定要删除这个菜单吗？")) {
    const deletedMenu = menus.find((m) => m.id === menuId);
    menus = menus.filter((m) => m.id !== menuId);

    // 删除缓存的iframe
    if (iframeCache[menuId]) {
      iframeCache[menuId].remove();
      delete iframeCache[menuId];
    }

    // 如果删除的是当前活动菜单（且是iframe类型），则跳转到第一个可用的iframe菜单
    if (activeMenuId === menuId && deletedMenu && !deletedMenu.openInNewTab) {
      const iframeMenus = menus.filter((menu) => !menu.openInNewTab);
      if (iframeMenus.length > 0) {
        // 跳转到第一个可用的iframe菜单
        activateMenu(iframeMenus[0].id);
      } else {
        // 如果没有iframe菜单了，清除活动状态
        setDefaultContentState();
      }
    }

    // 保存到localStorage
    localStorage.setItem("webDirectoryMenus", JSON.stringify(menus));

    // 重新渲染菜单
    renderMenus();

    showNotification("菜单已删除");
  }
}

// 保存菜单处理函数
function handleSaveMenu() {
  const name = menuName.value.trim();
  const url = menuUrl.value.trim();
  const shouldOpenInNewTab = openInNewTabCheckbox.checked;

  if (!name || !url) {
    alert("请填写菜单名称和URL");
    return;
  }

  // 确保URL以http://或https://开头
  let formattedUrl = url;
  if (
    !formattedUrl.startsWith("http://") &&
    !formattedUrl.startsWith("https://")
  ) {
    formattedUrl = "https://" + formattedUrl;
  }

  if (editingMenuId) {
    // 编辑现有菜单
    const menu = menus.find((m) => m.id === editingMenuId);
    if (menu) {
      menu.name = name;
      menu.url = formattedUrl;
      menu.openInNewTab = shouldOpenInNewTab;

      // 如果编辑的是当前活动菜单，更新标题和URL
      if (activeMenuId === editingMenuId) {
        const titleElement = document.querySelector(".content-title");
        const textNodes = Array.from(titleElement.childNodes).filter(
          (node) => node.nodeType === Node.TEXT_NODE,
        );
        if (textNodes.length > 0) {
          textNodes[textNodes.length - 1].textContent = name;
        } else {
          titleElement.appendChild(document.createTextNode(name));
        }
        currentUrl = formattedUrl;

        // 如果改变了打开方式，需要重新激活菜单
        if (menu.openInNewTab !== shouldOpenInNewTab) {
          // 清除现有的iframe缓存
          if (iframeCache[editingMenuId]) {
            iframeCache[editingMenuId].remove();
            delete iframeCache[editingMenuId];
          }
          // 重新激活菜单以应用新的打开方式
          setTimeout(() => activateMenu(editingMenuId), 100);
        } else if (!shouldOpenInNewTab && iframeCache[editingMenuId]) {
          // 如果仍然使用iframe，更新URL
          iframeCache[editingMenuId].src = formattedUrl;
        }
      }
    }
  } else {
    // 添加新菜单
    const newId =
      menus.length > 0 ? Math.max(...menus.map((m) => m.id)) + 1 : 1;
    menus.push({
      id: newId,
      name,
      url: formattedUrl,
      icon: "default",
      openInNewTab: shouldOpenInNewTab,
    });
  }

  // 保存到localStorage
  localStorage.setItem("webDirectoryMenus", JSON.stringify(menus));

  // 重新渲染菜单
  renderMenus();

  // 关闭模态框
  menuModal.style.display = "none";

  showNotification(editingMenuId ? "菜单已更新" : "菜单已添加");
}

// 切换侧边栏功能已移至init函数中

// 显示通知
function showNotification(message) {
  notification.textContent = message;
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

// 拖拽相关函数
function handleDragStart(e) {
  // 只有当目标是菜单项时才处理拖拽
  if (!e.target.classList.contains("menu-item")) {
    return;
  }

  isDragging = true;
  dragStartTime = Date.now();
  draggedElement = e.target;
  draggedMenuId = parseInt(e.target.dataset.id);

  e.target.classList.add("dragging");
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", e.target.outerHTML);

  // 创建拖拽占位符
  dragPlaceholder = document.createElement("div");
  dragPlaceholder.className = "drag-placeholder";
  dragPlaceholder.textContent = "放置到这里";
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
}

function handleDragEnter(e) {
  e.preventDefault();

  if (e.target.classList.contains("menu-item") && e.target !== draggedElement) {
    // 清除其他元素的拖拽样式
    document.querySelectorAll(".menu-item").forEach((item) => {
      item.classList.remove("drag-over", "drag-over-bottom");
    });

    // 确定是在上半部分还是下半部分
    const rect = e.target.getBoundingClientRect();
    const midY = rect.top + rect.height / 2;

    if (e.clientY < midY) {
      e.target.classList.add("drag-over");
    } else {
      e.target.classList.add("drag-over-bottom");
    }
  }
}

function handleDragLeave(e) {
  if (!e.target.classList.contains("menu-item")) return;

  // 检查是否真的离开了元素
  const rect = e.target.getBoundingClientRect();
  if (
    e.clientX < rect.left ||
    e.clientX > rect.right ||
    e.clientY < rect.top ||
    e.clientY > rect.bottom
  ) {
    e.target.classList.remove("drag-over", "drag-over-bottom");
  }
}

function handleDrop(e) {
  e.preventDefault();

  if (e.target.classList.contains("menu-item") && e.target !== draggedElement) {
    const targetMenuId = parseInt(e.target.dataset.id);
    const draggedMenu = menus.find((m) => m.id === draggedMenuId);
    const targetMenu = menus.find((m) => m.id === targetMenuId);

    if (draggedMenu && targetMenu) {
      // 获取当前索引
      const draggedIndex = menus.findIndex((m) => m.id === draggedMenuId);
      const targetIndex = menus.findIndex((m) => m.id === targetMenuId);

      // 确定插入位置
      const rect = e.target.getBoundingClientRect();
      const midY = rect.top + rect.height / 2;
      const insertAfter = e.clientY >= midY;

      // 重新排列数组
      menus.splice(draggedIndex, 1);
      const newTargetIndex = menus.findIndex((m) => m.id === targetMenuId);
      const insertIndex = insertAfter ? newTargetIndex + 1 : newTargetIndex;
      menus.splice(insertIndex, 0, draggedMenu);

      // 保存到localStorage
      localStorage.setItem("webDirectoryMenus", JSON.stringify(menus));

      // 重新渲染菜单
      renderMenus();

      showNotification("菜单顺序已更新");
    }
  }

  // 清除拖拽样式
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.classList.remove("drag-over", "drag-over-bottom");
  });
}

function handleDragEnd(e) {
  e.target.classList.remove("dragging");

  // 清除所有拖拽相关的样式
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.classList.remove("drag-over", "drag-over-bottom", "dragging");
  });

  // 清除拖拽变量
  draggedElement = null;
  draggedMenuId = null;
  dragPlaceholder = null;

  // 延迟重置拖拽状态，避免立即触发点击事件
  setTimeout(() => {
    isDragging = false;
  }, 100);
}

// 处理来自iframe的消息（用于剪贴板复制等功能）
function handleIframeMessage(event) {
  // 验证消息来源
  const trustedOrigins = [
    "https://gemini.google.com",
    "https://chat.qwen.ai",
    "https://chat.deepseek.com",
    "https://claude.ai",
    "https://chatgpt.com",
  ];

  // 检查是否来自信任的来源
  const isTrusted = trustedOrigins.some((origin) =>
    event.origin.startsWith(origin.replace("https://", "https://")),
  );

  if (!event.data || typeof event.data !== "object") {
    return;
  }

  // 处理剪贴板复制请求
  if (event.data.type === "GEMINI_COPY_TO_CLIPBOARD") {
    const text = event.data.text;

    if (typeof text === "string" && text.length > 0) {
      // 执行剪贴板复制
      navigator.clipboard
        .writeText(text)
        .then(() => {
          showNotification("代码已复制到剪贴板");
        })
        .catch((error) => {
          // 降级方案：使用 execCommand
          try {
            const textarea = document.createElement("textarea");
            textarea.value = text;
            textarea.style.position = "fixed";
            textarea.style.left = "-9999px";
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            showNotification("代码已复制到剪贴板");
          } catch (fallbackError) {
            showNotification("复制失败，请手动复制");
          }
        });
    }
  }
}
