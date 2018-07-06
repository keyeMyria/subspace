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

type Action = Add | Update | Turn

export type { State as ShipsState, Action as ShipsAction }

const actionTypes = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  TURN: "TURN",
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
}

const initialState: State = {
  byId: {},
}

function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case actionTypes.ADD: {
      const { ship } = action.payload
      return {
        ...state,
        byId: {
          ...state.byId,
          [ship.id]: ship,
        },
      }
    }
    case actionTypes.UPDATE: {
      const { ship } = action.payload
      return {
        ...state,
        byId: {
          ...state.byId,
          [ship.id]: {
            ...selectors.getShip(state, ship.id),
            ...ship,
          },
        },
      }
    }
    default:
      return state
  }
}

const selectors = {
  getShip(state: State, shipId: string) {
    return state.byId[shipId]
  },
}

export default createReduxModule("Ships", {
  actionTypes,
  actionCreators,
  reducer,
  selectors,
})
