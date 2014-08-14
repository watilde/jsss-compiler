module.exports = function () {
  var message = '';
  message += 'Usage:';
  message += '\n';
  message += '    jsss style.js           Compile JSSS to stdout';
  message += '\n';
  message += '    jsss style.js style.css Compile JSSS to file';
  message += '\n';
  message += '    jsss -h, --help         display this help message';
  message += '\n';
  message += '    jsss -v, --version      display the version number';
  message += '\n';
  process.stdout.write(message);
};
