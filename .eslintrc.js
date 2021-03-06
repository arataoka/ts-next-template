module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  extends: [
    "airbnb",
    "./configs/eslint/js",
    "./configs/eslint/unicorn",
    "./configs/eslint/import",
    "./configs/eslint/ts",
    "prettier",
    "next/core-web-vitals"
  ],
}
