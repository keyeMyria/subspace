// @flow

import type { Connection } from "@web-udp/client"

import { Observable, BehaviorSubject } from "rxjs"

export const OPEN = 0
export const CLOSED = 1

export function make(input: Observable<any>, connection: Connection) {
  const status = new BehaviorSubject(OPEN)

  // $FlowFixMe
  const messages = new Observable(observer => {
    const inputSubscription = input.subscribe(data =>
      connection.send(data),
    )
    const closed = () => {
      if (!open) {
        return
      }

      status.next(CLOSED)
      open = false
    }
    let open = true

    connection.messages.subscribe(data => observer.next(data))

    connection.errors.subscribe(error => {
      closed()
      observer.error(error)
    })

    connection.closed.subscribe(() => {
      closed()
      observer.complete()
    })

    return () => {
      if (inputSubscription) {
        inputSubscription.unsubscribe()
      }
    }
  })

  return { messages, status }
}
