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
    'equire',
    [
      'component',
      {
        libraryName: 'element-ui',
        // 默认主题
        styleLibraryName: 'theme-chalk',
        // 自定义主题文件路径, 更换主题时需要调整此处[name]为自定义的主题名
        // styleLibraryName: '~src/libs/elementui/themes/[name]',
      },
    ],
  ],
  env: {
    development: {
      plugins: ['dynamic-import-node'],
    },
  },
};
