// @flow

import jwt from "jsonwebtoken"
import type { User } from "@subspace/core"

const { JWT_SECRET, JWT_EXPIRE_SECONDS } = process.env

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET)
}

export function generateToken(user: User) {
  return jwt.sign(user, JWT_SECRET, {
    expiresIn: "24h",
  })
}
