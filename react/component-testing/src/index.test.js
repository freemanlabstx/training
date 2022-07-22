import React from "react";
import MyFirstComponent from "./index";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { act } from "react-dom/test-utils";

it("can do equality checks", () => {
  // Tests are written in the format expect(thing)
  // with a "check" appended to the end.
  // For instance, we might want to verify that 1 + 1 = 2.
  expect(1 + 1).toEqual(2);

  // We can also do "equality" checks with .toEqual.
  expect(1 == 1).toEqual(true);

  // Ultimately, we want to simplify _what_ we're checking
  // in .toEqual. A complicated statement inside of expect
  // should only be used to ensure that the `.toEqual` value
  // is fairly simple.
  var array = [1, 2, 3];
  expect(Math.floor(array[0] * 3 + 10 - 4 * 0.5)).toEqual(11);
});

it("renders", () => {
  // The `render` function renders the component onto a
  // virtual screen. What component are we testing in
  // this test? The import above might give you
  // give you a hint. The element that the component
  // will be rendered into has been defined above.
  //
  //   render(component)
  //
  render(null);

  // Replace the below line with your test.
  expect(<MyFirstComponent />).toBeInTheDocument()
});

it("has initial state set", () => {
  render(<MyFirstComponent />)

  // With a component rendered, you can query it inside
  // of the `screen` variable.

  // In this test, we should check for initial state. In
  // our component, we set the `text` variable to the value
  // "Hello, world", and render it in an `h1` with a `name`
  // attribute of `text`.

  // We can query this in our test by using `screen.getByRole`.
  // Do this, and assign it to the value `h1`.

  // Now, with `h1` set to the queried `h1` value, we should
  // assert that it has the correct value set. To do this,
  // we can use the assertion `expect(h1).toHaveTextContent(text)`.
  // What would be the text that should be set there?

  // Replace the below line with your test.
  expect(false).toEqual(true);
});

it("clicks the button and updates state", () => {
  render(<MyFirstComponent />)
  const button = screen.getByRole("button")

  // You can click a button by calling the `.click()` function on it.
  // Remember that any actions performed that modify state should be
  // wrapped in an `act` block:
  //
  // act(() => {
  //   // Do stuff
  // })

  // Once you've done this, what would you expect to change?
  // What HTML tag can you query to check for the changed value?

  // Replace the below line with your test. It should assert
  // that a state value has changed
  expect(false).toEqual(true);
});
