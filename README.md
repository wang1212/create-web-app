# Dev-Starter

Project development startup configuration item.

## Directory Structure

- src   // 源代码
  - components  // 系统组件
  - modules     // 系统模块
  - utils       // 工具组件
  - vendors     // 外部依赖
  - config      // 开发配置

- dist  // 压缩、编译后的代码，用于生产环境

- config    // 开发环境配置
  - nginx
    - nginx.conf    // nginx 服务器配置
    - App.conf      // 项目相关的 nginx 服务器配置
  - gulpfile.config.js      // gulp 路径配置
  - gulpfile.dev.js         // gulp 任务配置
  - webpack.config.js       // webpack 配置
  - webpack.dll.config.js   // webpack 外部依赖配置
  - jsdoc.config.js         // JSDOC 配置

- docs // 项目文档
  - jsdoc   // JSDOC 生成的 API 文档

- .eslintrc.json  // eslint 代码规则检查配置

## Workflow

- 利用 nginx 反向代理实现前后端的完全分离开发/部署解决方案
- gulp 任务流实现自动化构建，webpack 则进行 js 文件模块化管理。

## API Document

项目的 API 文档由 JSDOC 自动生成。