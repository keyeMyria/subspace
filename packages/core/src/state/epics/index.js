// @flow

import createLoopEpics from "./loop"
import createPhysicsEpics from "./physics"
import createShipEpics from "./ship"

import { createP2Driver } from "../../physics"

export default [
  ...createLoopEpics(),
  ...createPhysicsEpics(
    createP2Driver({
      gravity: [0, 0],
    }),
  ),
  ...createShipEpics(),
]
