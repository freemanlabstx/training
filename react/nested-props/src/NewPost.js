import React from 'react';

export default class NewPost extends React.Component {
  render() {
    return (
      <form style={{padding: "2em"}}>
        <div>
          <input placeholder="Post Title" />
        </div>
        <div>
          <textarea placeholder="Post Body" />
        </div>
        <button type="submit">Add new post</button>
      </form>
    )
  }
}
