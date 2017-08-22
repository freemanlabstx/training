import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './bootstrap.css';

class MyHTMLComponent extends React.Component {
  render() {
    return (
      <div />
    )
  }
}

ReactDOM.render(<MyHTMLComponent />, document.getElementById('root'));
registerServiceWorker();
