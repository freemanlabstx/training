import React from 'react';
import Comment from './Comment';

export default class Post extends React.Component {
  render() {
    const { post } = this.props;
    const { postTitle, postContent, comments } = post;
    return (
      <div style={{padding: "2em"}}>
        <h1>{postTitle}</h1>
        <p>{postContent}</p>
        {comments.map((value, index) =>
          <Comment key={index} comment={value} />)}
      </div>
    );
  }
}

