// @flow

import type { State, Dispatch } from "../../types"

import { Physics, Loop } from "@subspace/core"
import { connect } from "react-redux"

import { Udp } from "../../state"
import Game from "../../components/game"
import { Game as GameConfig } from "../../cfg"

const mapStateToProps = (state: State) => ({
  isConnected: Udp.isConnected(state),
  bodies: Physics.getBodies(state),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  start: () => dispatch(Loop.start(GameConfig.serverTickRate)),
  connect: () => dispatch(Udp.connect()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
