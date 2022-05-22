import React from 'react';
import Logo from './UH.png';

import {
    Container,
    Row,Col,
  } from "react-bootstrap";

const Footer = () => {

return(
    <div>
    <footer>
        <Container>
        <Row>
            <Col className="text-center">
          
            <img src={Logo} alt="logo" width="250" height="100"/>

          
            </Col>
            </Row>
<Row>
<Col className="p-3">

					<a href="#" >
                                <i className="fab fa-twitter twitter"></i>
                                    </a>											
								<a href="#"> 
                                <i className="fab fa-telegram telegram"></i>

                                </a>
								<a href="#"> 
                                <i className="fab fa-github github"></i>

                                </a>
</Col>
</Row>

<Row>
            <Col className="text-center text-white">
          
<p> 	<a href="#" >Terms of Service </a>| 	<a href="#" >Privacy Policy </a>| <a href="#" >Guidelines</a></p>
<p>Copyright © 2022 Urban Heritage. All rights reserved.</p>
          
            </Col>
            </Row>
            </Container>

            </footer>

    </div>
);
}

export default Footer
