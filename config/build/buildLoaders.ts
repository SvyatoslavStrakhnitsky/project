import type { RuleSetRule } from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import type { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
    const { isDev } = options;

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    };

    const imgLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };

    const styleLoader = buildCssLoader(isDev);

    return [typescriptLoader, styleLoader, svgLoader, imgLoader];
};
