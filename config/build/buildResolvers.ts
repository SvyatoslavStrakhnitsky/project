import type { BuildOptions } from './types/config';

export const buildResolvers = (options: BuildOptions) => {
    const { paths } = options;
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: paths.alias,
    };
};
