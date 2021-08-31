# Web App with React.js

构建基于 React.js、Redux、React-Router 开发的 PWA（Progressive Web App），渐进式 Web 应用。

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
    |   ├── devServer.config.js   # 开发服务器配置
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
    |   ├── reducers/      # redux 配置文件
    |   ├── utils/         # 工具组件、常量
    |   ├── assets/        # 静态资源
    |   ├── vendors/       # 外部依赖
    |   ├── index.js
    |   └── index.scss
    |── .babelrc.js       # babel  编译配置
    |── .eslintrc.json    # eslint 代码规则检查配置
    |── .stylelintrc.js   # stylelint 代码规则检查配置
    |── .prettierrc.yml   # prettier 代码格式化配置
    |── tsconfig.json     # typescript 配置文件
    └── CHANGELOG.md      # 项目迭代更新记录

## 项目特点

- [SPA](https://en.wikipedia.org/wiki/Single-page_application) - 应用以 SPA 单页面方式进行构建。
- [PWA](https://en.wikipedia.org/wiki/Progressive_web_applications) - 使用谷歌的 [WorkBox](https://developers.google.com/web/tools/workbox/) 工具提供的 [workbox-webpack-plugin](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin) 插件来生成 `service-work.js` 文件，对应用数据进行离线缓存。
- [Webpack](https://webpack.js.org/) - 自动化项目构建，模块化管理、打包、压缩、优化。
- [Babel](https://babeljs.io/) - 支持使用 E6/7/8/9 进行编码。
- [React.js](https://reactjs.org/) - 基于 React 开发。
- [Redux.js](https://redux.js.org/) - 应用状态管理。
- [React Router](https://reacttraining.com/react-router/) - 页面路由管理。
- [TypeScript](http://www.typescriptlang.org/) - 支持使用 TypeScript 进行编码。
- [ESLint](https://eslint.org/) - JS 语法规则检查。
- [stylelint](https://stylelint.io/) - CSS 语法规则检查。
- [Prettier](https://prettier.io/) - 代码格式化。
- [Jest](https://jestjs.io/) - 单元测试。
- [JSDoc 3](http://usejsdoc.org/) - 生成 API 文档，因此在开发时注释风格应符合 jsdoc 规则。
- [Nginx](http://nginx.org/) - 反向代理实现前后端的完全分离开发/部署解决方案。

## 使用

下载该项目的所有代码到本地。

1.  首先，安装开发环境所有的依赖

        git init && npm install

2.  服务器

    服务器已默认配置好，若使用代理，在配置文件 **devServer.config.js** 中添加即可，具体查看文档。

3.  启动项目（开发环境）

        npm run start

4.  执行代码类型检查

    针对 `.ts, .tsx` 文件，运行：

        npm run type-check

    针对 `.js, .jsx, .ts, .tsx` 文件，运行：

        npm run lint-js

    针对 `.css, .sass, .scss` 文件，运行：

        npm run lint-css

5.  执行代码测试

        npm run test

6.  生成 jsdoc 文档

        npm run docs

7.  构建生产环境代码，将会在 **build/** 目录中生成部署代码

        npm run build
