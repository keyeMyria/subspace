// @flow

import jwt from "jsonwebtoken"
import type { User } from "@subspace/core"

export function verifyToken(token: string, secret: string) {
  return jwt.verify(token, secret)
}

export function generateToken(
  user: User,
  secret: string,
  expiresIn: string,
) {
  return jwt.sign(user, secret, {
    expiresIn,
  })
}
