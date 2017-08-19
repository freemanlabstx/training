import React from 'react';

export default class Sidebar extends React.Component {
  render() {
    const { posts } = this.props;
    return (
      <div style={{background: "#eee", padding: "1em"}}>
        <h3>Recent posts</h3>
        <ul>
          {posts.map(post =>
            <li key={post.postTitle}>{post.postTitle}</li>
          )}
        </ul>
      </div>
    )
  }
}

