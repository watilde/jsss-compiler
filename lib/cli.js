var fs = require('fs');
var parse = require('./parse');
var argv = process.argv;
var opt = {
  encoding: 'utf8'
};

var file = argv[2];
var jsss = fs.readFileSync(file, opt);
var css = parse(jsss);

var out = argv[3] || false;
if (!out) console.log(css);
fs.writeFileSync(out, css);
