import React from "react"

class Game extends React.Component {
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
