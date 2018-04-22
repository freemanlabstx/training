import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';

const Home = () => <h1>Welcome to my website</h1>;
const About = () => <h1>About this website</h1>;
const Help = () => <h1>Need help? Email us at email@provider.com</h1>;

// Two things need to be done in this component:
//
// First, you must create the <Link>s to the correct components:
//   - Home, at the path "/"
//   - About, at the path "/about"
//   - Help, at the path "/help"
//
// Add each <Link> inside of a <li> component.
//
// Second, you need to define the <Route>s themselves, for each
// component above. To do this, use the <Route> component,
// passing a "path" string prop, and a component prop
// (e.g. component={MyComponent}).
//
// Additionally, the Home route definition should set the
// "exact" prop to true, in order to exactly match the root URL.
// To pass a "true" bool as a prop, you can use a short-hand -
// below, I'll set boolProp to true:
//
//   <MyComponent boolProp />
//
class Application extends React.Component {
  render() {
    return <div />;
  }
}

const root = document.getElementById('root');

// This application variable currently just contains
// <Application>. In order to use react-router, you should
// wrap it inside of a BrowserRouter component. For example:
//
//   <ComponentA>
//     <ComponentB>
//   </ComponentA>
//
const application = <Application />;

if (root) {
  ReactDOM.render(application, root);
}

export default application;
