const nextJest = require("next/jest");

const createJestConfig = nextJest({
  //directory of next.config.js and jest.config.js
  dir: "./",
});

const customJestConfig = {
  //directories of modules and typescript baseUrl files
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
