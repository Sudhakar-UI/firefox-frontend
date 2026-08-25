"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Container, Form, Table, InputGroup, Row, Col, Image, Button, Modal, Alert } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import Leftsidemenu from '../components/Leftsidemenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faInfoCircle, faCircleExclamation  } from '@fortawesome/free-solid-svg-icons';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const Api = () => {  
    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => 
        {
            setShowModal1(false);
            setShowModal2(true);
        }
    const handleShow1 = () => setShowModal1(true);

    const [showModal2, setShowModal2] = useState(false);
    const handleClose2 = () => setShowModal2(false);
    const handleShow2 = () => setShowModal2(true);
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
             <Leftsidemenu />
            <div className="innerpagecontent">
                    <Container className="sitecontainer">
                    <h2 className="h2">API</h2>
                </Container>
            </div>
                    
            <article className="gridparentbox">
                <Container className="sitecontainer">
                    <div className="panelcontentbox apikeyfbox">
                           <div className="d-flex align-items-center">
                                <div>	
                                    <h5>Payout API key</h5>
                                    <p>Generate a Payout API key to withdraw funds from your business balance to your wallet address using API requests. Note that the Payout API key is the same for all merchants</p>
                                </div>
                                <div className="text-end">
									<Button className="sitebtn" onClick={handleShow1}>Generate</Button>
								</div>
                            </div>                          
                    </div>
                     <div className="panelcontentbox mt-3 apikeyfbox">
                        <h2 className="heading-box mb-3">API Documentation</h2>
                        <p>On this page you can find out more information about the possibilities when working with the Heleket API. You can also see examples of requests and responses from the server.</p>
                        <hr/>
                          <div className="d-flex align-items-center">
                                <div>	
                                    <h5>Business</h5>
                                    <p>You can find out the basic endpoint and basic parameters when requesting the API</p>
                                </div>
                                <div className="text-end">
									<Link href="/apidoc" className="btn sitebtn">Generate</Link>
								</div>
                            </div>   
                     </div>
                </Container>
            </article>
            <Userfooter />

             <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal authtblemdlbox' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Generate Payout API Key</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <p>To generate an API key, you first need to confirm two-factor authentication</p>
                        <Form.Group className="form-group">
                            <Form.Label>Two-Factor Authentication</Form.Label>
                            <Form.Control name="code" placeholder="Enter 2FA code" id="otpverify" />
                            <small>Request code in 58 seconds</small>
                        </Form.Group>
                        <div className="">
                            <Button className="sitebtn w-100" id="confirmbtn" onClick={handleClose1}>Confirm</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

             <Modal show={showModal2} onHide={handleClose2} className='modalbgt authmodal authtblemdlbox' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Generate Payout API Key</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                         <Alert variant="info" className="securityalert">
                            <FontAwesomeIcon icon={faInfoCircle}  className="me-2" />Attention, save your API key, it will be shown to you only once
                        </Alert> 
                        <Form.Group className="form-group">
                            <Form.Label>Your API key</Form.Label>
                            <InputGroup>
                                <Form.Control name="code" placeholder="nMJG63APVN6CbSH4eNdB0MMEnyJyTCJfoHJzuKvlnaA06LDWrpzfk3tHl0iJYgx6VkbYhsyaw1ge5HiWSv9kZ8JjoV6VdKa1RCwZPJ2xZQvXRGPfQTfMNXnYW1M0jPKC" id="apikey" />
                                <div className="input-group-append">
                                    <InputGroup.Text> <FontAwesomeIcon icon={faCopy} /> </InputGroup.Text>
                                </div>
                            </InputGroup>
                        </Form.Group>
                         <div className="">
                            <Button className="sitebtn w-100" id="gotitbtn" onClick={handleClose2}>Got it</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Api;