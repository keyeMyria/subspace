import React from "react"
import { Link } from "react-router-dom"

import * as Paths from "../../routes/constants/paths"

const Register = props => (
  <div className="Register">
    <button onClick={() => props.submit("test", "test")}>
      Register
    </button>
    <div>
      Already have an account? <Link to={Paths.LOGIN}>Login</Link>
    </div>
  </div>
)

export default Register
