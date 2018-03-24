// // @flow

// import type { Store as ReduxStore, Dispatch as ReduxDispatch, Reducer, Middleware, StoreEnhancer } from "redux"

// import type { Action } from "../actions"
// import type { Game } from "../model/game"

// export type State = Game
// export type Store = ReduxStore<State, Action>
// export type Dispatch = ReduxDispatch<Action>

// import {
//   createStore as reduxCreateStore,
//   combineReducers,
//   applyMiddleware,
//   compose
// } from "redux"

// const devToolsCompose =
//   process.env.APP_ENV === "browser" &&
//   (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any => $Compose)

// const composeEnhancers = devToolsCompose
//   ? devToolsCompose({
//       actionsBlacklist: ["PHYSICS_UPDATE", "TICK"],
//       maxAge: 200
//     })
//   : compose

// export const createStore = (
//   reducers: { [string]: Reducer<any, Action> } = {},
//   middleware: Middleware<State, Action>[] = [],
//   ...enhancers: StoreEnhancer<State, Action>[]
// ) => {
//   const store = createStore(
//     combineReducers(Object.assign({}, reducers)),
//     ...composeEnhancers(
//       applyMiddleware(...middleware),
//       ...enhancers
//     )
//   )

//   return store
// }

export const createStore = () => {}
