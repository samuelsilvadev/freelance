module.exports = {
  setupFilesAfterEnv: ["<rootDir>/utils/tests/setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleNameMapper: {
    "\\.scss$": "identity-obj-proxy",
    "^components/(.*)": "<rootDir>/components/$1",
    "^hooks/(.*)": "<rootDir>/hooks/$1",
    "^utils/(.*)": "<rootDir>/utils/$1",
  },
};
