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

  const chatBox = document.getElementById('chat-box');
  chatBox.title = "双击此处可快速锁定并保持滚动在最底部";

  // 滚轮向上滚动：切换为自由滚动模式（输出时停止强制吸底）
  chatBox.addEventListener('wheel', (e) => {
    if (e.deltaY < 0) {
      autoScrollEnabled = false;
    } else {
      // 向下滚动且接近底部（小于等于30px）时，自动恢复吸底
      const isAtBottom = chatBox.scrollHeight - chatBox.scrollTop - chatBox.clientHeight <= 30;
      if (isAtBottom) {
        autoScrollEnabled = true;
      }
    }
  }, { passive: true });

  // 触摸滑动检测
  let lastTouchY = 0;
  chatBox.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches[0]) lastTouchY = e.touches[0].clientY;
  }, { passive: true });
  chatBox.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      const touchY = e.touches[0].clientY;
      if (touchY > lastTouchY + 5) {
        autoScrollEnabled = false;
      }
      lastTouchY = touchY;
    }
  }, { passive: true });

  // 双击聊天窗口：切换为保持底部模式，并立即滚动至底部
  chatBox.addEventListener('dblclick', () => {
    autoScrollEnabled = true;
    scrollToBottom(true);
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
      else inputEl.placeholder = "输入指令... (Enter 发送, Shift+Enter 换行)";
    });
  });

  // Enter 键发送消息，Shift + Enter 换行，支持输入法组合键保护
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
      e.preventDefault();
      sendBtn.click();
    }
  });

  const modelOptions = {
    gemini: [
      { value: 'gemini-flash-latest', text: 'Flash' },
      { value: 'gemini-flash-lite-latest', text: 'Flash Lite' }
    ],
    openai: [
      { value: 'gpt-4o', text: 'GPT-4o' },
      { value: 'gpt-4o-mini', text: 'GPT-4o mini' }
    ],
    claude: [
      { value: 'claude-3-5-sonnet-20240620', text: 'Claude 3.5 Sonnet' },
      { value: 'claude-3-haiku-20240307', text: 'Claude 3 Haiku' }
    ]
  };

  let savedConfigs = { local: "http://127.0.0.1:1234", gemini: "", openai: "", claude: "" };
  chrome.storage.local.get(['savedConfigs'], (data) => {
    if (data.savedConfigs) {
      savedConfigs = { ...savedConfigs, ...data.savedConfigs };
      // 兼容旧版配置 cloud -> gemini
      if (data.savedConfigs.cloud && !savedConfigs.gemini) {
        savedConfigs.gemini = data.savedConfigs.cloud;
      }
    }
    updateUI(); 
  });

  dynamicPath.addEventListener('input', () => {
    const mode = modelSelector.value.toLowerCase();
    savedConfigs[mode] = dynamicPath.value.trim();
    chrome.storage.local.set({ savedConfigs });
    if (mode === 'local') updateBadge();
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

  const updateBadge = async () => {
    const mode = modelSelector.value.toLowerCase();
    const badge = document.getElementById('model-badge');
    if (mode === 'local') {
      let baseUrl = (dynamicPath.value.trim() || "http://127.0.0.1:1234").replace(/\/+$/, '');
      if (!baseUrl.endsWith('/v1')) baseUrl += '/v1';
      badge.innerText = await detectLocalModel(baseUrl);
    } else {
      const selectedOption = cloudModelSelect.options[cloudModelSelect.selectedIndex];
      const modelName = selectedOption ? selectedOption.text : mode.toUpperCase();
      badge.innerText = `☁️ ${modelName}`;
    }
  };

  const updateUI = async () => {
    const mode = modelSelector.value.toLowerCase(); 
    
    if (mode === 'local') {
      cloudModelSelect.style.display = 'none'; 
      dynamicPath.placeholder = "输入本地接口 (如 http://127.0.0.1:1234)";
      dynamicPath.value = savedConfigs.local || "http://127.0.0.1:1234"; 
    } else {
      cloudModelSelect.style.display = 'block'; 
      cloudModelSelect.innerHTML = '';
      const opts = modelOptions[mode] || [];
      opts.forEach(opt => {
        const optionEl = document.createElement('option');
        optionEl.value = opt.value;
        optionEl.text = opt.text;
        cloudModelSelect.appendChild(optionEl);
      });

      if (mode === 'gemini') dynamicPath.placeholder = "在此输入 Gemini API Key";
      else if (mode === 'openai') dynamicPath.placeholder = "在此输入 OpenAI API Key";
      else if (mode === 'claude') dynamicPath.placeholder = "在此输入 Anthropic Claude API Key";
      
      dynamicPath.value = savedConfigs[mode] || ""; 
    }
    await updateBadge();
  };

  modelSelector.addEventListener('change', updateUI);
  cloudModelSelect.addEventListener('change', updateBadge);

  async function getActiveTabContent() {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (!tab) return "无法获取标签页。";
      if (tab.url.startsWith('chrome://') || tab.url.startsWith('edge://')) return "禁止在此页面运行。";
      const [{result}] = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => document.body.innerText,
      });
      return result.substring(0, 8000); 
    } catch (e) {
      return `读取失败: ${e.message}`;
    }
  }

  // === 文件队列与多文件支持系统 ===
  const fileUploadEl = document.getElementById('file-upload');
  const filePreviewList = document.getElementById('file-preview-list');
  let attachedFiles = [];

  function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }

  function getFileCategory(file) {
    const ext = file.name.split('.').pop().toLowerCase();
    if (ext === 'pdf') return 'pdf';
    if (['png', 'jpg', 'jpeg', 'webp', 'gif'].includes(ext)) return 'image';
    return 'text';
  }

  function getFileIcon(category) {
    if (category === 'pdf') return '📕';
    if (category === 'image') return '🖼️';
    return '📝';
  }

  function renderFileList() {
    filePreviewList.innerHTML = '';
    attachedFiles.forEach((f, index) => {
      const chip = document.createElement('div');
      chip.className = 'file-chip';
      
      const icon = document.createElement('span');
      icon.className = 'file-chip-icon';
      icon.innerText = getFileIcon(f.category);

      const body = document.createElement('div');
      body.className = 'file-chip-body';

      const name = document.createElement('span');
      name.className = 'file-chip-name';
      name.title = f.file.name;
      name.innerText = f.file.name;

      const meta = document.createElement('div');
      meta.className = 'file-chip-meta';
      const sizeSpan = document.createElement('span');
      sizeSpan.innerText = formatFileSize(f.file.size);
      const statusSpan = document.createElement('span');
      statusSpan.id = `file-status-${f.id}`;
      statusSpan.innerText = f.statusText || '解析中...';
      meta.appendChild(sizeSpan);
      meta.appendChild(statusSpan);

      const progress = document.createElement('div');
      progress.className = 'file-chip-progress';
      const bar = document.createElement('div');
      bar.className = 'file-chip-bar';
      bar.id = `file-bar-${f.id}`;
      bar.style.width = `${f.progress}%`;
      if (f.status === 'error') bar.style.background = '#cf222e';
      progress.appendChild(bar);

      body.appendChild(name);
      body.appendChild(meta);
      body.appendChild(progress);

      const removeBtn = document.createElement('button');
      removeBtn.className = 'file-chip-remove';
      removeBtn.innerHTML = '✖';
      removeBtn.title = '移除此文件';
      removeBtn.onclick = (e) => {
        e.stopPropagation();
        attachedFiles.splice(index, 1);
        renderFileList();
      };

      chip.appendChild(icon);
      chip.appendChild(body);
      chip.appendChild(removeBtn);
      filePreviewList.appendChild(chip);
    });
  }

  function compressAndReadImage(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const maxDim = 2048;
          let w = img.width;
          let h = img.height;
          if (w > maxDim || h > maxDim) {
            if (w > h) {
              h = Math.round((h * maxDim) / w);
              w = maxDim;
            } else {
              w = Math.round((w * maxDim) / h);
              h = maxDim;
            }
          }
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);
          const mimeType = file.type === 'image/png' ? 'image/png' : 'image/jpeg';
          resolve(canvas.toDataURL(mimeType, 0.85));
        };
        img.onerror = () => resolve(e.target.result);
        img.src = e.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function processSingleFile(fileObj) {
    const { file, category, id } = fileObj;
    const updateProgress = (pct, text) => {
      fileObj.progress = pct;
      fileObj.statusText = text;
      const bar = document.getElementById(`file-bar-${id}`);
      const statusEl = document.getElementById(`file-status-${id}`);
      if (bar) bar.style.width = `${pct}%`;
      if (statusEl) statusEl.innerText = text;
    };

    try {
      if (category === 'pdf') {
        updateProgress(15, '载入引擎...');
        if (typeof pdfjsLib === 'undefined') {
          throw new Error("PDF解析器尚未就绪");
        }
        pdfjsLib.GlobalWorkerOptions.workerSrc = chrome.runtime.getURL('pdf.worker.min.js');
        const arrayBuffer = await file.arrayBuffer();
        updateProgress(35, '读取文档...');
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let fullText = '';
        const maxPages = Math.min(pdf.numPages, 50);
        for (let i = 1; i <= maxPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          const pageText = textContent.items.map(item => item.str).join(' ');
          fullText += `[第${i}页] ${pageText}\n`;
          const currentPct = 35 + Math.round((i / maxPages) * 60);
          updateProgress(currentPct, `已读 ${i}/${maxPages} 页`);
        }
        fileObj.textContent = fullText;
        fileObj.status = 'ready';
        updateProgress(100, '已就绪');
      } else if (category === 'image') {
        updateProgress(30, '处理图像...');
        const dataUrl = await compressAndReadImage(file);
        fileObj.dataUrl = dataUrl;
        fileObj.status = 'ready';
        updateProgress(100, '已就绪');
      } else {
        updateProgress(30, '载入文本...');
        const text = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve(e.target.result);
          reader.onerror = reject;
          reader.readAsText(file);
        });
        fileObj.textContent = text;
        fileObj.status = 'ready';
        updateProgress(100, '已就绪');
      }
    } catch (err) {
      fileObj.status = 'error';
      fileObj.error = err.message;
      updateProgress(100, '失败: ' + err.message.slice(0, 15));
      const bar = document.getElementById(`file-bar-${id}`);
      if (bar) bar.style.background = '#cf222e';
    }
  }

  function addFiles(newFiles) {
    if (!newFiles || newFiles.length === 0) return;
    for (let i = 0; i < newFiles.length; i++) {
      const file = newFiles[i];
      if (attachedFiles.some(f => f.file.name === file.name && f.file.size === file.size)) continue;
      const fileObj = {
        id: 'f_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        file: file,
        category: getFileCategory(file),
        status: 'parsing',
        statusText: '处理中...',
        progress: 10,
        textContent: null,
        dataUrl: null,
        error: null
      };
      attachedFiles.push(fileObj);
      processSingleFile(fileObj);
    }
    renderFileList();
  }

  // 文件按钮上传
  fileUploadEl.addEventListener('change', (e) => {
    addFiles(e.target.files);
    fileUploadEl.value = '';
  });

  // 拖拽文件进入
  const dropZone = inputContainer;
  ['dragenter', 'dragover'].forEach(evtName => {
    document.body.addEventListener(evtName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.add('drag-over');
    });
  });
  ['dragleave', 'drop'].forEach(evtName => {
    document.body.addEventListener(evtName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.remove('drag-over');
    });
  });
  document.body.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.remove('drag-over');
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      addFiles(e.dataTransfer.files);
    }
  });

  // 复制粘贴文件
  inputEl.addEventListener('paste', (e) => {
    const clipboardData = e.clipboardData || window.clipboardData;
    if (!clipboardData) return;
    const items = clipboardData.items;
    const files = [];
    if (items) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].kind === 'file') {
          const file = items[i].getAsFile();
          if (file) files.push(file);
        }
      }
    }
    if (files.length > 0) {
      addFiles(files);
    }
  });

  // === 4. 对话逻辑 ===
  sendBtn.addEventListener('click', async () => {
    let userText = inputEl.value.trim();
    const mode = modelSelector.value.toLowerCase();
    const pathValue = dynamicPath.value.trim();
    
    if (!userText && attachedFiles.length === 0 && currentTask !== 'analyze') return;

    // 检查是否有仍在解析中的文件
    const stillParsing = attachedFiles.some(f => f.status === 'parsing');
    if (stillParsing) {
      appendMessage('ai', '⏳ 正在等待文件解析完成，请稍候再点击发送...');
      return;
    }

    // 汇总多文件文本与图片
    let attachmentText = "";
    const images = [];
    const fileLabels = [];

    attachedFiles.forEach(f => {
      if (f.status === 'ready') {
        fileLabels.push(f.file.name);
        if (f.category === 'pdf') {
          attachmentText += `\n\n[PDF内容: ${f.file.name}]\n${f.textContent}\n`;
        } else if (f.category === 'text') {
          attachmentText += `\n\n[附件内容: ${f.file.name}]\n${f.textContent}\n`;
        } else if (f.category === 'image' && f.dataUrl) {
          images.push({ name: f.file.name, dataUrl: f.dataUrl });
        }
      }
    });

    let displayFileSummary = "";
    if (fileLabels.length > 0) {
      displayFileSummary = `\n📎 附带文件 (${fileLabels.length}): ${fileLabels.join(', ')}`;
    }

    let finalPrompt = userText;
    if (currentTask === 'translate') {
      finalPrompt = `请将以下内容翻译为流畅的中文（若是中文则翻译为英语法语和日语）。直接输出翻译结果：\n\n${userText}${attachmentText}`;
      appendMessage('user', `[翻译任务] \n${userText}${displayFileSummary}`, true, userText);
    } else if (currentTask === 'analyze') {
      appendMessage('ai', '正在抓取网页...');
      const pageText = await getActiveTabContent();
      const question = userText || '请提炼出核心摘要。';
      finalPrompt = `[网页文本开始]\n${pageText}\n[网页文本结束]${attachmentText}\n\n请完成任务：${question}`;
      if (userText || fileLabels.length > 0) appendMessage('user', `[网页分析] ${question}${displayFileSummary}`);
    } else {
      finalPrompt = `${userText}${attachmentText}`;
      if (userText || fileLabels.length > 0) appendMessage('user', `${userText || '（已发送附件）'}${displayFileSummary}`);
    }

    inputEl.value = '';
    attachedFiles = [];
    renderFileList();
    autoScrollEnabled = true;
    scrollToBottom(true);
    const aiResponseEl = appendMessage('ai', '正在响应...');

    try {
      if (mode === 'local') {
        let baseUrl = pathValue.replace(/\/+$/, '');
        if (!baseUrl.endsWith('/v1')) baseUrl += '/v1';

        let content;
        if (images.length > 0) {
          content = [];
          images.forEach(img => {
            content.push({ type: "image_url", image_url: { url: img.dataUrl } });
          });
          content.push({ type: "text", text: finalPrompt || "请详细分析和描述以上图片中的内容。" });
        } else {
          content = finalPrompt;
        }

        const response = await fetch(`${baseUrl}/chat/completions`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ model: "local-model", messages: [{ role: "user", content: content }], temperature: 0.3 })
        });
        if (!response.ok) throw new Error(`HTTP ${response.status} 错误。`);
        const data = await response.json();
        simulateTypewriter(aiResponseEl, data.choices[0].message.content, saveScreenToStorage);

      } else if (mode === 'gemini') {
        if (!pathValue) throw new Error("请先输入有效的 Gemini API Key。");
        const selectedCloudModel = cloudModelSelect.value;
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${selectedCloudModel}:generateContent?key=${pathValue}`;
        
        let parts = [];
        images.forEach(img => {
          const b64Data = img.dataUrl.split(',')[1];
          const mimeType = img.dataUrl.split(';')[0].split(':')[1] || 'image/jpeg';
          parts.push({
            inlineData: {
              mimeType: mimeType,
              data: b64Data
            }
          });
        });
        parts.push({ text: finalPrompt || "请详细分析和描述以上图片中的内容。" });

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          referrerPolicy: "no-referrer",
          body: JSON.stringify({ contents: [{ parts }] })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error?.message || `Gemini 云端请求失败`);
        simulateTypewriter(aiResponseEl, data.candidates[0].content.parts[0].text, saveScreenToStorage);

      } else if (mode === 'openai') {
        if (!pathValue) throw new Error("请先输入有效的 OpenAI API Key。");
        const selectedCloudModel = cloudModelSelect.value;
        let content;
        if (images.length > 0) {
          content = [];
          images.forEach(img => {
            content.push({ type: "image_url", image_url: { url: img.dataUrl } });
          });
          content.push({ type: "text", text: finalPrompt || "请详细分析和描述以上图片中的内容。" });
        } else {
          content = finalPrompt;
        }

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${pathValue}`
          },
          body: JSON.stringify({
            model: selectedCloudModel || "gpt-4o-mini",
            messages: [{ role: "user", content: content }],
            temperature: 0.3
          })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error?.message || `OpenAI 请求失败 HTTP ${response.status}`);
        simulateTypewriter(aiResponseEl, data.choices[0].message.content, saveScreenToStorage);

      } else if (mode === 'claude') {
        if (!pathValue) throw new Error("请先输入有效的 Anthropic API Key。");
        const selectedCloudModel = cloudModelSelect.value;
        let content;
        if (images.length > 0) {
          content = [];
          images.forEach(img => {
            const b64Data = img.dataUrl.split(',')[1];
            const mediaType = img.dataUrl.split(';')[0].split(':')[1] || 'image/jpeg';
            content.push({
              type: "image",
              source: { type: "base64", media_type: mediaType, data: b64Data }
            });
          });
          content.push({ type: "text", text: finalPrompt || "请详细分析和描述以上图片中的内容。" });
        } else {
          content = finalPrompt;
        }

        const response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': pathValue,
            'anthropic-version': '2023-06-01',
            'anthropic-dangerous-direct-browser-access': 'true'
          },
          body: JSON.stringify({
            model: selectedCloudModel || "claude-3-5-sonnet-20240620",
            messages: [{ role: "user", content: content }],
            max_tokens: 4096
          })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error?.message || `Claude 请求失败 HTTP ${response.status}`);
        simulateTypewriter(aiResponseEl, data.content[0].text, saveScreenToStorage);
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
  scrollToBottom(true);
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

let autoScrollEnabled = true;

function scrollToBottom(force = false) {
  const chatBox = document.getElementById('chat-box');
  if (!chatBox) return;
  if (force || autoScrollEnabled) {
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsText(file);
  });
}