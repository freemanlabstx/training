import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

class MyApp extends React.Component {
  constructor() {
    super();

    this.state = {
      someText: "Hello!",
      numberOne: 1,
      numberTwo: 2,
      someThings: [3, 4, 5],
      anObject: {
        name: "Just an Object"
      }
    }
  }

  render() {
    // The various elements in this.state should be "pulled" out
    // here. For instance:
    //   var thing = this.state.thing;
    //
    // You can also use ES6 "destructuring" to make this process
    // significantly faster: if the value exists on this.state,
    // you can simply do:
    //   var { thing } = this.state;
    //
    // Finally, it's recommended that you use ES6's `const` keyword
    // in place of `var`: `const` ensures that a value can't be changed
    // (it's immutable), which is important to ensure that we don't
    // mess up React's built-in state management.
    //   const { thing } = this.state;

    return (
      <div>
        {/*
          The render function for ComponentTwo
          shows that it expects one prop:
          `someText`.
        */}
        <ComponentOne
        />

        {/*
          The render function for ComponentTwo
          shows that it expects two props:
          numberOne, and numberTwo.
        */}
        <ComponentTwo
        />

        {/*
          The render function for ComponentThree
          shows that it expects one prop:
          an array `someThings`.
        */}
        <ComponentThree
        />

        {/*
          Note in ComponentFour that it expects
          a prop `name`, which can be found in `anObject`.
          It _does not_ expect a prop `anObject`: instead,
          you'll need to pass the value from _inside_ the
          object.
        */}
        <ComponentFour
        />
      </div>
    )
  }
}

class ComponentOne extends React.Component {
  render() {
    const { someText } = this.props;
    return (
      <span>{someText}</span>
    )
  }
}

class ComponentTwo extends React.Component {
  render() {
    const { numberOne, numberTwo } = this.props;
    return (
      <span>{numberOne + numberTwo}</span>
    )
  }
}

class ComponentThree extends React.Component {
  render() {
    const { someThings } = this.props;
    return (
      <div>
        {someThings.map(thing => <li key={thing}>{thing}</li>)}
      </div>
    )
  }
}

class ComponentFour extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <span>{name}</span>
    )
  }
}

const root = document.getElementById("root");
if (root) { ReactDOM.render(<MyApp />, root); }

export { MyApp, ComponentOne, ComponentTwo, ComponentThree, ComponentFour };
