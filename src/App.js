import React from 'react';
import './App.css';
import NavBar  from './Navbar';
import Header  from './Header';
import DaoCards  from './DaoCards';
import Footer from './Footer'
import Proposal from './Proposal';

const App= ()=> {
  return (
    <div className="App">
   
          <NavBar />  
          <Header className="App-header"/>  
          <DaoCards />
          <Proposal/>
          <Footer/>
         
    
    </div>
  );
}

export default App;
