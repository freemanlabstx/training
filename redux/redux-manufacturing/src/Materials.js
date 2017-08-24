import React, { Component } from 'react';

class Materials extends Component {
  render() {
    const { materials } = this.props
    const { dowel, screw, wheel } = materials
    return (
      <div>
        <h2>Raw Materials</h2>
        <ul>
          <li>Dowel: {dowel.count}</li>
          <li>Screw: {screw.count}</li>
          <li>Wheel: {wheel.count}</li>
        </ul>
      </div>
    );
  }
}

export default Materials;
