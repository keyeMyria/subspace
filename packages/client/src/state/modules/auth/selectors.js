export function getUser(state) {
  return state.user
}

export function getToken(state) {
  return state.token
}

export function isAuthenticated(state) {
  return getUser(state) && getToken(state)
}
