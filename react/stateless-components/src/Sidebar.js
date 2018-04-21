import React from 'react';

export default class Sidebar extends React.Component {
  render() {
    // When you have replaced CHANGE_ME later in the
    // render function, you can remove the below line.
    var CHANGE_ME;

    // The Sidebar component receives one prop that
    // you should have defined previously, in the Blog
    // component.
    //
    // Set this prop to a variable, and then "loop"
    // through it using `map`. In the map function, return
    // a <li> tag with the post title for each post. A
    // post has the format:
    //
    //   { postTitle: "Title", ... }
    //
    // To display the post title, you'll want to use
    // post.postTitle in your map function.
    //
    // You may want to look at the map call in the Blog
    // component's render function, to see a similar
    // pattern.
    //
    return (
      <div style={{background: "#eee", padding: "1em"}}>
        <h3>Recent posts</h3>
        <ul>
        </ul>
      </div>
    )
  }
}

