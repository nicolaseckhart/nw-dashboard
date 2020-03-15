module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: [
    "src"
  ],
  modulePaths: [
    "<rootDir>/src"
  ],
  globals: {
    'ts-jest': {
      diagnostics: true,
    }
  },
  setupFiles: [
    "./test/setup-jest.ts"
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  coverageThreshold: {
    "global": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": 100
    }
  },
  coverageReporters: [
    "json",
    "lcov",
    "text-summary"
  ],
  coveragePathIgnorePatterns: ['./test'],
  coverageDirectory: "./coverage",
  reporters: ["default", "jest-junit"],
};
