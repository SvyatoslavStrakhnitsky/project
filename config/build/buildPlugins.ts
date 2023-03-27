import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ProgressPlugin, DefinePlugin, type WebpackPluginInstance } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import type { BuildOptions } from './types/config';
import CopyPlugin from 'copy-webpack-plugin';

export const buildPlugins = (options: BuildOptions): WebpackPluginInstance[] => {
    const { paths, isDev, apiUrl } = options;

    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
        }),
        new CopyPlugin({
            patterns: [
                {from: paths.locales, to: paths.buildLocales}
            ]
        }),
    ];

    if (!isDev) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            })
        ),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
        });
    }

    return plugins;
};
