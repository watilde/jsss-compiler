var contextual = require('jsss-contextual');
var _ = require('underscore');

tags.H1.color = 'red';
tags.H1.fontSize = '15px';

// use underscore.js
_.extend(tags.H2, {
  color: 'blue',
  fontSize: '10px'
});

ids.foo.color = 'red';
ids.foo.fontSize = '15px';
ids.bar.color = 'blue';
ids.bar.fontSize = '10px';

classes.foo.all.color = 'red';
classes.foo.all.fontSize = '15px';
classes.bar.H1.color = 'blue';
classes.bar.H1.fontSize = '10px';

// use jsss-contextual
contextual(tags.UL, tags.LI, {color: 'red'});
contextual(tags.UL, tags.LI, {fontSize: '10px'});

selectors['.baz::before'].color = 'blue';
selectors['.baz::before'].fontSize = '10px';
selectors['.baz:hover'].color = 'red';
selectors['.baz:hover'].fontSize = '15px';
