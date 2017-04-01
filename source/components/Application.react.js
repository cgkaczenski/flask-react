import Collection from './Collection.react';
import React from 'react';
import Tensorflow from './Tensorflow.react';

class Application extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 text-center">
          	<Collection />
          	
          </div>
          <div className="col-md-8">
          	<Tensorflow />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Application;