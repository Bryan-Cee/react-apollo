module.exports = {
  verbose: true,
  clearMocks: true,
  rootDir: '.',
  setupFiles: ['<rootDir>/src/setupTests.js'],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy"
  },
  transform: {".*": "<rootDir>/node_modules/babel-jest"},
  collectCoverageFrom: ['./src/**/*.{js,jsx}', '!**/node_modules/**'],
};
