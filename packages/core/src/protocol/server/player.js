// @flow

import type { Body, Player } from "../../model"
import type { MessageTypePlayerUpdate } from "./message-types"
import { MESSAGE_TYPE_PLAYER_UPDATE } from "./message-types"

export type PlayerUpdateMessage = [MessageTypePlayerUpdate, Player]

export type PlayerMessage = PlayerUpdateMessage

export const playerUpdateMessage = (
  player: Player,
): PlayerUpdateMessage => [MESSAGE_TYPE_PLAYER_UPDATE, player]
