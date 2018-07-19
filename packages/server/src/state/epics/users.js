// @flow

import type { Observable } from "rxjs"

import { Loop, Physics } from "@subspace/core"
import { ofType } from "redux-observable"
// $FlowFixMe
import { from, empty } from "rxjs"
import {
  throttleTime,
  map,
  switchMap,
  withLatestFrom,
  tap,
  ignoreElements,
} from "rxjs/operators"

import type { Action, State } from "../../types"
import type { Db } from "../../data"

import { SpatialIndex, Ships, Users } from "../modules"

function values<T>(obj: { [string]: T }): Array<T> {
  return Object.keys(obj).map(k => obj[k])
}

function getUserInit(state: State) {
  const ships = values(Ships.getShips(state))
  const users = values(Users.getUsers(state))
  const bodies = values(Physics.getBodies(state))

  return [
    ...ships.map(Ships.addShip),
    ...users.map(Users.addUser),
    ...bodies.map(Physics.addBody),
  ]
}

function getSnapshots(state: State) {
  const adjacentBodiesByUserId = SpatialIndex.getAdjacentBodies(state)
  const bodies = Physics.getBodies(state)
  const frame = Loop.getFrame(state)
  const actions = []

  for (let userId in adjacentBodiesByUserId) {
    const adjacentBodyIds = adjacentBodiesByUserId[userId]
    const adjacentBodies = {}
    for (let i = 0; i < adjacentBodyIds.length; i++) {
      const bodyId = adjacentBodyIds[i]
      adjacentBodies[bodyId] = bodies[bodyId]
    }
    actions.push(
      Users.send(
        userId,
        Physics.applySnapshot(frame, adjacentBodies),
      ),
    )
  }

  return actions
}

export default function(db: Db, sendRate: number) {
  // Persist users to database
  function persistUsers(action$: Observable<Action>) {
    return action$.pipe(
      ofType(Users.ADD, Users.UPDATE),
      tap(async action => {
        const { user } = action.payload
        const model = await db.User.findById(user.id)

        if (!model) {
          await db.User.create(user)
        } else {
          await model.update(user)
        }
      }),
      ignoreElements(),
    )
  }

  // Send new and updated users to clients
  function sendUserUpdates(
    action$: Observable<Action>,
    state$: Observable<State>,
  ) {
    return action$.pipe(
      ofType(Users.ADD, Users.UPDATE, Users.REMOVE),
      withLatestFrom(state$),
      switchMap(([action, state]) => {
        const actions = Users.getUserIds(state).map(userId =>
          Users.send(userId, action),
        )

        return from(actions)
      }),
    )
  }

  // Send snapshots of the game world to each user at the send rate
  function sendSnapshots(
    action$: Observable<Action>,
    state$: Observable<State>,
  ) {
    return action$.pipe(
      ofType(Loop.TICK),
      throttleTime(sendRate * 1000),
      withLatestFrom(state$),
      switchMap(([, state]) => from(getSnapshots(state))),
    )
  }

  // Initialize user with current game state
  function initUser(
    action$: Observable<Action>,
    state$: Observable<State>,
  ) {
    return action$.pipe(
      ofType(Users.ADD),
      withLatestFrom(state$),
      map(([action, state]) =>
        Users.send(action.payload.user.id, ...getUserInit(state)),
      ),
    )
  }

  // Create a ship for new users
  function loadUserShips(action$: Observable<Action>) {
    return action$.pipe(
      ofType(Users.ADD),
      switchMap(async action => {
        const { user: { id, activeShipId } } = action.payload

        if (activeShipId) {
          const shipModel = await db.Ship.findById(activeShipId)

          if (shipModel) {
            return Ships.addShip(shipModel.toJSON())
          }
        }

        return Users.makeUserShip(id, {
          shipTypeId: "0",
          thrust: [0, 0],
        })
      }),
    )
  }

  function makeUserShip(action$: Observable<Action>) {
    return action$.pipe(
      ofType(Users.MAKE_USER_SHIP),
      switchMap(async action => {
        const { userId, ship: spec } = action.payload
        const userModel = await db.User.findById(userId)

        if (!userModel) {
          return empty()
        }

        const shipModel = await db.Ship.create(spec)
        const ship = shipModel.toJSON()

        await userModel.update({
          activeShipId: ship.id,
        })

        const user = userModel.toJSON()

        return [Ships.addShip(ship), Users.updateUser(user)]
      }),
      switchMap(actions => from(actions)),
    )
  }

  function unloadUsers(action$: Observable<Action>) {
    return action$.pipe(
      ofType(Users.REMOVE),
      switchMap(async action => {
        const { userId } = action.payload
        const model = await db.User.findById(userId)

        if (!model) {
          return empty()
        }

        const { activeShipId } = model.toJSON()

        if (activeShipId) {
          return Ships.removeShip(activeShipId)
        }

        return empty()
      }),
    )
  }

  return [
    initUser,
    persistUsers,
    loadUserShips,
    sendSnapshots,
    sendUserUpdates,
    makeUserShip,
    unloadUsers,
  ]
}
