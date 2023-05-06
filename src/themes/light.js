export default {
  name: 'Light',
  color: '#111111',
  background: '#fff',
  getStyles: (className) => {
    switch (className) {
      case 'keyword':
        return 'color: #FF4136';
      case 'literal':
        return 'color: #F012BE';
      case 'attribute':
        return 'color: #FF851B;';
      case 'number':
      case 'operator':
      case 'regexp':
        return 'color: inherit';
      case 'string':
        return 'color: #2ECC40';
      case 'puntuation':
        return 'color: inherit;';
      default:
        return '';
    }
  },
};
