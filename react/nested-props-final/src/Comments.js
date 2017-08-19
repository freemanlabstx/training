import React from 'react';

export default class Comments extends React.Component {
  render() {
    const { comments } = this.props;
    return (
      <div>
        <h4>Comments for this post</h4>
        {comments.map(comment => <Comment comment={comment} key={comment.commentBody} />)}
      </div>
    )
  }
}

class Comment extends React.Component {
  render() {
    const { comment } = this.props;
    const { commentBody, commentAuthor, postDate } = comment;

    return (
      <div>
        <h5>{commentAuthor}</h5>
        <p>{commentBody}</p>
        <p><small>{postDate.toString()}</small></p>
      </div>
    )
  }
}

