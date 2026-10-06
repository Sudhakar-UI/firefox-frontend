import React, { useRef, useState } from 'react'
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Table, Nav, Tab, Form, FormGroup, Button, Modal, Badge, Tooltip, OverlayTrigger, Row, Col, InputGroup, FormCheck, Image } from 'react-bootstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faShare } from '@fortawesome/free-solid-svg-icons';

import html2canvas from 'html2canvas';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const openorder = () => {

    const roadmap = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 1 },
        desktop: { breakpoint: { max: 1200, min: 991 }, items: 1 },
        tablet: { breakpoint: { max: 991, min: 600 }, items: 1 },
        mobile: { breakpoint: { max: 600, min: 0 }, items: 1 },
    };

    const captureRef = useRef(null);

    const handleDownload = async () => {
        if (!captureRef.current) return;

        const canvas = await html2canvas(captureRef.current);
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = "trade-share.png";
        link.click();
    };

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);

    const [shareModal, setShareModal] = useState(false)

    const handleShowShare = () => {
        setShareModal(true)
    }
    const handleHideShare = () => {
        setShareModal(false)
    }

    // market modal
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);
    // limit modal
    const handleClose2 = () => setShowModal2(false);
    const handleShow2 = () => setShowModal2(true);
    // Open order modal
    const handleClose3 = () => setShowModal3(false);
    const handleShow3 = () => setShowModal3(true);

    const handleClose4 = () => setShowModal4(false);
    const handleShow4 = () => setShowModal4(true);
    return (
        <div className="openorder griddragoption">
            <Tab.Container defaultActiveKey="position">
                <div className="innerpagetab historytab">
                    <Nav variant="pills" className="tabbanner">
                        <Nav.Item><Nav.Link eventKey="position" id='position'>Positions</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="openorder" id='openorder'>Open Orders</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="orderhistory" id='orderhistory'>My Order History</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="tradehistory" id='tradehistory'>My Trade History</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="pnlhistory" id='pnlhistory'>PNL History</Nav.Link></Nav.Item>
                    </Nav>
                </div>
                <Tab.Content>
                    <Tab.Pane eventKey="position">
                        <h2 className="heading-box">Positions</h2>
                        <Simplebar className="table-responsive sitescroll">
                            <Table className="sitetable" id='table3'>
                                <thead>
                                    <tr>
                                        <th>Contract</th>
                                        <th>Qty</th>
                                        <th>Value</th>
                                        <th>Entry Price</th>
                                        <th>Mark Price</th>
                                        <th>Liq. Price</th>
                                        <th>IM</th>
                                        <th>MM</th>
                                        <th>Unrealized P&L (%)</th>
                                        <th>Realized P&L</th>
                                        <th>TP/SL</th>
                                        <th>Close By</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="nodata">
                                        <td colSpan={10}>
                                            {/* <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata"/>
                              <p>No record found</p> */}
                                            <Button type="button" className="btn sitebtn btn-sm me-2">Sign in to View</Button>
                                        </td>
                                    </tr>
                                    {/* <tr>
                                        <td>BTCUSDT<br /><span className="t-red">10X Long</span></td>
                                        <td>1558</td>
                                        <td>0.25639</td>
                                        <td>0.25639</td>
                                        <td>0.25639</td>
                                        <td>0</td>
                                        <td>0.25639</td>
                                        <td>0.25639</td>
                                        <td>0.25639 </td>
                                        <td>0.25639</td>
                                        <td><Link href="#" className="btn sitebtn btn-sm" onClick={handleShow4}> <FontAwesomeIcon icon={faPlus} />Add</Link></td>
                                        <td className="positionsbg">
                                            <Form data-musdod="post" className="siteformbg">
                                                <Button type="button" className="btn sitebtn btn-sm me-2" onClick={handleShow1}>Market</Button>
                                                <Button type="button" className="btn sitebtn btn-sm" onClick={handleShow2}>Limit</Button>
                                            </Form>
                                        </td>
                                    </tr>
                                      <tr>
                                        <td>BTCUSDT<br /><span className="t-red">10X Long</span></td>
                                        <td>1558</td>
                                        <td>0.25639</td>
                                        <td>0.25639</td>
                                        <td>0.25639</td>
                                        <td>0</td>
                                        <td>0.25639</td>
                                        <td>0.25639</td>
                                        <td>0.25639 </td>
                                        <td>0.25639</td>
                                        <td><Link href="#" className="btn sitebtn btn-sm" onClick={handleShow4}> <FontAwesomeIcon icon={faPlus} />Add</Link></td>
                                        <td className="positionsbg">
                                            <Form data-musdod="post" className="siteformbg">
                                                <Button type="button" className="btn sitebtn btn-sm me-2" onClick={handleShow1}>Market</Button>
                                                <Button type="button" className="btn sitebtn btn-sm" onClick={handleShow2}>Limit</Button>
                                            </Form>
                                        </td>
                                    </tr>
                                       <tr>
                                        <td>BTCUSDT<br /><span className="t-red">10X Long</span></td>
                                        <td>1558</td>
                                        <td>0.25639</td>
                                        <td>0.25639</td>
                                        <td>0.25639</td>
                                        <td>0</td>
                                        <td>0.25639</td>
                                        <td>0.25639</td>
                                        <td>0.25639 </td>
                                        <td>0.25639</td>
                                        <td><Link href="#" className="btn sitebtn btn-sm" onClick={handleShow4}> <FontAwesomeIcon icon={faPlus} />Add</Link></td>
                                        <td className="positionsbg">
                                            <Form data-musdod="post" className="siteformbg">
                                                <Button type="button" className="btn sitebtn btn-sm me-2" onClick={handleShow1}>Market</Button>
                                                <Button type="button" className="btn sitebtn btn-sm" onClick={handleShow2}>Limit</Button>
                                            
                                            </Form>
                                        </td>
                                    </tr>
                                       <tr>
                                        <td>BTCUSDT<br /><span className="t-red">10X Long</span></td>
                                        <td>1558</td>
                                        <td>0.25639</td>
                                        <td>0.25639</td>
                                        <td>0.25639</td>
                                        <td>0</td>
                                        <td>0.25639</td>
                                        <td>0.25639</td>
                                        <td>0.25639 </td>
                                        <td>0.25639</td>
                                        <td><Link href="#" className="btn sitebtn btn-sm" onClick={handleShow4}> <FontAwesomeIcon icon={faPlus} />Add</Link></td>
                                        <td className="positionsbg">
                                            <Form data-musdod="post" className="siteformbg">
                                                <Button type="button" className="btn sitebtn btn-sm me-2" onClick={handleShow1}>Market</Button>
                                                <Button type="button" className="btn sitebtn btn-sm" onClick={handleShow2}>Limit</Button>
                                                
                                            </Form>
                                        </td>
                                    </tr>
                                       <tr>
                                        <td>BTCUSDT<br /><span className="t-red">10X Long</span></td>
                                        <td>1558</td>
                                        <td>0.25639</td>
                                        <td>0.25639</td>
                                        <td>0.25639</td>
                                        <td>0</td>
                                        <td>0.25639</td>
                                        <td>0.25639</td>
                                        <td>0.25639 </td>
                                        <td>0.25639</td>
                                        <td><Link href="#" className="btn sitebtn btn-sm" onClick={handleShow4}> <FontAwesomeIcon icon={faPlus} />Add</Link></td>
                                        <td className="positionsbg">
                                            <Form data-musdod="post" className="siteformbg">
                                                <Button type="button" className="btn sitebtn btn-sm me-2" onClick={handleShow1}>Market</Button>
                                                <Button type="button" className="btn sitebtn btn-sm" onClick={handleShow2}>Limit</Button>
                                             
                                            </Form>
                                        </td>
                                    </tr> */}
                                </tbody>
                            </Table>
                        </Simplebar>
                    </Tab.Pane>
                    <Tab.Pane eventKey="openorder">
                        <h2 className="heading-box">Open Orders</h2>
                        <Simplebar className="table-responsive sitescroll">
                            <Table className="sitetable" id='table3'>
                                <thead>
                                    <tr>
                                        <th>Order type</th>
                                        <th>Date & Time</th>
                                        <th>Order</th>
                                        <th>Pair</th>
                                        <th>Amount</th>
                                        <th>Price</th>
                                        <th>Remaining</th>
                                        <th>Trade Fee</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Cancel</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11-12-2025,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Button className="btn borderbtn btn-sm" onClick={handleShow3}>Cancel</Button></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11-12-2025,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Button className="btn borderbtn btn-sm" onClick={handleShow3}>Cancel</Button></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11-12-2025,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Button className="btn borderbtn btn-sm" onClick={handleShow3}>Cancel</Button></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11-12-2025,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Button className="btn borderbtn btn-sm" onClick={handleShow3}>Cancel</Button></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11-12-2025,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Button className="btn borderbtn btn-sm" onClick={handleShow3}>Cancel</Button></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11-12-2025,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Button className="btn borderbtn btn-sm" onClick={handleShow3}>Cancel</Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Simplebar>
                    </Tab.Pane>
                    <Tab.Pane eventKey="orderhistory">
                        <h2 className="heading-box">My Order History</h2>
                        <Simplebar className="table-responsive sitescroll">
                            <Table className="sitetable" id='table3'>
                                <thead>
                                    <tr>
                                        <th>Order type</th>
                                        <th>Date & Time</th>
                                        <th>Order</th>
                                        <th>Pair</th>
                                        <th>Amount</th>
                                        <th>Price</th>
                                        <th>Remaining</th>
                                        <th>Trade Fee</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Cancel</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11-12-2025,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Button className="btn borderbtn btn-sm" onClick={handleShow3}>Cancel</Button></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11-12-2025,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Button className="btn borderbtn btn-sm" onClick={handleShow3}>Cancel</Button></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11-12-2025,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Button className="btn borderbtn btn-sm" onClick={handleShow3}>Cancel</Button></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11-12-2025,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Button className="btn borderbtn btn-sm" onClick={handleShow3}>Cancel</Button></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11-12-2025,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Button className="btn borderbtn btn-sm" onClick={handleShow3}>Cancel</Button></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11-12-2025,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Button className="btn borderbtn btn-sm" onClick={handleShow3}>Cancel</Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Simplebar>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tradehistory">
                        <h2 className="heading-box">Trade History</h2>
                        <Simplebar className="table-responsive sitescroll">
                            <Table className="sitetable" id='table4'>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Pair</th>
                                        <th>Type</th>
                                        <th>Amount</th>
                                        <th>Staus</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>18/02/2025, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0052067489771</td>
                                        <td>Confirm</td>
                                    </tr>
                                    <tr>
                                        <td>18/02/2025, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-red">Sell</span></td>
                                        <td>0052067489771</td>
                                        <td>Wating</td>
                                    </tr>
                                    <tr>
                                        <td>18/02/2025, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0052067489771</td>
                                        <td>Wating</td>
                                    </tr>
                                    <tr>
                                        <td>18/02/2025, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0052067489771</td>
                                        <td>Confirm</td>
                                    </tr>
                                    <tr>
                                        <td>18/02/2025, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-red">Sell</span></td>
                                        <td>0052067489771</td>
                                        <td>Wating</td>
                                    </tr>
                                    <tr>
                                        <td>18/02/2025, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0052067489771</td>
                                        <td>Confirm</td>
                                    </tr>
                                    <tr>
                                        <td>18/02/2025, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-red">Sell</span></td>
                                        <td>0052067489771</td>
                                        <td>Wating</td>
                                    </tr>
                                    <tr>
                                        <td>18/02/2025, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0052067489771</td>
                                        <td>Confirm</td>
                                    </tr>
                                    <tr>
                                        <td>18/02/2025, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-red">Sell</span></td>
                                        <td>0052067489771</td>
                                        <td>Wating</td>
                                    </tr>
                                    <tr>
                                        <td>18/02/2025, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0052067489771</td>
                                        <td>Confirm</td>
                                    </tr>
                                    <tr>
                                        <td>18/02/2025, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-red">Sell</span></td>
                                        <td>0052067489771</td>
                                        <td>Wating</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Simplebar>
                    </Tab.Pane>
                    <Tab.Pane eventKey="pnlhistory">
                        <h2 className="heading-box">PNL History</h2>
                        <Simplebar className="table-responsive sitescroll">
                            <Table className="sitetable" id='table4'>
                                <thead>
                                    <tr>
                                        <th>Symbol</th>
                                        <th>Quantity</th>
                                        <th>Side</th>
                                        <th>Exec Type</th>
                                        <th>Entry Price</th>
                                        <th>Exit Price</th>
                                        <th>Closed PNL</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>BTC</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>-</td>
                                        <td>0.256874</td>
                                        <td>0.256874</td>
                                        <td>0.256874</td>
                                        <td>0052067489771</td>
                                    </tr>
                                    <tr>
                                        <td>BTC</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>-</td>
                                        <td>0.256874</td>
                                        <td>0.256874</td>
                                        <td>0.256874</td>
                                        <td>0052067489771</td>
                                    </tr>
                                    <tr>
                                        <td>BTC</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>-</td>
                                        <td>0.256874</td>
                                        <td>0.256874</td>
                                        <td>0.256874</td>
                                        <td>0052067489771</td>
                                    </tr>
                                    <tr>
                                        <td>BTC</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>-</td>
                                        <td>0.256874</td>
                                        <td>0.256874</td>
                                        <td>0.256874</td>
                                        <td>0052067489771</td>
                                    </tr>
                                    <tr>
                                        <td>BTC</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>-</td>
                                        <td>0.256874</td>
                                        <td>0.256874</td>
                                        <td>0.256874</td>
                                        <td>0052067489771</td>
                                    </tr>
                                    <tr>
                                        <td>BTC</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>-</td>
                                        <td>0.256874</td>
                                        <td>0.256874</td>
                                        <td>0.256874</td>
                                        <td>0052067489771</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Simplebar>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Market Close
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group">
                            <Form.Label>Closed Qty BTC</Form.Label>
                            <Form.Control name="text" type="text" id="closingQtyVol_market" />
                        </Form.Group>
                        <div className="alert alert-info">contract(s) will be closed at last traded price.</div>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="btn borderbtn" id="cancel_market_btn">Cancel</Button>
                            <Button type="button" className="btn sitebtn" id="confirm_market_btn">Confirm</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={showModal2} onHide={handleClose2} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Limit Close
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group">
                            <Form.Label>Closing Price USDT</Form.Label>
                            <Form.Control className='closingprice' name="text" type="text" id="closingPrice" />
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>Closed Qty BTC</Form.Label>
                            <Form.Control className='closingprice' name="text" type="text" id="closingQty" />
                        </Form.Group>
                        <div className="alert alert-info"> contract(s) will be closed at <span className="closingprice_span"></span> price.</div>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="btn borderbtn" id="cancel_limit_btn">Cancel</Button>
                            <Button type="button" className="btn sitebtn" id="confirm_limit_btn">Confirm</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            {/* Open order Buy modal */}
            <Modal show={showModal3} onHide={handleClose3} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Cancel
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <FormGroup>
                            <p className="content">Are you sure do you want to cancel this order?</p>
                        </FormGroup>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="btn borderbtn" id="back_buyorder">No</Button>
                            <Button type="button" className="btn sitebtn" id="cancel_buyorder">Yes</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            {/* Open order sell modal */}
            <Modal show={showModal3} onHide={handleClose3} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Cancel
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <FormGroup>
                            <p className="content">Are you sure do you want to cancel this order?</p>
                        </FormGroup>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="btn borderbtn" id="back_buyorder">No</Button>
                            <Button type="button" className="btn sitebtn" id="cancel_buyorder">Yes</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={showModal4} onHide={handleClose4} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Add TP/SL</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="notesgray futoptionlist d-flex justify-content-around text-center">
                        <p>
                            <span className="t-gray">Order Price</span>
                            <br /><span className="t-black tpsl_orderprice">0</span>
                        </p>
                        <p>
                            <span className="t-gray">Qty</span>
                            <br /><span className="t-black tpsl_qty">12</span>
                        </p>
                        <p>
                            <span className="t-gray">Last Traded Price</span>
                            <br /><span id="pos_ltp" className="t-black last_traded_price">100</span>
                        </p>
                    </div>
                    <div className='orderformbox'>
                        <Tab.Container defaultActiveKey="entireposition">
                            <Nav variant="pills" className="orderfrmtab limitabbg">
                                <Nav.Item>
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={
                                            <Tooltip id="tooltip-entireposition">
                                                Entire position TP/SL order applies to the position as whole. (regardless of whether positions are added or reduced). The TP/SL order will be automatically cancelled after the position has been manually closed or liquidated.                                            </Tooltip>
                                        }
                                    >
                                        <Nav.Link eventKey="entireposition" id="entireposition">
                                            Entire Position
                                        </Nav.Link>
                                    </OverlayTrigger>
                                </Nav.Item>
                                <Nav.Item>
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={
                                            <Tooltip id="tooltip-partialposition">
                                                You can set a fixed quantity for partial position TP/SL orders.
                                            </Tooltip>
                                        }
                                    >
                                        <Nav.Link eventKey="partialposition" id="partialposition">
                                            Partial Position
                                        </Nav.Link>
                                    </OverlayTrigger>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="entireposition">
                                    <Form className="siteformbg px-0 formwrapgrid">
                                        <div className="triggerslectbox align-items-end">
                                            <FormGroup>
                                                <Form.Label>Take Profit</Form.Label>
                                                <InputGroup>
                                                    <Form.Control id='take_profit' name="take_profit" type="number" />
                                                    <InputGroup.Text className="t-blue rounded-0" id='limitlast'>Last Price</InputGroup.Text>
                                                </InputGroup>
                                            </FormGroup>

                                            <FormGroup className="pt-2 pb-2">
                                                <Form.Label>Stop Loss</Form.Label>
                                                <InputGroup>
                                                    <Form.Control id='stop_loss' name="stop_loss" type="number" />
                                                    <InputGroup.Text className="t-blue rounded-0" id='limitlast'>Last Price</InputGroup.Text>
                                                </InputGroup>
                                            </FormGroup>
                                        </div>
                                        <div className="d-flex gap-2 mt-3">
                                            <Button type="button" className="btn borderbtn" id="back_buyorder">No</Button>
                                            <Button type="button" className="btn sitebtn" id="cancel_buyorder">Yes</Button>
                                        </div>
                                    </Form>
                                </Tab.Pane>
                                <Tab.Pane eventKey="partialposition">
                                    <Form className="siteformbg px-0 formwrapgrid">
                                        <div className="triggerslectbox">
                                            <Form.Group className="form-group">
                                                <Form.Label>Order Quantity</Form.Label>
                                                <InputGroup>
                                                    <Form.Control id='order_quantity' name="order_quantity" type="number" />
                                                    <InputGroup.Text className="t-blue rounded-0" id='qtycoin'>BTC</InputGroup.Text>
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group className="form-group">
                                                <Form.Label>Take-profit Settings</Form.Label>
                                                <div className="tabrightbox limitcheckbg">
                                                    <Form.Check type="checkbox" id="switch1" label="limit" />
                                                </div>
                                                <InputGroup>
                                                    <Form.Control id='buylimit_sl_trigger_price' />
                                                    <InputGroup.Text id='buylimit_sl_percentage'>USDT</InputGroup.Text>
                                                    <InputGroup.Text>
                                                        <Form.Select id='buylimit_trigger_price_sl' className="form-control bg-none border-0">
                                                            <option>Last</option>
                                                            <option>Fair</option>
                                                            <option>Index</option>
                                                        </Form.Select>
                                                    </InputGroup.Text>
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group className="form-group">
                                                <InputGroup className='mb-1'>
                                                    <Form.Control id='takeorder_profit' name="take_profit" type="number" placeholder='Order Price' />
                                                    <InputGroup.Text className="t-blue rounded-0" id='takeqtycoin'>USDT</InputGroup.Text>
                                                </InputGroup>
                                                <small>* Limit TP/SP Order will only be filled at the specified price, but there is a risk that the order may not be filled.</small>
                                            </Form.Group>
                                        </div>
                                        <div className="triggerslectbox">
                                            <Form.Group className="form-group">
                                                <Form.Label>Stop-loss Settings</Form.Label>
                                                <div className="tabrightbox limitcheckbg">
                                                    <Form.Check type="checkbox" id="switch1" label="limit" />
                                                </div>
                                                <InputGroup>
                                                    <Form.Control id='buylimit_sl_trigger_price' />
                                                    <InputGroup.Text id='buylimit_sl_percentage'>USDT</InputGroup.Text>
                                                    <InputGroup.Text>
                                                        <Form.Select id='buylimit_trigger_price_sl' className="form-control bg-none border-0">
                                                            <option>Last</option>
                                                            <option>Fair</option>
                                                            <option>Index</option>
                                                        </Form.Select>
                                                    </InputGroup.Text>
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group className="form-group">
                                                <InputGroup className='mb-1'>
                                                    <Form.Control id='lossorder_price' name="lossorder_price" type="number" placeholder='Order Price' />
                                                    <InputGroup.Text className="t-blue rounded-0" id='lossqtycoin'>USDT</InputGroup.Text>
                                                </InputGroup>
                                                <small>* Limit TP/SP Order will only be filled at the specified price, but there is a risk that the order may not be filled.</small>
                                            </Form.Group>
                                        </div>

                                        <div className="d-flex gap-2 mt-3">
                                            <Button type="button" className="borderbtn w-100 me-1" id='leveragesubmit'>Cancel</Button>
                                            <Button type="button" className="sitebtn w-100" id='leveragesubmit'>Confirm</Button>
                                        </div>
                                    </Form>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal
                show={shareModal}
                onHide={handleHideShare}
                className="modalbgt authmodal tradesharemodal"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Carousel responsive={roadmap} arrows={true} className="flexbox rodemapbox ps-0">
                        <div>
                            <Form className="siteformbg">
                                <FormGroup>
                                    <div ref={captureRef}>
                                        <div className='sharetrade'>
                                            <div>
                                                <Image src='assets/images/logo.svg' alt='icon' className='shrlogo' />
                                            </div>
                                            <ul className='tradesharelist'>
                                                <li>
                                                    <div>
                                                        <h4>API3USDT Perp</h4>
                                                    </div>
                                                    <div className='d-flex align-items-center w-100 gap-3'>
                                                        <div>
                                                            <div className="text-center">
                                                                <h5 className="">
                                                                    <span className="t-green">Buy</span>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="text-center">
                                                                <h5 className="t-green">
                                                                    25X
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h2 className='t-green'>+405.97%</h2>
                                                </li>
                                                <li>
                                                    <div className='price-col'>
                                                        <span><h5>Entry Price</h5><h5 className='text-white '>1.553</h5></span>
                                                        <span><h5>Last Price</h5><h5 className='text-white'>1.805</h5></span>
                                                    </div>
                                                </li>
                                                <li>
                                                </li>
                                            </ul>
                                            {/* <div className='d-flex align-items-center gap-4'>
                                                <div>
                                                    <Image src='assets/images/qrcode.png' className='tradeqr' alt='qrimg' width={60} height={60} />
                                                </div>
                                                <div>
                                                    <p className='content mb-0'>REFERRAL CODE</p>
                                                </div>
                                            </div> */}
                                            <div className='tabrightbox sharetradebox'>
                                                <span>
                                                    <h5>Referral Code:</h5>
                                                    <h4 className="t-green text-end mb-0">9Yr8tv</h4>
                                                    <h5>2025-05-26 15.33</h5>
                                                </span>
                                                <span className='qrcode'><Image src="assets/images/qrcode.png" alt='qrcode' /></span>
                                            </div>
                                        </div>
                                    </div>
                                </FormGroup>
                            </Form>
                        </div>

                        <div>
                            <Form className="siteformbg">
                                <FormGroup>
                                    <div className='sharetrade'>
                                        <div>
                                            <Image src='assets/images/logo.svg' alt='icon' className='shrlogo' />
                                        </div>
                                        <div className='d-flex align-items-center w-100'>
                                            <div>
                                                <div className="text-center">
                                                    <p className="content">
                                                        <span className="t-green">+20%</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-center">
                                                    <p className="content">
                                                        <span className="t-green">Londddg</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </FormGroup>
                            </Form>
                        </div>
                    </Carousel>
                    <div className='px-4'>
                        <div className='mt-3'>
                            <p className='mb-0'>Optional Information to share.</p>
                        </div>
                        <div>
                            <InputGroup className='d-flex gap-4'>
                                <FormCheck type="checkbox" label="Leverage" id='lev' />
                                <FormCheck type="checkbox" label="PNL Amount" id='pnkamnt' />
                                <FormCheck type="checkbox" label="Price" id='price' />
                            </InputGroup>
                        </div>
                    </div>
                    <div className="d-flex gap-2 mt-3 px-4 pb-4">
                        <Button type="button" className="btn borderbtn" onClick={handleHideShare}>
                            Cancel
                        </Button>
                        <Button type="button" className="btn sitebtn" onClick={handleDownload}>
                            Download
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default openorder