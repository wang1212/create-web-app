// see docs: https://eslint.org/docs/user-guide/configuring

module.exports = {
  extends: ['@wang1212/eslint-config/node'],
  ignorePatterns: ['node_modules', '.husky', '.github', 'templates/'],
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: false,
  },
  rules: {},
  globals: {},
};
