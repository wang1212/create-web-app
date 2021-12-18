/**
 * Polyfill
 *
 * * Automatic detection and polyfill based on `core-js` and @babel/preset-env's useBuiltIns:'usage'.
 * * Under normal circumstances, the polyfill already included in core-js no longer needs to be added manually.
 * @see https://github.com/zloirock/core-js
 * @see https://babeljs.io/docs/en/babel-preset-env#usebuiltins-usage
 *
 * * Use the `eslint-plugin-compat` plugin to automatically detect APIs that require polyfills,
 * * After adding the polyfill to this file, you need to update the `settings.polyfills` in the .eslintrc.js
 * * configuration of the project root directory, and the ESLint error message will disappear.
 * @see https://github.com/amilajack/eslint-plugin-compat
 */
// import 'core-js';
// import 'core-js/stable';
// import 'core-js/es';

// @see https://github.com/zloirock/core-js#ecmascript-object
// import 'core-js/features/object';
// import 'core-js/stable/object';
// import 'core-js/es/object';
