import React from 'react';

export default class Comment extends React.Component {
  render() {
    // The Comment component receives a single prop.
    // This prop has three fields on it:
    //   - commentAuthor
    //   - commentBody
    //   - postDate
    // Try using ES6's "destructuring" syntax to quickly
    // define all three as variables. For instance, given
    // an object like:
    //
    //   var obj = { name: "Me", age: 99 }
    //
    // I can use:
    //
    //   var { name, age } = obj;
    //
    // To quickly set both variables.
    //
    // Do the same with `author`, `body`, and `date`, and replace
    // the static text below with the values from these
    // variables.
    //
    return (
      <div>
        <h5>Author</h5>
        <p>Body</p>
        <p>
          <small>Date</small>
        </p>
      </div>
    );
  }
}
