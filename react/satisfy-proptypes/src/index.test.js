import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import { MyApp, MyComponent } from './index';

it('renders', () => {
  const wrapper = mount(<MyApp />);
  const nested = wrapper.find(MyComponent)
  const props = nested.props()

  expect(props.helloText).not.toBeUndefined();
  expect(props.me).not.toBeUndefined();
  expect(props.me.firstName).not.toBeUndefined();
  expect(props.me.lastName).not.toBeUndefined();
  expect(props.textColor).not.toBeUndefined();

  if (props.myFunc) {
    expect(typeof props.myFunc).toEqual('function');
  }
});

