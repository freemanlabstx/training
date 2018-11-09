import React from "react";

// This component should be rewritten as an SFC, or
// stateless functional component. Note the
// props being passed in currently, and rewrite
// the component to have these provided as part of
// the "props" function argument for your new SFC.
// If you're stuck, re-read the comments in src/Blog.js!
export default class Header extends React.Component {
  render() {
    const { blogTitle, blogAuthor } = this.props;

    return (
      <div style={{ background: "#eee", padding: "1em 4em" }}>
        <h1>{blogTitle}</h1>
        <h2>{blogAuthor}</h2>
      </div>
    );
  }
}
