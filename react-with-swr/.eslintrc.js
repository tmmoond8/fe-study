module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx'] }],
    'react/react-in-jsx-scope': 'off', // suppress errors for missing 'import React' in files
  },
  extends: ['airbnb', 'airbnb-typescript'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
    extraFileExtensions: ['ts', 'tsx'],
    project: ['./tsconfig.json'],
  },
};
