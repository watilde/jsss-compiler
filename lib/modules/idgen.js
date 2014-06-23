module.exports = function(obj) {
  var _ = require('underscore');
  var css = require('css');
  var cast = require('./cast');

  var ast = _.reduce(obj, function(memo, properties, selectors) {
    if (_.isEmpty(properties)) return memo;
    var declarations = _.reduce(properties, function (memo, value, property) {
      if (!_.isString(value)) return memo;
      property = cast(property);
      memo.push({
        "type": "declaration",
        "property": property,
        "value": value
      });
      return memo;
    }, []);

    var rule = {
      "type": "rule",
      "selectors": ['#' + selectors],
      "declarations": declarations
    };

    memo.stylesheet.rules.push(rule);
    return memo;
  }, {
    "type": "stylesheet",
      "stylesheet": {
        "rules": []
      }
  });

  return css.stringify(ast);
};
