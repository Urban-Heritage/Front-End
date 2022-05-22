import React, { useState, useEffect } from "react";
import './App.css';
import NavBar  from './Navbar';
import Header  from './Header';
import DaoCards  from './DaoCards';
import Footer  from './Footer';
import Proposal from "./pages/Proposal";
import SecondProposal from "./pages/SecondProposal";
import Events from "./Events";

const App= ()=> {

  let [things, setThings] = useState({ features: [] });

  const [url, setUrl] = useState(
    "https://services1.arcgis.com/CvuPhqcTQpZPT9qY/arcgis/rest/services/City_Parks/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
  );

  const fetchApi = () => {
    fetch(url)
      .then((result) => result.json())
      .then((data) => setThings(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchApi();
  }, [url]);

  return (

   
   <div className="App bg-all">
   
   <NavBar />  
   <Header className="App-header"/>  
   <DaoCards />
          <Proposal/>
          <SecondProposal/>
          <Events/>
     <Footer/>
    
    </div>
  );
}

export default App;
