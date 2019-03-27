module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'Vue',
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
      ],
    }],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'consistent-return': 'off',
    'camelcase': 'off',
    'array-callback-return': 'off',
    'object-curly-newline': 'off',
    'space-infix-ops': 'error',
    'no-plusplus': 'off',
    'no-return-assign': 'off',
    'import/prefer-default-export':'off',
    'no-cond-assign': 'warn',
    'arrow-parens': 'off',
    'no-undef': 'warn',
    'generator-star-spacing': 'off',
    'no-bitwise': 'off',
    'no-new': 'off',
    'no-unused-expressions': 'off',
    'no-mixed-operators': 'off',
    'max-len': 'off',
    'no-multi-assign': 'off',
    // don't require .js extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
    }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
