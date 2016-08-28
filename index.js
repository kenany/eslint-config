module.exports = {
  extends: [
    'eslint-config-defaults'
  ].map(require.resolve),
  env: {
    node: true
  },
  rules: {
    'array-callback-return': 2,
    'class-methods-use-this': 2,
    'eol-last': 2,
    'func-call-spacing': 2,
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
    'max-lines': 0,
    'max-statements-per-line': 0,
    'multiline-ternary': 0,
    'newline-before-return': 0,
    'newline-per-chained-call': [2, {ignoreChainWithDepth: 4}],
    'no-confusing-arrow': [2, {allowParens: true}],
    'no-extra-semi': 2,
    'no-trailing-spaces': 2,
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    quotes: [2, 'single'],
    semi: 2
  }
};
