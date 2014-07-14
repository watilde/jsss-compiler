var fs = require('fs');
var path = require('path');
var jsss = require('../lib/jsss');
var opt = {
  encoding: 'utf8'
};
var path = {
  jsss: path.resolve(__dirname + '/style.js'),
  fixture: path.resolve(__dirname + '/fixture.css')
};

var code = fs.readFileSync(path.jsss, opt);
var fixture = fs.readFileSync(path.fixture, opt);
var css = jsss.parse(code);

fs.writeFileSync(__dirname + '/out.css', css);
if (css !== fixture) {
  throw Error(';(');
}
