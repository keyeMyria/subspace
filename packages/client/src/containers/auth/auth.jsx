// @flow

import { connect } from "react-redux"
import { compose } from "redux"
import { withRouter } from "react-router-dom"

import { Async } from "@subspace/core"
import { Auth as AuthModule } from "../../state"
import type { Dispatch } from "../../types"

import Auth from "../../components/auth"

const mapStateToProps = state => {
  return {
    pending: Async.isPending(state, AuthModule.AUTHENTICATE),
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  authenticate: token => dispatch(AuthModule.authenticate(token)),
})

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(Auth)
