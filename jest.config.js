const nextJest = require("next/jest");
const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  roots: ["<rootDir>"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {},
  testEnvironment: "jest-environment-jsdom",
  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
  moduleNameMapper: pathsToModuleNameMapper(
    compilerOptions.paths /*, { prefix: '<rootDir>/' } */
  ),
};

module.exports = createJestConfig(customJestConfig);
