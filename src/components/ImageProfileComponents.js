import React, { Component } from 'react';
import '../styles/ImageProfile.css';

class ImageProfile extends Component {

  render() {
    const { url } = this.props;

    return (

      <div
        className="col-12"
      >
        <div 
          className="
            d-flex 
            justify-content-center 
            align-items-center 
            w-100 flex-column
          "
        >
          <img src={url} className="PROFILEIMAGE" />
        </div>
      </div>

      
    );
  }

}

export default ImageProfile;
