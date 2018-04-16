// @flow

import { connect } from "react-redux"

import { Paths } from "../../constants"
import { isAuthenticated } from "../../modules/auth"

import ConditionalRoute from "../../components/ConditionalRoute"

const mapStateToProps = state => ({
  condition: isAuthenticated(state.auth),
  redirectTo: Paths.LOGIN,
})

export default connect(mapStateToProps)(ConditionalRoute)
