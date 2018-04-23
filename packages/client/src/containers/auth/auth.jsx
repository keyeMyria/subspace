// @flow

import { connect } from "react-redux"
import { compose } from "redux"
import { withRouter } from "react-router-dom"

import { Auth as AuthModule, Async } from "../../state"

import Auth from "../../components/auth"

const mapStateToProps = state => {
  return {
    pending: Async.isPending(state, AuthModule.AUTHENTICATE),
  }
}

const mapDispatchToProps = dispatch => ({
  authenticate: token => dispatch(AuthModule.authenticate(token)),
})

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(Auth)
