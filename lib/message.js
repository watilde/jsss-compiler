module.exports = function () {
  var fs = require('fs');
  var path = require('path');
  var license_md = path.resolve(__dirname + '/../LICENSE.md');
  var license = fs.readFileSync(license_md);
  var version = require('../package.json').version;
  var message = 'JSSS-Compiler';
  message += '@' + version;
  message += '\n';
  message += 'JavaScript-Based Style Sheets Preprocessor';
  message += '\n\n';
  message += license;

  return message;
};
