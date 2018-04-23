import { Observable } from "rxjs/Observable"

import * as API from "../../../api"
import { Auth } from "../../modules"

const { JWT_STORAGE_KEY } = process.env

export function login(action$) {
  return action$.ofType(Auth.LOGIN).switchMap(action =>
    API.login(action.payload.username, action.payload.password)
      .map(res => Auth.fulfillLogin(res.user, res.token))
      .do(loginAction => {
        localStorage.setItem(
          JWT_STORAGE_KEY,
          loginAction.payload.token,
        )
      })
      .catch(error =>
        Observable.of(
          Auth.rejectLogin(error, action.payload.username),
        ),
      ),
  )
}

export function register(action$) {
  return action$.ofType(Auth.REGISTER).switchMap(action =>
    API.register(action.payload.username, action.payload.password)
      .map(res => Auth.fulfillRegister(res.user, res.token))
      .do(registerAction => {
        localStorage.setItem(
          JWT_STORAGE_KEY,
          registerAction.payload.token,
        )
      })
      .catch(error =>
        Observable.of(
          Auth.rejectRegister(error, action.payload.username),
        ),
      ),
  )
}

export function logout(action$) {
  return action$
    .ofType(Auth.LOGOUT)
    .do(() => localStorage.removeItem(JWT_STORAGE_KEY))
    .map(Auth.removeToken)
}

export function authenticate(action$) {
  return action$.ofType(Auth.AUTHENTICATE).switchMap(action =>
    API.authenticate(action.payload.token)
      .map(res => Auth.fulfillAuthenticate(res.user, res.token))
      .do(authenticateAction =>
        localStorage.setItem(
          JWT_STORAGE_KEY,
          authenticateAction.payload.token,
        ),
      )
      .catch(error => {
        localStorage.removeItem(JWT_STORAGE_KEY)

        return Observable.of(Auth.rejectAuthenticate(error))
      }),
  )
}

export default [login, register, logout, authenticate]
