import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
} from 'react-router-redux';
import {Link} from 'react-router-dom';
import {Route} from 'react-router';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import reducer from './reducer';
import routes from './routes';

const history = createHistory();

const linkList = (
  <ul>
    {routes.map(route => (
      <li key={route.path}>
        <Link to={route.path}>{route.title}</Link>
      </li>
    ))}
  </ul>
);

const routeList = routes.map(route => (
  <Route
    exact={route.exact || false}
    path={route.path}
    component={route.component}
  />
));

// Set the variable store as the result of the function createStore, with two arguments:
//   1) the response of the combineReducers function, with a hash passed in as the argument:
//        - set the key router to routerReducer
//        - set the key warehouse to reducer
//   2) the response of the applyMiddleware function, with the arguments:
//        - the response of the routerMiddleware function, with history passed as an argument
//        - reduxLogger
//        - thunk
const store = null;

// First, we need to set up our application and wrap it in the
// correct Redux/React Router components. Define the app variable as:
//
// A Provider component with the prop "store" passed in (with the value of the variable store)
//   A child ConnectedRouter component with the prop "history" passed in (with the value of the variable history)
//     A child <App> component
//       With child linkList and routeList variables
const app = null;

ReactDOM.render(app, document.getElementById('root'));
