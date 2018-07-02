// @flow

import type { User } from "../../../model"
import * as ActionTypes from "./action-types"

export function addUser(user: User) {
  return {
    type: ActionTypes.ADD,
    payload: {
      user,
    },
  }
}

export function updateUser(user: User) {
  return {
    type: ActionTypes.UPDATE,
    payload: {
      user,
    },
  }
}

export default { addUser, updateUser }
