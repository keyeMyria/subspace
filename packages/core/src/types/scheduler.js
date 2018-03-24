// @flow

export type Step = (dt: number) => any
export type Scheduler = (fn: Step) => any
