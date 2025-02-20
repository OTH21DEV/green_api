export default {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.[tj]sx?$": "babel-jest"
    },
    "moduleNameMapper": {
      "^.+\\.svg$": "jest-svg-transformer",
      "^.+\\.(css|less|scss)$": "identity-obj-proxy"
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    collectCoverage: true,
    coverageDirectory: 'coverage',                      // Output directory for coverage reports
    coverageReporters: ['text', 'json', 'html'],        // Formats for the output reports
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}',                       // Patterns for files to measure coverage
      '!src/**/*.d.ts',                                 // Ignore type definition files
      '!src/index.js',                                  // You can ignore entry points
      '!src/**/styles/*'                                // Example of ignoring styles
    ],
  };