# Dev-Starter

:smile: 使用 webpack 进行项目自动化构建配置。

## Directory Structure

    App/
    ├── build/    # 压缩、编译后的代码，用于生产环境
    ├── docs/     # 项目文档
    |   └── jsdoc/      # JSDOC 生成的 API 文档
    |── config/   # 开发环境配置
    |   |── nginx.conf            # nginx 服务器配置
    |   ├── path.config.js        # 项目路径配置
    |   ├── webpack.config.js     # webpack 配置
    |   ├── webpack.dll.config.js # webpack 外部依赖配置
    |   ├── jest.config.js        # jest  代码测试配置
    |   └── jsdoc.config.js       # jsdoc 文档配置
    |── public/   # 公共静态资源
    |   ├── manifest.json  # 应用图标，名称信息
    |   └── index.ejs      # 主页 html 模板
    |── scripts/  # 脚本
    |   └── index.js       # 启动脚本
    |── src/      # 源代码
    |   ├── components/    # 组件
    |   |   └── shared/    # 公共组件
    |   ├── utils/         # 工具组件、常量
    |   ├── vendors/       # 外部依赖
    |   ├── app.js
    |   └── app.scss
    |── .babelrc.js       # babel  编译配置
    |── .eslintrc.json    # eslint 代码规则检查配置
    |── .flowconfig       # flow 语法检查配置
    └── tsconfig.json     # typescript 配置文件

## Features

- Webpack：使用 [webpack](https://webpack.js.org/) 进行模块化管理，打包、压缩、优化。
- BrowserSync：使用 [Browser-Sync](https://www.browsersync.io/) 插件配合 Webpack 实现热重载（hot reload），提高开发效率。
- SPA：项目以 [SPA 单页面应用](https://en.wikipedia.org/wiki/Single-page_application) 方式进行构建。
- PWA：使用谷歌的 [WorkBox](https://developers.google.com/web/tools/workbox/) 工具提供的 [workbox-webpack-plugin](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin) 插件来生成 `service-work.js` 文件，对应用数据进行离线缓存。
- Flow.js：支持使用 [flow](https://flow.org/) 来做静态语法校验。
- TypeScript：支持使用 [TypeScript](http://www.typescriptlang.org/) 进行编码。
- ESLint：使用 [ESLint](https://eslint.org/) 来做语法规则检查。
- Jest：使用 [jest](https://jestjs.io/) 来做单元测试。
- JSDoc：使用 [jsdoc 3](http://usejsdoc.org/) 生成 API 文档，因此在开发时注释风格应符合 jsdoc 规则。
- Nginx：使用 [nginx](http://nginx.org/) 反向代理实现前后端的完全分离开发/部署解决方案。

## Usage

1. 安装依赖

    首先，安装开发环境所有的依赖

		npm install

    若使用 [Flow.js](https://flow.org/)，还需运行以下命令安装类型定义库：

        npm run flow-typed

2. 服务器

    若使用反向代理，需安装好 nginx，配置文件在 **config/nginx.conf** 中，启动 nginx ：

		start nginx

	若不使用反向代理，更改 **scripts/index.js** 中 [BrowserSync](https://www.browsersync.io/) 插件的配置即可。

3. 启动项目（开发环境）

		npm run start

4. 执行代码测试

        npm run test

5. 生成 jsdoc 文档

		npm run jsdoc

6. 构建生产环境代码，将会在 **build/** 目录中生成部署代码

		npm run build