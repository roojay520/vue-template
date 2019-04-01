module.exports = {
  presets: [
    ['@vue/app', {
      useBuiltIns: 'entry',
      corejs: {
        version: 3,
        proposals: true,
      },
    }],
  ],
  plugins: [
    'lodash',
    'equire',
    [
      'component',
      {
        libraryName: 'element-ui',
        // 自定义主题文件路径 ~src/libs/elementui/themes/[name], 更换主题时需要调整此处[name]为自定义的主题名
        styleLibraryName: '~src/libs/elementui/themes/default',
      },
    ],
  ],
  env: {
    development: {
      plugins: ['dynamic-import-node'],
    },
  },
};
