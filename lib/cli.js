var fs = require('fs');
var updateNotifier = require('update-notifier');
var jsss = require('./jsss');
var pkg = require(__dirname + '/../package.json');
var argv = require('optimin')(process.argv.slice(2), {
  version: {
    alias: 'v',
    boolean: true
  },
  help: {
    alias: 'h',
    boolean: true
  },
  encoding: {
    alias: 'e'
  },
  out: {
    alias: 'o'
  }
});

updateNotifier({
  packageName: pkg.name,
  packageVersion: pkg.version
}).notify();

if (argv.version) {
  jsss.version();
  return;
}

if (argv.help) {
  jsss.help();
  return;
}

if (typeof argv._ !== 'object') {
  jsss.message();
  return;
}

var files = argv._;
var encoding = argv.encoding || 'utf8';
var opt = {
  encoding: encoding
};
var code = '';
var out = argv.out || false;

files.forEach(function (file) {
  if (!fs.existsSync(file)) {
    process.stdout.write('No such file or directory "' + file + '"\n');
    process.exit(1);
    return;
  }
  code += fs.readFileSync(file, opt);
});

var css = jsss.parse(code);
if (!out) {
  process.stdout.write(css);
} else {
  fs.writeFileSync(out, css);
}
