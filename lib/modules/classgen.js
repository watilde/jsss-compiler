module.exports = function(obj) {
  var _ = require('underscore');
  var css = require('css');
  var cast = require('./cast');

  var ast = _.reduce(obj, function(memo, properties, selectors) {
    if (_.isEmpty(properties)) return memo;
    _.each(properties, function (_value, key) {
      if (_.isEmpty(_value)) return memo;
      var declarations = _.reduce(_value, function (memo, value, property) {
        if (_.isEmpty(value)) return memo;
        property = cast(property);
        memo.push({
          "type": "declaration",
          "property": property,
          "value": value
        });
        return memo;
      }, []);
      key = (key === 'all') ? '' : key;

      var rule = {
        "type": "rule",
        "selectors": [key + '.' + selectors],
        "declarations": declarations
      };
      memo.stylesheet.rules.push(rule);
    });

    return memo;
  }, {
    "type": "stylesheet",
      "stylesheet": {
        "rules": []
      }
  });

  return css.stringify(ast);
};
