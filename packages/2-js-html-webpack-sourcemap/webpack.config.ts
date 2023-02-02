import * as path from "path";
import * as webpack from "webpack";
import "webpack-dev-server";

const config: webpack.Configuration = {
  mode: "development",
  entry: "./foo.js",
  devtool: "eval-source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "foo.bundle.js",
  },
};

export default config;
