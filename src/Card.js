import React from "react";
import "./card-style.css";
import {
 
    Row,Col,
  } from "react-bootstrap";
const Card = (props) => {

    const { 
        CardImage ='',
        Title='',
        Des='',
        Members='',
        MRR='',
} = props;

  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img
          className="card-img-top"
          src="https://pyxis.nymag.com/v1/imgs/bd5/d6b/db5a43a797e837d31533c32acc8c582526-miami-bull.2x.rsocial.w600.jpg"
          alt="pink pineapple"
        />
      </div>
      <div className="card-body text-white">
        <h4 className="card-title">Miami Bull</h4>
        <p className="card-text text-white">
        This masterfully crafted sculpture is a futuristic symbol of modern finance and is a precious statue that was inspired by the City of Miami.
        </p>
        <Row><Col><p><b>
          4M Members <i className="fas fa-users users m-1" ></i>
          </b> </p> </Col> 
          <Col>
          <p><b>
        $1M  MRR <i className="fas fa-coins coins m-2" ></i>
          </b> </p> 
          </Col> 
          </Row>
        <a href="#" className="btn btn-outline-success">
          Join
        </a>
      </div>
    </div>
  );
};

export default Card;
