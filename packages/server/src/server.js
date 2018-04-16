// @flow

import bcrypt from "bcrypt"

import { createServer } from "http"
import * as Udp from "@web-udp/server"
import { Loop } from "@subspace/core"

import type { Connection } from "@web-udp/server"
import type { UserId, UserMessage } from "@subspace/core"

import express from "express"
import passport from "passport"
import body from "body-parser"

import db from "./data"
import serverConfig from "../cfg/server.config.json"
import { configureStore } from "./store"
import { authenticate, verify } from "./auth"
import { jwt, local } from "./auth/strategy"
import { auth, login } from "./auth/middleware"
import { generateToken } from "./auth/jwt"

const { TICK_RATE, SEND_RATE, PORT } = process.env

const tickRate = 1 / (Number(TICK_RATE) || serverConfig.tick_rate)
const sendRate = 1 / (Number(SEND_RATE) || serverConfig.send_rate)

const app = express()
const server = new createServer(app)
const udp = new Udp.Server({ server })

// setup passport
passport.use(jwt)
passport.use(local)

// middleware
app.use(body())

const store = configureStore({
  db,
  auth: { authenticate, verify },
  tickRate,
  sendRate,
  udp,
})

store.dispatch(Loop.startLoop())

app.post("/users", async (req, res) => {
  let { username, password } = req.body

  if (await db.User.findOne({ where: { username } })) {
    res.status(409).json({ error: "Username already taken" })
    return
  }

  let model

  try {
    model = await db.User.create({ username, password })
  } catch (error) {
    res.status(400).json({ error })
    return
  }

  const user = model.toJSON()

  res.status(201).json({
    token: generateToken(user),
    user,
  })
})

app.post("/login", login, async (req, res) => {
  const { user: { id, username } } = req
  const user = { id, username }

  res.status(200).json({
    token: generateToken(user),
    user,
  })
})

app.post("/auth", auth, async (req, res) => {
  const { user: { id, username } } = req
  const user = { id, username }

  res.status(200).json({
    token: generateToken(user),
    user,
  })
})

async function main() {
  await db.sequelize.sync()

  console.log(`Server listening at //localhost:${String(PORT)}`)

  server.listen(Number(PORT))
}

main()
