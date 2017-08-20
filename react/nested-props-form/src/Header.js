import React from 'react';

export default class Header extends React.Component {
  render() {
    const { blogTitle, blogAuthor } = this.props;

    return (
      <div style={{ background: "#eee", padding: "1em 4em" }}>
        <h1>{blogTitle}</h1>
        <h2>{blogAuthor}</h2>
      </div>
    )
  }
}

