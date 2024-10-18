import React, { Component } from 'react';

import data from '../data.json';

import '../styles/ListItems.css';

class ListItems extends Component {

  render() {

    return (

      <div
        className="col-12 col-md-6"
      >
        <div 
          className="
            d-flex 
            justify-content-center 
            align-items-center 
            w-100 flex-column
          "
        >
          <ul className="w-100 list-unstyled">

            {
              data.sections["0"].items.map(itemInfo=>{
                return (
                  <li 
                    className="
                      flex-column align-items-start mb-3 mb-md-5
                      d-flex w-100 justify-content-center 
                    "
                  >
                    <h6 className="LISTITEMTITLE m-0 p-0 mb-3 mb-md-5">
                      {itemInfo.title} :
                    </h6> 

                    {
                      itemInfo.contents.map(item=>{
                        return (
                          <p className="LISTITEMPARAPH m-0 p-0 mb-2 mb-md-4">
                            {item}
                          </p>
                        );
                      })
                    }
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }

}

export default ListItems;
