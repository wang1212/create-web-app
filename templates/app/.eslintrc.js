// see docs: https://eslint.org/docs/user-guide/configuring

module.exports = {
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
  plugins: ['eslint-plugin-tsdoc'],
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'plugin:compat/recommended',
  ],
  settings: {
    // https://github.com/amilajack/eslint-plugin-compat#adding-polyfills
    polyfills: [],
  },
  rules: {
    'tsdoc/syntax': 'warn',
  },
  globals: {},
};
