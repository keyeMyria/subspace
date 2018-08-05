// @flow

import { createReduxModule } from "@subspace/redux-module"

import type { Body } from "../../../model"

type State = {
  frame: number,
  byId: {
    [string]: Body,
  },
}

type Init = {
  type: "INIT",
  payload: {
    fixedTimeStep: number,
  },
}

type AddBody = {
  type: "ADD_BODY",
  payload: {
    body: Body,
  },
}

type UpdateBody = {
  type: "UPDATE_BODY",
  payload: {
    body: Body,
  },
}

type RotateBody = {
  type: "ROTATE_BODY",
  payload: {
    bodyId: string,
    angle: number,
  },
}

type ApplyForce = {
  type: "APPLY_FORCE",
  payload: {
    bodyId: string,
    force: [number, number],
  },
}

type ApplySnapshot = {
  type: "APPLY_SNAPSHOT",
  payload: {
    frame: number,
    bodies: { [string]: Body },
  },
}

type RemoveBody = {
  type: "REMOVE_BODY",
  payload: {
    bodyId: string,
  },
}

type DriverUpdate = {
  type: "DRIVER_UPDATE",
  payload: {
    frame: number,
    bodies: { [string]: Body },
  },
}

type Action =
  | Init
  | AddBody
  | UpdateBody
  | RotateBody
  | ApplyForce
  | ApplySnapshot
  | RemoveBody
  | DriverUpdate

export type { State as PhysicsState, Action as PhysicsAction }

const actionTypes = {
  INIT: "INIT",
  ADD_BODY: "ADD_BODY",
  UPDATE_BODY: "UPDATE_BODY",
  ROTATE_BODY: "ROTATE_BODY",
  APPLY_FORCE: "APPLY_FORCE",
  APPLY_SNAPSHOT: "APPLY_SNAPSHOT",
  REMOVE_BODY: "REMOVE_BODY",
  DRIVER_UPDATE: "DRIVER_UPDATE",
}

const actionCreators = {
  init(fixedTimeStep: number): Init {
    return {
      type: actionTypes.INIT,
      payload: {
        fixedTimeStep,
      },
    }
  },
  addBody(body: Body): AddBody {
    return {
      type: actionTypes.ADD_BODY,
      payload: {
        body,
      },
    }
  },
  applyForce(bodyId: string, force: [number, number]): ApplyForce {
    return {
      type: actionTypes.APPLY_FORCE,
      payload: {
        bodyId,
        force,
      },
    }
  },
  rotateBody(bodyId: string, angle: number): RotateBody {
    return {
      type: actionTypes.ROTATE_BODY,
      payload: {
        bodyId,
        angle,
      },
    }
  },
  updateBody(body: Body): UpdateBody {
    return {
      type: actionTypes.UPDATE_BODY,
      payload: {
        body,
      },
    }
  },
  applySnapshot(
    frame: number,
    bodies: { [string]: Body },
  ): ApplySnapshot {
    return {
      type: actionTypes.APPLY_SNAPSHOT,
      payload: {
        frame,
        bodies,
      },
    }
  },
  removeBody(bodyId: string): RemoveBody {
    return {
      type: actionTypes.REMOVE_BODY,
      payload: {
        bodyId,
      },
    }
  },
  driverUpdate(update: {
    frame: number,
    bodies: { [string]: Body },
  }) {
    return {
      type: actionTypes.DRIVER_UPDATE,
      payload: update,
    }
  },
}

function reducer(
  state: State = {
    frame: -1,
    byId: {},
  },
  action: Action,
): State {
  switch (action.type) {
    case actionTypes.ADD_BODY: {
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.body.id]: action.payload.body,
        },
      }
    }
    case actionTypes.UPDATE_BODY: {
      const { body } = action.payload
      const { id } = body

      if (!id) {
        return state
      }

      const nextState = { ...state }

      nextState.byId[id] = {
        ...state.byId[id],
        ...body,
      }

      return state
    }
    case actionTypes.REMOVE_BODY: {
      const { bodyId } = action.payload
      const nextState = { ...state }

      delete nextState.byId[bodyId]

      return nextState
    }
    case actionTypes.DRIVER_UPDATE: {
      const { frame, bodies } = action.payload
      const nextState = { ...state, byId: { ...state.byId }, frame }

      for (const bodyId in bodies) {
        nextState.byId[bodyId] = {
          ...nextState.byId[bodyId],
          ...bodies[bodyId],
        }
      }

      return nextState
    }
    default:
      return state
  }
}

const selectors = {
  getBodies(state: State) {
    return state.byId
  },
  getBody(state: State, id: string) {
    return state.byId[id]
  },
}

export default createReduxModule("Physics", {
  actionTypes,
  actionCreators,
  reducer,
  selectors,
})
