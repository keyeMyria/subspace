// @flow

import { createServer } from "http"
import express from "express"
import passport from "passport"
import { json } from "body-parser"
import * as Udp from "@web-udp/server"
import { Loop } from "@subspace/core"
import type { Connection } from "@web-udp/server"

import * as db from "./data"
import { AppConfig, GameConfig } from "../cfg"
import { configureStore } from "./state/store"
import * as auth from "./auth"
import { jwt, local } from "./auth/strategy"
import authRouter from "./routers/auth"

const app = express()
const server = new createServer(app)
const udp = new Udp.Server({ server })

// passport
passport.use(jwt)
passport.use(local)

// middleware
app.use(json())

// routes
app.use("/auth", authRouter)

async function main() {
  const store = configureStore({
    auth,
    db,
    tickRate: 1 / GameConfig.tickRate,
    sendRate: 1 / GameConfig.sendRate,
    udp,
  })

  store.dispatch(Loop.start())

  await db.sequelize.sync()

  console.log(
    `server listening at //localhost:${String(AppConfig.port)}`,
  )

  server.listen(Number(AppConfig.port))
}

main()
