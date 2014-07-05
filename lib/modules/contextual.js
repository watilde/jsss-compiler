module.exports = function () {
  var _ = require('underscore');
  var prop = _.last(arguments);
  var key = _.first(_.keys(prop));
  var value = _.first(_.values(prop));
  var len = arguments.length;
  for (var i = 0; len - 1 > i; i++) {
    arguments[i][key] = value;
  }
};

/**
 * module.exports = function () {
 *   var args = Array.prototype.slice.call(arguments);
 *   var contextualProxy = require('./contextualProxy');
 *   return contextualProxy(args);
 * };
 **/
