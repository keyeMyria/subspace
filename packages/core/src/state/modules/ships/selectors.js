// @flow

import type { State } from "./reducer"

export const getShip = (state: State, id: number) => state.byId[id]

export default { getShip }
