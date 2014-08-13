module.exports = function () {
  var message = '';
  message += 'Usage:\n';
  message += '    jsss -h                    Show this message\n';
  message += '    jsss -v                    Show jsss-compiler version\n';
  message += '    jsss <file.js>             Compile file.js, out to stdout\n';
  message += '    jsss <file.js> <file.css>  Compile file.js, out to file.css\n';
  process.stdout.write(message);
};
