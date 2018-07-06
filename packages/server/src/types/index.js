// @flow

import type {
  Store as ReduxStore,
  Dispatch as ReduxDispatch,
  Middleware as ReduxMiddleware,
} from "redux"
import type { Action as CoreAction } from "@subspace/core"

import type { Reducers } from "../state/reducers"
import type { SpatialIndexAction } from "../state/modules/SpatialIndex"
import type { UsersAction } from "../state/modules/Users"
import type { ShipsAction } from "../state/modules/Ships"

export type Action =
  | CoreAction
  | SpatialIndexAction
  | UsersAction
  | ShipsAction

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V

export type ServerState = $ObjMap<Reducers, $ExtractFunctionReturn>
export type State = ServerState

export type Store = ReduxStore<State, Action, Dispatch>
export type Dispatch = (action: Action) => any
export type GetState = () => State
export type Middleware = ReduxMiddleware<State, Action, Dispatch>
