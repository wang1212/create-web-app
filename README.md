# Dev-Starter-with-react

Project development launch configuration using webpack. Suitable for applications that rely on react.js && redux && react-router development.

## Directory Structure

    App/
    ├── dist/     # 压缩、编译后的代码，用于生产环境
    ├── docs/     # 项目文档
    |   └── jsdoc/      # JSDOC 生成的 API 文档
    |── config/   # 开发环境配置
    |   |── nginx.conf            # nginx 服务器配置
    |   ├── path.config.js        # 项目路径配置
    |   ├── webpack.config.js     # webpack 配置
    |   ├── webpack.dll.config.js # webpack 外部依赖配置
    |   └── jsdoc.config.js       # JSDOC 配置
    |── src/      # 源代码
    |   ├── components/    # 组件
    |   |   └── shared/    # 公共组件
    |   ├── reduxs/        # redux 配置文件
    |   ├── utils/         # 工具组件、常量
    |   ├── vendors/       # 外部依赖
    |   ├── app.html
    |   ├── app.jss
    |   └── app.scss
    |── .eslintrc.json    # eslint 代码规则检查配置
    |── .flowconfig       # flow 语法检查配置
    └── index.js          # 启动脚本

## Workflow

- 利用 nginx 反向代理实现前后端的完全分离开发/部署解决方案
- 利用 webpack 进行模块化管理，打包、压缩、优化

## API Document

利用 JSDOC 生成 API 文档，因此在开发时注释风格应符合 jsdoc 规则。

## Grammar check

使用 flow.js 来做静态语法校验。

## Usage

1. 首先，安装开发环境所有的依赖

		npm install
        npm run flow-typed

2. 服务器

    若使用反向代理，需安装好 nginx，配置文件在 **config/nginx/** 中，启动 nginx ：

		start nginx

	若不使用反向代理，更改 **gulpfile.js** 中 browser_sync 插件的配置即可。

3. 启动项目（开发环境）

		npm run start

4. 生成 jsdoc 文档

		npm run jsdoc

4. 构建生产环境代码，将会在 **dist/** 目录中生成部署代码

		npm run build
