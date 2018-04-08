// @flow

import * as Http from "http"
import shortid from "shortid"
import * as Udp from "@web-udp/server"
import {
  Loop,
  Ships,
  Players,
  Protocol,
  getPlayerShip,
} from "@subspace/core"

import type { Connection } from "@web-udp/server"
import type { PlayerId, PlayerMessage } from "@subspace/core"

import serverConfig from "../cfg/server.config.json"
import { configureStore } from "./store"
import * as Auth from "./auth"

const { TICK_RATE, SEND_RATE, PORT } = process.env

const tickRate = 1 / (Number(TICK_RATE) || serverConfig.tick_rate)
const sendRate = 1 / (Number(SEND_RATE) || serverConfig.send_rate)

const server = new Http.Server()
const udp = new Udp.Server({ server })
const auth = Auth.create()

const store = configureStore({
  auth,
  tickRate,
  sendRate,
  udp,
})

store.dispatch(Loop.startLoop())

server.listen(Number(PORT), () => {
  console.log(`Server listening at //localhost:${String(PORT)}`)
})
