# vue-tpl

> 项目运行前置条件: 电脑已安装 [Node.js](https://nodejs.org/en/)

## 安装项目依赖

```bash
npm install
```

### 开发热更新 Compiles and hot-reloads for development

```bash
npm run serve
```

### 编译打包文件

```bash
npm run build
```

### ESLint 检查与自动修复

```bash
npm run lint
```

### 生成 element ui 自定义变量

```bash
npm run et:var
```

生成的变量文件路径为：`./src/libs/elementui/themes/var.scss`

### 打包自定义主题(监听模式)

```bash
npm run et:watch [name]
```

name: 自定义主题名称, 默认为 `default`;

### 打包自定义主题

```bash
npm run et:build [name]
```

* name: 自定义主题名称, 默认为 `default`;
* 主题默认生成路径为: `src/libs/elementui/themes/[name]`;
* 在 `babel.config.js` 文件中进行相应配置:

```javascript
    plugins: [
    // 其它配置...
    [
      'component',
      {
        libraryName: 'element-ui',
        // 自定义主题文件路径, 更换主题时需要调整此处
        styleLibraryName: '~src/libs/elementui/themes/[name]',
      },
    ],
  ],
```
