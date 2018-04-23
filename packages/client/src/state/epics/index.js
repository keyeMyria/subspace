// @flow

import authEpics from "./auth"
import udpEpics from "./udp"

export default [...authEpics, ...udpEpics]
