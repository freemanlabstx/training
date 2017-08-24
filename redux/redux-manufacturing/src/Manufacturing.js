import React, { Component } from 'react';

class Manufacturing extends Component {
  constructor() {
    super()
    this.manufactureWidget = this.manufactureWidget.bind(this)
  }

  manufactureWidget() {
    const { addWidget, materials } = this.props
    if (materials.dowel.count >= 1 && materials.screw.count >= 2 && materials.wheel.count >= 2) {
      addWidget()
    }
  }

  render() {
    return (
      <div>
        <h2>Manufacturing</h2>
        <button onClick={this.manufactureWidget}>Manufacture widget</button>
      </div>
    );
  }
}

export default Manufacturing;
