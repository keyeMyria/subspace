// @flow

import * as React from "react"

import { JwtConfig } from "../../cfg"

type Props = {
  authenticate: Function,
  pending: boolean,
  children: React.Node[],
}

type State = {
  initialized: boolean,
  token: string | null | typeof undefined,
}

class Auth extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    const token = localStorage.getItem(JwtConfig.storageKey)

    this.state = {
      initialized: !token,
      token,
    }
  }

  componentDidMount() {
    const { initialized, token } = this.state
    const { authenticate } = this.props

    if (!initialized) {
      authenticate(token)
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    const { initialized } = this.state
    const { pending } = this.props

    if (!initialized && pending && !nextProps.pending) {
      this.setState({
        initialized: true,
      })
    }
  }

  render() {
    const { initialized } = this.state
    const { children } = this.props

    if (!initialized) {
      return null
    }

    return children
  }
}

export default Auth
