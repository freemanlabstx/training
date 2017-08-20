import React from 'react';

export default class Comment extends React.Component {
  render() {
    const { comment } = this.props;
    const { author, body, date } = comment;

    return (
      <div>
        <h5>{author}</h5>
        <p>{body}</p>
        <p><small>{date}</small></p>
      </div>
    )
  }
}

