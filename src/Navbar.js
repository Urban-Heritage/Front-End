import './NavBar.css';

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
            <a> <b>Projects</b></a>
          </li>

          <li>
            <a>
                <b>Proposals</b></a>
          </li>

          <li>
            <a><b>Who We Are</b></a>
          </li>

          <li>
            <a><b>Blog</b></a>
          </li>

          <li>
          <button type="button" className="btn btn-primary">
              <b> Connect Your Wallet</b></button>
          </li>
        </ul>
        <i className="fas fa-bars burger" onClick={() => setOpen(!open)}></i>
      </nav>
 
      </div>
    );
  }
  
  export default Navbar;
  