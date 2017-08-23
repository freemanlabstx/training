import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// First, we need to import the component.
// Import `MyFirstComponent` from the `index`
// file - note that it's in the same folder, which
// will be referenced as `./`.

// While we should also test that the functionality
// of the component works, we should first ensure
// it's actually able to render.

// We can test the rendering behavior by using
// document.createElement('div'), to create a div,
// and passing an instance of `<MyFirstComponent />`
// and the div element as arguments to `ReactDOM.render`.
//
// Give this a test a name like "renders without crashing".
// Note that tests are in the format:
//
//   it('test name', () => {
//   });

// Next, we should test that the initial state is
// correctly set for this component. To do so,
// we'll use the `shallow` function, passing in
// `<MyFirstComponent />`.
//
// Checking state can be done with the state function:
// call `.state(key)` on your shallow component, and
// check that it is `.toEqual` to the correct value.
// We'll use `expect` here, so the final format should
// be:
//
//   expect(<shallow_component>.state(key)).toEqual(value)

// We can also test for the presence of static text in
// the component. Create another shallow component and
// test for the presence of the string "Hello!". We'll
// use `.contains` for this:
//
//   expect(<shallow_component>.contains(<text>)).toEqual(true);

// Finally, let's test that the button in our component
// actually makes a change to the component itself.
// Create a shallow component, and find the button on it:
//
//   <shallow_component>.find('tagname')
//
// With this button, we should first make sure it exists
// by expecting it to have a length of 1 (one element was
// found). We can click the button using simulate-try
// simulating a 'click' event:
//
//   element.simulate(event)
//
// Finally, we should ensure that doing this actually
// changes the state as we'd expect. In this case, we
// just need to check that the value for 'ping' in
// state is now equal to 'pong'.
