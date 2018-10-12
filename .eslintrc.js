module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true
  },
  settings: {
    ecmascript: 6,
    jsx: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react"],
  extends: ["airbnb", "plugin:react/recommended"],
  rules: {
    "react/jsx-filename-extension": 0,
    "comma-dangle": 0,
    quotes: [2, "double"],
    "comma-dangle": [2, "never"],
    "no-console": 0,
    "react/destructuring-assignment": 0,
    "implicit-arrow-linebreak": "off",
    "react/jsx-indent": [2, 2],
    "react/jsx-one-expression-per-line": "off",
    "max-len": [2, 1000, 4, { ignoreUrls: true }],
    "function-paren-newline": 0,
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: {
          multiline: true,
          consistent: true
        },
        ObjectPattern: {
          multiline: true,
          consistent: true
        },
        ImportDeclaration: {
          multiline: true,
          consistent: true,
          minProperties: 0
        }
      }
    ]
  }
};
