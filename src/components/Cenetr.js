import React from "react";
import Card from "react-bootstrap/Card";
import Image from "..//images/61a8c86bc3957ce096a4ce8a_Mask Group.svg";

import { Container, Row, Col } from "react-bootstrap";

import { ContactUs } from "./Form";



const Center = () => {
  return (
    <div className="main">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="main-div">
              <h1 className="essay">Essay writing service</h1>
              <h1 className="embrace">
                Embrace all aspects<span> of student life</span>
              </h1>
              <p className="academic">
                Just ask, "write an essay for me." We'll alleviate your academic
                worries<span> by connecting you with an expert writer.</span>
              </p>
              <button className="btn_1">Order now</button>
            </div>
            <Row>
              <Col lg={6} xs={6}>
                <div className="f_container">
                  <div className="color"></div>
                  <p className="free">
                    <span> 100% </span>
                    Plagiarism-free
                  </p>
                </div>
              </Col>
              <Col lg={6} xs={6}>
                <div className="f_container">
                  <div className="color"></div>
                  <p className="free">
                    <span> 24/7 </span>
                    Friendly support
                  </p>
                </div>
              </Col>
              <Col lg={6} xs={6}>
                <div className="f_container">
                  <div className="color"></div>
                  <p className="free">
                    <span> Unlimited </span>
                    revisions
                  </p>
                </div>
              </Col>
              <Col lg={6} xs={6}>
                <div className="f_container">
                  <div className="color"></div>
                  <p className="free">
                    <span> Negotiable </span>
                    price
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6} xs={12}>
            <Card>
              <Card.Img className="card_image " src={Image} alt="Card image" />
              <Card.ImgOverlay>
                <ContactUs />
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Center;
