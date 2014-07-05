# JSSS-Compiler

JavaScript-Based Style Sheets Preprocessor

##Original
http://www.w3.org/Submission/1996/1/WD-jsss-960822

## Install

Using npm.

```
$ npm install -g jsss-compiler
```

Confirm.

```
$ jsss
:D
```

## Example
### style.jsss
```
tags.H1.color = "red";
tags.H1.fontSize = "15px";
tags.H2.color = "blue";
tags.H2.fontSize = "10px";

ids.foo.color = "red";
ids.foo.fontSize = "15px";
ids.bar.color = "blue";
ids.bar.fontSize = "10px";

classes.foo.all.color = "red";
classes.foo.all.fontSize = "15px";
classes.bar.H1.color = "blue";
classes.bar.H1.fontSize = "10px";

contextual(tags.UL, tags.LI, {color: "red"});
contextual(tags.UL, tags.LI, {fontSize: "10px"});
```

### Compile
```
$ jsss style.js style.css
```

### style.css
```
H1 {
  color: red;
  font-size: 15px;
}

H2 {
  color: blue;
  font-size: 10px;
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

.bar H1 {
  color: blue;
  font-size: 10px;
}
```
