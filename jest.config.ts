import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    "\\.[jt]sx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  resolver: "ts-jest-resolver",
};

export default jestConfig;
