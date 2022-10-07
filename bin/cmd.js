#!/usr/bin/env node

const eslint = require('eslint');
const path = require('path');

const pkg = require('../package.json');

require('standard-engine').cli({
  version: pkg.version,
  cmd: 'kenan-lint',
  tagline: 'catchphrase!',
  eslint: eslint,
  eslintConfig: {
    overrideConfigFile: path.resolve(__dirname, '..', 'index.js')
  }
});
