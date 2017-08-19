import React from 'react';
import ReactDOM from 'react-dom';

var TEXT_HERE, FUNCTION_HERE;

// No changes are needed above this line.

class MyFirstComponent extends React.Component {
  constructor() {
    super()

    /* Data is added to state in the format:
     *   key: 'string'
     *
     * Try adding the key "hello" with the value
     * "world" to this.state.
     */
    this.state = {
      ping: null,
    };

    /* This function can be referred to in the render
     * function as this.clickedButton.
     */
    this.clickedButton = this.clickedButton.bind(this);
  }

  clickedButton() {
    /* This will change state.ping
     * from null to 'pong'.
     */
    this.setState({ ping: 'pong' })
  }

  render() {
    var ping = this.state.ping;
    var spanText = "Hello!";

    return (
      <div>
        <h1>Hello!</h1>
        <span>{TEXT_HERE}</span>
        <button onClick={FUNCTION_HERE}>Click me</button>

        {/*
          If `ping` from `state` is set, it will
          appear in pink text here.

          By the way, this is a JSX comment!
        */}
        <span style={{color: "pink"}}>{ping}</span>
      </div>
    );
  }
}

// No changes are needed below this line.

const root = document.getElementById("root");
if (root) { ReactDOM.render(<MyFirstComponent />, root); }

export default MyFirstComponent;
