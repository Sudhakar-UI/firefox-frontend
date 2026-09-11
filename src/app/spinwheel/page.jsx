"use client"
import React, { useEffect, useState } from "react";
import { Container, Table, Image, Row, Form, Col, Badge, Accordion, OverlayTrigger, Tooltip, Modal, InputGroup, Button, Tab, Nav, Dropdown } from "react-bootstrap";
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faMobileScreenButton, faWallet, faMoneyBillTransfer, faThumbsUp, faClock } from '@fortawesome/free-solid-svg-icons';
import ResponsiveTable from '../components/ResponsiveTable';
import SimpleBar from 'simplebar-react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../../public/assets/css/p2pcustom.css'
import '../../../public/assets/css/user.css'
import { usePathname } from 'next/navigation';
import {
    faUniversity,
    faHandHoldingDollar,
    faCreditCard,
    faBolt,
    faShieldAlt,
    faUsers,
    faHeadset, faShareNodes
} from "@fortawesome/free-solid-svg-icons";




const p2poverview = () => {
    const flexscroll = {
        desktop: {
            breakpoint: { max: 1920, min: 1200 },
            items: 3,
        },
        laptop: {
            breakpoint: { max: 1200, min: 1050 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1050, min: 600 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 2,
        }
    };
    useEffect(() => {
        document.body.classList.add('innerpagebg');

        return () => {
            document.body.classList.remove("innerpagebg");
        };
    });
    const [activeKey, setActiveKey] = useState("1");
    const [openRow, setOpenRow] = useState(null);

    const toggleRow = (row) => {
        setOpenRow(openRow === row ? null : row);
    };

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);

    const handleShowModal2 = () => setShowModal2(true);
    const handleCloseModal2 = () => setShowModal2(false);

    const [selectedCoin, setSelectedCoin] = useState("BTC");
    const [showDropdown, setShowDropdown] = useState(false);

    const pathname = usePathname();

    const [activeTab, setActiveTab] = useState("buy");
    return (
        <>
            <div className="pagecontent gridpagecontent innerpagegrid">
                <div className="backgroundoverlay" id="backgroundoverlay"></div>
                <article className="spin-wheel-page">
                    <Homeheader />
                    <section className="homebannerbg">
                        <Container className="sitebannercontent">
                            <Row className="align-items-center text-center">
                                <Col lg={6} md={6} sm={12} className="main-div-flex" >
                                    <h2 className="main-heading mt-3">More spins. More LHU <br /><span className="spin-liner-head">More value</span></h2>
                                    <p className="text-start">Take your chance, spin the wheel and get rewarded with LHU tokens!</p>

                                    <div className="banner-spain-box">
                                        <div>
                                            <h4>25 LHU = <span>1 USD</span></h4>
                                            <p>Spin & Win LHU Token</p>
                                        </div>
                                        
                                    </div>
                                    < button className="sitebtn w-auto">Start P2P Trading</button>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <div className="text-center">
                                        <Image src="assets/images/p2p-main.png" className="banner-img " alt="icon" width={100} height={100} />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="earn-crypto markettablebg">
                        <Container >
                            <article className="">
                                <Container className="p2poverview">
                                    <h2 className="heading-title text-start mb-4">Buy & Sell Crypto with P2P</h2>
                                    <p>Find the right offer from verified P2P traders and trade using the payment method that works for you.</p>
                                    <Tab.Container defaultActiveKey="buy">
                                        <div className="panelcontentbox buyboxpage mb-2 buy-box-pge-y">
                                            <Row >
                                                <Col lg={4} md={12} sm={12} className="cns-y">

                                                    <div className="">
                                                        <Nav className="nav nav-tabs tabbanner border-0" role="tablist">
                                                            <Nav.Item className="nav-item"><Nav.Link eventKey="buy">Buy Crypto</Nav.Link></Nav.Item>
                                                            <Nav.Item className="nav-item"><Nav.Link eventKey="sell">Sell Crypto</Nav.Link></Nav.Item>
                                                        </Nav>
                                                    </div>

                                                </Col>
                                                <Col lg={8} md={12} sm={12} className="cons-y">
                                                    <div className="coin-badges d-flex flex-wrap align-items-center">

                                                        {/* Static Badges */}
                                                        {["BTC", "ETH", "LTC", "TRX", "BCH"].map((coin) => (
                                                            <Badge
                                                                key={coin}
                                                                bg="success"
                                                                className={`suces-y me-2 ${selectedCoin === coin ? "active-coin" : ""}`}
                                                                style={{ cursor: "pointer" }}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    // e.stopPropagation();
                                                                    setSelectedCoin(coin);
                                                                }}
                                                            >
                                                                {coin}
                                                            </Badge>
                                                        ))}

                                                        {/* Dropdown */}
                                                        <Dropdown show={showDropdown}>
                                                            <Dropdown.Toggle
                                                                as={Badge}
                                                                bg="success"
                                                                className="suces-y me-2"
                                                                style={{ cursor: "pointer" }}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    e.stopPropagation();
                                                                    setShowDropdown((prev) => !prev);
                                                                }}
                                                            >
                                                                Show More
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                {["LOC", "DOGE", "XRP", "ADA", "BNB"].map((coin) => (
                                                                    <Dropdown.Item
                                                                        key={coin}
                                                                        className="suces-y"
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            e.stopPropagation();
                                                                            setSelectedCoin(coin);
                                                                            setShowDropdown(false);
                                                                        }}
                                                                    >
                                                                        {coin}
                                                                    </Dropdown.Item>
                                                                ))}
                                                            </Dropdown.Menu>
                                                        </Dropdown>



                                                    </div>
                                                </Col>

                                            </Row>
                                            <Form className="siteformbg">
                                                <div className="searchfrm border-0 mb-2 ser-frm-frm-y searchfrm-p2p">
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
                                                    {/* <Form.Group className="form-group">
                                                    <Form.Label></Form.Label>
                                                    <Form.Select className="form-control" id="buyfiat_select">
                                                        <option>Sort By Price</option>
                                                    </Form.Select>
                                                </Form.Group> */}
                                                    <Form.Group className="form-group">
                                                        <Form.Label></Form.Label>
                                                        <button className="btn borderbtn me-1 w-100 btn btn-primary">Reset</button>
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
                        </Container>
                    </section>
                    <section className="payment-methods-section">
                        <Container>
                            {/* Heading */}
                            <div className="payment-heading text-center">
                                <h2 className="heading-title">Trade Your Way</h2>
                                <p>Choose from multiple payment options and trade directly with other users.</p>
                            </div>


                            {/* Bottom Features */}
                            <div className="payment-features">
                                {/* Feature 1 */}
                                <div className="feature-item ">
                                    <div className="feature-icon">
                                        <FontAwesomeIcon icon={faBuildingColumns} />
                                    </div>
                                    <div>
                                        <h4>Bank Transfer</h4>
                                        <p>
                                            Pay securely using your preferred bank transfer method.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <FontAwesomeIcon icon={faMobileScreenButton} />

                                    </div>

                                    <div>
                                        <h4>UPI Payments</h4>
                                        <p>
                                            Complete P2P trades quickly with convenient UPI payments.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <FontAwesomeIcon icon={faWallet} />
                                    </div>

                                    <div>
                                        <h4>Digital Wallets</h4>
                                        <p>
                                            Use supported digital wallets for simple and flexible payments.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 4 */}
                                <div className="feature-item feature-item-last">
                                    <div className="feature-icon">
                                        <FontAwesomeIcon icon={faMoneyBillTransfer} />
                                    </div>

                                    <div>
                                        <h4>Local Payment Methods</h4>
                                        <p>
                                            Discover payment options available in your region.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </Container>
                    </section>


                    <section className="howitbg">
                        <Container data-aos="fade-up" data-aos-duration="1000">
                            <h2 className="heading-title text-center mb-4"> Why Trade Crypto with P2P?</h2>
                            <div className="table-content">
                                <div className="hflex">
                                    <div className="hbox d-flex gap-3">
                                        <div>
                                            <Image src="/assets/images/VerifiedP2PTraders.svg" width={100} height={100} alt="ficon" className='howitbgicon  lightthemeicon' />
                                            <Image src="/assets/images/VerifiedP2PTraders-1.svg" width={100} height={100} alt="ficon" className='howitbgicon  darkthemeicon' />
                                        </div>
                                        <div>

                                            <h4 className="sub-heading">Verified P2P Traders</h4>
                                            <p className="content">Trade with verified users and view their order history and completion rate before choosing an offer.</p>
                                        </div>

                                    </div>
                                    <div className="hbox d-flex gap-3">
                                        <div>
                                            <Image src="/assets/images/CompetitivePrices.svg" width={100} height={100} alt="ficon" className='howitbgicon  lightthemeicon' />
                                            <Image src="/assets/images/CompetitivePrices-1.svg" width={100} height={100} alt="ficon" className='howitbgicon  darkthemeicon' />
                                        </div>
                                        <div>
                                            <h4 className="sub-heading">Competitive Prices</h4>
                                            <p className="content">Compare multiple offers and choose the price that works best for your trade.</p>
                                        </div>

                                    </div>
                                    <div className="hbox d-flex gap-3">
                                        <div>
                                            <Image src="/assets/images/FlexiblePayment.svg" width={100} height={100} alt="ficon" className='howitbgicon  lightthemeicon' />
                                            <Image src="/assets/images/FlexiblePayment-1.svg" width={100} height={100} alt="ficon" className='howitbgicon  darkthemeicon' />
                                        </div>
                                        <div>
                                            <h4 className="sub-heading">Flexible Payment Options</h4>
                                            <p className="content">Select from available payment methods based on your location and preference.</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="text-center">
                                    <Image src="/assets/images/nari.png" width={100} height={100} alt="ficon" className='howitimg lightthemeicon' />
                                    <Image src="/assets/images/narii.png" width={100} height={100} alt="ficon" className='howitimg darkthemeicon' />
                                </div>
                                <div className="hflex">
                                    <div className="hbox d-flex gap-3">
                                        <div>
                                            <Image src="/assets/images/SecureEscrow.svg" width={100} height={100} alt="ficon" className='howitbgicon  lightthemeicon' />
                                            <Image src="/assets/images/SecureEscrow-1.svg" width={100} height={100} alt="ficon" className='howitbgicon  darkthemeicon' />
                                        </div>
                                        <div>
                                            <h4 className="sub-heading">Secure Escrow Protection</h4>
                                            <p className="content">Your crypto is held securely during the transaction until the payment is confirmed.</p>
                                        </div>
                                    </div>
                                    <div className="hbox d-flex gap-3">
                                        <div>
                                            <Image src="/assets/images/Trader.svg" width={100} height={100} alt="ficon" className='howitbgicon  lightthemeicon' />
                                            <Image src="/assets/images/Trader-1.svg" width={100} height={100} alt="ficon" className='howitbgicon  darkthemeicon' />
                                        </div>
                                        <div>
                                            <h4 className="sub-heading">Trader Reputation</h4>
                                            <p className="content">Check trader ratings, completed orders and success rates before trading.</p>
                                        </div>
                                    </div>
                                    <div className="hbox d-flex gap-3">
                                        <div>
                                            <Image src="/assets/images/FastP2P.svg" width={100} height={100} alt="ficon" className='howitbgicon  lightthemeicon' />
                                            <Image src="/assets/images/FastP2P-1.svg" width={100} height={100} alt="ficon" className='howitbgicon  darkthemeicon' />
                                        </div>
                                        <div>
                                            <h4 className="sub-heading">Fast P2P Transactions</h4>
                                            <p className="content">Connect with the right trader and complete your crypto trade with fewer steps.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </section>

                    <section className="howitworksp2p" id="howitworksp2p">
                        <Container data-aos="fade-up">

                            <h2 className="heading-title text-center pb-3">
                                How P2P Trading Works
                            </h2>

                            <p className="text-center p2p-how-subtitle">
                                Buy or sell crypto securely with trusted P2P traders in just a few simple steps.
                            </p>
                            <div className="">
                                <Nav className="mb-3 nav-tabs border-0 gap-3 nav nav-tabs justify-content-center" role="tablist">
                                    <Nav.Item className="nav-item"><Nav.Link className={activeTab === "buy" ? "active" : ""}
                                        onClick={() => setActiveTab("buy")}>Buy Crypto </Nav.Link></Nav.Item>
                                    <Nav.Item className="nav-item"><Nav.Link className={activeTab === "sell" ? "active" : ""}
                                        onClick={() => setActiveTab("sell")}>Sell Crypto</Nav.Link></Nav.Item>
                                </Nav>
                            </div>
                            {/* Buy / Sell Tabs */}

                            {/* BUY TAB */}
                            {activeTab === "buy" && (
                                <div className="howitflexp2p">

                                    <div className="howitboxp2p">
                                        <div>
                                            <Image
                                                src="assets/images/p2p-how-1.svg"
                                                width={35}
                                                height={35}
                                                alt="Choose P2P offer"
                                                className="howitflexp2picon"
                                            />
                                        </div>

                                        <div>
                                            <h5 className="text-center">
                                                Choose an Offer
                                            </h5>

                                            <p className="text-center">
                                                Browse available P2P offers and choose a trusted seller based on price, payment method and order limits.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="arrowptop">
                                        <Image
                                            src="assets/images/arrhome.svg"
                                            width={35}
                                            height={35}
                                            alt="Next step"
                                            className="arrhomeicon"
                                        />
                                    </div>

                                    <div className="howitboxp2p">
                                        <div>
                                            <Image
                                                src="assets/images/p2p-how-2.svg"
                                                width={35}
                                                height={35}
                                                alt="Make payment"
                                                className="howitflexp2picon"
                                            />
                                        </div>

                                        <div>
                                            <h5 className="text-center">
                                                Make the Payment
                                            </h5>

                                            <p className="text-center">
                                                Enter your amount and complete the payment securely using the seller's selected payment method.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="arrowptop">
                                        <Image
                                            src="assets/images/arrhome.svg"
                                            width={35}
                                            height={35}
                                            alt="Next step"
                                            className="arrhomeicon"
                                        />
                                    </div>

                                    <div className="howitboxp2p">
                                        <div>
                                            <Image
                                                src="assets/images/p2p-how-3.svg"
                                                width={35}
                                                height={35}
                                                alt="Receive crypto"
                                                className="howitflexp2picon"
                                            />
                                        </div>

                                        <div>
                                            <h5 className="text-center">
                                                Receive Your Crypto
                                            </h5>

                                            <p className="text-center">
                                                Once your payment is confirmed, the seller releases the crypto securely to your wallet.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            )}

                            {/* SELL TAB */}
                            {activeTab === "sell" && (
                                <div className="howitflexp2p">

                                    <div className="howitboxp2p">
                                        <div>
                                            <Image
                                                src="assets/images/p2p-how-1.svg"
                                                width={35}
                                                height={35}
                                                alt="Choose P2P offer"
                                                className="howitflexp2picon"
                                            />
                                        </div>

                                        <div>
                                            <h5 className="text-center">
                                                Choose an Offer
                                            </h5>

                                            <p className="text-center">
                                                Find a suitable P2P buyer and review their price, payment method and order limits before trading.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="arrowptop">
                                        <Image
                                            src="assets/images/arrhome.svg"
                                            width={35}
                                            height={35}
                                            alt="Next step"
                                            className="arrhomeicon"
                                        />
                                    </div>

                                    <div className="howitboxp2p">
                                        <div>
                                            <Image
                                                src="assets/images/ConfirmPayment.svg"
                                                width={35}
                                                height={35}
                                                alt="Wait for payment"
                                                className="howitflexp2picon"
                                            />
                                        </div>

                                        <div>
                                            <h5 className="text-center">
                                                Confirm Payment
                                            </h5>

                                            <p className="text-center">
                                                Start the trade and wait for the buyer to complete the payment using the selected payment method.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="arrowptop">
                                        <Image
                                            src="assets/images/arrhome.svg"
                                            width={35}
                                            height={35}
                                            alt="Next step"
                                            className="arrhomeicon"
                                        />
                                    </div>

                                    <div className="howitboxp2p">
                                        <div>
                                            <Image
                                                src="assets/images/p2p-how-3.svg"
                                                width={35}
                                                height={35}
                                                alt="Release crypto"
                                                className="howitflexp2picon"
                                            />
                                        </div>

                                        <div>
                                            <h5 className="text-center">
                                                Release Your Crypto
                                            </h5>

                                            <p className="text-center">
                                                After confirming the payment, securely release the crypto to the buyer and complete the trade.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            )}

                        </Container>
                    </section>

                    <section className="p2pfaq" id="faq" >
                        <Container>
                            <h2 className="heading-title pt-0 pb-2 border-0 text-center">FAQs</h2>

                            <Row>
                                <Col xl={12} lg={12} md={12}>
                                    <div className="faqcntbox">
                                        <Accordion
                                            defaultActiveKey="1"
                                            activeKey={activeKey}
                                            onSelect={(k) => setActiveKey(k)}
                                            flush
                                        >
                                            <Accordion.Item
                                                eventKey="1"
                                                className={activeKey === "1" ? "active" : ""}
                                            >
                                                <Accordion.Header>
                                                    What is P2P crypto trading?
                                                </Accordion.Header>

                                                <Accordion.Body>
                                                    P2P (Peer-to-Peer) trading allows users to buy and sell cryptocurrency directly with other users using supported payment methods.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item
                                                eventKey="2"
                                                className={activeKey === "2" ? "active" : ""}
                                            >
                                                <Accordion.Header>
                                                    Is P2P Trading Safe?
                                                </Accordion.Header>

                                                <Accordion.Body>
                                                    P2P trading uses security measures such as trader verification and escrow protection to help protect transactions.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item
                                                eventKey="3"
                                                className={activeKey === "3" ? "active" : ""}
                                            >
                                                <Accordion.Header>
                                                    How do I buy crypto through P2P?
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    Choose a suitable offer, enter your amount, confirm the trade, complete the payment and receive your crypto after the seller confirms the payment.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item
                                                eventKey="4"
                                                className={activeKey === "4" ? "active" : ""}
                                            >
                                                <Accordion.Header>
                                                    How do I sell crypto through P2P?
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    Choose or create a suitable sell offer, wait for the buyer payment and release the crypto after confirming that the payment has been received.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item
                                                eventKey="5"
                                                className={activeKey === "5" ? "active" : ""}
                                            >
                                                <Accordion.Header>
                                                    How do I choose a P2P trader?
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    Compare price, order limits, completed orders, completion rate, ratings and payment methods before selecting a trader.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>

                                </Col>
                            </Row>

                        </Container>
                    </section>

                </article>
                <Homefooter />

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
                                            <h1 className="h1">Seller Payment method</h1>
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
                                            <h1 className="h1">Sellers Payment method</h1>
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
            </div>
        </>
    )
}

export default p2poverview