
"use client"
import React, { useState } from 'react'
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import Link from 'next/link';
import { Container, Form, Image, Table, InputGroup, Button, Badge, Row, Col, FormCheck, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode, faCopy } from '@fortawesome/free-solid-svg-icons';
import Leftsidemenu from '../components/Leftsidemenu';

const Merchantrequest = () => {

  return (
    <div className="pagecontent gridpagecontent innerpagegrid">
      <div className="backgroundoverlay" id="backgroundoverlay"></div>
      <Userheader />
      <Leftsidemenu />
        <div className="innerpagecontent">
            <Container className="sitecontainer">
                <h2 className="h2">API Integration</h2>
                <div className="tabrightbox">
                    <Link href="/merchantsettings" className="btn sitebtn btn-sm" id="backbtn">Back</Link>
                </div>
            </Container>
        </div>
        <article className="gridparentbox">
        <Container className="sitecontainer">  
                <div className="panelcontentbox">
               
                  <Form className="siteformbg">
                    <Row>
                        <Col xl={4} lg={7} md={7}>
                            <Form.Group className="form-group">
                                <Form.Label>Merchant ID</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text"  id="merchantid" placeholder="74c558b6-fd53-4819-9f75-72b1aa6ba1fd" />
                                    <div className="input-group-append">
                                        <InputGroup.Text id="copybtn"> <FontAwesomeIcon icon={faCopy} /> </InputGroup.Text>
                                    </div>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    </Row>
                  <ul className="listprojectstatus mt-4 mb-4">
                    <li className="progressstatus progressdone"> 
                        <div>
                            <h5>Choose type and add project URL</h5>
                            <p>Link to your website or Telegram bot</p>
                            <Form.Group className="form-group">
                                <Form.Label>Type</Form.Label>
                                <p>Once you've selected the type of project you want to submit, enter the correct project URL and name. Please note that it will not be possible to change the information you have entered.</p>
                            </Form.Group>
                            <Form.Group className="form-group">
                                <FormCheck type="radio" id="terms-agreement" label="Telegram Bot" />
                                   <FormCheck type="radio" id="terms-agreement" label="Website" />
                            </Form.Group>
                            <Row>
                                <Col lg={4} md={5}>
                                   <Form.Group className="form-group">
                                        <Form.Label>Project URL</Form.Label>
                                        <Form.Control placeholder="" id='projecturl' />
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={5}>
                                    <Form.Group className="form-group">
                                        <Form.Label>Project Name</Form.Label>
                                        <Form.Control placeholder="" id='projectname' />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="form-group">
                              <Button className="sitebtn" id="submitbtn">Submit</Button>
                            </Form.Group>
                        </div>
                    </li>
                     <li className="progressstatus">
                        <div>
                            <h5>Confirm domain</h5>
                            <p>Confirm your domain</p>
                            <Form.Group className="form-group">
                                <Form.Label>Select the method to confirm the domain</Form.Label>
                                <FormCheck type="radio" id="terms-agreement" label="Using DNS" />
                                   <FormCheck type="radio" id="terms-agreement" label="Using meta tag on the site" />
                                   <FormCheck type="radio" id="terms-agreement" label="Using an HTML file" />
                            </Form.Group>
                            <Row>
                                <Col xl={8} lg={12} md={12}>
                                  <div className="lightgraybg mb-3">
                                        <Form.Group className="form-group">
                                            <Form.Label>Step 1</Form.Label>
                                            <p>Add the following field to the DNS record of your domain in .txt format.</p>
                                            <InputGroup>
                                                <Form.Control type="text"  id="" placeholder="heleket=74c558b6" />
                                                <div className="input-group-append">
                                                    <InputGroup.Text> <FontAwesomeIcon icon={faCopy} /> </InputGroup.Text>
                                                </div>
                                            </InputGroup>
                                            <p>You can do this in the control panel of your hosting.</p>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Step 2</Form.Label>
                                            <p className='mb-0'>Check that the domain is confirmed<span> <Button className="borderbtn btn-sm ms-3">Check</Button></span></p>
                                        </Form.Group>
                                    </div>
                                </Col>
                            </Row>
                          
                            <Form.Group className="form-group">
                                <Button className="sitebtn" id="confirmbtn">Confirm</Button>
                            </Form.Group>
                        </div>
                    </li>
                  </ul>
                  </Form>
                </div>
             
           
        </Container>
        </article>
      <Userfooter />

 
    </div>
  );
}
export default Merchantrequest