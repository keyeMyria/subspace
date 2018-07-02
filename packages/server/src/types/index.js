// @flow

import type {
  Store as ReduxStore,
  Dispatch as ReduxDispatch,
  Middleware as ReduxMiddleware,
} from "redux"

import type { Reducers } from "../reducers"

import type { Action as AdjacentBodiesAction } from "../state/modules/adjacent-bodies/action-types"
import type { Action as ClientsAction } from "../state/modules/clients/action-types"
import type { Action as UsersAction } from "../state/modules/users/action-types"
import type { Action as ShipAction } from "../state/modules/ships/action-types"

export type Action =
  | AdjacentBodiesAction
  | ClientsAction
  | UsersAction
  | ShipAction

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V

export type ServerState = $ObjMap<Reducers, $ExtractFunctionReturn>
export type State = ServerState

export type Store = ReduxStore<State, Action, Dispatch>
export type Dispatch = (action: Action) => any
export type GetState = () => State
export type Middleware = ReduxMiddleware<State, Action, Dispatch>
