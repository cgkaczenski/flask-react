import Canvas from './Canvas.react';
import React from 'react';
import MediaQuery from 'react-responsive';

class Application extends React.Component {

  render() {
    return (
      <div>
        <MediaQuery minWidth={1200}>
          {(matches) => {
            if (matches) {
              return <div><Canvas height="700" width="700" lineWidth="50"/></div>;
            } else {
              return <div></div>;
            }
          }}
        </MediaQuery>
        <MediaQuery maxWidth={1200} minWidth={992}>
          {(matches) => {
            if (matches) {
              return <div><Canvas height="450" width="450" lineWidth="25"/></div>;
            } else {
              return <div></div>;
            }
          }}
        </MediaQuery>
        <MediaQuery maxWidth={992} minWidth={768}>
          {(matches) => {
            if (matches) {
              return <div><Canvas height="350" width="350" lineWidth="20"/></div>;
            } else {
              return <div></div>;
            }
          }}
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          {(matches) => {
            if (matches) {
              return <div><Canvas height="250" width="250" lineWidth="15"/></div>;
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