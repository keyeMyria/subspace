import { connect } from "react-redux"
import { compose } from "redux"
import { withRouter } from "react-router-dom"

import { Auth } from "../../state"
import Nav from "../../components/nav"

const mapStateToProps = state => ({
  isAuthenticated: Auth.isAuthenticated(state),
})

const mapDispatchToProps = dispatch => ({
  onLogoutClick: () => dispatch(Auth.logout()),
})

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(Nav)
