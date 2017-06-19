import React from 'react';
import ReactDOM from 'react-dom';

class Accuracy extends React.Component {
	constructor(props) {
    super(props);
    
    this.initialize = this.initialize.bind(this);
  }

  componentDidMount() {
    this.initialize();
  }

  initialize() {
    
  }

  render () {

    return (
    	<div>
         <h1>Result:{this.props.result}</h1>
    	</div>
    	);
  }
}

module.exports = Accuracy;