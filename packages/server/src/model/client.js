// @flow

import type { UserId } from "@subspace/core"

export type ClientId = string

export type Client = {
  id: ClientId,
  userId: UserId,
  connectionId: string,
}
