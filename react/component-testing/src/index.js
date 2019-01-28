import React from "react";
import ReactDOM from "react-dom";

var TEXT_HERE, FUNCTION_HERE;

class MyFirstComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      ping: null,
      hello: "world"
    };
    this.clickedButton = this.clickedButton.bind(this);
  }

  clickedButton() {
    this.setState({ ping: "pong" });
  }

  render() {
    var spanText = "Hello!";

    return (
      <div>
        <h1>{spanText}</h1>
        <button onClick={this.clickedButton}>Click me</button>
      </div>
    );
  }
}

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(<MyFirstComponent />, root);
}

export default MyFirstComponent;
