import React, { Component } from 'react';

class Management extends Component {
  render() {
    return (
      <div>
        <h2>Management</h2>
        <button onClick={this.props.orderMaterials}>Order raw materials</button>
      </div>
    );
  }
}

export default Management;
