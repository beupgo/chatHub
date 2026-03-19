// AI Sites Copy Button Fix for iframe environment
// This script intercepts clipboard operations and relays them to the parent page
// Supports: Gemini, Z.AI, Qwen and other AI chat sites

(function() {
  'use strict';

  // 防止重复注入
  if (window.__aiClipboardFixInjected) {
    return;
  }
  window.__aiClipboardFixInjected = true;

  const hostname = window.location.hostname;
  const isInIframe = window.self !== window.top;

  if (!isInIframe) {
    return;
  }

  // 发送复制请求到父页面
  function sendCopyToParent(text) {
    if (!text || typeof text !== 'string') return false;

    window.parent.postMessage({
      type: 'GEMINI_COPY_TO_CLIPBOARD',
      text: text
    }, '*');
    return true;
  }

  function isVisible(el) {
    if (!el || !(el instanceof Element)) return false;
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
      return false;
    }
    const rect = el.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  }

  function getZIndex(el) {
    const zIndex = window.getComputedStyle(el).zIndex;
    const parsed = Number.parseInt(zIndex, 10);
    return Number.isNaN(parsed) ? 0 : parsed;
  }

  function looksLikeFullscreenOverlay(el) {
    if (!el || !(el instanceof HTMLElement) || !isVisible(el)) {
      return false;
    }

    const style = window.getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    const coversViewport = rect.width >= window.innerWidth * 0.9 && rect.height >= window.innerHeight * 0.9;
    const fixedLike = style.position === 'fixed' || style.position === 'sticky' ||
      (style.position === 'absolute' && rect.top <= 4 && rect.left <= 4);
    const blocksInteraction = style.pointerEvents !== 'none';
    const hasBackdrop = style.backgroundColor !== 'rgba(0, 0, 0, 0)' || style.backdropFilter !== 'none';
    const strongLayer = getZIndex(el) >= 10;

    return coversViewport && fixedLike && blocksInteraction && (hasBackdrop || strongLayer);
  }

  function isLikelyQwenBlockingLayer(el) {
    if (!looksLikeFullscreenOverlay(el)) {
      return false;
    }

    const text = (el.innerText || '').trim().slice(0, 300).toLowerCase();
    const className = typeof el.className === 'string' ? el.className.toLowerCase() : '';
    const id = (el.id || '').toLowerCase();
    const role = (el.getAttribute('role') || '').toLowerCase();
    const ariaModal = (el.getAttribute('aria-modal') || '').toLowerCase();

    const keywords = [
      'login', 'sign in', 'sign-in', 'modal', 'dialog', 'drawer', 'mask', 'overlay',
      '扫码', '登录', '注册', '继续使用', 'continue', 'verification', '验证', '安全'
    ];

    const attrMatched = [className, id, role, ariaModal].some(value =>
      keywords.some(keyword => value.includes(keyword))
    );
    const textMatched = keywords.some(keyword => text.includes(keyword));

    return attrMatched || textMatched;
  }

  function neutralizeElement(el) {
    if (!el || el.dataset.aiFixNeutralized === '1') return;

    el.dataset.aiFixNeutralized = '1';
    el.style.setProperty('display', 'none', 'important');
    el.style.setProperty('pointer-events', 'none', 'important');
    el.style.setProperty('visibility', 'hidden', 'important');
  }

  function fixQwenOverlays(root = document) {
    if (!hostname.includes('qwen.ai')) {
      return;
    }

    const candidates = root.querySelectorAll('body *');
    for (const el of candidates) {
      if (isLikelyQwenBlockingLayer(el)) {
        neutralizeElement(el);
      }
    }
  }

  function initQwenOverlayFix() {
    if (!hostname.includes('qwen.ai')) {
      return;
    }

    const run = () => {
      fixQwenOverlays(document);
      fixQwenComposerLayout();
    };
    run();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;

          if (isLikelyQwenBlockingLayer(node)) {
            neutralizeElement(node);
          }

          if (node.querySelectorAll) {
            fixQwenOverlays(node);
          }
        });
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });

    window.addEventListener('load', run, { once: true });
    setInterval(run, 1500);
  }

  function fixQwenComposerLayout() {
    if (!hostname.includes('qwen.ai')) {
      return;
    }

    const containerSelectors = [
      '[class*="message-input-container"]',
      '[class*="messageInputContainer"]',
      '[data-testid*="message-input"]'
    ];
    const composerSelectors = [
      ...containerSelectors,
      'form textarea',
      'textarea'
    ];

    const composer = document.querySelector(composerSelectors.join(', '));
    if (!(composer instanceof HTMLElement)) {
      return;
    }

    const container = composer.matches(containerSelectors.join(', '))
      ? composer
      : composer.closest(containerSelectors.join(', ')) || composer.closest('form') || composer;
    if (!(container instanceof HTMLElement)) {
      return;
    }

    const computedStyle = window.getComputedStyle(container);
    const rect = container.getBoundingClientRect();
    const inlineHeight = container.style.height;
    const collapsedByHeight = computedStyle.height === '0px' || rect.height === 0 || inlineHeight === '0px';

    if (collapsedByHeight) {
      container.style.setProperty('height', 'auto', 'important');
      container.style.setProperty('min-height', '56px', 'important');
      container.style.setProperty('overflow', 'visible', 'important');
      container.style.setProperty('visibility', 'visible', 'important');
      container.style.setProperty('flex-shrink', '0', 'important');
    }

    const parent = container.parentElement;
    if (parent instanceof HTMLElement) {
      parent.style.setProperty('min-height', 'fit-content', 'important');
      parent.style.setProperty('overflow', 'visible', 'important');
      parent.style.setProperty('padding-bottom', '24px', 'important');
    }

    container.style.setProperty('position', 'relative', 'important');
    container.style.setProperty('z-index', '30', 'important');
    container.style.setProperty('transform', 'none', 'important');
  }

  // 核心：重写 navigator.clipboard.writeText
  // 这是最可靠的方法 - 拦截实际的剪贴板调用
  if (navigator.clipboard) {
    const originalWriteText = navigator.clipboard.writeText;

    navigator.clipboard.writeText = function(text) {
      // 立即发送给父页面
      sendCopyToParent(text);

      // 返回一个resolved promise，让调用者认为成功了
      return Promise.resolve();
    };

  }

  // 同时处理 document.execCommand('copy') - 旧式复制方法
  const originalExecCommand = document.execCommand.bind(document);
  document.execCommand = function(command, ...args) {
    if (command === 'copy') {
      // 获取当前选中的文本
      const selection = window.getSelection();
      if (selection && selection.toString()) {
        sendCopyToParent(selection.toString());
        return true;
      }
    }
    return originalExecCommand(command, ...args);
  };

  // 备用方案：监听复制按钮点击，直接提取代码
  // 这在某些网站可能需要，如果它们不使用标准的剪贴板API

  // 从代码块中提取代码文本
  function extractCodeFromButton(copyButton) {
    // 方法1: 查找同级或相邻的pre/code元素
    const parent = copyButton.parentElement;
    if (parent) {
      // 检查是否有data属性存储了代码
      const dataCode = copyButton.getAttribute('data-code') ||
                       copyButton.getAttribute('data-clipboard-text') ||
                       parent.getAttribute('data-code');
      if (dataCode) {
        return dataCode;
      }

      // 查找相邻的代码元素
      const siblings = parent.children;
      for (const sibling of siblings) {
        if (sibling !== copyButton) {
          const code = sibling.querySelector('pre, code') ||
                       (sibling.tagName === 'PRE' || sibling.tagName === 'CODE' ? sibling : null);
          if (code && code.textContent.trim()) {
            return code.textContent;
          }
        }
      }
    }

    // 方法2: 向上遍历查找包含代码的容器
    let current = copyButton.parentElement;
    for (let i = 0; i < 10 && current; i++) {
      const codeEl = current.querySelector('pre code, code, pre');
      if (codeEl && codeEl.textContent.trim()) {
        // 确保这个代码块不是之前已经检查过的
        return codeEl.textContent;
      }
      current = current.parentElement;
    }

    return null;
  }

  // 复制按钮选择器
  const copyButtonSelectors = [
    'button[class*="copy"]',
    'button[class*="Copy"]',
    'button[aria-label*="复制"]',
    'button[aria-label*="Copy"]',
    'button[aria-label*="copy"]',
    'button[title*="复制"]',
    'button[title*="Copy"]',
    '[class*="copy-btn"]',
    '[class*="copyBtn"]',
    '.copy-button'
  ].join(', ');

  // 监听点击事件作为最后的备用方案
  document.addEventListener('click', function(event) {
    const target = event.target;
    const copyButton = target.closest(copyButtonSelectors) ||
                       (target.closest('button') &&
                        target.closest('button').querySelector('svg[class*="copy"]'));

    if (copyButton) {
      // 给一个小延迟让原始的复制逻辑先执行
      // 如果原始复制成功调用了 clipboard.writeText，我们的重写就会处理它
      // 如果失败了，这里再尝试提取
      setTimeout(() => {
        const extracted = extractCodeFromButton(copyButton);
        if (extracted) {
          sendCopyToParent(extracted);
        }
      }, 100);
    }
  }, true);

  initQwenOverlayFix();
})();
