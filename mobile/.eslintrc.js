module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension" : "off",
    "camelcase": "off",
    "no-console": "off",
    "no-use-before-define": "off",
    "react/prop-types": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off"
  },
};
