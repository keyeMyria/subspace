// @flow

import type { User as UserModel } from "@subspace/core"

import { User } from "../data"
import * as Util from "./util"
import { generateToken, verifyToken } from "./jwt"

export type AuthClient = {
  authenticate: (username: string, password: string) => string,
  verify: string => Promise<UserModel>,
}

export async function authenticate(
  username: string,
  password: string,
) {
  const user = await Util.authenticate(username, password)

  return generateToken(user)
}

export async function verify(token: string) {
  return verifyToken(token)
}
