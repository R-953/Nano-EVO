// sidepanel.js

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    console.log(`🔊 系统语音库加载完毕，共找到 ${window.speechSynthesis.getVoices().length} 个可用语音包`);
  };
}

document.addEventListener('DOMContentLoaded', () => {

window.speechSynthesis.getVoices();

  // === 1. 控制 ===
  const expandBtn = document.getElementById('expand-btn');
  const inputContainer = document.getElementById('input-container');
  const backdrop = document.getElementById('backdrop');

  const toggleExpand = () => {
    const isExpanded = inputContainer.classList.toggle('expanded');
    if (isExpanded) {
      backdrop.classList.add('show');
      expandBtn.innerHTML = '🗗'; 
      expandBtn.title = '还原窗口';
      document.getElementById('user-input').focus(); 
    } else {
      backdrop.classList.remove('show');
      expandBtn.innerHTML = '⛶'; 
      expandBtn.title = '沉浸模式';
    }
  };
  
  expandBtn.addEventListener('click', toggleExpand);
  backdrop.addEventListener('click', () => {
    if (inputContainer.classList.contains('expanded')) toggleExpand();
  });

  // === 2. 存储与历史 ===
  let isSaving = false;
  const toggleSaveBtn = document.getElementById('toggle-save-btn');
  
  chrome.storage.local.get(['chatHistory', 'isSaving'], (data) => {
    isSaving = !!data.isSaving;
    toggleSaveBtn.innerText = isSaving ? '💾' : '👻';
    toggleSaveBtn.title = isSaving ? '当前状态：保存对话' : '当前状态：阅后即焚';
    
    // 恢复历史记录时，传入 isHistory = true，确保朗读按钮直接显示
    if (isSaving && data.chatHistory && data.chatHistory.length > 0) {
      data.chatHistory.forEach(msg => appendMessage(msg.role, msg.text, false, null, true));
    }
  });

  const saveScreenToStorage = () => {
    if (!isSaving) return;
    const history = [];
    document.querySelectorAll('.message').forEach(el => {
      const role = el.classList.contains('user') ? 'user' : 'ai';
      let text = '';
      el.childNodes.forEach(n => { if (n.nodeType === Node.TEXT_NODE) text += n.textContent; });
      history.push({ role, text: text || el.innerText });
    });
    chrome.storage.local.set({ chatHistory: history });
  };

  toggleSaveBtn.addEventListener('click', () => {
    isSaving = !isSaving;
    toggleSaveBtn.innerText = isSaving ? '💾' : '👻';
    toggleSaveBtn.title = isSaving ? '当前状态：保存对话' : '当前状态：阅后即焚';
    chrome.storage.local.set({ isSaving });
    if (!isSaving) chrome.storage.local.remove('chatHistory');
    else saveScreenToStorage();
  });

  document.getElementById('clear-chat-btn').addEventListener('click', () => {
    document.getElementById('chat-box').innerHTML = '';
    if (isSaving) chrome.storage.local.remove('chatHistory');
  });

  document.getElementById('export-chat-btn').addEventListener('click', () => {
    let mdContent = '# 🧠 AI 对话归档\n\n';
    document.querySelectorAll('.message').forEach(el => {
      const role = el.classList.contains('user') ? '🙋‍♂️ User' : '🤖 AI';
      let text = '';
      el.childNodes.forEach(n => { if (n.nodeType === Node.TEXT_NODE) text += n.textContent; });
      mdContent += `### ${role}\n${text || el.innerText}\n\n---\n\n`;
    });
    const blob = new Blob([mdContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Chat_Export_${new Date().toISOString().slice(0,10)}.md`;
    a.click();
  });

  // === 3. 交互 ===
  const modelSelector = document.getElementById('model-selector');
  const cloudModelSelect = document.getElementById('cloud-model-id');
  const dynamicPath = document.getElementById('dynamic-path');
  const sendBtn = document.getElementById('send-btn');
  const inputEl = document.getElementById('user-input');
  
  let currentTask = 'chat';
  document.querySelectorAll('.task-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.task-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentTask = e.target.getAttribute('data-task');
      if(currentTask === 'translate') inputEl.placeholder = "输入需要翻译的文本...";
      else if(currentTask === 'analyze') inputEl.placeholder = "输入针对当前网页的问题（或留空自动总结）...";
      else inputEl.placeholder = "输入指令...";
    });
  });

  let savedConfigs = { local: "http://127.0.0.1:1234", cloud: "" };
  chrome.storage.local.get(['savedConfigs'], (data) => {
    if (data.savedConfigs) savedConfigs = data.savedConfigs;
    updateUI(); 
  });

  dynamicPath.addEventListener('input', () => {
    const mode = modelSelector.value.toLowerCase();
    savedConfigs[mode] = dynamicPath.value.trim();
    chrome.storage.local.set({ savedConfigs });
  });

  async function detectLocalModel(baseUrl) {
    try {
      const response = await fetch(`${baseUrl}/models`);
      if (response.ok) {
        const data = await response.json();
        if (data.data && data.data.length > 0) {
          return `🖥️ ${data.data[0].id.split('/').pop().replace('.gguf', '')}`;
        }
      }
    } catch (e) {
      console.warn("未能获取本地模型名称");
    }
    return '🖥️ Local LLM';
  }

  const updateUI = async () => {
    const mode = modelSelector.value.toLowerCase(); 
    const badge = document.getElementById('model-badge');
    
    if (mode === 'local') {
      cloudModelSelect.style.display = 'none'; 
      dynamicPath.placeholder = "输入本地接口 (如 http://127.0.0.1:1234)";
      dynamicPath.value = savedConfigs.local; 
      
      let baseUrl = dynamicPath.value.replace(/\/+$/, '');
      if (!baseUrl.endsWith('/v1')) baseUrl += '/v1';
      badge.innerText = await detectLocalModel(baseUrl);

    } else if (mode === 'cloud') {
      cloudModelSelect.style.display = 'block'; 
      dynamicPath.placeholder = "在此输入 Cloud API";
      dynamicPath.value = savedConfigs.cloud; 
      
      badge.innerText = `☁️ ${cloudModelSelect.options[cloudModelSelect.selectedIndex].text}`; 
    }
  };

  modelSelector.addEventListener('change', updateUI);
  cloudModelSelect.addEventListener('change', updateUI);

  async function getActiveTabContent() {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (!tab) return "无法获取标签页。";
      if (tab.url.startsWith('chrome://') || tab.url.startsWith('edge://')) return "禁止在此页面运行。";
      const [{result}] = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => document.body.innerText,
      });
      return result.substring(0, 4000); 
    } catch (e) {
      return `读取失败: ${e.message}`;
    }
  }

  // === 4. 对话逻辑 ===
  sendBtn.addEventListener('click', async () => {
    const fileEl = document.getElementById('file-upload');
    let userText = inputEl.value.trim();
    const mode = modelSelector.value.toLowerCase();
    const pathValue = dynamicPath.value.trim();
    
    if (!userText && (!fileEl.files || fileEl.files.length === 0) && currentTask !== 'analyze') return;

    let attachmentText = "";
    if (fileEl.files && fileEl.files.length > 0) {
      try {
        const fileContent = await readFileAsText(fileEl.files[0]);
        attachmentText = `\n\n[附件内容]\n${fileContent}\n`;
        appendMessage('user', `📎 附带文件: ${fileEl.files[0].name}`);
      } catch (err) {
        appendMessage('ai', '文件读取失败。');
        return;
      }
    }

    let finalPrompt = userText;
    if (currentTask === 'translate') {
      finalPrompt = `请将以下内容翻译为流畅的中文（若是中文则翻译为英语法语和日语）。直接输出翻译结果：\n\n${userText}${attachmentText}`;
      appendMessage('user', `[翻译任务] \n${userText}`, true, userText);
    } else if (currentTask === 'analyze') {
      appendMessage('ai', '正在抓取网页...');
      const pageText = await getActiveTabContent();
      const question = userText || '请提炼出核心摘要。';
      finalPrompt = `[网页文本开始]\n${pageText}\n[网页文本结束]${attachmentText}\n\n请完成任务：${question}`;
      if(userText) appendMessage('user', `[网页分析] ${question}`);
    } else {
      finalPrompt = `${userText}${attachmentText}`;
      if(userText) appendMessage('user', userText);
    }

    inputEl.value = '';
    fileEl.value = ''; 
    const aiResponseEl = appendMessage('ai', '正在响应...');

    try {
      if (mode === 'local') {
        let baseUrl = pathValue.replace(/\/+$/, '');
        if (!baseUrl.endsWith('/v1')) baseUrl += '/v1';
        const response = await fetch(`${baseUrl}/chat/completions`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ model: "local-model", messages: [{ role: "user", content: finalPrompt }], temperature: 0.3 })
        });
        if (!response.ok) throw new Error(`HTTP ${response.status} 错误。`);
        const data = await response.json();
        simulateTypewriter(aiResponseEl, data.choices[0].message.content, saveScreenToStorage);
      } else if (mode === 'cloud') {
        if (!pathValue) throw new Error("请先输入有效的 API Key。");
        const selectedCloudModel = cloudModelSelect.value;
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${selectedCloudModel}:generateContent?key=${pathValue}`;
        
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          referrerPolicy: "no-referrer",
          body: JSON.stringify({ contents: [{ parts: [{ text: finalPrompt }] }] })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error?.message || `云端请求失败`);
        simulateTypewriter(aiResponseEl, data.candidates[0].content.parts[0].text, saveScreenToStorage);
      }
    } catch (error) {
      aiResponseEl.innerText = `🚨 错误: ${error.message}`;
      aiResponseEl.style.color = "#d32f2f";
    }
  });

  // === 5. 右键菜单 ===
  const handlePendingAction = async (action) => {
    if (!action) return;
    if (action.type === 'translate') {
      document.querySelector('[data-task="translate"]').click();
      inputEl.value = action.text;
      setTimeout(() => sendBtn.click(), 100); 
    } else if (action.type === 'analyze') {
      document.querySelector('[data-task="analyze"]').click();
      inputEl.value = ""; 
      setTimeout(() => sendBtn.click(), 100);
    }
    chrome.storage.local.remove('pendingAction');
  };

  chrome.storage.local.get('pendingAction', (data) => handlePendingAction(data.pendingAction));
  chrome.storage.onChanged.addListener((changes, ns) => {
    if (ns === 'local' && changes.pendingAction && changes.pendingAction.newValue) {
      handlePendingAction(changes.pendingAction.newValue);
    }
  });

});

