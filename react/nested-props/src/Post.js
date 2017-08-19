import React from 'react';
import Comments from './Comments';

export default class Post extends React.Component {
  render() {
    return (
      <div style={{padding: "2em"}}>
        Title
        Body
        Comments
      </div>
    );
  }
}

