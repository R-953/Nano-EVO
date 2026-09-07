# Nano-EVO

<p align="center">
    <img src="https://github.com/R-953/Nano-EVO/blob/main/Extension/icon.jpg">
</p>

自用瀏覽器側邊欄擴充功能
## 基於原生 JavaScript 編寫，添加瀏覽器原生側邊欄，深度支援 Local 本地側載大模型與 Gemini / OpenAI / Claude 多廠商雲端 API，現已全面適配 Chromium 與 Firefox 雙核心

<p align="center">
  <a href="../README.md">English</a> •  
  <a href="./README_fr.md">Français</a> • 
  <a href="./README_ja.md">日本語</a> • 
  <a href="./README_zh-Hans.md">简体中文</a> • 
  <a href="./README_zh_Hant.md">繁體中文</a> • 
</p>

<h3 align="center"> 相容瀏覽器：</h3>

<p align="center">
  <img src="https://img.shields.io/badge/Chromium-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Chrome-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Edge-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Brave-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Opera-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Firefox-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Safari-%C3%97-red?style=for-the-badge">
  <img src="https://img.shields.io/badge/etc.-white?style=for-the-badge">
</p>

<h3 align="center"> 相容本地應用：</h3> 

<p align="center">
  <img src="https://img.shields.io/badge/Ollama GUI-Fully Compatibly-brightgreen">
  <img src="https://img.shields.io/badge/LM Studio-Fully Compatibly-brightgreen">
  <img src="https://img.shields.io/badge/GPT4All-Fully Compatibly-brightgreen">
  <img src="https://img.shields.io/badge/Cherry Studio-Fully Compatibly-brightgreen">
  <img src="https://img.shields.io/badge/Chatbox-Fully Compatibly-brightgreen">
  <img src="https://img.shields.io/badge/AnythingLLM-Fully Compatibly-brightgreen">  
  <img src="https://img.shields.io/badge/Ollama-Fully Compatibly-brightgreen">
  <img src="https://img.shields.io/badge/vLLM-Fully Compatibly-brightgreen">
  <img src="https://img.shields.io/badge/Local AI-Fully Compatibly-brightgreen">
  <img src="https://img.shields.io/badge/llama.cpp-Partial Compatibly-yellow">
  <img src="https://img.shields.io/badge/etc.-white">
</p>

<h3 align="center"> 相容雲端服務：</h3> 

<p align="center">
  <img src="https://img.shields.io/badge/Google Gemini-Fully Compatibly-brightgreen?style=for-the-badge">
  <img src="https://img.shields.io/badge/OpenAI GPT-Fully Compatibly-brightgreen?style=for-the-badge">  
  <img src="https://img.shields.io/badge/Anthropic Claude-Fully Compatibly-brightgreen?style=for-the-badge">
  <img src="https://img.shields.io/badge/DeepSeek-Fully Compatibly-brightgreen?style=for-the-badge">
  <img src="https://img.shields.io/badge/Alibaba Qwen-Fully Compatibly-brightgreen?style=for-the-badge">
  <img src="https://img.shields.io/badge/Moonshot Kimi-Fully Compatibly-brightgreen?style=for-the-badge">
  <img src="https://img.shields.io/badge/xAI Grok-Partial Compatibly-yellow?style=for-the-badge">
  <img src="https://img.shields.io/badge/Meta Muse-Partial Compatibly-yellow?style=for-the-badge">
  <img src="https://img.shields.io/badge/Z GLM-Partial Compatibly-yellow?style=for-the-badge">
  <img src="https://img.shields.io/badge/etc.-white?style=for-the-badge">
</p>

## 詳細介紹

