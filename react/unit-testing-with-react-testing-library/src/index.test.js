import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import { fireEvent, render } from "react-testing-library";

import MyComponent from "./index";

// In this exercise, we'll progressively move each
// enzyme-based test from this previous exercise over to using
// react-testing-library. react-testing-library is designed
// with a number of improvements in design/functionality over enzyme,
// with the primary decision being to remove shallow rendering
// entirely, and focus on true testing of components and behavior,
// using *real* DOM elements and *real* event handling.
//
// Let's begin with a simple example.
test("it renders myThing prop", () => {
  const myThing = "foobar";

  // In our current enzyme example, we're using shallow rendering
  // to render a single layer of our component tree - in this case,
  // just MyComponent. Because our component just renders a single
  // layer, we're only using shallow for the API, not necessarily
  // for the "shallow" functionality itself.
  //
  // Let's switch over to using react-testing-library. The lib
  // exposes a few functions, the primary of being `render`.
  // Call the render function, passing in the rendered component
  // in the same way that it has been called for shallow (you can
  // even just copy paste the shallow function call, and replace
  // shallow with render.
  //
  // Now for the interesting part. react-testing-library returns an
  // object from render - the object is intended to be destructured,
  // so you can get access to the methods that you want to use for
  // testing and assertions.
  //
  //   const { getByText } = render(<TestComponent />)
  //
  // In this test, we want to test for a text value in the component,
  // based on the myThing prop. We know that in MyComponent, the
  // myThing prop is used inside of a span that displays the text
  // 'My thing is {myThing}'. Use the render function and destructure
  // getByText out from the returned object (like in the above example).
  // Call the getByText function, passing in the interpolated string
  // 'My thing is {myThing}' (look up the ES6 string interpolation
  // syntax if you need help!). Set the value of this function call
  // to textNode.
  //
  // Now we have a textNode we can make an assertion with. We
  // just want to test that the textNode *exists*, we can simply
  // assert using `toBeTruthy`:
  //
  //   expect(1).toBeTruthy()
  //
  // Make this assertion with textNode.
  const component = shallow(<MyComponent myThing={myThing} />);
  const node = <span>My thing is {myThing}</span>;
  expect(component.contains(node)).toEqual(true);
});

test("can find the num", () => {
  // getByText is just one of many available methods returned
  // from react-testing-library. Another useful tool is `getByTextId`.
  //
  // One of the most unreliable methods in enzyme is `find`. Because
  // it requires looking up by a specific DOM tag, class, or ID, it's
  // prone to failure if you change an expected value: for instance,
  // if the test is looking for a span tag, but you've changed it to
  // an h4, the test will fail. This is a "brittle" test: one that
  // is slightly unreliable.
  //
  // The author of react-testing-library has a pretty interesting
  // solution to this: using the "data-" attribute behavior in HTML
  // to set a "test id" on specific DOM elements, which we can use
  // to reliably look up specific DOM elements. You can read more
  // here (and I recommend reading it! It's one of the best JS blog
  // posts I've read in quite some time):
  //
  // https://blog.kentcdodds.com/making-your-ui-tests-resilient-to-change-d37a6ee37269
  //
  // Let's try using the getByTestId function in react-testing-library
  // to update this "num" test. Right now we're using component.text()
  // to get the full text of the component, and using .includes to
  // find a substring inside of that text. Call the render function,
  // passing in MyComponent, and destructure the function getByTestId
  // out of the value returned.
  //
  // Let's modify this test slightly and set a numNode variable to the
  // value of calling getByTestId, passing in the argument "num" as a
  // test ID for looking up the correct field. Where does this come from?
  // I've gone and updated src/index.js with a few data-test-id attributes
  // in the render function! Go take a look at those to see the full workflow
  // between your component's render function, and getByTestId inside your tests.
  //
  // Once you've done this, make a similar assertion to the previous test:
  // we expect numNode to *exist*, or have a *truthy* value - how do we assert
  // that in Jest + react-testing-library?

  const component = shallow(<MyComponent />);
  const renderedComponentText = component.text();
  const assertion = renderedComponentText.includes("The num is 0");
  expect(assertion).toEqual(true);
});

test("can find the list", () => {
  // Let's replace this test with another usage of
  // getByTestId. We want to find the ul element,
  // which has a data-test-id attribute of "list".
  //
  // Using the previous test as a reference, set
  // listNode to the value of calling getByTestId
  // with our list's test id.
  //
  // Once we've found listNode, we should assert
  // that it has three children, similar to our
  // current version of the test. We can do this
  // by using the `toHaveLength` check:
  //
  //   expect(array).toHaveLength(5)
  //
  // If we wanted to check the length of the
  // listNode's children (available at
  // listNode.children), how would we format that
  // assertion?
  const component = shallow(<MyComponent />);
  const list = component.find("ul");
  const assertion = list.children().length;
  expect(assertion).toEqual(3);
});

test("clicking the button increments num", () => {
  // Finally, we'll use react-testing-library
  // to handle interactivity. One issue with enzyme
  // is the idea of "simulating" events: as the author
  // of react-testing-library says:
  //
  // "The more your tests resemble the way your software
  // is used, the more confidence they can give you."
  // - https://twitter.com/kentcdodds/status/977018512689455106
  //
  // *Simulating* a click is *not* how your software is
  // used! The user *actually* clicks the button.
  // react-testing-library has tools for interacting with
  // buttons, inputs, and any other HTML that the user would
  // normally interact with, but importantly, it *actually*
  // performs/fires events on those HTML elements, and doesn't
  // just simulate them.
  //
  // Review this test as it is before we move on to rewriting it.
  // In this test, we check a value in state, simulate a click, and
  // then check the new value in state. The success case for this
  // test is that `num` inside of state starts at 0, and then
  // increments to 1.
  //
  // This state value is represented in our UI via a span that
  // renders the text "The num is {num}". If we want to _actually_
  // test the functionality of our component, and not just the
  // implementation, we should validate that text, instead of the
  // state object inside of the component.
  //
  // First, let's check the text at initial render. Call the
  // render function, passing in MyComponent, and destructure
  // getByText out of the object returned from render.
  // Set numNode to the value of calling getByText, looking for
  // the text "The num is {num}". Replace "{num}" with the
  // *initial value of num in your state*. Assert that this
  // numNode is truthy.
  //
  // Now we want to actually fire an event. react-testing-library
  // allows you to import a named function, fireEvent, from inside
  // of the package. We want to find the button in our component, and
  // pass it into the function fireEvent.click:
  //
  //   fireEvent.click(getByText('My button text'))
  //
  // Look at the definition of MyComponent, and rewrite (and call)
  // the above example code, replacing 'My button text' with the actual
  // text for our button.
  //
  // Now that we've *actually* clicked the button (and not just simulated
  // it), we should check the new value of numNode, since the text should
  // have changed with our new num value. Set numNode to the value of
  // "The num is {num}", once again replacing "{num}" with the **new** value
  // of your num in state. Make another assertion that this new version
  // of numNode is truthy.
  //
  // Notice that we're testing the UI here, not the implementation! If
  // we want to test the *actual* behavior of our application, and what's
  // useful to our users, this means testing the text that is rendered based
  // on our num in state, not just the state and num value themselves!
  const component = shallow(<MyComponent />);
  expect(component.state().num).toEqual(0);
  const button = component.find("button");
  button.simulate("click");
  expect(component.state().num).toEqual(1);
});
