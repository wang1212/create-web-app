# 创建 Web App

![LICENSE](https://badgen.net/github/license/wang1212/create-web-app)
[![NPM VERSION](https://badgen.net/npm/v/@wang1212/create-web-app)](https://www.npmjs.com/package/@wang1212/create-web-app)
![DOWNLOAD](https://badgen.net/npm/dt/@wang1212/create-web-app)
![LAST COMMIT](https://badgen.net/github/last-commit/wang1212/create-web-app)
![GITHUB PACKAGE CI](https://img.shields.io/github/workflow/status/wang1212/create-web-app/Node.js%20Package?label=ci/package%20publish)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/7bc62c3b5faa4607a923339003583253)](https://www.codacy.com/gh/wang1212/create-web-app/dashboard?utm_source=github.com&utm_medium=referral&utm_content=wang1212/create-web-app&utm_campaign=Badge_Grade)

[English](./README.md) | 简体中文

:coffee: 创建 [PWA（Progressive Web App，渐进式 Web 应用）](https://web.dev/progressive-web-apps/) 项目开发环境启动配置。

_**这个包现在是纯 ESM，查看[这里](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)。**_

_**从 `0.3.0` 版本开始, 不再使用 [flow.js][0], 用 [typescript][1] 作为替代。**_

[0]: https://flow.org/ 'Flow: A Static Type Checker for JavaScript'
[1]: http://www.typescriptlang.org/ 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript'

## 模板类型

支持以下类型：

- javascript
- react.js（或者 [官方的](https://create-react-app.dev/)，:point_right: **现在更推荐 [next.js](https://nextjs.org/)** :rocket:）

`javascript` 类型构建 PWA 不依赖于任何开发框架, 而 `react.js` 类型构建 PWA 则是基于 React.js 框架及其生态技术，例如 React.js, Redux.js, and React Router。

## 用法

- 您无需在计算机上安装该软件包就可以使用它，运行:

  ```bash
  npm init @wang1212/web-app
  npx @wang1212/create-web-app // 与上一行相同
  ```

- 您也可以在计算机上安装该软件包，然后运行:

  ```bash
  // 安装该软件包
  npm install -g @wang1212/create-web-app

  // 现在, 使用它创建一个 Web 应用项目
  create-web-app
  ```

注意: `create-web-app` 有一个别名 `create-pwa`。

## 详细信息

更多信息, 阅读 `templates/*app/README.zh-CN.md` 文件的内容。

## 开发准则

### Git 提交信息格式

采用[社区提交格式最佳实践](https://www.conventionalcommits.org/)：

```bash
# 以前
git commit

# 现在
npm run commit
```

_这种约束依赖于社区提供的工具 [commitizen](http://commitizen.github.io/cz-cli/) 和 [commitlint](https://commitlint.js.org/)。_

### npm 发布

该模块的版本管理采用社区推荐的规范[语义化版本控制](https://semver.org/)。跟随版本变动会维护一个**变更日志(CHANGELOG.md)**（[了解为什么这么做](https://keepachangelog.com/)）。

```bash
# 在发布到 npm 存储库之前更新版本并生成更改日志
npm run release # npm run release -- --first-release
# 或者，进行预览
npm run release -- --dry-run

# 然后发布
npm publish # npm publish --access public
```

_这些工作是在社区提供的 [standard-version](https://github.com/conventional-changelog/standard-version) 工具的帮助下完成的。_

## 相关的

如果你想开发一个 node 模块包（库），也许你可以看看：

> [create-lib-starter](https://github.com/wang1212/create-lib-starter)

或，其它类似的东西：

> [awesome-template](https://github.com/wang1212/awesome-template)
