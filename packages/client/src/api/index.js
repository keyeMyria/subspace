// @flow

import { Observable } from "rxjs/Observable"
import { map } from "rxjs/operators"
import { ajax } from "rxjs/ajax"

const Resources = {
  LOGIN: "/server/auth/login",
  REGISTER: "/server/auth/register",
  AUTHENTICATE: "/server/auth/verify",
}

const HttpMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
}

const ContentTypes = {
  APPLICATION_JSON: "application/json",
}

const ResponseTypes = {
  JSON: "json",
}

const HttpHeaders = {
  ACCEPT: "Accept",
  CONTENT_TYPE: "Content-Type",
  AUTHORIZATION: "Authorization",
}

const headers = {
  [HttpHeaders.ACCEPT]: ContentTypes.APPLICATION_JSON,
  [HttpHeaders.CONTENT_TYPE]: ContentTypes.APPLICATION_JSON,
}

export function login(username: string, password: string) {
  return ajax({
    url: Resources.LOGIN,
    method: HttpMethods.POST,
    responseType: ResponseTypes.JSON,
    headers,
    body: {
      username,
      password,
    },
  }).pipe(map(ajaxResponse => ajaxResponse.response))
}

export function register(username: string, password: string) {
  return ajax({
    url: Resources.REGISTER,
    method: HttpMethods.POST,
    responseType: ResponseTypes.JSON,
    headers,
    body: {
      username,
      password,
    },
  }).pipe(map(ajaxResponse => ajaxResponse.response))
}

export function authenticate(token: string) {
  return ajax({
    url: Resources.AUTHENTICATE,
    method: HttpMethods.POST,
    responseType: ResponseTypes.JSON,
    headers: {
      ...headers,
      [HttpHeaders.AUTHORIZATION]: `Bearer ${token}`,
    },
  }).pipe(map(ajaxResponse => ajaxResponse.response))
}
