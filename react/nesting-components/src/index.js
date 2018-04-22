import React from 'react';
import ReactDOM from 'react-dom';

var PROP_TEXT_HERE;

// No changes are needed above this line.

class MyApp extends React.Component {
  render() {
    // Instead of a span below, try using
    // MyComponent, as well as passing a name prop.
    return (
      <div>
        <span>Placeholder</span>
      </div>
    );
  }
}

class MyComponent extends React.Component {
  render() {
    // Replace PROP_TEXT_HERE with the
    // `name` prop passed in to the component.

    // Remember to define a name variable, using
    // the value from `this.props`.
    return (
      <div>
        <span>{PROP_TEXT_HERE}</span>
      </div>
    );
  }
}

// No changes are needed below this line.

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<MyApp />, root);
}

export {MyApp, MyComponent};
