import React from 'react';
import ReactDOM from 'react-dom';

// Try importing the component Gravatar from 'react-gravatar'.

class Application extends React.Component {
  // Our Application should have state. You can either
  // set state using the constructor, or more simply
  // by using state = {} inside of the component
  // definition.
  //
  // Try setting the state to an object with
  // the keys and values:
  //   - Name, set to your name
  //   - Age, set to your age
  //   - Email, set to your email
  //   - City, set to the city you live in

  // Next, update the Application component to
  // render MyInfo inside of a div.
  // Pass all the values from state to MyInfo as props.
  // You can do this by using the spread operator:
  //   <SampleComponent {...this.state} />
  render() {
    return null;
  }
}

class MyInfo extends React.Component {
  // Inside the render function, return the following inside of a div:
  //   The Gravatar component, passing 'this.props.email' as the prop 'email'.
  //   An h1 with the value 'this.props.name'
  //   An h2 with the value '{this.props.age} in {this.props.city}'. There's
  //     a couple ways to format this, so it's left as an exercise for you to do.
  render() {
    return (
      <div>
      </div>
    );
  }
}

// Over time, applications can get more complex, and a simple
// two-component design may not be appropriate.
// For instance, let's add a Layout component below, which
// renders the following:
//   A 'header' element, with the 'h1' text "My application"
//     inside of it
//   A 'main' element, which renders MyInfo.
//
// Go back up to Application, and replace MyInfo with Layout.
//
// Notice that you now have an issue with passing props:
// either you need to pass props down _through_ Layout, through
// two components, or you need some other solution.
//
// At scale, you can imagine this solution of passing props down
// stops being efficient, and becomes a source of confusion and errors.
// To solve this, we'll introduce React contexts to this application.

// To begin, we need to create a context, using React.createContext().
// Assign it to the variable MyContext.

// We also need to update Application to become a "Provider" component.
// In render, wrap Layout with the following:
//   The component MyContext.Provider, passing the prop value. This prop
//   is an object, with a key state set to this.state.
// Remember that Layout should still be inside the MyContext.Provider
// component.

// We've created our context and Provider information, now we need to use it.
// In MyInfo, wrap your presentation code in the component <MyContext.Consumer>,
// which has one _child_ JSX expression:
//
//   <SampleComponent>
//     {expression}
//   </SampleComponent>
//
// This expression should be a function with one argument, context.
// Our context will be equivalent to the "value" prop we defined in our
// context provider. This means that the state that we've previously defined
// will be available as `context.state`.
//
// This is the data that we want to use to populate our MyInfo component.
// Replace each call to `this.state` as needed to use the context state.
//
// Once you've completed this, look through the code. Does it make sense where
// context is both defined, and used? Can you see how this pattern could be
// useful in the future?

const root = document.getElementById("root");
if (root) { ReactDOM.render(<Application />, root); }
