
export default {
    clearMocks: true,
    errorOnDeprecated: true,
    moduleDirectories: [
        'node_modules',
    ],
    modulePaths: [
        '<rootDir>src'
    ],
    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node'
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    rootDir: '../..',
    testEnvironment: 'jsdom',
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
    ],
    testPathIgnorePatterns: [
        '\\\\node_modules\\\\'
    ],
};
