// forked from airbnb-base, but not imposing unneeded dependencies
// added some custom rules and globals
/* eslint-disable global-require */
const globals = require('globals');

console.log('Configuring rules from zlinter-config/index.js');

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
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jquery,
        console: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        beforeEach: 'readonly',
        after: 'readonly',
        afterEach: 'readonly',
      },
    },
  },
];

module.exports = eslintConfig;
