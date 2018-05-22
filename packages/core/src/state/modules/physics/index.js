// @flow

import type { Dispatch } from "redux"

import type { Action, Middleware } from "../../../types"
import type { Body } from "../../../model"

import type { PhysicsDriver } from "./driver"
import * as P2Driver from "./p2-driver"

export { P2Driver }

export type { PhysicsDriver }

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

export const PHYSICS_ROTATE_BODY = "physics/rotate_body!"
export type PhysicsRotateBody = {
  type: "physics/rotate_body!",
  payload: {
    bodyId: number,
    angle: number,
  },
}

export type PhysicsAction =
  | PhysicsAddBody
  | PhysicsUpdateBody
  | PhysicsRotateBody

// Action creators

export function addBody(body: Body): PhysicsAddBody {
  return {
    type: PHYSICS_ADD_BODY,
    payload: {
      body,
    },
  }
}

export function rotateBody(
  bodyId: number,
  angle: number,
): PhysicsRotateBody {
  return {
    type: PHYSICS_ROTATE_BODY,
    payload: {
      bodyId,
      angle,
    },
  }
}

export function updateBody(body: Body): PhysicsUpdateBody {
  return {
    type: PHYSICS_UPDATE_BODY,
    payload: {
      body,
    },
  }
}

// Selectors

export const getBody = (state: PhysicsState, id: number) => state[id]

// Reducer

export type PhysicsState = {
  byId: {
    [number]: Body,
  },
}

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

// Middleware

export function createMiddleware(driver: PhysicsDriver): Middleware {
  return store => next => action => {
    switch (action.type) {
      case PHYSICS_ROTATE_BODY: {
        const { bodyId, angle } = action.payload

        driver.rotateBody(bodyId, angle).then(body => {
          next(updateBody(body))
        })

        break
      }
      default:
        break
    }

    return next(action)
  }
}