function speak(text) {
  if (!('speechSynthesis' in window)) return;
  
  // 停止当前语音
  window.speechSynthesis.cancel(); 
  
  setTimeout(() => {
    const utterance = new SpeechSynthesisUtterance(text);
    
    // 语种探测
    let targetLang = 'en-US';
    if (/[ぁ-んァ-ヶ]/.test(text)) targetLang = 'ja-JP';
    else if (/[à-ÿœç]/.test(text.toLowerCase())) targetLang = 'fr-CA'; 
    else if (/[一-龥]/.test(text)) targetLang = 'zh-CN';
    
    utterance.lang = targetLang;
    
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      const voice = voices.find(v => v.lang.replace('_', '-').toLowerCase() === targetLang.toLowerCase() && v.name.includes('Google')) 
                 || voices.find(v => v.lang.replace('_', '-').toLowerCase() === targetLang.toLowerCase()) 
                 || voices.find(v => v.lang.toLowerCase().startsWith(targetLang.split('-')[0]));
      
      if (voice) {
        utterance.voice = voice;
        console.log(`[TTS] 成功绑定语音包: ${voice.name} (${voice.lang})`);
      } else {
        console.warn(`[TTS] 警告: 未找到 ${targetLang} 的匹配语音！被迫使用系统默认。`);
      }
    } else {
      console.error("[TTS] 严重错误: 语音库尚未加载，或当前浏览器禁用了 TTS。");
    }
    
    utterance.rate = 1.0;
    window.speechSynthesis.speak(utterance);
  }, 50);
}

