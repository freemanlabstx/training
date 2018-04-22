import React from 'react';

export default class NewPost extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
    };

    this.addPost = this.addPost.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeBody = this.changeBody.bind(this);
  }

  addPost(evt) {
    evt.preventDefault();

    const {addPost} = this.props;

    const {title, body} = this.state;

    const newPost = {
      comments: [],
      postDate: new Date().toString(),
      postTitle: title,
      postContent: body,
    };

    addPost(newPost);

    this.setState({
      title: '',
      body: '',
    });
  }

  changeTitle(evt) {
    // Updating the title input should call this
    // value with the function argument `evt`, an event.
    //
    // If the text of the input is available at
    // `evt.target.value`, how would you update
    // `title` in state to that value?
  }

  changeBody(evt) {
    // Updating the body input should call this
    // value with the function argument `evt`, an event.
    //
    // If the text of the input is available at
    // `evt.target.value`, how would you update
    // `body` in state to that value?
  }

  render() {
    /* This component has two state variables:
     *   - title
     *   - body
     * Assign these to variables.
     *
     * Add the onSubmit prop to form, which should be set
     * to this.addPost.
     *
     * Two additional props should be provided to the
     * "Post Title" input:
     *   - value, which is set to the title value from state
     *   - onChange, which is set to this.changeTitle
     *
     * Two additional props should be provided to the
     * "Post Body" textarea:
     *   - value, which is set to the body value from state
     *   - onChange, which is set to this.changeBody
     */
    return (
      <form style={{padding: '2em'}}>
        <div>
          <input placeholder="Post Title" />
        </div>
        <div>
          <textarea placeholder="Post Body" />
        </div>
        <button type="submit">Add new post</button>
      </form>
    );
  }
}
