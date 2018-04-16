// @flow

const passport = require("passport")

export const auth = passport.authenticate("jwt", { session: false })
export const login = passport.authenticate("local", {
  session: false,
})
