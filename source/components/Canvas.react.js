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
    this.canvas.width = 448;
    this.canvas.height = 448;
    this.ctx = this.canvas.getContext('2d');
    this.initialize();
  }

  initialize() {
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.lineWidth = 1;
    this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
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

    var img = new Image();
    img.onload = () => {
      var inputs = [];
      var context = document.createElement('canvas').getContext('2d');
      context.drawImage(img, 0, 0, img.width, img.height, 0, 0, 28, 28);
      var data = context.getImageData(0, 0, 28, 28).data;

      for (var i = 0; i < 28; i++) {
        for (var j = 0; j < 28; j++) {
          var n = 4 * (i * 28 + j);
          inputs[i * 28 + j] = (data[n + 0] + data[n + 1] + data[n + 2]) / 3;
        }
      }
      
      axios.post('/canvas', {
        data: inputs
      })
      .then(function (response) {
        var text = response.data.result;
        console.log(text);
      })
      .catch(function (error) {
        console.log(error);
      });
    };
    img.src = this.canvas.toDataURL();
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