// @flow

import { connect } from "react-redux"
import { reduxForm } from "redux-form"
import { compose } from "redux"

import { register, AUTH_REGISTER } from "../../modules/auth"
import { isActionRejected } from "../../modules/async"

import Register from "../../components/Register"

const mapStateToProps = state => ({
  hasSubmitError: isActionRejected(state.async, AUTH_REGISTER),
})

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ username, password }) =>
    new Promise((resolve, reject) => {
      dispatch(register(username, password, resolve, reject))
    }),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: "register",
  }),
)(Register)
