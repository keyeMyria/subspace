// @flow

import { connect } from "react-redux"

import { udpConnect, isConnected } from "../../modules/udp"

import Game from "../../components/Game"

const mapStateToProps = state => ({
  isConnected: isConnected(state.udp),
})

const mapDispatchToProps = dispatch => ({
  connect: () => dispatch(udpConnect()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
