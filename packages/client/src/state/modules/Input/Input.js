// @flow

import type { ShipsAction } from "@subspace/core"

import { createReduxModule } from "@subspace/redux-module"
import { Ships } from "@subspace/core"

type KeybindingActionType = $PropertyType<ShipsAction, "type">

type State = {
  [key: string]: [KeybindingActionType, KeybindingActionType],
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
  w: [Ships.THRUST, Ships.THRUST_END],
  a: [Ships.TURN_LEFT, Ships.TURN_LEFT_END],
  s: [Ships.THRUST_REVERSE, Ships.THRUST_REVERSE_END],
  d: [Ships.TURN_RIGHT, Ships.TURN_RIGHT_END],
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
    const actionTypes = state[key]

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
