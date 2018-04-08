// @flow

import type { Player as CorePlayer } from "@subspace/core"

export type Player = CorePlayer & {
  loading: boolean,
}
