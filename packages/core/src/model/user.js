// @flow

export type User = {
  id?: string,
  activeShipId?: string,
  username: string,
}

export type UserCommand = {
  thrust: boolean,
  reverseThrust: boolean,
  turnLeft: boolean,
  turnRight: boolean,
}
