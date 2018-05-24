// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-return-assign': 'off',
    'no-unused-vars': 'off',
    'array-callback-return': 'off',
    'import/prefer-default-export':'off',
    'consistent-return': 'off',
    'import/prefer-default-export':'off',
    'quotes': ['error', 'single'],
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
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
