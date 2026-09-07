# Nano-EVO

<p align="center">
    <img src="https://github.com/R-953/Nano-EVO/blob/main/Extension/icon.jpg">
</p>

自用浏览器侧边栏扩展程序
## 基于原生 JavaScript 编写，添加浏览器侧边栏，深度支持 Local 侧载大模型与 Gemini / OpenAI / Claude 多厂商云端 API，现已全面适配 Chromium 与 Firefox 双内核

<p align="center">
  <a href="../README.md">English</a> •  
  <a href="./README_fr.md">Français</a> • 
  <a href="./README_ja.md">日本語</a> • 
  <a href="./README_zh-Hans.md">简体中文</a> • 
  <a href="./README_zh_Hant.md">繁體中文</a> • 
</p>

<h3 align="center"> 兼容浏览器：</h3>

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

<h3 align="center"> 兼容本地应用：</h3> 

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

<h3 align="center"> 兼容云服务：</h3> 

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

## 详情介绍

### 本地模式 (Local Mode)
- **多客户端无缝兼容**：完美支持 LM Studio、Ollama、vLLM、AnythingLLM、Chatbox、Cherry Studio 等本地部署大模型；
- **智能端点识别与补齐**：自动补齐 `/v1` 路径，输入 `http://127.0.0.1:1234` 即可自动适配 `/v1/chat/completions` 标准接口；
- **模型动态探测**：左下角状态栏自动轮询 `${baseUrl}/models`，实时提取并展示当前运行的模型名称（如 `Llama-3-8B`）；
- **全平台侧边栏呼出**：支持通过 **右键菜单** 呼出侧边栏，或单击扩展图标直接开启/关闭；
- **双内核独立分支**：同时提供 Chromium 原生版（基于 `chrome.sidePanel`）与 Firefox 专属版（基于 `sidebar_action`）；
- **划词翻译与网页总结**：选中文本右键一键翻译，或在网页任意空白处右键自动提取当前页面正文提炼核心摘要；
- **日文汉字本地注音 (Furigana)**：内置轻量级 Kuromoji 分词器与完整离线词典，右键一键为日文网页添加平假名振假名标注；
- **阅后即焚与会话导出**：支持一键导出当前完整对话为 Markdown 格式；开启“阅后即焚（👻）”模式后关闭侧栏自动清空记录；
- **智能语音朗读 (TTS)**：内置自动语种检测，流畅朗读中文、英语、法语及日语输出。

### 云端模式 (Cloud Mode)
- **多厂商云端 API 聚合**：
  - **Google Gemini**：官方适配 `gemini-flash-latest` (Flash) 与 `gemini-flash-lite-latest` (Flash Lite)，基于稳定 REST 接口；
  - **OpenAI**：支持 `gpt-4o` 与 `gpt-4o-mini` 官方接口；
  - **Anthropic Claude**：支持 `claude-3-5-sonnet-20240620` 与 `claude-3-haiku-20240307` 官方接口；
  - **兼容第三方接口**：可通过 Local 模式或标准 OpenAI 协议无缝对接 DeepSeek、通义千问、Kimi 等服务；
- **配置独立记忆**：各厂商的 API Key 和代理地址各自独立加密存储于本地，切换时无需反复重新输入。

### 文档、媒体与多模态输入 (Multimodal & File Input)
- **离线 PDF 纯本地解析**：内置嵌入式 `pdf.js` 与 Worker 引擎，拖入 PDF 即可瞬间在浏览器本地提取完整文本，**不消耗云端流量，零隐私泄露**；
- **图片多模态识别 (Vision)**：支持上传与拖入 `.png, .jpg, .jpeg, .webp` 图像，内置 Canvas 前置智能等比压缩（最大 2048px），自动适配 Gemini `inlineData`、OpenAI `image_url` 与 Claude `base64` 标准报文；
- **批量多文件并行支持**：允许一次性选中、拖入或粘贴 **2 个及以上的混合格式文件**（同时包含 PDF、图片和代码文档）；
- **拖拽 (Drag & Drop) 与剪贴板粘贴 (Ctrl+V)**：
  - 支持将桌面文件直接拖入输入区，附带高亮交互动画；
  - 支持在输入框内按 `Ctrl + V` 直接粘贴系统截图或剪贴板文件；
- **可视文件卡片与独立进度条**：输入框上方直观展示待发文件清单、文件体积、实时解析进度百分比（如 `已读 5/12 页`），误选可随时点击 `✖` 移除。

