# Nano-EVO

<p align="center">
    <img src="https://github.com/R-953/Nano-EVO/blob/main/Extension/icon.jpg">
</p>

Extension de barre latérale de navigateur à usage personnel
## Écrit en JavaScript, ajoute une barre latérale native au navigateur, prenant en charge à la fois les grands modèles locaux et les services cloud Gemini

<p align="center">
  <a href="../README.md">English</a> •  
  <a href="https://github.com/R-953/Nano-EVO/blob/829057c776eb7ecbd2dd24c1b9aec0745a611ec5/Instruction/README_fr.md">Français</a> • 
  <a href="https://github.com/R-953/Nano-EVO/blob/829057c776eb7ecbd2dd24c1b9aec0745a611ec5/Instruction/README_ja.md">日本語</a> • 
  <a href="https://github.com/R-953/Nano-EVO/blob/829057c776eb7ecbd2dd24c1b9aec0745a611ec5/Instruction/README_zh-Hans.md">简体中文</a> • 
  <a href="https://github.com/R-953/Nano-EVO/blob/829057c776eb7ecbd2dd24c1b9aec0745a611ec5/Instruction/README_zh-Hant.md">繁體中文</a> • 
</p>

<h3 align="center"> Navigateurs Compatibles :</h3>

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

<h3 align="center"> Applications Locales Compatibles :</h3> 

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

<h3 align="center"> Services Cloud Compatibles :</h3> 

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

## Détails

### Mode Local
- Prend en charge les grands modèles linguistiques **déployés localement** ;
- Prend en charge le **Mode Local** et la **modification des ports proxy**, et affiche **les paramètres spécifiques du modèle en temps réel** dans le coin inférieur gauche, incluant **le nom du modèle**, **le numéro de version** et **les paramètres** ;
- Permet d'ouvrir la barre latérale dans le navigateur via le **menu contextuel (clic droit)**, ou en **cliquant sur l'extension**, et de la fermer en **cliquant à nouveau** ;
> Nécessite l'ouverture du **port de l'adresse de bouclage (loopback)** après **l'exécution et le chargement latéral (sideloading)** du modèle, ainsi que l'activation des **services API locaux** et du **partage des ressources inter-origines (CORS)** ;
- Prend en charge la **sélection pour traduire** dans plusieurs langues. Par défaut : **Chinois simplifié**, **Anglais américain**, **Français canadien** et **Japonais** ;
> Les invites (prompts) peuvent être modifiées dans le fichier JS pour ajouter ou supprimer des langues générées par le modèle lors de la traduction ;
- Prend en charge le **résumé de page web** de la page actuelle ;
> Vous pouvez **poser des questions** sur la page web actuelle dans la barre de saisie, ou **l'envoyer vide**. Lorsque la saisie est vide, le modèle va **automatiquement extraire** le contenu principal de la page web actuelle et **résumer de manière concise** ses points principaux ;
- Prend en charge **l'exportation de l'historique des discussions** au format *Markdown*, ainsi qu'une fonction de **destruction après lecture** ;
> Lorsqu'elle est activée, la fermeture de la barre latérale **effacera automatiquement tout l'historique de discussion actuel**. Par défaut, fermer la barre latérale ne **supprime pas automatiquement l'historique actuel**, bien que vous puissiez choisir de le supprimer manuellement ;
- Prend en charge la saisie de fichiers au format **partiel** ;
> Cela dépend également du **type de modèle local** : Les **modèles de texte pur** ne peuvent pas accepter d'images. Il est recommandé de privilégier le chargement latéral de **grands modèles multimodaux** qui prennent en charge la saisie d'images, bien qu'actuellement seule la saisie de fichiers au format **texte brut** soit prise en charge.
- Prend en charge la fonction **Synthèse vocale (TTS)**, permettant la lecture des **sorties du modèle** dans les interfaces de discussion et de résumé, et la lecture des **entrées de l'utilisateur** et des **sorties du modèle** dans l'interface de traduction. Actuellement, seules les langues suivantes sont prises en charge : **Chinois simplifié**, **Anglais américain**, **Français canadien** et **Japonais**.
> Lors de l'utilisation de navigateurs *Chromium* autres que *Brave*, le navigateur appellera par défaut *Google Network Voices* pour la lecture. Étant donné que le navigateur *Brave* **supprime** ce service par défaut, les quatre packs de langues doivent être **entièrement déployés** localement sur l'ordinateur pour prendre en charge les trois autres langues en plus de **l'anglais américain**.
  
