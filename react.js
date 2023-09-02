module.exports = {
  extends: [
    'plugin:import/react',
    'plugin:react/all'
  ],
  plugins: ['import'],
  env: { browser: true },
  rules: {
    'react/jsx-no-literals': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-sort-props': 0,
    'react/sort-prop-types': 0,
    'react/sort-default-props': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],

    'react/state-in-constructor': [2, 'never'],
    'react/no-string-refs': [2, { noTemplateLiterals: true }],
    'react/jsx-key': [
      2,
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true
      }
    ],
    'react/forbid-prop-types': [
      2,
      { checkContextTypes: true, checkChildContextTypes: true }
    ],
    'react/no-unsafe': [2, { checkAliases: true }],
    'react/require-default-props': [
      2,
      { forbidDefaultForRequired: true, functions: 'defaultArguments' }
    ],
    'react/jsx-no-target-blank': [
      2,
      { forms: true, warnOnSpreadAttributes: true }
    ],
    'react/jsx-curly-brace-presence': [
      2,
      { propElementValues: 'always' }
    ],
    'react/destructuring-assignment': [
      2,
      'always',
      { destructureInSignature: 'always' }
    ],
    'react/jsx-no-leaked-render': [2, { validStrategies: ['coerce'] }],
    'react/display-name': [2, { checkContextObjects: true }],

    'react-hooks/exhaustive-deps': 2
  }
};
