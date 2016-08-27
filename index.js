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
    'id-blacklist': 0,
    indent: ['error', 2],
    'keyword-spacing': [2, {
      before: true,
      after: true,
      overrides: {
        return: {after: true},
        throw: {after: true},
        case: {after: true}
      }
    }],
    'linebreak-style': [2, 'unix'],
    'no-extra-semi': 2,
    'no-trailing-spaces': 2,
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    quotes: [2, 'single'],
    semi: 2
  }
};
