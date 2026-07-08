# Nano-EVO

<p align="center">
    <img src="https://github.com/R-953/Nano-EVO/blob/main/Extension/icon.jpg">
</p>

自用瀏覽器側邊欄擴充功能
## 基於 Javascript 編寫，新增瀏覽器原生側邊欄，同時支援本機大型模型和 Gemini 雲端服務

<p align="center">
  <a href="../README.md">English</a> •  
  <a href="https://github.com/R-953/Nano-EVO/blob/829057c776eb7ecbd2dd24c1b9aec0745a611ec5/Instruction/README_fr.md">Français</a> • 
  <a href="https://github.com/R-953/Nano-EVO/blob/829057c776eb7ecbd2dd24c1b9aec0745a611ec5/Instruction/README_ja.md">日本語</a> • 
  <a href="https://github.com/R-953/Nano-EVO/blob/829057c776eb7ecbd2dd24c1b9aec0745a611ec5/Instruction/README_zh-Hans.md">简体中文</a> • 
  <a href="https://github.com/R-953/Nano-EVO/blob/829057c776eb7ecbd2dd24c1b9aec0745a611ec5/Instruction/README_zh-Hant.md">繁體中文</a> • 
</p>

<h3 align="center"> 相容瀏覽器：</h3>

<p align="center">
  <img src="https://img.shields.io/badge/Chromium-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Chrome-%E2%88%9A-greem?style=for-the-badge">
  <img src="https://img.shields.io/badge/Edge-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Brave-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Opera-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Safari-%C3%97-red?style=for-the-badge">
  <img src="https://img.shields.io/badge/Firefox-%C3%97-red?style=for-the-badge">
  <img src="https://img.shields.io/badge/etc.-white?style=for-the-badge">
</p>

<h3 align="center"> 相容本機應用程式：</h3> 

<p align="center">
    <img src="https://img.shields.io/badge/Ollama GUI-Fully Compatibly-brightgreen">
  <img src="https://img.shields.io/badge/LM Studio-Fully Compatibly-brightgreen">
  <img src="https://img.shields.io/badge/GPT4All-Fully Compatibly-brightgreen">
  <img src="https://img.shields.io/badge/Cherry Studio-Fully Compatibly-brightgreen">
  <img src="https://img.shields.io/badge/Chatbox-Fully Compatibly-brightgreen">
  <img src="https://img.shields.io/badge/AnythingLLM-Fully Compatibly-brightgreen">  
  <img src="https://img.shields.io/badge/Ollama-Partial Compatibly-yellow">
  <img src="https://img.shields.io/badge/vLLM-Partial Compatibly-yellow">
  <img src="https://img.shields.io/badge/llama.cpp-Non Compatibly-red">
  <img src="https://img.shields.io/badge/Local AI-Non Compatibly-red">
  <img src="https://img.shields.io/badge/etc.-white">
</p>

<h3 align="center"> 相容雲端服務：</h3> 

<p align="center">
  <img src="https://img.shields.io/badge/Google Gemini-Fully Compatibly-brightgreen?style=for-the-badge">
  <img src="https://img.shields.io/badge/Meta Muse-Partial Compatibly-yellow?style=for-the-badge">
  <img src="https://img.shields.io/badge/xAI Grok-Partial Compatibly-yellow?style=for-the-badge">
  <img src="https://img.shields.io/badge/DeepSeek-Partial Compatibly-yellow?style=for-the-badge">
  <img src="https://img.shields.io/badge/Alibaba Qwen-Partial Compatibly-yellow?style=for-the-badge">
  <img src="https://img.shields.io/badge/Moonshot Kimi-Partial Compatibly-yellow?style=for-the-badge">
  <img src="https://img.shields.io/badge/Anthropic Claude-Non Compatibly-red?style=for-the-badge">
  <img src="https://img.shields.io/badge/OpenAI GPT-Non Compatibly-red?style=for-the-badge">  
  <img src="https://img.shields.io/badge/Z GLM-Non Compatibly-red?style=for-the-badge">
  <img src="https://img.shields.io/badge/etc.-white?style=for-the-badge">
</p>

## 詳細介紹

