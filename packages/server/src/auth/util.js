// @flow

import bcrypt from "bcrypt"
import type { User as UserModel } from "../model/user"

import { User } from "../data"

export function comparePassword(password: string, user: UserModel) {
  return bcrypt.compare(password, user.password)
}

export async function authenticate(
  username: string,
  password: string,
) {
  let model = await User.findOne({ where: { username } })

  if (!model) {
    throw new Error("Invalid username or password")
  }

  let user = model.toJSON()

  if (!await comparePassword(password, user)) {
    throw new Error("Invalid username or password")
  }

  return user
}
