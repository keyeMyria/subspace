// @flow

import { connect } from "react-redux"
import { compose } from "redux"
import { withRouter } from "react-router-dom"

import { authenticate, AUTH_AUTHENTICATE } from "../../modules/auth"
import { isActionPending } from "../../modules/async"

import Auth from "../../components/Auth"

const mapStateToProps = state => ({
  pending: isActionPending(state.async, AUTH_AUTHENTICATE),
})

const mapDispatchToProps = dispatch => ({
  authenticate: token => dispatch(authenticate(token)),
})

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(Auth)
