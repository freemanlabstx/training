import React, { Component } from 'react';

import { connect } from 'react-redux';

import { decrement, increment } from './actions';

class App extends Component {
  render() {
    // Add another p tag below the counter paragraph
    // to display the error string, if it exists.
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
  // Add the error string from state
  // into the below object: this
  // will make it available to the
  // component as this.props.error.
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
