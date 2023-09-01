import React, { Component } from "react";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import Image from "..//images/645a26dc6fc475ab02dbc360_hazard.webp";
import Chris from "..//images/645a26dae17abab43b1434a9_cris.webp";
import Susan from "..//images/645a26dbef420772a8de17ad_susan.webp";
import Hannah from "..//images/645a26dc613941193909c2f2_hannah.webp";
import Paul from "..//images/645a26dbe17aba6db11434b3_paul.webp"
import {Rating} from './SVG'

const sliderArray = [
  {
    image: Image,
    title: "Hazard W.",
    rate: "100%",
    successRate: "Success Rate",
    number: "3797",
    review: "Reviews",
    orders: "6584",
    finishedOrders: "Finished orders",
    degree: "Degree:",
    masters: " Master’s",
    text: "Competences:",
    management:" Managment, Accounting Marketing, International Relations",
    writerBtn: "About Writer",
    hireBtn: "Hire Writer",
  },
  {
    image: Susan,
    title: "Susan M.",
    rate: "98%",
    successRate: "Success Rate",
    number: "4457 ",
    review: "Reviews",
    orders: "1148",
    finishedOrders: "Finished orders",
    degree: "Degree:",
    masters: " Master’s",
    text: "Competences:",
    management: " Business Administration, Literature, E-Commerce, Political Science",
    writerBtn: "About Writer",
    hireBtn: "Hire Writer",
  }, {
    image: Hannah,
    title: "Hannah T.",
    rate: "98%",
    successRate: "Success Rate",
    number: "3814 ",
    review: "Reviews",
    orders: "9475 ",
    finishedOrders: "Finished orders",
    degree: "Degree:",
    masters: " Master’s",
    text: "Competences:",
    management: " Nursing, Medicine, Biology, Chemistry, Physics, Commerce, Accounting",
    writerBtn: "About Writer",
    hireBtn: "Hire Writer",
  }, {
    image: Paul,
    title: "Paul T.",
    rate: "96% ",
    successRate: "Success Rate",
    number: "5964",
    review: "Reviews",
    orders: "1502",
    finishedOrders: "Finished orders",
    degree: "Degree:",
    masters: " Bachelor",
    text: "Competences:",
    management: " Medicine and Health, Liberal Arts and Humanities, Business and Finance",
    writerBtn: "About Writer",
    hireBtn: "Hire Writer",
  }, {
    image: Chris,
    title: "Chris R.",
    rate: "98%",
    successRate: "Success Rate",
    number: "1428 ",
    review: "Reviews",
    orders: "3600",
    finishedOrders: "Finished orders",
    degree: "Degree:",
    masters: " Master’s",
    text: "Competences:",
    management: " History, Sociology, Philosophy, Ethics, English Literature",
    writerBtn: "About Writer",
    hireBtn: "Hire Writer",
  
  }, {
    image: Image,
    title: "Richard H.",
    rate: "100%",
    successRate: "Success Rate",
    number: "3797",
    review: "Reviews",
    orders: "6584",
    finishedOrders: "Finished orders",
    degree: "Degree:",
    masters: " Master’s",
    text: "Competences:",
    management: " Liberal Arts and Humanities, Physical Sciences, Business and Finance",
    writerBtn: "About Writer",
    hireBtn: "Hire Writer",
  },
];

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="section">
        <div className="writer">
          <h2 className="team"> Our essay writers team</h2>
          <p className="order">
            Choose your online essay writer who will work on your order. Our
            professional helpers are always here to{" "}
            <span>assist you with "write essay for me" requests.</span>
          </p>
        </div>
        <Container>
          <Slider {...settings}>
            {sliderArray.map((item, index) => {
              return (
                <div className="main_container">
                  <Card style={{ width: "23rem" }}>
                    <Card.Body>
                      <div className="card_container">
                        <div className="card_item">
                          <img src={item.image} />
                        </div>
                        <div className="card_item">
                          <Card.Title className="title">
                            {item.title}
                          </Card.Title>
                          <div className="rating">
                            {Rating}
                          </div>
                        </div>
                      </div>
                      {/* <Card.Title>{item.title}</Card.Title> */}
                      <div className="line"></div>
                      <Row>
                        <Col lg={6} md={6} sm={6}>
                          <div className="f_container">
                            <div className="color"></div>
                            <p className="free">
                              <b>{item.rate}</b> {item.successRate}
                            </p>
                          </div>
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                          <div className="f_container">
                            <div className="color"></div>
                            <p className="free">
                              <b>{item.number}</b> {item.review}

                            </p>
                          </div>
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                          <div className="f_container">
                            <div className="color"></div>
                            <p className="free">
                              <b>{item.orders}</b> {item.finishedOrders}

                            </p>
                          </div>
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                          <div className="f_container">
                            <div className="color"></div>
                            <p className="free">
                              <b>{item.degree}</b> {item.masters}
                            </p>
                          </div>
                        </Col>
                      </Row>
                      <div className="line"></div>
                      <Card.Text className="para_items">
                        <b>{item.text}
                          </b>{item.management}</Card.Text>
                      {/* <Card.Link className="item_btn" href="#">
                        {item.writerBtn}
                      </Card.Link>
                      <Card.Link className="item_btns" href="#">
                        <button>
                        {item.hireBtn}

                        </button>
                      </Card.Link> */}
                      <div className= "btn_container">
                        <div className="writer_btn">
                          <button className="item_btn">
                            {item.writerBtn}
                          </button>
                        </div>
                        <div className=" writer_btn">
                          <button className="item_btns">
                            {item.writerBtn}
                          </button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </Slider>
        </Container>
        <div className="main_view">
          <button className="view">View all writers</button>
        </div>
      </div>
    );
  }
}
