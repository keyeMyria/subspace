// @flow

import express from "express"
import { User } from "../data"
import { token } from "../auth"
import {
  auth as authMiddleware,
  login as loginMiddleware,
} from "../auth/middleware"
import asyncMiddleware from "./async"

const router = express.Router()

const register = asyncMiddleware(async (req, res) => {
  let { username, password } = req.body

  if (await User.findOne({ where: { username } })) {
    res.status(409).json({ error: "Username already taken" })
    return
  }

  let model

  try {
    model = await User.create({ username, password })
  } catch (error) {
    res.status(400).json({ error })
    return
  }

  const user = model.toJSON()

  res.status(201).json({
    token: await token(user),
    user,
  })
})

const login = asyncMiddleware(async (req, res, next: Function) => {
  const { user: { id, username } } = req
  const user = { id, username }

  res.status(200).json({
    token: await token(user),
    user,
  })
})

const verify = asyncMiddleware(async (req, res, next: Function) => {
  const { user: { id, username } } = req
  const user = { id, username }

  res.status(200).json({
    token: await token(user),
    user,
  })
})

router.route("/register").post(register)
router.route("/login").post(loginMiddleware, login)
router.route("/verify").post(authMiddleware, verify)

export default router
