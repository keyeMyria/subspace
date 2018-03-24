const path = require("path")
const merge = require("webpack-merge")
const common = require("../../../lib/build/webpack.config")

module.exports = merge(common, {
  target: "node",
  entry: "./src/index",
  output: {
    path: path.resolve("lib"),
    filename: "index.js",
    library: "SubspaceCore",
    libraryTarget: "umd",
  },
})
