import React from 'react';
import Comments from './Comments';

export default class Post extends React.Component {
  render() {
    const { post } = this.props;
    const { comments, postTitle, postContent } = post;
    return (
      <div style={{padding: "2em"}}>
        <PostTitle title={postTitle} />
        <PostContent content={postContent} />
        <Comments comments={comments} />
      </div>
    );
  }
}

class PostTitle extends React.Component {
  render() {
    const { title } = this.props;
    return <h1>{title}</h1>
  }
}

class PostContent extends React.Component {
  render() {
    const { content } = this.props;
    return <p>{content}</p>
  }
}

export { Post, PostTitle, PostContent }
