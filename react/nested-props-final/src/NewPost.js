import React from 'react';

export default class NewPost extends React.Component {
  constructor() {
    super()

    this.state = {
      title: "",
      body: ""
    }

    this.onSubmit = this.onSubmit.bind(this);

    this.updateBody = this.updateBody.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  updateTitle(evt) {
    this.setState({ title: evt.target.value });
  }

  updateBody(evt) {
    this.setState({ body: evt.target.value });
  }

  onSubmit(evt) {
    evt.preventDefault();
    const { title, body } = this.state;
    this.props.addPost(title, body);

    this.setState({ title: "", body: "" });
  }

  render() {
    const { title, body } = this.state;
    return (
      <form onSubmit={this.onSubmit} style={{padding: "2em"}}>
        <div>
          <input placeholder="Post Title" onChange={this.updateTitle} value={title} />
        </div>
        <div>
          <textarea placeholder="Post Body" onChange={this.updateBody} value={body} />
        </div>
        <button type="submit">Add new post</button>
      </form>
    )
  }
}
