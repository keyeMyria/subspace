// @flow

import json from "rollup-plugin-json"
import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"

export default {
  input: "src/index.js",
  output: {
    file: "lib/index.js",
    format: "es",
  },
  sourceMap: "inline",
  plugins: [
    json(),
    babel({
      exclude: "node_modules/**",
    }),
    commonjs(),
    resolve(),
  ],
}
