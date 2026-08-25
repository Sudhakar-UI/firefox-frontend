"use client"
import React, { useEffect, useState } from "react";
import { Container, Table, Image, Row, Form, Col, Badge, Accordion, OverlayTrigger, Tooltip, Modal, InputGroup, Button, Tab, Nav, Dropdown } from "react-bootstrap";
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faSortDown, faEyeSlash, faAngleDown, faQuestionCircle, faCircleExclamation, faAngleRight, faThumbsUp, faClock } from '@fortawesome/free-solid-svg-icons';
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
    faHeadset,
} from "@fortawesome/free-solid-svg-icons";




const earn = () => {
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
    return (
        <>
            <article className="innerpage new-earn-page new-p2p-page">
                <Homeheader />
                <section className="homebannerbg">
                    <Container className="sitebannercontent">
                        <Row className="align-items-center text-center">
                            <Col lg={6} md={6} sm={12} className="main-div-flex" >
                                <h2 className="main-heading">Buy & Sell <br /><span>Crypto with P2P</span></h2>
                                <p className="text-start"> Connect directly with verified users to buy and sell crypto securely, with <br /> flexible payment options and competitive prices on Firefox P2P.</p>
                                < button className="sitebtn w-auto">Start Earning</button>
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
                                <h2 className="heading-title text-start mb-4">Buy/Sell</h2>
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
                

                <section className="howitbg">
                    <Container data-aos="fade-up" data-aos-duration="1000">
                        <h2 className="heading-title text-center mb-4">Key Features Built for Every Trader</h2>
                        <div className="table-content">
                            <div className="hflex">
                                <div className="hbox d-flex gap-3">
                                    <div>
                                        <Image src="/assets/images/nari1.svg" width={100} height={100} alt="ficon" className='howitbgicon lightthemeicon' />
                                        <Image src="/assets/images/nari11.svg" width={100} height={100} alt="ficon" className='howitbgicon darkthemeicon' />
                                    </div>
                                    <div>

                                        <h4 className="sub-heading">Multi-crypto Wallets</h4>
                                        <p className="content">Instant crypto payments with multi-network support.</p>
                                    </div>

                                </div>
                                <div className="hbox d-flex gap-3">
                                    <div>
                                        <Image src="/assets/images/nari2.svg" width={100} height={100} alt="ficon" className='howitbgicon lightthemeicon' />
                                        <Image src="/assets/images/nari22.svg" width={100} height={100} alt="ficon" className='howitbgicon darkthemeicon' />
                                    </div>
                                    <div>
                                        <h4 className="sub-heading">ERC20 & BEP20 Token support</h4>
                                        <p className="content">Buy and sell crypto in real-time with live charts.</p>
                                    </div>

                                </div>
                                <div className="hbox d-flex gap-3">
                                    <div>
                                        <Image src="/assets/images/nari3.svg" width={100} height={100} alt="ficon" className='howitbgicon lightthemeicon' />
                                        <Image src="/assets/images/nari33.svg" width={100} height={100} alt="ficon" className='howitbgicon darkthemeicon' />
                                    </div>
                                    <div>
                                        <h4 className="sub-heading">Secure P2P Trading</h4>
                                        <p className="content">Trade with leverage and control your profits easily.</p>
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
                                        <Image src="/assets/images/nari4.svg" width={100} height={100} alt="ficon" className='howitbgicon lightthemeicon' />
                                        <Image src="/assets/images/nari44.svg" width={100} height={100} alt="ficon" className='howitbgicon darkthemeicon' />
                                    </div>
                                    <div>
                                        <h4 className="sub-heading">Advanced Security</h4>
                                        <p className="content">Multi-layer protection with 2FA and cold wallet storage.</p>
                                    </div>
                                </div>
                                <div className="hbox d-flex gap-3">
                                    <div>
                                        <Image src="/assets/images/nari5.svg" width={100} height={100} alt="ficon" className='howitbgicon lightthemeicon' />
                                        <Image src="/assets/images/nari55.svg" width={100} height={100} alt="ficon" className='howitbgicon darkthemeicon' />
                                    </div>
                                    <div>
                                        <h4 className="sub-heading">Secure KYC Verification</h4>
                                        <p className="content">Supports Ethereum, BSC, and Tron networks seamlessly.</p>
                                    </div>
                                </div>
                                <div className="hbox d-flex gap-3">
                                    <div>
                                        <Image src="/assets/images/nari6.svg" width={100} height={100} alt="ficon" className='howitbgicon lightthemeicon' />
                                        <Image src="/assets/images/nari66.svg" width={100} height={100} alt="ficon" className='howitbgicon darkthemeicon' />
                                    </div>
                                    <div>
                                        <h4 className="sub-heading">Smart Dashboard</h4>
                                        <p className="content">Manage payments, trades, and wallets in one place.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                <section className="choosefeatresbg" id="features">
                    <Container data-aos="fade-up" data-aos-duration="1000">
                        <h2 className="heading-title text-center pb-4">Top Payment Methods</h2>




                        <Row className="chooseusflex align-items-center">
                            <Col lg={4}>
                                <div className="chooseusbox">
                                    <div>
                                        <h5>Bank Transfer</h5>
                                        <p>Phasellus vestibulum, purus vel dignissim suscipit, diam odio ultrices turpis malesuada justo.</p>
                                    </div>
                                    <div>
                                        <h5>Earn</h5>
                                        <p>Phasellus vestibulum, purus vel dignissim suscipit, diam odio ultrices turpis malesuada justo.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} className="choosecentericon pos">
                                <Image src="assets/images/chooseicon.svg" className="lightthemeicon" alt="icon" width={100} height={100} />
                                <Image src="assets/images/chooseicon1.svg" className="darkthemeicon" alt="icon" width={100} height={100} />

                            </Col>
                            <Col lg={4}>
                                <div className="chooseusbox">
                                    <div>
                                        <h5>swipe</h5>
                                        <p>Phasellus vestibulum, purus vel dignissim suscipit, diam odio ultrices turpis malesuada justo.</p>
                                    </div>
                                    <div>
                                        <h5>Instant Transfers</h5>
                                        <p>Phasellus vestibulum, purus vel dignissim suscipit, diam odio ultrices turpis malesuada justo.</p>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* <section className="what-earn">
                    <Container className="sitebannercontent">
                        <Row className="align-items-center text-center">

                            <Col lg={6} md={6} sm={12}>
                                <div className="text-center">
                                    <Image src="assets/images/earn-banner-dark.png" className="banner-img lightthemeicon" alt="icon" width={100} height={100} />
                                    <Image src="assets/images/staking-img.png" className="banner-img " alt="icon" width={100} height={100} />
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} className=" d-flex align-items-start flex-column justify-content-start" >
                                <h2 className="heading-title">What is Staking?</h2>
                                <p className="text-start"> Staking allows you to lock your crypto assets for a period of time to earn rewards. The longer you stake, the more you earn — without active trading.</p>
                                < button className="sitebtn w-auto">Start Earning</button>
                            </Col>
                        </Row>
                    </Container>
                </section> */}
                <section className="howitworksp2p" id="howitworksp2p">
                    <Container data-aos="fade-up">
                        <h2 className="heading-title text-center pb-3">How It Works</h2>

                        <div className="howitflexp2p">
                            <div className="howitboxp2p">
                                <div className="">
                                    <Image
                                        src="assets/images/p2p-how-1.svg"
                                        width={35}
                                        height={35}
                                        alt="btc"
                                        className="howitflexp2picon"
                                    />
                                </div>
                                <div>
                                    <h5 className="text-center">1.Choose an Offer</h5>
                                    <p className="text-center">
                                        Browse available buy or sell offers and choose the one that best matches your preferred price and payment method.
                                    </p>
                                </div>
                            </div>

                            <div className="arrowptop">
                                <Image
                                    src="assets/images/arrhome.svg"
                                    width={35}
                                    height={35}
                                    alt="btc"
                                    className="arrhomeicon"
                                />
                            </div>

                            <div className="howitboxp2p">
                                <div className="">
                                    <Image
                                        src="assets/images/p2p-how-2.svg"
                                        width={35}
                                        height={35}
                                        alt="btc"
                                        className="howitflexp2picon"
                                    />
                                </div>
                                <div>
                                    <h5 className="text-center">2.Make the Payment</h5>
                                    <p className="text-center">
                                        Enter the trade amount and complete the payment using the selected payment method.
                                    </p>
                                </div>
                            </div>

                            <div className="arrowptop">
                                <Image
                                    src="assets/images/arrhome.svg"
                                    width={35}
                                    height={35}
                                    alt="btc"
                                    className="arrhomeicon"
                                />
                            </div>

                            <div className="howitboxp2p">
                                <div className="">
                                    <Image
                                        src="assets/images/p2p-how-3.svg"
                                        width={35}
                                        height={35}
                                        alt="btc"
                                        className="howitflexp2picon"
                                    />
                                </div>
                                <div>
                                    <h5 className="text-center">3.Receive Your Crypto</h5>
                                    <p className="text-center">
                                        Once the payment is confirmed, the crypto is securely released from escrow directly to your wallet.
                                    </p>
                                </div>
                            </div>
                        </div>



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
                                                What is P2P Trading?
                                            </Accordion.Header>

                                            <Accordion.Body>
                                                P2P (Peer-to-Peer) trading allows users to buy and sell cryptocurrencies directly with other users using their preferred payment methods.
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
                                                Yes. Our secure escrow system helps protect both buyers and sellers by holding the crypto safely until the transaction is successfully completed.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item
                                            eventKey="3"
                                            className={activeKey === "3" ? "active" : ""}
                                        >
                                            <Accordion.Header>
                                                How do I buy crypto using P2P?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Choose a seller, enter the amount you want to buy, complete the payment using the selected payment method, and receive your crypto once the seller confirms the payment.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item
                                            eventKey="4"
                                            className={activeKey === "4" ? "active" : ""}
                                        >
                                            <Accordion.Header>
                                                How do I sell crypto using P2P?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Create or select a sell order, wait for a buyer to place an order, confirm that you have received the payment, and then release the crypto securely.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item
                                            eventKey="5"
                                            className={activeKey === "5" ? "active" : ""}
                                        >
                                            <Accordion.Header>
                                                Are there any fees for P2P Trading?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Fees may vary depending on the platform and transaction type. You can review all applicable fees before confirming your trade.
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
        </>
    )
}

export default earn