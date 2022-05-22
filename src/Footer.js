import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import Logo from './UH.png';
import Socialmedia from './socialmedia.jpg'

const Footer = () => {
  return (
    <div><img src={Logo} alt="logo" className="logo" />
    <div><img src={Socialmedia} className="socialmedia" /></div>
    
    
    
    
    </div>
  )
}

 export  default Footer;