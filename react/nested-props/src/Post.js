import React from 'react';
import Comment from './Comment';

export default class Post extends React.Component {
  render() {
    // The Post component receives one prop. That prop
    // contains three pieces of data that we care about:
    //
    //   - postTitle
    //   - postContent
    //   - comments
    //
    // Assign each of these to a variable of your choice.
    // Remember that because they are _on_ the passed-in
    // prop, you'll call them in a format like:
    //   var myProp = this.props.myProp;
    //   var myField = myProp.myField;

    // Replace the h1 "Title" text with your postTitle.
    // Replace the p "Content" text with your postContent.
    // Replace the static CHANGE_ME in line 38 by mapping through your
    // comments variable, rendering a <Comment> component
    // with the prop comment. This will look somewhat like
    // the following:
    //
    //   {myArray.map((value, index) =>
    //     <Subcomponent key={index} prop={value} />
    //   )}
    return (
      <div style={{padding: '2em'}}>
        <h1>Title</h1>
        <p>Content</p>
        {CHANGE_ME.map((comment, index) => <Comment key={index} />)}
      </div>
    );
  }
}
