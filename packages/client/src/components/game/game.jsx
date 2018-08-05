// @flow

import React from "react"
import * as Graphics from "../../graphics"
import type { Body } from "@subspace/core"

type Props = {
  isConnected: boolean,
  connect: Function,
  start: Function,
  bodies: { [string]: Body },
}
type State = {}

class Game extends React.Component<Props, State> {
  constructor() {
    super()
    this.graphics = Graphics.make()
  }

  graphics: Graphics.Interface
  myRef = React.createRef()
  mounted = false

  componentWillMount() {
    if (!this.props.isConnected) {
      this.props.connect()
    }
    this.props.start()
  }

  componentWillReceiveProps(nextProps: Props) {
    if (
      nextProps.isConnected &&
      this.myRef.current &&
      !this.mounted
    ) {
      this.graphics.mount(this.myRef.current)
      this.mounted = true
    }

    if (nextProps.bodies !== this.props.bodies) {
      this.graphics.render(nextProps.bodies)
    }
  }

  shouldComponentUpdate() {
    if (this.props.isConnected) {
      return false
    }
    return true
  }

  render() {
    const { isConnected } = this.props

    return (
      <div>
        {!isConnected && <p>Connecting...</p>}
        <div ref={this.myRef} />
      </div>
    )
  }
}

export default Game
