// @flow

import type { UsersAction } from "@subspace/core"

import { createReduxModule } from "@subspace/redux-module"
import { Users } from "@subspace/core"

type KeybindingActionType = $PropertyType<UsersAction, "type">

type State = {
  bindings: {
    [key: string]: [KeybindingActionType, KeybindingActionType],
  },
}

type UpdateKeybinding = {
  type: "UPDATE_KEYBINDING",
  payload: {
    key: string,
    type: "keydown" | "keyup",
    actionType: KeybindingActionType,
  },
}

type Action = UpdateKeybinding

export type { State as InputState, Action as InputAction }

const actionTypes = {
  UPDATE_KEYBINDING: "UPDATE_KEYBINDING",
}

const actionCreators = {
  updateKeybinding(
    key: string,
    type: "keydown" | "keyup",
    actionType: KeybindingActionType,
  ) {
    return {
      type: actionTypes.UPDATE_KEYBINDING,
      payload: {
        key,
        type,
        actionType,
      },
    }
  },
}

const initialState = {
  bindings: {
    w: [Users.THRUST, Users.THRUST_END],
    a: [Users.TURN_LEFT, Users.TURN_LEFT_END],
    s: [Users.THRUST_REVERSE, Users.THRUST_REVERSE_END],
    d: [Users.TURN_RIGHT, Users.TURN_RIGHT_END],
  },
}

function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case actionTypes.UPDATE_KEYBINDING: {
      const { type, actionType, key } = action.payload
      const [up, down] = state[key]
      return {
        ...state,
        [key]: [
          type === "keyup" ? actionType : up,
          type === "keydown" ? actionType : down,
        ],
      }
    }
  }
  return state
}

const selectors = {
  getKeybinding(
    state: State,
    key: string,
    type: "keyup" | "keydown",
  ) {
    const actionTypes = state.bindings[key]

    if (!actionTypes) {
      return null
    }

    return actionTypes[+(type === "keyup")]
  },
}

export default createReduxModule("Input", {
  actionTypes,
  actionCreators,
  reducer,
  selectors,
})
