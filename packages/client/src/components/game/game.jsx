import React from "react"

class Game extends React.Component {
  componentWillMount() {
    if (!this.props.isConnected) {
      this.props.connect()
    }
    this.props.start()
  }

  render() {
    const { isConnected, ship, user, body, frame } = this.props

    return isConnected ? (
      <dl>
        <dt>Frame</dt>
        <dd>{frame}</dd>
        <dt>Username</dt>
        <dd>{user.username}</dd>
        <dt>Ship</dt>
        <dd>
          {ship && (
            <dl>
              <dt>Id</dt>
              <dd>{ship.id}</dd>
              <dt>Position</dt>
              <dd>{body && body.position}</dd>
              <dt>Angle</dt>
              <dd>{body && body.angle}</dd>
            </dl>
          )}
        </dd>
      </dl>
    ) : (
      <div>Connecting...</div>
    )
  }
}

export default Game
