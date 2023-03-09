export type BuildMode = 'development' | 'production';

export type BuildEnv = {
    mode: BuildMode;
    port: number;
};

export type BuildPaths = {
    entry: string;
    build: string;
    html: string;
    alias: Record<string, string>;
};

export type BuildOptions = {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
};
