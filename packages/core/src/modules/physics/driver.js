// @flow

import type { BodyId, Body } from "../../model"

export type PhysicsDriver = {
  addBody(id: BodyId, Body: Body): Promise<Body>,
  rotateBody(id: BodyId, radians: number): Promise<Body>,
}
