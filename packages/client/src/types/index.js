// @flow

import type {
  Store as ReduxStore,
  Middleware as ReduxMiddleware,
} from "redux"

import type { Reducers } from "../state/reducers"
// $FlowFixMe
import type { Action as AuthAction } from "../state/modules/auth/action-types"
import type { Action as UdpAction } from "../state/modules/udp/action-types"

export type Action = AuthAction | UdpAction

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V

export type ClientState = $ObjMap<Reducers, $ExtractFunctionReturn>
export type State = ClientState

export type Store = ReduxStore<State, Action, Dispatch>
export type Dispatch = (action: Action) => any
export type GetState = () => State
export type Middleware = ReduxMiddleware<State, Action, Dispatch>
