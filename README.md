# Create Web App

:coffee: Create PWA（Progressive Web App） project development environment startup configuration.

Support the following two：

- create-web-app
- create-react-app

`create-web-app` builds a PWA that doesn't depend on any development framework, while `create-react-app` builds PWA based on React framework ecosystems such as React.js, Redux.js, and React Router.

## Usage

- You don't need to install the package on your computer, you can use it and run:

```
npm init @wang1212/web-app [project_name]
npx @wang1212/create-web-app [project_name]		// same as the previous line
```

or

```
npx -p|--package @wang1212/create-web-app create-react-app [project_name]	// built web app with react.js
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

For more information, read `packages/*app/README.md` file contents.