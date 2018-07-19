// @flow

import createLoopEpics from "./loop"
import createPhysicsEpics from "./physics"
import createShipEpics from "./ship"

import * as LocalDriver from "../../physics/p2/local"
import * as WorkerDriver from "../../physics/p2/worker"

export default [
  ...createLoopEpics(),
  ...createPhysicsEpics(
    typeof window === "object"
      ? WorkerDriver.make("p2-world.worker.js")
      : LocalDriver.make(),
  ),
  ...createShipEpics(),
]
