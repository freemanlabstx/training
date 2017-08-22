import React from 'react';
import ReactDOM from 'react-dom';

import MyComponent from './index';
import { Map } from 'immutable';
import parser from './parser';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyComponent />, div);
});

it('can find immutable map', () => {
  expect(Map({ key: 'value' }).get('key')).toEqual('value');
});

it('can find the parser function', () => {
  expect(parser('value')).toEqual("Hello, world!");
});
