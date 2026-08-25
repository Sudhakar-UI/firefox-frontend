"use client"
import React from 'react'
import Link from 'next/link'
import { Container, Form, Table, InputGroup, Row, Col, Image } from 'react-bootstrap';
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
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
             <Leftsidemenu />
            <div className="innerpagecontent">
                    <Container className="sitecontainer">
                    <h2 className="h2">Referral Program</h2>
                </Container>
            </div>
                    
            <article className="gridparentbox">
                <Container className="sitecontainer">
                    <div className="panelcontentbox">
                        <div className="wlltpageblnce">
                           <div className="balanceshowt totblance d-flex align-items-center">
                                <div>	
                                    <h5>Total received</h5>
                                    <h4 className="h4">0.00000 USDT</h4>
                                </div>
                                <div className="text-end">
									<Image src="assets/images/referral.svg" alt="icon" withd={20} height={20} />
								</div>
                            </div>                          
                        </div>
                    </div>
                    <div className="panelcontentbox mt-3">
                        <h2 className="heading-box mb-3">Refer a friend to Firefox and get rewarded</h2>
                        <p>Share your referral link and get 30.00% of all payments made by those you refer</p>
                        <Row>
                            <Col xl={5} lg={7} md={12}> 
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
                </Container>
            </article>
            <Userfooter />
        </div>
    )
}

export default Referral;