import React from "react"
import Game from "../../containers/game"
import Counter from "../../containers/counter"

function Home() {
  return (
    <React.Fragment>
      <p>Welcome home</p>
      <Counter />
      <Game />
    </React.Fragment>
  )
}

export default Home
