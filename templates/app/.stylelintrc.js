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
    indentation: 'tab',
    'rule-empty-line-before': 'never',
    'selector-type-no-unknown': null,
    'selector-type-case': null,
    'no-descending-specificity': null, //[true, { ignore: ['selectors-within-list'] }],
    'selector-list-comma-newline-after': 'always-multi-line',
    'value-keyword-case': null,
    'function-name-case': null,
    'color-format/format': {
      format: 'rgba',
    },
  },
};
