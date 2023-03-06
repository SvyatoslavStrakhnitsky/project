import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { BuildOptions } from "./types/config";

export const buildLoaders = (options: BuildOptions) => {
  const { isDev } = options;

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const styleLoader = {
    test: /\.css$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\./,
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64]",
          },
        },
      },
    ],
  };

  return [typescriptLoader, styleLoader];
};
