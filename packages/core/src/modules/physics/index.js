// @flow

import type { Action } from "../../types"
import type { BodyId, Body } from "../../model"

import type { PhysicsDriver } from "./driver"
import * as P2Driver from "./p2-driver"

export { P2Driver }

export type { PhysicsDriver }

export type PhysicsState = {
  byId: {
    [BodyId]: Body,
  },
}

// Actions

export const PHYSICS_ADD_BODY = "physics/add_body"
export type PhysicsAddBody = {
  type: "physics/add_body",
  payload: {
    body: Body,
  },
}

export const PHYSICS_UPDATE_BODY = "physics/update_body"
export type PhysicsUpdateBody = {
  type: "physics/update_body",
  payload: {
    body: Body,
  },
}

// Action creators

export const addBody = (body: Body) => ({
  type: PHYSICS_ADD_BODY,
  payload: {
    body,
  },
})

export const updateBody = (id: BodyId, body: Body) => ({
  type: PHYSICS_UPDATE_BODY,
  payload: {
    id,
    body,
  },
})

// Selectors

export const getBody = (state: PhysicsState, id: BodyId) => state[id]

// Reducer

const initialState: PhysicsState = {
  byId: {},
}

export default function reducer(
  state: PhysicsState = initialState,
  action: Action,
): PhysicsState {
  switch (action.type) {
    case PHYSICS_ADD_BODY:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.body.id]: action.payload.body,
        },
      }
    case PHYSICS_UPDATE_BODY:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.body.id]: {
            ...getBody(state, action.payload.body.id),
            ...action.payload.body,
          },
        },
      }
    default:
      return state
  }
}
