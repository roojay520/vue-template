// eslint-disable-next-line
const et = require('element-theme');
const conf = require('./config');

// build
et.run({
  config: conf.varPath,
  out: conf.themePath,
  minimize: conf.minimize,
});
