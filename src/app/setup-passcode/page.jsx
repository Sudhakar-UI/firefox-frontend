"use client"
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { Container, InputGroup, Form, Button, Image, FormCheck, Nav, Modal, NavDropdown } from "react-bootstrap";
import Homeheader from '../components/Homeheader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faSortDown } from '@fortawesome/free-solid-svg-icons';


const Signin = () => {
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
											<h2 className="heading-title">Set Up Password</h2>
											<div className="formcontentbox mt-3">
												<Form.Group className="form-group">
													<Form.Label>Email Address </Form.Label>
													<Form.Control
														type="text"
														id="email"
														placeholder="Enter your email address"
														disabled
													/>
												</Form.Group>
												<Form.Group className="form-group">
													<Form.Label>Password</Form.Label>
													<InputGroup>
														<Form.Control type="text" id="password" />
														<div className="input-group-append">
															<InputGroup.Text> <FontAwesomeIcon icon={faEye} /> </InputGroup.Text>
														</div>
													</InputGroup>
												</Form.Group>
												<Form.Group className="form-group">
													<Form.Label>Confirm Password</Form.Label>
													<InputGroup>
														<Form.Control type="text" id="confirmpassword" />
														<div className="input-group-append">
															<InputGroup.Text> <FontAwesomeIcon icon={faEye} /> </InputGroup.Text>
														</div>
													</InputGroup>
												</Form.Group>
													<Form.Group className="form-group">
															<p className="btngray text-start"> <Link href="/forgot" className="t-blue" id="reset">Forgot your password?</Link> </p>
													</Form.Group>
												<div className="text-center">
													<Button type="submit" className="sitebtn" id="submit"> Sign In </Button>
												</div>
											</div>
										</div>
										<div className="logbottomcellbox">
											<p className="btngray"> Don't have an account?<Link href="/signup" className="ms-1 t-blue" id="register"> Sign up </Link>
											</p>
										</div>
									</div>

								</div>
							</Form>
						</div>
						<div className="leftsideformbox text-center">
							<h2>Secure your account with a password</h2>
							<Image src="assets/images/setup-passcode-light.svg" className="loginiconbs lightthemeicon" width={100} height={100} alt="icon" />
							<Image src="assets/images/setup-passcode-dark.svg" className="loginiconbs darkthemeicon" width={100} height={100} alt="icon" />
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
							<Form.Control type="text" id="search" placeholder="Search Language" />
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
}

export default Signin;