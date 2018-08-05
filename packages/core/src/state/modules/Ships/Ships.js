// @flow

import { createReduxModule } from "@subspace/redux-module"

import type { Ship } from "../../../model"

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

type Remove = {
  type: "REMOVE",
  payload: {
    shipId: string,
  },
}

type Action = Add | Update | Remove

export type { State as ShipsState, Action as ShipsAction }

const actionTypes = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  REMOVE: "REMOVE",
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

function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case actionTypes.ADD:
      return add(state, action)
    case actionTypes.UPDATE:
      return update(state, action)
    case actionTypes.REMOVE:
      return remove(state, action)
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
