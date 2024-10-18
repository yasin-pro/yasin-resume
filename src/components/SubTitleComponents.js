import React, { Component } from 'react';
import '../styles/SubTitle.css';

class SubTitle extends Component {

  render() {
    const { subTitle } = this.props;

    return (
      <h2 className="display-1 SUBTITLEFONTSIZE mt-2">{subTitle}</h2>
    );
  }

}

export default SubTitle;