### 人性化交互细节 (Ergonomics)
- **键盘快捷键**：支持按 **Enter** 直接发送消息，按 **Shift + Enter** 自由换行；内置 `!e.isComposing` 输入法状态检测，中文拼音选词与日文打字确认时绝不误发；
- **智能滚动机制**：
  - **自由浏览**：模型生成长回答时，用户只要向上滚动鼠标滚轮即可立即解除吸底限制，自由阅读上方内容，不再被强行拉到底部；
  - **双击回底**：双击聊天窗口空白处，或顺手滚回底部附近，立即重新开启自动跟随输出。

---

## 安装方式

> [!IMPORTANT]
> 本扩展目前支持通过 **加载已解压的扩展程序** 或 **临时载入附加组件** 安装。

### 1. Chromium 内核浏览器 (Chrome / Edge / Brave / Opera / Vivaldi 等)
1. 打开浏览器扩展管理页（如 `chrome://extensions` 或 `edge://extensions`）；
2. 打开右上角 **“开发者模式” (Developer Mode)** 开关；
3. 点击 **“加载已解压的扩展程序” (Load unpacked)**；
4. 选择本项目目录下的 `Main/Chromium/6.907.13.41` 文件夹即可完成安装。

### 2. Firefox 内核浏览器 (Firefox / Floorp / LibreWolf 等)
1. 打开 Firefox 地址栏输入 `about:debugging#/runtime/this-firefox`；
2. 点击 **“临时载入附加组件...” (Load Temporary Add-on...)**；
3. 选中本项目目录下的 `Main/Firefox/6.907.13.41/manifest.json` 文件即可直接运行。

---

## 声明

### 请注意，本项目用作个人测试和学习代码
### 请注意，本项目遵守 [MIT License](https://github.com/R-953/Nano-EVO/blob/main/LICENSE)，被许可人在软件和软件的所有副本中都必须包含以上著作权声明和本许可声明，被许可人和用户运行本项目，该行为视为与已详细、完整阅读过此声明、MIT许可证原文、云服务提供商的隐私条款和免责声明这一行为等价。
### 请注意，本项目不会读取、执行任何除了项目运行必需以外的本地文件，除了:
- 本项目运行必须依赖的代码
- 本地设备侧载的大模型文件
- 与大模型对话时上传的文件
- 与大模型对话时导出的文件
> 本项目产生的所有数据都应保存在浏览器内；
> 本项目同时也不会存储、上传、修改任何有关与本地大模型和云端大模型的数据，包括但不限于：聊天记录、翻译历史、网页总结、*API Key* 等。
> 除非上述提到的数据被手动导出到本地、上传至云端，
## 该行为导致的后果与本项目无任何关联，作者本人和提供云服务的公司也不承担任何因为使用本项目产生的后果
### 请注意，本项目运行不依赖任何额外的权限，除了：
- 在浏览器中运行所需的权限
- 固定到侧边栏所需的权限
- 访问本地回环地址与指定 API 地址所需的权限
### 请注意，本项目的本地模式提供离线访问本地大语言模型的能力，使用本地模式时可完全断开互联网连接；
> 在云端模式下通过 API Key 使用第三方云服务时，请遵守各服务提供商的隐私政策与使用条款：
> - [Google Privacy Policy](https://policies.google.com/privacy)
> - [OpenAI Privacy Policy](https://openai.com/policies/privacy-policy)
> - [Anthropic Privacy Policy](https://www.anthropic.com/legal/privacy)
### 本项目与本文件中提到的任何公司、品牌、商标、项目或产品均无关联，详细说明如下：
- *Ollama GUI* 是相关权利人的开源项目；
- *LM Studio* 是 *LM Studio* 的注册商标；
- *GPT4All* 是 *Nomic AI* 的注册商标；
- *Cherry Studio* 是其开发者团队的开源项目；
- *Chatbox* 是其开发者团队的开源项目；
- *AnythingLLM* 是 *Mintplex Labs Inc.* 的注册商标；
- *Ollama* 是 *Ollama Inc.* 的注册商标；
- *vLLM* 是其开源社区的高吞吐推理引擎；
- *Google Gemini* 是 *Google LLC* 的注册商标；
- *Anthropic Claude* 是 *Anthropic PBC* 的注册商标；
- *OpenAI GPT* 是 *OpenAI Inc.* 的注册商标；
- *DeepSeek* 是杭州深度求索人工智能基础技术研究有限公司的注册商标；
- *Alibaba Qwen* 是阿里巴巴集团的注册商标；
- *Moonshot Kimi* 是月之暗面科技有限公司的注册商标。
