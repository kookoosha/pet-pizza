module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-console': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
