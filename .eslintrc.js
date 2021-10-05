// eslint-disable-next-line no-undef
module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: "module",
    },
    plugins: ["react", "prettier"],
    rules: {
        "no-console": "warn",
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0,
        "linebreak-style": ["error", "unix"],
        "no-debugger": 0
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
  }