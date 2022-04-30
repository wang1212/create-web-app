// see docs: https://eslint.org/docs/user-guide/configuring

module.exports = {
  extends: ['@wang1212/eslint-config/typescript', 'plugin:compat/recommended'],
  ignorePatterns: [
    'node_modules',
    'build',
    'docs',
    'public',
    'src/assets/**/*',
    'src/vendors/**/*',
  ],
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
    // https://github.com/amilajack/eslint-plugin-compat#adding-polyfills
    polyfills: [],
  },
  rules: {},
  globals: {},
};
