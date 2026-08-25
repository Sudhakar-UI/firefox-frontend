"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Container, InputGroup, Form, Button, FormCheck,  Tooltip, OverlayTrigger, Image, Nav, Modal, NavDropdown } from "react-bootstrap";
import Homeheader from '../components/Homeheader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


const Signup = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

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
        <Container className="sign">
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
                      <h2 className="heading-title">Sign up</h2>     
                      <div className="formcontentbox mt-3">
                              <Form.Group className="form-group">
                                <Form.Label>Email Address </Form.Label>
                                <Form.Control type="text" id="email" />
                              </Form.Group>
                                  <Form.Group className="form-group">
                                    <Form.Label>Password</Form.Label>
                                    <div className="tabrightbox">
                                     <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">Password must contain at least one lowercase letter (a-z), one uppercase letter (A-Z), one number (0-9), and one special character (!, @, #, $, %, ^, &) without any spaces between the characters.</Tooltip>}><span className="t-gray"><FontAwesomeIcon icon={faInfoCircle} /></span></OverlayTrigger>
                                     </div>
                                    <InputGroup>
                                      <Form.Control type="password" id="password" />
                                      <div className="input-group-append">
                                        <InputGroup.Text><FontAwesomeIcon onClick={()=>setEye()} icon={faEye} /></InputGroup.Text>
                                      </div>
                                    </InputGroup>
                                  </Form.Group>
                                  <Form.Group className="form-group">
                                    <Form.Label>Confirm Password</Form.Label>
                                   <InputGroup>
    <Form.Control
        type={showPassword ? "text" : "password"}
    />

    <InputGroup.Text

        className="password-eye"
        style={{ cursor: "pointer" }}
        onClick={() => setShowPassword(!showPassword)}
    >
        <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
        />
    </InputGroup.Text>
</InputGroup>
                                  </Form.Group>
                                    <Form.Group className="form-group">
                                    <Form.Label>Select Country of resident</Form.Label>
                                   <Form.Select className="form-control">
                                    <option>India</option>
                                   </Form.Select>
                                  </Form.Group>
                              <Form.Group className="form-group">
                                <FormCheck type="checkbox" id="terms-agreement" label={<> I agree with <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Use</a> , <a href="/terms" target="_blank" rel="noopener noreferrer">AML Policy</a> , <a href="/terms" target="_blank" rel="noopener noreferrer">Privacy Policy</a></>} checked={isChecked} onChange={handleChange} />
                             
                                <FormCheck type="checkbox" id="terms-agreement" label="I certify that I am not a citizen or resident of the U.S" />
                              </Form.Group>
                              <div className="text-center">
                                <Button type="submit" className="btn sitebtn" id="submit">Sign Up</Button>
                      </div>
                    </div>
                    <div className="logbottomcellbox">
                      <p className="btngray">Already have an account?
                        <Link href="/signin" className="ms-1 t-blue" id="login"> Sign in </Link>
                      </p>
                    </div>
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
  );
};

export default Signup;
