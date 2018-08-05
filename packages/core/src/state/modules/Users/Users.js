// @flow

import { combineReducers } from "redux"
import { createReduxModule } from "@subspace/redux-module"
import { produce } from "immer"

import type { User, UserCommand } from "../../../model"

type State = {
  byId: ByIdState,
  byActiveShipId: ByActiveShipIdState,
  commandByUserId: CommandByUserIdState,
}

type ByIdState = {
  [userId: string]: User,
}

type ByActiveShipIdState = {
  [shipId: string]: User,
}

type CommandByUserIdState = {
  [userId: string]: UserCommand,
}

type CommandPayload = {
  userId: string,
}

type Add = {
  type: "ADD",
  payload: {
    user: User,
  },
}

type Update = {
  type: "UPDATE",
  payload: {
    user: User,
  },
}

type Remove = {
  type: "REMOVE",
  payload: {
    userId: string,
  },
}

type TurnLeft = {
  type: "TURN_LEFT",
  payload: CommandPayload,
}

type TurnLeftEnd = {
  type: "TURN_LEFT_END",
  payload: CommandPayload,
}

type TurnRight = {
  type: "TURN_RIGHT",
  payload: CommandPayload,
}

type TurnRightEnd = {
  type: "TURN_RIGHT_END",
  payload: CommandPayload,
}

type Thrust = {
  type: "THRUST",
  payload: CommandPayload,
}

type ThrustEnd = {
  type: "THRUST_END",
  payload: CommandPayload,
}

type ReverseThrust = {
  type: "THRUST_REVERSE",
  payload: CommandPayload,
}

type ReverseThrustEnd = {
  type: "THRUST_REVERSE_END",
  payload: CommandPayload,
}

type LeftThrust = {
  type: "THRUST_LEFT",
  payload: CommandPayload,
}

type LeftThrustEnd = {
  type: "THRUST_LEFT_END",
  payload: CommandPayload,
}

type RightThrust = {
  type: "THRUST_RIGHT",
  payload: CommandPayload,
}

type RightThrustEnd = {
  type: "THRUST_RIGHT_END",
  payload: CommandPayload,
}

type ApplyCommand = {
  type: "APPLY_COMMAND",
  payload: {
    command: UserCommand,
    userId?: string,
  },
}

type Action =
  | Add
  | Update
  | Remove
  | ApplyCommand
  | TurnLeft
  | TurnLeftEnd
  | TurnRight
  | TurnRightEnd
  | Thrust
  | ThrustEnd
  | ReverseThrust
  | ReverseThrustEnd
  | LeftThrust
  | LeftThrustEnd
  | RightThrust
  | RightThrustEnd

export type { State as UsersState, Action as UsersAction }

const actionTypes = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  REMOVE: "REMOVE",
  TURN_LEFT: "TURN_LEFT",
  TURN_LEFT_END: "TURN_LEFT_END",
  TURN_RIGHT: "TURN_RIGHT",
  TURN_RIGHT_END: "TURN_RIGHT_END",
  THRUST: "THRUST",
  THRUST_END: "THRUST_END",
  THRUST_REVERSE: "THRUST_REVERSE",
  THRUST_REVERSE_END: "THRUST_REVERSE_END",
  THRUST_LEFT: "THRUST_LEFT",
  THRUST_LEFT_END: "THRUST_LEFT_END",
  THRUST_RIGHT: "THRUST_RIGHT",
  THRUST_RIGHT_END: "THRUST_RIGHT_END",
  APPLY_COMMAND: "APPLY_COMMAND",
}

const actionCreators = {
  addUser(user: User) {
    return {
      type: actionTypes.ADD,
      payload: {
        user,
      },
    }
  },
  updateUser(user: User) {
    return {
      type: actionTypes.UPDATE,
      payload: {
        user,
      },
    }
  },
  removeUser(userId: string): Remove {
    return {
      type: actionTypes.REMOVE,
      payload: {
        userId,
      },
    }
  },
  applyCommand(command: UserCommand, userId?: string): ApplyCommand {
    return {
      type: actionTypes.APPLY_COMMAND,
      payload: {
        command,
        userId,
      },
    }
  },
}

const byId = (state: ByIdState = {}, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.ADD:
        draft[action.payload.user.id] = action.payload.user
        break
      case actionTypes.UPDATE:
        const { user } = action.payload
        draft[user.id] = Object.assign(draft[user.id], user)
        break
      case actionTypes.REMOVE:
        delete draft[action.payload.userId]
        break
    }
  })

const byActiveShipId = (
  state: ByActiveShipIdState = {},
  action: Action,
) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.ADD: {
        const { user } = action.payload
        if (user.activeShipId) {
          draft[user.activeShipId] = user
        }
        break
      }
      case actionTypes.UPDATE: {
        const { user } = action.payload
        if (user.activeShipId) {
          draft[user.activeShipId] = Object.assign(
            draft[user.activeShipId] || {},
            user,
          )
        }
        break
      }
      case actionTypes.REMOVE: {
        const { userId } = action.payload
        const user = Object.values(draft).find(
          (user: any) => user.id === userId,
        )
        if (user && user.activeShipId) {
          delete draft[user.activeShipId]
        }
        break
      }
    }
  })

const commandByUserId = (
  state: CommandByUserIdState = {},
  action: Action,
) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.ADD:
        draft[action.payload.user.id] = {
          turnLeft: false,
          turnRight: false,
          thrust: false,
          thrustReverse: false,
        }
        break
      case actionTypes.TURN_LEFT:
        draft[action.payload.userId].turnLeft = true
        break
      case actionTypes.TURN_LEFT_END:
        draft[action.payload.userId].turnLeft = false
        break
      case actionTypes.TURN_RIGHT:
        draft[action.payload.userId].turnRight = true
        break
      case actionTypes.TURN_RIGHT_END:
        draft[action.payload.userId].turnRight = false
        break
      case actionTypes.THRUST:
        draft[action.payload.userId].thrust = true
        break
      case actionTypes.THRUST_END:
        draft[action.payload.userId].thrust = false
        break
      case actionTypes.THRUST_REVERSE:
        draft[action.payload.userId].thrustReverse = true
        break
      case actionTypes.THRUST_REVERSE_END:
        draft[action.payload.userId].thrustReverse = false
        break
    }
  })

const reducer = combineReducers({
  byId,
  byActiveShipId,
  commandByUserId,
})

const selectors = {
  getUsers(state: State) {
    return state.byId
  },
  getUser(state: State, userId: string) {
    return state.byId[userId]
  },
  getUserByActiveShipId(state: State, userId: string) {
    return state.byActiveShipId[userId]
  },
  getUserIds(state: State) {
    return Object.keys(state.byId)
  },
  getCommandByUserId(state: State, userId: string) {
    return state.commandByUserId[userId]
  },
}

export default createReduxModule("Users", {
  actionTypes,
  actionCreators,
  reducer,
  selectors,
})
