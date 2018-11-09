import React from "react";
import ReactDOM from "react-dom";

class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0,
      set: [1, 2, 3]
    };
  }

  incrementNum() {
    this.setState({ num: this.state.num + 1 });
  }

  // No changes are needed below this line.
  render() {
    const { num, set } = this.state;
    const { myThing } = this.props;
    return (
      <div>
        <button onClick={() => this.incrementNum()}>Click me!</button>
        <span data-testid="num">The num is {num}</span>
        <ul data-testid="list">
          {set.map(s => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        {myThing && <span>My thing is {myThing}</span>}
      </div>
    );
  }
}

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(<MyComponent />, root);
}

export default MyComponent;
