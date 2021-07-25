# Create Web App

![LICENSE](https://badgen.net/github/license/wang1212/create-web-app)
[![NPM VERSION](https://badgen.net/npm/v/@wang1212/create-web-app)](https://www.npmjs.com/package/@wang1212/create-web-app)
![MINZIPPED SIZE](https://badgen.net/bundlephobia/minzip/@wang1212/create-web-app)
![DOWNLOAD](https://badgen.net/npm/dt/@wang1212/create-web-app)
![LAST COMMIT](https://badgen.net/github/last-commit/wang1212/create-web-app)
![GITHUB PACKAGE CI](https://img.shields.io/github/workflow/status/wang1212/create-web-app/Node.js%20Package?label=ci/package%20publish)

[English](./README.md) | [简体中文](./README.zh-CN.md)

_**Starting with version `0.3.0`, [flow.js][0] will no longer be used, and [typescript][1] will be used instead.**_

[0]: https://flow.org/ 'Flow: A Static Type Checker for JavaScript'
[1]: http://www.typescriptlang.org/ 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript'

:coffee: Create [PWA（Progressive Web App）](https://web.dev/progressive-web-apps/) project development environment startup configuration.

## Content

Support the following two：

- create-web-app
- create-react-app（or [Official](https://create-react-app.dev/)）

`create-web-app` builds a PWA that doesn't depend on any development framework, while `create-react-app` builds PWA based on React framework ecosystems such as React.js, Redux.js, and React Router.

## Usage

- You don't need to install the package on your computer, you can use it and run:

```
npm init @wang1212/web-app [project_name]
npx @wang1212/create-web-app [project_name]		// same as the previous line
```

or

```
npx --package @wang1212/create-web-app create-react-app [project_name]	// built web app with react.js
```

- You can also install the package on your computer, use it to run:

```
// install this package
npm install -g @wang1212/create-web-app

// now, use it to create a web app project
create-web-app [project_name]		// built web app with no framework
create-react-app [project_name]		// or, built web app with react.js
```

Note: `create-web-app` has an alias `create-pwa`, while `create-react-app` also has an alias `create-rpwa`.

## Information

For more information, read `templates/*app/README.md` file contents.

## More

If you want to develop a node module package (library), maybe you can take a look:

> [create-lib-starter](https://github.com/wang1212/create-lib-starter)

Or, other similar things:

> [awesome-template](https://github.com/wang1212/awesome-template)
