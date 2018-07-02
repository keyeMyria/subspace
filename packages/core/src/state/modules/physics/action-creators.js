// @flow

import type { Body } from "../../../model"

import * as ActionTypes from "./action-types"

export function addBody(body: Body): ActionTypes.AddBody {
  return {
    type: ActionTypes.ADD_BODY,
    payload: {
      body,
    },
  }
}

export function rotateBody(
  bodyId: number,
  angle: number,
): ActionTypes.RotateBody {
  return {
    type: ActionTypes.ROTATE_BODY,
    payload: {
      bodyId,
      angle,
    },
  }
}

export function updateBody(body: Body): ActionTypes.UpdateBody {
  return {
    type: ActionTypes.UPDATE_BODY,
    payload: {
      body,
    },
  }
}

export default { addBody, rotateBody, updateBody }
