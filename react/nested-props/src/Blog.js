import React from 'react';

import Header from './Header';
import Post from './Post';
import Sidebar from './Sidebar';

export default class Blog extends React.Component {
  constructor() {
    super()

    // A state object should be initialized with
    // the following:
    //   - blogTitle should be set to null
    //   - blogAuthor should be set to null
    //   - posts should be an empty array `[]`
 }

  componentDidMount() {
    const url = "https://bytesized-training-assets.herokuapp.com/blog.json"
    fetch(url).then(resp => resp.json().then(json => {
      this.setState({
        blogTitle: json.blogTitle,
        blogAuthor: json.blogAuthor,
        posts: json.posts
      })
    }));
  }

  render() {
    // When you've replaced CHANGE_ME later in the render
    // function, you can delete the below line.
    var CHANGE_ME;

    // The Blog component has three state values:
    //   - blogTitle
    //   - blogAuthor
    //   - posts
    // Assign each of these to a variable of your choice.

    // A number of additions need to be made to the return
    // section of the render function below.
    //
    // Header:
    //   - Pass the value of your blogTitle variable as a
    //     prop `blogTitle`.
    //   - Pass the value of your blogAuthor variable as a
    //     prop `blogAuthor`.
    // Post:
    //   - Update the value CHANGE_ME below to your posts
    //     variable. This will "loop" through the posts
    //     array and create a Post component for each post.
    //     Pass in post (value) _as_ the prop post (name) for each
    //     component.
    //       <Post name={value} />
    // Sidebar:
    //   - Pass the value of your posts variable as a prop `posts`.

    return (
      <div>
        <Header
        />
        <div style={{display: "flex"}}>
          <div style={{width: "75%"}}>
            {posts.map((post, index) =>
              <Post
                key={index}
              />
            )}
          </div>
          <div style={{height: "100%", width: "25%"}}>
            <Sidebar
            />
          </div>
        </div>
      </div>
    )
  }
}

