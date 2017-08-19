import React from 'react';

export default class Comments extends React.Component {
  render() {
    return (
      <div>
        <h4>Comments for this post</h4>
      </div>
    )
  }
}

class Comment extends React.Component {
  render() {
    return (
      <div>
        <h5>Author</h5>
        <p>Body</p>
        <p><small>Date</small></p>
      </div>
    )
  }
}

