module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "node": true
  },
  "extends": [
      "plugin:react/recommended",
      "airbnb"
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
    "no-plusplus": "off",
    "arrow-body-style": "off",
    "react/forbid-prop-types": "off",
    "no-console": "off",
    "comma-dangle": "off"
  },
  "ignorePatters":["bundle.js"]
};