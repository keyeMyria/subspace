// @flow

import type {
  Store as ReduxStore,
  Middleware as ReduxMiddleware,
} from "redux"
import type { Action as CoreAction } from "@subspace/core"

import type { Reducers } from "../state/reducers"
// $FlowFixMe
import type { AuthAction } from "../state/modules/Auth"
import type { UdpAction } from "../state/modules/Udp"

export type Action = CoreAction | AuthAction | UdpAction

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V

export type ClientState = $ObjMap<Reducers, $ExtractFunctionReturn>
export type State = ClientState

export type Store = ReduxStore<State, Action, Dispatch>
export type Dispatch = (action: Action) => any
export type GetState = () => State
export type Middleware = ReduxMiddleware<State, Action, Dispatch>
