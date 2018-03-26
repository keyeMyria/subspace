const webpack = require("webpack")
const path = require("path")

module.exports = {
  context: process.cwd(),
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
