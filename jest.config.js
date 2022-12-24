const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  globalSetup: "<rootDir>/setupEnv.ts",
};

module.exports = async (...args) => {
  const config = await createJestConfig(customJestConfig)(...args);

  config.transformIgnorePatterns = config.transformIgnorePatterns.map(
    (pattern) => {
      if (pattern === "/node_modules/") {
        return `node_modules/(?!camelcase-keys)/`; // ESMを使用しているライブラリをts-jestで変換させるため
      }
      return pattern;
    }
  );

  return config;
};
