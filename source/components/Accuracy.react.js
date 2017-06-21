import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

class Accuracy extends React.Component {
	constructor(props) {
    super(props);
    
    this.state = {count: 100, correct:79, 
     letterCorrect:[7,7,10,9,8,8,8,5,9,8],
     letterCount:Array(10).fill(10)};

    this.handleCorrect = this.handleCorrect.bind(this);
    this.handleIncorrect = this.handleIncorrect.bind(this);
  }

  handleCorrect(id){
    if (this.props.result != 10){
      const letter = this.state.letterCount.slice();
      letter[id] += 1;
      this.setState({letterCount: letter});

      const correct = this.state.letterCorrect.slice();
      correct[id] += 1;
      this.setState({letterCorrect: correct});

      this.setState({count: this.state.count + 1});
      this.setState({correct: this.state.correct + 1});

      this.setState({correct: this.state.correct + 1});

      this.props.onClick();
    }
  }

  handleIncorrect(id){
    if (this.props.result != 10) {
      this.setState({count: this.state.count + 1});

      const letter = this.state.letterCount.slice();
      letter[id] += 1;
      this.setState({letterCount: letter});

      this.props.onClick();
    }
  }

  render () {

    return (
    	<div>
         <h4 block>Total Accuracy: {((this.state.correct/this.state.count)*100.0).toPrecision(4)} %</h4>
         <h4>Number of Trials: {this.state.count}</h4>
         <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Letter</th>
              <th>A</th>
              <th>B</th>
              <th>C</th>
              <th>D</th>
              <th>E</th>
              <th>F</th>
              <th>G</th>
              <th>H</th>
              <th>I</th>
              <th>J</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Accuracy</td>
              <td>{(this.state.letterCorrect[0]/this.state.letterCount[0]).toPrecision(2)}</td>
              <td>{(this.state.letterCorrect[1]/this.state.letterCount[1]).toPrecision(2)}</td>
              <td>{(this.state.letterCorrect[2]/this.state.letterCount[2]).toPrecision(2)}</td>
              <td>{(this.state.letterCorrect[3]/this.state.letterCount[3]).toPrecision(2)}</td>
              <td>{(this.state.letterCorrect[4]/this.state.letterCount[4]).toPrecision(2)}</td>
              <td>{(this.state.letterCorrect[5]/this.state.letterCount[5]).toPrecision(2)}</td>
              <td>{(this.state.letterCorrect[6]/this.state.letterCount[6]).toPrecision(2)}</td>
              <td>{(this.state.letterCorrect[7]/this.state.letterCount[7]).toPrecision(2)}</td>
              <td>{(this.state.letterCorrect[8]/this.state.letterCount[8]).toPrecision(2)}</td>
              <td>{(this.state.letterCorrect[9]/this.state.letterCount[9]).toPrecision(2)}</td>
            </tr>
          </tbody>
         </Table>

         <ButtonGroup vertical>
          <Button bsStyle="success" bsSize="large" onClick={() => this.handleCorrect(this.props.result)}>Correct</Button>
          <Button bsStyle="danger" onClick={() => this.handleIncorrect(0)}>A - Incorrect</Button>
          <Button bsStyle="danger" onClick={() => this.handleIncorrect(1)}>B - Incorrect</Button>
          <Button bsStyle="danger" onClick={() => this.handleIncorrect(2)}>C - Incorrect</Button>
          <Button bsStyle="danger" onClick={() => this.handleIncorrect(3)}>D - Incorrect</Button>
          <Button bsStyle="danger" onClick={() => this.handleIncorrect(4)}>E - Incorrect</Button>
          <Button bsStyle="danger" onClick={() => this.handleIncorrect(5)}>F - Incorrect</Button>
          <Button bsStyle="danger" onClick={() => this.handleIncorrect(6)}>G - Incorrect</Button>
          <Button bsStyle="danger" onClick={() => this.handleIncorrect(7)}>H - Incorrect</Button>
          <Button bsStyle="danger" onClick={() => this.handleIncorrect(8)}>I - Incorrect</Button>
          <Button bsStyle="danger" onClick={() => this.handleIncorrect(9)}>J - Incorrect</Button>
         </ButtonGroup>
    	</div>
    	);
  }
  }
module.exports = Accuracy;