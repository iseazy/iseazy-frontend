module.exports = {
  extends: ['standard', 'plugin:prettier/recommended', 'react-app', 'react-app/jest'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        semi: false,
        singleQuote: true,
        jsxSingleQuote: true,
        arrowParens: 'avoid',
      },
    ],
  },
}
