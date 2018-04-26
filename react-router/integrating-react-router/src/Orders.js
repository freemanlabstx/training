import React, {Component} from 'react';

// Import the named function 'generateOrder' from './actions':
//
// Remember that named functions are imported in the format
//   import { namedFunction } from './module'

// Import the named function connect from 'react-redux'

class Orders extends Component {
  render() {
    const {generateOrder, warehouse: {orders}} = this.props;

    return (
      <div>
        <h2>Orders</h2>
        <h3>{orders.length} orders</h3>
        <ul>
          {orders.map(order => (
            <li key={order.created}>Order for {order.widgets} widgets</li>
          ))}
        </ul>
        <button onClick={generateOrder}>Generate order</button>
      </div>
    );
  }
}

// Set component to the response of the connect function, with two arguments:
//   1) a function with an argument state, that simply returns state
//   2) an object with:
//     key generateOrder set to generateOrder
//
// This response should itself be called as a function, with the argument Orders
//   e.g. connect(1, 2)(3)
const component = null;
export default component;
