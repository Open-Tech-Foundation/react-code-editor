export default {
  name: 'github',
  color: '#24292e',
  background: '#fff',
  getStyles: (className) => {
    switch (className) {
      case 'hljs-doctag':
      case 'hljs-keyword':
      case 'hljs-template-tag':
      case 'hljs-template-variable':
      case 'hljs-type':
        return 'color: #d73a49';
      case 'hljs-title':
        return 'color: #6f42c1';
      case 'hljs-attr':
      case 'hljs-attribute':
      case 'hljs-literal':
      case 'hljs-meta':
      case 'hljs-number':
      case 'hljs-operator':
      case 'hljs-selector-attr':
      case 'hljs-selector-class':
      case 'hljs-selector-id':
      case 'hljs-variable ':
        return 'color: #005cc5';
      case 'hljs-regexp':
      case 'hljs-string ':
        return 'color: #032f62';
      case 'hljs-built_in':
      case 'hljs-symbol ':
        return 'color: #e36209';
      case 'hljs-code':
      case 'hljs-comment':
      case 'hljs-formula ':
        return 'color: #6a737d';
      case 'hljs-name':
      case 'hljs-quote':
      case 'hljs-selector-pseudo':
      case 'hljs-selector-tag ':
        return 'color: #22863a';
      case 'hljs-subst ':
        return 'color: #24292e';
      case 'hljs-section ':
        return 'color: #005cc5';
      case 'hljs-bullet ':
        return 'color: #735c0f';
      case 'hljs-emphasis ':
        return 'color: #24292e; font-style: italic';
      case 'hljs-strong ':
        return 'color: #24292e';
      case 'hljs-addition ':
        return 'color: #22863a; background-color: #f0fff4';
      case 'hljs-deletion ':
        return 'color: #b31d28; background-color: #ffeef0';
      default:
        return '';
    }
  },
};
