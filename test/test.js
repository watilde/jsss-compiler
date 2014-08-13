var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;
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

// Test failure
if (css !== fixture) {
  fs.writeFileSync(__dirname + '/style.css', css);
  exec('diff ' + __dirname + '/fixture.css ' + __dirname + '/style.css',
    function (err, stdout, stderr) {
      console.error('See: diff test/fixture.css test/style.css');
      process.stdout.write(stdout);
      process.exit(1);
    }
  );

  return;
}

// All test passed
if (fs.existsSync(__dirname + '/style.css')) {
  fs.unlinkSync(__dirname + '/style.css');
}
process.exit(0);