### 本地模式 (Local Mode)
- **多客戶端無縫相容**：完美支援 LM Studio、Ollama、vLLM、AnythingLLM、Chatbox、Cherry Studio 等本地部署大模型；
- **智慧端點識別與補齊**：自動補齊 `/v1` 路徑，輸入 `http://127.0.0.1:1234` 即可自動對接 `/v1/chat/completions` 標準介面；
- **模型動態探測**：左下角狀態列自動輪詢 `${baseUrl}/models`，即時提取並展示當前載入之模型名稱；
- **雙核心獨立分支**：提供 Chromium 原生版（基於 `chrome.sidePanel`）與 Firefox 專屬版（基於 `sidebar_action`）；
- **劃詞翻譯與網頁總結**：選取文字右鍵一鍵翻譯，或在網頁空白處右鍵自動提取正文並總結大綱；
- **日文漢字本地注音 (Furigana)**：內建輕量級 Kuromoji 分詞器與離線辭典，右鍵為日文網頁標注振假名；
- **閱後即焚與匯出**：支援將完整對話匯出為 Markdown 格式；開啟「閱後即焚（👻）」關閉側欄自動清空紀錄；
- **語音朗讀 (TTS)**：內建自動語言探測，支援繁簡中文、英語、法語及日語輸出。

### 雲端模式 (Cloud Mode)
- **多廠商雲端 API 聚合**：
  - **Google Gemini**：官方適配 `gemini-flash-latest` (Flash) 與 `gemini-flash-lite-latest` (Flash Lite)；
  - **OpenAI**：支援 `gpt-4o` 與 `gpt-4o-mini` 官方介面；
  - **Anthropic Claude**：支援 `claude-3-5-sonnet-20240620` 與 `claude-3-haiku-20240307` 官方介面；
- **獨立儲存金鑰**：各廠商 API Key 與端點各自獨立儲存，切換模型免重複填寫。

### 文件、媒體與多模態輸入 (Multimodal & File Input)
- **離線 PDF 本地解析**：內建 `pdf.js`，拖入 PDF 即可在瀏覽器端提取全文，不耗流量，完全隱私；
- **影像多模態辨識 (Vision)**：支援 `.png, .jpg, .jpeg, .webp`，內建 Canvas 智慧等比壓縮（最大 2048px），自動適配 Gemini `inlineData`、OpenAI `image_url` 與 Claude `base64`；
- **批量多檔案同時支援**：支援一次性選取、拖入或貼上 2 個以上不同格式檔案；
- **拖曳 (Drag & Drop) 與剪貼簿貼上 (Ctrl+V)**：
  - 支援桌面檔案直接拖入輸入區；
  - 支援 `Ctrl + V` 直接貼上螢幕截圖或剪貼簿檔案；
- **可視化檔案清單與進度條**：直觀呈現待傳檔案、檔案大小、即時解析進度條與一鍵移除功能。

### 人性化互動體驗 (Ergonomics)
- **鍵盤快捷鍵**：**Enter** 直接傳送，**Shift + Enter** 換行；具備 `!e.isComposing` 檢查，中文注音/拼音選字時不誤發；
- **智慧滾動機制**：
  - **自由滾動**：輸出長內容時，向上滑動滾輪即刻解除強制吸底，方便閱讀上方內容；
  - **雙擊回底**：雙擊聊天區域空白處，或滾回底部附近，立即恢復自動跟隨輸出。

---

## 安裝方式

### 1. Chromium 核心瀏覽器 (Chrome / Edge / Brave 等)
1. 進入瀏覽器擴充功能管理頁（`chrome://extensions`）；
2. 開啟右上角 **開發者模式**；
3. 點選 **載入未打包項目 (Load unpacked)**；
4. 選取本專案目錄下的 `Main/Chromium/6.907.13.41` 資料夾。

### 2. Firefox 核心瀏覽器 (Firefox / Floorp 等)
1. 進入 `about:debugging#/runtime/this-firefox`；
2. 點選 **載入暫時性附加元件...**；
3. 選取本專案目錄下的 `Main/Firefox/6.907.13.41/manifest.json` 檔案。

---

## 聲明
本專案遵守 [MIT License](https://github.com/R-953/Nano-EVO/blob/main/LICENSE)，所有資料均於瀏覽器本地處理，不主動上傳或留存任何對話紀錄與金鑰。
