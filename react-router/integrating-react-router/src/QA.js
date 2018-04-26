import React, {Component} from 'react';
import {connect} from 'react-redux';

class QA extends Component {
  render() {
    // Set the variable failed to this.props.warehouse.failed.

    return (
      <div>
        <h2>QA</h2>
        <h4>{failed} widgets failed QA</h4>
      </div>
    );
  }
}

export default connect(state => state)(QA);
