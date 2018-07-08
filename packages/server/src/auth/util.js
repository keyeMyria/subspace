// @flow

import bcrypt from "bcrypt"

import type { Db } from "../data"
import type { User, UserData } from "../model/user"

export function comparePassword(a: string, b: string) {
  return bcrypt.compare(a, b)
}

export type AuthUtil = {
  authenticate: (
    username: string,
    password: string,
  ) => Promise<UserData>,
  getUserById: string => Promise<User>,
}

export function make(db: Db): AuthUtil {
  async function authenticate(username, password) {
    let model = await db.User.findOne({ where: { username } })

    if (!model) {
      throw new Error("Invalid username or password")
    }

    if (!await bcrypt.compare(password, model.get("password"))) {
      throw new Error("Invalid username or password")
    }

    return (model.toJSON(): any)
  }

  async function getUserById(userId: string) {
    const model = await db.User.findById(userId)

    if (!model) {
      throw new Error(`User with id ${userId} not found`)
    }

    return model.toJSON()
  }

  return {
    authenticate,
    getUserById,
  }
}
