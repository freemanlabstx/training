import React from 'react';
import ReactDOM from 'react-dom';

var TEXT_HERE, FUNCTION_HERE;

// No changes are needed above this line.

class MyFirstComponent extends React.Component {
  constructor() {
    super()

    this.state = {
      hello: 'world',
      ping: null,
    };

    this.clickedButton = this.clickedButton.bind(this);
  }

  clickedButton() {
    this.setState({ ping: 'pong' })
  }

  render() {
    var ping = this.state.ping;

    return (
      <div>
        <h1>Hello!</h1>
        <button onClick={this.clickedButton}>Click me</button>
        <span style={{color: "pink"}}>{ping}</span>
      </div>
    );
  }
}

// No changes are needed below this line.

const root = document.getElementById("root");
if (root) { ReactDOM.render(<MyFirstComponent />, root); }

export default MyFirstComponent;
