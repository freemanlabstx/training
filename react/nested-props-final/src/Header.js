import React from 'react';

export default class Header extends React.Component {
  render() {
    const { title, author } = this.props;

    return (
      <div style={{ background: "#eee", padding: "1em 4em" }}>
        <h1>{title}</h1>
        <h2>{author}</h2>
      </div>
    )
  }
}

