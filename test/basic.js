const test = require('tape');
const isPlainObject = require('lodash.isplainobject');
const eslint = require('eslint');

const eslintconfig = require('../');

test('exports an object', (t) => {
  t.plan(2);
  t.ok(isPlainObject(eslintconfig));
  t.ok(isPlainObject(eslintconfig.rules));
});

test('valid rule syntax', async (t) => {
  t.plan(1);

  const cli = new eslint.ESLint({
    useEslintrc: false,
    overrideConfigFile: '.eslintrc.js'
  });

  const code = 'var foo = 1;\nvar bar = function() {};\nbar(foo);\n';
  t.equal((await cli.lintText(code))[0].errorCount, 0);
});
