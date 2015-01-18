module.exports = function () {
  var message = '';
  message += 'Usage:';
  message += '\n';
  message += '    jsss style.js                Compile JSSS to stdout';
  message += '\n';
  message += '    jsss style.js -o style.css   Compile JSSS to file';
  message += '\n';
  message += '\n';
  message += 'Options:'
  message += '\n';
  message += '    -h, --help      Print this message';
  message += '\n';
  message += '    -o, --out       Output to single file';
  message += '\n';
  message += '    -e, --encoding  JSSS File encoding (default: utf8)'
  message += '\n';
  message += '    -v, --version   Print jsss-compiler version';
  message += '\n';
  process.stdout.write(message);
};
