// @flow

import makeLoopEpics from "./loop"
import makePhysicsEpics from "./physics"
import makeUserEpics from "./user"

import type { PhysicsDriver } from "../../physics"

type Options = {
  physicsDriver: PhysicsDriver,
}

export const make = (options: Options) => {
  return [
    ...makeLoopEpics(),
    ...makePhysicsEpics(options.physicsDriver),
    ...makeUserEpics(),
  ]
}
