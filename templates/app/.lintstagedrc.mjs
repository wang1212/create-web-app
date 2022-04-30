// see docs: https://github.com/okonet/lint-staged#configuration

export default {
  '*.{js,ts}': 'npm run lint-js',
  '*.{css,scss,sass}': 'npm run lint-css',
};
