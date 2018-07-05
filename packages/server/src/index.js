// @flow

const path = require("path")
const remotedev = require("remotedev-server")

require("dotenv").config()
require("source-map-support/register")

remotedev({ hostname: "0.0.0.0", port: 9000 })
require("./server")

// this is necessary to kill remotedev-server
process.on("SIGUSR2", () => process.exit(0))
