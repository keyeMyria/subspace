// @flow

type ReduxInitAction = { type: "@@INIT" }

export type Action =
  | ReduxInitAction
  | { type: "INIT" }
  | { type: "TICK", dt: number }

export const init = () => ({
  type: "INIT",
})

export const update = (dt: number) => ({
  type: "TICK",
  dt,
})
