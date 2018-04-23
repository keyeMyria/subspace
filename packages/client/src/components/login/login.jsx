import React from "react"

export default function Login(props) {
  return (
    <div className="Login">
      <button onClick={() => props.submit("test", "test")}>
        Login
      </button>
      <p>{props.hasSubmitError ? "Error" : null}</p>
    </div>
  )
}
