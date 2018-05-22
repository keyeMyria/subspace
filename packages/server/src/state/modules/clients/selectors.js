// @flow

import type { State } from "./reducer"

export const getClient = (state: State, clientId: string) =>
  state.byId[clientId]

export const getClientByUserId = (state: State, userId: number) =>
  state.byUserId[userId]
