import React from "react";

// This component should be rewritten as an SFC, or
// stateless functional component. Note the
// props being passed in currently, and rewrite
// the component to have these provided as part of
// the "props" function argument for your new SFC.
// If you're stuck, re-read the comments in src/Blog.js!
export default class Sidebar extends React.Component {
  render() {
    const { posts } = this.props;

    return (
      <div style={{ background: "#eee", padding: "1em" }}>
        <h3>Recent posts</h3>
        <ul>
          {posts.map(({ postDate, postTitle }, index) => (
            <li key={index}>
              {postTitle} | {postDate}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
