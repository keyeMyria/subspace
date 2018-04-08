// @flow

import type {
  Store as ReduxStore,
  Dispatch as ReduxDispatch,
  Middleware as ReduxMiddleware,
} from "redux"

import type {
  Action as CoreAction,
  State as CoreState,
} from "@subspace/core"

import type { Reducers } from "../reducers"

import type { AdjacentBodiesAction } from "../modules/adjacent-bodies"
import type { ClientAction } from "../modules/clients"
import type { PlayerAction } from "../modules/players"
import type { ShipAction } from "../modules/ships"

export type Action =
  | CoreAction
  | AdjacentBodiesAction
  | ClientAction
  | PlayerAction
  | ShipAction

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V

export type ServerState = $ObjMap<Reducers, $ExtractFunctionReturn>
export type State = CoreState & ServerState

export type Store = ReduxStore<State, Action, Dispatch>
export type Dispatch = (action: Action) => any
export type GetState = () => State
export type Middleware = ReduxMiddleware<State, Action, Dispatch>
