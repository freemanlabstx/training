import React from 'react';
import ReactDOM from 'react-dom';

var PROP_TEXT_HERE;

// No changes are needed above this line.

class MyApp extends React.Component {
  render() {
    return (
      <div>
        {/*
          Replace the below span tag with
          your nested component
        */}
        <span></span>
      </div>
    )
  }
}

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        {/*
          Replace PROP_TEXT_HERE with the
          `name` prop passed in to the component.

          Remember to define a name variable, using
          the value from `this.props`.
        */}
        <span>{PROP_TEXT_HERE}</span>
      </div>
    );
  }
}

// No changes are needed below this line.

const root = document.getElementById("root");
if (root) { ReactDOM.render(<MyApp />, root); }

export { MyApp, MyComponent };
