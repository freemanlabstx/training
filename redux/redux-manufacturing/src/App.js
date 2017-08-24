import React, { Component } from 'react';
import "./index.css"
import "./normalize.css"

import Inventory from './Inventory'
import Materials from './Materials'
import Management from './Management'
import Manufacturing from './Manufacturing'
import Orders from './Orders'
import Packaging from './Packaging'

const Header = () => <img className="logo" src="/logo.png" />

class App extends Component {
  constructor() {
    super()

    this.state = {
      orders: [],
      materials: {
        dowel: { count: 2 },
        screw: { count: 8 },
        wheel: { count: 3 }
      },
      packaged: 0,
      widgets: []
    }

    this.addWidget = this.addWidget.bind(this)
    this.generateOrder = this.generateOrder.bind(this)
    this.orderMaterials = this.orderMaterials.bind(this)
    this.packageOrder = this.packageOrder.bind(this)
  }

  // The addWidget function removes widgets from materials
  // and creates a new widget in state.
  addWidget() {
    const newMaterials = Object.assign({}, this.state.materials)
    newMaterials.dowel.count -= 1
    newMaterials.screw.count -= 2
    newMaterials.wheel.count -= 2

    // create a newWidget object, with the key created set to Date.now()
    //
    // Create a newWidgetsInventory array, which is an empty array
    // with this.state.widgets and newWidget concatted onto it.

    // Update state with materials set to newMaterials,
    // and widgets set to newWidgets.
  }

  // generateOrder creates a new order with a random
  // number of widgets needed to fulfill that order
  generateOrder() {
    const newOrder = {
      created: Date.now(),
      widgets: Math.floor(Math.random() * 10) + 1
    }

    // Create the newOrders variable, which is an empty array
    // with this.state.orders and newOrder concatted onto it.

    // Update the orders array in state to newOrders.
  }

  // orderMaterials adds 10 of each material to state
  orderMaterials() {
    const { materials } = this.state
    const { dowel, screw, wheel } = materials

    this.setState(Object.assign({}, this.state, {
      materials: {
        dowel: { count: dowel.count + 10 },
        screw: { count: screw.count + 10 },
        wheel: { count: wheel.count + 10 }
      }
    }))
  }

  // packageOrder removes the top order from state and,
  // given that we have enough widgets to satisfy
  // the amount requested in the order, adds 1 to "packaged"
  // (as well as removes the top order from state, and
  // subtracting the used widgets).
  packageOrder() {
    const { orders, packaged, widgets } = this.state
    const newOrders = [].concat(orders)

    // Get the top order from the array newOrders by
    // calling .shift(). Assign it to the variable order.

    // We should ensure that we have enough widgets to package
    // this order. Check `if (order.widgets <= widgets.length)`...
      // If it's true...
      // Set state:
      //   - orders should be newOrders
      //   - packaged should be incremented
      //   - widgets should be (widgets - order.widgets)
  }

  render() {
    const { error, materials, orders, packaged, widgets } = this.state
    return (
      <div>
        <Header />
        <Orders generateOrder={this.generateOrder} orders={orders} />
        <Materials materials={materials} />
        <Manufacturing
          addWidget={this.addWidget}
          materials={materials}
        />
        <Inventory widgets={widgets} />
        <Packaging orders={orders} packaged={packaged} packageOrder={this.packageOrder} />
        <Management orderMaterials={this.orderMaterials} />
      </div>
    );
  }
}

export default App;
