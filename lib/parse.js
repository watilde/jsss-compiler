module.exports = function(jsss) {
  var Reflect = require('harmony-reflect');
  var taggen = require('./taggen');
  var idgen = require('./idgen');
  var classgen = require('./classgen');
  var tags = classes = ids = {};
  var handler = Reflect;
  var get = Reflect.get;
  var css = '';
  handler.get = function (target, name, receiver) {
    if (name in receiver == false) {
      if (name != 'inspect') {
        receiver[name] = new Proxy({}, this);
      }
    }
    return get(target, name, receiver);
  };
  tags = new Proxy({}, handler),
  classes = new Proxy({}, handler),
  ids = new Proxy({}, handler);

  eval(jsss);

  css += taggen(tags);
  css += '\n\n';
  css += idgen(ids);
  css += '\n\n';
  css += classgen(classes);
  return css;
};
