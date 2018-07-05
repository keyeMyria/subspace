// @flow

import type { TokenInvalid } from "./action-types"

import { TOKEN_INVALID } from "./action-types"

export function tokenInvalid(): TokenInvalid {
  return {
    type: TOKEN_INVALID,
  }
}
