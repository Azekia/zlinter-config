// forked from airbnb-base, but not imposing unneeded dependencies
/*
const eslintConfig =  {
    extends: [
      './rules/best-practices',
      './rules/errors.js',
      './rules/node.js',
      './rules/style.js',
      './rules/variables.js',
      './rules/es6.js',
      './rules/imports.js',
      './rules/strict.js',
    ].map(require.resolve),
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    rules: {},
  };
*/
const eslintConfig =  
[
  require('./rules/best-practices'),
  require('./rules/best-practices'),
  require('./rules/errors.js'),
  require('./rules/node.js'),
  require('./rules/style.js'),
  require('./rules/variables.js'),
  require('./rules/es6.js'),
  require('./rules/imports.js'),
  require('./rules/strict.js'),
  require('./rules/zenon.js'),
];

module.exports = eslintConfig;