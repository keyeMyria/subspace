// @flow

import type { Body } from "../../model"
import type { MessageTypeSnapshot } from "./message-types"
import { MESSAGE_TYPE_SNAPSHOT } from "./message-types"

export type SnapshotMessage = [MessageTypeSnapshot, number, Body[]]

export const snapshotMessage = (
  frame: number,
  bodies: Body[],
): SnapshotMessage => [MESSAGE_TYPE_SNAPSHOT, frame, bodies]
