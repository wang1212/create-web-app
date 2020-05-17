# 创建 Web App

> **从 `0.3.0` 版本开始, 不再使用 [flow.js][0], 用 [typescript][1] 作为替代。**

[0]: https://flow.org/ 'Flow: A Static Type Checker for JavaScript'
[1]: http://www.typescriptlang.org/ 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript'

:coffee: 创建 PWA（Progressive Web App，渐进式 Web 应用） 项目开发环境启动配置。

## 内容

支持以下两种：

-   create-web-app
-   create-react-app（或者 [官方的](https://create-react-app.dev/)）

`create-web-app` 构建 PWA 不依赖于任何开发框架, 而 `create-react-app` 构建 PWA 则是基于 React.js 框架及其生态技术，例如 React.js, Redux.js, and React Router。

## 使用

-   您无需在计算机上安装该软件包就可以使用它，运行:

```
npm init @wang1212/web-app [project_name]
npx @wang1212/create-web-app [project_name]		// 与上一行相同
```

或者

```
npx --package @wang1212/create-web-app create-react-app [project_name]	// 基于 react.js 构建 Web 应用
```

-   您也可以在计算机上安装该软件包，然后运行:

```
// 安装该软件包
npm install -g @wang1212/create-web-app

// 现在, 使用它创建一个 Web 应用项目
create-web-app [project_name]		// 不基于任何框架开发 Web 应用
create-react-app [project_name]		// 或者, 基于 react.js 开发 Web 应用
```

注意: `create-web-app` 有一个别名 `create-pwa`, 而且 `create-react-app` 也有一个别名 `create-rpwa`.

## 信息

更多信息, 阅读 `packages/*app/README.zh-CN.md` 文件的内容。
