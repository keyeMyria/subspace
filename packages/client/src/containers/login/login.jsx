import { connect } from "react-redux"
import { compose } from "redux"
import { Async } from "@subspace/core"

import { Auth } from "../../state"

import Login from "../../components/login"

const mapStateToProps = state => ({
  hasSubmitError: Async.isRejected(state, Auth.LOGIN),
})

const mapDispatchToProps = dispatch => ({
  submit: (username, password) =>
    dispatch(Auth.login(username, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
