import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";

// Import the applyMiddleware function
// from 'redux', along with createStore.

// Import thunk from 'redux-thunk' -- it is
// the default export for that library.

import reducer from "./reducer";

// createStore can take a second argument, which is
// a collection of middleware to pass into the store.
// Use the applyMiddleware function, with the argument
// thunk, as the second argument in the createStore function.
// This will add redux-thunk as middleware to the Redux store.
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
