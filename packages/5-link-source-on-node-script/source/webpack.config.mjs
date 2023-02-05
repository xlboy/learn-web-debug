import * as path from "path";

/** @type {import('webpack').Configuration} */
const config = {
  mode: "none",
  entry: "./main.mjs",
  devtool: "source-map",
  output: {
    path: path.resolve("./", "build"),
    filename: "main.bundle.mjs",
    libraryTarget: "module"
  },
  experiments: {
    outputModule: true
  }
};

// module.exports = config;

export default config;
