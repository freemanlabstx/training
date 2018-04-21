import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Comment from './Comment';

const comment = { commentAuthor: "Kristian", commentBody: "Hi", postDate: new Date().toString() }

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Comment comment={comment} />, div);
});

it('<Comment> renders props', () => {

  const wrapper = shallow(
    <Comment comment={comment} />
  );

  expect(wrapper.text().includes("Kristian")).toEqual(true);
  expect(wrapper.text().includes("Hi")).toEqual(true);
});
