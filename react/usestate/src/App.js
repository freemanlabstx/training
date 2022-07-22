import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// Welcome to your first exercise!

/*
A few things need to happen in this example:

1. First, you should import the "hook" we'll use in our example,
   `useState`. This is a "named" import from inside the React 
   package. Another example of a "named" import in our code currently
   is "Component". How would you import `useState` alongside of it, in
   line 1?

2. Inside our App component, before returning HTML, we should
   use the `useState` hook to set an initial state for `count`, and get
   a `setState` function we can use in our component. For instance, if we
   wanted to track `num`:

   const [num, setNum] = useState(defaultValue)

   Do something similar, but instead of `num`, use `count`. The default 
   value should be 0. The second variable returned from useState is a function
   called `setX`, where `x` matches the name of your tracked state variable. 
   In the above example, `setNum` corresponds with `num`, and when called, it
   will replace `num` with the value you provide:

   console.log(num) // 0
   setNum(4)        // Set an arbitrary number
   console.log(num) // 4
   setNum(num * 2)  // Update num to a new value, based on the previous value of num
   console.log(num) // 8

3. Update the paragraph containing the text "The count is (null)" to use your
   new count variable. Inside of the curly brackets ({}), the `null`
   value should be replaced with your variable, so that it is re-rendered when
   the value for that variable changes.
   
4. Update the `increment` function to actually increment your new count variable.
   To do this, you can make use of the second variable returned from the useState
   call, which is a function that can update the associated state value.
   Remember to make use of the current value of your `count` variable when
   incrementing count.
*/

const App = () => {
  function increment() {
    // Increment your count value here
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to React Hooks</p>
        <p>The count is {null}</p>
        <button name="button" onClick={increment}>Increment!</button>
      </header>
    </div>
  );
}

export default App;
