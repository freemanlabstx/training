import React from "react";
import Comment from "./Comment";

// This component should be rewritten as an SFC, or
// stateless functional component. Note the
// props being passed in currently, and rewrite
// the component to have these provided as part of
// the "props" function argument for your new SFC.
// If you're stuck, re-read the comments in src/Blog.js!
export default class Post extends React.Component {
  render() {
    const {
      post: { postTitle, postContent, comments }
    } = this.props;

    return (
      <div style={{ padding: "2em" }}>
        <h1>{postTitle}</h1>
        <p>{postContent}</p>
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    );
  }
}
