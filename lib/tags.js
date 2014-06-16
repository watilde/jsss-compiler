/**
 * var tags = {
 *   "H1": {
 *     "font-size": "15px",
 *     "color": "red"
 *   },
 *   "H2": {
 *     "font-size": "10px",
 *     "color": "blue"
 *   }
 *};
 **/
module.exports = function(tags) {
  var _ = require('underscore');
  var css = require('css');
  var ast = _.reduce(tags, function(memo, properties, selectors) {
    var declarations = _.reduce(properties, function (memo, value, property) {
      memo.push({
        "type": "declaration",
        "property": property,
        "value": value
      });
      return memo;
    }, []);

    var rule = {
      "type": "rule",
      "selectors": [selectors],
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