function appendMessage(role, text, forceTTS = false, rawTTS = null, isHistory = false) {
  const chatBox = document.getElementById('chat-box');
  const div = document.createElement('div');
  div.className = `message ${role}`;
  div.innerText = text;
  
  if (role === 'ai' || forceTTS) {
    const ttsBtn = document.createElement('button');
    ttsBtn.className = 'tts-btn';
    ttsBtn.innerText = '🔊 朗读';
    ttsBtn.title = '自动识别语种并朗读';
    
    if (role === 'user' || isHistory) {
      ttsBtn.style.display = 'inline-block';
    }
    
    ttsBtn.onclick = () => speak(rawTTS || div.innerText);
    div.appendChild(ttsBtn);
  }
  
  chatBox.appendChild(div);
  scrollToBottom();
  return div;
}

function simulateTypewriter(element, text, onComplete) {
  element.childNodes.forEach(child => {
    if (child.nodeType === Node.TEXT_NODE) child.textContent = '';
  });
  
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      const textNode = Array.from(element.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
      if(textNode) textNode.textContent += text.charAt(i);
      else element.prepend(document.createTextNode(text.charAt(i)));
      
      scrollToBottom();
      i++;
    } else {
      clearInterval(interval);
      const ttsBtn = element.querySelector('.tts-btn');
      if (ttsBtn) ttsBtn.style.display = 'inline-block';
      
      if(onComplete) onComplete();
    }
  }, 10);
}

function scrollToBottom() {
  const chatBox = document.getElementById('chat-box');
  chatBox.scrollTop = chatBox.scrollHeight;
}

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsText(file);
  });
}
