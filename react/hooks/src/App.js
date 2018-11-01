import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Welcome to React hooks!

/*
A few things need to happen in this example:

1. The App component should be updated from a "class" component
   to a class-less, function-based component.
   
   From:

   class MyComponent extends Component {
     render() {
       return <h1>Hello!</h1>
     }
   }

   to:
   
   const MyComponent = () => {
     return <h1>Hello!</h1>
   }

   Instead of copy-pasting the class code into the new function,
   try writing it side-by-side so you can start with a clean slate.
   The function should return the current content of the render function
   in our App class. Rename the old class component to "OldApp" so that
   you can ensure you're using your new function component.

2. Next, you should import the two "hooks" we'll use in our example,
   `useState` and `useEffect`. These are "named" imports from inside
   the React package. How would you import them, similarly to how
   "Component" is imported now?

3. Inside our new App function, before returning HTML, we should
   use the `useState` hook to set an initial state for `count`, and get
   a `setState` function we can use in our component. For instance, if we
   wanted to track `num`:

   const [num, setNum] = useState(defaultValue)

   Do something similar, but instead of `num`, use `count`. The default 
   value should be 0.
   
4. Replace the usage of our old `this.state.count` value inside of the render
   code. `this.state.count` should just become `count`, and `increment` should
   be replaced with a call to `setCount`, with an argument of `count + 1`.

5. Finally, let's use `useEffect` to safely handle a "side-effect": something
   that doesn't perfectly fit inside of React's functional code semantics.
   In our class component, in the `componentDidUpdate` function, we check 
   for a change in `this.state.count`: if one exists, we update document.title. 
   Let's do something similar with `useEffect`, which takes one argument -
   a function to perform when a change occurs.
  
   useEffect(() => {
     doSomethingHere
   })

   After you set up `count` and `setCount`, use `useEffect` to set the
   document.title to the value of `count` inside of `useEffect`.

6. To confirm everything works, open up the application in your browser
   and confirm the following still works:
   
   - The "count" starts at 0
   - Clicking the increment button increments the count (from 0 to 1, 1 to 2, etc)
   - The document title (the title of the page in your browser) tracks count's value
*/

class App extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  componentDidMount() {
    document.title = this.state.count;
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = this.state.count;
    }
  }

  increment = () => this.setState({ count: this.state.count + 1 });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Welcome to React Hooks</p>
          <p>The count is {this.state.count}</p>
          <button onClick={this.increment}>Increment!</button>
        </header>
      </div>
    );
  }
}

export default App;
