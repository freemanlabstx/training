import React, {Component} from 'react';
import './index.css';
import './normalize.css';

import Header from './Header';

// Add the children prop underneath Header
const App = ({children}) => (
  <div>
    <Header />
  </div>
);

// Set the default export for this file to be the App component.
