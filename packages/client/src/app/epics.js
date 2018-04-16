// @flow

import { combineEpics } from "redux-observable"

import { authEpics } from "./modules/auth"
import { udpEpics } from "./modules/udp"

export default combineEpics(...authEpics, ...udpEpics)
