module.exports = {
  ignorePatterns: ['*.d.ts'],
  rules: {
    'import/no-unused-modules': 0
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/all',
        './ts-for-js.js'
      ],
      plugins: ['import'],
      rules: {
        quotes: 0,
        '@typescript-eslint/quotes': [
          2,
          'single',
          { avoidEscape: true, allowTemplateLiterals: false }
        ],

        'import/extensions': [2, 'never'],

        '@typescript-eslint/adjacent-overload-signatures': 0,
        '@typescript-eslint/class-methods-use-this': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/member-ordering': 0,
        '@typescript-eslint/naming-convention': 0,
        '@typescript-eslint/no-confusing-void-expression': [2, { ignoreArrowShorthand: true }],
        '@typescript-eslint/no-magic-numbers': 0,
        '@typescript-eslint/no-restricted-imports': 0,
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/prefer-readonly-parameter-types': 0,
        '@typescript-eslint/strict-boolean-expressions': 0
      },

      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true
          }
        },

        node: {
          tryExtensions: [
            '.mjs',
            '.cjs',
            '.js',
            '.json',
            '.node',
            '.mts',
            '.cts',
            '.ts',
            '.d.ts'
          ]
        }
      }
    }
  ]
};
