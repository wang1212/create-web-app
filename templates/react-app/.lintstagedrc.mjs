// see docs: https://github.com/okonet/lint-staged#configuration

export default {
  '*.{js,jsx,ts,tsx}': 'npm run lint-js',
  '*.{css,scss,sass}': 'npm run lint-css',
};
