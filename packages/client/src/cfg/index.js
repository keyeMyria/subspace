// @flow

const { JWT_STORAGE_KEY } = process.env

export const JwtConfig = {
  storageKey: String(JWT_STORAGE_KEY),
}

export const Game = {
  serverTickRate: 15,
}
