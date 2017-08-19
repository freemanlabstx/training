import React from 'react';

import faker from 'faker';

import Header from './Header';
import NewPost from './NewPost';
import Post from './Post';
import Sidebar from './Sidebar';

const generateComment = () => { return {
  commentBody: faker.lorem.paragraph(),
  commentAuthor: faker.fake("{{name.firstName}} {{name.lastName}}"),
  postDate: new Date(),
}}

const generatePost = (title, content) => { return {
  postTitle: title || faker.lorem.words(3),
  postDate: new Date(),
  postContent: content || faker.lorem.paragraphs(3),
  comments: [generateComment(), generateComment()]
}}

const postsState = [generatePost(), generatePost(), generatePost()]

const appState = {
  blogTitle: "My Cool Blog",
  blogAuthor: "Author Name",
  posts: postsState
}

export default class Blog extends React.Component {
  constructor() {
    super();
    this.state = appState;
    this.addPost = this.addPost.bind(this);
  }

  addPost(title, body) {
    const { posts } = this.state;
    const newPosts = posts.concat(generatePost(title, body))
    this.setState({ posts: newPosts });
  }

  render() {
    const { blogTitle, blogAuthor, posts } = this.state;

    return (
      <div>
        <Header
          author={blogAuthor}
          title={blogTitle}
        />
        <div style={{display: "flex"}}>
          <div style={{width: "75%"}}>
            {posts.map(post =>
              <Post
                key={post.postTitle}
                post={post}
              />
            )}
            <NewPost addPost={this.addPost} />
          </div>
          <div style={{height: "100%", width: "25%"}}>
            <Sidebar
              posts={posts}
            />
          </div>
        </div>
      </div>
    )
  }
}

