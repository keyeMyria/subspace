// @flow

import type { Body } from "../model"

export type PhysicsDriver = {
  addBody(id: string, Body: Body): Promise<Body>,
  rotateBody(id: string, radians: number): Promise<Body>,
}
