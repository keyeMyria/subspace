// @flow

import express from "express"

import type { Db } from "../data"

import type { AuthClient } from "../auth"
import {
  auth as authMiddleware,
  login as loginMiddleware,
} from "../auth/middleware"
import asyncMiddleware from "./async"

export function make(db: Db, auth: AuthClient) {
  const router = express.Router()

  const register = asyncMiddleware(async (req, res) => {
    let { username, password } = req.body

    if (await db.User.findOne({ where: { username } })) {
      res.status(409).json({ error: "Username already taken" })
      return
    }

    let model
    const spec = { username, password }

    try {
      model = await db.User.create(spec)
    } catch (error) {
      res.status(400).json({ error })
      return
    }

    const user = model.toJSON()

    res.status(201).json({
      token: await auth.token(user),
      user,
    })
  })

  const login = asyncMiddleware(async (req, res) => {
    const { user: { id, username } } = req
    const user = { id, username }

    res.status(200).json({
      token: await auth.token(user),
      user,
    })
  })

  const verify = asyncMiddleware(async (req, res) => {
    const { user: { id, username } } = req
    const user = { id, username }

    res.status(200).json({
      token: await auth.token(user),
      user,
    })
  })

  router.route("/register").post(register)
  router.route("/login").post(loginMiddleware, login)
  router.route("/verify").post(authMiddleware, verify)

  return router
}
