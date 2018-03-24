const path = require("path")
const webpack = require("webpack")

const config = Object.assign(
  { mode: "development" },
  require("./webpack.config.dll"),
)

const options = {
  colors: true,
}

const optionsError = {
  colors: true,
  hash: false,
  version: false,
  timings: false,
  assets: false,
  chunks: false,
  chunkModules: false,
  modules: false,
  children: false,
  cached: false,
  reasons: false,
  source: false,
  errorDetails: true,
  chunkOrigins: false,
}

webpack(config, (err, stats) => {
  if (err) {
    throw err
  }

  const result = stats.toString(
    stats.hasErrors() ? optionsError : options,
  )

  console.log(result)
})
