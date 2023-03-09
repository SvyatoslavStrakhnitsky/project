import type { ResolveOptions } from 'webpack';
import type { BuildOptions } from './types/config';

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
    const { paths } = options;
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: paths.alias,
    };
};
