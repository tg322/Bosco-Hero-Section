module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(test|spec).[tj]s?(x)'],
  modulePathIgnorePatterns: ['<rootDir>/lib/']
};
