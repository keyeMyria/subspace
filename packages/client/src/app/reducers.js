// @flow

import { reducer as form } from "redux-form"
import { combineReducers } from "redux"

import async from "./modules/async"
import auth from "./modules/auth"
import udp from "./modules/udp"

export default combineReducers({
  async,
  auth,
  udp,
  form,
})

export const initialState = {}
