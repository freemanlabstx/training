import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Header from './Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

it('<Header> renders props', () => {
  const wrapper = shallow(
    <Header blogAuthor="Kristian" blogTitle="Hi" />
  );

  expect(wrapper.text().includes("Kristian")).toEqual(true);
  expect(wrapper.text().includes("Hi")).toEqual(true);
});
