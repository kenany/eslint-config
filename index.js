module.exports = {
  extends: ['eslint:recommended', 'semistandard'],
  rules: {
    'array-callback-return': 2,
    'brace-style': [2, 'stroustrup', {allowSingleLine: true}],
    'class-methods-use-this': 2,
    'id-blacklist': 0,
    'linebreak-style': [2, 'unix'],
    'max-lines': 0,
    'max-statements-per-line': 0,
    'multiline-ternary': 0,
    'newline-before-return': 0,
    'newline-per-chained-call': [2, {ignoreChainWithDepth: 4}],
    'no-confusing-arrow': [2, {allowParens: true}],
    'operator-linebreak': [1, 'before'],
    'promise/always-return': 0,
    'promise/catch-or-return': 0,
    'promise/no-native': 0,
    'promise/no-return-wrap': 0,
    'promise/prefer-await-to-callbacks': 0,
    'promise/prefer-await-to-then': 0,
    'space-before-function-paren': [2, 'never']
  }
};
