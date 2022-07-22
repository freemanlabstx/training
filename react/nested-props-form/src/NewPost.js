import React, { useState } from 'react';

const NewPost = ({ addPost }) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  function submitPost(evt) {
    evt.preventDefault();

    const newPost = {
      comments: [],
      postDate: new Date().toString(),
      postTitle: title,
      postContent: body,
    };

    addPost(newPost);

    setTitle("")
    setBody("")
  }

  function changeTitle(evt) {
    // Updating the title input should call this
    // value with the function argument `evt`, an event.
    //
    // If the text of the input is available at
    // `evt.target.value`, how would you update
    // `title` in state to that value?
  }

  function changeBody(evt) {
    // Updating the body input should call this
    // value with the function argument `evt`, an event.
    //
    // If the text of the input is available at
    // `evt.target.value`, how would you update
    // `body` in state to that value?
  }

  /* Add the onSubmit prop to form, which should be set
   * to submitPost.
   *
   * Two additional props should be provided to the
   * "Post Title" input:
   *   - value, which is set to the title value from useState
   *   - onChange, which is set to changeTitle
   *
   * Two additional props should be provided to the
   * "Post Body" textarea:
   *   - value, which is set to the body value from useState
   *   - onChange, which is set to changeBody
   */
  return (
    <form style={{ padding: '2em' }}>
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

export default NewPost