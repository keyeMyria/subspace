const path = require("path")
const webpack = require("webpack")

module.exports = {
  context: process.cwd(),
  entry: {
    react: ["react", "react-dom", "react-redux", "redux"],
    three: ["three"],
  },
  output: {
    filename: "[name].dll.js",
    path: path.resolve("dist/vendor"),
    library: "[name]",
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: "dist/vendor/[name].json",
    }),
  ],
}
