var fs = require('fs');
var jsss = require('./jsss');
var argv = process.argv;
var message = require('./message');
var pkg = fs.readFileSync(__dirname + '/../package.json');

if(argv[2] !== void 0) {
  switch (argv[2]) {
    case '-v':
      if (argv.length === 3) {
        jsss.version();
      }
      break;
    case '-h':
      if (argv.length === 3) {
        jsss.help();
      }
      break;
    default:
      if (argv.length === 4) {
        var opt = {
          encoding: 'utf8'
        };

        var file = argv[2];
        var code = fs.readFileSync(file, opt);
        var css = jsss.parse(code);
        var out = argv[3] || false;

        if (!out) {
          process.stdout.write(css);
        } else {
          fs.writeFileSync(out, css);
        }
      } else {
        var message = 'Unrecognized command line argument: ';
        message += argv[2];
        message += ' ( see: \'jsss -h\' )';
        process.stdout.write(message);
        break;
      }
  }
} else {
  process.stdout.write(message());
  return;
}

