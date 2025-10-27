import type { Config } from "jest";

const config: Config = {
  preset: "jest-expo",
  testEnvironment: "node",
  roots: ["<rootDir>"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: { "^.+\\.(js|jsx|ts|tsx)$": "babel-jest" },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // ignora il transform solo per pacchetti RN che non devono essere transpiled
  transformIgnorePatterns: [
    "node_modules/(?!(react-native" +
      "|@react-native" +
      "|react-native-vector-icons" +
      "|react-native-reanimated" +
      "|react-native-gesture-handler" +
      "|react-native-safe-area-context" +
      "|react-native-screens" +
      "|@react-navigation" +
      "|expo(nent)?" +
      "|@expo(nent)?/.*" +
      "|expo-modules-core" +
      "|unimodules-.*" +
      "|@unimodules/.*" +
      "|sentry-expo" +
      "|native-base" +
      "|react-native-svg" +
      ")/)",
  ],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/__tests__/**",
    "!src/**/index.{ts,tsx}",
  ],
};

// export default config;
module.exports = config;
