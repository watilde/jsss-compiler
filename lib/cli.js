var fs = require('fs');
var jsss = require('./jsss');
var argv = process.argv;
if (3 > argv.length) {
  console.info(':D');
  return;
}
var opt = {
  encoding: 'utf8'
};

var file = argv[2];
var code = fs.readFileSync(file, opt);
var css = jsss.parse(code);
var out = argv[3] || false;

if (!out) {
  console.log(css);
} else {
  fs.writeFileSync(out, css);
}
