// @flow

import { decorateReduxModule } from "../../util"

import * as AsyncModule from "./async"
import * as LoopModule from "./loop"
import * as PhysicsModule from "./physics"
import * as ShipsModule from "./ships"
import * as UsersModule from "./users"

export const Async = decorateReduxModule("Async", AsyncModule)
export const Loop = decorateReduxModule("Loop", LoopModule)
export const Physics = decorateReduxModule("Physics", PhysicsModule)
export const Ships = decorateReduxModule("Ships", ShipsModule)
export const Users = decorateReduxModule("Users", UsersModule)

export type * from "./async"
export type * from "./loop"
export type * from "./physics"
export type * from "./ships"
export type * from "./users"
