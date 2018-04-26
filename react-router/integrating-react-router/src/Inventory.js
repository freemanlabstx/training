import React, {Component} from 'react';

// Import two named functions from './actions':
//   - attemptWidgetCreation
//   - orderMaterials
//
// Remember that named functions are imported in the format
//   import { namedFunction } from './module'

// Import the named function connect from 'react-redux'

class Inventory extends Component {
  render() {
    const {
      attemptWidgetCreation,
      orderMaterials,
      warehouse: {materials: {dowel, screw, wheel}, widgets},
    } = this.props;

    return (
      <div>
        <h2>Inventory</h2>
        <h4>{widgets.length} widgets in inventory</h4>
        <button onClick={attemptWidgetCreation}>Manufacture widget</button>

        <h2>Materials</h2>
        <ul>
          <li>Dowel: {dowel.count}</li>
          <li>Screw: {screw.count}</li>
          <li>Wheel: {wheel.count}</li>
        </ul>
        <button onClick={orderMaterials}>Order raw materials</button>
      </div>
    );
  }
}

// Set component to the response of the connect function, with two arguments:
//   1) a function with an argument state, that simply returns state
//   2) an object with:
//     key attemptWidgetCreation set to attemptWidgetCreation
//     key orderMaterials set to orderMaterials
//
// This response should itself be called as a function, with the argument Inventory
//   e.g. connect(1, 2)(3)
const component = null;

export default component;
