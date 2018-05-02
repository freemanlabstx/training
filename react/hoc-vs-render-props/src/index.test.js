import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import MyFirstComponent from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyFirstComponent />, div);
});

it('has initial state set', () => {
  const wrapper = shallow(<MyFirstComponent />);
  expect(wrapper.state('hello')).toEqual('world');
});

it('displays the text variable in the <span>', () => {
  const wrapper = shallow(<MyFirstComponent />);
  expect(wrapper.contains('Hello!')).toEqual(true);
});

it('clicks the button and updates state', () => {
  const wrapper = shallow(<MyFirstComponent />);
  const button = wrapper.find('button')
  expect(button.length).toEqual(1);
  button.simulate('click');
  expect(wrapper.state('ping')).toEqual('pong');
});
