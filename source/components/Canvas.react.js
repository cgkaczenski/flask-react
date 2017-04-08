import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

class Canvas extends React.Component {
	constructor(props) {
    super(props);

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  componentDidMount() {
    this.canvas = ReactDOM.findDOMNode(this.canvasRef);
    this.canvas.width = 449;
    this.canvas.height = 449;
    this.ctx = this.canvas.getContext('2d');
    this.initialize();
  }

  initialize() {
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.fillRect(0, 0, 449, 449);
    this.ctx.lineWidth = 1;
    this.ctx.strokeRect(0, 0, 449, 449);
    this.ctx.lineWidth = 0.05;
    }

  getCursorPosition(e) {
    const {top, left} = this.canvas.getBoundingClientRect();
    return {
      x: e.clientX - left,
      y: e.clientY - top
    };
  }

  onMouseDown(e) {
    var prev = this.getCursorPosition(e);
    this.prev = prev;
    this.drawing = true;
  }

  onMouseUp(e){
    this.drawing = false;

    var canvas_image = this.ctx.getImageData(0, 0, 449, 449).data;
    var data = Array.prototype.slice.call(canvas_image);

    axios.post('/canvas', {
      data: data
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onMouseMove(e) {
    if (this.drawing){
      var curr = this.getCursorPosition(e);
      this.ctx.lineWidth = 16;
      this.ctx.lineCap = 'round';
      this.ctx.beginPath();
      this.ctx.moveTo(this.prev.x, this.prev.y);
      this.ctx.lineTo(curr.x, curr.y);
      this.ctx.stroke();
      this.ctx.closePath();
      this.prev = curr;
      }  
    }

  componentWillUnmount() {
    
  }

  render () {
    return (
    	<div>
    		<p>Draw:</p>
        <canvas
         ref={(canvas) => { this.canvasRef = canvas; }}
         onMouseDown={this.onMouseDown}
         onMouseUp={this.onMouseUp}
         onMouseMove={this.onMouseMove}
         ></canvas>
    	</div>
    	);
  }
}

module.exports = Canvas;