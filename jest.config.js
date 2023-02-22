module.exports = {
  testEnvironment: "jsdom",
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "./tsconfig.jest.json",
      },
    ],
  },
  setupFilesAfterEnv: ["./src/jest.setup.ts"],
  collectCoverageFrom: ["./src/components/**"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
