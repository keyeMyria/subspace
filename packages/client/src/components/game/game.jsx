import React from "react"

class Game extends React.Component {
  componentWillMount() {
    if (!this.props.isConnected) {
      this.props.connect()
    }
  }

  render() {
    const { isConnected, ship, user } = this.props

    return isConnected ? (
      <dl>
        <dt>Username</dt>
        <dd>{user.username}</dd>
        <dt>Ship</dt>
        <dd>{ship ? ship.id : "N/A"}</dd>
      </dl>
    ) : (
      <div>Connecting...</div>
    )
  }
}

export default Game
