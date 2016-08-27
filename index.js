module.exports = {
  extends: [
    'eslint-config-defaults'
  ].map(require.resolve),
  env: {
    node: true
  },
  rules: {
    'array-callback-return': 2,
    'eol-last': 2,
    indent: ['error', 2],
    'linebreak-style': [2, 'unix'],
    'no-extra-semi': 2,
    'no-trailing-spaces': 2,
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    quotes: [2, 'single'],
    semi: 2
  }
};
