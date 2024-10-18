import React, { Component } from 'react';

import data from '../data.json';

import '../styles/TitleAbout.css';

class TitleAbout extends Component {

  render() {

    return (

      <div
        className="col-12 col-md-6"
      >
        <div 
          className="
            d-flex 
            justify-content-center 
            align-items-md-start
            w-100 flex-column align-items-center
          "
        >
         <h6 className="m-0 p-0 TITLEABOUT mb-md-5 mb-3">
           {data.sections["0"].title}
         </h6>
         <p className="m-0 p-0 PARAPHABOUT mb-5 mb-md-0" style={{"textAlign": "justify"}}>
           {data.sections["0"].content}
         </p>
        </div>
      </div>
    );
  }

}

export default TitleAbout;
