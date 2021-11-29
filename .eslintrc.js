module.exports = {
  ignorePatterns: ['next.config.js', 'public/', 'assets/'],
  plugins: ['@typescript-eslint'],
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      excludedFiles: ['*.test.js'],
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            varsIgnorePattern: '[^_]',
            argsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/ban-ts-comment': (process.env.NODE_ENV || 'development') === 'development' ? 0 : 1,
      },
    },
  ],
  rules: {
    // I suggest you add those two rules:
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['.*'],
      },
    ],
    'react/no-unknown-property': [2, { ignore: ['class'] }],
    'no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '[^_]',
        argsIgnorePattern: '^_',
      },
    ],
    'no-console': (process.env.NODE_ENV || 'development') === 'development' ? 'warn' : 'error',
  },
};
