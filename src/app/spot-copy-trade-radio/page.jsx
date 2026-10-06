"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';
import { Container, Image, Row, Col, Nav, Table, Form, Tab, Badge, Accordion, InputGroup, Button, FormControl, Modal, ModalHeader, OverlayTrigger, Tooltip  } from 'react-bootstrap';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faEdit, faExchange, faInfoCircle, faSearch } from '@fortawesome/free-solid-svg-icons';


const SpotTradeCopy2 = () => {

    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [showPar, setShowPair] = useState(false)
    const [showCpy, setShowCpy] = useState(false)
    const [showCopyModal, setShowCopyModal] = useState(false)
    const [showEdit, setShowEdit] = useState(false)

    const handleShowEdit = () => {
        setShowEdit(true)
    }
    const handleHideEdit = () => {
        setShowEdit(false)
    }

    const handleShow = () => {
        setShow(true)
    }
    const handlehide = () => {
        setShow(false)
    }
    const handleShow2 = () => {
        setShow2(true)
    }
    const handlehide2 = () => {
        setShow2(false)
    }
    const handleShowPair = () => {
        setShowPair(true)
    }
    const handlehidePair = () => {
        setShowPair(false)
    }
    const handleShowCpy = () => {
        setShowCpy(true)
    }
    const handlehideCpy = () => {
        setShowCpy(false)
    }
    const handleShowCopyModal = () => {
        setShowCopyModal(true)
    }
    const handlehideCopyModal = () => {
        setShowCopyModal(false)
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
                        <Row className="align-items-center spt-trd-two-y">
                            <Col lg={7} md={7}>
                                <p className="mb-0"><Link href="#" className="alink"><FontAwesomeIcon className='me-2' icon={faAngleLeft} /><span className="t-black">Portfolios List</span></Link></p>
                                <h2 className="heading-title">Spot Copy Settings</h2>
                            </Col>
                            <Col lg={5} md={5}>

                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="copytradecntsection">
                    <Container>
                        <div className="profiletopdtabox mb-5">
                            <div className="table-content">
                                <div>
                                    <div className="d-flex prflex align-items-center gap-2">
                                        <div>
                                            <span className="profileicon"><Image alt='coinicon' width={20} height={20} className="spttwo-img-y" src="assets/images/profile1.svg" /></span>
                                        </div>
                                        <div>
                                            <h5 className="mb-0">Albert Flores</h5>
                                            <p className="mb-0">We all gonna make it! <Link href="#" className="alinkt">View Original</Link></p>
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
                            <Tab.Container defaultActiveKey='fxdratio'>
                                <div className="twotablesec">
                                    <Nav className="nav nav-tabs border-0" role="tablist">
                                        <Nav.Item className="nav-item">
                                            <Nav.Link className="nav-link nav-link-y-pnl" id='fixedration' eventKey="fxdratio">Fixed Ratio</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="nav-item">
                                            <Nav.Link className="nav-link nav-link-y-pnl" id='fxdamount' eventKey="fxdamount">Fixed Amount</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="nav-item">

                                        </Nav.Item>
                                    </Nav>
                                </div>
                                <Tab.Content className="tab-content">
                                    <Tab.Pane eventKey="fxdratio" className="tab-pane fade in fixamtborder">
                                        <p className="text-start">Each order uses a fixed amount for purchase.</p>
                                        <div className="t-gray tabrightbox infopopupratio">
                                            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={
                                            <Tooltip id="staylogged-tooltip">
                                                A contract address is a unique
                                            </Tooltip>}><FontAwesomeIcon icon={faInfoCircle} size="lg" />
                                        </OverlayTrigger>
                                        </div>
                                        <Form className="siteformbg">
                                            <Form.Group className="form-group">
                                                <div className='d-flex justify-content-between'>
                                                    <div>
                                                        <Form.Label>Copy amount</Form.Label>
                                                    </div>
                                                    <div className="">
                                                        <p>Available in Spot 3,000 USDT <FontAwesomeIcon icon={faExchange} /></p>
                                                    </div>
                                                </div>

                                                <InputGroup className="input-group">
                                                    <FormControl type="text" className="form-control" id='cpyamount' placeholder="10 - 50,000" />
                                                    <span className="input-group-text">
                                                        <span>USDT</span>
                                                        <span className="ms-2">MAX</span>
                                                    </span>
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group className="form-group">
                                                <Form.Label>Total Stop Loss<span className="badge badge-info ms-2">Recommended</span></Form.Label>
                                                <InputGroup className="input-group">
                                                    <FormControl id='totstoploss' type="text" className="form-control" placeholder="0 - 95" />
                                                    <span className="input-group-text">% ROE</span>
                                                </InputGroup>
                                                <p className="mt-3"> <small>
                                                    When the total copied amount of the copier (total copied amount = copied amount + unrealized PNL and loss + realized PNL) reaches -- USDT, a stop-loss market order will be triggered to sell and currencies
                                                </small></p>
                                            </Form.Group>
                                            <Form.Group className="form-group">
                                                <Form.Label>Personal Pairs Preference</Form.Label>
                                                <div className="tabrightbox spotcoy-five-y">
                                                    <p className='d-flex gap-1 align-items-center'><Form.Check type="checkbox" id='btccheck' label='' className=" " />Select all</p>
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
                                                    type="checkbox" id='confirmprfit'
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
                                                <Button type="button" id='cpybtnmodal1' onClick={handleShowCopyModal} className="btn sitebtn" >Copy</Button>
                                            </Form.Group>
                                        </Form>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fxdamount" className="tab-pane fade in fixamtborder">
                                        <p className="text-start">Each order uses a fixed amount for purchase.</p>
                                        <div className="t-gray tabrightbox infopopupratio">
                                            <FontAwesomeIcon icon={faInfoCircle} />
                                        </div>
                                        <Form className="siteformbg">
                                            <Form.Group className="form-group">
                                                <Form.Label>Cost per order</Form.Label>
                                                <InputGroup className="input-group">
                                                    <FormControl id='costperorder' type="text" className="form-control" placeholder="10 - 1,000" />
                                                    <span className="input-group-text">USDT</span>
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group className="form-group">
                                                <Form.Label>Copy amount</Form.Label>
                                                <div className="tabrightbox tabratiob tabratiobspot">
                                                    <p>Available in Spot 3,000 USDT <FontAwesomeIcon icon={faExchange} /></p>
                                                </div>
                                                <InputGroup className="input-group">
                                                    <FormControl type="text" id='cpyamntfixed' className="form-control" placeholder="10 - 50,000" />
                                                    <span className="input-group-text">
                                                        <span>USDT</span>
                                                        <span className="ms-2">MAX</span>
                                                    </span>
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group className="form-group">
                                                <Form.Label>Total Stop Loss<span className="badge badge-info ms-2">Recommended</span></Form.Label>
                                                <InputGroup className="input-group">
                                                    <FormControl id='totstoplossfix' type="text" className="form-control" placeholder="0 - 95" />
                                                    <span className="input-group-text">% ROE</span>
                                                </InputGroup>

                                                <p className="mt-3"><small>
                                                    When the total copied amount of the copier (total copied amount = copied amount + unrealized PNL and loss + realized PNL) reaches -- USDT, a stop-loss market order will be triggered to sell and currencies </small></p>
                                            </Form.Group>
                                            <Form.Group className="form-group">
                                                <Form.Label>Personal Pairs Preference</Form.Label>
                                                <div className="tabrightbox tabratiobspot">
                                                    <Link href="#" id='editpreffix' onClick={handleShowPair} className="alink"><FontAwesomeIcon icon={faEdit} className='me-2' />Edit</Link>
                                                </div>
                                                <div className="lightgraybg pb-0">
                                                    <ul className="cnpairlist">
                                                        <li><Image alt='coinicon' width={20} height={20} className="me-2" src="assets/images/color/btc.svg" />BTC/USDT</li>
                                                        <li><Image alt='coinicon' width={20} height={20} className="me-2" src="assets/images/color/eth.svg" />ETH/USDT</li>
                                                        <li><Image alt='coinicon' width={20} height={20} className="me-2" src="assets/images/color/ltc.svg" />LTC/USDT</li>
                                                        <li><Image alt='coinicon' width={20} height={20} className="me-2" src="assets/images/color/trx.svg" />TRX/USDT</li>
                                                        <li><Image alt='coinicon' width={20} height={20} className="me-2" src="assets/images/color/sol.svg" />SOL/USDT</li>
                                                        <li><Image alt='coinicon' width={20} height={20} className="me-2" src="assets/images/color/avax.svg" />AVAX/USDT</li>
                                                        <li><Image alt='coinicon' width={20} height={20} className="me-2" src="assets/images/color/ton.svg" />TON/USDT</li>
                                                    </ul>
                                                </div>
                                            </Form.Group>
                                            <Form.Group className="form-group">
                                                <Form.Check
                                                    type="checkbox" id='agreeproffix'
                                                    label={
                                                        <span className='ms-1'>
                                                            I have confirmed Profit Sharing is <span className='alinkt'>1.10%</span>
                                                        </span>
                                                    }
                                                />
                                            </Form.Group>
                                            <Form.Group className="form-group">
                                                <Form.Check
                                                    type="checkbox" id='agreetermsfix'
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
                                                <Button type="button" className="btn sitebtn" id='cpybtnmodal2' onClick={handleShowCopyModal}>Copy</Button>
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

            <Modal show={showCopyModal} onHide={handlehideCopyModal} className="pairmdlbox" id="copyconfirm" aria-hidden="true">
                <Modal.Header className="modal-header">
                    <h5 className="modal-title">Confirmation</h5>
                    <Button type="button" id='closebtn' className="close" data-bs-dismiss="modal"><span>&times;</span></Button>
                </Modal.Header>
                <Modal.Body className="modal-body ps-2 pe-2">
                    <Table id='table1' className="table sitetable copydatatable">
                        <tbody>
                            <tr>
                                <td>Copy Mode</td>
                                <td className="text-end">Fixed Amount</td>
                            </tr>
                            <tr>
                                <td>Cost Per Order</td>
                                <td className="text-end">10 USDT</td>
                            </tr>
                            <tr>
                                <td>Copy Amount</td>
                                <td className="text-end">100 USDT</td>
                            </tr>
                            <tr>
                                <td>Total Stop Loss</td>
                                <td className="text-end">50%</td>
                            </tr>
                            <tr>
                                <td colspan="2" className="pb-0"><Link href="/spot-copy-trade-3" id='confirmbtnmodal' className="btn sitebtn w-100">Confirm</Link></td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal>


            <Modal show={show} centered onHide={handlehide} className=" tipsmodl">
                <Modal.Header className="">
                    <h5 className="modal-title">Tips</h5>
                    <Button type="button" onClick={handlehide} className="close"><span>&times;</span></Button>
                </Modal.Header>
                <Modal.Body className="">
                    <Form.Group className="form-group">
                        <h6 className="t-black"><b>Cost Per Order</b></h6>
                        <p>Each order will be opened at a fixed amount based on the indicated cose per order.</p>
                    </Form.Group>
                    <Form.Group className="form-group">
                        <h6 className="t-black"><b>Copy Amount</b></h6>
                        <p>Total amount invested in Copy Trade.</p>
                    </Form.Group>
                    <Form.Group className="form-group">
                        <h6 className="t-black"><b>Total Stop Loss</b></h6>
                        <p className="mt-3">
                            When the total balance of the portfolio triggers you stop loss, we will help you close the position at the market price and automatically close the ongoing portfolio for you. </p>
                        <small><p><b className="t-black">Please Note :</b> Transferring funds when the project is running will change the stop loss amount.</p>
                        </small>

                    </Form.Group>
                </Modal.Body>
            </Modal>


            <Modal show={show2} onHide={handleShow2} className=" tipsmodl" centered>
                <Modal.Header className="modal-header">
                    <h5 className="modal-title">Tips</h5>
                    <Button type="button" id='closebtn' className="close" onClick={handlehide2}><span>&times;</span></Button>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <div className="form-group">
                        <h6 className="t-black"><b>Cost Per Order</b></h6>
                        <p>Each order will be opened at a fixed amount based on the indicated cose per order.</p>
                    </div>
                    <div className="form-group">
                        <h6 className="t-black"><b>Copy Amount</b></h6>
                        <p>Total amount invested in Copy Trade.</p>
                    </div>
                    <div className="form-group">
                        <h6 className="t-black"><b>Total Stop Loss</b></h6>
                        <p className="mt-3">
                            When the total balance of the portfolio triggers you stop loss, we will help you close the position at the market price and automatically close the ongoing portfolio for you. </p>
                        <small><p><b className="t-black">Please Note :</b> Transferring funds when the project is running will change the stop loss amount.</p>
                        </small>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SpotTradeCopy2;