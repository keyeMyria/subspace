// @flow

import type { TurnDirection } from "../../model"
import type { MessageTypeInputTurn } from "./message-types"
import { MESSAGE_TYPE_INPUT_TURN } from "./message-types"

export type InputTurnMessage = [MessageTypeInputTurn, TurnDirection]

export type InputMessage = InputTurnMessage

export const inputTurnMessage = (
  turnDirection: TurnDirection,
): InputTurnMessage => [MESSAGE_TYPE_INPUT_TURN, turnDirection]
