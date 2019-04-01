/* eslint-disable */
const yargs = require('yargs');
const et = require('element-theme');
const conf = require('./config');

const { argv } = yargs
  .option('name', {
    alias: 'n',
    describe: '自定义主题名称',
    default: conf.themeName
  });

const trim = str => str.replace(/\s+/g, '');

// 打包的主题名称
const themeName = (argv.name && trim(argv.name)) || (argv.n && trim(argv.n));

// build
et.run({
  config: conf.varPath,
  out: `${conf.themePath}/${themeName}`,
  themeName,
  minimize: conf.minimize,
  scope: conf.scope
});

// watch mode
// et.watch({
//   config: conf.varPath,
//   out: `${conf.themePath}/${themeName}`,
//   themeName,
//   scope: conf.scope
// });

