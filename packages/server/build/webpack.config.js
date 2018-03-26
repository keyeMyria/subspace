const path = require("path")
const externals = require("webpack-node-externals")
const merge = require("webpack-merge")
const common = require("./webpack.common")

module.exports = merge(common, {
  target: "node",
  externals: [externals()],
  entry: "./src/index",
  output: {
    path: path.resolve("lib"),
    filename: "index.js",
  },
})
