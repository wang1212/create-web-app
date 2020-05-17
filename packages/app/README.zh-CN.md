# Web App

PWA（Progressive Web App），渐进式 Web 应用。

## 项目结构

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
    |   ├── assets/        # 静态资源
    |   ├── vendors/       # 外部依赖
    |   ├── app.js
    |   └── app.scss
    |── .babelrc.js       # babel  编译配置
    |── .eslintrc.json    # eslint 代码规则检查配置
    |── .prettierrc.yml   # prettier 代码格式化配置
    |── tsconfig.json     # typescript 配置文件
    └── CHANGELOG.md      # 项目迭代更新记录

## 项目特点

-   [SPA](https://en.wikipedia.org/wiki/Single-page_application) - 应用以 SPA 单页面方式进行构建。
-   [PWA](https://en.wikipedia.org/wiki/Progressive_web_applications) - 使用谷歌的 [WorkBox](https://developers.google.com/web/tools/workbox/) 工具提供的 [workbox-webpack-plugin](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin) 插件来生成 `service-work.js` 文件，对应用数据进行离线缓存。
-   [Webpack](https://webpack.js.org/) - 自动化项目构建，模块化管理、打包、压缩、优化。
-   [Browser-Sync](https://www.browsersync.io/) - 该插件配合 Webpack 实现热重载（hot reload）。
-   [Babel](https://babeljs.io/) - 支持使用 E6/7/8/9 进行编码。
-   [TypeScript](http://www.typescriptlang.org/) - 支持使用 TypeScript 进行编码。
-   [ESLint](https://eslint.org/) - 语法规则检查。
-   [Prettier](https://prettier.io/) - 代码格式化。
-   [Jest](https://jestjs.io/) - 单元测试。
-   [JSDoc 3](http://usejsdoc.org/) - 生成 API 文档，因此在开发时注释风格应符合 jsdoc 规则。
-   [Nginx](http://nginx.org/) - 反向代理实现前后端的完全分离开发/部署解决方案。

## 使用

下载该项目的所有代码到本地。

1.  首先，安装开发环境所有的依赖

        npm install

2.  服务器

    若使用反向代理，需在本地安装好 nginx，配置文件在 **config/nginx.conf** 中，启动 nginx ：

        start nginx

    若不使用反向代理，更改 **scripts/index.js** 中 [BrowserSync](https://www.browsersync.io/) 插件的配置即可。

3.  启动项目（开发环境）

        npm run start

4.  执行代码类型检查

    针对 `.ts, .tsx` 文件，运行：

        npm run type-check

    针对所有文件，运行：

        npm run lint

5.  执行代码测试

        npm run test

6.  生成 jsdoc 文档

        npm run doc

7.  构建生产环境代码，将会在 **build/** 目录中生成部署代码

        npm run build
