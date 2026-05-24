chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch(console.error);

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "open-panel",
    title: "🖥️ 打开侧边栏",
    contexts: ["all"]
  });
  
  chrome.contextMenus.create({
    id: "translate-selection",
    title: "🌐 划词翻译",
    contexts: ["selection"] // 只有选中文本时才显示
  });
  
  chrome.contextMenus.create({
    id: "summarize-page",
    title: "📄 总结当前网页",
    contexts: ["page"] // 在网页空白处右键时显示
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.sidePanel.open({ tabId: tab.id });

  if (info.menuItemId === 'translate-selection') {
    chrome.storage.local.set({ 
      pendingAction: { type: 'translate', text: info.selectionText } 
    });
  } else if (info.menuItemId === 'summarize-page') {
    chrome.storage.local.set({ 
      pendingAction: { type: 'analyze' } 
    });
  }
});
