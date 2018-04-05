require("dotenv").config()

const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const { SERVER_URL, CLIENT_PORT } = process.env

module.exports = {
  devtool: "sourcemap",
  entry: "./src/index",
  output: {
    path: path.resolve("dist"),
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
      {
        test: /\.worker.js$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "worker-loader",
            options: {
              name: "[hash].worker.js",
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              minimize: true,
              modules: true,
              localIdentName: "[name]__[local]--[hash:base64:5]",
              camelCase: true,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DllReferencePlugin({
      manifest: require(path.resolve("./dist/vendor/react.json")),
    }),
    new webpack.DllReferencePlugin({
      manifest: require(path.resolve("./dist/vendor/three.json")),
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    stats: "minimal",
    publicPath: "/",
    contentBase: "dist",
    port: Number(CLIENT_PORT),
    proxy: {
      "/server/*": {
        target: SERVER_URL,
        ws: true,
      },
    },
  },
  resolve: {
    symlinks: false,
  },
}
