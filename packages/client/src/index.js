// @flow

import * as Udp from "@web-udp/client"

import { createGame } from "@subspace/core"

const client = new Udp.Client({
  url: "localhost:3000",
})

client.connect().then(master => {})
