const {
  propertyOrdering,
  selectorOrdering,
} = require('stylelint-semantic-groups')

module.exports = {
  extends: 'stylelint-config-standard-scss',
  plugins: ['stylelint-order'],
  rules: {
    'selector-class-pattern': null,
    'order/order': selectorOrdering, // to fine-tune configuration use selectorOrderFactory
    'order/properties-order': propertyOrdering,
    'declaration-empty-line-before': null,
  },
}
