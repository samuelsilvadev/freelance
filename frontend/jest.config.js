module.exports = {
  setupFilesAfterEnv: ["<rootDir>/utils/tests/setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleNameMapper: {
    "\\.scss$": "identity-obj-proxy",
  },
};
