// @flow

import { createReduxModule } from "@subspace/redux-module"

import type { Ship, TurnDirection } from "../../../model"

type State = {
  byId: {
    [string]: Ship,
  },
}

type Add = {
  type: "ADD",
  payload: {
    ship: Ship,
  },
}

type Update = {
  type: "UPDATE",
  payload: {
    ship: Ship,
  },
}

type Turn = {
  type: "TURN",
  payload: {
    shipId: string,
    direction: TurnDirection,
  },
}

type Remove = {
  type: "REMOVE",
  payload: {
    shipId: string,
  },
}

type ThrustStart = {
  type: "THRUST_START",
  payload: {
    shipId: string,
  },
}

type ThrustEnd = {
  type: "THRUST_END",
  payload: {
    shipId: string,
  },
}

type ReverseThrust = {
  type: "THRUST_REVERSE",
  payload: {
    shipId: string,
  },
}

type ReverseThrustEnd = {
  type: "THRUST_REVERSE_END",
  payload: {
    shipId: string,
  },
}

type LeftThrust = {
  type: "THRUST_LEFT",
  payload: {
    shipId: string,
  },
}

type LeftThrustEnd = {
  type: "THRUST_LEFT_END",
  payload: {
    shipId: string,
  },
}

type RightThrust = {
  type: "THRUST_RIGHT",
  payload: {
    shipId: string,
  },
}

type RightThrustEnd = {
  type: "THRUST_RIGHT_END",
  payload: {
    shipId: string,
  },
}

type Action =
  | Add
  | Update
  | Turn
  | Remove
  | ThrustStart
  | ThrustEnd
  | ReverseThrust
  | ReverseThrustEnd
  | LeftThrust
  | LeftThrustEnd
  | RightThrust
  | RightThrustEnd

export type { State as ShipsState, Action as ShipsAction }

const actionTypes = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  TURN: "TURN",
  REMOVE: "REMOVE",
  THRUST_START: "THRUST_START",
  THRUST_END: "THRUST_END",
  THRUST_REVERSE: "THRUST_REVERSE",
  THRUST_REVERSE_END: "THRUST_REVERSE_END",
  THRUST_LEFT: "THRUST_LEFT",
  THRUST_LEFT_END: "THRUST_LEFT_END",
  THRUST_RIGHT: "THRUST_RIGHT",
  THRUST_RIGHT_END: "THRUST_RIGHT_END",
}

const actionCreators = {
  addShip(ship: Ship): Add {
    return {
      type: actionTypes.ADD,
      payload: {
        ship,
      },
    }
  },
  update(ship: Ship): Update {
    return {
      type: actionTypes.UPDATE,
      payload: {
        ship,
      },
    }
  },
  turnShip(shipId: string, direction: TurnDirection): Turn {
    return {
      type: actionTypes.TURN,
      payload: {
        shipId,
        direction,
      },
    }
  },
  removeShip(shipId: string): Remove {
    return {
      type: actionTypes.REMOVE,
      payload: {
        shipId,
      },
    }
  },
}

const initialState: State = {
  byId: {},
}

function add(state: State, action: Add) {
  const { ship } = action.payload

  return {
    ...state,
    byId: ship.id
      ? {
          ...state.byId,
          [ship.id]: ship,
        }
      : state.byId,
  }
}

function update(state: State, action: Update) {
  const { ship } = action.payload

  return {
    ...state,
    byId: ship.id
      ? {
          ...state.byId,
          [ship.id]: { ...state.byId[ship.id], ...ship },
        }
      : state.byId,
  }
}

function remove(state: State, action: Remove) {
  const { shipId } = action.payload
  const nextState = { ...state }

  delete nextState.byId[shipId]

  return nextState
}

function startThrust(state: State, action: ThrustStart) {
  const { shipId } = action.payload
  const ship = state.byId[shipId]
  return {
    ...state,
    byId: {
      ...state.byId,
      [shipId]: {
        ...ship,
        thrust: [
          selectors.getShipThrust(state, shipId),
          ship.thrust[1],
        ],
      },
    },
  }
}

function endThrust(state: State, action: ThrustEnd) {
  const { shipId } = action.payload
  const ship = state.byId[shipId]
  return {
    ...state,
    byId: {
      ...state.byId,
      [shipId]: {
        ...ship,
        thrust: [0, ship.thrust[1]],
      },
    },
  }
}

function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case actionTypes.ADD:
      return add(state, action)
    case actionTypes.UPDATE:
      return update(state, action)
    case actionTypes.REMOVE:
      return remove(state, action)
    case actionTypes.THRUST_START:
      return startThrust(state, action)
    case actionTypes.THRUST_END:
      return endThrust(state, action)
    default:
      return state
  }
}

const selectors = {
  getShips(state: State) {
    return state.byId
  },
  getShip(state: State, shipId: string) {
    return state.byId[shipId]
  },
  getShipIds(state: State) {
    return Object.keys(state.byId)
  },
  getShipThrust(state: State, shipId: string) {
    const ship = state.byId[shipId]

    return 1
  },
}

export default createReduxModule("Ships", {
  actionTypes,
  actionCreators,
  reducer,
  selectors,
})
