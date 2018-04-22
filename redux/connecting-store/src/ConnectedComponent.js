import React from 'react';
import ReactDOM from 'react-dom';

import reducers, {addItem} from './reducers';
import {createStore} from 'redux';

export const store = createStore(reducers);

class ConnectedComponent extends React.Component {
  constructor() {
    super();
    // Create a state object with an empty items array.

    // Bind the function this.appendItem with the correct
    // context.
  }

  componentDidMount() {
    // This line of code subscribes to the store,
    // and allows you to provide a function to update
    // the component state.
    // store.subscribe returns a function to unsubscribe
    // from the store. We'll use it later for when
    // the component unmounts.
    this.unsubscribe = store.subscribe(() => {
      // In the subscribe function, get the application's
      // state using store.getState().
      // Set the component state's items array to the
      // application's state items array.
    });
  }

  appendItem() {
    // Dispatch the addItem action from inside the store.
    // addItem takes an argument - the item that you
    // want to pass into the store. Try passing a string.
    //
    // To dispatch the action, call store.dispatch and
    // pass an action as the argument.
  }

  render() {
    const {items} = this.state;
    return (
      <div>
        <ul>{items.map((value, index) => <li key={index}>{value}</li>)}</ul>

        <button onClick={this.appendItem}>Append item</button>
      </div>
    );
  }

  componentWillUnmount() {
    // Call the function this.unsubscribe to remove
    // the store subscription from the component.
  }
}

export default ConnectedComponent;
