import React from 'react';
import ReactDOM from 'react-dom';

import omitProps from './omitProps'

// Import the PropsOmitted component from './PropsOmitted'

class Basic extends React.Component {
  render() {
    // Replace the code inside of the return part of render
    // with PropsOmitted, using render props-style:
    //   1) Pass a prop 'omitted', which is an array. It should have
    //      one item: 'dataRetrieved'.
    //   2) Pass a render prop. It should be a function with one argument,
    //      props, that returns:
    //        - An h1 with the text of your 'class' prop
    //        - An h2 with the text of your 'exercise' prop
    //        - An h3 with the text of your 'dataRetrieved' prop,
    //          rendered _if_ this.props.dataRetrieved exists.
    //
    //      (Note that this is identical code to what exists now: you can
    //      simply put it inside the render function.)
    //   3) Finally, make sure to pass _all_ of your props into PropsOmitted.
    //      You can do this with the spread operator:
    //        <SampleComponent {...this.props} />
    return (
      <div>
        <h1>{this.props.class}</h1>
        <h2>{this.props.exercise}</h2>
        <h3>{this.props.dataRetrieved && 'Data loaded!'}</h3>
      </div>
    );
  }
}

// Replace this export with a simple default export of the Basic component.
export default omitProps(Basic, ['dataRetrieved']);
