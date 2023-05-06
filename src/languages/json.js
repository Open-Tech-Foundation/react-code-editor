export default {
  name: 'JSON',
  parser: 'json',
  tokens: [
    {
      t: 'attribute',
      p: /"[^"]+?"(?=:)/,
      s: true,
      b: '"',
    },
    {
      t: 'string',
      p: /"[^\n]*?(?<!\\)"/,
      s: true,
      b: '"',
    },
    {
      t: 'literal',
      p: /null|true|false/,
    },
    {
      t: 'number',
      p: /(-?)(\b0[xX][a-fA-F0-9]+|(\b\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?)/,
    },
    {
      t: 'puntuation',
      p: /[{}[\],:]/,
    },
  ],
};
