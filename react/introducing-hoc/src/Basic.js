import React from 'react';
import ReactDOM from 'react-dom';

// Import omitProps from the 'omitProps' module

class Basic extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.class}</h1>
        <h2>{this.props.exercise}</h2>
        <h3>{this.props.dataRetrieved && 'Data loaded!'}</h3>
      </div>
    );
  }
}

// Replace the default export by wrapping the component with omitProps,
// which takes two arguments:
//   1) The name of the component
//   2) An array of keys that correspond to the keys you want to omit from props.
//      Try omitting 'dataRetrieved'.
export default Basic;
