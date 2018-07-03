const path = require("path")
const webpack = require("webpack")

module.exports = {
  devtool: "sourcemap",
  target: "node",
  entry: "./src/index",
  output: {
    path: path.resolve("lib"),
    filename: "index.js",
    library: "Redimension",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: "pre",
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
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
