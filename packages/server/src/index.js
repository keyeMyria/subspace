// @flow

import { Server } from "http"
import shortid from "shortid"
import * as Udp from "@web-udp/server"
import * as Core from "@subspace/core"

import * as Scheduler from "./scheduler"

const server = new Server()
const udp = new Udp.Server({ server })

const game = Core.createGame({
  scheduler: Scheduler.create(1 / 60),
})

const state = {
  players: {},
}
const connections = {}

udp.connections.subscribe(connection => {
  const id = shortid()

  connections[id] = connection
  state.players[id] = { x: 0, y: 0 }

  console.log(id)
})

server.listen(process.env.PORT || 3000)
