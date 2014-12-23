require('harmony-reflect');
module.exports = function (args) {
  var handler = function () {};
  handler.set = function(target, prop, value, receiver) {
    Object.keys(args).forEach(function (key) {
      args[key][prop] = value;
    });
  };
  return new Proxy({}, handler);
};
