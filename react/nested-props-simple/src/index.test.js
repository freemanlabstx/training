import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import { MyApp, ComponentOne, ComponentTwo, ComponentThree, ComponentFour } from './index';

it('finds props for ComponentOne', () => {
  const wrapper = mount(<MyApp />);
  const one = wrapper.find(ComponentOne)
  expect(one.text().includes('Hello!')).toEqual(true)
});

it('finds props for ComponentTwo', () => {
  const wrapper = mount(<MyApp />);
  const two = wrapper.find(ComponentTwo)
  expect(two.text().includes('3')).toEqual(true)
});

it('finds props for ComponentThree', () => {
  const wrapper = mount(<MyApp />);
  const three = wrapper.find(ComponentThree)
  expect(three.text().includes('3')).toEqual(true)
  expect(three.text().includes('4')).toEqual(true)
  expect(three.text().includes('5')).toEqual(true)
});

it('finds props for ComponentFour', () => {
  const wrapper = mount(<MyApp />);
  const four = wrapper.find(ComponentFour)
  expect(four.text().includes('Just an Object')).toEqual(true)
});

