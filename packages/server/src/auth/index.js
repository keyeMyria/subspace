// @flow

import type { User, UserData } from "../model/user"

import * as Util from "./util"
import { generateToken, verifyToken } from "./jwt"

import { JwtConfig } from "../../cfg"

const { secret, expire } = JwtConfig

export type AuthClient = {
  authenticate: (
    username: string,
    password: string,
  ) => Promise<string>,
  verify: string => Promise<UserData>,
}

export async function authenticate(
  username: string,
  password: string,
) {
  const user = await Util.authenticate(username, password)

  return token(user)
}

export async function verify(token: string): Promise<UserData> {
  return verifyToken(token, secret)
}

export async function token(user: UserData) {
  return generateToken(user, secret, expire)
}
