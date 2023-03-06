import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import type { Configuration } from "webpack";
import type {
  BuildEnv,
  BuildMode,
  BuildPaths,
} from "./config/build/types/config";

export default (env: BuildEnv): Configuration => {
  const mode: BuildMode = env.mode || "development";
  const isDev = mode === "development";

  const PORT = env.port || 3000;

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });
};
