// @flow

import type { State } from "./reducer"

export const getBody = (state: State, id: number) => state[id]

export default { getBody }
