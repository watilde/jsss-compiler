var _ = require('underscore');
module.exports = function () {
  var prop = _.last(arguments);
  var key = _.first(_.keys(prop));
  var value = _.first(_.values(prop));
  var len = arguments.length;
  for (var i = 0; len - 1 > i; i++) {
    arguments[i][key] = value;
  }
};
