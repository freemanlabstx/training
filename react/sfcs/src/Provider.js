import React from "react";

import Blog from "./Blog";

// Consider the idea of "presentational" components
// versus what is commonly referred to as a "container":
// a component that requests or manages data.
//
// For instance, a Provider component, as has begun to
// be defined below, could replace the Blog componentDidMount
// functionality, by storing all the relevant blog data in
// state, and simply passing it down to the Blog component.
//
// In doing so, the Blog component becomes another presentational
// component, like the subcomponents that it renders in its
// component tree.
//
// Let's try it! Move any data retrieving or storage - that is,
// anything related to the Blog component's state - into the
// Provider component. That includes the constructor setup,
// componentDidMount, and the destructuring inside of the
// render function.
//
// Once you've done this, make sure to go into src/index.js and
// define Provider as the "root" component for your application.
// If you don't do this, your whole app will stop working!
//
// Inside of Provider, render the Blog component and pass
// in the relevant data as props - that means everything inside
// of state. Once you've done this, you'll be able to rewrite
// every component inside of the Blog component tree as a
// stateless functional component.

export default class Provider extends React.Component {}
