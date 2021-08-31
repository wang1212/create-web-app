// see docs: https://eslint.org/docs/user-guide/configuring

module.exports = {
  ignorePatterns: ['node_modules', 'src/assets/**/*', 'src/vendors/**/*', '**/*.spec.ts', '**/*.test.ts'],
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
  plugins: [],
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb/whitespace',
    'airbnb-typescript',
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: {
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
  },
  globals: {},
};
