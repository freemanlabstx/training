import React from 'react';
import Loading from './Loading'
import 'whatwg-fetch';

class Networked extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      string: 'n/a'
    }
  }

  componentDidMount() {
    this.setState({ loading: true });

    // In this code from a previous exercise, we make a request
    // on the network to a different route. Of all the code in this
    // example, this is the most likely to "blow up". We'll come back and
    // look at this again later.
    var url = 'https://bytesized-training-assets.herokuapp.com/exercise.json';

    // If you've come back from index.js and are ready to simulate a failure,
    // simply add a thrown JavaScript error at the beginning of componentDidMount.
    //   e.g. throw new Error('Something went wrong!')
    //
    // Now return to index.js.

    fetch(url).then(resp => {
      resp.json().then(json => {
        this.setState({
          loading: false,
          string: json.string
        })
      });
    });
  }

  render() {
    const { loading, string } = this.state;
    const loadingOrString = loading ? <Loading /> : <h3>{string}</h3>;
    return <div>{loadingOrString}</div>;
  }
}

export default Networked
