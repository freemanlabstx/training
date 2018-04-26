import React from 'react';

import {Route} from 'react-router';

import Home from './Home';
import Inventory from './Inventory';
import Orders from './Orders';
import Packaging from './Packaging';
import QA from './QA';

const routes = [
  {
    component: Home,
    exact: true,
    path: '/',
    title: 'Home',
  },
  {
    component: Inventory,
    path: '/inventory',
    title: 'Inventory',
  },
  {
    component: Orders,
    path: '/orders',
    title: 'Orders',
  },
  {
    component: Packaging,
    path: '/packaging',
    title: 'Packaging',
  },
  {
    component: QA,
    path: '/qa',
    title: 'QA',
  },
];

// Set the default export for this file to be the variable routes.
