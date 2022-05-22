import React from "react";
import "./card-style.css";
import {
 
    Row,Col,
  } from "react-bootstrap";
const Card = (props) => {

    const { 
        Image="",
        Title ="",
        Des="",
        MRR="",
        Members="",
} = props;

  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img
          className="card-img-top"
          src={Image}
          width="200px"
          height="200px"
          alt="pink pineapple"
        />
      </div>
      <div className="card-body text-white">
        <h4 className="card-title">{Title}</h4>
        <p className="card-text text-white">
{Des}        </p>
        <Row><Col><p><b>
          {Members} <i className="fas fa-users users m-1" ></i>
          </b> </p> </Col> 
          <Col>
          <p><b>
          {MRR} <i className="fas fa-coins coins m-2" ></i>
          </b> </p> 
          </Col> 
          </Row>
        <a href="#" className="btn btn-primary">
          Join
        </a>
      </div>
    </div>
  );
};

export default Card;
