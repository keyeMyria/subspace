// @flow

import { connect } from "react-redux"
import { reduxForm } from "redux-form"
import { compose } from "redux"

import { login, AUTH_LOGIN } from "../../modules/auth"
import { isActionRejected } from "../../modules/async"

import Login from "../../components/Login"

const mapStateToProps = state => ({
  hasSubmitError: isActionRejected(state.async, AUTH_LOGIN),
})

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ username, password }) =>
    new Promise((resolve, reject) => {
      dispatch(login(username, password, resolve, reject))
    }),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: "login",
  }),
)(Login)
