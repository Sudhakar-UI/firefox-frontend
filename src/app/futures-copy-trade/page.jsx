"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';
import { Container, Image, Row, Col, Nav, Table, Form, Tab, Badge, Accordion, InputGroup, Button, Dropdown, Alert } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faEye, faSearch, faStar, faUser } from '@fortawesome/free-solid-svg-icons';


const FuturesCopyTrade = () => {

    useEffect(() => {
        document.body.classList.add('featurescopytrade');

        return () => {
            document.body.classList.remove("featurescopytrade");
        };
    });

    const [activeKey, setActiveKey] = useState("1");
    const [isHovered, setIsHovered] = useState(false);

    const handleToggle = (key) => {
        setActiveKey(activeKey === key ? null : key);
    };

    return (
        <div className='copymodules cpytrade'>
            <Homeheader />
            <section className="savingbannersec announcebanner ieobannerbg spotcpy-y">
                <Container>
                    <Row className="row align-items-center">
                        <Col lg={6}>
                            <h2 className="heading-title"><span className="t-yellow">Firefox Trader</span> Copy Trade</h2>
                            <p className="content">Maximize your crypto gains effortlessly-mirror the trades of top investors with our seamless copy trading platform. Get started today and let the experts lead the way to your financial success!</p>
                            <div className="join-as-y">
                                <Link href='#' className='btn sitebtn my-2' id='joinbtn'>Join as a Lead Trader</Link>
                            </div>
                        </Col>

                        {/* <Col lg={6}>
                            <h2 className="heading-title"><span className="t-yellow">Firefox Trader</span> Copy Trade</h2>
                            <p className="content">Maximize your crypto gains effortlessly-mirror the trades of top investors with our seamless copy trading platform. Get started today and let the experts lead the way to your financial success!</p>
                            <Link href='#' className='btn sitebtn my-2' id='joinbtn'>Join as a Lead Trader</Link>
                        </Col> */}
                        <Col lg={6} className="text-end">
                            {/* <Image src="assets/images/copytrade.png" className='copytradeimg' alt='copytradeimg' width={100} height={100} /> */}
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="twotablesec copytwotabsec">
                <Container data-aos="fade-up" data-aos-duration="1000">
                    <div className="markettabflex">
                        <Nav activeKey="/futures-copy-trade" className="nav nav-tabs" role="tablist">
                            <Nav.Item className="nav-item">
                                <Nav.Link href="/futures-copy-trade" id='futtab' className="nav-link nav-link-y-pnl">Futures</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Nav.Link className="nav-link nav-link-y-pnl" id='spottab' href="/spot-copy-trade">Spot</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <div className="cpytradibox pt-3">
                        <h2 className="heading-title">Futures Copy Trading</h2>
                        <p className='unlock-p-y'>Unlock the potential of top crypto traders-mirror their moves with a single click and watch your portfolio thrive.</p>
                        <div className="spotcpytrade">
                            <div className="ourbox">
                                <div className="">
                                    <div className="table-content">
                                        <div className="prodimg"> <span className="landingicon">
                                            <Image src="assets/images/announcement.svg" className="lightthemeicon" width={50} height={50} alt="icon" />
                                            <Image src="assets/images/announcement1.svg" className="darkthemeicon" width={50} height={50} alt="icon" />
                                        </span>
                                        </div>
                                        <div className="needhelpcontent">
                                            <h4 className="sub-heading">Latest Announcements</h4>
                                            <p className="content">Trade, Automate, or Copy on Firefox Trader Spot and share in $100,000 USDC in rewards and exclusive loss protection!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ourbox">
                                <div className="">
                                    <div className="table-content">
                                        <div className="prodimg"> <span className="landingicon">
                                            <Image src="assets/images/join.svg" className="lightthemeicon" width={50} height={50} alt="icon" />
                                            <Image src="assets/images/join1.svg" className="darkthemeicon" width={50} height={50} alt="icon" />
                                        </span> </div>
                                        <div className="needhelpcontent">
                                            <h4 className="sub-heading">Join elite trader program</h4>
                                            <p className="content">Step into elite trading Get rewarded with up to 30% profit share and elevate your performance</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="balancesec pt-2">
                <Container>
                    <h2 className="heading-title">My Copy Trade Overview</h2>
                    <div className="cpytradeovr text-start mt-4 align-items-center">
                        <div className="cpytradediv border-0">
                            <div className="table-content">
                                <div className="prodimg"> <span className="landingicon">
                                    <Image src="assets/images/copy-balance.svg" className="lightthemeicon" width={50} height={50} alt="icon" />
                                    <Image src="assets/images/copy-balance1.svg" className="darkthemeicon" width={50} height={50} alt="icon" />
                                </span> </div>
                                <div className="needhelpcontent">
                                    <p className="content">Total Copying Balance <span> <FontAwesomeIcon icon={faEye} /></span></p> <span className="fntstar"><b>*********</b></span>
                                </div>
                            </div>
                        </div>
                        <div className="cpytradediv border-0">
                            <div className="table-content">
                                <div className="needhelpcontent">
                                    <p className="content">Total Unrealized PnL</p> <span className="fntstar"><b>*********</b></span> </div>
                            </div>
                        </div>
                        <div className="cpytradediv border-0 text-end">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>
                </Container>
            </section>


            <section className="twotablesec copytwotypetabsec pt-2">
                <Container>
                    <Tab.Container defaultActiveKey="portfolio">
                        <div className="markettabflex">
                            <div className="parentabsec">
                                <Nav variant="tabs" className="nav nav-tabs" role="tablist">
                                    <Nav.Item className="nav-item"> <Nav.Link className="nav-link nav-link-y-pnl" id='porttab' eventKey="portfolio">Portfolio</Nav.Link> </Nav.Item>
                                    <Nav.Item className="nav-item"> <Nav.Link className="nav-link nav-link-y-pnl" id='favtab' eventKey="myfav">My Favorites</Nav.Link> </Nav.Item>
                                </Nav>
                            </div>
                        </div>
                        <div className="tabrightbox tabratiobspot seemoretab d-flex drp-dwn-icon">
                            <div className='d-flex hoversearch align-items-center'
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                {!isHovered && (
                                    <FontAwesomeIcon icon={faSearch} />
                                )}
                                {isHovered && (
                                    <Form className='siteformbg'>
                                        <InputGroup>
                                            <Form.Control
                                                id='tradername'
                                                type="text"
                                                placeholder="Trader's Name..."
                                                aria-label="Search"
                                            />
                                        </InputGroup>
                                    </Form>
                                )}
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    <Image alt='coin' width={20} height={20} src="assets/images/filter.svg" className="ms-2 me-3" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as="div">
                                        <Form.Check id='hidefoliocheck' type="checkbox" label="Hide Full Portfolios" />
                                    </Dropdown.Item>
                                    <Dropdown.Item as="div">
                                        <Form.Check id='apicheck' type="checkbox" label="API" />
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Tab.Content className="tab-content">
                            <Tab.Pane eventKey="portfolio">
                                <Tab.Container defaultActiveKey='pnl'>
                                    <Nav className="nav nav-tabs border-0" role="tablist">
                                        <Nav.Item className="nav-item searchdrop">
                                            <Form className="siteformbg">
                                                <Form.Select id='selectdur' className="form-control">
                                                    <option>7D</option>
                                                    <option>30D</option>
                                                    <option>90D</option>
                                                </Form.Select>
                                            </Form>
                                        </Nav.Item>
                                        <Nav.Item className="nav-item"> <Nav.Link className="nav-link nav-link-y-pnl" id='pnltab' eventKey="pnl">PnL</Nav.Link> </Nav.Item>
                                        <Nav.Item className="nav-item"> <Nav.Link className="nav-link nav-link-y-pnl" id='roitab' eventKey="roi">ROI</Nav.Link> </Nav.Item>
                                        <Nav.Item className="nav-item"> <Nav.Link className="nav-link nav-link-y-pnl" id='mddtab' eventKey="mdd">MDD</Nav.Link> </Nav.Item>
                                        <Nav.Item className="nav-item"> <Nav.Link className="nav-link nav-link-y-pnl" id='aumtab' eventKey="aum">AUM</Nav.Link> </Nav.Item>
                                        <Nav.Item className="nav-item"> <Nav.Link className="nav-link nav-link-y-pnl" id='copytradertab' eventKey="copytrader">Copy Traders</Nav.Link> </Nav.Item>
                                        <Nav.Item className="nav-item"> <Nav.Link className="nav-link nav-link-y-pnl" id='copytraderpnltab' eventKey="copytraderpnl">Copy Trader PnL</Nav.Link> </Nav.Item>
                                        <Nav.Item className="nav-item"> <Nav.Link className="nav-link nav-link-y-pnl" id='sharpratiotab' eventKey="sharpratio">Sharp Ratio</Nav.Link> </Nav.Item>
                                    </Nav>
                                    <Tab.Content className="tab-content">
                                        <Tab.Pane eventKey="pnl" className="tab-pane fade in">
                                            <div className="cardbox">
                                                {/* <div className="cardnodatabox">
                                                    <SimpleBar className="table-reponsive sitescroll pnl-brd-y">
                                                        <Table id='table1' className="table sitetable">
                                                            <tbody>
                                                                <tr className="nodata">
                                                                    <td>
                                                                        <Image alt='profimg' width={20} height={20} src="assets/images/nodata.svg" />No record found
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </SimpleBar>
                                                </div> */}

                                                <div className="cardlistbox">
                                                    <Link href="spot-copy-trade-1">
                                                        <div className="panelcontentbox p-0">
                                                            <Table id='table2' className="table sitetable">
                                                                <tbody>
                                                                    <tr className="head_table">
                                                                        <td><span className="countparentdiv"><span><Image alt='profimg' width={20} height={20} src="assets/images/user-profile.svg" className="profileimg" /></span> <span className="t-darkblue">Cameron Williamson<div className="usercount"><FontAwesomeIcon icon={faUser} /> 426/500</div></span></span>
                                                                        </td>
                                                                        <td className="text-end"><span className="starticon active"><FontAwesomeIcon icon={faStar} /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><span className="chartrghtcon"><div>7D PNL</div><div className="t-green txtbig">+27,957.58</div><div>ROI <span className="t-green">+.27.97%</span></div></span></td>
                                                                        <td className="text-end"><span><Image alt='profimg' width={20} height={20} className='chartblue' src="assets/images/chart-green.svg" /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="lineptn">
                                                                            <hr className="mt-0 mb-0" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="maintablebox p-0">
                                                                            <Table id='table3' className="table sitetable">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>AUM</td>
                                                                                        <td className="text-end"><span><div className="shortnotes">195,204.83</div></span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>7D MDD</td>
                                                                                        <td className="text-end"><span>1.29%</span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Sharpe Ratio</td>
                                                                                        <td className="text-end"><span>-</span></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </Table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2}><Link href="/spot-copy-trade-2" id='cpybtn' className="btn sitebtn herobtn">Copy</Link></td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="cardlistbox">
                                                    <Link href="spot-copy-trade-1">
                                                        <div className="panelcontentbox p-0">
                                                            <Table id='table4' className="table sitetable">
                                                                <tbody>
                                                                    <tr className="head_table">
                                                                        <td><span className="countparentdiv"><span><Image alt='profimg' width={20} height={20} src="assets/images/user-profile.svg" className="profileimg" /></span> <span className="t-darkblue">Cameron Williamson<div className="usercount"><FontAwesomeIcon icon={faUser} /> 426/500</div></span></span>
                                                                        </td>
                                                                        <td className="text-end"><span className="starticon active"><FontAwesomeIcon icon={faStar} /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><span className="chartrghtcon"><div>7D PNL</div><div className="t-green txtbig">+27,957.58</div><div>ROI <span className="t-green">+.27.97%</span></div></span></td>
                                                                        <td className="text-end"><span><Image alt='profimg' width={20} height={20} className='chartblue' src="assets/images/chart-green.svg" /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="lineptn">
                                                                            <hr className="mt-0 mb-0" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="maintablebox p-0">
                                                                            <Table id='table5' className="table sitetable">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>AUM</td>
                                                                                        <td className="text-end"><span><div className="shortnotes">195,204.83</div></span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>7D MDD</td>
                                                                                        <td className="text-end"><span>1.29%</span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Sharpe Ratio</td>
                                                                                        <td className="text-end"><span>-</span></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </Table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2}><Link href="#" id='cpybtn' className="btn sitebtn herobtn">Copy</Link></td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="cardlistbox">
                                                    <Link href="spot-copy-trade-1">
                                                        <div className="panelcontentbox p-0">
                                                            <Table id='table6' className="table sitetable">
                                                                <tbody>
                                                                    <tr className="head_table">
                                                                        <td><span className="countparentdiv"><span><Image alt='profimg' width={20} height={20} src="assets/images/user-profile.svg" className="profileimg" /></span> <span className="t-darkblue">Cameron Williamson<div className="usercount"><FontAwesomeIcon icon={faUser} /> 426/500</div></span></span>
                                                                        </td>
                                                                        <td className="text-end"><span className="starticon active"><FontAwesomeIcon icon={faStar} /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><span className="chartrghtcon"><div>7D PNL</div><div className="t-green txtbig">+27,957.58</div><div>ROI <span className="t-green">+.27.97%</span></div></span></td>
                                                                        <td className="text-end"><span><Image alt='profimg' width={20} height={20} className='chartblue' src="assets/images/chart-green.svg" /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="lineptn">
                                                                            <hr className="mt-0 mb-0" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="maintablebox p-0">
                                                                            <Table id='table7' className="table sitetable">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>AUM</td>
                                                                                        <td className="text-end"><span><div className="shortnotes">195,204.83</div></span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>7D MDD</td>
                                                                                        <td className="text-end"><span>1.29%</span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Sharpe Ratio</td>
                                                                                        <td className="text-end"><span>-</span></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </Table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2}><Link href="#" id='cpybtn' className="btn sitebtn herobtn">Copy</Link></td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="cardlistbox">
                                                    <Link href="spot-copy-trade-1">
                                                        <div className="panelcontentbox p-0">
                                                            <Table id='table8' className="table sitetable">
                                                                <tbody>
                                                                    <tr className="head_table">
                                                                        <td><span className="countparentdiv"><span><Image alt='profimg' width={20} height={20} src="assets/images/user-profile.svg" className="profileimg" /></span> <span className="t-darkblue">Cameron Williamson<div className="usercount"><FontAwesomeIcon icon={faUser} /> 426/500</div></span></span>
                                                                        </td>
                                                                        <td className="text-end"><span className="starticon active"><FontAwesomeIcon icon={faStar} /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><span className="chartrghtcon"><div>7D PNL</div><div className="t-green txtbig">+27,957.58</div><div>ROI <span className="t-green">+.27.97%</span></div></span></td>
                                                                        <td className="text-end"><span><Image alt='profimg' width={20} height={20} className='chartblue' src="assets/images/chart-green.svg" /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="lineptn">
                                                                            <hr className="mt-0 mb-0" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="maintablebox p-0">
                                                                            <Table id='table9' className="table sitetable">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>AUM</td>
                                                                                        <td className="text-end"><span><div className="shortnotes">195,204.83</div></span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>7D MDD</td>
                                                                                        <td className="text-end"><span>1.29%</span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Sharpe Ratio</td>
                                                                                        <td className="text-end"><span>-</span></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </Table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2}><Link href="#" id='cpybtn' className="btn sitebtn herobtn">Copy</Link></td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="cardlistbox">
                                                    <Link href="spot-copy-trade-1">
                                                        <div className="panelcontentbox p-0">
                                                            <Table id='table10' className="table sitetable">
                                                                <tbody>
                                                                    <tr className="head_table">
                                                                        <td><span className="countparentdiv"><span><Image alt='profimg' width={20} height={20} src="assets/images/user-profile.svg" className="profileimg" /></span> <span className="t-darkblue">Cameron Williamson<div className="usercount"><FontAwesomeIcon icon={faUser} /> 426/500</div></span></span>
                                                                        </td>
                                                                        <td className="text-end"><span className="starticon active"><FontAwesomeIcon icon={faStar} /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><span className="chartrghtcon"><div>7D PNL</div><div className="t-green txtbig">+27,957.58</div><div>ROI <span className="t-green">+.27.97%</span></div></span></td>
                                                                        <td className="text-end"><span><Image alt='profimg' width={20} height={20} className='chartblue' src="assets/images/chart-green.svg" /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="lineptn">
                                                                            <hr className="mt-0 mb-0" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="maintablebox p-0">
                                                                            <Table id='table11' className="table sitetable">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>AUM</td>
                                                                                        <td className="text-end"><span><div className="shortnotes">195,204.83</div></span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>7D MDD</td>
                                                                                        <td className="text-end"><span>1.29%</span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Sharpe Ratio</td>
                                                                                        <td className="text-end"><span>-</span></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </Table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2}><Link href="#" id='cpybtn' className="btn sitebtn herobtn">Copy</Link></td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="cardlistbox">
                                                    <Link href="spot-copy-trade-1">
                                                        <div className="panelcontentbox p-0">
                                                            <Table id='table12' className="table sitetable">
                                                                <tbody>
                                                                    <tr className="head_table">
                                                                        <td><span className="countparentdiv"><span><Image alt='profimg' width={20} height={20} src="assets/images/user-profile.svg" className="profileimg" /></span> <span className="t-darkblue">Cameron Williamson<div className="usercount"><FontAwesomeIcon icon={faUser} /> 426/500</div></span></span>
                                                                        </td>
                                                                        <td className="text-end"><span className="starticon active"><FontAwesomeIcon icon={faStar} /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><span className="chartrghtcon"><div>7D PNL</div><div className="t-green txtbig">+27,957.58</div><div>ROI <span className="t-green">+.27.97%</span></div></span></td>
                                                                        <td className="text-end"><span><Image alt='profimg' width={20} height={20} className='chartblue' src="assets/images/chart-green.svg" /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="lineptn">
                                                                            <hr className="mt-0 mb-0" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="maintablebox p-0">
                                                                            <Table id='table13' className="table sitetable">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>AUM</td>
                                                                                        <td className="text-end"><span><div className="shortnotes">195,204.83</div></span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>7D MDD</td>
                                                                                        <td className="text-end"><span>1.29%</span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Sharpe Ratio</td>
                                                                                        <td className="text-end"><span>-</span></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </Table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2}><Link href="#" id='cpybtn' className="btn sitebtn herobtn">Copy</Link></td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="roi" className="tab-pane fade in">
                                            <div className="cardbox">
                                                <div className="cardlistbox">
                                                    <Link href="spot-copy-trade-1">
                                                        <div className="panelcontentbox p-0">
                                                            <Table id='table14' className="table sitetable">
                                                                <tbody>
                                                                    <tr className="head_table">
                                                                        <td><span className="countparentdiv"><span><Image alt='profimg' width={20} height={20} src="assets/images/user-profile.svg" className="profileimg" /></span> <span className="t-darkblue">Cameron Williamson<div className="usercount"><FontAwesomeIcon icon={faUser} /> 426/500</div></span></span>
                                                                        </td>
                                                                        <td className="text-end"><span className="starticon active"><FontAwesomeIcon icon={faStar} /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><span className="chartrghtcon"><div>7D PNL</div><div className="t-green txtbig">+27,957.58</div><div>ROI <span className="t-green">+.27.97%</span></div></span></td>
                                                                        <td className="text-end"><span><Image alt='profimg' width={20} height={20} className='chartblue' src="assets/images/chart-green.svg" /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="lineptn">
                                                                            <hr className="mt-0 mb-0" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="maintablebox p-0">
                                                                            <Table id='table15' className="table sitetable">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>AUM</td>
                                                                                        <td className="text-end"><span><div className="shortnotes">195,204.83</div></span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>7D MDD</td>
                                                                                        <td className="text-end"><span>1.29%</span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Sharpe Ratio</td>
                                                                                        <td className="text-end"><span>-</span></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </Table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2}><Link href="#" id='cpybtn' className="btn sitebtn herobtn">Copy</Link></td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="cardlistbox">
                                                    <Link href="spot-copy-trade-1">
                                                        <div className="panelcontentbox p-0">
                                                            <Table id='table16' className="table sitetable">
                                                                <tbody>
                                                                    <tr className="head_table">
                                                                        <td><span className="countparentdiv"><span><Image alt='profimg' width={20} height={20} src="assets/images/user-profile.svg" className="profileimg" /></span> <span className="t-darkblue">Cameron Williamson<div className="usercount"><FontAwesomeIcon icon={faUser} /> 426/500</div></span></span>
                                                                        </td>
                                                                        <td className="text-end"><span className="starticon active"><FontAwesomeIcon icon={faStar} /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><span className="chartrghtcon"><div>7D PNL</div><div className="t-green txtbig">+27,957.58</div><div>ROI <span className="t-green">+.27.97%</span></div></span></td>
                                                                        <td className="text-end"><span><Image alt='profimg' width={20} height={20} className='chartblue' src="assets/images/chart-green.svg" /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="lineptn">
                                                                            <hr className="mt-0 mb-0" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="maintablebox p-0">
                                                                            <Table id='table17' className="table sitetable">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>AUM</td>
                                                                                        <td className="text-end"><span><div className="shortnotes">195,204.83</div></span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>7D MDD</td>
                                                                                        <td className="text-end"><span>1.29%</span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Sharpe Ratio</td>
                                                                                        <td className="text-end"><span>-</span></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </Table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2}><Link href="#" id='cpybtn' className="btn sitebtn herobtn">Copy</Link></td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="cardlistbox">
                                                    <Link href="spot-copy-trade-1">
                                                        <div className="panelcontentbox p-0">
                                                            <Table id='table18' className="table sitetable">
                                                                <tbody>
                                                                    <tr className="head_table">
                                                                        <td><span className="countparentdiv"><span><Image alt='profimg' width={20} height={20} src="assets/images/user-profile.svg" className="profileimg" /></span> <span className="t-darkblue">Cameron Williamson<div className="usercount"><FontAwesomeIcon icon={faUser} /> 426/500</div></span></span>
                                                                        </td>
                                                                        <td className="text-end"><span className="starticon active"><FontAwesomeIcon icon={faStar} /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><span className="chartrghtcon"><div>7D PNL</div><div className="t-green txtbig">+27,957.58</div><div>ROI <span className="t-green">+.27.97%</span></div></span></td>
                                                                        <td className="text-end"><span><Image alt='profimg' width={20} height={20} className='chartblue' src="assets/images/chart-green.svg" /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="lineptn">
                                                                            <hr className="mt-0 mb-0" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="maintablebox p-0">
                                                                            <Table id='table19' className="table sitetable">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>AUM</td>
                                                                                        <td className="text-end"><span><div className="shortnotes">195,204.83</div></span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>7D MDD</td>
                                                                                        <td className="text-end"><span>1.29%</span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Sharpe Ratio</td>
                                                                                        <td className="text-end"><span>-</span></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </Table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2}><Link href="#" id='cpybtn' className="btn sitebtn herobtn">Copy</Link></td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="mdd" className="tab-pane fade in">
                                            <div className="cardbox">
                                                <div className="cardlistbox">
                                                    <Link href="spot-copy-trade-1">
                                                        <div className="panelcontentbox p-0">
                                                            <Table id='table20' className="table sitetable">
                                                                <tbody>
                                                                    <tr className="head_table">
                                                                        <td><span className="countparentdiv"><span><Image alt='profimg' width={20} height={20} src="assets/images/user-profile.svg" className="profileimg" /></span> <span className="t-darkblue">Cameron Williamson<div className="usercount"><FontAwesomeIcon icon={faUser} /> 426/500</div></span></span>
                                                                        </td>
                                                                        <td className="text-end"><span className="starticon active"><FontAwesomeIcon icon={faStar} /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><span className="chartrghtcon"><div>7D PNL</div><div className="t-green txtbig">+27,957.58</div><div>ROI <span className="t-green">+.27.97%</span></div></span></td>
                                                                        <td className="text-end"><span><Image alt='profimg' width={20} height={20} className='chartblue' src="assets/images/chart-green.svg" /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="lineptn">
                                                                            <hr className="mt-0 mb-0" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="maintablebox p-0">
                                                                            <Table id='table21' className="table sitetable">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>AUM</td>
                                                                                        <td className="text-end"><span><div className="shortnotes">195,204.83</div></span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>7D MDD</td>
                                                                                        <td className="text-end"><span>1.29%</span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Sharpe Ratio</td>
                                                                                        <td className="text-end"><span>-</span></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </Table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2}><Link href="#" id='cpybtn' className="btn sitebtn herobtn">Copy</Link></td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="cardlistbox">
                                                    <Link href="spot-copy-trade-1">
                                                        <div className="panelcontentbox p-0">
                                                            <Table id='table22' className="table sitetable">
                                                                <tbody>
                                                                    <tr className="head_table">
                                                                        <td><span className="countparentdiv"><span><Image alt='profimg' width={20} height={20} src="assets/images/user-profile.svg" className="profileimg" /></span> <span className="t-darkblue">Cameron Williamson<div className="usercount"><FontAwesomeIcon icon={faUser} /> 426/500</div></span></span>
                                                                        </td>
                                                                        <td className="text-end"><span className="starticon active"><FontAwesomeIcon icon={faStar} /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><span className="chartrghtcon"><div>7D PNL</div><div className="t-green txtbig">+27,957.58</div><div>ROI <span className="t-green">+.27.97%</span></div></span></td>
                                                                        <td className="text-end"><span><Image alt='profimg' width={20} height={20} className='chartblue' src="assets/images/chart-green.svg" /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="lineptn">
                                                                            <hr className="mt-0 mb-0" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="maintablebox p-0">
                                                                            <Table id='table23' className="table sitetable">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>AUM</td>
                                                                                        <td className="text-end"><span><div className="shortnotes">195,204.83</div></span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>7D MDD</td>
                                                                                        <td className="text-end"><span>1.29%</span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Sharpe Ratio</td>
                                                                                        <td className="text-end"><span>-</span></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </Table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2}><Link href="#" id='cpybtn' className="btn sitebtn herobtn">Copy</Link></td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="cardlistbox">
                                                    <Link href="spot-copy-trade-1">
                                                        <div className="panelcontentbox p-0">
                                                            <Table id='table24' className="table sitetable">
                                                                <tbody>
                                                                    <tr className="head_table">
                                                                        <td><span className="countparentdiv"><span><Image alt='profimg' width={20} height={20} src="assets/images/user-profile.svg" className="profileimg" /></span> <span className="t-darkblue">Cameron Williamson<div className="usercount"><FontAwesomeIcon icon={faUser} /> 426/500</div></span></span>
                                                                        </td>
                                                                        <td className="text-end"><span className="starticon active"><FontAwesomeIcon icon={faStar} /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><span className="chartrghtcon"><div>7D PNL</div><div className="t-green txtbig">+27,957.58</div><div>ROI <span className="t-green">+.27.97%</span></div></span></td>
                                                                        <td className="text-end"><span><Image alt='profimg' width={20} height={20} className='chartblue' src="assets/images/chart-green.svg" /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="lineptn">
                                                                            <hr className="mt-0 mb-0" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="maintablebox p-0">
                                                                            <Table id='table25' className="table sitetable">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>AUM</td>
                                                                                        <td className="text-end"><span><div className="shortnotes">195,204.83</div></span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>7D MDD</td>
                                                                                        <td className="text-end"><span>1.29%</span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Sharpe Ratio</td>
                                                                                        <td className="text-end"><span>-</span></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </Table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2}><Link href="#" id='cpybtn' className="btn sitebtn herobtn">Copy</Link></td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="aum" className="tab-pane fade in">
                                            <div className="cardbox">
                                                <div className="cardlistbox">
                                                    <Link href="spot-copy-trade-1">
                                                        <div className="panelcontentbox p-0">
                                                            <Table id='table26' className="table sitetable">
                                                                <tbody>
                                                                    <tr className="head_table">
                                                                        <td><span className="countparentdiv"><span><Image alt='profimg' width={20} height={20} src="assets/images/user-profile.svg" className="profileimg" /></span> <span className="t-darkblue">Cameron Williamson<div className="usercount"><FontAwesomeIcon icon={faUser} /> 426/500</div></span></span>
                                                                        </td>
                                                                        <td className="text-end"><span className="starticon active"><FontAwesomeIcon icon={faStar} /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><span className="chartrghtcon"><div>7D PNL</div><div className="t-green txtbig">+27,957.58</div><div>ROI <span className="t-green">+.27.97%</span></div></span></td>
                                                                        <td className="text-end"><span><Image alt='profimg' width={20} height={20} className='chartblue' src="assets/images/chart-green.svg" /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="lineptn">
                                                                            <hr className="mt-0 mb-0" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="maintablebox p-0">
                                                                            <Table id='table27' className="table sitetable">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>AUM</td>
                                                                                        <td className="text-end"><span><div className="shortnotes">195,204.83</div></span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>7D MDD</td>
                                                                                        <td className="text-end"><span>1.29%</span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Sharpe Ratio</td>
                                                                                        <td className="text-end"><span>-</span></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </Table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2}><Link href="#" id='cpybtn' className="btn sitebtn herobtn">Copy</Link></td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="copytrader" className="tab-pane fade in">
                                            <div className="cardbox">
                                                <div className="cardlistbox">
                                                    <Link href="spot-copy-trade-1">
                                                        <div className="panelcontentbox p-0">
                                                            <Table id='table28' className="table sitetable">
                                                                <tbody>
                                                                    <tr className="head_table">
                                                                        <td><span className="countparentdiv"><span><Image alt='profimg' width={20} height={20} src="assets/images/user-profile.svg" className="profileimg" /></span> <span className="t-darkblue">Cameron Williamson<div className="usercount"><FontAwesomeIcon icon={faUser} /> 426/500</div></span></span>
                                                                        </td>
                                                                        <td className="text-end"><span className="starticon active"><FontAwesomeIcon icon={faStar} /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><span className="chartrghtcon"><div>7D PNL</div><div className="t-green txtbig">+27,957.58</div><div>ROI <span className="t-green">+.27.97%</span></div></span></td>
                                                                        <td className="text-end"><span><Image alt='profimg' width={20} height={20} className='chartblue' src="assets/images/chart-green.svg" /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="lineptn">
                                                                            <hr className="mt-0 mb-0" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="maintablebox p-0">
                                                                            <Table id='table29' className="table sitetable">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>AUM</td>
                                                                                        <td className="text-end"><span><div className="shortnotes">195,204.83</div></span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>7D MDD</td>
                                                                                        <td className="text-end"><span>1.29%</span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Sharpe Ratio</td>
                                                                                        <td className="text-end"><span>-</span></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </Table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2}><Link href="#" id='cpybtn' className="btn sitebtn herobtn">Copy</Link></td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="copytraderpnl" className="tab-pane fade in">
                                            <div className="cardbox">
                                                <div className="cardlistbox">
                                                    <Link href="spot-copy-trade-1">
                                                        <div className="panelcontentbox p-0">
                                                            <Table id='table30' className="table sitetable">
                                                                <tbody>
                                                                    <tr className="head_table">
                                                                        <td><span className="countparentdiv"><span><Image alt='profimg' width={20} height={20} src="assets/images/user-profile.svg" className="profileimg" /></span> <span className="t-darkblue">Cameron Williamson<div className="usercount"><FontAwesomeIcon icon={faUser} /> 426/500</div></span></span>
                                                                        </td>
                                                                        <td className="text-end"><span className="starticon active"><FontAwesomeIcon icon={faStar} /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><span className="chartrghtcon"><div>7D PNL</div><div className="t-green txtbig">+27,957.58</div><div>ROI <span className="t-green">+.27.97%</span></div></span></td>
                                                                        <td className="text-end"><span><Image alt='profimg' width={20} height={20} className='chartblue' src="assets/images/chart-green.svg" /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="lineptn">
                                                                            <hr className="mt-0 mb-0" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="maintablebox p-0">
                                                                            <Table id='table31' className="table sitetable">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>AUM</td>
                                                                                        <td className="text-end"><span><div className="shortnotes">195,204.83</div></span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>7D MDD</td>
                                                                                        <td className="text-end"><span>1.29%</span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Sharpe Ratio</td>
                                                                                        <td className="text-end"><span>-</span></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </Table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2}><Link href="#" id='cpybtn' className="btn sitebtn herobtn">Copy</Link></td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="sharpratio" className="tab-pane fade in">
                                            <div className="cardbox">
                                                <div className="cardlistbox">
                                                    <Link href="spot-copy-trade-1">
                                                        <div className="panelcontentbox p-0">
                                                            <Table id='table32' className="table sitetable">
                                                                <tbody>
                                                                    <tr className="head_table">
                                                                        <td><span className="countparentdiv"><span><Image alt='profimg' width={20} height={20} src="assets/images/user-profile.svg" className="profileimg" /></span> <span className="t-darkblue">Cameron Williamson<div className="usercount"><FontAwesomeIcon icon={faUser} /> 426/500</div></span></span>
                                                                        </td>
                                                                        <td className="text-end"><span className="starticon active"><FontAwesomeIcon icon={faStar} /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><span className="chartrghtcon"><div>7D PNL</div><div className="t-green txtbig">+27,957.58</div><div>ROI <span className="t-green">+.27.97%</span></div></span></td>
                                                                        <td className="text-end"><span><Image alt='profimg' width={20} height={20} className='chartblue' src="assets/images/chart-green.svg" /></span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="lineptn">
                                                                            <hr className="mt-0 mb-0" />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2} className="maintablebox p-0">
                                                                            <Table id='table33' className="table sitetable">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>AUM</td>
                                                                                        <td className="text-end"><span><div className="shortnotes">195,204.83</div></span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>7D MDD</td>
                                                                                        <td className="text-end"><span>1.29%</span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Sharpe Ratio</td>
                                                                                        <td className="text-end"><span>-</span></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </Table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2}><Link href="#" id='cpybtn' className="btn sitebtn herobtn">Copy</Link></td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="myfav">
                                <div className="cardbox">
                                    <div className="cardlistbox">
                                        <Link href="spot-copy-trade-1">
                                            <div className="panelcontentbox p-0">
                                                <Table id='table34' className="table sitetable">
                                                    <tbody>
                                                        <tr className="head_table">
                                                            <td><span className="countparentdiv"><span><Image alt='profimg' width={20} height={20} src="assets/images/user-profile.svg" className="profileimg" /></span> <span className="t-darkblue">Cameron Williamson<div className="usercount"><FontAwesomeIcon icon={faUser} /> 426/500</div></span></span>
                                                            </td>
                                                            <td className="text-end"><span className="starticon active"><FontAwesomeIcon icon={faStar} /></span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span className="chartrghtcon"><div>7D PNL</div><div className="t-green txtbig">+27,957.58</div><div>ROI <span className="t-green">+.27.97%</span></div></span></td>
                                                            <td className="text-end"><span><Image alt='profimg' width={20} height={20} className='chartblue' src="assets/images/chart-green.svg" /></span></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="lineptn">
                                                                <hr className="mt-0 mb-0" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="maintablebox p-0">
                                                                <Table id='table35' className="table sitetable">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>AUM</td>
                                                                            <td className="text-end"><span><div className="shortnotes">195,204.83</div></span></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>7D MDD</td>
                                                                            <td className="text-end"><span>1.29%</span></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Sharpe Ratio</td>
                                                                            <td className="text-end"><span>-</span></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><Link href="#" id='cpybtn' className="btn sitebtn herobtn">Copy</Link></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="cardlistbox">
                                        <Link href="spot-copy-trade-1">
                                            <div className="panelcontentbox p-0">
                                                <Table id='table36' className="table sitetable">
                                                    <tbody>
                                                        <tr className="head_table">
                                                            <td><span className="countparentdiv"><span><Image alt='profimg' width={20} height={20} src="assets/images/user-profile.svg" className="profileimg" /></span> <span className="t-darkblue">Cameron Williamson<div className="usercount"><FontAwesomeIcon icon={faUser} /> 426/500</div></span></span>
                                                            </td>
                                                            <td className="text-end"><span className="starticon active"><FontAwesomeIcon icon={faStar} /></span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span className="chartrghtcon"><div>7D PNL</div><div className="t-green txtbig">+27,957.58</div><div>ROI <span className="t-green">+.27.97%</span></div></span></td>
                                                            <td className="text-end"><span><Image alt='profimg' width={20} height={20} className='chartblue' src="assets/images/chart-green.svg" /></span></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="lineptn">
                                                                <hr className="mt-0 mb-0" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="maintablebox p-0">
                                                                <Table id='table37' className="table sitetable">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>AUM</td>
                                                                            <td className="text-end"><span><div className="shortnotes">195,204.83</div></span></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>7D MDD</td>
                                                                            <td className="text-end"><span>1.29%</span></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Sharpe Ratio</td>
                                                                            <td className="text-end"><span>-</span></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><Link href="#" id='cpybtn' className="btn sitebtn herobtn">Copy</Link></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="cardlistbox">
                                        <Link href="spot-copy-trade-1">
                                            <div className="panelcontentbox p-0">
                                                <Table id='table38' className="table sitetable">
                                                    <tbody>
                                                        <tr className="head_table">
                                                            <td><span className="countparentdiv"><span><Image alt='profimg' width={20} height={20} src="assets/images/user-profile.svg" className="profileimg" /></span> <span className="t-darkblue">Cameron Williamson<div className="usercount"><FontAwesomeIcon icon={faUser} /> 426/500</div></span></span>
                                                            </td>
                                                            <td className="text-end"><span className="starticon active"><FontAwesomeIcon icon={faStar} /></span></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span className="chartrghtcon"><div>7D PNL</div><div className="t-green txtbig">+27,957.58</div><div>ROI <span className="t-green">+.27.97%</span></div></span></td>
                                                            <td className="text-end"><span><Image alt='profimg' width={20} height={20} className='chartblue' src="assets/images/chart-green.svg" /></span></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="lineptn">
                                                                <hr className="mt-0 mb-0" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="maintablebox p-0">
                                                                <Table id='table39' className="table sitetable">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>AUM</td>
                                                                            <td className="text-end"><span><div className="shortnotes">195,204.83</div></span></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>7D MDD</td>
                                                                            <td className="text-end"><span>1.29%</span></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Sharpe Ratio</td>
                                                                            <td className="text-end"><span>-</span></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><Link href="#" id='cpybtn' className="btn sitebtn herobtn">Copy</Link></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Container>
            </section>

            <section className="faqquetbanner">
                <Container>
                    <p className="sub-heading t-yellow text-center">
                        Frequently Asked Questions
                    </p>
                    <h2 className="heading-title p-0 text-center">
                        HAVE QUESTIONS? WE’VE GOT ANSWERS
                    </h2>
                    <div className="faqsecbox faqboxquest mx-auto mt-4">
                        <div className="p2pfaq" data-aos="fade-up" data-aos-duration="1000">
                            <Accordion activeKey={activeKey} flush>
                                <Accordion.Item
                                    eventKey="1"
                                    className={activeKey === "1" ? "active" : ""}
                                    onClick={() => handleToggle("1")}
                                >
                                    <div className="inside"></div>
                                    <Accordion.Header>What is Firefox TRADER?</Accordion.Header>
                                    <Accordion.Body>
                                        Firefox TRADER is a cryptocurrency exchange platform that
                                        allows users to trade, buy, and sell digital assets
                                        securely.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item
                                    eventKey="2"
                                    className={activeKey === "2" ? "active" : ""}
                                    onClick={() => handleToggle("2")}
                                >
                                    <div className="inside"></div>
                                    <Accordion.Header>
                                        How do I create an account?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                    eventKey="3"
                                    className={activeKey === "3" ? "active" : ""}
                                    onClick={() => handleToggle("3")}
                                >
                                    <div className="inside"></div>
                                    <Accordion.Header>
                                        Is KYC verification mandatory?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                    eventKey="4"
                                    className={activeKey === "4" ? "active" : ""}
                                    onClick={() => handleToggle("4")}
                                >
                                    <div className="inside"></div>
                                    <Accordion.Header>
                                        Does Firefox TRADER have a mobile app?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item
                                    eventKey="5"
                                    className={activeKey === "5" ? "active" : ""}
                                    onClick={() => handleToggle("5")}
                                >
                                    <div className="inside"></div>
                                    <Accordion.Header>
                                        Are my funds secure on ?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </Container>
            </section>

            <Homefooter />
        </div>
    )
}

export default FuturesCopyTrade;