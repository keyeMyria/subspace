// @flow

export function trimSuffix(actionType: string, suffix: string) {
  return actionType.slice(0, -suffix.length)
}
