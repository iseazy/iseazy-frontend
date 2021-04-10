const RULES = {
  OFF: "off",
  ERROR: "error",
  WARN: "warn",
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": RULES.OFF,
    "react/prop-types": RULES.OFF,
    "import/order": [
      RULES.ERROR,
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "{react,next/**}",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "{assets/icons}",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
