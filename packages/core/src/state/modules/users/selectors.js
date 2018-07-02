// @flow

import type { State } from "./reducer"

export const getUsers = (state: State) => state.byId

export const getUser = (state: State, id: number) => state.byId[id]

export const getUserByActiveShipId = (state: State, id: number) =>
  state.byActiveShipId[id]

export default { getUsers, getUser, getUserByActiveShipId }
