import React, { useEffect, useState } from 'react';

import Header from './Header';

// Import the NewPost component from ./NewPost.
// Follow the structure of the other components in
// this section.

import Post from './Post';
import Sidebar from './Sidebar';

const Blog = () => {
  const [blogTitle, setBlogTitle] = useState('')
  const [blogAuthor, setBlogAuthor] = useState('')
  const [posts, setPosts] = useState([])

  function addPost(newPost) {
    const newPosts = [].concat(newPost, posts);
    setPosts(newPosts);
  }

  useEffect(() => {
    async function getPosts() {
      const url = 'https://bytesized-training-assets.herokuapp.com/blog.json';
      fetch(url).then(resp =>
        resp.json().then(json => {
          setBlogTitle(json.blogTitle)
          setBlogAuthor(json.blogAuthor)
          setPosts(json.posts)
        }),
      );
    }

    getPosts().catch(console.error)
  }, [])

  /*
    Replace the "Placeholder" span by rendering the NewPost component.
    The NewPost component should also take a prop, `addPost`,
    which is set to `addPost`.
  */
  return (
    <div>
      <Header blogTitle={blogTitle} blogAuthor={blogAuthor} />
      <div style={{ width: '100%' }}>
        <span>Placeholder</span>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '75%' }}>
          {posts.map((post, index) => <Post key={index} post={post} />)}
        </div>
        <div style={{ height: '100%', width: '25%' }}>
          <Sidebar posts={posts} />
        </div>
      </div>
    </div>
  );
}

export default Blog