import React, { Component } from 'react';

import Row from '../components/RowPageComponents';
import Title from '../components/TitleComponents';
import SubTitle from '../components/SubTitleComponents';
import Icon from '../components/IconComponents';
import ImageProfile from '../components/ImageProfileComponents';

import data from '../data.json';

class TitleSection extends Component {

  render() {

    return (
      <Row>

        <div
          className="
            col-12
          "
        >
          <div 
            className="
              d-flex 
              justify-content-center 
              align-items-center 
              w-100 flex-column
            "
          >
            <ImageProfile url={data.imageProfileUrl} />
            <Title title={data.title} />
            <SubTitle subTitle={data.subTitle} /> 
            <div
              className="col-12"
            >
              <div
                className="
                  d-flex justify-content-around
                  align-items-center w-100 mt-md-5 mt-3
                "
              >
                {
                  data.links.map(linkInfo => {
                    return (
                      <Icon 
                        title={linkInfo.title} 
                        url={linkInfo.url} 
                        svg={linkInfo.svg} 
                      />
                    );
                  })
                }
              </div>
            </div>
            
          </div>
        </div>
      </Row>
    );
  }

}

export default TitleSection;
