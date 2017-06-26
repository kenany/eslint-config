var test = require('tape');
var isPlainObject = require('lodash.isplainobject');
var eslint = require('eslint');

const eslintconfig = require('../');

test('exports an object', function(t) {
  t.plan(2);
  t.ok(isPlainObject(eslintconfig));
  t.ok(isPlainObject(eslintconfig.rules));
});

test('valid rule syntax', function(t) {
  t.plan(1);

  var cli = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: '.eslintrc.js'
  });

  var code = 'var foo = 1;\nvar bar = function() {};\nbar(foo);\n';
  t.equal(cli.executeOnText(code).errorCount, 0);
});
