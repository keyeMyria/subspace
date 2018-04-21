// @flow

import express from "express"
import { User } from "../data"
import { generateToken } from "../auth/jwt"
import { auth, login } from "../auth/middleware"

const router = express.Router()

router.route("/register").post(async (req, res) => {
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
    token: generateToken(user),
    user,
  })
})

router.route("/login").post(login, (req, res) => {
  const { user: { id, username } } = req
  const user = { id, username }

  res.status(200).json({
    token: generateToken(user),
    user,
  })
})

router.route("/verify").post(auth, (req, res) => {
  const { user: { id, username } } = req
  const user = { id, username }

  res.status(200).json({
    token: generateToken(user),
    user,
  })
})

export default router
