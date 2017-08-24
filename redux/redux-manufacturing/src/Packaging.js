import React, { Component } from 'react';

class Packaging extends Component {
  render() {
    const { orders, packageOrder, packaged } = this.props
    return (
      <div>
        <h2>Packaging</h2>
        <h4>{packaged} orders packaged</h4>
        {orders.length ? <button onClick={packageOrder}>Package order</button> : <h4>No orders to package</h4>}
      </div>
    );
  }
}

export default Packaging;
