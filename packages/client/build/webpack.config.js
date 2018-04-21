require("dotenv").config()

const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const Analyzer = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin

const { SERVER_URL, PORT } = process.env

module.exports = {
  devtool: "sourcemap",
  entry: "./src/main.hmr.jsx",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    path: path.resolve("dist"),
    filename: "index.js",
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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        enforce: "pre",
        loader: "eslint-loader",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        resolve: { extensions: [".js", ".jsx"] },
        options: {
          cacheDirectory: true,
        },
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
    ],
  },
  plugins: [
    new Analyzer({
      analyzerMode: "static",
      openAnalyzer: false,
    }),
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
    host: "0.0.0.0",
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
  resolve: {
    symlinks: false,
  },
}
