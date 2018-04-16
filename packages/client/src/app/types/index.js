// @flow

import type { AuthAction } from "../modules/auth"

import type { UdpAction } from "../modules/udp"

export type Action = AuthAction | UdpAction
