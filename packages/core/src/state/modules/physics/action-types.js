// @flow

import type { Body } from "../../../model"

export const ADD_BODY = "ADD_BODY"
export type AddBody = {
  type: "ADD_BODY",
  payload: {
    body: Body,
  },
}

export const UPDATE_BODY = "UPDATE_BODY"
export type UpdateBody = {
  type: "UPDATE_BODY",
  payload: {
    body: Body,
  },
}

export const ROTATE_BODY = "ROTATE_BODY"
export type RotateBody = {
  type: "ROTATE_BODY",
  payload: {
    bodyId: number,
    angle: number,
  },
}

export default { ADD_BODY, UPDATE_BODY, ROTATE_BODY }
export type Action = AddBody | UpdateBody | RotateBody
