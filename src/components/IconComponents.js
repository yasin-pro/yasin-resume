import React, { Component } from 'react';
import '../styles/Icon.css';

class Icon extends Component {

  render() {
    const { title, url, svg } = this.props;

    return (
      <a href={url} className="text-decoration-none">
        <i className={`${svg} ICONSIZE`}></i>
        <h1 className="ICONTITLE">{title}</h1>
      </a>
    );
  }

}

export default Icon;
