module.exports = function(jsss) {
  var Reflect = require('harmony-reflect');
  var taggen = require('./taggen');
  var idgen = require('./idgen');
  var classgen = require('./classgen');
  var selectorgen = require('./selectorgen');
  var contextual = require('./contextual');
  var parseProxy = require('./parseProxy');
  var tags = parseProxy({});
  var classes = parseProxy({});
  var ids = parseProxy({});
  var selectors = parseProxy({});
  var css = '';

  eval(jsss);

  css += taggen(tags);
  css += '\n\n';
  css += idgen(ids);
  css += '\n\n';
  css += classgen(classes);
  css += '\n\n';
  css += selectorgen(selectors);
  css += '\n';
  return css;
};
