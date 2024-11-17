module.exports = {
  rules: {
    'no-param-reassign': ['off'],
    'linebreak-style': ['off', 'unix'],
    'import/extensions': ['error', 'always', { ignorePackages: true }],
    'import/no-absolute-path': ['error'],
    'no-console': ['warn', { allow: ['log', 'warn', 'error'] }],
    'no-plusplus': 'off',
    'class-methods-use-this': ['off'],
    'max-len': [
      'error',
      { code: 150, tabWidth: 2, ignoreTrailingComments: true },
    ],
    'prefer-destructuring': ['off'],
    'lines-between-class-members': [
      'warn',
      {
        enforce: [{ blankLine: 'always', prev: 'method', next: '*' }],
      },
    ],
  },
};