### 本機模式
- 支援 **本機已部署** 的大型語言模型；
- 支援 **本機模式** 和 **修改代理通訊埠**，並且在左下角 **即時顯示模型具體參數**，包含 **模型名稱**、**版本號** 以及 **參數**；
- 支援 **右鍵選單** 在瀏覽器中開啟側邊欄，也可以 **按一下擴充功能** 開啟側邊欄，**再次點擊** 可以關閉側邊欄；
> 需要 **執行並側載** 模型後開放 **本機回環位址通訊埠**，且啟用 **本機 API 服務**、**跨來源資源共用 (CORS)**；
- 支援 **選取翻譯** 成多種語言，目前預設翻譯成 **簡體中文**、**美式英語**、**加拿大法語** 和 **日語**；
> 可在 JS 檔案中修改提示詞，增加或刪除大型模型在翻譯時輸出的語言；
- 支援 **網頁總結** 當前頁面；
> 可以在輸入列中針對當前網頁 **提出問題** 或 **留白直接發送**，輸入為空時大型模型會 **自動擷取** 當前網頁的主要內容，並 **簡潔地總結** 其大綱；
- 支援 **匯出聊天紀錄** 至 *Markdown* 格式、以及 **閱後即焚** 功能；
> 開啟時關閉側邊欄後會 **自動清除當前全部聊天紀錄**，預設情況下關閉側邊欄後不會 **自動刪除當前聊天紀錄**，當然也可以選擇手動刪除；
- 支援 **部分格式** 的檔案輸入；
> 同時還要取決於 **本機大型模型的型號**：若使用 **純文字類模型** 則無法接受圖片輸入，推薦優先側載支援圖片輸入的 **多模態大型模型**，雖然目前僅支援 **純文字格式** 的檔案輸入。
- 支援 **文字轉語音 (TTS)** 功能，在聊天和總結介面支援朗讀 **模型輸出**，在翻譯介面支援朗讀 **使用者輸入** 和 **模型輸出**，目前僅支援 **簡體中文**、**美式英語**、**加拿大法語** 和 **日本語**。
> 在使用除 *Brave* 外的 *Chromium* 瀏覽器時，瀏覽器會預設呼叫 *Google Network Voices* 輸出朗讀，由於 *Brave* 瀏覽器預設 **刪除** 了此服務，需要在電腦本機 **完整部署** 四種語言套件後才能支援除 **美式英語** 外的另三種語言。
  
