# Nano-EVO
自用浏览器侧边栏扩展程序
## 基于Javascript编写，添加浏览器原生侧边栏，同时支持本地大模型和Gemini云服务

<h3> 兼容浏览器：</h3>
<p>
  <img src="https://img.shields.io/badge/Chromium-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Chrome-%E2%88%9A-greem?style=for-the-badge">
  <img src="https://img.shields.io/badge/Edge-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Brave-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Opera-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Safari-%C3%97-red?style=for-the-badge">
  <img src="https://img.shields.io/badge/Firefox-%C3%97-red?style=for-the-badge">
  <img src="https://img.shields.io/badge/etc.-white?style=for-the-badge">
</p>
<h3> 兼容本地应用：</h3> 
<p>
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
<h3> 兼容云服务：</h3> 
<p>
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

## 详情介绍

### 本地模式
- 支持 **本地已部署** 的大语言模型；
- 支持 **本地模式** 和 **修改代理端口**，并且在左下角 **实时显示模型具体参数**，包含 **模型名**、**版本号** 以及 **参数**；
- 支持 **右键菜单** 在浏览器中打开侧边栏，也可以 **单击扩展程序** 打开侧边栏，**再次点击** 可以关闭侧边栏；
> 需要 **运行并侧载** 模型后开放 **回环地址端口** ，且启用 **本地API服务**、**跨域资源共享**；
- 支持 **划词翻译** 成多种语言，目前默认翻译成 **简体中文**、**美式英语**、**加拿大法语** 和 **日语**；
> 可在JS文件中修改提示词，增加或删除大模型在翻译时输出的语言；
- 支持 **网页总结** 当前页面；
> 可以在输入栏中针对当前网页 **提出问题** 或 **留白直接发送**，输入为空时大模型会 **自动提取** 当前网页的主要内容，并 **简洁地总结** 其纲要；
- 支持 **导出聊天记录** 至 *Markdown* 格式、以及 **阅后即焚** 功能；
> 开启时关闭侧边栏后会 **自动清除当前全部聊天记录** ，默认情况下关闭侧边栏后不会 **自动删除当前聊天记录**，当然也可以选择手动删除；
- 支持 **部分格式** 的文件输入；
> 同时还要取决于 **本地大模型的型号**：若使用 **纯文本类模型** 则无法接受图片输入，推荐优先侧载支持图片输入的 **多模态大模型**，虽然目前仅支持 **纯文本格式** 的文件输入。
- 支持 **文本到语音** 功能，在聊天和总结界面支持朗读 **模型输出**，在翻译界面支持朗读 **用户输入** 和 **模型输出**，目前仅支持 **简体中文**、**美式英语**、**加拿大法语** 和 **日本語**。
> 在使用除 *Brave* 外的 *Chromium* 浏览器时，浏览器会默认调用 *Google Network Voices* 输出朗读，由于 *Brave* 浏览器默认 **删除** 了此服务，需要在电脑本地 **完整部署** 四种语言包后才能支持除 **美式英语** 外的另三种语言。
  
