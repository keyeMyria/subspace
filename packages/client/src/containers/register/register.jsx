import { connect } from "react-redux"
import { compose } from "redux"

import { Auth, Async } from "../../state"

import Register from "../../components/register"

const mapStateToProps = state => ({
  hasSubmitError: Async.isRejected(state, Auth.REGISTER),
})

const mapDispatchToProps = dispatch => ({
  submit: (username, password) =>
    dispatch(Auth.register(username, password)),
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  Register,
)
