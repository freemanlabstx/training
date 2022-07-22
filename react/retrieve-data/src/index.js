import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import './index.css';

// No changes are needed above this line.

const NetworkedComponent = () => {
  // Set this component's state with two useState hook calls:
  //   1. `loading` should be `false`
  //   2. `string` should be "n/a"

  useEffect(() => {
    // When this component first renders, we should begin loading data.
    // To begin, set `loading` to `true`.

    async function getData() {
      // This does not need to be changed.
      const url = 'https://bytesized-training-assets.herokuapp.com/exercise.json';

      // `fetch` makes a HTTP request to the url, then...
      const resp = await fetch(url)

      // With the response, we try and turn it into
      // a JavaScript object from JSON, using .json(), then...
      const json = await resp.json()

      // With the variable `json` that is provided as
      // the result of `resp.json()`, update the component state
      // of your useState values:
      //   - `loading` should be set to `false`
      //   - `string` should be set to the value of `json.string`:
      //     this is the value of the key `string` in the returned
      //     JSON.
    }

    // Execute the function by executing getData at the end of this useEffect call.
    // 
  }, [])

  // This does not need to be changed.
  var loadingOrString;

  // When you've replaced both instances of UPDATE_ME
  // in this render function, you can delete its
  // definition below.
  var UPDATE_ME;

  // Replace UPDATE_ME with `loading`.
  if (UPDATE_ME) {
    // If we're still loading, we use
    // this custom LoadingComponent.
    // This does not need to be changed.
    loadingOrString = <LoadingComponent />;
  } else {
    // If we aren't loading, we should display
    // the string value from state instead.
    // This will contain the data requested
    // from the network. Replace UPDATE_ME
    // with the `string` variable.
    loadingOrString = <h3>{UPDATE_ME}</h3>;
  }

  // This does not need to be changed.
  return <div>{loadingOrString}</div>;
}

// No changes are needed below this line.

class LoadingComponent extends React.Component {
  render() {
    return (
      <div className="spinner">
        <div className="rect1" />
        <div className="rect2" />
        <div className="rect3" />
        <div className="rect4" />
        <div className="rect5" />
      </div>
    );
  }
}

var root = document.getElementById('root');
if (root) {
  ReactDOM.render(<NetworkedComponent />, root);
}

export default NetworkedComponent;
