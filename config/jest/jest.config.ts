
export default {
    clearMocks: true,
    errorOnDeprecated: true,
    moduleDirectories: [
        'node_modules'
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
    rootDir: '../..',
    roots: [
        '<rootDir>'
    ],
    testEnvironment: 'jsdom',
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
    ],
    testPathIgnorePatterns: [
        '\\\\node_modules\\\\'
    ],
};
