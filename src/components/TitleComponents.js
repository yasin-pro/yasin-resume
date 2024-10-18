import React, { Component } from 'react';
import '../styles/Title.css';

class Title extends Component {

  render() {
    const { title } = this.props;

    return (
      <h1 className="display-1 TITLEFONTSIZE mt-3">{title}</h1>
    );
  }

}

export default Title;
