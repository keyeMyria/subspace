// @flow

const path = require("path")
const remotedev = require("remotedev-server")

require("dotenv").config()
require("source-map-support/register")

remotedev({ hostname: "localhost", port: 9001 })
require("./server")
