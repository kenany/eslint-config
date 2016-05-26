module.exports = {
  extends: [
    'eslint-config-defaults'
  ].map(require.resolve),
  env: {
    node: true
  },
  rules: {
    indent: ['error', 2],
    quotes: [2, 'single'],
    semi: ['error', 'always']
  }
};
