module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    camelcase: "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next", "argsIgnorePattern": "serverWebSocket" }],
    "no-undef": "off",
    "no-console": "off",
    "import/no-cycle": "off",
    "no-shadow": "off"
  },
};
