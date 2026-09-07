// background.js (Firefox Edition)

const menusAPI = typeof browser !== 'undefined' && browser.menus ? browser.menus : chrome.contextMenus;

chrome.runtime.onInstalled.addListener(() => {
  menusAPI.create({
    id: "open-panel",
    title: "🖥️ 打开侧边栏",
    contexts: ["all"]
  });
  
  menusAPI.create({
    id: "translate-selection",
    title: "🌐 划词翻译",
    contexts: ["selection"]
  });
  
  menusAPI.create({
    id: "summarize-page",
    title: "📄 总结当前网页",
    contexts: ["page"]
  });

  menusAPI.create({
    id: "inject-furigana",
    title: "🇯🇵 网页注音 (本地)",
    contexts: ["page"]
  });
});

async function openSidebar() {
  if (typeof browser !== 'undefined' && browser.sidebarAction && browser.sidebarAction.open) {
    try {
      await browser.sidebarAction.open();
    } catch (e) {
      console.warn("Firefox sidebarAction.open() failed:", e);
    }
  }
}

menusAPI.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'open-panel') {
    openSidebar();
  } else if (info.menuItemId === 'translate-selection') {
    openSidebar();
    chrome.storage.local.set({ pendingAction: { type: 'translate', text: info.selectionText } });
  } else if (info.menuItemId === 'summarize-page') {
    openSidebar();
    chrome.storage.local.set({ pendingAction: { type: 'analyze' } });
  } else if (info.menuItemId === 'inject-furigana') {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['kuromoji.js', 'furigana-content.js']
    });
  }
});