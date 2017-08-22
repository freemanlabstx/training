import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import MyComponent from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyComponent />, div);
});

it('has initial state set', () => {
  const wrapper = shallow(<MyComponent />);
  expect(wrapper.state('count')).toEqual(0);
  expect(wrapper.state('obj').age).toEqual(9);
  expect(wrapper.state('obj').favoriteNumbers).toEqual([4, 8, 15, 16, 23, 42]);
  expect(wrapper.state('obj').id).toEqual("MyObj");
  expect(wrapper.state('obj').updated).toEqual(false);
  expect(wrapper.state('set')).toEqual([1, 2, 3]);
});

it('clicks the increment button and updates state', () => {
  const wrapper = shallow(<MyComponent />);
  const button = wrapper.find('button.increment');
  button.simulate('click');
  expect(wrapper.state('count')).toEqual(1);
});

it('clicks updateObj button and updates state', () => {
  const wrapper = shallow(<MyComponent />);
  const oldObj = wrapper.state('obj');
  const button = wrapper.find('button.updateObj');
  button.simulate('click');

  const newObj = wrapper.state('obj');
  expect(oldObj == newObj).toEqual(false);
});

it('clicks addToSet button and updates state', () => {
  const wrapper = shallow(<MyComponent />);
  const oldSet = wrapper.state('set');
  const button = wrapper.find('button.addToSet');
  button.simulate('click');

  const newSet = wrapper.state('set');
  expect(oldSet == newSet).toEqual(false);
});
