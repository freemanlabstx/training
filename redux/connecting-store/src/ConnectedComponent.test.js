import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { addItem } from './reducers';
import ConnectedComponent, { store } from './ConnectedComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ConnectedComponent />, div);
});

it('has initial state', () => {
  const wrapper = shallow(<ConnectedComponent />);
  expect(wrapper.state('items')).toEqual([])
})

it('can update state', () => {
  const wrapper = shallow(<ConnectedComponent />);
  expect(wrapper.state('items').length).toEqual(0)
  const button = wrapper.find('button');
  button.simulate('click');
  setTimeout(
    () => { expect(wrapper.state('items').length).toEqual(1) }
  , 1000);
})
