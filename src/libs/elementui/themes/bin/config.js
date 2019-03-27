// eslint-disable-next-line
const yargs = require('yargs');

const { argv } = yargs
  .option('name', {
    alias: 'n',
    default: 'default',
    describe: '自定义主题名称',
    demand: true,
  });

const trim = str => str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

// 打包的主题名称
const themeName = trim(argv.name) || trim(argv.n) || 'default';

const conf = {
  varPath: 'src/libs/elementui/themes/var.scss',
  themePath: `src/libs/elementui/themes/${themeName}`,
  minimize: true,
};

module.exports = conf;
