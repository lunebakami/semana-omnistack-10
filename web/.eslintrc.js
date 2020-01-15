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
    'prettier',
  ],
  rules: {
    "prettier/prettier": "error",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "react/jsx-filename-extension" : "off",
    "jsx-a11y/label-has-associated-control": "off",
    "no-shadow": "off",
    "camelcase": "off",
    "no-underscore-dangle": "off",
    "react/prop-types": "off"
  },
};
