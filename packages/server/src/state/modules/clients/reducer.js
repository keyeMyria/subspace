// @flow

import type { Client } from "../../../model/client"
import type { Action } from "./action-types"
import { getClient } from "./selectors"
import { ADD, REMOVE } from "./action-types"

export type State = {
  byId: { [string]: Client },
  byUserId: { [number]: Client },
}

const initialState = {
  byId: {},
  byUserId: {},
}

export default function reducer(
  state: State = initialState,
  action: Action,
) {
  switch (action.type) {
    case ADD: {
      const { client } = action.payload
      const byId = {
        ...state.byId,
        [client.id]: client,
      }

      let byUserId = state.byUserId

      if (client.userId) {
        byUserId = {
          ...byUserId,
          [client.userId]: client,
        }
      }

      return {
        ...state,
        byId,
        byUserId,
      }
    }
    case REMOVE: {
      const { clientId } = action.payload
      const client = getClient(state, clientId)
      const nextState = { ...state }
      const { userId } = client

      delete nextState.byId[clientId]

      if (userId) {
        delete nextState.byUserId[userId]
      }

      return nextState
    }
    default:
      return state
  }
}
