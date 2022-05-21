import './NavBar.css';

import React, { useState } from "react";


 


const Navbar= ()=> {


    const [open, setOpen] = useState("false");

    return (
      <div>
      <nav>
        <div className="logo">Urban Heritage</div>
        <ul className="nav-links" style={{transform: open ? "translateX(0px)" : ""}}>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Proposals</a>
          </li>
          <li>
            <a>Who We are</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Connect Your Wallet</a>
          </li>
        </ul>
        <i className="fas fa-bars burger" onClick={() => setOpen(!open)}></i>
      </nav>
 
      </div>
    );
  }
  
  export default Navbar;
  