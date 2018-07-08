// @flow

import type { State, Dispatch } from "../../types"

import { getUserShip } from "@subspace/core"
import { connect } from "react-redux"

import { Auth, Udp } from "../../state"
import Game from "../../components/game"

const mapStateToProps = (state: State) => ({
  isConnected: Udp.isConnected(state),
  user: Auth.getUser(state),
  ship: getUserShip(state, Auth.getUser(state).id),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  connect: () => dispatch(Udp.connect()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
