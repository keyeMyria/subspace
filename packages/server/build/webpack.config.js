const path = require("path")
const webpack = require("webpack")
const externals = require("webpack-node-externals")

module.exports = {
  devtool: "sourcemap",
  target: "node",
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [externals()],
  entry: "./src/index",
  output: {
    path: path.resolve("lib"),
    filename: "index.js",
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
      },
    ],
  },
  plugins: [new webpack.NamedModulesPlugin()],
  resolve: {
    symlinks: false,
  },
}
