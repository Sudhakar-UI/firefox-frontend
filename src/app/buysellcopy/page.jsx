"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { Container, Image, OverlayTrigger, Tooltip, Table, Form, Modal, Row, Col, Button, InputGroup, Badge, Tab, Nav } from 'react-bootstrap';
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../components/ResponsiveTable';
// import './../../../public/assets/css/p2pcustom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faClock, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';



const Page = () => {
    useEffect(() => {
        document.body.classList.add('p2p');

        return () => {
            document.body.classList.remove("p2p");
        };
    });
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);

    const handleShowModal2 = () => setShowModal2(true);
    const handleCloseModal2 = () => setShowModal2(false);

    const pathname = usePathname();
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Homeheader />
            <article className="">
                <div className="innerpagecontent inpgycon-y">
                     <h2 className="heading-title text-center mt-3">Secure P2P MarketPlace</h2>
                    <p className='text-center mt-1 mb-4'>Trade Confidently with escrow protection, verified profiles, and transparent transaction history</p>
                    <div className="cryptopricebox">
                    </div>
                </div>

                <Container className="p2poverview">
                    <h2 class="sub-heading">Buy/Sell</h2>
                    <Tab.Container defaultActiveKey="buy">
                        <div className="panelcontentbox buyboxpage mb-2 buy-box-pge-y">
                            <Row >
                                <Col lg={4} md={12} sm={12} className="cns-y">

                                    <div className="">
                                        <Nav className="nav nav-tabs tabbanner border-0" role="tablist">
                                            <Nav.Item className="nav-item"><Nav.Link eventKey="buy">Buy</Nav.Link></Nav.Item>
                                            <Nav.Item className="nav-item"><Nav.Link eventKey="sell">Sell</Nav.Link></Nav.Item>
                                        </Nav>
                                    </div>

                                </Col>
                                <Col lg={8} md={12} sm={12} className="cons-y">
                                    {/* <div className="coin-badges">
                                        <Badge bg="success suces-y me-2" className="me-2 active-coin">BTC</Badge>
                                        <Badge bg="success suces-y me-2" className="me-2">ETH</Badge>
                                        <Badge bg="success suces-y me-2" className="me-2">LTC</Badge>
                                        <Badge bg="success suces-y me-2" className="me-2">TRX</Badge>
                                        <Badge bg="success suces-y me-2" className="me-2">BCH</Badge>
                                        <Badge bg="success suces-y me-2" className="me-2">LOC</Badge>
                                    </div> */}
                                    <Form className="siteformbg">
                                        <div className="coin-dropdown">
                                            <Form.Select className="form-control" id="buyfiat_select">
                                                <option>BTC</option>
                                                <option>ETH</option>
                                                <option>LTC</option>
                                                <option>TRX</option>
                                                <option>BCH</option>
                                                <option>LOC</option>
                                            </Form.Select>
                                        </div>
                                    </Form>
                                </Col>
                            </Row>
                            <Form className="siteformbg">
                                <div className="searchfrm border-0 mb-2 ser-frm-frm-y">
                                    <Form.Group className="form-group">
                                        <Form.Label></Form.Label>
                                        <InputGroup>
                                            <Form.Control placeholder="Enter Your amount" id="buyvolume" />
                                            <InputGroup.Text className="p-0">
                                                <Form.Select className="amtd-rpdon-Y">
                                                    <option value="ETH">ETH</option>
                                                    <option value="BTC">BTC</option>
                                                </Form.Select>
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label></Form.Label>
                                        <Form.Select className="form-control" id="buyfiat_select">
                                            <option>Select Country</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label></Form.Label>
                                        <Form.Select className="form-control" id="buyfiat_select">
                                            <option>Select Payment Method</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label></Form.Label>
                                        <Form.Select className="form-control" id="buyfiat_select">
                                            <option>Sort By Price</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </Form>
                        </div>

                        <div className="panelcontentbox buyboxpage">
                            <Tab.Content>
                                <Tab.Pane eventKey="buy">
                                    <SimpleBar className="table-responsive sitescroll">
                                        <Table className="sitetable table-responsive-stack" id="table1">
                                            <thead>
                                                <tr>
                                                    <th>Advertisers</th>
                                                    <th>Price
                                                    </th>
                                                    <th>Available/Limit</th>
                                                    <th>Country</th>
                                                    <th>Payment Method</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span className="profiletxtlink">
                                                            <div className='prf-txt-lnk-y d-flex gap-2'>
                                                                <div>
                                                                    <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                    <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                </div>

                                                                <div>
                                                                    <span>Test User</span>
                                                                    <div>7 orders 57.14% completion</div>
                                                                    <span className='t-gray me-2'>
                                                                        <FontAwesomeIcon icon={faThumbsUp} /> 0%
                                                                    </span>
                                                                    <span className='t-gray'>
                                                                        <FontAwesomeIcon icon={faClock} /> 15 min
                                                                    </span>
                                                                </div>
                                                            </div>


                                                        </span>
                                                    </td>
                                                    <td><span >632.20</span><span> UDD </span></td>
                                                    <td>
                                                        <span>0.00350076 BNB</span>
                                                        <br />
                                                        <span>2.00 - 200.00 INR</span>
                                                    </td>
                                                    <td>United States of America</td>
                                                    <td><Badge bg="info info-bg-y">Gpay</Badge></td>
                                                    <td><Button id="buy_btn" className="btn viewbtn-y green-btn" onClick={handleShowModal1}>Buy BTC</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="profiletxtlink">
                                                            <div className='prf-txt-lnk-y d-flex gap-2'>
                                                                <div>
                                                                    <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                    <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                </div>

                                                                <div>
                                                                    <span>Test User</span>
                                                                    <div>7 orders 57.14% completion</div>
                                                                    <span className='t-gray me-2'>
                                                                        <FontAwesomeIcon icon={faThumbsUp} /> 0%
                                                                    </span>
                                                                    <span className='t-gray'>
                                                                        <FontAwesomeIcon icon={faClock} /> 15 min
                                                                    </span>
                                                                </div>
                                                            </div>


                                                        </span>
                                                    </td>
                                                    <td><span >632.20</span><span> UDD </span></td>
                                                    <td>
                                                        <span>0.00350076 BNB</span>
                                                        <br />
                                                        <span>2.00 - 200.00 INR</span>
                                                    </td>
                                                    <td>United States of America</td>
                                                    <td><Badge bg="info info-bg-y">Gpay</Badge></td>
                                                    <td><Button id="buy_btn" className="btn-sm sitebtn  red-btn" onClick={handleShowModal2}>Sell USDT</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="profiletxtlink">
                                                            <div className='prf-txt-lnk-y d-flex gap-2'>
                                                                <div>
                                                                    <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                    <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                </div>

                                                                <div>
                                                                    <span>Test User</span>
                                                                    <div>7 orders 57.14% completion</div>
                                                                    <span className='t-gray me-2'>
                                                                        <FontAwesomeIcon icon={faThumbsUp} /> 0%
                                                                    </span>
                                                                    <span className='t-gray'>
                                                                        <FontAwesomeIcon icon={faClock} /> 15 min
                                                                    </span>
                                                                </div>
                                                            </div>


                                                        </span>
                                                    </td>
                                                    <td><span >632.20</span><span> UDD </span></td>
                                                    <td>
                                                        <span>0.00350076 BNB</span>
                                                        <br />
                                                        <span>2.00 - 200.00 INR</span>
                                                    </td>
                                                    <td>United States of America</td>
                                                    <td><Badge bg="info info-bg-y">Gpay</Badge></td>
                                                    <td><Button id="buy_btn" className="btn viewbtn-y green-btn" onClick={handleShowModal1}>Buy BTC</Button></td>
                                                </tr>
                                                <tr>
                                                     <td>
                                                        <span className="profiletxtlink">
                                                            <div className='prf-txt-lnk-y d-flex gap-2'>
                                                                <div>
                                                                    <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                    <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                </div>

                                                                <div>
                                                                    <span>Test User</span>
                                                                    <div>7 orders 57.14% completion</div>
                                                                    <span className='t-gray me-2'>
                                                                        <FontAwesomeIcon icon={faThumbsUp} /> 0%
                                                                    </span>
                                                                    <span className='t-gray'>
                                                                        <FontAwesomeIcon icon={faClock} /> 15 min
                                                                    </span>
                                                                </div>
                                                            </div>


                                                        </span>
                                                    </td>
                                                    <td><span >632.20</span><span> UDD </span></td>
                                                    <td>
                                                        <span>0.00350076 BNB</span>
                                                        <br />
                                                        <span>2.00 - 200.00 INR</span>
                                                    </td>
                                                    <td>United States of America</td>
                                                    <td><Badge bg="info info-bg-y">Gpay</Badge></td>
                                                    <td><Button id="buy_btn" className="btn viewbtn-y green-btn" onClick={handleShowModal1}>Buy BTC</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="profiletxtlink">
                                                            <div className='prf-txt-lnk-y d-flex gap-2'>
                                                                <div>
                                                                    <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                    <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                </div>

                                                                <div>
                                                                    <span>Test User</span>
                                                                    <div>7 orders 57.14% completion</div>
                                                                    <span className='t-gray me-2'>
                                                                        <FontAwesomeIcon icon={faThumbsUp} /> 0%
                                                                    </span>
                                                                    <span className='t-gray'>
                                                                        <FontAwesomeIcon icon={faClock} /> 15 min
                                                                    </span>
                                                                </div>
                                                            </div>


                                                        </span>
                                                    </td>
                                                    <td><span >632.20</span><span> UDD </span></td>
                                                    <td>
                                                        <span>0.00350076 BNB</span>
                                                        <br />
                                                        <span>2.00 - 200.00 INR</span>
                                                    </td>
                                                    <td>United States of America</td>
                                                    <td><Badge bg="info info-bg-y">Gpay</Badge></td>
                                                    <td><Button id="buy_btn" className="btn viewbtn-y green-btn" onClick={handleShowModal1}>Buy BTC</Button></td>
                                                </tr>
                                                <tr>
                                                     <td>
                                                        <span className="profiletxtlink">
                                                            <div className='prf-txt-lnk-y d-flex gap-2'>
                                                                <div>
                                                                    <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                    <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                </div>

                                                                <div>
                                                                    <span>Test User</span>
                                                                    <div>7 orders 57.14% completion</div>
                                                                    <span className='t-gray me-2'>
                                                                        <FontAwesomeIcon icon={faThumbsUp} /> 0%
                                                                    </span>
                                                                    <span className='t-gray'>
                                                                        <FontAwesomeIcon icon={faClock} /> 15 min
                                                                    </span>
                                                                </div>
                                                            </div>


                                                        </span>
                                                    </td>
                                                    <td><span >632.20</span><span> UDD </span></td>
                                                    <td>
                                                        <span>0.00350076 BNB</span>
                                                        <br />
                                                        <span>2.00 - 200.00 INR</span>
                                                    </td>
                                                    <td>United States of America</td>
                                                    <td><Badge bg="info info-bg-y">Gpay</Badge></td>
                                                    <td><Button id="buy_btn" className="btn-sm sitebtn  red-btn" onClick={handleShowModal2}>Sell USDT</Button></td>
                                                </tr>
                                                <tr>
                                                     <td>
                                                        <span className="profiletxtlink">
                                                            <div className='prf-txt-lnk-y d-flex gap-2'>
                                                                <div>
                                                                    <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                    <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                </div>

                                                                <div>
                                                                    <span>Test User</span>
                                                                    <div>7 orders 57.14% completion</div>
                                                                    <span className='t-gray me-2'>
                                                                        <FontAwesomeIcon icon={faThumbsUp} /> 0%
                                                                    </span>
                                                                    <span className='t-gray'>
                                                                        <FontAwesomeIcon icon={faClock} /> 15 min
                                                                    </span>
                                                                </div>
                                                            </div>


                                                        </span>
                                                    </td>
                                                    <td><span >632.20</span><span> UDD </span></td>
                                                    <td>
                                                        <span>0.00350076 BNB</span>
                                                        <br />
                                                        <span>2.00 - 200.00 INR</span>
                                                    </td>
                                                    <td>United States of America</td>
                                                    <td><Badge bg="info info-bg-y">Gpay</Badge></td>
                                                    <td><Button id="buy_btn" className="btn viewbtn-y green-btn" onClick={handleShowModal1}>Buy BTC</Button></td>
                                                </tr>
                                                <tr>
                                                     <td>
                                                        <span className="profiletxtlink">
                                                            <div className='prf-txt-lnk-y d-flex gap-2'>
                                                                <div>
                                                                    <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                    <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                </div>

                                                                <div>
                                                                    <span>Test User</span>
                                                                    <div>7 orders 57.14% completion</div>
                                                                    <span className='t-gray me-2'>
                                                                        <FontAwesomeIcon icon={faThumbsUp} /> 0%
                                                                    </span>
                                                                    <span className='t-gray'>
                                                                        <FontAwesomeIcon icon={faClock} /> 15 min
                                                                    </span>
                                                                </div>
                                                            </div>


                                                        </span>
                                                    </td>
                                                    <td><span >632.20</span><span> UDD </span></td>
                                                    <td>
                                                        <span>0.00350076 BNB</span>
                                                        <br />
                                                        <span>2.00 - 200.00 INR</span>
                                                    </td>
                                                    <td>United States of America</td>
                                                    <td><Badge bg="info info-bg-y">Gpay</Badge></td>
                                                    <td><Button id="buy_btn" className="btn-sm sitebtn  red-btn" onClick={handleShowModal2}>Sell USDT</Button></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </SimpleBar>
                                    <ResponsiveTable tableId="table1" />
                                </Tab.Pane>
                                <Tab.Pane eventKey="sell">
                                    <SimpleBar className="table-responsive sitescroll">
                                        <Table className="sitetable table-responsive-stack" id="table2">
                                            <thead>
                                                <tr>
                                                    <th>Advertisers</th>
                                                    <th>Price
                                                    </th>
                                                    <th>Available/Limit</th>
                                                    <th>Country</th>
                                                    <th>Payment Method</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span className="profiletxtlink">
                                                            <div className='prf-txt-lnk-y d-flex gap-2'>
                                                                <div>
                                                                    <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                    <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                </div>

                                                                <div>
                                                                    <span>Test User</span>
                                                                    <div>7 orders 57.14% completion</div>
                                                                    <span className='t-gray me-2'>
                                                                        <FontAwesomeIcon icon={faThumbsUp} /> 0%
                                                                    </span>
                                                                    <span className='t-gray'>
                                                                        <FontAwesomeIcon icon={faClock} /> 15 min
                                                                    </span>
                                                                </div>
                                                            </div>


                                                        </span>
                                                    </td>
                                                    <td><span >632.20</span><span> UDD </span></td>
                                                    <td>
                                                        <span>0.00350076 BNB</span>
                                                        <br />
                                                        <span>2.00 - 200.00 INR</span>
                                                    </td>
                                                    <td>United States of America</td>
                                                    <td><Badge bg="info info-bg-y">Gpay</Badge></td>
                                                    <td><Button id="buy_btn" className="btn viewbtn-y green-btn" onClick={handleShowModal1}>Buy BTC</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="profiletxtlink">
                                                            <div className='prf-txt-lnk-y d-flex gap-2'>
                                                                <div>
                                                                    <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                    <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                </div>

                                                                <div>
                                                                    <span>Test User</span>
                                                                    <div>7 orders 57.14% completion</div>
                                                                    <span className='t-gray me-2'>
                                                                        <FontAwesomeIcon icon={faThumbsUp} /> 0%
                                                                    </span>
                                                                    <span className='t-gray'>
                                                                        <FontAwesomeIcon icon={faClock} /> 15 min
                                                                    </span>
                                                                </div>
                                                            </div>


                                                        </span>
                                                    </td>
                                                    <td><span >632.20</span><span> UDD </span></td>
                                                    <td>
                                                        <span>0.00350076 BNB</span>
                                                        <br />
                                                        <span>2.00 - 200.00 INR</span>
                                                    </td>
                                                    <td>United States of America</td>
                                                    <td><Badge bg="info info-bg-y">Gpay</Badge></td>
                                                    <td><Button id="buy_btn" className="btn viewbtn-y green-btn" onClick={handleShowModal1}>Buy BTC</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="profiletxtlink">
                                                            <div className='prf-txt-lnk-y d-flex gap-2'>
                                                                <div>
                                                                    <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                    <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                </div>

                                                                <div>
                                                                    <span>Test User</span>
                                                                    <div>7 orders 57.14% completion</div>
                                                                    <span className='t-gray me-2'>
                                                                        <FontAwesomeIcon icon={faThumbsUp} /> 0%
                                                                    </span>
                                                                    <span className='t-gray'>
                                                                        <FontAwesomeIcon icon={faClock} /> 15 min
                                                                    </span>
                                                                </div>
                                                            </div>


                                                        </span>
                                                    </td>
                                                    <td><span >632.20</span><span> UDD </span></td>
                                                    <td>
                                                        <span>0.00350076 BNB</span>
                                                        <br />
                                                        <span>2.00 - 200.00 INR</span>
                                                    </td>
                                                    <td>United States of America</td>
                                                    <td><Badge bg="info info-bg-y">Gpay</Badge></td>
                                                    <td><Button id="buy_btn" className="btn-sm sitebtn  red-btn" onClick={handleShowModal2}>Sell USDT</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="profiletxtlink">
                                                            <div className='prf-txt-lnk-y d-flex gap-2'>
                                                                <div>
                                                                    <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                    <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                </div>

                                                                <div>
                                                                    <span>Test User</span>
                                                                    <div>7 orders 57.14% completion</div>
                                                                    <span className='t-gray me-2'>
                                                                        <FontAwesomeIcon icon={faThumbsUp} /> 0%
                                                                    </span>
                                                                    <span className='t-gray'>
                                                                        <FontAwesomeIcon icon={faClock} /> 15 min
                                                                    </span>
                                                                </div>
                                                            </div>


                                                        </span>
                                                    </td>
                                                    <td><span >632.20</span><span> UDD </span></td>
                                                    <td>
                                                        <span>0.00350076 BNB</span>
                                                        <br />
                                                        <span>2.00 - 200.00 INR</span>
                                                    </td>
                                                    <td>United States of America</td>
                                                    <td><Badge bg="info info-bg-y">Gpay</Badge></td>
                                                    <td><Button id="buy_btn" className="btn viewbtn-y green-btn" onClick={handleShowModal1}>Buy BTC</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="profiletxtlink">
                                                            <div className='prf-txt-lnk-y d-flex gap-2'>
                                                                <div>
                                                                    <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                    <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                </div>

                                                                <div>
                                                                    <span>Test User</span>
                                                                    <div>7 orders 57.14% completion</div>
                                                                    <span className='t-gray me-2'>
                                                                        <FontAwesomeIcon icon={faThumbsUp} /> 0%
                                                                    </span>
                                                                    <span className='t-gray'>
                                                                        <FontAwesomeIcon icon={faClock} /> 15 min
                                                                    </span>
                                                                </div>
                                                            </div>


                                                        </span>
                                                    </td>
                                                    <td><span >632.20</span><span> UDD </span></td>
                                                    <td>
                                                        <span>0.00350076 BNB</span>
                                                        <br />
                                                        <span>2.00 - 200.00 INR</span>
                                                    </td>
                                                    <td>United States of America</td>
                                                    <td><Badge bg="info info-bg-y">Gpay</Badge></td>
                                                    <td><Button id="buy_btn" className="btn-sm sitebtn  red-btn" onClick={handleShowModal2}>Sell USDT</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="profiletxtlink">
                                                            <div className='prf-txt-lnk-y d-flex gap-2'>
                                                                <div>
                                                                    <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                    <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                </div>

                                                                <div>
                                                                    <span>Test User</span>
                                                                    <div>7 orders 57.14% completion</div>
                                                                    <span className='t-gray me-2'>
                                                                        <FontAwesomeIcon icon={faThumbsUp} /> 0%
                                                                    </span>
                                                                    <span className='t-gray'>
                                                                        <FontAwesomeIcon icon={faClock} /> 15 min
                                                                    </span>
                                                                </div>
                                                            </div>


                                                        </span>
                                                    </td>
                                                    <td><span >632.20</span><span> UDD </span></td>
                                                    <td>
                                                        <span>0.00350076 BNB</span>
                                                        <br />
                                                        <span>2.00 - 200.00 INR</span>
                                                    </td>
                                                    <td>United States of America</td>
                                                    <td><Badge bg="info info-bg-y">Gpay</Badge></td>
                                                    <td><Button id="buy_btn" className="btn viewbtn-y green-btn" onClick={handleShowModal1}>Buy BTC</Button></td>
                                                </tr>
                                                <tr>
                                                     <td>
                                                        <span className="profiletxtlink">
                                                            <div className='prf-txt-lnk-y d-flex gap-2'>
                                                                <div>
                                                                    <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                    <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                </div>

                                                                <div>
                                                                    <span>Test User</span>
                                                                    <div>7 orders 57.14% completion</div>
                                                                    <span className='t-gray me-2'>
                                                                        <FontAwesomeIcon icon={faThumbsUp} /> 0%
                                                                    </span>
                                                                    <span className='t-gray'>
                                                                        <FontAwesomeIcon icon={faClock} /> 15 min
                                                                    </span>
                                                                </div>
                                                            </div>


                                                        </span>
                                                    </td>
                                                    <td><span >632.20</span><span> UDD </span></td>
                                                    <td>
                                                        <span>0.00350076 BNB</span>
                                                        <br />
                                                        <span>2.00 - 200.00 INR</span>
                                                    </td>
                                                    <td>United States of America</td>
                                                    <td><Badge bg="info info-bg-y">Gpay</Badge></td>
                                                    <td><Button id="buy_btn" className="btn viewbtn-y green-btn " onClick={handleShowModal1}>Buy BTC</Button></td>
                                                </tr>
                                                <tr>
                                                     <td>
                                                        <span className="profiletxtlink">
                                                            <div className='prf-txt-lnk-y d-flex gap-2'>
                                                                <div>
                                                                    <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                    <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                </div>

                                                                <div>
                                                                    <span>Test User</span>
                                                                    <div>7 orders 57.14% completion</div>
                                                                    <span className='t-gray me-2'>
                                                                        <FontAwesomeIcon icon={faThumbsUp} /> 0%
                                                                    </span>
                                                                    <span className='t-gray'>
                                                                        <FontAwesomeIcon icon={faClock} /> 15 min
                                                                    </span>
                                                                </div>
                                                            </div>


                                                        </span>
                                                    </td>
                                                    <td><span >632.20</span><span> UDD </span></td>
                                                    <td>
                                                        <span>0.00350076 BNB</span>
                                                        <br />
                                                        <span>2.00 - 200.00 INR</span>
                                                    </td>
                                                    <td>United States of America</td>
                                                    <td><Badge bg="info info-bg-y">Gpay</Badge></td>
                                                    <td><Button id="buy_btn" className="btn-sm sitebtn  red-btn" onClick={handleShowModal2}>Sell USDT</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="profiletxtlink">
                                                            <div className='prf-txt-lnk-y d-flex gap-2'>
                                                                <div>
                                                                    <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                    <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                </div>

                                                                <div>
                                                                    <span>Test User</span>
                                                                    <div>7 orders 57.14% completion</div>
                                                                    <span className='t-gray me-2'>
                                                                        <FontAwesomeIcon icon={faThumbsUp} /> 0%
                                                                    </span>
                                                                    <span className='t-gray'>
                                                                        <FontAwesomeIcon icon={faClock} /> 15 min
                                                                    </span>
                                                                </div>
                                                            </div>


                                                        </span>
                                                    </td>
                                                    <td><span >632.20</span><span> UDD </span></td>
                                                    <td>
                                                        <span>0.00350076 BNB</span>
                                                        <br />
                                                        <span>2.00 - 200.00 INR</span>
                                                    </td>
                                                    <td>United States of America</td>
                                                    <td><Badge bg="info info-bg-y">Gpay</Badge></td>
                                                    <td><Button id="buy_btn" className="btn viewbtn-y green-btn" onClick={handleShowModal1}>Buy BTC</Button></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </SimpleBar>
                                    <ResponsiveTable tableId="table2" />
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </Tab.Container>

                </Container >
            </article >

            <Modal show={showModal1} onHide={handleCloseModal1}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modalbgt buymodal authtblemdlbox">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter"><Image src="assets/images/color/btc.svg" className="coinlisticon" width={20} height={20} alt="icon" />Buy BTC
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="buytradecell">
                        <div className="tradepricebanner">
                            <div className="tradepricebox">
                                <div className="tradepicesubbg">
                                    <div>
                                        <h1 className="h1">Price</h1>
                                        <h3 className="h3 t-blue">0.0025 INR <span className="t-red">3s</span></h3>
                                    </div>
                                </div>
                                <div className="tradepicesubbg">
                                    <div>
                                        <h1 className="h1">Payment Time Limits</h1>
                                        <h3 className="h3 t-blue">15 Minutes</h3>
                                    </div>
                                </div>
                                <div className="tradepicesubbg">
                                    <div>
                                        <h1 className="h1">Seller's Payment method</h1>
                                        <h3 className="h3 t-blue ">Cash Deposit</h3>
                                    </div>
                                </div>
                                <div className="tradepicesubbg">
                                    <div>
                                        <h1 className="h1">Available Balance</h1>
                                        <h3 className="h3 t-blue"><a href="#"><Badge bg="info">0.5
                                            BTC</Badge></a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Form className="siteformbg">
                        <Row className="align-items-center">
                            <Col lg={12}>
                                <Form.Group className="form-group">
                                    <Form.Label>I want to pay</Form.Label>
                                    <InputGroup>
                                        <Form.Control type="text" id="pay_field" placeholder="" />
                                        <InputGroup.Text>INR</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>

                            </Col>
                            <Col lg={12}>
                                <Form.Group className="form-group">
                                    <Form.Label>I will receive</Form.Label>
                                    <InputGroup>
                                        <Form.Control type="text" id="receive_field" placeholder="" />
                                        <InputGroup.Text>BTC</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>
                        <div className="text-center d-flex">
                            <Button className="btn borderbtn me-1 w-100" id="cancel_btn">Cancel</Button>
                            <Link href="/buytrade" className="btn sitebtn ms-1 w-100" id="buy_cryptobtn">Buy BTC</Link>
                        </div>
                    </Form>
                    <div className="notestitle notesgray termsnotes mt-4">
                        <h5><b>Terms and Conditions:</b></h5>
                        <p><span className="t-gray">Pay with your personal account</span></p>
                    </div>

                </Modal.Body>
            </Modal>
            <Modal show={showModal2} onHide={handleCloseModal2}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modalbgt buymodal authtblemdlbox">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <Image src="assets/images/color/btc.svg" className="coinlisticon" width={20} height={20} alt="icon" />Sell BTC
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="buytradecell">
                        <div className="tradepricebanner">
                            <div className="tradepricebox ">
                                <div className="tradepicesubbg">
                                    <div>
                                        <h1 className="h1">Price</h1>
                                        <h3 className="h3 t-blue">0.0025 INR <span className="t-red">3s</span></h3>
                                    </div>
                                </div>

                                <div className="tradepicesubbg">
                                    <div>
                                        <h1 className="h1">Payment Time Limits</h1>
                                        <h3 className="h3 t-blue">15 Minutes</h3>
                                    </div>
                                </div>
                                <div className="tradepicesubbg">
                                    <div>
                                        <h1 className="h1">Seller's Payment method</h1>
                                        <h3 className="h3 t-blue">Cash Deposit</h3>
                                    </div>
                                </div>
                                <div className="tradepicesubbg">
                                    <div>
                                        <h1 className="h1">Available Balance</h1>
                                        <h3 className="h3 t-blue"><a href="#"><Badge bg="info">0.5
                                            BTC</Badge></a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Form className="siteformbg">
                        <Row className="align-items-center">
                            <Col lg={12}>
                                <Form.Group className="form-group">
                                    <Form.Label>I want to sell</Form.Label>
                                    <InputGroup>
                                        <Form.Control type="text" id="sell_field" placeholder="" />
                                        <InputGroup.Text>BTC</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>

                            </Col>
                            <Col lg={12}>
                                <Form.Group className="form-group">
                                    <Form.Label>I will receive</Form.Label>
                                    <InputGroup>
                                        <Form.Control type="text" id="sellreceive_field" placeholder="" />
                                        <InputGroup.Text>INR</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>
                        <div className="text-center d-flex">
                            <Button className="btn borderbtn w-100 me-1" id="sellcancel_btn">Cancel</Button>
                            <Link href="/selltrade" className="btn sitebtn w-100" id="sell_cryptobtn">Sell BTC</Link>
                        </div>
                    </Form>
                    <div className="notestitle notesgray termsnotes mt-3">
                        <h5><b>Terms and Conditions:</b></h5>
                        <p><span className="t-gray">Pay with your personal account</span></p>
                    </div>
                </Modal.Body>
            </Modal>
            <Homefooter />
        </div >
    )
}

export default Page;