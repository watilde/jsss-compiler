module.exports = function () {
  var _ = require('underscore');
  var Reflect = require('harmony-reflect');
  var handler = Reflect;
  var args = Array.prototype.slice.call(arguments);

  handler.set = function(obj, prop, value) {
    _.each(args, function (target) {
      target[prop] = value;
    });
  };
  var __contextualProxy__ = new Proxy({}, handler);

  return __contextualProxy__;
};
