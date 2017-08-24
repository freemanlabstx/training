import React, { Component } from 'react';

class QA extends Component {
  render() {
    return (
      <div>
        <h2>QA</h2>
        <h4>{this.props.failed} widgets failed QA</h4>
      </div>
    );
  }
}

export default QA;
