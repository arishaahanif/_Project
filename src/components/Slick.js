import React, { Component } from "react";
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "react-bootstrap";
import Image from "..//images/645a26dc6fc475ab02dbc360_hazard.webp";


const sliderArray = [
    {
        image: Image,
        title: 'Hazard W.',
        text1: '100% Success Rate',
        text2: '3797 Reviews',
        text3: '6584 Finished orders',
        text4: 'Degree: Master’s',
        para: 'Competences: Managment, Accounting Marketing, International Relations',
        btn: 'About Writer',
        btn1: 'Hire Writer'


    },
    {
        image: Image,
        title: 'Hazard W.',
        text1: '100% Success Rate',
        text2: '3797 Reviews',
        text3: '6584 Finished orders',
        text4: 'Degree: Master’s',
        para: 'Competences: Managment, Accounting Marketing, International Relations',
        btn: 'About Writer',
        btn1: 'Hire Writer'


    },
    {
        image: Image,
        title: 'Hazard W.',
        text1: '100% Success Rate',
        text2: '3797 Reviews',
        text3: '6584 Finished orders',
        text4: 'Degree: Master’s',
        para: 'Competences: Managment, Accounting Marketing, International Relations',
        btn: 'About Writer',
        btn1: 'Hire Writer'


    }, {
        image: Image,
        title: 'Hazard W.',
        text1: '100% Success Rate',
        text2: '3797 Reviews',
        text3: '6584 Finished orders',
        text4: 'Degree: Master’s',
        para: 'Competences: Managment, Accounting Marketing, International Relations',
        btn: 'About Writer',
        btn1: 'Hire Writer'


    },
    {
        image: Image,
        title: 'Hazard W.',
        text1: '100% Success Rate',
        text2: '3797 Reviews',
        text3: '6584 Finished orders',
        text4: 'Degree: Master’s',
        para: 'Competences: Managment, Accounting Marketing, International Relations',
        btn: 'About Writer',
        btn1: 'Hire Writer'


    },
    {
        image: Image,
        title: 'Hazard W.',
        text1: '100% Success Rate',
        text2: '3797 Reviews',
        text3: '6584 Finished orders',
        text4: 'Degree: Master’s',
        para: 'Competences: Managment, Accounting Marketing, International Relations',
        btn: 'About Writer',
        btn1: 'Hire Writer'


    },
    {
        image: Image,
        title: 'Hazard W.',
        text1: '100% Success Rate',
        text2: '3797 Reviews',
        text3: '6584 Finished orders',
        text4: 'Degree: Master’s',
        para: 'Competences: Managment, Accounting Marketing, International Relations',
        btn: 'About Writer',
        btn1: 'Hire Writer'


    },
]



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
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="section">
         <div className="writer">
         <h2 className="team"> Our essay writers team
 </h2>
 < p className="order">
 Choose your online essay writer who will work on your order. Our professional helpers are always here to <span>assist you with "write essay for me" requests.</span>
 </p>
         </div>
                <Container>
                    <Slider {...settings}>
                        {sliderArray.map((item, index) => {
                            return (
                                <div className="main_container">
                                    <Card style={{ width: '25rem' }}>
                                        <Card.Body>
                                            <div className="card_container">
                                                <div className="card_item">
                                                    <img src={item.image}/>

                                                </div>
                                                <div className="card_item">
                                                    <Card.Title className="title">{item.title}</Card.Title>

                                                </div>

                                            </div>
                                            {/* <Card.Title>{item.title}</Card.Title> */}
                                            <div className="line">

                                            </div>
                                            <Row>
                                                <Col lg={6}>
                                                    <div className='f_container'>
                                                        <div className='color'>
                                                        </div>
                                                        <p className='free'>
                                                            {item.text1}
                                                        </p>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className='f_container'>
                                                        <div className='color'>
                                                        </div>
                                                        <p className='free'>
                                                            {item.text2}
                                                        </p>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className='f_container'>
                                                        <div className='color'>
                                                        </div>
                                                        <p className='free'>
                                                            {item.text3}
                                                        </p>
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className='f_container'>
                                                        <div className='color'>
                                                        </div>
                                                        <p className='free'>
                                                            {item.text4}
                                                        </p>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className="line">

                                            </div>
                                            <Card.Text className="para_items">
                                                {item.para}
                                            </Card.Text>
                                            <Card.Link className="item_btn" href="#">{item.btn}</Card.Link>
                                            <Card.Link className="item_btns" href="#">{item.btn1}</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )

                        })}


                    </Slider>
                </Container>
                <div className="main_view">
              <button className="view">
                View all writers
              </button>
                </div>
            </div>
            
        );
    }
}