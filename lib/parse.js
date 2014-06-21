module.exports = function(jsss) {
  var _ = require('underscore');
  var Reflect = require('harmony-reflect');
  var tags = classes = ids = {};
  var handler = Reflect;
  var get = Reflect.get;
  var set = Reflect.set;
  handler.get = function (target, name, receiver) {
    if (name in receiver === false) {
      if (name !== 'inspect') {
        receiver[name] = {};
        target[name] = {};
      }
    }
    return get(target, name, receiver);
  };
  handler.set = function(target, name, value, receiver) {
    if (name in receiver === false) {
      target[name] = {};
    }
    return set(target, name, value, receiver);
  }

  tags = new Proxy({}, handler),
  classes = new Proxy({}, handler),
  ids = new Proxy({}, handler);
  eval(jsss);
  console.log(classes);
};
