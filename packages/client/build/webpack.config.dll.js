const path = require("path")
const webpack = require("webpack")

module.exports = {
  context: process.cwd(),
  entry: {
    react: [
      "connected-react-router",
      "hoist-non-react-statics",
      "prop-types",
      "react",
      "react-dom",
      "react-hot-loader",
      "react-redux",
      "react-router",
      "react-router-dom",
      "react-router-prop-types",
      "react-router-redux",
      "redux",
      "redux-devtools",
      "redux-devtools-dock-monitor",
      "redux-devtools-log-monitor",
      "redux-form",
      "redux-logger",
      "redux-observable",
      "reselect",
      "semantic-ui-react",
    ],
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
