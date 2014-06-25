module.exports = function (args) {
  var _ = require('underscore');
  var Reflect = require('harmony-reflect');
  var handler = Reflect;
  handler.set = function(obj, prop, value) {
    _.each(args, function (target) {
      target[prop] = value;
    });
  };
  var __contextualProxy__ = new Proxy({}, handler);

  return __contextualProxy__;
};
