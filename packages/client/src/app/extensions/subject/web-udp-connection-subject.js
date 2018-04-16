import { Client as UdpClient } from "@web-udp/client"
import { Observable, Subscribable } from "rxjs/Observable"
import { AnonymousSubscription } from "rxjs/Subscription"
import { BehaviorSubject } from "rxjs/BehaviorSubject"

export interface Connection {
  status: Observable<number>;
  messages: Observable<string>;
}

export default function connect(
  input: Subscribable<string>,
  client: UdpClient,
  route?: string = "__MASTER__",
  metadata?: any,
): Connection {
  const status: BehaviorSubject<number> = new BehaviorSubject(0)

  const messages: Observable<string> = new Observable(observer => {
    const connect = client.connect(route, { metadata })
    let inputSubscription: AnonymousSubscription

    let open = false
    let close

    const closed = () => {
      if (!open) {
        return
      }

      status.next(2)
      open = false
    }

    connect.then(connection => {
      close = connection.close

      open = true

      status.next(1)

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
