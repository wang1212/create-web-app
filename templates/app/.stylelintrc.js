// see docs: https://stylelint.io/user-guide/configure

module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-property-sort-order-smacss',
    'stylelint-config-prettier',
  ],
  ignoreFiles: ['src/vendors/**/*'],
  plugins: ['stylelint-color-format'],
  rules: {
    'rule-empty-line-before': 'always',
    'selector-type-case': 'lower',
    'no-descending-specificity': true, // [true, { ignore: ['selectors-within-list'] }],
    'selector-list-comma-newline-after': 'always-multi-line',
    'value-keyword-case': 'lower',
    'function-name-case': 'lower',
    'color-format/format': {
      format: 'rgba',
    },
  },
};
