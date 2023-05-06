export default {
  name: 'Dark',
  color: '#ffffff',
  background: '#111111',
  getStyles: (className) => {
    switch (className) {
      case 'keyword':
        return 'color: #FF4136';
      case 'literal':
        return 'color: #FFDC00';
      case 'attribute':
        return 'color: #FF851B;';
      case 'number':
      case 'operator':
      case 'regexp':
        return 'color: inherit';
      case 'string':
        return 'color: #01FF70';
      case 'puntuation':
        return 'color: inherit';
      default:
        return '';
    }
  },
};
