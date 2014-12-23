module.exports = function (obj) {
  require('harmony-reflect');

  var handler = function () {};
  handler.get = function (target, name, receiver) {
    if (name in receiver == false) {
      if (name != 'inspect') {
        target[name] = new Proxy({}, handler);
      }
    }
    return target[name];
  };

  return new Proxy(obj, handler);
};
