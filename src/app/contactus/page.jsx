"use client"
import React, { useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';

const Contactus = () => {
     useEffect(() => {
              document.body.classList.add('innerpagebg');
          
              return () => {
                document.body.classList.remove("innerpagebg");
                };
            });
    return (
        <>
           <article className="innerpage">
            <Homeheader /> 
              <section className="innercontentpage">
                            <Container>
                            <h2 className="heading-title text-center pb-0 mb-0">Contact Us</h2>
                            </Container>
                        </section>        
            <div className="innerpages">
                <Container>
                <div className="mx-auto contactfrm">
                            <Form className="siteformbg">
                                <Row>
                                    <Col lg={6} md={6} xs={12}>
                                        <Form.Group className="form-group">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control id="name" className="form-control" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} xs={12}>
                                        <Form.Group className="form-group">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control id="email" className="form-control" />
                                        </Form.Group>
                                    </Col>
                                </Row>   
                                <Row>
                                    <Col lg={6} md={6} xs={12}>
                                        <Form.Group className="form-group">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control id="subject" className="form-control" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} xs={12}>
                                        <Form.Group className="form-group">
                                            <Form.Label>Phone</Form.Label>
                                            <Form.Control id="phone" className="form-control" />
                                        </Form.Group>
                                    </Col>
                                </Row>      
                                <Row>
                                    <Col lg={12} md={12} xs={12}>
                                        <Form.Group className="form-group">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control as="textarea" id="message" rows={5} className="form-control" />
                                        </Form.Group>
                                    </Col>                          
                                </Row>  
                                <Form.Group className="form-group text-center mb-0">
                                    <Button type="submit" id="submit" className="btn sitebtn">Send Message</Button>
                                </Form.Group>             
                            </Form>
                    </div>
                </Container>
            </div>
            </article>
            <Homefooter />
           
        </>
    )
}

export default Contactus