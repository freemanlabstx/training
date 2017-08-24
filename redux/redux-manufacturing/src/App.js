import React, { Component } from 'react';
import './index.css'
import { connect } from 'react-redux';

import {
} from './actions';

class App extends Component {
  render() {
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

