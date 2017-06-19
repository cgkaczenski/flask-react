import Canvas from './Canvas.react';
import React from 'react';
import MediaQuery from 'react-responsive';

class Application extends React.Component {

  render() {
    return (
      <div>
        <MediaQuery minWidth={700}>
          {(matches) => {
            if (matches) {
              return <div><Canvas height="700" width="700"/></div>;
            } else {
              return <div></div>;
            }
          }}
        </MediaQuery>
        <MediaQuery maxWidth={700} minWidth={500}>
          {(matches) => {
            if (matches) {
              return <div><Canvas height="450" width="450"/></div>;
            } else {
              return <div></div>;
            }
          }}
        </MediaQuery>
        <MediaQuery maxWidth={500}>
          {(matches) => {
            if (matches) {
              return <div><Canvas height="250" width="250"/></div>;
            } else {
              return <div></div>;
            }
          }}
        </MediaQuery>
      </div>
    );
  }
}

module.exports = Application;