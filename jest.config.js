module.exports = {
  preset: 'ts-jest',
  setupTestFrameworkScriptFile: require.resolve('./jest.setup.ts'),
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/t/'],
}
