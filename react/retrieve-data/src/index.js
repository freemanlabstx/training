import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import './index.css';

// No changes are needed above this line.

class NetworkedComponent extends React.Component {
  constructor() {
    super()

    // Set this component's state:
    //   1. `loading` should be `false`
    //   2. `string` should be "n/a"
  }

  componentDidMount() {
    // When this component mounts, we should
    // begin loading data.
    // To begin, use this.setState to set `loading`
    // to `true`.
    // Remember that `this.setState` takes a JS object:
    //   this.setState({ key: 'value' })

    // This does not need to be changed.
    var url = "https://bytesized-training-assets.herokuapp.com/exercise.json"

    // `fetch` makes a HTTP request to the url, then...
    fetch(url).then(resp => {
      // With the response, we try and turn it into
      // a JavaScript object from JSON, using .json(), then...
      resp.json().then(json => {

        // With the variable `json` that is provided as
        // the result of `resp.json()`, update the component state,
        // using this.setState below:
        //   - `loading` should be set to `false`
        //   - `string` should be set to the value of `json.string`:
        //     this is the value of the key `string` in the returned
        //     JSON.

      });
    });
  }

  render() {
    // This does not need to be changed.
    var loadingOrString;

    // Get two values from state:
    //   - loading
    //   - string
    // Set these values to a variable name of
    // your choice below.


    // When you've replaced both instances of UPDATE_ME
    // in this render function, you can delete its
    // definition below.
    var UPDATE_ME;

    // Replace UPDATE_ME with the variable you defined
    // to store `this.state.loading`.
    if (UPDATE_ME) {
      // If we're still loading, we use
      // this custom LoadingComponent.
      // This does not need to be changed.
      loadingOrString = <LoadingComponent />
    } else {
      // If we aren't loading, we should display
      // the string value from state instead.
      // This will contain the data requested
      // from the network. Replace UPDATE_ME
      // with the variable you defined to
      // store this.state.string.
      loadingOrString = <h3>{UPDATE_ME}</h3>
    }

    // This does not need to be changed.
    return (
      <div>
        {loadingOrString}
      </div>
    );
  }
}

// No changes are needed below this line.

class LoadingComponent extends React.Component {
  render() {
    return (
      <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    )
  }
}

var root = document.getElementById("root");
if (root) { ReactDOM.render(<NetworkedComponent />, root); }

export default NetworkedComponent;
