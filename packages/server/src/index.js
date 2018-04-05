// @flow

import * as Http from "http"
import shortid from "shortid"
import * as Udp from "@web-udp/server"
import {
  Physics,
  Loop,
  Ships,
  Players,
  Protocol,
  getPlayerShip,
} from "@subspace/core"

import type { Connection } from "@web-udp/server"
import type { PlayerId, PlayerMessage } from "@subspace/core"

import { SpatialIndex } from "./cache"
import serverConfig from "../cfg/server.config.json"
import redisConfig from "../cfg/redis.config.json"
import * as Scheduler from "./scheduler"
import { configureStore } from "./store"

const tickRate =
  1 / (Number(process.env.TICK_RATE) || serverConfig.tick_rate)
const sendRate =
  1 / (Number(process.env.SEND_RATE) || serverConfig.send_rate)

const server = new Http.Server()

const udp = new Udp.Server({ server })

const players: { [PlayerId]: Connection } = {}

const spatialIndex = SpatialIndex.create({
  redis: redisConfig,
  key: "ss-body",
  dimensions: 2,
})

const scheduler = Scheduler.create(tickRate)

const store = configureStore({
  spatialIndex,
  scheduler,
  getPlayers: () => players,
  sendRate,
})

store.dispatch(Loop.startLoop())

const register = (id: PlayerId, connection: Connection) => {
  players[id] = connection

  connection.messages.subscribe(data => {
    const message: PlayerMessage = JSON.parse(data)
    const payload = Protocol.getData(message)

    switch (Protocol.getType(message)) {
      case Protocol.INPUT_MESSAGE_TYPE.turn: {
        const ship = getPlayerShip(store.getState(), id)

        if (!ship) {
          throw new Error(
            `Can't turn ship: ship is not piloted by player ${id}`,
          )
        }

        store.dispatch(Ships.turnShip(ship.id, payload))
        break
      }
      default:
        throw new Error(`Unrecognized message: ${data}`)
    }
  })
}

udp.connections.subscribe(connection => {
  const id = shortid()
  const player = {
    id,
  }

  register(id, connection)

  store.dispatch(Players.addPlayer(player))
})

server.listen(Number(process.env.PORT), () => {
  console.log(
    `Server listening at //localhost:${String(process.env.PORT)}`,
  )
})
