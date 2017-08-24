import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';

import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(reduxLogger));

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
