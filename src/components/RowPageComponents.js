import React, { Component } from 'react';

import '../styles/Row.css';

class Row extends Component {

  render() {
    const { children } = this.props;

    return (
      <div className="ROWCLASS">
        <div className="container">
          <div className="row">
            {children}
          </div>
        </div>
      </div>
    );
  }

}

export default Row;
