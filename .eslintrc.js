// eslint-disable-next-line no-undef
module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "no-console": "warn",
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0,
        "linebreak-style": ["error", "unix"]
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
  }