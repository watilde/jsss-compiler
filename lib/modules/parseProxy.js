module.exports = function () {
  var Reflect = require('harmony-reflect');
  var handler = Reflect;
  var get = Reflect.get;
  handler.get = function (target, name, receiver) {
    if (name in receiver == false) {
      if (name != 'inspect') {
        target[name] = new Proxy({}, handler);
      }
    }
    return get(target, name, receiver);
  };

  return new Proxy({}, handler);
};
