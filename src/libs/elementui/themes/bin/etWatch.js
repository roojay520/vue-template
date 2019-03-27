// eslint-disable-next-line
const et = require('element-theme');
const conf = require('./config');

// watch mode
et.watch({
  config: conf.varPath,
  out: conf.themePath,
});
