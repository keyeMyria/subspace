import { Observable, Subscribable } from "rxjs/Observable"
import { AnonymousSubscription } from "rxjs/Subscription"
import { BehaviorSubject } from "rxjs/BehaviorSubject"

export const UdpConnectionSubjectStatus = {
  CONNECTING: 0,
  CONNECTED: 1,
  CLOSED: 2,
}

export default function connect(
  input,
  client,
  route = "__MASTER__",
  metadata = {},
) {
  const status = new BehaviorSubject(
    UdpConnectionSubjectStatus.CONNECTING,
  )

  const messages = new Observable(observer => {
    const connect = client.connect(route, { metadata })

    let inputSubscription
    let open = false
    let close

    const closed = () => {
      if (!open) {
        return
      }

      status.next(UdpConnectionSubjectStatus.CLOSED)
      open = false
    }

    connect.then(connection => {
      close = connection.close
      open = true

      status.next(UdpConnectionSubjectStatus.CONNECTED)

      inputSubscription = input.subscribe(data => {
        connection.send(data)
      })

      connection.messages.subscribe(data => {
        observer.next(data)
      })

      connection.errors.subscribe(error => {
        closed()
        observer.error(error)
      })

      connection.closed.subscribe(data => {
        closed()
        observer.complete()
      })
    })

    return () => {
      if (inputSubscription) {
        inputSubscription.unsubscribe()
      }
    }
  })

  return { messages, status }
}
