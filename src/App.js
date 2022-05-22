import React from 'react';
import './App.css';
import NavBar  from './Navbar';
import Header  from './Header';
import DaoCards  from './DaoCards';

const App= ()=> {
  return (
    <div className="App">
   
          <NavBar />  
          <Header className="App-header"/>  
          <DaoCards />
     
    
    </div>
  );
}

export default App;
