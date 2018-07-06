// @flow

import { RedisConfig } from "."

const { port, host } = RedisConfig

export default {
  port,
  host,
  family: "IPv4",
  db: 0,
  enableReadyCheck: true,
  retry_strategy: (options: Object) => {
    if (options.error && options.error.code === "ECONNREFUSED") {
      // End reconnecting on a specific error and flush all commands with
      // a individual error
      return new Error("The server refused the connection")
    }
    if (options.total_retry_time > 1000 * 60 * 60) {
      // End reconnecting after a specific timeout and flush all commands
      // with a individual error
      return new Error("Retry time exhausted")
    }
    if (options.attempt > 10) {
      // End reconnecting with built in error
      return
    }
    // reconnect after
    return Math.min(options.attempt * 100, 3000)
  },
}
