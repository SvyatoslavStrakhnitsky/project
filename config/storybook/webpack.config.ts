import path from 'path';
import { BuildPaths } from './../build/types/config';
import { Configuration, RuleSetRule } from 'webpack';

export default ({config}: {config: Configuration } ) => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        locales: '',
        buildLocales: '',
        alias: {
            '@': path.resolve(__dirname,'..', '..', 'src'),
        },
    };

    if (config.resolve?.alias) {
        config.resolve.alias = paths.alias;
    }
    config.resolve?.extensions?.push('.ts', '.tsx');

    //@ts-ignore
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config?.module?.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    return config;
};