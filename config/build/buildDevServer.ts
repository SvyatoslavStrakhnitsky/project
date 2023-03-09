import type { BuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const buildDevServer = (
    options: BuildOptions
): DevServerConfiguration => {
    const { port } = options;

    return {
        port,
        hot: true,
        open: true,
        historyApiFallback: true,
    };
};
