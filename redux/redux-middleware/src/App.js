import React, { Component } from 'react';

import { connect } from 'react-redux';

import { decrement, increment } from './actions';

class App extends Component {
  render() {
    return (
      <div>
        <p>{this.props.counter}</p>
        <button onClick={this.props.increment}>
          Increment
        </button>
        <button onClick={this.props.decrement}>
          Decrement
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = {
  decrement,
  increment
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
