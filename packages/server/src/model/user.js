// @flow

import type { User as CoreUser } from "@subspace/core"

export type User = CoreUser & {
  password: string,
}

export type UserData = CoreUser
