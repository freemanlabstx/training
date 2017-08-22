import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('checks header classes', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.header').length).to.equal(1);
  expect(wrapper.find('.text-red').length).to.equal(1);
});

it('checks p style', () => {
  const wrapper = shallow(<App />);
  const p = wrapper.find('p');
  expect(p).to.have.style('font-family', 'sans-serif');
  expect(p).to.have.style('font-weight', 'bold');
  expect(p).to.have.style('line-height', '1.5');
  expect(p).to.have.style('color', 'red');
});

it('checks div classes', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.text-red').length).to.equal(1);
  expect(wrapper.find('.largePadding').length).to.equal(1);
});
