import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";

// Import the applyMiddleware function
// from 'redux', along with createStore.

import reducer from "./reducer";

// Define a function called logger, which will log a dispatched
// action as it moves through the system.
//
// A middleware function is defined as a function that
// returns a function, that returns a function....
// There's a lot of functions going on, but the syntax
// ends up looking like this:
//
//   const myMiddleware = store => next => action => {
//   }
//
// Here, you can log any information regarding your actions
// or your application state. For your custom middleware,
// first try console.log with action. After that, you can use
// the `next` function with a single argument, action: this will
// actually dispatch the action. Set this to the variable result.
//
// Since we've dispatched an action, we can console.log the new
// version of state using store.getState(). Finally, we need
// to pass the new state along, so we'll just return result from
// this function.

// createStore can take a second argument, which is
// a collection of middleware to pass into the store.
// Use the applyMiddleware function, with the argument
// logger, as the second argument in the createStore function.
// This will add our custom logger as middleware to the Redux store.
const store = createStore(reducer);

// Once you've successfully used your logger as middleware,
// try importing redux-logger (`yarn add redux-logger`) and
// replacing your middleware with it.
// Searching for the project on GitHub might provide installation
// instructions if you're stuck.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
