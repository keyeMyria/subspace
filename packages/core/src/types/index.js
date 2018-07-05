// @flow

import type {
  Dispatch as ReduxDispatch,
  Store as ReduxStore,
  Middleware as ReduxMiddleware,
} from "redux"

import type { Reducers } from "../state/reducers"
import type { Action } from "./actions"

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V

export type { Action }

export type Store = ReduxStore<State, Action, Dispatch>
export type Dispatch = ReduxDispatch<Action>
export type Middleware = ReduxMiddleware<State, Action, Dispatch>
export type State = $ObjMap<Reducers, $ExtractFunctionReturn>
export type GetState = () => State