### Mode Cloud
- Prend en charge l'appel de **certains modèles cloud** via *API Key* ;
> [!NOTE]
> Une clé API valide doit être générée. Actuellement, seul *Google Gemini* est pris en charge. Les modèles appelés via *API Key* incluent, mais sans s'y limiter, *Google Gemini 3.1 Flash Lite* et *Google Gemini 3.5 Flash*. Actuellement, seuls ces deux modèles sont adaptés. Vous pouvez modifier les paramètres dans le lien d'appel du fichier JS pour utiliser des modèles incluant, sans s'y limiter, *Google Gemini 3.1 Pro*. **[Cette page](https://ai.google.dev/gemini-api/docs/rate-limits)** affiche tous les modèles pris en charge ;

> [!IMPORTANT]
> En prenant *Google Gemini* comme exemple, vous devez vous connecter à votre compte dans *[Google AI Studio](https://aistudio.google.com)*, cliquer sur *Get API Key* en bas à gauche, puis sur **Create API key** en haut à droite. Après avoir complété **Nommer le projet** et **Configurer les informations de facturation**, vous pouvez copier la *clé API* et la coller dans la zone de saisie sous le modèle ;
- Prend en charge la **sélection pour traduire** dans plusieurs langues. Par défaut : **Chinois simplifié**, **Anglais américain**, **Français canadien** et **Japonais** ;
> Les invites (prompts) peuvent être modifiées dans le fichier JS pour ajouter ou supprimer des langues lors de la traduction ;
- Prend en charge le **résumé de page web** de la page actuelle ;
> Vous pouvez **poser des questions** sur la page web actuelle dans la barre de saisie, ou **l'envoyer vide**. Lorsque la saisie est vide, le modèle va **automatiquement extraire** le contenu principal de la page web actuelle et **résumer de manière concise** ses points principaux ;
- Prend en charge **l'exportation de l'historique des discussions** au format *Markdown*, ainsi qu'une fonction de **destruction après lecture** ;
> Lorsqu'elle est activée, la fermeture de la barre latérale **effacera automatiquement tout l'historique de discussion actuel**. Par défaut, fermer la barre latérale ne **supprime pas automatiquement l'historique actuel**, bien que vous puissiez choisir de le supprimer manuellement ;
- Prend en charge la saisie de fichiers au format **partiel** ;
> Cela dépend également du **type de modèle cloud** : Les **modèles de texte pur** ne peuvent pas accepter d'images. Il est recommandé de privilégier les **grands modèles multimodaux** qui prennent en charge la saisie d'images, bien qu'actuellement seule la saisie de fichiers au format **texte brut** soit prise en charge.
- Prend en charge la fonction **Synthèse vocale (TTS)**, permettant la lecture des **sorties du modèle** dans les interfaces de discussion et de résumé, et la lecture des **entrées de l'utilisateur** et des **sorties du modèle** dans l'interface de traduction. Actuellement, seules les langues suivantes sont prises en charge : **Chinois simplifié**, **Anglais américain**, **Français canadien** et **Japonais**.
> Lors de l'utilisation de navigateurs *Chromium* autres que *Brave*, le navigateur appellera par défaut *Google Network Voices* pour la lecture. Étant donné que le navigateur *Brave* **supprime** ce service par défaut, les quatre packs de langues doivent être **entièrement déployés** localement sur l'ordinateur pour prendre en charge les trois autres langues en plus de **l'anglais américain**.

## Méthode d'installation
> [!IMPORTANT]
> Actuellement, cette extension ne prend en charge que l'installation manuelle en **chargeant une extension non empaquetée** et en **important un fichier ZIP**.
<p align="center">
  <img src="https://img.shields.io/badge/Chrome Web Store-%C3%97-red?">
  <img src="https://img.shields.io/badge/Edge Addons-%C3%97-red?">
  <img src="https://img.shields.io/badge/Firefox Addons-%C3%97-red?">
  <img src="https://img.shields.io/badge/Safari Extension-%C3%97-red?">
</p>

## Déclaration

### Veuillez noter que ce projet est destiné à des tests personnels et à des fins d'apprentissage.
### Veuillez noter que ce projet est conforme à la [Licence MIT](https://github.com/R-953/Nano-EVO/blob/main/LICENSE). Le titulaire de la licence doit inclure l'avis de droit d'auteur ci-dessus et cet avis de permission dans toutes les copies ou parties substantielles du Logiciel. En exécutant ce projet, le titulaire de la licence et l'utilisateur acceptent que cette action équivaut à avoir lu cette déclaration, le texte original de la licence MIT, ainsi que les politiques de confidentialité et clauses de non-responsabilité des fournisseurs de services cloud de manière détaillée et complète.
### Veuillez noter que ce projet ne lira ni n'exécutera aucun fichier local autre que ceux nécessaires à son fonctionnement, à l'exception de :
- Le code nécessaire au fonctionnement de ce projet
- Les fichiers de grands modèles chargés localement sur l'appareil
- Les fichiers téléchargés lors des conversations avec le grand modèle
- Les fichiers exportés lors des conversations avec le grand modèle
> Toutes les données générées par ce projet doivent être enregistrées dans le navigateur ;
> Ce projet ne stockera, ne téléchargera ni ne modifiera aucune donnée liée aux grands modèles locaux ou cloud, y compris, mais sans s'y limiter : l'historique des discussions, l'historique des traductions, les résumés de pages web, les *clés API*, etc.
> À moins que les données susmentionnées ne soient exportées manuellement localement ou téléchargées sur le cloud,
## Les conséquences causées par de telles actions n'ont aucun lien avec ce projet. L'auteur et les sociétés fournissant des services cloud n'assument aucune responsabilité pour les conséquences découlant de l'utilisation de ce projet.
### Veuillez noter que le fonctionnement de ce projet ne dépend d'aucune autorisation supplémentaire, à l'exception de :
- Les autorisations requises pour s'exécuter dans le navigateur
- Les autorisations requises pour épingler à la barre des tâches
- Les autorisations requises pour accéder aux adresses de fichiers
### Veuillez noter que le mode local de ce projet offre la possibilité d'accéder hors ligne aux grands modèles linguistiques locaux. Vous pouvez donc vous déconnecter complètement d'Internet lorsque vous utilisez le mode local ;
> Étant donné que *Gemini* est un service d'IA cloud lancé par *Google LLC*, une connexion Internet stable est requise lors de l'utilisation des services cloud fournis par *Google LLC* via *API Key* en **Mode Cloud**.
> Veuillez noter que ce projet ne peut pas déterminer la sécurité et la confidentialité de la sortie du modèle cloud avant qu'elle ne soit renvoyée à ce projet via le serveur en mode cloud. Veuillez consulter les politiques de confidentialité et les clauses de non-responsabilité de *Google LLC* [ici](https://policies.google.com/privacy?hl=fr).
### Ce projet n'est affilié à aucune entreprise, marque, marque de commerce, projet ou produit mentionné dans ce document. Les descriptions détaillées sont les suivantes :
- *Ollama GUI* est un projet open-source de ses ayants droit respectifs, conçu comme une interface utilisateur graphique pour *Ollama* ;
- *LM Studio* est une marque déposée de *LM Studio*, qui est une plate-forme de fonctionnement de grands modèles locaux tout-en-un ;
- *GPT4All* est une marque déposée de *Nomic AI*, une plate-forme open-source d'exécution de grands modèles locaux ;
- *Cherry Studio* est un projet open-source de son équipe de développement, un client multi-modèle d'*IA* de bureau conçu pour les professionnels ;
- *Chatbox* est un projet open-source de son équipe de développement, un client *IA* universel multiplateforme et un assistant intelligent ;
- *AnythingLLM* est une marque déposée de *Mintplex Labs Inc.*, une base de connaissances locale complète d'entreprise et une plate-forme d'agents *IA* ;
- *Ollama* est une marque déposée d'*Ollama Inc.*, un framework d'exécution de grands modèles linguistiques locaux ;
- *vLLM* est un projet représentatif de sa communauté open-source, un moteur d'inférence et de service de grands modèles à haut débit et faible latence ;
- *llama.cpp* est un projet représentatif de sa communauté open-source, un framework d'inférence de grands modèles léger basé sur *C/C++* ;
- *Local AI* est un projet représentatif de sa communauté open-source, une alternative d'inférence *IA* locale compatible avec l'*API OpenAI* ;
- *Google Gemini* est une marque déposée de *Google LLC*, un service cloud de modèle *IA* lancé par *Google LLC* ;
- *Meta Muse* est une marque déposée de *Meta Platforms, Inc.*, et *Meta Muse Spark* est un outil interactif et de conception *IA* créatif lancé par *Meta* ;
- *xAI Grok* est une marque déposée de *xAI*, un assistant de chat *IA* doté de capacités de récupération d'informations en temps réel ;
- *DeepSeek* est une marque déposée de Hangzhou DeepSeek Artificial Intelligence Basic Technology Research Co., Ltd., représentant une série de grands modèles linguistiques open-source à haute performance ;
- *Alibaba Qwen* est une marque déposée du groupe Alibaba, représentant une série de modèles linguistiques à très grande échelle ;
- *Moonshot Kimi* est une marque déposée de Moonshot AI, un assistant intelligent prenant en charge le traitement de textes ultra-longs ;
- *Anthropic Claude* est une marque déposée d'*Anthropic PBC*, un modèle linguistique *IA* sécurisé, honnête et performant ;
- *OpenAI GPT* est une marque déposée d'*OpenAI Inc.*, la série *GPT* étant des grands modèles linguistiques multimodaux leaders de l'industrie ;
- *Z GLM* est une marque déposée de Beijing Zhipu Huazhang Technology Co., Ltd., représentant une nouvelle génération de grands modèles cognitifs.
