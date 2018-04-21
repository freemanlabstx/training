import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

export default class MyEnhancedButton extends React.Component {
  constructor() {
    super()

    // Initialize the state of this component:
    //   - count should be set to 0
    //   - oddNumber should be set to false

    // this.onClick needs to be explicitly bound
    // to the context `this` in the constructor.
    // Re-assign this.onClick to a bound version
    // of this.onClick, bound to the context `this`.
  }

  // Define the function onClick, which updates
  // the state with count + 1.
  //
  // Also update oddNumber in state, depending on
  // whether the new number will be an even or odd
  // number.
  //
  // You may prefer to get count out of state as
  // a separate value, and update the number with
  // <myCurrentCountVariable> + 1.

  render() {
    // Assign the value of count in state to the variable
    // count.
    const { oddNumber } = this.state;

    // Set clickFunc to the onClick function for this component
    const clickFunc = null;

    // Set oddNumberString to "True" if oddNumber is true,
    // or "False" if oddNumber is false.
    const oddNumberString = "";
    return (
      <div>
        <p>The button has been clicked {count} times</p>
        <p>Odd number? {oddNumberString}</p>
        <button onClick={clickFunc}>
          Click me
        </button>
      </div>
    )
  }

}

const root = document.getElementById('root');
if (root) { ReactDOM.render(<MyEnhancedButton />, root); }
registerServiceWorker();
