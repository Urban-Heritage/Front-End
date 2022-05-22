import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

import {
    Button,
    Container,
    Row,Col,
  } from "react-bootstrap";


const Header = () => {

return(

    <div>
   <div className="jumbotron">

  <Container>
      
      <Row>
    <Col>
    <h3 >
        
Support the local cultural heritage of Miami-Dade County and obtain benefits.      
   </h3>
         
            <p className="pt-5">
              <Button variant="primary" size="lg" role="button">
                Join Urban Heritage &raquo;
              </Button>
            </p>
    </Col>
    <Col>Video</Col>
  </Row>
       
          </Container>
          </div>
    </div>
)

}


export default Header;
