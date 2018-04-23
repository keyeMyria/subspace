import { connect } from "react-redux"

import { Udp } from "../../state"
import Game from "../../components/game"

const mapStateToProps = state => ({
  isConnected: Udp.isConnected(state),
})

const mapDispatchToProps = dispatch => ({
  connect: () => dispatch(Udp.connect()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
