// @flow

import json from "rollup-plugin-json"
import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"

export default {
  input: "src/physics/p2/worker/p2-world.worker.js",
  output: {
    file: "lib/p2-world.worker.js",
    format: "es",
  },
  plugins: [
    json(),
    babel({
      exclude: "node_modules/**",
    }),
    commonjs({
      include: [
        "node_modules/**",
        "src/physics/p2/local.js",
        "src/physics/p2/worker/p2-world.worker.js",
      ],
    }),
    resolve(),
  ],
}
