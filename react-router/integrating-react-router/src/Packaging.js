import React, {Component} from 'react';

// Import the named function 'checkOrderForPackaging' from './actions':
//
// Remember that named functions are imported in the format
//   import { namedFunction } from './module'

// Import the named function connect from 'react-redux'

class Packaging extends Component {
  render() {
    const {warehouse: {orders, packaged}, checkOrderForPackaging} = this.props;
    return (
      <div>
        <h2>Packaging</h2>
        <h4>{packaged} orders packaged</h4>
        {orders.length ? (
          <button onClick={checkOrderForPackaging}>Package order</button>
        ) : (
          <h4>No orders to package</h4>
        )}
      </div>
    );
  }
}

// Set component to the response of the connect function, with two arguments:
//   1) a function with an argument state, that simply returns state
//   2) an object with:
//     key checkOrderForPackaging set to checkOrderForPackaging
//
// This response should itself be called as a function, with the argument Packaging
//   e.g. connect(1, 2)(3)
const component = null;
export default component;
