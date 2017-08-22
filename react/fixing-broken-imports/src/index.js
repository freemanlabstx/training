import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Let's add immutable.js to our project by running
// `yarn add immutable` in the command-line.
// The `Map` class from Immutable is defined as a named
// export in the package 'immutable' -- try importing
// it below.

// The local module `parser.js` has a `parser` function
// that we call below, in the render function. Go to
// `parser.js` and fix the module export definition
// so that it can be imported in the below line.

// This component should be exported. If we want
// to import it in other files as `import MyComponent`,
// how should the export function be declared?
// Note that you can add export to the beginning of the line
// below, or you can specify a separate export line after the
// class definition.
class MyComponent extends React.Component {
  render() {
    const simpleMap = Map({ key: "value" });
    return (
      <div>
        {parser(simpleMap.get("key"))}
      </div>
    )
  }
}

const root = document.getElementById('root');
if (root) { ReactDOM.render(<App />, root); }

registerServiceWorker();
