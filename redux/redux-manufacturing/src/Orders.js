import React, { Component } from 'react';

class Orders extends Component {
  render() {
    const { generateOrder, orders } = this.props
    return (
      <div>
        <h2>Orders</h2>
        <h3>{orders.length} orders</h3>
        <ul>
          {orders.map(order => <li key={order.created}>Order for {order.widgets} widgets</li>)}
        </ul>
        <button onClick={generateOrder}>Generate order</button>
      </div>
    )
  }
}

export default Orders;
