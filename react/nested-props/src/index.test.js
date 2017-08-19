import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import { MyApp, MyComponent } from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyApp />, div);
  ReactDOM.render(<MyComponent />, div);
});

it('<MyApp /> contains <MyComponent />', () => {
  const wrapper = mount(<MyApp />);
  expect(wrapper.find(MyComponent).length).toEqual(1)
});

it('<MyApp /> contains <MyComponent />, which has a name prop', () => {
  const wrapper = mount(<MyApp />);
  const nested = wrapper.find(MyComponent);
  const nameProp = nested.prop('name');
  expect(nameProp).not.toBeUndefined();
  expect(typeof nameProp).toEqual('string');
});
