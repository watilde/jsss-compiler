module.exports = function(jsss) {
  var Reflect = require('harmony-reflect');
  var taggen = require('./taggen');
  var idgen = require('./idgen');
  var classgen = require('./classgen');
  var contextual = require('./contextual');
  var parseProxy = require('./parseProxy');
  var tags = classes = ids = {};
  var css = '';

  tags = parseProxy(),
  classes = parseProxy(),
  ids = parseProxy();

  eval(jsss);

  css += taggen(tags);
  css += '\n\n';
  css += idgen(ids);
  css += '\n\n';
  css += classgen(classes);
  css += '\n';
  return css;
};
