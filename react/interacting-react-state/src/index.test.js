import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import MyEnhancedButton from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyEnhancedButton />, div);
});

it('has initial state set', () => {
  const wrapper = shallow(<MyEnhancedButton />);
  expect(wrapper.state('count')).toEqual(0);
  expect(wrapper.state('oddNumber')).toEqual(false);
});

it('clicks the button to update state', () => {
  const wrapper = shallow(<MyEnhancedButton />);
  const button = wrapper.find('button');
  button.simulate('click');
  expect(wrapper.state('count')).toEqual(1);
  expect(wrapper.state('oddNumber')).toEqual(true);
});
