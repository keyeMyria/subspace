// @flow

import type { $Request, $Response } from "express"

export default function asyncMiddleware(fn: Function) {
  return (req: $Request, res: $Response, next: Function) => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }
}
