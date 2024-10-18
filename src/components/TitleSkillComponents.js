import React, { Component } from 'react';
import '../styles/TitleSkill.css';

class TitleSkill extends Component {

  render() {
    const { title, content } = this.props;

    return (

      <div
        className="col-12"
      >
        <div 
          className="
            d-flex 
            justify-content-center 
            w-100 flex-column align-items-center
          "
        >
         <h6 className="m-0 p-0 TITLEABOUT mb-md-3">
           {title}
         </h6>
         <p className="m-0 p-0 PARAPHABOUT mb-5 mb-md-0">
           {content}
         </p>
        </div>
      </div>

      
    );
  }

}

export default TitleSkill;
