import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Sidebar from './Sidebar';

const posts = [{ postTitle: "Hi" }];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sidebar posts={posts} />, div);
});

it('<Sidebar> renders props', () => {
  const wrapper = shallow(
    <Sidebar posts={posts} />
  );

  expect(wrapper.text().includes("Hi")).toEqual(true);
});
