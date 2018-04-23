import { connect } from "react-redux"

import * as Paths from "../../routes/constants/paths"
import { Auth } from "../../state"

import ConditionalRoute from "../../components/conditional-route"

const mapStateToProps = state => ({
  condition: !Auth.isAuthenticated(state),
  redirectTo: Paths.HOME,
})

export default connect(mapStateToProps)(ConditionalRoute)
