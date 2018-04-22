import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Import the named class Provider from 'react-redux'

import {createStore} from 'redux';
import reducer from './reducer';

// Define a store variable that is the result of calling the createStore
// function with a single argument, reducer.

// We're currently rendering <App />. With 'react-redux',
// we want to "wrap" that component inside the Provider component,
// which takes a single prop, store.
//
// Instead of directly rendering <App />, make <App /> the child element
// of a <Provider /> component, and render that using ReactDOM.render.

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
