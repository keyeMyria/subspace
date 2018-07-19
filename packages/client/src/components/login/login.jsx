import React from "react"
import { Link } from "react-router-dom"

import * as Paths from "../../routes/constants/paths"

const InnerForm = props => (
  <form className="Register">
    <input
      type="email"
      name="email"
      value={props.email}
      onChange={props.handleChange}
      autoComplete="email"
    />
    <input
      type="password"
      name="password"
      value={props.password}
      onChange={props.handleChange}
      autoComplete="current-password"
    />
    <button onClick={props.submit}>Login</button>
  </form>
)

class Register extends React.Component {
  state = {
    email: "",
    password: "",
    errors: {},
  }

  handleSubmit = e => {
    e.preventDefault()

    const errors = {}
    const { email, password } = this.state

    if (!this.state.email) {
      errors.email = "Required"
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        this.state.email,
      )
    ) {
      errors.email = "Invalid email address"
    }

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors,
      })
      return
    }

    this.setState({
      errors: {},
    })

    this.props.submit(email, password)
  }

  handleInputChange = e => {
    const { name, value } = e.target

    switch (name) {
      case "email":
        this.setState({ email: value })
        break
      case "password":
        this.setState({ password: value })
        break
      default:
        break
    }
  }

  render() {
    const errors = Object.entries(this.state.errors).map(
      ([field, message]) => (
        <React.Fragment key={field}>
          <dt>{field}</dt>
          <dd>{message}</dd>
        </React.Fragment>
      ),
    )
    return (
      <div>
        <InnerForm
          {...this.state}
          submit={this.handleSubmit}
          handleChange={this.handleInputChange}
        />
        {errors.length ? <dl>{errors}</dl> : null}
      </div>
    )
  }
}

export default Register
