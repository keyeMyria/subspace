import React from "react"

class Counter extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => this.props.increment(), 2000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className="Counter">
        <h3>We is:</h3>
        <span>{this.props.count}</span>
      </div>
    )
  }
}

export default Counter
