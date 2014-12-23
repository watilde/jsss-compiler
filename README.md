# JSSS-Compiler

JavaScript-Based Style Sheets Preprocessor

## Badgeds
+ [![NPM Version](http://img.shields.io/npm/v/jsss-compiler.svg)](https://www.npmjs.org/package/jsss-compiler)
+ [![MIT LICENSE](http://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/watilde/jsss-compiler/blob/master/LICENSE)
+ [![Build Status](https://api.travis-ci.org/watilde/jsss-compiler.svg)](https://travis-ci.org/watilde/jsss-compiler)
+ [![Dependency Status](https://gemnasium.com/watilde/jsss-compiler.svg)](https://gemnasium.com/watilde/jsss-compiler)

## Original
http://www.w3.org/Submission/1996/1/WD-jsss-960822

## Install

Using npm.

```
$ npm install -g jsss-compiler
```

Confirm.

```
$ jsss -h
Usage:
    jsss style.js           Compile JSSS to stdout
    jsss style.js style.css Compile JSSS to file
    jsss -h, --help         display this help message
    jsss -v, --version      display the version number
```

## Example
### style.js
```js
tags.H1.color = 'red';
tags.H1.fontSize = '15px';

ids.foo.color = 'red';
ids.foo.fontSize = '15px';
ids.bar.color = 'blue';
ids.bar.fontSize = '10px';

classes.foo.all.color = 'red';
classes.foo.all.fontSize = '15px';
classes.bar.H1.color = 'blue';
classes.bar.H1.fontSize = '10px';

contextual(tags.UL, tags.LI).color = 'red';
contextual(tags.UL, tags.LI).fontSize = '10px';
```

### Compile
```
$ jsss style.js style.css
```

### style.css
```css
H1 {
  color: red;
  font-size: 15px;
}

UL {
  color: red;
  font-size: 10px;
}

LI {
  color: red;
  font-size: 10px;
}

#foo {
  color: red;
  font-size: 15px;
}

#bar {
  color: blue;
  font-size: 10px;
}

.foo {
  color: red;
  font-size: 15px;
}

H1.bar {
  color: blue;
  font-size: 10px;
}
```

## tasks
https://github.com/watilde/gulp-jsss
