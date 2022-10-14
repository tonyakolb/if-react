module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest:true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended','react-app'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'prefer-const': 'error',
  },
};