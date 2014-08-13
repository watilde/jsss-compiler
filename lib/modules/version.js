module.exports = function () {
  var fs = require('fs');
  var path = require('path');
  var pkg = path.resolve(__dirname + '/../../package.json');
  var version = 'v' + require(pkg).version;

  process.stdout.write(version + '\n');
};
