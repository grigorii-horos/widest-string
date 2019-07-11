// @ts-nocheck
var restrictedGlobals = require("confusing-browser-globals");

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "plugin:unicorn/recommended",
    "plugin:promise/recommended",
    "plugin:security/recommended",
    "standard-jsdoc"
  ],
  plugins: [
    "json",
    "no-loops",
    "unicorn",
    "dollar-sign",
    "async-await",
    "prefer-object-spread",
    "promise",
    "security",
    "simple-import-sort"
  ],
  env: {
    browser: true,
    es6: true
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  rules: {
    "unicorn/filename-case": 1,
    "unicorn/import-index": 0,
    "import/extensions": 0,
    "prefer-object-spread/prefer-object-spread": 2,
    "no-restricted-globals": ["error"].concat(restrictedGlobals),
    "sort-imports": "off",
    "import/order": "off",
    "simple-import-sort/sort": "error"
  }
};
