import React from 'react';

import Header from './Header';

// Import the NewPost component from ./NewPost.
// Follow the structure of the other components in
// this section.

import Post from './Post';
import Sidebar from './Sidebar';

export default class Blog extends React.Component {
  constructor() {
    super();

    this.state = {
      blogTitle: '',
      blogAuthor: '',
      posts: [],
    };

    this.addPost = this.addPost.bind(this);
  }

  componentDidMount() {
    const url = 'https://bytesized-training-assets.herokuapp.com/blog.json';
    fetch(url).then(resp =>
      resp.json().then(json => {
        this.setState({
          blogTitle: json.blogTitle,
          blogAuthor: json.blogAuthor,
          posts: json.posts,
        });
      }),
    );
  }

  addPost(newPost) {
    const {posts} = this.state;
    const newPosts = [].concat(newPost, posts);
    this.setState({posts: newPosts});
  }

  render() {
    const {blogTitle, blogAuthor, posts} = this.state;

    /*
      Replace the "Placeholder" span by rendering the NewPost component.
      The NewPost component should also take a prop, `addPost`,
      which is set to `this.addPost`.
    */
    return (
      <div>
        <Header blogTitle={blogTitle} blogAuthor={blogAuthor} />
        <div style={{width: '100%'}}>
          <span>Placeholder</span>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{width: '75%'}}>
            {posts.map((post, index) => <Post key={index} post={post} />)}
          </div>
          <div style={{height: '100%', width: '25%'}}>
            <Sidebar posts={posts} />
          </div>
        </div>
      </div>
    );
  }
}
