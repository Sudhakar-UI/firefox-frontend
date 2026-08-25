"use client"
import React from 'react'
import Link from 'next/link'
import { Container, Form, Table, InputGroup, Row, Col, Image, Tab, Accordion } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import Leftsidemenu from '../components/Leftsidemenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../components/ResponsiveTable';

const Referral = () => {

    return (
        <div className="pagecontent gridpagecontent innerpagegrid referralpge">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent">
                <Container className="sitecontainer">
                    {/* <h2 className="h2">Referral Program</h2> */}
                </Container>
            </div>
            <article className="gridparentbox">
                <Container className="sitecontainer">
                    <div className="panelcontentbox">
                        <div className="wlltpageblncex">
                            <div className="balanceshowts totblance d-flex align-items-center">
                                <div>
                                    <h4 className="h4 mb-1">Refer a Friend to Firefox and get reward</h4>
                                    <p>Share your referral link and get 30.00% of all payments made by those you refer</p>
                                    <Row>
                                        <Col xl={7} lg={7} md={12}>
                                            <Form className="siteformbg">
                                                <Form.Group className="form-group mb-0">
                                                    <Form.Label>Your referral code</Form.Label>
                                                    <InputGroup>
                                                        <Form.Control id='ref_code' placeholder="0xrW2V" />
                                                        <InputGroup.Text id="copy" className="cpybtn">Copy Link</InputGroup.Text>
                                                    </InputGroup>
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="text-end">
                                    <Image src="assets/images/referral.svg" alt="icon" withd={100} height={100} className="referral-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox mt-3">
                        <div className="wlltpageblncex">
                            <div className="balanceshowts totblance d-flex align-items-center">
                                <div className="d-flex align-items-center gap-5">
                                    <div>
                                        <Image src="assets/images/referralcoin.svg" alt="icon" withd={100} height={100} className="referral-coin" />
                                    </div>
                                    <div>
                                        <h5>Total received</h5>
                                        <h4 className="h4">0.00000 USDT</h4>
                                    </div>

                                </div>
                                <div className="text-end">
                                    <button type="button" id="whitelistbtn" class="btn sitebtn btn-sm btn btn-primary" fdprocessedid="3bv58m">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox mt-3">
                        <h6 className="sub-heading">How to refer your friends</h6>
                        <div className="howiting">
                            <div className="step-box">
                                <div>
                                    <h4 className="sub-heading">Step 1</h4>
                                    <p >Copy your personal referral link which is listedabove</p>
                                </div>

                                <div className="whyicon">
                                    <Image src="assets/images/invite-reflit.svg" width={100} height={100} alt="logo" className="lightthemeicon" />
                                    <Image src="assets/images/invite-ref-dark.svg" width={100} height={100} alt="logo" className="darkthemeicon" />
                                </div>


                            </div>



                            <div className="step-box">
                                <div>
                                    <h4 className="sub-heading">Step 1</h4>
                                    <p >Copy your personal referral link which is listedabove</p>
                                </div>

                                <div className="whyicon">
                                     <Image src="assets/images/earn-reflit.svg" width={100} height={100} alt="logo" className=" lightthemeicon" />
                                    <Image src="assets/images/earn-ref-dark.svg" width={100} height={100} alt="logo" className=" darkthemeicon" />
                                </div>


                            </div>
                            <div className="step-box">
                                <div>
                                    <h4 className="sub-heading">Step 1</h4>
                                    <p >Copy your personal referral link which is listedabove</p>
                                </div>

                                <div className="whyicon">
                                   <Image src="assets/images/link-reflit.svg" width={100} height={100} alt="logo" className=" lightthemeicon" />
                                    <Image src="assets/images/link-ref-dark.svg" width={100} height={100} alt="logo" className=" darkthemeicon" />
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="panelcontentbox mt-3">
                        <h2 className="heading-box pt-0 ps-2 border-0">Referrals</h2>
                        <div className="bordertablebox">
                            <SimpleBar className="table-responsive sitescroll">
                                <Table className="sitetable table-responsive-stack historytable" id="table1">
                                    <thead>
                                        <tr>
                                            <th>Referrals</th>
                                            <th>Payment, USDT</th>
                                            <th>Convert, USDT</th>
                                            <th>Total amount, USDT</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* <tr className="nodata">
                                        <td colSpan={4}>
                                            <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />No record found
                                        </td>
                                    </tr>   */}
                                        <tr>
                                            <td>John@mailinator.com</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>John@mailinator.com</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>John@mailinator.com</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>John@mailinator.com</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>John@mailinator.com</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </SimpleBar>
                            <ResponsiveTable tableId="table1" />
                        </div>
                    </div>
                    <div className="panelcontentbox mt-3">
                        <h2 className="heading-box pt-0 ps-2 border-0">Faqs</h2>
                        <Col xl={12} lg={12} md={12}>

                            <Accordion>
                                <Accordion.Item >
                                    <Accordion.Header>How do I get started with the gateway?</Accordion.Header>
                                    <Accordion.Body>
                                        Simply sign up, configure your wallet or API settings, and choose how you want to receive payments—through plugins, invoices, or custom integrations.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </div>
                </Container>
            </article>
            <Userfooter />
        </div>
    )
}

export default Referral;