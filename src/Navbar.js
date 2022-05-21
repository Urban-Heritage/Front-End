import './NavBar.css';

import React, { useState } from "react";

import Logo from './UH.png';
 


const Navbar= ()=> {


    const [open, setOpen] = useState("false");

    return (
      <div>
      <nav>
        <div className="logo">
            <img src={Logo} alt="logo" width="250" height="100"/>
           </div>
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
          <button type="button" className="btn btn-primary">Connect Your Wallet</button>
          </li>
        </ul>
        <i className="fas fa-bars burger" onClick={() => setOpen(!open)}></i>
      </nav>
 
      </div>
    );
  }
  
  export default Navbar;
  