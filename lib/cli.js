var fs = require('fs');
var updateNotifier = require('update-notifier');
var jsss = require('./jsss');
var argv = process.argv;
var pkg = require(__dirname + '/../package.json');

updateNotifier({
  packageName: pkg.name,
  packageVersion: pkg.version
}).notify();

if(argv[2] !== void 0) {
  switch (argv[2]) {
    case '-v':
      if (argv.length === 3) {
        jsss.version();
      }
      break;
    case '--version':
      if (argv.length === 3) {
        jsss.version();
      }
      break;
    case '-h':
      if (argv.length === 3) {
        jsss.help();
      }
      break;
    case '--help':
      if (argv.length === 3) {
        jsss.help();
      }
      break;
    default:
      if (argv.length === 4 || argv.length === 3) {
        var file = argv[2];
        if (!fs.existsSync(file)) {
          process.stdout.write('No such file or directory "' + file + '"\n');
          return;
        }

        var opt = {
          encoding: 'utf8'
        };
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
  jsss.message();
  return;
}

