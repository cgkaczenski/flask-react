import React from 'react';

class Header extends React.Component {
	constructor(props) {
    super(props);
  }

  render () {
    var headerStyle = {
      fontSize: '16px',
      fontWeight: '300',
      display: 'inline-block',
      margin: '20px 10px'};

    return (
    	<div>
    		<h2 style={headerStyle}>{this.props.text}</h2>
    	</div>
    	);
  }
}

module.exports = Header;