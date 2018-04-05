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

export type Action = CoreAction | { type: "YOLO" }
// export type Action = CoreAction

export type State = CoreState & {}

export type Store = ReduxStore<State, Action, Dispatch>
export type Dispatch = (action: Action) => any
export type GetState = () => State
export type Middleware = ReduxMiddleware<State, Action, Dispatch>
