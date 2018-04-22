import React from 'react';
import ReactDOM from 'react-dom';

const setOne = [
  {
    name: "Brian Kernighan",
    occupation: "Programmer"
  },
  {
    name: "Dennis Ritchie",
    occupation: "Programmer"
  }
];

const setTwo = [
  {
    name: "John Lennon",
    occupation: "Musician",
  },
  {
    name: "Paul McCartney",
    occupation: "Musician",
  }
];

const setThree = [ 1, 2, 3 ]

class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = { set: setOne };
  }

  // No changes are needed below this line.
  render() {
    const { set } = this.state;
    let output;

    if (set) {
      output = set.map(( item, i ) => <span key={i}>
        {item.name} is a {item.occupation}
      </span>)
    } else {
      output = <span>Can't load the set!</span>
    }

    return <div>{output}</div>
  }
}

const root = document.getElementById("root");
if (root) { ReactDOM.render(<MyComponent />, root); }

export default MyComponent;
