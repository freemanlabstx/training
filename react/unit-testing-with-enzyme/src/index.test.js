import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';

import MyComponent from './index';

const oldNode = <h1>My old node</h1>;

// Stuck? Check out the enzyme docs at:
// https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md

// First, we should write a test to confirm that the default
// state for the component is correctly set.
test('it has a default state', () => {
  const component = mount(<MyComponent />);

  // What is the default state for this component?
  // Looking at the constructor method may give some hints.
  // Set the below object to match the default state of the component.
  const defaultState = {};

  // We'll set the assertion variable to our component's state.
  // If we use component.props() to access the component's props,
  // how would you guess accessing state would work?
  const assertion = null;

  expect(assertion).toEqual(defaultState);
});

test('it renders myThing prop', () => {
  // The component is mounted, with a prop myThing passed to it.
  const component = mount(<MyComponent myThing="foobar" />);

  // Look at the code for MyComponent. Where is myThing used in the
  // render function? Can you identify what kind of "node" it is
  // used in? Can you recreate that node below?
  //
  // If you're unsure what a "node" is, take a look at the
  // oldNode variable above, which is an h1 node. Notice that it
  // also contains text inside of it as well. Can you think of
  // how myThing would look next to oldNode?
  const node = null;

  // Enzyme will search for the node within the component, confirming
  // that it does exist inside the component.
  expect(component.contains(node)).toEqual(true);
});

test('can find the num', () => {
  const component = mount(<MyComponent />);

  // We need to find the 'num' state variable inside of our component.
  // There's a couple ways to do this, but let's try looking through
  // the rendered output of the component.

  // Try setting renderedComponentText to the result of calling ".text()"
  // on the component.
  const renderedComponentText = null;

  // Using renderedComponentText, which is a text-rendered version
  // of the component, we want to check that the string output
  // "The num is X" appears, where X is the default value of num.
  //
  // Try setting assertion to the output of
  // renderedComponentText.includes(STRING), where STRING is
  // the "string output" referred to above.
  const assertion = null;
  expect(assertion).toEqual(true);
});

test('can find the list', () => {
  const component = mount(<MyComponent />);

  // In this test, we want to find the "ul" list
  // element for this component. Try using the
  // component.find function, passing in 'ul' as the
  // "node" we're searching for.
  const list = null;

  // We want to check the number of elements inside of our list.
  // To do this, we should get the "children" of our list node,
  // and call .length on it. If the children of a node are accessible
  // via the ".children" function, and you can get the length of
  // an array using ".length", how would you set assertion to the
  // number of children elements of the list variable?
  const assertion = null;

  expect(assertion).toEqual(3);
});

test('clicking the button increments num', () => {
  const component = mount(<MyComponent />);
  expect(component.state().num).toEqual(0);

  // Similarly to the last example, finding the button
  // component is as easy as calling ".find" on the component,
  // passing the string 'button' as the node we're looking for.
  // Try that below!
  const button = null;

  // To "click" the button, we need to use the ".simulate" function.
  // Call ".simulate" on button, passing the 'click' string to
  // indicate the action we want to perform.

  // Finally, we should check that the "num" value in state has
  // updated. Assuming that the second line of this test
  // where we ensure num is 0 is correct, what would num now be?
  // Test that below!
});
