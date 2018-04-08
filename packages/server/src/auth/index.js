// @flow

import type { Player, ClientMessage } from "@subspace/core"

export type AuthCredentials = {}

export type AuthClient = {
  check: ClientMessage => Promise<boolean>,
  login: AuthCredentials => Promise<Player>,
}

export const create = (): AuthClient => {
  const check = () => Promise.resolve(false)
  const login = () => Promise.reject()

  return {
    check,
    login,
  }
}
