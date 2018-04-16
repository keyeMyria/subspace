// @flow

import React from "react"
import PropTypes from "prop-types"

type Props = {
  isConnected: boolean,
  connect: Function,
}

class Game extends React.Component<Props> {
  static propTypes = {}

  componentWillMount() {
    if (!this.props.isConnected) {
      this.props.connect()
    }
  }

  render() {
    return this.props.isConnected ? (
      <div>Connected</div>
    ) : (
      <div>Connecting...</div>
    )
  }
}

export default Game
