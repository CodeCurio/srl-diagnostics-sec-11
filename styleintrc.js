// .stylelintrc.js
module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'max-empty-lines': 2,
    'declaration-colon-space-after': 'always',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-combinator-space-before': 'always',
    'selector-combinator-space-after': 'always',
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment']
      }
    ],
    'font-display': 'swap',
    'no-descending-specificity': true,
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'at-rule-no-vendor-prefix': true,
    'max-line-length': 120,
    'no-duplicate-selectors': true,
    'declaration-block-no-duplicate-properties': true,
    'selector-max-id': 1,
    'selector-class-pattern': '^[a-z][a-zA-Z0-9-_]*'
  }




















}