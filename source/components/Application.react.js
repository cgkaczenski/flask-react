import React from 'react';
import Collection from './Collection.react';

class Application extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 text-center">
          	<Collection />

          </div>
        </div>
      </div>
    );
  }
}

module.exports = Application;