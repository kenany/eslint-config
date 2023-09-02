module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    'require-await': 0,
    '@typescript-eslint/require-await': 2,

    'no-throw-literal': 0,
    '@typescript-eslint/no-throw-literal': 2,

    '@typescript-eslint/await-thenable': 2,
    '@typescript-eslint/ban-ts-comment': 2,
    '@typescript-eslint/ban-tslint-comment': 2,
    '@typescript-eslint/no-base-to-string': 2,
    '@typescript-eslint/no-confusing-void-expression': 2,
    '@typescript-eslint/no-dynamic-delete': 2,
    '@typescript-eslint/no-extraneous-class': 2,
    '@typescript-eslint/no-for-in-array': 2,
    '@typescript-eslint/no-implied-eval': 2,
    '@typescript-eslint/no-misused-new': 2,
    '@typescript-eslint/no-misused-promises': 2,
    '@typescript-eslint/no-this-alias': 2,
    '@typescript-eslint/no-useless-empty-export': 2,
    '@typescript-eslint/prefer-for-of': 2,
    '@typescript-eslint/prefer-includes': 2,
    '@typescript-eslint/prefer-optional-chain': 2,
    '@typescript-eslint/prefer-string-starts-ends-with': 2,
    '@typescript-eslint/promise-function-async': 2,
    '@typescript-eslint/require-array-sort-compare': 2,
    '@typescript-eslint/unbound-method': 2,

    'react/sort-comp': 0
  }
};
