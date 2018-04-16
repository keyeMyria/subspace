// @flow

import express from "express"
import { User } from "../models/user"
import { generateToken, setUserInfo } from "../auth/jwt"
import { auth, login } from "../auth/middleware"

const router = express.Router()

router.route("/login").post(login, (req, res) => {
  const userInfo = setUserInfo(req.user)

  res.status(200).json({
    token: generateToken(userInfo),
    user: userInfo,
  })
})

router.route("/authenticate").post(auth, (req, res) => {
  const userInfo = setUserInfo(req.user)

  res.status(200).json({
    token: generateToken(userInfo),
    user: userInfo,
  })
})

router.route("/users").post((req, res) => {
  const user = new User(req.body)
  user.save()

  const userInfo = setUserInfo(user)

  res.status(201).json({
    token: generateToken(userInfo),
    user: userInfo,
  })
})

module.exports = router
