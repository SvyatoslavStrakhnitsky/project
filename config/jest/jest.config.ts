import path from 'path';

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
        '\\.svg': path.resolve(__dirname, 'MockComponent.tsx'),
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.css': 'identity-obj-proxy',
    },
    rootDir: '../..',
    testEnvironment: 'jsdom',
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
    ],
    testPathIgnorePatterns: [
        '\\\\node_modules\\\\'
    ],
    setupFilesAfterEnv: [
        '<rootDir>/config/jest/setupTests.ts'
    ],
    globals: {
        __API__: '',
        __IS_DEV__: true,
    }
};
