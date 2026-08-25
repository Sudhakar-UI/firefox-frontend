"use client"
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { Container, Image, Form, Nav, Modal, NavDropdown, FormCheck, Button } from 'react-bootstrap'
import Homeheader from '../components/Homeheader';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faSortDown } from '@fortawesome/free-solid-svg-icons';


const Verify = () => {
    useEffect(() => {
        document.body.classList.add('loginbanner');
        document.body.classList.remove('userpanelpage');

        return () => {
            document.body.classList.remove("loginbanner");
            };
        });
    const [showModal1, setShowModal1] = useState(false);
    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);
    return (
    <div className="loginheadboxpage">
            <Homeheader />
           
            <section className="formbg">
                <Container>
                    <div className="formboxbg">                   
                        <div className="rightsideformbox">
                            	<div className="d-flex logotopflex align-items-center">
							<div className="formlogo">
								    <Image src="assets/images/logo.png" className="lightthemeicon" width={50} height={50} alt="icon" />
                                     <Image src="assets/images/logo-dark.png" className="darkthemeicon" width={50} height={50} alt="icon" />
								</div>
								<div className="text-center pt-3">
								 {/* <Nav.Item as={Link} href="#" onClick={handleShowModal1} id="langlink" className="notifylangicon"><span className="iconboxbg"><Image src="assets/images/langicon.svg" alt="icon" width={100} height={100} /></span>En <FontAwesomeIcon icon={faSortDown} /> </Nav.Item> */}
                                   <NavDropdown title={<div className="pull-left" id="lang">EN</div>} className="langmenu borderlangbox me-1 ms-1" id="basic-nav-dropdown">
										<NavDropdown.Item as={Link} href="/">
											<span className="langenicon"><Image src="assets/images/en.svg" alt="icon" width={100} height={100} /></span>
											English
										</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} href="/">
                                            <span className="langenicon"><Image src="assets/images/cn.svg" alt="icon" width={100} height={100} /></span>
                                            Chinese
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} href="/">
                                            <span className="langenicon"><Image src="assets/images/es.svg" alt="icon" width={100} height={100} /></span>
                                        Spanish
                                        </NavDropdown.Item>
									</NavDropdown>
								</div>
							</div>
                            <Form className="siteformbg">
                                <div className="login-form">
                                    <div className="loginformbox">
                                        <div className="logcenterbox">
                                        <h2 className="heading-title pb-3">Confirmations</h2>    
                                            <div className="formcontentbox mt-3">
                                                <Form.Group className="form-group">
                                                    <Form.Label>Enter Email Code </Form.Label>
                                                    <Form.Control name="code" type="number" id="codeinput" />
                                                </Form.Group>
                                                  <Form.Group className="form-group">
                                                    <Link href="#" className="alink" id="resend">Resend code</Link>
                                                    <p className="text-start pt-1">No code yet? Check your spam folder.</p>
                                                </Form.Group>
                                                <Form.Group className="form-group">
                                                    <Form.Label>Enter 2FA Code </Form.Label>
                                                    <Form.Control name="code" type="number" id="otpverify" />
                                                </Form.Group>
                                                <Form.Group className="form-group">
                                                    <FormCheck type="radio" id="terms-agreement" label="This device is trusted, you will not need a 2FA, code when logging in from it for 30 days." />
                                                </Form.Group>
                                                <Form.Group className="mb-3 text-center">
                                                    <Button className="btn sitebtn" id="submit">Confirm</Button>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="logbottomcellbox">
                                            <p className="btngray mb-0"><Link href="/signin" className="t-blue" id="login">Back to Signin</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                         <div className="leftsideformbox text-center">               	
                            <h2>Access your seamless crypto payment dashboard</h2>
                           <Image src="assets/images/login.svg" className="loginiconb lightthemeicon" width={50} height={50} alt="icon" />
                            <Image src="assets/images/login1.svg" className="loginiconb darkthemeicon" width={50} height={50} alt="icon" />
                        </div>
                    </div>
                </Container>
            </section>
            <Modal show={showModal1} onHide={handleCloseModal1} aria-labelledby="contained-modal-title-vcenter" centered className='modalbgt langmodalbg'>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Language</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                    <Form.Group className="mb-3">
                    <Form.Control type="text" id="search" placeholder="Search Language"/>
                    </Form.Group>
                    </Form>
                    <ul className="langslctlist">
                    <li>English</li>
                    <li className="text-center">Language 1</li>
                    <li className="text-end">Language 2</li>
                    </ul>          
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Verify
