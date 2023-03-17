import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';
import type { Configuration } from 'webpack';

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
    const { mode, paths, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            publicPath: '/',
            filename: '[name].[contenthash].js',
            clean: true,
        },
        module: {
            rules: buildLoaders(options),
        },
        plugins: buildPlugins(options),
        resolve: buildResolvers(options),
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev ? 'eval-cheap-source-map' : undefined,
    };
};
