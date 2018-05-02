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
    // Render the Basic component, passing all of Application's state into
    // the component as props. You can do this by using the spread operator
    // inside of the component tag:
    //   <SampleComponent {...this.state} />
    return null
  }
}

export default Application;
