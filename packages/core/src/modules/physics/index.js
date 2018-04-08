// @flow

import type { Dispatch } from "redux"

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

export const PHYSICS_ROTATE_BODY = "physics/rotate_body!"
export type PhysicsRotateBody = {
  type: "physics/rotate_body!",
  payload: {
    bodyId: BodyId,
    angle: number,
  },
}

export type PhysicsAction =
  | PhysicsAddBody
  | PhysicsUpdateBody
  | PhysicsRotateBody

// Action creators

export const addBody = (body: Body) => ({
  type: PHYSICS_ADD_BODY,
  payload: {
    body,
  },
})

export const rotateBody = (bodyId: BodyId, angle: number) => ({
  type: PHYSICS_ROTATE_BODY,
  payload: {
    bodyId,
    angle,
  },
})

export const updateBody = (body: Body) => ({
  type: PHYSICS_UPDATE_BODY,
  payload: {
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

// Middleware

export const createMiddleware = (driver: PhysicsDriver) => {
  return <A: any>(store: *) => (next: Dispatch<any>) => (
    action: A,
  ) => {
    const result = next(action)

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

    return result
  }
}
