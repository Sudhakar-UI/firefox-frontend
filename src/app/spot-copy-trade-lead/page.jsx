"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';
import { Container, Image, Row, Col, Nav, Table, Form, Tab, Badge, Accordion, InputGroup, Button, Collapse, Modal, FormControl } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft, faExchange, faEye, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';


const SpotTradeCopy4 = () => {
    useEffect(() => {
        document.body.classList.add('spotcopytradefour');
        return () => {
            document.body.classList.remove("spotcopytradefour");
        };
    });
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const [showBal, setShowBal] = useState(false)
    const [showCopy, setShowCopy] = useState(false)

    const handleShowbal = () => {
        setShowBal(true)
    }
    const handleHidebal = () => {
        setShowBal(false)
    }
    const handleShowCopy = () => {
        setShowCopy(true)
    }
    const handleHideCopy = () => {
        setShowCopy(false)
    }

    return (
        <>
            <div className='cpytrade'>
                <Homeheader />

                <section className="innerpagecontent copytradetopsection savingbannersec ieobannerbg spt-cpy-trd-four">
                    <Container className="container">
                        <h2 className="heading-title mb-0 pb-0">Spot Copy Settings</h2>
                    </Container>
                </section>


                <section className="copytradecntsection">
                    <Container>

                        <div className="twotablesec">
                            <div className="tabrightbox ovrback">
                                <Link href="/spot-copy-trade-3" className="borderbtn btn-sm">Back to Overview</Link>
                            </div>
                            <Nav activeKey='/spot-copy-trade-4' className="nav nav-tabs border-0" role="tablist">
                                <Nav.Item className="nav-item"> <Nav.Link className="nav-link nav-link-y-pnl" id='futtab' href="/futures-copy-trade-3">Futures</Nav.Link> </Nav.Item>
                                <Nav.Item className="nav-item"> <Nav.Link className="nav-link nav-link-y-pnl" id='spottab' href="/spot-copy-trade-4">Spot</Nav.Link> </Nav.Item>
                            </Nav>
                        </div>

                        <Tab.Container defaultActiveKey='ongoing'>
                            <div className="linetabbanner mb-3">
                                <Nav variant='tabs' className="nav nav-tabs tabbanner border-0" role="tablist">
                                    <Nav.Item className="nav-item">
                                        <Nav.Link className="nav-link" id='ongoing' eventKey="ongoing">Ongoing (5)</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-item">
                                        <Nav.Link className="nav-link" id='closed' eventKey="closed">Closed (2)</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <Tab.Content className="tab-content">
                                <Tab.Pane eventKey="ongoing" className="tab-pane fade in">
                                    <div className="lightgraybg">
                                        <div className="d-flex tblerecorddata">
                                            <div>
                                                <p className="mb-0">Total Wallet Balance <FontAwesomeIcon icon={faEye} /></p>
                                                <h6>28,428.1568 USDT</h6>
                                            </div>
                                            <div>
                                                <p className="mb-0">Total Realized PNL</p>
                                                <h6>28,428.1568 USDT</h6>
                                            </div>
                                            <div>
                                                <p className="mb-0">Total Unrealized PNL</p>
                                                <h6><span className="t-green">+28,428.1568</span> USDT</h6>
                                            </div>
                                            <div>
                                                <p className="mb-0">Net Profit</p>
                                                <h6><span className="t-green">+28,428.1568</span> USDT</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="histortrans">
                                        <div className="lightgraybg mt-3">
                                            <div className="flexbox align-items-center">
                                                <div className="profileleftb">
                                                    <div className="d-flex prflex gap-2">
                                                        <div> <span className="profileicon"><Image alt='proficon' width={20} height={20} src="assets/images/profile1.svg" /></span> </div>
                                                        <div>
                                                            <h5 className="mb-0">Albert Flores <span onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}>
                                                                <FontAwesomeIcon icon={open ? faCaretUp : faCaretDown} />
                                                            </span></h5>
                                                      
                                                            <p className="mb-0"><small>Copied on : 2024-05-22 10:28</small></p>
                                                        </div>
                                                    </div>
                                                    <div className="prfbutton">
                                                        <p>
                                                            <Link href="#" id='baltab1' onClick={handleShowbal}
                                                                className="btn sitebtn btn-sm">Adjust Balance</Link>
                                                        </p>
                                                        <p>
                                                            <Link href="#" id='settings1' className="btn borderbtn btn-sm">Settings</Link>
                                                        </p>
                                                        <p className="mb-0">
                                                            <Link href="#" id='stopcpy1' onClick={handleShowCopy} className="btn borderbtn btn-sm">Stop Copying</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="tableflxrcrd">
                                                    <div className="d-flex tblerecorddata">
                                                        <div>
                                                            <h6 className="mb-0">28,428.1568</h6>
                                                            <p className="mb-0">Copy Amount</p>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0">+5,638.845</h6>
                                                            <p className="mb-0">Realized PNL (USDT)</p>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0"><span className="t-red">-28,428.1568</span></h6>
                                                            <p className="mb-0">Unrealized PNL (USDT)</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex tblerecorddata mt-3">
                                                        <div>
                                                            <p className="mb-0">Profit Shared (USDT): <b>456,847.118</b></p>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0">Net Profit (USDT): <b className="t-green">+32.4183</b></p>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0">Profit Sharing: <b>10.00%</b></p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <Collapse in={open}>
                                                <div id="record1">
                                                    <div className="panelcontentbox feacopy-tre-one">
                                                        <SimpleBar className="table-responsive sitescroll">
                                                            <Table id='table1' className="table sitetable">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Symbol</th>
                                                                        <th>Size</th>
                                                                        <th>Entry Price</th>
                                                                        <th>Mark Price</th>
                                                                        <th>Liq.Price</th>
                                                                        <th>Margin Ratio</th>
                                                                        <th>Margin</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="brderleft greenbrd"><span className="ms-2">ADAUSDT<span
                                                                                className="badge badge-info">10x</span></span><br /><small
                                                                                    className="ms-2">Quartely 0925</small></div>
                                                                        </td>
                                                                        <td className="t-green">0.548 BTC</td>
                                                                        <td>26,754.32</td>
                                                                        <td>16.5685</td>
                                                                        <td className="t-blue">23,548.98</td>
                                                                        <td>5.74%</td>
                                                                        <td>14,758.54 USDT<br /><small>(Isolated)</small></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="brderleft greenbrd"><span className="ms-2">ADAUSDT<span
                                                                                className="badge badge-info">10x</span></span><br /><small
                                                                                    className="ms-2">Quartely 0925</small></div>
                                                                        </td>
                                                                        <td className="t-green">0.548 BTC</td>
                                                                        <td>26,754.32</td>
                                                                        <td>16.5685</td>
                                                                        <td className="t-blue">23,548.98</td>
                                                                        <td>5.74%</td>
                                                                        <td>14,758.54 USDT<br /><small>(Isolated)</small></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="brderleft greenbrd"><span className="ms-2">ADAUSDT<span
                                                                                className="badge badge-info">10x</span></span><br /><small
                                                                                    className="ms-2">Quartely 0925</small></div>
                                                                        </td>
                                                                        <td className="t-green">0.548 BTC</td>
                                                                        <td>26,754.32</td>
                                                                        <td>16.5685</td>
                                                                        <td className="t-blue">23,548.98</td>
                                                                        <td>5.74%</td>
                                                                        <td>14,758.54 USDT<br /><small>(Isolated)</small></td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </SimpleBar>
                                                    </div>
                                                </div>
                                            </Collapse>
                                        </div>
                                        <div className="lightgraybg mt-3">
                                            <div className="flexbox align-items-center">
                                                <div className="profileleftb">
                                                    <div className="d-flex prflex gap-2">
                                                        <div> <span className="profileicon"><Image alt='proficon' width={20} height={20} src="assets/images/profile1.svg" /></span> </div>
                                                        <div>
                                                            <h5 className="mb-0">Albert Flores <span onClick={() => setOpen1(!open1)} style={{ cursor: "pointer" }}>
                                                                <FontAwesomeIcon icon={open1 ? faCaretUp : faCaretDown} />
                                                            </span></h5>
                                                            <p className="mb-0"><small>Copied on : 2024-05-22 10:28</small></p>
                                                        </div>
                                                    </div>
                                                    <div className="prfbutton">
                                                        <p>
                                                            <Link href="#" id='baltab1' onClick={handleShowbal}
                                                                className="btn sitebtn btn-sm">Adjust Balance</Link>
                                                        </p>
                                                        <p>
                                                            <Link href="#" id='settings1' className="btn borderbtn btn-sm">Settings</Link>
                                                        </p>
                                                        <p className="mb-0">
                                                            <Link href="#" id='stopcpy1' onClick={handleShowCopy} className="btn borderbtn btn-sm">Stop Copying</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="tableflxrcrd">
                                                    <div className="d-flex tblerecorddata">
                                                        <div>
                                                            <h6 className="mb-0">28,428.1568</h6>
                                                            <p className="mb-0">Copy Amount</p>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0">+5,638.845</h6>
                                                            <p className="mb-0">Realized PNL (USDT)</p>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-0"><span className="t-red">-28,428.1568</span></h6>
                                                            <p className="mb-0">Unrealized PNL (USDT)</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex tblerecorddata mt-3">
                                                        <div>
                                                            <p className="mb-0">Profit Shared (USDT): <b>456,847.118</b></p>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0">Net Profit (USDT): <b className="t-green">+32.4183</b></p>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0">Profit Sharing: <b>10.00%</b></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <Collapse in={open1}>
                                                <div id="record2">
                                                    <div className="panelcontentbox feacopy-tre-one">
                                                        <SimpleBar className="table-responsive sitescroll">
                                                            <Table id='table2' className="table sitetable">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Symbol</th>
                                                                        <th>Size</th>
                                                                        <th>Entry Price</th>
                                                                        <th>Mark Price</th>
                                                                        <th>Liq.Price</th>
                                                                        <th>Margin Ratio</th>
                                                                        <th>Margin</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="brderleft greenbrd"><span className="ms-2">ADAUSDT<span
                                                                                className="badge badge-info">10x</span></span><br /><small
                                                                                    className="ms-2">Quartely 0925</small></div>
                                                                        </td>
                                                                        <td className="t-green">0.548 BTC</td>
                                                                        <td>26,754.32</td>
                                                                        <td>16.5685</td>
                                                                        <td className="t-blue">23,548.98</td>
                                                                        <td>5.74%</td>
                                                                        <td>14,758.54 USDT<br /><small>(Isolated)</small></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="brderleft greenbrd"><span className="ms-2">ADAUSDT<span
                                                                                className="badge badge-info">10x</span></span><br /><small
                                                                                    className="ms-2">Quartely 0925</small></div>
                                                                        </td>
                                                                        <td className="t-green">0.548 BTC</td>
                                                                        <td>26,754.32</td>
                                                                        <td>16.5685</td>
                                                                        <td className="t-blue">23,548.98</td>
                                                                        <td>5.74%</td>
                                                                        <td>14,758.54 USDT<br /><small>(Isolated)</small></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="brderleft greenbrd"><span className="ms-2">ADAUSDT<span
                                                                                className="badge badge-info">10x</span></span><br /><small
                                                                                    className="ms-2">Quartely 0925</small></div>
                                                                        </td>
                                                                        <td className="t-green">0.548 BTC</td>
                                                                        <td>26,754.32</td>
                                                                        <td>16.5685</td>
                                                                        <td className="t-blue">23,548.98</td>
                                                                        <td>5.74%</td>
                                                                        <td>14,758.54 USDT<br /><small>(Isolated)</small></td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </SimpleBar>
                                                    </div>
                                                </div>
                                            </Collapse>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="closed" className="tab-pane fade in">

                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Container>
                </section>

                <Homefooter />
            </div>


            <Modal centered show={showBal} onHide={handleHidebal} className=" pairmdlbox">
                <Tab.Container defaultActiveKey='addwallet'>
                    <Modal.Header closeButton>
                        <h5 className="modal-title">
                            <div className="twotablesec smallboxtab">
                                <Nav variant='tabs' className="nav nav-tabs border-0" role="tablist">
                                    <Nav.Item className="nav-item">
                                        <Nav.Link className="nav-link nav-link-y-pnl" id='addtab' eventKey="addwallet">Add</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-item">
                                        <Nav.Link className="nav-link nav-link-y-pnl" id='removetab' eventKey="removewallet">Remove</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </h5>
                        {/* <Button type="button" id='closebtn' className="close" onClick={handleHidebal}><span>&times;</span></Button> */}
                    </Modal.Header>
                    <Modal.Body className="modal-body pt-2">
                        <Tab.Content className="tab-content">
                            <Tab.Pane eventKey="addwallet" className="tab-pane fade addwallet">
                                <p>Add assets to your ongoing portfolio from your Spot wallet.</p>
                                <Form className="siteformbg">
                                    <Form.Group className="form-group">
                                        <select id='selectcoin' className="form-control">
                                            <option>USDT Tether</option>
                                        </select>
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                        <Form.Label>Amount</Form.Label>
                                        <div className="tabrightbox">
                                            <p>Available in Spot 3,000 USDT <FontAwesomeIcon icon={faExchange} /></p>
                                        </div>
                                        <InputGroup className="input-group">
                                            <FormControl id='amount' type="text" className="form-control" placeholder="Input amount" />
                                            <span className="input-group-text">
                                                <span>USDT</span>
                                                <span className="ms-2">MAX</span>
                                            </span>
                                        </InputGroup>
                                        <p>Max Amount to Add: 3,000 USDT</p>
                                    </Form.Group>
                                    <div className="text-center">
                                        <Button type="submit" id='confbtn' className="btn sitebtn w-100">Confirm</Button>
                                    </div>
                                </Form>
                            </Tab.Pane>
                            <Tab.Pane eventKey="removewallet" className="tab-pane fade">

                            </Tab.Pane>
                        </Tab.Content>
                    </Modal.Body>
                </Tab.Container>
            </Modal>

            <Modal className=" pairmdlbox" show={showCopy} onHide={handleHideCopy} centered aria-hidden="true">
                <Modal.Header closeButton>
                    <h5 className="modal-title ">
                        Are you want to stop copy trading?
                    </h5>
                    {/* <Button type="button" id='closebtn' onClick={handleHideCopy} className="close" data-bs-dismiss="modal"><span>&times;</span></Button> */}
                </Modal.Header>
                <Modal.Body className="modal-body pt-2">
                    <div className="d-flex gap-2 pt-2 text-center justify-content-center">
                        <Button type="button" id='nobtn' className="btn sitebtn btn-sm" data-bs-dismiss="modal">No</Button>
                        <Button type="button" className="btn sitebtn btn-sm" id="yesbtn">Yes</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SpotTradeCopy4;