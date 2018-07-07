require("dotenv").config()

const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const { SERVER_URL, HOST, PORT } = process.env

module.exports = {
  devtool: "cheap-source-map",
  entry: ["./src/index.jsx"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "url-loader",
        options: {
          name: "assets/img/[name].[hash:8].[ext]",
          limit: 8192,
        },
      },
      {
        test: /\.(eot|woff2?|ttf)$/,
        loader: "url-loader",
        options: {
          name: "assets/font/[name].[hash:8].[ext]",
          limit: 8192,
        },
      },
      {
        test: /^((?!\global).)*\.css$/,
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
      {
        test: /\global\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  devServer: {
    hot: true,
    stats: "minimal",
    publicPath: "/",
    contentBase: "dist",
    host: HOST,
    port: Number(PORT),
    historyApiFallback: true,
    proxy: {
      "/server": {
        target: SERVER_URL,
        ws: true,
        pathRewrite: {
          "/server": "",
        },
      },
    },
  },
}
