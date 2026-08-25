"use client"
import React, { useState } from "react"
import Userheader from '../components/Userheader'
import Userfooter from '../components/Userfooter'
import { Container, Image, Button, Accordion, Badge, Table, Modal, Form, Nav } from 'react-bootstrap'
import Link from "next/link"
import Leftsidemenu from '../components/Leftsidemenu';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const Businesssettings = () => {

    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);

    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            {/* <div className="innerpagecontent">
                <Container className="sitecontainer">
                    <h2 className="h2">Business Settings</h2>
                </Container>
            </div> */}
                  <div className="innerpagecontent">
                <Container className="sitecontainer">
					<h2 className="h2">Business Settings</h2>
                     <div className="boxtabb tabrightbox">
                            <Nav className="nav nav-tabs tabbanner border-0" role="tablist">
                                <Nav.Item className="nav-item"><Nav.Link as={Link} href="/apiswhitelist" className="active">API's whitelist</Nav.Link></Nav.Item>
                                <Nav.Item className="nav-item"><Nav.Link as={Link} href="/personalsend">Auto-withdrawal</Nav.Link></Nav.Item>
                            </Nav>
                        </div>
                </Container>
            </div>
            <article className="gridparentbox">

                <Container className="sitecontainer securitypage">
                    <div className="securityinnerbox panelcontentbox mt-0">
                        <div className="faverifybox">

                            <div className="profiletablebox contentbox">
                                <div> <Image src="assets/images/apiwhite.svg" className="securityiconbox" /> </div>
                                <div>
                                    <h4>API’s whitelist</h4>
                                    <h5 className="t-gray">This is a list of IP addresses allowed to send requests to Heleket API. When the whitelist enabled, requests to API will be rejected if your API keys are from IPs not on the whitelist.</h5>
                                </div>
                                <div>
                                    <Button className="btn borderbtn btn-sm" type="button" id="whitelistlink" onClick={handleShow1}>Enable</Button>
                                </div>
                            </div>
                            <hr />
                            <div className="profiletablebox contentbox">
                                <div> <Image src="assets/images/auto.svg" className="securityiconbox" /> </div>
                                <div>
                                    <h4>Auto-withdrawal</h4>
                                    <h5 className="t-gray">All money that has been added to your business wallet will be automatically withdrawn in the manner of your choice</h5>
                                </div>
                                <div>
                                    <Button className="btn borderbtn btn-sm" type="button" id="autowithdrawlink" onClick={handleShow1}>Enable</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </article>
            <Userfooter />

            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal authtblemdlbox' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group">
                            <Form.Label>Two-Factor Authentication</Form.Label>
                            <Form.Control name="code" placeholder="Enter 2FA code" id="otpverify" />
                        </Form.Group>
                        <div className="">
                            <Button className="sitebtn w-100" id="otpsubmit">Confirm</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>


        </div>
    )
}

export default Businesssettings