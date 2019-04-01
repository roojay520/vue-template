const CompressionPlugin = require('compression-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  // 部署应用包时的基本 URL
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  // 打包路径
  outputDir: 'dist',
  // 静态资源(js, css, img 等)路径
  assetsDir: '',
  productionSourceMap: false,

  // css 配置
  css: {
    // css 分离
    extract: true,
    sourceMap: false,
    loaderOptions: {
      sass: {
        // 全局变量注入
        data: `@import 'src/assets/scss/var.scss';`,
      },
    },
  },

  chainWebpack: (config) => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch');
  },

  // webpack 配置
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        performance: {
          // 去掉 size limit(244kb) 警告
          hints: false,
        },

        optimization: {
          // 代码拆分
          splitChunks: {
            minSize: 50000,
            maxSize: 250000,
          },
        },
        plugins: [
          // Gzip 压缩
          new CompressionPlugin({
            test: /\.js$|.css$/,
            // 启用压缩的最小值
            threshold: 10240,
            // 是否删除未压缩的原版本文件
            deleteOriginalAssets: false,
          }),
          // lodash 按需引入
          new LodashModuleReplacementPlugin(),
        ],
      };
    }
    return {
      devtool: 'source-map',
    };
  },

  // 开发服务器配置
  devServer: {
    open: false,
    // host: 'localhost',
    port: 4399,
    https: false,
    hotOnly: false,
    // 将任何未知请求 (没有匹配到静态文件的请求) 代理到该字段指向的地方
    proxy: {
      '/mock': {
        target: 'http://127.0.0.1:3000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/mock': '',
        },
      },
    },
    // eslint-disable-next-line
    before: app => {
    },
  },
  // 构建时开启多进程处理 babel 编译
  // eslint-disable-next-line
  parallel: require('os').cpus().length > 1,
  // 需要显式转译的 modules
  transpileDependencies: [],
};
