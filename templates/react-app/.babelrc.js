// see docs: https://babeljs.io/docs/en/configuration
// see https://github.com/facebook/create-react-app/blob/main/packages/babel-preset-react-app/create.js

const isEnvDevelopment = (process.env.NODE_ENV || '').trim() !== 'production';

module.exports = {
  assumptions: {
    privateFieldsAsProperties: true,
    setPublicClassFields: true,
  },
  presets: [
    [
      // Latest stable ECMAScript features
      '@babel/preset-env',
      {
        // Allow importing core-js in entrypoint and use browserlist to select polyfills
        useBuiltIns: 'entry',
        // Set the corejs version we are using to avoid warnings in console
        corejs: require('core-js/package.json').version,
        // Exclude transforms that make all code slower
        exclude: ['transform-typeof-symbol'],
      },
    ],
    [
      '@babel/preset-react',
      {
        // Adds component stack to warning messages
        // Adds __self attribute to JSX which React will use for some warnings
        development: isEnvDevelopment,
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
    // Polyfills the runtime needed for async/await, generators, and friends
    // https://babeljs.io/docs/en/babel-plugin-transform-runtime
    [
      '@babel/plugin-transform-runtime',
      {
        // By default, babel assumes babel/runtime version 7.0.0-beta.0,
        // explicitly resolving to match the provided helper functions.
        // https://github.com/babel/babel/issues/10261
        version: require('@babel/runtime/package.json').version,
      },
    ],
    // Applies the react-refresh Babel plugin on non-production modes only
    isEnvDevelopment && 'react-refresh/babel',
  ].filter(Boolean),
};
