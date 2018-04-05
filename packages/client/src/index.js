// @flow

import * as Udp from "@web-udp/client"

const client = new Udp.Client({
  url: `${window.location.host}/server`,
})

client.connect().then(master => {
  console.log(master)
})
