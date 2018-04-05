// @flow

import type {
  Dispatch as ReduxDispatch,
  Store as ReduxStore,
  Middleware as ReduxMiddleware,
} from "redux"

import type { Reducers } from "../reducers"
import type { Action } from "./actions"

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V

export type { Action }

export type State = $ObjMap<Reducers, $ExtractFunctionReturn>
export type GetState = () => State
