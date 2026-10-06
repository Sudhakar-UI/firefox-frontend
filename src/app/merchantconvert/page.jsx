"use client"
import React from 'react'
import Link from 'next/link'
import { Container, Form, Table, InputGroup, Row, Col, Image, FormCheck, NavDropdown } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import Leftsidemenu from '../components/Leftsidemenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../components/ResponsiveTable';

const Merchantconvert = () => {

    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent">
                <Container className="sitecontainer">
                    <h2 className="h2">Auto Convert</h2>
                    <div className="tabrightbox">
                        <Link href="/merchantsettings" className="btn sitebtn btn-sm" id="backbtn">Back</Link>
                    </div>
                </Container>
            </div>

            <article className="gridparentbox">
                <Container className="sitecontainer">
                    <div className="panelcontentbox convertautopage">
                        <div className="mb-3 historsysrch">
                            <div className="searchfrmbox">
                                <Form className="siteformbg d-flex justify-content-between align-items-center">
                                    <Form.Group className="form-group mb-0 searchfrm">
                                        <Form.Control type="text" placeholder="Search Coins" />
                                    </Form.Group>
                                    <Link
                                        href="paymentdetailhistory"
                                        className="btn sitebtn btn-sm"
                                        id="backbtn"
                                    >
                                       View More
                                    </Link>
                                </Form>
                            </div>
                        </div>
                        <Row className="coinleftviewbox">
                            <Col xl={4} lg={6} md={6}>
                                <div className="lightgraybg">
                                    <Table className="sitetable mb-0" id="table1">
                                        <tbody>
                                            <tr>
                                                <td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" /><Image src="assets/images/color/usdt.svg" width={50} height={50} alt="coin" className="coinlisticon" /></td>
                                                <td className="swtchtogglebox">
                                                    <FormCheck type="switch" id="radio" label="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>SOL<span className="ms-1 me-1"><FontAwesomeIcon icon={faAngleRight} /></span>
                                                    <span className="currencycrtdrop">USDT</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>Conversion commission · 0.00%</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                            <Col xl={4} lg={6} md={6}>
                                <div className="lightgraybg">
                                    <Table className="sitetable mb-0" id="table1">
                                        <tbody>
                                            <tr>
                                                <td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" /><Image src="assets/images/color/usdt.svg" width={50} height={50} alt="coin" className="coinlisticon" /></td>
                                                <td className="swtchtogglebox">
                                                    <FormCheck type="switch" id="radio" label="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>SOL<span className="ms-1 me-1"><FontAwesomeIcon icon={faAngleRight} /></span><span className="currencycrtdrop">
                                                    <NavDropdown title={<div className="">USDT <FontAwesomeIcon icon={faAngleDown} /></div>} id="basic-nav-dropdown">
                                                        <Form className="siteformbg">
                                                            <div className="searchfrm pt-2">
                                                                <Form.Group className="form-group">
                                                                    <Form.Control type="text" placeholder="Search Coin" />
                                                                </Form.Group>
                                                            </div>
                                                        </Form>
                                                        <NavDropdown.Item as={Link} href="#">USDT</NavDropdown.Item>
                                                        <NavDropdown.Item as={Link} href="#">TRX</NavDropdown.Item>
                                                    </NavDropdown></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>Conversion commission · 0.00%</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                            <Col xl={4} lg={6} md={6}>
                                <div className="lightgraybg">
                                    <Table className="sitetable mb-0" id="table1">
                                        <tbody>
                                            <tr>
                                                <td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" /><Image src="assets/images/color/usdt.svg" width={50} height={50} alt="coin" className="coinlisticon" /></td>
                                                <td className="swtchtogglebox">
                                                    <FormCheck type="switch" id="radio" label="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>SOL<span className="ms-1 me-1"><FontAwesomeIcon icon={faAngleRight} /></span><span className="currencycrtdrop">
                                                    <NavDropdown title={<div className="">USDT <FontAwesomeIcon icon={faAngleDown} /></div>} id="basic-nav-dropdown">
                                                        <Form className="siteformbg">
                                                            <div className="searchfrm pt-2">
                                                                <Form.Group className="form-group">
                                                                    <Form.Control type="text" placeholder="Search Coin" />
                                                                </Form.Group>
                                                            </div>
                                                        </Form>
                                                        <NavDropdown.Item as={Link} href="#">USDT</NavDropdown.Item>
                                                        <NavDropdown.Item as={Link} href="#">TRX</NavDropdown.Item>
                                                    </NavDropdown></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>Conversion commission · 0.00%</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                            <Col xl={4} lg={6} md={6}>
                                <div className="lightgraybg">
                                    <Table className="sitetable mb-0" id="table1">
                                        <tbody>
                                            <tr>
                                                <td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" /><Image src="assets/images/color/usdt.svg" width={50} height={50} alt="coin" className="coinlisticon" /></td>
                                                <td className="swtchtogglebox">
                                                    <FormCheck type="switch" id="radio" label="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>SOL<span className="ms-1 me-1"><FontAwesomeIcon icon={faAngleRight} /></span><span className="currencycrtdrop">
                                                    <NavDropdown title={<div className="">USDT <FontAwesomeIcon icon={faAngleDown} /></div>} id="basic-nav-dropdown">
                                                        <Form className="siteformbg">
                                                            <div className="searchfrm pt-2">
                                                                <Form.Group className="form-group">
                                                                    <Form.Control type="text" placeholder="Search Coin" />
                                                                </Form.Group>
                                                            </div>
                                                        </Form>
                                                        <NavDropdown.Item as={Link} href="#">USDT</NavDropdown.Item>
                                                        <NavDropdown.Item as={Link} href="#">TRX</NavDropdown.Item>
                                                    </NavDropdown></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>Conversion commission · 0.00%</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                            <Col xl={4} lg={6} md={6}>
                                <div className="lightgraybg">
                                    <Table className="sitetable mb-0" id="table1">
                                        <tbody>
                                            <tr>
                                                <td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" /><Image src="assets/images/color/usdt.svg" width={50} height={50} alt="coin" className="coinlisticon" /></td>
                                                <td className="swtchtogglebox">
                                                    <FormCheck type="switch" id="radio" label="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>SOL<span className="ms-1 me-1"><FontAwesomeIcon icon={faAngleRight} /></span><span className="currencycrtdrop">
                                                    <NavDropdown title={<div className="">USDT <FontAwesomeIcon icon={faAngleDown} /></div>} id="basic-nav-dropdown">
                                                        <Form className="siteformbg">
                                                            <div className="searchfrm pt-2">
                                                                <Form.Group className="form-group">
                                                                    <Form.Control type="text" placeholder="Search Coin" />
                                                                </Form.Group>
                                                            </div>
                                                        </Form>
                                                        <NavDropdown.Item as={Link} href="#">USDT</NavDropdown.Item>
                                                        <NavDropdown.Item as={Link} href="#">TRX</NavDropdown.Item>
                                                    </NavDropdown></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>Conversion commission · 0.00%</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                            <Col xl={4} lg={6} md={6}>
                                <div className="lightgraybg">
                                    <Table className="sitetable mb-0" id="table1">
                                        <tbody>
                                            <tr>
                                                <td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" /><Image src="assets/images/color/usdt.svg" width={50} height={50} alt="coin" className="coinlisticon" /></td>
                                                <td className="swtchtogglebox">
                                                    <FormCheck type="switch" id="radio" label="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>SOL<span className="ms-1 me-1"><FontAwesomeIcon icon={faAngleRight} /></span><span className="currencycrtdrop">
                                                    <NavDropdown title={<div className="">USDT <FontAwesomeIcon icon={faAngleDown} /></div>} id="basic-nav-dropdown">
                                                        <Form className="siteformbg">
                                                            <div className="searchfrm pt-2">
                                                                <Form.Group className="form-group">
                                                                    <Form.Control type="text" placeholder="Search Coin" />
                                                                </Form.Group>
                                                            </div>
                                                        </Form>
                                                        <NavDropdown.Item as={Link} href="#">USDT</NavDropdown.Item>
                                                        <NavDropdown.Item as={Link} href="#">TRX</NavDropdown.Item>
                                                    </NavDropdown></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>Conversion commission · 0.00%</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                            <Col xl={4} lg={6} md={6}>
                                <div className="lightgraybg">
                                    <Table className="sitetable mb-0" id="table1">
                                        <tbody>
                                            <tr>
                                                <td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" /><Image src="assets/images/color/usdt.svg" width={50} height={50} alt="coin" className="coinlisticon" /></td>
                                                <td className="swtchtogglebox">
                                                    <FormCheck type="switch" id="radio" label="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>SOL<span className="ms-1 me-1"><FontAwesomeIcon icon={faAngleRight} /></span><span className="currencycrtdrop">
                                                    <NavDropdown title={<div className="">USDT <FontAwesomeIcon icon={faAngleDown} /></div>} id="basic-nav-dropdown">
                                                        <Form className="siteformbg">
                                                            <div className="searchfrm pt-2">
                                                                <Form.Group className="form-group">
                                                                    <Form.Control type="text" placeholder="Search Coin" />
                                                                </Form.Group>
                                                            </div>
                                                        </Form>
                                                        <NavDropdown.Item as={Link} href="#">USDT</NavDropdown.Item>
                                                        <NavDropdown.Item as={Link} href="#">TRX</NavDropdown.Item>
                                                    </NavDropdown></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>Conversion commission · 0.00%</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                            <Col xl={4} lg={6} md={6}>
                                <div className="lightgraybg">
                                    <Table className="sitetable mb-0" id="table1">
                                        <tbody>
                                            <tr>
                                                <td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" /><Image src="assets/images/color/usdt.svg" width={50} height={50} alt="coin" className="coinlisticon" /></td>
                                                <td className="swtchtogglebox">
                                                    <FormCheck type="switch" id="radio" label="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>SOL<span className="ms-1 me-1"><FontAwesomeIcon icon={faAngleRight} /></span><span className="currencycrtdrop">
                                                    <NavDropdown title={<div className="">USDT <FontAwesomeIcon icon={faAngleDown} /></div>} id="basic-nav-dropdown">
                                                        <Form className="siteformbg">
                                                            <div className="searchfrm pt-2">
                                                                <Form.Group className="form-group">
                                                                    <Form.Control type="text" placeholder="Search Coin" />
                                                                </Form.Group>
                                                            </div>
                                                        </Form>
                                                        <NavDropdown.Item as={Link} href="#">USDT</NavDropdown.Item>
                                                        <NavDropdown.Item as={Link} href="#">TRX</NavDropdown.Item>
                                                    </NavDropdown></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>Conversion commission · 0.00%</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                            <Col xl={4} lg={6} md={6}>
                                <div className="lightgraybg">
                                    <Table className="sitetable mb-0" id="table1">
                                        <tbody>
                                            <tr>
                                                <td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" /><Image src="assets/images/color/usdt.svg" width={50} height={50} alt="coin" className="coinlisticon" /></td>
                                                <td className="swtchtogglebox">
                                                    <FormCheck type="switch" id="radio" label="" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>SOL<span className="ms-1 me-1"><FontAwesomeIcon icon={faAngleRight} /></span><span className="currencycrtdrop">
                                                    <NavDropdown title={<div className="">USDT <FontAwesomeIcon icon={faAngleDown} /></div>} id="basic-nav-dropdown">
                                                        <Form className="siteformbg">
                                                            <div className="searchfrm pt-2">
                                                                <Form.Group className="form-group">
                                                                    <Form.Control type="text" placeholder="Search Coin" />
                                                                </Form.Group>
                                                            </div>
                                                        </Form>
                                                        <NavDropdown.Item as={Link} href="#">USDT</NavDropdown.Item>
                                                        <NavDropdown.Item as={Link} href="#">TRX</NavDropdown.Item>
                                                    </NavDropdown></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>Conversion commission · 0.00%</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </article>
            <Userfooter />
        </div>
    )
}

export default Merchantconvert;