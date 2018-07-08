// @flow

import { createServer } from "http"
import express from "express"
import passport from "passport"
import { json } from "body-parser"
import * as Udp from "@web-udp/server"
import { Loop } from "@subspace/core"

import * as Db from "./data"
import * as Env from "./env"
import { configureStore } from "./state/store"
import * as Auth from "./auth"
import * as AuthRouter from "./routers/auth"
import * as Redimension from "./redimension"

import redisConfig from "./cfg/redis.config"
import dbConfig from "./cfg/db.config"

async function main() {
  const app = express()
  const server = new createServer(app)
  const udp = new Udp.Server({ server })
  const db = await Db.make(dbConfig)
  const auth = Auth.make(db)
  const redimension = Redimension.make({
    redis: redisConfig,
    key: "ss-body",
    dimensions: 2,
  })
  const store = await configureStore({
    auth,
    db,
    tickRate: 1 / Env.Game.tickRate,
    sendRate: 1 / Env.Game.sendRate,
    udp,
    redimension,
  })

  // passport
  passport.use(auth.strategy.jwt)
  passport.use(auth.strategy.local)

  // middleware
  app.use(json())

  // routes
  app.use("/auth", AuthRouter.make(db, auth))

  store.dispatch(Loop.start())

  server.listen(Number(Env.App.port))
}

main()
