export default {
  name: 'github-dark',
  color: '#c9d1d9',
  background: '#0d1117',
  getStyles: (className) => {
    switch (className) {
      case 'hljs-doctag':
      case 'hljs-keyword':
      case 'hljs-template-tag':
      case 'hljs-template-variable':
      case 'hljs-type':
        return 'color: #ff7b72';
      case 'hljs-title':
        return 'color: #d2a8ff';
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
        return 'color: #79c0ff';
      case 'hljs-regexp':
      case 'hljs-string ':
        return 'color: #a5d6ff';
      case 'hljs-built_in':
      case 'hljs-symbol ':
        return 'color: #ffa657';
      case 'hljs-code':
      case 'hljs-comment':
      case 'hljs-formula ':
        return 'color: #8b949e';
      case 'hljs-name':
      case 'hljs-quote':
      case 'hljs-selector-pseudo':
      case 'hljs-selector-tag ':
        return 'color: #7ee787';
      case 'hljs-subst ':
        return 'color: #c9d1d9';
      case 'hljs-section ':
        return 'color: #1f6feb';
      case 'hljs-bullet ':
        return 'color: #f2cc60';
      case 'hljs-emphasis ':
        return 'color: #c9d1d9; font-style: italic';
      case 'hljs-strong ':
        return 'color: #c9d1d9';
      case 'hljs-addition ':
        return 'color: #aff5b4; background-color: #033a16';
      case 'hljs-deletion ':
        return 'color: #ffdcd7; background-color: #67060c';
      default:
        return '';
    }
  },
};
