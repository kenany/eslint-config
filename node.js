module.exports = {
  extends: ['plugin:n/recommended'],
  parserOptions: { ecmaVersion: 'latest' },
  rules: {
    'n/callback-return': 2,
    'n/exports-style': 2,
    'n/file-extension-in-import': 2,
    'n/global-require': 2,
    'n/handle-callback-err': [2, '^.*(e|E)rror'],
    'n/no-callback-literal': 2,
    'n/no-mixed-requires': 2,
    'n/no-new-require': 2,
    'n/no-path-concat': 2,
    'n/no-process-env': 2,
    'n/no-sync': 2,
    'n/prefer-global/buffer': 2,
    'n/prefer-global/console': 2,
    'n/prefer-global/process': 2,
    'n/prefer-global/text-decoder': 2,
    'n/prefer-global/text-encoder': 2,
    'n/prefer-global/url-search-params': 2,
    'n/prefer-global/url': 2,
    'n/prefer-promises/dns': 2,
    'n/prefer-promises/fs': 2
  },
  overrides: [
    {
      files: ['*.cjs', '.*.cjs', '*.mjs', '.*.mjs'],
      parserOptions: { ecmaVersion: 'latest' }
    },
    {
      files: ['*.ts', '*.cts', '*.mts', '.*.ts', '.*.cts', '.*.mts'],
      rules: {
        'n/file-extension-in-import': [2, 'never']
      }
    }
  ]
};
