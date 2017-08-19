import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import MyFirstComponent from './index';

it('can do equality checks', () => {
  // Tests are written in the format expect(thing)
  // with a "check" appended to the end.
  // For instance, we might want to verify that 1 + 1 = 2.
  expect(1 + 1).toEqual(2)

  // We can also do "equality" checks with .toEqual.
  expect(1 == 1).toEqual(true)

  // Ultimately, we want to simplify _what_ we're checking
  // in .toEqual. A complicated statement inside of expect
  // should only be used to ensure that the `.toEqual` value
  // is fairly simple.
  var array = [1, 2, 3];
  expect(Math.floor(array[0] * 3 + 10 - 4 * 0.5)).toEqual(11)
})

it('renders without crashing', () => {
  const div = document.createElement('div');

  // ReactDOM.render takes a component and an
  // "element" to render the component onto a
  // webpage. What component are we testing in
  // this test? The import above might give you
  // give you a hint. The element that the component
  // will be rendered into has been defined above.
  //
  //   ReactDOM.render(component, element)
  //
  // Replace the below line with your test.
  expect(false).toEqual(true)
});

it('has initial state set', () => {
  const wrapper = shallow(<MyFirstComponent />);

  // Hint: the state of a component can be referenced
  // from `<component>.state(key)`
  //
  //   wrapper.state(key)
  //
  // What would you expect the value of the key 'hello' in
  // state `.toEqual`?
  //
  // Replace the below line with your test.
  expect(false).toEqual(true)
});

it('displays the text variable in the <span>', () => {
  const wrapper = shallow(<MyFirstComponent />);
  // Hint: you can inspect values in a component
  // (like text) using `.contains`.
  //
  // Try `.contains` with text you know is in the component.
  // `.contains` returns a boolean - what would you expect
  // it `.toEqual` for text that is found on the page?
  //
  //   wrapper.contains(string)
  //
  // Replace the below line with your test.
  expect(false).toEqual(true)
});

it('clicks the button and updates state', () => {
  const wrapper = shallow(<MyFirstComponent />);
  const button = wrapper.find('button')

  // Clicking a button in the UI is done with `.simulate`:
  // in this case, we want to simulate click-this can be provided
  // as the string 'click'.
  //
  //   button.simulate(event)
  //
  // Once you've done this, what would you expect to change?
  // Is there a value that clicking the button in our component
  // changes? What would you expect it `.toEqual`?
  //
  // Replace the below line with your test.
  expect(false).toEqual(true)
});
