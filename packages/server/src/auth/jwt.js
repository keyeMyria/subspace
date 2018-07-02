// @flow

import jwt from "jsonwebtoken"

import type { UserData } from "../model/user"

export function verifyToken(token: string, secret: string): UserData {
  return jwt.verify(token, secret)
}

export function generateToken(
  user: UserData,
  secret: string,
  expiresIn: string,
) {
  return jwt.sign(user, secret, {
    expiresIn,
  })
}
