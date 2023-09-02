/* eslint quote-props: 0 */

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'semistandard'
  ],
  reportUnusedDisableDirectives: true,
  rules: {
    'array-bracket-newline': [1, 'consistent'],
    'array-callback-return': 2,
    'array-element-newline': 0,
    'arrow-body-style': [2, 'as-needed', { requireReturnForObjectLiteral: false }],
    'arrow-parens': [2, 'always'],
    'block-scoped-var': 2,
    'brace-style': [2, 'stroustrup', { allowSingleLine: true }],
    'callback-return': 0,
    'capitalized-comments': 0,
    'class-methods-use-this': 2,
    'complexity': 0,
    'consistent-return': 1,
    'consistent-this': 0,
    'default-case': [1, { commentPattern: '^no default$' }],
    'dot-notation': [1, { allowKeywords: true }],
    'func-name-matching': 0,
    'func-names': 0,
    'func-style': 0,
    'function-paren-newline': [2, 'consistent'],
    'global-require': 0,
    'guard-for-in': 2,
    'id-blacklist': 0,
    'id-length': 0,
    'id-match': 0,
    'implicit-arrow-linebreak': [2, 'beside'],
    'init-declarations': 0,
    'jsx-quotes': [2, 'prefer-double'],
    'line-comment-position': 0,
    'linebreak-style': [2, 'unix'],
    'lines-around-comment': 0,
    'max-classes-per-file': [2, 1],
    'max-depth': 0,
    'max-len': [1, 80, 2, {
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true
    }],
    'max-lines': 0,
    'max-statements-per-line': 0,
    'multiline-ternary': 0,
    'newline-before-return': 0,
    'newline-per-chained-call': [2, { ignoreChainWithDepth: 4 }],
    'no-confusing-arrow': [2, { allowParens: true }],
    'no-console': 1,
    'no-var': 1,
    'object-curly-spacing': 1,
    'operator-linebreak': [1, 'before'],
    'semi-style': [2, 'last'],
    'space-before-function-paren': [2, {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always'
    }],

    'import/dynamic-import-chunkname': 0,
    'import/exports-last': 0,
    'import/extensions': [2, 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never'
    }],
    'import/group-exports': 0,
    'import/max-dependencies': 0,
    'import/newline-after-import': 2,
    'import/no-amd': 2,
    'import/no-anonymous-default-export': 0,
    'import/no-commonjs': 0,
    'import/no-cycle': [2, { maxDepth: Infinity }],
    'import/no-default-export': 0,
    'import/no-deprecated': 0,
    'import/no-dynamic-require': 2,
    'import/no-extraneous-dependencies': 0,
    'import/no-internal-modules': 0,
    'import/no-mutable-exports': 2,
    'import/no-named-export': 0,
    'import/no-namespace': 0,
    'import/no-nodejs-modules': 0,
    'import/no-relative-parent-imports': 0,
    'import/no-restricted-paths': 0,
    'import/no-self-import': 2,
    'import/no-unassigned-import': 0,
    'import/no-unresolved': [1, { commonjs: true, caseSensitive: true }],
    'import/no-unused-modules': 0,
    'import/no-useless-path-segments': 2,
    'import/order': [1, { groups: [['builtin', 'external', 'internal']] }],
    'import/prefer-default-export': 2,
    'import/unambiguous': 0,

    'n/no-restricted-require': 0,
    'n/no-restricted-import': 0,

    'promise/always-return': 2,
    'promise/avoid-new': 2,
    'promise/catch-or-return': [2, { allowFinally: true }],
    'promise/no-callback-in-promise': 2,
    'promise/no-multiple-resolved': 2,
    'promise/no-native': 0,
    'promise/no-nesting': 2,
    'promise/no-new-statics': 2,
    'promise/no-promise-in-callback': 2,
    'promise/no-return-in-finally': 2,
    'promise/no-return-wrap': 2,
    'promise/param-names': 2,
    'promise/prefer-await-to-callbacks': 0,
    'promise/prefer-await-to-then': 2,
    'promise/valid-params': 2
  }
};
