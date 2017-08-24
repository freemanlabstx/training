import React, { Component } from 'react';

class Inventory extends Component {
  render() {
    return (
      <div>
        <h2>Inventory</h2>
        <h4>{this.props.widgets.length} widgets in inventory</h4>
      </div>
    );
  }
}

export default Inventory;
