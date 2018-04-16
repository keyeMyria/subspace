// @flow

import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt"
import LocalStrategy from "passport-local"

import { authenticate } from "./util"
import { User } from "../data"

const { JWT_SECRET } = process.env

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
}

export const local = new LocalStrategy(
  async (username: string, password: string, done: Function) => {
    let user

    try {
      user = await authenticate(username, password)
    } catch (err) {
      return done(err)
    }

    return done(null, user)
  },
)

export const jwt = new JwtStrategy(
  jwtOptions,
  async (payload, done) => {
    let user

    try {
      user = await User.findById(payload.id)
    } catch (err) {
      return done(err)
    }

    if (user) {
      done(null, user.toJSON())
    } else {
      done(null, false)
    }
  },
)
