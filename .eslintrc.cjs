module.exports = {
  root: true,
  extends: [
    "@meslzy/eslint-config",
  ],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  settings: {
    next: {
      rootDir: "apps/client",
    },
  }
};