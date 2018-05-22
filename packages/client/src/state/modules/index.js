import { decorateReduxModule } from "@subspace/core"

import * as AuthModule from "./auth"
import * as CounterModule from "./counter"
import * as UdpModule from "./udp"

export const Auth = decorateReduxModule("Auth", AuthModule)
export const Counter = decorateReduxModule("Counter", CounterModule)
export const Udp = decorateReduxModule("Udp", UdpModule)
