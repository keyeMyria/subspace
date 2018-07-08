// @flow

import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt"
import LocalStrategy from "passport-local"

import type { AuthUtil } from "./util"

import * as Env from "../env"

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: Env.JWT.secret,
}

export function make(util: AuthUtil) {
  const local = new LocalStrategy(
    async (username: string, password: string, done: Function) => {
      let user

      try {
        user = await util.authenticate(username, password)
      } catch (err) {
        return done(err)
      }

      return done(null, user)
    },
  )

  const jwt = new JwtStrategy(jwtOptions, async (payload, done) => {
    let user

    try {
      user = await util.getUserById(payload.id)
    } catch (err) {
      return done(err)
    }

    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }
  })

  return {
    local,
    jwt,
  }
}
