import React from 'react';
import ReactDOM from 'react-dom';
import Networked from './Networked'

// No changes are needed above this line.

// In a larger application, if a single component fails,
// it would be ideal to have the rest of the application
// not fall apart as well. By default, React's architecture
// doesn't easily handle graceful component failures.
//
// Wrap Networked in a div, and add a couple more components
// around it:
//   1) A h1 with the text "My application"
//   2) Add a few elements of your choice. You could add some inputs
//      (it's ok to leave them uncontrolled for this exercise) or
//      something else of your choice. Add two or three more elements
//      before proceeding.

class Application extends React.Component {
  render() {
    return <Networked />
  }
}

// Let's go look at Networked.js, and simulate a failure.

// Once you've thrown an error in the fetch code of Networked,
// we need to properly define an "error boundary" and handle the error.
//
// Define a new component, ErrorBoundary.
// ErrorBoundary should have state, with a hasError key defaulting to false.
//
// In order to define an error boundary, we need to implement two things:
//   1) A `componentDidCatch` function -- this is new React 16.3 functionality.
//      The function takes two arguments, error, and info.
//      Inside of the function, use this.setState to set hasError to true.
//   2) Also define a render function, which does the following:
//      - If this.state.hasError, return an 'h1' with the text 'Something went wrong!'
//      - Otherwise, return this.props.children.
//
// This ErrorBoundary component can be placed at any level of your application.
// It is, as the same says, a "boundary" to catch any errors from its children,
// and stop it from propagating up through the application.
//
// Let's wrap Networked inside of ErrorBoundary, making it a child of the new component.
// Now, when a failure occurs, we should expect the rest of the application to continue
// working, after safely wrapping a "brittle" or potentially error-raising component
// inside the ErrorBoundary.

var root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Application />, root);
}
