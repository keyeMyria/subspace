// @flow

import type { Db } from "../data"
import type { User, UserData } from "../model/user"

import * as Env from "../env"

import * as Util from "./util"
import * as AuthStrategy from "./strategy"
import { generateToken, verifyToken } from "./jwt"

const { secret, expire } = Env.JWT

export type AuthClient = {
  authenticate: (
    username: string,
    password: string,
  ) => Promise<string>,
  verify: string => Promise<UserData>,
  token: UserData => Promise<string>,
  strategy: {
    local: Function,
    jwt: Function,
  },
}

export function make(db: Db): AuthClient {
  const util = Util.make(db)

  async function authenticate(username: string, password: string) {
    const user = await util.authenticate(username, password)

    return token(user)
  }

  async function verify(token: string): Promise<User> {
    const userData = verifyToken(token, secret)
    const userId = userData.id

    if (!userId) {
      throw new Error(`Could not verify token ${token}`)
    }

    const model = await db.User.findById(userId)

    if (!model) {
      throw new Error(
        `Error while authenticating user with id ${userId}`,
      )
    }

    return model.toJSON()
  }

  async function token(user: UserData) {
    return generateToken(user, secret, expire)
  }

  return {
    authenticate,
    verify,
    token,
    strategy: AuthStrategy.make(util),
  }
}
