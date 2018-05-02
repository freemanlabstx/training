import React from 'react';
import _ from 'lodash';

// Create the omitProps higher order component:
// omitProps should be a function with two arguments,
// PassedComponent and OmitProps.
//
// The function should return a class OmitProps that extends
// React.Component. The class should have a render function that:
//   1) Has a prop variable that is set to the result of _.omit,
//      passing in this.props and omitProps as the arguments.
//   2) Renders PassedComponent, passing the entire prop object in as props to the component.
//      You can do this by using the spread operator inside of the component tag:
//        <SampleComponent {...this.state} />

// export the higher component as the default export fo this module.
