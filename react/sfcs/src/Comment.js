import React from "react";

// This component should be rewritten as an SFC, or
// stateless functional component. Note the
// props being passed in currently, and rewrite
// the component to have these provided as part of
// the "props" function argument for your new SFC.
// If you're stuck, re-read the comments in src/Blog.js!
export default class Comment extends React.Component {
  render() {
    const {
      comment: { commentAuthor, commentBody, postDate }
    } = this.props;

    return (
      <div>
        <h5>{commentAuthor}</h5>
        <p>{commentBody}</p>
        <p>
          <small>{postDate}</small>
        </p>
      </div>
    );
  }
}
