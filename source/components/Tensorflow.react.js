import React from 'react';
import Header from './Header.react';
import axios from 'axios';

class Tensorflow extends React.Component {
	constructor(props) {
    super(props);

    this.state = {text: []};
  }

  componentDidMount() {
    axios.get('/tensorflow')
    .then(response => {
      var text = response.data.result.slice(2,24);
      this.setState({text:text});
    })
    .catch(error => {
      console.log(error);
    });
  }

  render () {
    return (
    	<div>
    		<Header text={this.state.text}/>
    	</div>
    	);
  }
}

module.exports = Tensorflow;