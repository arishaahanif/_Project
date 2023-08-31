import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from "..//images/61a8c86bc3957ce096a4ce8a_Mask Group.svg";
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';



import { Container, Row, Col } from "react-bootstrap"
const Center = () => {
  return (
    <div className='main'>
      <Container>
        <Row>
          <Col lg={6}>
            <h1 className='essay'>Essay writing service</h1>
            <h1 className='embrace'>
              Embrace all aspects<span>
                of student life</span>
            </h1>
            <p className='academic'>
              Just ask, "write an essay for me." We'll alleviate your academic worries<span> by connecting you with an expert writer.</span>
            </p>
            <button className='btn_1'>Order now</button>
            <Row>
              <Col lg={6}>
                <div className='f_container'>
                  <div className='color'>
                  </div>
                  <p className='free'>
                    <span> 100% </span>
                    Plagiarism-free
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <div className='f_container'>
                  <div className='color'>
                  </div>
                  <p className='free'>
                    <span> 24/7  </span>
                    Friendly support
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <div className='f_container'>
                  <div className='color'>
                  </div>
                  <p className='free'>
                    <span> Unlimited  </span>
                    revisions
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <div className='f_container'>
                  <div className='color'>
                  </div>
                  <p className='free'>
                    <span> Negotiable  </span>
                    price
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Card>
              <Card.Img className="card_image " src={Image} alt="Card image" />
              <Card.ImgOverlay>
                <form className='form'>
                  <h3 className='price'>Calculate the price</h3>
                  <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                      <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>

                  </Nav>
                  <Form.Select aria-label="Default select example">
                    <option>PowerPoint presentation with...</option>
                    <option value="1">Admission essay</option>
                    <option value="2">Annotated bibliography</option>
                    <option value="3">Article review</option>
                  </Form.Select>
                  <Row>
                    <Col lg={6}>
                      <Form.Select aria-label="Default select example">
                        <option>University</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Col>
                    <Col lg={6}>
                      <Form.Select aria-label="Default select example">
                        <option>2 weeks</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                    <Form className='default'>
                        {['radio'].map((type) => (
                          <div key={`inline-${type}`} className="mb-3">               
                       <Form.Check

                            inline
                            label="Double spaces"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                          </div>
                        ))}
                      </Form>
                    </Col>
                    <Col lg={6}>
                      <Form className='default'>
                        {['radio'].map((type) => (
                          <div key={`inline-${type}`} className="mb-3">               
                       <Form.Check

                            inline
                            label="Single spaces"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                          </div>
                        ))}
                      </Form>
                    </Col>
                  </Row>
                  <p className='dollar'>$10</p>
                  <button className='btn_2'>Write My Paper</button>

                </form>
              </Card.ImgOverlay>


            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  )

};

export default Center;


