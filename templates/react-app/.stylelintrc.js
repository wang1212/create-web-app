// see docs: https://stylelint.io/user-guide/configure

module.exports = {
  ignoreFiles: ['src/vendors/**/*'],
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-scss', 'stylelint-color-format'],
  rules: {
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
