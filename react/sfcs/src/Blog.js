import React from "react";

import Header from "./Header";
import Post from "./Post";
import Sidebar from "./Sidebar";

// Make sure to visit src/Provider.js at the beginning
// of this exercise!
//
// Once you've done that, we can come back and rewrite the
// Blog component as a stateless functional component, or
// SFC. SFCs are written as arrow functions, with a single
// argument: a props object. The function should return
// HTML, similar to the render function in a class-based
// component. For instance:
//
//   const MyComponent = props => <h1>Hello!</h1>
//
// Remember that a props object is a great opportunity
// to use destructuring. For instance, given a props object
// with a key count:
//
//   const MyComponent = ({ count }) =>
//     <h1>Count is {count}!</h1>
//
// Given the data passed into the Blog component by its new
// parent Provider, use destructuring to replace any previous
// references to blogTitle, blogAuthor, and posts from state,
// inside of your SFC.
//
// Once you've done this, proceed to each component and update
// it to an SFC as well.
export default class Blog extends React.Component {
  constructor() {
    super();
    this.setState({
      blogTitle: null,
      blogAuthor: null,
      posts: []
    });
  }

  componentDidMount() {
    const url = "https://bytesized-training-assets.herokuapp.com/blog.json";
    fetch(url).then(resp =>
      resp.json().then(json => {
        this.setState({
          blogTitle: json.blogTitle,
          blogAuthor: json.blogAuthor,
          posts: json.posts
        });
      })
    );
  }

  render() {
    const { blogTitle, blogAuthor, posts } = this.state;

    return (
      <div>
        <Header blogTitle={blogTitle} blogAuthor={blogAuthor} />
        <div style={{ display: "flex" }}>
          <div style={{ width: "75%" }}>
            {posts.map((item, index) => (
              <Post key={index} post={item} />
            ))}
          </div>
          <div style={{ height: "100%", width: "25%" }}>
            <Sidebar posts={posts} />
          </div>
        </div>
      </div>
    );
  }
}
