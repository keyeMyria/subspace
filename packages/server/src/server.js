// @flow

import { createServer } from "http"
import * as Udp from "@web-udp/server"
import { Loop } from "@subspace/core"

import type { Connection } from "@web-udp/server"
import type { UserId, UserMessage } from "@subspace/core"

import express from "express"
import passport from "passport"
import body from "body-parser"

import serverConfig from "../cfg/server.config.json"
import * as db from "./data"
import { configureStore } from "./store"
import { authenticate, verify } from "./auth"
import { jwt, local } from "./auth/strategy"
import authRouter from "./routers/auth"

const { TICK_RATE, SEND_RATE, PORT } = process.env

const tickRate = 1 / (Number(TICK_RATE) || serverConfig.tick_rate)
const sendRate = 1 / (Number(SEND_RATE) || serverConfig.send_rate)

const app = express()
const server = new createServer(app)
const udp = new Udp.Server({ server })

// passport
passport.use(jwt)
passport.use(local)

// middleware
app.use(body())

// routes
app.use("/auth", authRouter)

async function main() {
  const store = configureStore({
    auth: { authenticate, verify },
    db,
    tickRate,
    sendRate,
    udp,
  })

  store.dispatch(Loop.startLoop())
  console.log("syncing database")
  await db.sequelize.sync()

  console.log(`server listening at //localhost:${String(PORT)}`)

  server.listen(Number(PORT))
}

main()
