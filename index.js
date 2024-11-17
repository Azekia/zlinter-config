// forked from airbnb-base, but not imposing unneeded dependencies
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
console.log(eslintConfig);
module.exports = eslintConfig;