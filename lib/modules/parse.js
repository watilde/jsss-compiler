module.exports = function(jsss) {
  var _ = require('underscore');
  var Reflect = require('harmony-reflect');
  var taggen = require('./taggen');
  var idgen = require('./idgen');
  var classgen = require('./classgen');
  var selectorgen = require('./selectorgen');
  var parseProxy = require('./parseProxy');
  var tags = parseProxy({});
  var classes = parseProxy({});
  var ids = parseProxy({});
  var selectors = parseProxy({});
  var css = '';

  eval(jsss);
  if (_.size(tags) !== 1) {
    css += taggen(tags);
  }

  if (_.size(ids) !== 1) {
    if (_.size(tags) !== 1) {
      css += '\n\n';
    }
    css += idgen(ids);
  }

  if (_.size(classes) !== 1) {
    if (_.size(tags) !== 1 || _.size(ids) !== 1) {
      css += '\n\n';
    }
    css += classgen(classes);
  }

  if (_.size(selectors) !== 1) {
    if (_.size(tags) !== 1 ||
        _.size(ids) !== 1 ||
        _.size(classes) !== 1)
    {
      css += '\n\n';
    }
    css += selectorgen(selectors);
  }
  css += '\n';
  return css;
};
