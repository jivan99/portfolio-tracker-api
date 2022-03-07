module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    strict: ["error", "never"],
  },
  overrides: [
    {
      files: "**/*.+(ts)",
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      plugins: ["@typescript-eslint/eslint-plugin", "prettier"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
      ],
      rules: {
        "no-console": "warn",
        "no-plusplus": "off",
        "prettier/prettier": "error",
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "req|res|next|val" },
        ],
        "@typescript-eslint/lines-between-class-members": 0,
        "consistent-return": 0,
      },
    },
  ],
  env: {
    node: true,
    es6: true,
  },
};
