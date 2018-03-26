// @flow

import * as Udp from "@web-udp/client"
import * as Core from "@subspace/core"

const client = new Udp.Client({
  url: `${window.location.host}/server`,
})

client.connect().then((master) => {
  console.log(master)
})

Core.createGame({
  scheduler: () => {},
})
