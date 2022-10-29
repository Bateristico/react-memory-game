'use strict';

module.exports = {
  env: {
    browser: false,
    jest: true,
    node: true
  },
  plugins: ['jsdoc', 'sort-destructure-keys'],
  parserOptions: {
    sourceType: 'script'
  },
  root: true,
  rules: {
    'no-extra-semi': 2,
    semi: [2, 'always'],
    strict: ['error', 'global'],
    'import/no-duplicates': 'warn',
    'sort-destructure-keys/sort-destructure-keys': 2
  },
  settings: {
    jsdoc: {
      mode: 'typescript'
    }
  }
};
