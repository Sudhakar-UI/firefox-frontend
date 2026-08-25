"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';
import { Container, Image, Row, Col, Nav, Table, Form, Tab, Badge, Accordion, InputGroup, Button, FormControl, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEdit, faInfoCircle, faSearch } from '@fortawesome/free-solid-svg-icons';


const SpotTradeCopy5 = () => {
    const [showEdit, setShowEdit] = useState(false)

    const handleShowEdit = () => {
        setShowEdit(true)
    }
    const handleHideEdit = () => {
        setShowEdit(false)
    }
    useEffect(() => {
        document.body.classList.add('spotcopytrade');
        return () => {
            document.body.classList.remove("spotcopytrade");
        };
    });
    return (
        <>
            <div className='cpytrade'>
                <Homeheader />

                <section className="innerpagecontent copytradetopsection savingbannersec ieobannerbg">
                    <Container>
                        <Row className="align-items-center spt-trd-fiv-y">
                            <Col lg={7} md={7}>
                                <p className="mb-0"><Link href="#" className="alink"><FontAwesomeIcon icon={faArrowLeft} className='me-2' /><span className="t-black">Portfolios List</span></Link></p>
                                <h2 className="heading-title">Spot Copy Settings</h2>
                            </Col>
                            <Col lg={5} md={5}>
                                {/* <div className="text-center portfolioborder">
                                </div> */}
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="copytradecntsection copytrade5">
                    <Container>
                        <div className="profiletopdtabox mb-5">
                            <div className="table-content">
                                <div>
                                    <div className="d-flex prflex align-items-center gap-2">
                                        <div>
                                            <span className="profileicon"><Image alt='spotico' width={20} height={20} src="assets/images/profile1.svg" /></span>
                                        </div>
                                        <div>
                                            <h5 className="mb-0">Albert Flores</h5>
                                            <p className="mb-0">We all gonna make it!! <Link href="#" className="alinkt">View Original</Link></p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex chartflx align-items-center gap-3">
                                        <div className="me-auto text-start ms-3">
                                            <p className="mb-0">7D PNL</p>
                                            <h3 className="mb-0 t-green">+27,957.58</h3>
                                            <p className="mb-0">
                                                ROI <span className="t-green">+27.97%</span>
                                            </p>
                                        </div>
                                        <div>
                                            <img
                                                src="/assets/images/chart-green.svg"
                                                alt="coinicon"
                                                width={20}
                                                height={20}
                                                className="cht-img-y"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="centerbox mx-auto ratioformbox">
                            <Tab.Container defaultActiveKey='fxdamount'>
                                <div className="twotablesec">
                                    <Nav variant='tabs' className="nav nav-tabs border-0" role="tablist">
                                        <Nav.Item className="nav-item">
                                            <Nav.Link className="nav-link nav-link-y-pnl" data-bs-toggle="tab" eventKey="fxdamount">Fixed Amount</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="nav-item">
                                            <div className="mt-2 t-gray">
                                                <OverlayTrigger
                                                    placement="top" // You can change this to "bottom", "left", or "right"
                                                    overlay={
                                                        <Tooltip id="tooltip-top">
                                                            Tootlip
                                                        </Tooltip>
                                                    }
                                                >
                                                    <span>
                                                        <FontAwesomeIcon icon={faInfoCircle} />
                                                    </span>
                                                </OverlayTrigger>
                                            </div>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                                <p className="text-center">Each order uses a fixed amount for purchase.</p>
                                <Tab.Content className="tab-content">
                                    <Tab.Pane eventKey="fxdamount" className="tab-pane fade in fixamtborder">
                                        <Form className="siteformbg">
                                            <Form.Group className="form-group">
                                                <Form.Label>Total Stop Loss<span className="badge badge-info ms-2">Recommended</span></Form.Label>
                                                <div className="input-group">
                                                    <FormControl id='stoploss' type="text" className="form-control" placeholder="0 - 95" />
                                                    <span className="input-group-text">% ROE</span>
                                                </div>
                                                <p>When the total copied amount of the copier (total copied amount = copied amount + unrealized PNL and loss + realized PNL) reaches -- USDT, a stop-loss market order will be triggered to sell and currencies</p>
                                            </Form.Group>
                                            <Form.Group className="form-group">
                                                <Form.Label>Personal Pairs Preference</Form.Label>
                                                <div className="tabrightbox spotcoy-five-y">
                                                    <Link href="#" onClick={handleShowEdit} id='showedit' className="alink"><FontAwesomeIcon icon={faEdit} className='me-2' />Edit</Link>
                                                </div>
                                                <div className="lightgraybg pb-0">
                                                    <ul className="cnpairlist pairlistb">
                                                        <li><div><Form.Check type="checkbox" id='btccheck' label='BTC/USDT' className=" me-1" /></div></li>
                                                        <li><div><Form.Check type="checkbox" id='ethcheck' label="ETH/USDT" className=" me-1" /></div></li>
                                                        <li><div><Form.Check type="checkbox" id='bnbcheck' label="BNB/USDT" className=" me-1" /></div></li>
                                                        <li><div><Form.Check type="checkbox" id='ltccheck' label="LTC/USDT" className=" me-1" /></div></li>
                                                        <li><div><Form.Check type="checkbox" id='xrpcheck' label="XRP/USDT" className=" me-1" /></div></li>
                                                        <li><div><Form.Check type="checkbox" id='trxcheck' label="TRX/USDT" className=" me-1" /></div></li>
                                                        <li><div><Form.Check type="checkbox" id='dashcheck' label="DASH/USDT" className=" me-1" /></div></li>
                                                        <li><div><Form.Check type="checkbox" id='dogecheck' label="DOGE/USDT" className=" me-1" /></div></li>
                                                        <li><div><Form.Check type="checkbox" id='dogecheck' label="DOGE/USDT" className=" me-1" /></div></li>
                                                        <li><div><Form.Check type="checkbox" id='dashcheck' label="DASH/USDT" className=" me-1" /></div></li>
                                                        <li><div><Form.Check type="checkbox" id='dashcheck' label="DASH/USDT" className=" me-1" /></div></li>
                                                        <li><div><Form.Check type="checkbox" id='dashcheck' label="DASH/USDT" className=" me-1" /></div></li>
                                                    </ul>
                                                </div>
                                            </Form.Group>
                                            <Form.Group className="form-group">
                                                <Form.Check
                                                    type="checkbox" id='checkprof'
                                                    label={
                                                        <span className='ms-1'>
                                                            I have confirmed Profit Sharing is <span className='alinkt'>1.10%</span>
                                                        </span>
                                                    }
                                                />
                                            </Form.Group>
                                            <Form.Group className="form-group">
                                                <Form.Check
                                                    type="checkbox" id='agreeterms'
                                                    label={
                                                        <span className='ms-1'>
                                                            I have read and I agree to the
                                                            <Link className='ms-1 alinkt' href='#' target="_blank" rel="noopener noreferrer">
                                                                terms and conditions
                                                            </Link>
                                                        </span>
                                                    }
                                                />
                                            </Form.Group>
                                            <Form.Group className="form-group">
                                                <Button type="button" id='savebtn' className="btn sitebtn">Save</Button>
                                            </Form.Group>
                                        </Form>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Container>
                </section>

                <Homefooter />
            </div>

            <Modal centered show={showEdit} onHide={handleHideEdit} className=" pairmdlbox" id="paireditmdl" aria-hidden="true">
                <Modal.Header closeButton>
                    <h5 className="modal-title">Copy Pairs</h5>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <Form className="siteformbg">
                        <Form.Group className="form-group">
                            <div className="input-group">
                                <Form.Control type="text" id='searchtrader' className="form-control" placeholder="Search" />
                                <span className="input-group-text">
                                    <span><FontAwesomeIcon icon={faSearch} /></span>
                                </span>
                            </div>
                        </Form.Group>
                        <ul className="cnpairlist pairlistb">
                            <li><div><Form.Check type="checkbox" id='btccheck' label='BTC/USDT' className=" me-1" /></div></li>
                            <li><div><Form.Check type="checkbox" id='ethcheck' label="ETH/USDT" className=" me-1" /></div></li>
                            <li><div><Form.Check type="checkbox" id='bnbcheck' label="BNB/USDT" className=" me-1" /></div></li>
                            <li><div><Form.Check type="checkbox" id='ltccheck' label="LTC/USDT" className=" me-1" /></div></li>
                            <li><div><Form.Check type="checkbox" id='xrpcheck' label="XRP/USDT" className=" me-1" /></div></li>
                            <li><div><Form.Check type="checkbox" id='trxcheck' label="TRX/USDT" className=" me-1" /></div></li>
                            <li><div><Form.Check type="checkbox" id='dashcheck' label="DASH/USDT" className=" me-1" /></div></li>
                            <li><div><Form.Check type="checkbox" id='dogecheck' label="DOGE/USDT" className=" me-1" /></div></li>
                            <li><div><Form.Check type="checkbox" id='dogecheck' label="DOGE/USDT" className=" me-1" /></div></li>
                            <li><div><Form.Check type="checkbox" id='dashcheck' label="DASH/USDT" className=" me-1" /></div></li>
                            <li><div><Form.Check type="checkbox" id='dashcheck' label="DASH/USDT" className=" me-1" /></div></li>
                            <li><div><Form.Check type="checkbox" id='dashcheck' label="DASH/USDT" className=" me-1" /></div></li>
                        </ul>
                        <Form.Group className="form-group mb-0">
                            <div className="d-flex slectpirbtn align-items-center">
                                    <Form.Check id='selectall' type="checkbox" label="Select All (112/112)" className="" />
                            </div>
                            <div className="text-center mt-2">
                                <Button type="button" id='canclbtn' className="btn borderbtn btn-sm">Cancel</Button>
                                <Button type="button" id='confbtn' className="btn ms-2 sitebtn btn-sm">Confirm</Button>
                            </div>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SpotTradeCopy5;