### 雲端模式
- 支援透過 *API Key* 呼叫 **部分雲端模型**；
> [!NOTE]
> 需要產生一組可用的 API 金鑰，目前僅支援 *Google Gemini*，透過 *API Key* 呼叫的模型包含但不限於 *Google Gemini 3.1 Flash Lite*、*Google Gemini 3.5 Flash*，當前僅適配了兩者，可在 JS 檔案中修改呼叫連結中的參數使用包含但不限於 *Google Gemini 3.1 Pro* 等模型，**[此頁面](https://ai.google.dev/gemini-api/docs/rate-limits)** 顯示了所有支援的模型；

> [!IMPORTANT]
> 以 *Google Gemini* 為例，需要在 *[Google AI Studio](https://aistudio.google.com)* 中登入自己的帳號，點擊左下角 *Get API Key*，右上角 **建立 API 金鑰**，完成 **為專案命名** 和 **設定帳單資訊** 後，即可複製 *API Key* 貼上到模型下的輸入框中；
- 支援 **選取翻譯** 成多種語言，目前預設翻譯成 **簡體中文**、**美式英語**、**加拿大法語** 和 **日本語**；
> 可在 JS 檔案中修改提示詞，增加或刪除翻譯時輸出的語言；
- 支援 **網頁總結** 當前頁面；
> 可以在輸入列中針對當前網頁 **提出問題** 或 **留白直接發送**，輸入為空時大型模型會 **自動擷取** 當前網頁的主要內容，並 **簡潔地總結** 其大綱；
- 支援 **匯出聊天紀錄** 至 *Markdown* 格式，以及 **閱後即焚** 功能；
> 開啟時關閉側邊欄後會 **自動清除當前全部聊天紀錄**，預設情況下關閉側邊欄後不會 **自動刪除當前聊天紀錄**，當然也可以選擇手動刪除；
- 支援 **部分格式** 的檔案輸入；
> 同時還要取決於 **雲端大型模型的型號**：若使用 **純文字類模型** 則無法接受圖片輸入，推薦優先側載支援圖片輸入的 **多模態大型模型**，雖然目前僅支援 **純文字格式** 的檔案輸入。
- 支援 **文字轉語音 (TTS)** 功能，在聊天和總結介面支援朗讀 **模型輸出**，在翻譯介面支援朗讀 **使用者輸入** 和 **模型輸出**，目前僅支援 **簡體中文**、**美式英語**、**加拿大法語** 和 **日本語**。
> 在使用除 *Brave* 外的 *Chromium* 瀏覽器時，瀏覽器會預設呼叫 *Google Network Voices* 輸出朗讀，由於 *Brave* 瀏覽器預設 **刪除** 了此服務，需要在電腦本機 **完整部署** 四種語言套件後才能支援除 **美式英語** 外的另三種語言。

## 安裝方式
> [!IMPORTANT]
> 本擴充功能目前僅支援透過 **載入未封裝的擴充功能** 以及 **匯入壓縮檔** 的方式手動安裝。
<p align="center">
  <img src="https://img.shields.io/badge/Chrome Web Store-%C3%97-red?">
  <img src="https://img.shields.io/badge/Edge Addons-%C3%97-red?">
  <img src="https://img.shields.io/badge/Firefox Addons-%C3%97-red?">
  <img src="https://img.shields.io/badge/Safari Extension-%C3%97-red?">
</p>

## 聲明

### 請注意，本專案用作個人測試和學習程式碼
### 請注意，本專案遵守 [MIT License](https://github.com/R-953/Nano-EVO/blob/main/LICENSE)，被授權人在軟體和軟體的所有副本中都必須包含以上著作權聲明和本許可聲明，被授權人和使用者執行本專案，該行為視為與已詳細、完整閱讀過此聲明、MIT 授權條款原文、雲端服務提供商的隱私權條款和免責聲明這一行為等價。
### 請注意，本專案不會讀取、執行任何除了專案執行必需以外的本機檔案，除了：
- 本專案執行必須依賴的程式碼
- 本機設備側載的大型模型檔案
- 與大型模型對話時上傳的檔案
- 與大型模型對話時匯出的檔案
> 本專案產生的所有資料都應儲存在瀏覽器內；
> 本專案同時也不會儲存、上傳、修改任何有關與本機大型模型和雲端大型模型的資料，包含但不限於：聊天紀錄、翻譯歷史、網頁總結、*API Key* 等。
> 除非上述提到的資料被手動匯出到本機、上傳至雲端，
## 該行為導致的後果與本專案無任何關聯，作者本人和提供雲端服務的公司也不承擔任何因為使用本專案產生的後果
### 請注意，本專案執行不依賴任何額外的權限，除了：
- 在瀏覽器中執行所需的權限
- 釘選到工作列所需的權限
- 存取檔案位址所需的權限
### 請注意，本專案的本機模式，提供離線存取本機大型語言模型的能力，因此使用本機模式時可以完全斷開與網際網路的連線；
> 由於 *Gemini* 是 *Google LLC* 推出的雲端人工智慧服務，所以在 **雲端模式** 下透過 *API Key* 使用 *Google LLC* 提供的雲端服務時，穩定的網際網路連線是必要條件。
> 請注意，本專案無法得知在雲端模式下雲端大型模型的輸出在經由伺服器發送回本專案之前的安全和隱私性，請[在此](https://policies.google.com/privacy?hl=zh-TW)參閱有關 *Google LLC* 的隱私權政策和免責聲明等條款。
### 本專案與本檔案中提到的任何公司、品牌、商標、專案或產品均無關聯，詳細說明如下：
- *Ollama GUI* 是相關權利人的開源專案，*Ollama GUI* 是為 *Ollama* 打造的圖形使用者介面用戶端；
- *LM Studio* 是 *LM Studio* 的註冊商標，*LM Studio* 是 *LM Studio* 推出的一站式本機大型模型執行平台；
- *GPT4All* 是 *Nomic AI* 的註冊商標，*GPT4All* 是 *Nomic AI* 推出的開源本機大型模型執行平台；
- *Cherry Studio* 是其開發者團隊的開源專案，*Cherry Studio* 是專為專業使用者設計的桌面級 *AI* 多模型用戶端；
- *Chatbox* 是其開發者團隊的開源專案，*Chatbox* 是多平台通用的 *AI* 用戶端與智慧助手；
- *AnythingLLM* 是 *Mintplex Labs Inc.* 的註冊商標，*AnythingLLM* 是其推出的企業級全功能本機知識庫與 *AI* 代理平台；
- *Ollama* 是 *Ollama Inc.* 的註冊商標，*Ollama* 是其推出的本機大型語言模型執行框架；
- *vLLM* 是其開源社群的代表性專案，*vLLM* 是一個高吞吐量、低延遲的大型模型推論與服務引擎；
- *llama.cpp* 是其開源社群的代表性專案，*llama.cpp* 是基於 *C/C++* 的輕量級大型模型推論框架；
- *Local AI* 是其開源社群的代表性專案，*Local AI* 是與 *OpenAI API* 相容的本機 *AI* 推論與替代方案；
- *Google Gemimi* 是 *Google LLC* 的註冊商標，*Gemini* 是 *Google LLC* 推出的 *AI* 模型雲端服務；
- *Meta Muse* 是 *Meta Platforms, Inc.* 的註冊商標，*Meta Muse Spark* 是 *Meta* 推出的創意 *AI* 輔助設計與互動工具；
- *xAI Grok* 是 *xAI* 的註冊商標，*Grok* 是 *xAI* 推出的具有即時資訊獲取能力的 *AI* 聊天助手；
- *DeepSeek* 是杭州深度求索人工智慧基礎技術研究有限公司的註冊商標，*DeepSeek* 是其推出的一系列開源高效能大型語言模型；
- *Alibaba Qwen* 是阿里巴巴集團的註冊商標，*Qwen*（通義千問）是阿里巴巴推出的超大規模語言模型系列；
- *Moonshot Kimi* 是月之暗面科技有限公司的註冊商標，*Kimi* 是其推出的支援超長文本處理的智慧助手；
- *Anthropic Claude* 是 *Anthropic PBC* 的註冊商標，*Claude* 是 *Anthropic* 推出的安全、誠實、高效能的 *AI* 語言模型；
- *OpenAI GPT* 是 *OpenAI Inc.* 的註冊商標，*GPT* 系列是 *OpenAI* 推出的業界領先的多模態大型語言模型；
- *Z GLM* 是北京智譜華章科技有限公司的註冊商標，*GLM* 是智譜 *AI* 推出的新一代認知大型模型系列。
