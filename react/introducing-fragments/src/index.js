import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const items = 'abcdefghijklmnopqrstuvwxyz01234567890'.split('')

// In the render function of BasicComponent, render the following:
//   A 'table' element
//     With a child 'thead' element
//       With a 'tr' component
//         With a 'td' component containing the text 'Item'
//         With a 'td' component containing the text 'Index'
//
//     At the same level as 'thead', add a 'tbody' element
//       Inside of the tbody, map through the this.state.items,
//       using the function arguments 'item' and 'index', and return:
//         A 'tr' element
//           With a child component 'Columns', passing the props
//             'item' and 'index' from the map function
class BasicComponent extends React.Component {
  state = { items }
}

// Define the Columns component, which extends React.Component.
// In the render function, get 'item' and 'index' from props,
// and return:
//   A 'div' with two 'td' children elements:
//     The first `td' should render `this.props.item`,
//     and the second `td` should render `this.props.index`.
class Columns extends React.Component {
}
// Look at the output of these components in the browser.
// You should see a "header" row with "Item" and "Index",
// but each column is incorrectly rendering inside _just_
// the "Item" section of the table.
//
// This is because instead of correctly rendering the table,
// we're using a 'div' as the parent of `Columns`.
//
// To fix this, replace the opening and closing 'div' with
// React.Fragment. This should fix the 'table' row rendering.
//
// Try the shorthand React.Fragment syntax too, by replacing
// React.Fragment with a simple `<>` and `</>`.


// No changes are needed below this line.
const root = document.getElementById("root");
if (root) { ReactDOM.render(<BasicComponent />, root); }
