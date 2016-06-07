module.exports = {
  extends: [
    'eslint-config-defaults'
  ].map(require.resolve),
  env: {
    node: true
  },
  rules: {
    'eol-last': 2,
    indent: ['error', 2],
    'no-trailing-spaces': 2,
    quotes: [2, 'single'],
    semi: 2
  }
};
