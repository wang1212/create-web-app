// see docs: https://eslint.org/docs/user-guide/configuring

module.exports = {
  extends: ['@wang1212/eslint-config/react-typescript'],
  ignorePatterns: ['node_modules', 'build', 'docs', 'public', 'src/assets/**/*', 'src/vendors/**/*'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
    },
    // https://github.com/amilajack/eslint-plugin-compat#adding-polyfills
    polyfills: ['Promise'],
  },
  rules: {},
  globals: {},
};
