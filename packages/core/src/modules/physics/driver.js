// @flow

import type { BodyId, Body } from "../../model"

export type PhysicsDriver = {
  addBody(id: number, Body: Body): Promise<Body>,
  rotateBody(id: number, radians: number): Promise<Body>,
}
