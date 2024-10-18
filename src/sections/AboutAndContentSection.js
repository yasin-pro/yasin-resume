import React, { Component } from 'react';

// data

import Row from '../components/RowPageComponents';
import TitleAbout from '../components/TitleAboutComponents';
import ListItems from '../components/ListItemsComponents';

class AboutSection extends Component {

  render() {

    return (
      <Row>
        <TitleAbout />
        <ListItems />
      </Row>
    );
  }

}

export default AboutSection;
