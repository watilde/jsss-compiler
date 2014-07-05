module.exports = function (args) {
  var _ = require('underscore');
  var Reflect = require('harmony-reflect');
  var handler = Reflect;

  handler.set = function(target, prop, value, receiver) {
    _.each(args, function (arg) {
      /**
       * RangeError: Maximum call stack size exceeded
       * npm ERR! Test failed.  See above for more details.
       * npm ERR! not ok code 0
       **/
      arg[prop] = value;
    });
  };
  var __contextualProxy__ = new Proxy({}, handler);

  return __contextualProxy__;
};
