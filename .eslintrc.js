module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
