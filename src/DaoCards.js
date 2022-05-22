import React from 'react';
import Card from './Card';

const DaoCards =()=>{

    return(
  <div className="main">
        <div className="container-fluid d-flex justify-content-center">
          <div className="col-md-3 p-3">
            <Card />
          </div>
          <div className="col-md-3 p-3">
            <Card />
          </div>
          <div className="col-md-3 p-3">
            <Card />
          </div>
        </div>

        </div>
    )
}


export default DaoCards;

