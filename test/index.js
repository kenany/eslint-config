var eslintconfig = require('../');
var test = require('tape');
var isPlainObject = require('lodash.isplainobject');

test('exports an object', function(t) {
  t.plan(1);
  t.ok(isPlainObject(eslintconfig));
});
