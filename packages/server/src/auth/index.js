// @flow

import type { User as UserModel } from "@subspace/core"

import { User } from "../data"
import * as Util from "./util"
import { generateToken, verifyToken } from "./jwt"

import { JwtConfig } from "../../cfg"

const { secret, expire } = JwtConfig

export type AuthClient = {
  authenticate: (
    username: string,
    password: string,
  ) => Promise<string>,
  verify: string => Promise<UserModel>,
}

export async function authenticate(
  username: string,
  password: string,
) {
  const user = await Util.authenticate(username, password)

  return token(user)
}

export async function verify(token: string) {
  return verifyToken(token, secret)
}

export async function token(user: UserModel) {
  return generateToken(user, secret, expire)
}
