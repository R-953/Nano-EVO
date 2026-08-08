// furigana-content.js
(function() {
    // 防抖处理：避免用户多次点击导致重复注入和内存泄漏
    if (window.furiganaInjected) return;
    window.furiganaInjected = true;

    const _ = document;
    // 关键：动态获取扩展内部 dict 文件夹的绝对路径
    const dicPath = chrome.runtime.getURL('dict/');

    console.log("正在本地加载 Kuromoji 字典...");

    kuromoji.builder({ dicPath: dicPath }).build(function (err, tokenizer) {
        if (err) {
            console.error("字典加载失败:", err);
            return;
        }
        console.log("Kuromoji 引擎本地加载完毕，开始解析DOM");
        scanAndInject(document.body, tokenizer);
    });

    function scanAndInject(node, tokenizer) {
        const excludeTags = {ruby: true, script: true, select: true, textarea: true, style: true, noscript: true};

        function traverse(currentNode) {
            if (!currentNode.parentNode || !_.body.contains(currentNode)) return;

            if (currentNode.nodeType === Node.ELEMENT_NODE) {
                if (currentNode.tagName.toLowerCase() in excludeTags || currentNode.isContentEditable) return;
                // 需要先将子节点转为数组，避免在替换 DOM 时导致遍历混乱
                Array.from(currentNode.childNodes).forEach(traverse);
            } else if (currentNode.nodeType === Node.TEXT_NODE) {
                const text = currentNode.nodeValue;
                if (/[\u4e00-\u9faf]/.test(text) && text.trim().length > 0) {
                    processText(currentNode, text, tokenizer);
                }
            }
        }
        
        traverse(node);
        
        // 动态注入排版样式
        const style = _.createElement('style');
        style.textContent = "ruby { ruby-position: over; } rt { font-size: 0.65em; color: #555; user-select: none; }";
        _.head.appendChild(style);
    }

    function processText(textNode, text, tokenizer) {
        const tokens = tokenizer.tokenize(text);
        const fragment = _.createDocumentFragment();

        tokens.forEach(token => {
            if (token.reading && /[\u4e00-\u9faf]/.test(token.surface_form)) {
                // 将 Kuromoji 默认的片假名注音转换为平假名
                const hiragana = token.reading.replace(/[\u30a1-\u30f6]/g, function(match) {
                    return String.fromCharCode(match.charCodeAt(0) - 0x60);
                });
                
                const ruby = _.createElement('ruby');
                ruby.appendChild(_.createTextNode(token.surface_form));
                const rt = _.createElement('rt');
                rt.textContent = hiragana;
                ruby.appendChild(rt);
                fragment.appendChild(ruby);
            } else {
                fragment.appendChild(_.createTextNode(token.surface_form));
            }
        });

        if (textNode.parentNode) {
            textNode.parentNode.replaceChild(fragment, textNode);
        }
    }
})();