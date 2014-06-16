module.exports = function(jsss) {
  var _ = require('underscore');
  var esprima = require('esprima');
  var escodegen = require('escodegen');
  var syntax = esprima.parse(jsss);

  function getLeftMember(obj) {
    if (obj.type !== 'ExpressionStatement') {
      return void 0;
    }

    if (obj.expression.type !== 'AssignmentExpression') {
      return void 0;
    }
    return obj.expression.left;
  }

  var obj =  _.reduce(syntax.body, function(memo, value) {
    if (_.isUndefined(value)) return memo;
    var left = getLeftMember(value);
    if (_.isUndefined(left)) return memo;
    memo.push(left);
    return memo;
  }, []);

  console.log(JSON.stringify(obj, 2, 2));
};
