import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import MyComponent from './index';

test('it renders the set', () => {
  const component = renderer.create(
    <MyComponent />
  )
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