### 云端模式
- 支持通过 *API Key* 调用 **部分云端模型**；
> [!NOTE]
> 需要生成一段可用的 API 密钥，目前仅支持 *Google Gemini*，通过 *API Key* 调用的模型包括但不限于 *Google Gemini 3.1 Flash Lite*、*Google Gemini 3.5 Flash*，当前仅适配了两者，可在JS文件中修改调用链接中的参数使用包含但不限于 *Google Gemini 3.1 Pro* 等模型，**[此页面](https://ai.google.dev/gemini-api/docs/rate-limits)** 显示了所有支持的模型 ；

> [!IMPORTANT]
> 以 *Google Gemini* 为例，需要在 *[Google AI Studio](https://aistudio.google.com)* 中登录自己的账号，点击左下角 *Get API Key*，右上角 **创建 API 密钥** ，完成 **为项目命名** 和 **设置结算信息** 后，即可复制 *API Key* 粘贴到模型下的输入框中；
- 支持 **划词翻译** 成多种语言，目前默认翻译成 **简体中文**、**美式英语**、**加拿大法语** 和 **日本語**；
> 可在JS文件中修改提示词，增加或删除翻译时输出的语言；
- 支持 **网页总结** 当前页面；
> 可以在输入栏中针对当前网页 **提出问题** 或 **留白直接发送**，输入为空时大模型会 **自动提取** 当前网页的主要内容，并 **简洁地总结** 其纲要；
- 支持 **导出聊天记录** 至 *Markdown* 格式，以及 **阅后即焚** 功能；
> 开启时关闭侧边栏后会 **自动清除当前全部聊天记录** ，默认情况下关闭侧边栏后不会 **自动删除当前聊天记录**，当然也可以选择手动删除；
- 支持 **部分格式** 的文件输入；
> 同时还要取决于 **云端大模型的型号**：若使用 **纯文本类模型** 则无法接受图片输入，推荐优先侧载支持图片输入的 **多模态大模型**，虽然目前仅支持 **纯文本格式** 的文件输入。
- 支持 **文本到语音** 功能，在聊天和总结界面支持朗读 **模型输出**，在翻译界面支持朗读 **用户输入** 和 **模型输出**，目前仅支持 **简体中文**、**美式英语**、**加拿大法语** 和 **日本語**。
> 在使用除 *Brave* 外的 *Chromium* 浏览器时，浏览器会默认调用 *Google Network Voices* 输出朗读，由于 *Brave* 浏览器默认 **删除** 了此服务，需要在电脑本地 **完整部署** 四种语言包后才能支持除 **美式英语** 外的另三种语言。

## 安装方式
> [!IMPORTANT]
> 本扩展目前仅支持通过 **加载未解压的扩展程序** 以及 **导入压缩包** 的方式手动安装。
<p> 
  <img src="https://img.shields.io/badge/Chrome Web Store-%C3%97-red?">
  <img src="https://img.shields.io/badge/Edge Addons-%C3%97-red?">
  <img src="https://img.shields.io/badge/Firefox Addons-%C3%97-red?">
  <img src="https://img.shields.io/badge/Safari Extension-%C3%97-red?">
</p>

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
- 固定到任务栏所需的权限
- 访问文件地址所需的权限
### 请注意，本项目的本地模式，提供离线访问本地大语言模型的能力，因此使用本地模式时可以完全断开与互联网的连接；
> 由于 *Gemini* 是 *Google LLC* 推出的云端人工智能服务，所以在 **云端模式** 下通过 *API Key* 使用 *Google LLC* 提供的云服务时，稳定的互联网连接是必要条件。
> 请注意，本项目无法得知在云端模式下云端大模型的输出在经由服务器发送回本项目之前的安全和隐私性，请[在此](https://policies.google.cn/privacy?hl=zh-CN)参阅有关 *Google LLC* 的隐私政策和免责声明等条款。
### 本项目与本文件中提到的任何公司、品牌、商标、项目或产品均无关联，详细说明如下：
- *Ollama GUI* 是相关权利人的开源项目，*Ollama GUI* 是为 *Ollama* 打造的图形用户界面客户端；
- *LM Studio* 是 *LM Studio* 的注册商标，*LM Studio* 是 *LM Studio* 推出的一站式本地大模型运行平台；
- *GPT4All* 是 *Nomic AI* 的注册商标，*GPT4All* 是 *Nomic AI* 推出的开源本地大模型运行平台；
- *Cherry Studio* 是其开发者团队的开源项目，*Cherry Studio* 是专为专业用户设计的桌面级 *AI* 多模型客户端；
- *Chatbox* 是其开发者团队的开源项目，*Chatbox* 是多平台通用的 *AI* 客户端与智能助手；
- *AnythingLLM* 是 *Mintplex Labs Inc.* 的注册商标，*AnythingLLM* 是其推出的企业级全功能本地知识库与 *AI* 智能体平台；
- *Ollama* 是 *Ollama Inc.* 的注册商标，*Ollama* 是其推出的本地大语言模型运行框架；
- *vLLM* 是其开源社区的代表性项目，*vLLM* 是一个高吞吐量、低延迟的大模型推理与服务引擎；
- *llama.cpp* 是其开源社区的代表性项目，*llama.cpp* 是基于 *C/C++* 的轻量级大模型推理框架；
- *Local AI* 是其开源社区的代表性项目，*Local AI* 是与 *OpenAI API* 兼容的本地 *AI* 推理与替代方案；
- *Google Gemimi* 是 *Google LLC* 的注册商标，*Gemini* 是 *Google LLC* 推出的 *AI* 模型云服务；
- *Meta Muse* 是 *Meta Platforms, Inc.* 的注册商标，*Meta Muse Spark* 是 *Meta* 推出的创意 *AI* 辅助设计与交互工具；
- *xAI Grok* 是 *xAI* 的注册商标，*Grok* 是 *xAI* 推出的具有实时信息获取能力的 *AI* 聊天助手；
- *DeepSeek* 是杭州深度求索人工智能基础技术研究有限公司的注册商标，*DeepSeek* 是其推出的一系列开源高性能大语言模型；
- *Alibaba Qwen* 是阿里巴巴集团的注册商标，*Qwen*（通义千问）是阿里巴巴推出的超大规模语言模型系列；
- *Moonshot Kimi* 是月之暗面科技有限公司的注册商标，*Kimi* 是其推出的支持超长文本处理的智能助手；
- *Anthropic Claude* 是 *Anthropic PBC* 的注册商标，*Claude* 是 *Anthropic* 推出的安全、诚实、高性能的 *AI* 语言模型；
- *OpenAI GPT* 是 *OpenAI Inc.* 的注册商标，*GPT* 系列是 *OpenAI* 推出的行业领先的多模态大语言模型；
- *Z GLM* 是北京智谱华章科技有限公司的注册商标，*GLM* 是智谱 *AI* 推出的新一代认知大模型系列
