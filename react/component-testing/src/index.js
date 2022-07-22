import React, {useState} from "react";
import ReactDOM from "react-dom";

const MyFirstComponent = () => {
  const [pingPong, setPingPong] = useState(null)
  const [text, _setText] = useState("Hello, world")

  function clickedButton() {
    setPingPong("pong");
  }

  return (
    <div>
      <h1 role="text">{text}</h1>
      <h2 role="pingpong">{pingPong}</h2>
      <button role="button" onClick={clickedButton}>Click me</button>
    </div>
  );
}

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(<MyFirstComponent />, root);
}

export default MyFirstComponent;
