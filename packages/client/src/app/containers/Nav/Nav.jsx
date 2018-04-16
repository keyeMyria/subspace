import { connect } from "react-redux"
import { compose } from "redux"
import { withRouter } from "react-router-dom"

import { logout, isAuthenticated } from "../../modules/auth"

import Nav from "../../components/Nav"

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state.auth),
})

const mapDispatchToProps = dispatch => ({
  onLogoutClick: () => {
    dispatch(logout())
  },
})

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(Nav)
