import React from 'react';
import ReactDOM from 'react-dom';

// Import the lodash package as '_'.

class PropsOmitted extends React.Component {
  render() {
    // The PropsOmitted component should call the render function inside of props:
    //   1) Use _.omit, with the arguments this.props and this.props.omitted,
    //      to create a prop variable that contains all the props for this component
    //      MINUS those we've specified should be omitted.
    //   2) Pass this variable as the argument to the render prop.
    return null;
  }
}

// Export PropsOmitted as the default export for this module.
