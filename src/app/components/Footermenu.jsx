import React from "react";
import Link from 'next/link';
import { Container, Row, Col, Form, InputGroup, Image, Button } from 'react-bootstrap';
const Homefooter = () => {
    return (
        <footer className="footerbottombg">
            <section>
                <Container>
                    <div className="footerbox">         
                        <Row>
                            <Col xl={3} lg={4} md={4}>
                             <div className="footlogo">
                                    <Image src="assets/images/logo.png" width={100} height={57} alt="logo" className="lightthemeicon" />
                                     <Image src="assets/images/logo-dark.png" width={100} height={57} alt="logo" className="darkthemeicon" />
                                </div>
                                    <p>Copyright © 2025 Firefox.VIP. All rights reserved</p>
                                    <ul className="sociallist">
                                        <li><a href="#"><Image src="assets/images/fb.svg" width={20} height={20} alt="icons" /></a></li>
                                        <li><a href="#"><Image src="assets/images/x.svg" width={20} height={20} alt="icons" /></a></li>
                                        <li><a href="#"><Image src="assets/images/telegram.svg" width={20} height={20} alt="icons" /></a></li>
                                        <li><a href="#"><Image src="assets/images/discord.svg" width={20} height={20} alt="icons" /></a></li>
                                    </ul>
                            </Col>
                             <Col xl={9} lg={8} md={8}>
                             <div className="subscribebg d-flex align-items-center">
                                    <div><h3 className="h3">Newsletter Subscribe</h3></div>
                                    <Form.Group className="form-group mt-3">
                                        <InputGroup>
                                            <Form.Control id="subscribe" type="email" placeholder="Enter Email Address" aria-label="Username" aria-describedby="basic-addon1" />
                                            <InputGroup.Text id="subscribebtn">
                                                <Button type="button" className="btn sitebtn">Subscribe</Button>
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                </div>
                                <div className="menusec">
                                    <ul>
                                        <li><Link id="featurslink" href="/#features">Features</Link></li>
                                       <li><Link id="howitworkslink" href="/#howitworks">How it Works</Link></li>   
                                       <li><Link id="aboutuslink" href="/aboutus">About Us</Link></li>
                                       <li><Link id="faqlink" href="/#faq">FAQ</Link></li>      
                                       <li><Link id="termslink" href="/terms">Terms and conditions</Link></li>
                                         <li><Link id="privacylink" href="/privacy">Privacy Policy</Link></li>
                                       <li><Link id="contactlink" href="/contactus">Contact Us</Link></li> 
                                        <li><Link id="register" href="/signin">Sign in</Link></li>   
                                       <li><Link id="login" href="/signup">Sign up</Link></li>   
  
                                    </ul>
                                </div>
                             </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </footer>
    )
}
export default Homefooter