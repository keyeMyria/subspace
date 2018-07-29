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

type TurnLeft = {
  type: "TURN_LEFT",
  payload: {
    shipId: string,
  },
}

type TurnRight = {
  type: "TURN_RIGHT",
  payload: {
    shipId: string,
  },
}

type TurnLeftEnd = {
  type: "TURN_LEFT_END",
  payload: {
    shipId: string,
  },
}

type TurnRightEnd = {
  type: "TURN_RIGHT_END",
  payload: {
    shipId: string,
  },
}

type Remove = {
  type: "REMOVE",
  payload: {
    shipId: string,
  },
}

type Thrust = {
  type: "THRUST",
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
  | TurnLeft
  | TurnLeftEnd
  | TurnRight
  | TurnRightEnd
  | Remove
  | Thrust
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
  TURN_LEFT: "TURN_LEFT",
  TURN_LEFT_END: "TURN_LEFT_END",
  TURN_RIGHT: "TURN_RIGHT",
  TURN_RIGHT_END: "TURN_RIGHT_END",
  REMOVE: "REMOVE",
  THRUST: "THRUST",
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

const defaultShip = {
  thrust: [0, 0],
  turn: [0, 0],
}

function add(state: State, action: Add) {
  const { ship } = action.payload

  return {
    ...state,
    byId: ship.id
      ? {
          ...state.byId,
          [ship.id]: {
            ...defaultShip,
            ...ship,
          },
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

function startThrust(state: State, action: Thrust | ReverseThrust) {
  const { shipId } = action.payload
  const ship = state.byId[shipId]
  return {
    ...state,
    byId: {
      ...state.byId,
      [shipId]: {
        ...ship,
        thrust: [
          (action.type === actionTypes.THRUST ? 1 : -1) *
            selectors.getShipThrust(state, shipId),
          ship.thrust[1],
        ],
      },
    },
  }
}

function endThrust(
  state: State,
  action: ThrustEnd | ReverseThrustEnd,
) {
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

function startTurn(state: State, action: TurnLeft | TurnRight) {
  const { shipId } = action.payload
  const ship = state.byId[shipId]

  return {
    ...state,
    byId: {
      ...state.byId,
      [shipId]: {
        ...ship,
        turn:
          action.type === actionTypes.TURN_LEFT
            ? [1, ship.turn[1]]
            : [ship.turn[0], 1],
      },
    },
  }
}

function endTurn(state: State, action: TurnLeftEnd | TurnRightEnd) {
  const { shipId } = action.payload
  const ship = state.byId[shipId]
  return {
    ...state,
    byId: {
      ...state.byId,
      [shipId]: {
        ...ship,
        turn:
          action.type === actionTypes.TURN_LEFT_END
            ? [0, ship.turn[1]]
            : [ship.turn[0], 0],
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
    case actionTypes.THRUST:
    case actionTypes.THRUST_REVERSE:
      return startThrust(state, action)
    case actionTypes.THRUST_END:
    case actionTypes.THRUST_REVERSE_END:
      return endThrust(state, action)
    case actionTypes.TURN_LEFT:
    case actionTypes.TURN_RIGHT:
      return startTurn(state, action)
    case actionTypes.TURN_LEFT_END:
    case actionTypes.TURN_RIGHT_END:
      return endTurn(state, action)
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
