import React from 'react';

export default class Header extends React.Component {
  render() {
    // The Header component receives two props that
    // you should have defined previously, in the Blog
    // component. Set these props to variables, and replace
    // "Title" and "Author" with those values in the
    // return portion of this function.

    return (
      <div style={{background: '#eee', padding: '1em 4em'}}>
        <h1>Title</h1>
        <h2>Author</h2>
      </div>
    );
  }
}
