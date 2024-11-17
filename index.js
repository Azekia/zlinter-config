// forked from airbnb-base, but not imposing unneeded dependencies
// added some custom rules and globals
console.log('Configuring rules from zlinter-config/index.js');

const globals = require('globals');

const eslintConfig = [
  require('./rules/best-practices.js'),
  require('./rules/errors.js'),
  require('./rules/node.js'),
  require('./rules/style.js'),
  require('./rules/variables.js'),
  require('./rules/es6.js'),
  require('./rules/imports.js'),
  require('./rules/strict.js'),
  require('./rules/zenon.js'),
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node, ...globals.jquery },
    },
  },
];

module.exports = eslintConfig;

/*
    en es6.js estaba esto...
    env: {
      es6: true
    },
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
        generators: false,
        objectLiteralDuplicateProperties: false
      }
    },
    */
