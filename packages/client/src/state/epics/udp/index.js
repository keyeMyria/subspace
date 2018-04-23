import { Client as UdpClient } from "@web-udp/client"
import { Observable } from "rxjs/Observable"
import { ReplaySubject } from "rxjs/ReplaySubject"

import { Auth, Udp } from "../../modules"

import udpConnection, {
  UdpConnectionSubjectStatus,
} from "../../../extensions/subject/web-udp-connection-subject"

const stateHandlers = {
  [UdpConnectionSubjectStatus.CONNECTING]: Udp.connecting,
  [UdpConnectionSubjectStatus.CONNECTED]: Udp.fulfillConnect,
  [UdpConnectionSubjectStatus.CLOSED]: Udp.close,
}

const client = new UdpClient({
  url: `ws://${window.location.host}/server`,
})
const input = ReplaySubject.create()

export function connect(action$, store) {
  return action$.ofType(Udp.CONNECT).mergeMap(action => {
    const metadata = { token: Auth.getToken(store.getState()) }
    const { messages, status } = udpConnection(
      input,
      client,
      "__MASTER__",
      metadata,
    )

    return Observable.merge(
      status.map(state => stateHandlers[state]()),
      messages
        .map(data => Udp.receive(JSON.parse(data)))
        .takeUntil(action$.ofType(Udp.CLOSE)),
    )
  })
}

export function send(action$) {
  return action$
    .ofType(Udp.SEND)
    .do(action => input.next(JSON.stringify(action.payload)))
    .takeUntil(action$.ofType(Udp.CLOSE))
    .ignoreElements()
}

export default [connect, send]
