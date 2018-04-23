// @flow

import React from "react"
import PropTypes from "prop-types"

class Auth extends React.Component {
  constructor(props) {
    super(props)

    const token = localStorage.getItem(process.env.JWT_STORAGE_KEY)

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

  componentWillReceiveProps(nextProps) {
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
