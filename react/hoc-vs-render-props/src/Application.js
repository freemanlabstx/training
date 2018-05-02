import React from 'react';
import ReactDOM from 'react-dom';
import Basic from './Basic'

class Application extends React.Component {
  state = null

  componentDidMount() {
    var url = 'https://bytesized-training-assets.herokuapp.com/object.json';

    fetch(url).then(resp => {
      resp.json().then(json => this.setState(json));
    });
  }

  render() {
    return <Basic {...this.state} />
  }
}

export default Application;
