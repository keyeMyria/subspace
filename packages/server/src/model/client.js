// @flow

import type { PlayerId } from "@subspace/core"

export type ClientId = string

export type Client = {
  id: ClientId,
  playerId?: PlayerId,
  connectionId: string,
}
