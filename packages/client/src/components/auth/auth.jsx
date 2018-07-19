// @flow

import * as React from "react"

import { JwtConfig } from "../../cfg"

type Props = {
  authenticate: Function,
  pending: boolean,
  children: React.Node[],
}

type State = {
  token: string | null | typeof undefined,
}

class Auth extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      token: localStorage.getItem(JwtConfig.storageKey),
    }
  }

  componentDidMount() {
    const { token } = this.state
    const { authenticate } = this.props

    if (token) {
      authenticate(token)
    }
  }

  render() {
    const { children } = this.props

    return children
  }
}

export default Auth
