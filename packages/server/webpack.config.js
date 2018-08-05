const path = require("path")
const webpack = require("webpack")
const externals = require("webpack-node-externals")

module.exports = {
  devtool: "source-map",
  target: "node",
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [
    externals({
      // read from package.json to support hoisted dependencies
      modulesFromFile: true,
    }),
  ],
  entry: "./src/index",
  output: {
    path: path.resolve("lib"),
    filename: "index.js",
    devtoolModuleFilenameTemplate: "[absolute-resource-path]",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        enforce: "pre",
        loader: "eslint-loader",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
        },
      },
    ],
  },
  plugins: [new webpack.NamedModulesPlugin()],
}
