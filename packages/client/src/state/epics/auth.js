import { of, from } from "rxjs"
import { map, tap, switchMap, catchError } from "rxjs/operators"
import { ofType } from "redux-observable"

import * as API from "../../api"
import { Auth } from "../modules"

const { JWT_STORAGE_KEY } = process.env

export default function() {
  function login(action$) {
    return action$.pipe(
      ofType(Auth.LOGIN),
      switchMap(action => {
        const { payload: { username, password } } = action
        return API.login(username, password)
      }),
      map(res => Auth.fulfillLogin(res.user, res.token)),
      tap(loginAction => {
        localStorage.setItem(
          JWT_STORAGE_KEY,
          loginAction.payload.token,
        )
      }),
      catchError(error =>
        of(Auth.rejectLogin(error, action.payload.username)),
      ),
    )
  }

  function register(action$) {
    return action$.pipe(
      ofType(Auth.REGISTER),
      switchMap(action => {
        const { payload: { username, password } } = action
        return API.register(username, password)
      }),
      map(response =>
        Auth.fulfillRegister(response.user, response.token),
      ),
      tap(registerAction => {
        localStorage.setItem(
          JWT_STORAGE_KEY,
          registerAction.payload.token,
        )
      }),
      catchError(error => of(Auth.rejectRegister(error))),
    )
  }

  function logout(action$) {
    return action$.pipe(
      ofType(Auth.LOGOUT),
      tap(() => localStorage.removeItem(JWT_STORAGE_KEY)),
      switchMap(() => from([Auth.removeToken()])),
    )
  }

  function authenticate(action$) {
    return action$.pipe(
      ofType(Auth.AUTHENTICATE),
      switchMap(action => API.authenticate(action.payload.token)),
      map(res => Auth.fulfillAuthenticate(res.user, res.token)),
      tap(action =>
        localStorage.setItem(JWT_STORAGE_KEY, action.payload.token),
      ),
      catchError(error => {
        localStorage.removeItem(JWT_STORAGE_KEY)
        return of(Auth.rejectAuthenticate(error))
      }),
    )
  }

  return [login, register, logout, authenticate]
}
