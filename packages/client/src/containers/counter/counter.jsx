import { connect } from "react-redux"
import Counter from "../../components/counter"
import { Counter as CounterModule } from "../../state"

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(CounterModule.increment()),
  }
}

function mapStateToProps(state) {
  return {
    count: CounterModule.getCount(state),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
