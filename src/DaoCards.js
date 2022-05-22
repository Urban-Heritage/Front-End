import React from 'react';
import Card from './Card';

const DaoCards =()=>{
   
  
    return(
  <div className="main">
        <div className="container-fluid d-flex justify-content-center">
          <div className="col-md-3 p-3">
              
            <Card 
            Image="https://pyxis.nymag.com/v1/imgs/bd5/d6b/db5a43a797e837d31533c32acc8c582526-miami-bull.2x.rsocial.w600.jpg"
            Title="Miami Bull" 
            Des="This masterfully crafted sculpture is a futuristic symbol of modern finance and is a precious statue that was inspired by the City of Miami." 
            Members="1M"
            MRR="$2M MRR"
            />
          </div>
          <div className="col-md-3 p-3">

            <Card 
            Image="https://images.miamiandbeaches.com/getmedia/50566e8c-dc52-4e63-9bfd-8e96363b2fb9/Freedom-Tower-from-street-1440x900.aspx?ext=.jpg"
            Title="Freedom Tower"
            Des="It is currently used as a contemporary art museum and a central office to different disciplines in the arts associated with Miami Dade College. "
            Members="600K"
            MRR="$1M MRR"
            />
          </div>
          <div className="col-md-3 p-3">

            <Card 
            Image="https://rubellmuseum.org/images/stories/RM/2019-20/RM-NW-Logo.jpg"
            Title="Rubell Museum"
            Des="Contemporary works by emerging & established artists displayed in a repurposed DEA warehouse. One of the biggest private contemporary art collection."
            Members="400K"
            MRR="$900K MRR"
            />
          </div>
        </div>

        </div>
    )
}


export default DaoCards;

