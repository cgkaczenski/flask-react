import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';

class Accuracy extends React.Component {
	constructor(props) {
    super(props);
    
    this.state = {count: 100, correct:79};
    this.handleCorrect = this.handleCorrect.bind(this);
    this.handleIncorrect = this.handleIncorrect.bind(this);
  }

  handleCorrect(){
    this.setState({count: this.state.count + 1});
    this.setState({correct: this.state.correct + 1});
    this.props.onClick();
  }

  handleIncorrect(){
    this.setState({count: this.state.count + 1});
    this.props.onClick();
  }

  render () {

    return (
    	<div>
         <h2>Accuracy: {((this.state.correct/this.state.count)*100.0).toPrecision(4)} %</h2>
         <h3>Number of Trials: {this.state.count}</h3>
         
         <ButtonGroup vertical>
          <Button bsStyle="success" bsSize="large" onClick={this.handleCorrect}>Correct</Button>
          <Button bsStyle="danger" onClick={this.handleIncorrect}>A - Incorrect</Button>
          <Button bsStyle="danger" onClick={this.handleIncorrect}>B - Incorrect</Button>
          <Button bsStyle="danger" onClick={this.handleIncorrect}>C - Incorrect</Button>
          <Button bsStyle="danger" onClick={this.handleIncorrect}>D - Incorrect</Button>
          <Button bsStyle="danger" onClick={this.handleIncorrect}>E - Incorrect</Button>
          <Button bsStyle="danger" onClick={this.handleIncorrect}>F - Incorrect</Button>
          <Button bsStyle="danger" onClick={this.handleIncorrect}>G - Incorrect</Button>
          <Button bsStyle="danger" onClick={this.handleIncorrect}>H - Incorrect</Button>
          <Button bsStyle="danger" onClick={this.handleIncorrect}>I - Incorrect</Button>
          <Button bsStyle="danger" onClick={this.handleIncorrect}>J - Incorrect</Button>
         </ButtonGroup>
    	</div>
    	);
  }
  }
module.exports = Accuracy;