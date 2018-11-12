module.exports = {
  collectCoverageFrom: ['src/**/*.tsx'],
  coverageDirectory: '<rootDir>/coverage/',
  coveragePathIgnorePatterns: [
    'node_modules',
    'test-config',
    'interfaces',
    'jestGlobalMocks.ts',
    '<rootDir>/src/*.ts',
  ],
  coverageThreshold: {
    global: {
      statements: 24,
      branches: 8,
      functions: 7,
      lines: 24,
    },
  },
  globals: {
    __PATH_PREFIX__: '',
    'ts-jest': {
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '@/([^\\.]*)$': '<rootDir>/src/$1',
  },
  setupFiles: ['<rootDir>/loaderShim.js'],
  setupTestFrameworkScriptFile: require.resolve('./jest.setup.ts'),
  testPathIgnorePatterns: ['node_modules', '.cache'],
  testRegex: '(/__tests__/.*\\.([tj]sx?)|(\\.|/)(test|spec))\\.([tj]sx?)$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js',
  },
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  testURL: 'http://localhost',
}
