"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';
import { Container, Image, Row, Col, Nav, Table, Form, Tab, Badge, Accordion, InputGroup, Button, Dropdown, FormControl, Collapse, OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faExchange, faInfoCircle, faShare } from '@fortawesome/free-solid-svg-icons';
import RangleSlider from './RangeSlider';



const FuturesTradeCopy2 = () => {
    useEffect(() => {
        document.body.classList.add('featurescopytrade');

        return () => {
            document.body.classList.remove("featurescopytrade");
        };
    });
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    return (
        <div className='cpytrade'>
            <Homeheader />

            <section className="innerpagecontent copytradetopsection savingbannersec ieobannerbg">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7} md={7}>
                            <h2 className="heading-title"><span className="profileicon"><Image alt='coin' width={20} height={20} src="assets/images/profile1.svg" className='profilimg' /></span> Albert Flores (Futures)</h2>
                            <p>Choose the “Fixed Ratio” mode and leave other settings untouched, especially avoiding stop loss. * I trade with confidence, maintaining a long-term win rate of around 90% * Experience steady asset growth with zero risk.</p>
                            <ul className="cpytradelist">
                                <li>
                                    <p className="t-gray mb-0">Days Trading</p>
                                    <h5>260</h5>
                                </li>
                                <li>
                                    <p className="t-gray mb-0">Copiers</p>
                                    <h5>743/800</h5>
                                </li>
                                <li>
                                    <p className="t-gray mb-0">Total Copiers</p>
                                    <h5>3,946</h5>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={5} md={5}>
                            <div className="text-center portfolioborder">
                                <p><Link href="#" className="alink"><u>Back to portfolios list</u></Link></p>
                                <p><span className="borderline-box">206 marked as favorites</span></p>
                                <p><span className="borderline-box"><FontAwesomeIcon className='me-2' icon={faShare} />Share</span></p>
                                <Link href="/spot-copy-trade-2" id='copybtn1' className="btn sitebtn">Copy</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="copytradecntsection">
                <Container className="container">
                    <div className="centerbox mx-auto ratioformbox">
                        <Tab.Container defaultActiveKey='fxdamount'>
                            <div className="twotablesec">
                                <Nav variant='tabs' className="nav nav-tabs border-0" role="tablist">
                                    <Nav.Item className="nav-item"><Nav.Link className="nav-link nav-link-y-pnl" eventKey="fxdamount">Fixed Amount</Nav.Link></Nav.Item>
                                    <Nav.Item className="nav-item"><Nav.Link className="nav-link nav-link-y-pnl" eventKey="fxdratio">Fixed Ratio</Nav.Link></Nav.Item>
                                    <Nav.Item className="nav-item"><OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top"> Lorem text</Tooltip>}>
                                        <div className="mt-2 t-gray ms-2">
                                            <FontAwesomeIcon icon={faInfoCircle} />
                                        </div></OverlayTrigger>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <p className="text-center">Each order uses a fixed amount for purchase.</p>
                            <Tab.Content>
                                <Tab.Pane eventKey="fxdamount" className="tab-pane fade in fixamtborder">
                                    <Form className="siteformbg">
                                        <Form.Group className="form-group">
                                            <Form.Label>Cost per order</Form.Label>
                                            <InputGroup className="input-group">
                                                <FormControl id='costporder' className="form-control" placeholder="10 - 1,000" /> <span className="input-group-text">USDT<span></span></span>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Copy amount</Form.Label>
                                            <div className="tabrightbox tabratiobspot tabratiob">
                                                <p>Available in Spot 3,000 USDT <FontAwesomeIcon icon={faExchange} /></p>
                                            </div>
                                            <InputGroup className="input-group">
                                                <FormControl id='cpyamnt' className="form-control" placeholder="10 - 50,000" /> <span className="input-group-text"><span>USDT</span> <span className="ms-2">MAX</span> <span></span></span>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="advancesettingbox">
                                            <div className="settingb mb-4">
                                                <Button eventKey="demo1" onClick={() => setOpen(!open)} aria-controls="record1" aria-expanded={open} className="alinkt btn borderbtn">Advanced Settings<FontAwesomeIcon icon={faAngleDown} className='ms-3' /></Button>
                                            </div>
                                            <Collapse in={open}>
                                                <div id="demo1">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Margin Mode</Form.Label>
                                                        <Form.Select id='marginsel' className="form-control">
                                                            <option>Fixed</option>
                                                            <option>Lead trader's margin mode</option>
                                                        </Form.Select>
                                                        <Form.Text>Your margin mode will be the same as the Lead Trader's settings.</Form.Text>
                                                        <div className="d-flex mt-2">
                                                            <Form.Check type="radio" className="radio-gap" id="cross" label="Cross" name="marginMode" defaultChecked />
                                                            <Form.Check type="radio" className="radio-gap" id="isolated" label="Isolated" name="marginMode" />
                                                        </div>
                                                    </Form.Group>

                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Leverage</Form.Label>
                                                        <Form.Select id='leverage' className="form-control">
                                                            <option>Lead trader's leverage</option>
                                                        </Form.Select>
                                                        <Form.Text>Your margin mode will be the same as the Lead Trader's settings.</Form.Text>
                                                        <div className="feas-cpy-trd-y mt-4">
                                                            <RangleSlider />
                                                        </div>


                                                    </Form.Group>

                                                    <Form.Group>
                                                        <Form.Label>
                                                            Position Risk
                                                            <OverlayTrigger
                                                                placement="top"
                                                                overlay={
                                                                    <Tooltip id="tooltip-info">
                                                                        Lorem text
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <span>
                                                                    <FontAwesomeIcon icon={faInfoCircle} className='ms-2' />
                                                                </span>
                                                            </OverlayTrigger>
                                                        </Form.Label>
                                                        <Row>
                                                            <Col lg={4}>
                                                                <Form.Label>Take Profit</Form.Label>
                                                                <InputGroup>
                                                                    <Form.Control id='takeprofit' placeholder="0-2,000" />
                                                                    <InputGroup.Text>% ROE</InputGroup.Text>
                                                                </InputGroup>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <Form.Label>Stop Loss</Form.Label>
                                                                <InputGroup>
                                                                    <Form.Control id='roe2' placeholder="0-95" />
                                                                    <InputGroup.Text>% ROE</InputGroup.Text>
                                                                </InputGroup>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <Form.Label>Max Position Per Symbol</Form.Label>
                                                                <InputGroup>
                                                                    <Form.Control id='maxpos2' placeholder="5-95" />
                                                                    <InputGroup.Text>%</InputGroup.Text>
                                                                </InputGroup>
                                                            </Col>
                                                        </Row>
                                                    </Form.Group>

                                                    <Form.Group className='mt-3'>
                                                        <Form.Label>
                                                            Total Stop Loss
                                                            <OverlayTrigger
                                                                placement="top"
                                                                overlay={
                                                                    <Tooltip id="tooltip-info">
                                                                        Lorem text
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <span>
                                                                    <FontAwesomeIcon icon={faInfoCircle} className='ms-2' />
                                                                </span>
                                                            </OverlayTrigger>
                                                        </Form.Label>
                                                        <InputGroup>
                                                            <Form.Control id='totstoploss' placeholder="0 - 95" />
                                                            <InputGroup.Text>% ROE</InputGroup.Text>
                                                        </InputGroup>
                                                        <p className='mt-2'> <small>
                                                            When the estimated margin balance of copying the trader reaches -- USDT, a Stop Loss Market order will be triggered to close all positions. Estimated PNL is -- USDT.
                                                        </small>
                                                        </p>
                                                    </Form.Group>
                                                </div>
                                            </Collapse>
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
                                            <Link href="/futures-copy-trade-3" id='cpybtn2' className="btn sitebtn">Copy</Link>
                                        </Form.Group>
                                    </Form>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fxdratio" className="tab-pane fade in fixamtborder">
                                    <Form className="siteformbg">
                                        <Form.Group className="form-group">
                                            <Form.Label>Copy amount</Form.Label>
                                            <div className="tabrightbox tabratiobspot tabratiob">
                                                <p>Available in Spot 3,000 USDT <i className="fa fa-exchange"></i></p>
                                            </div>
                                            <InputGroup className="input-group">
                                                <FormControl id='cpyamnt2' className="form-control" placeholder="10 - 50,000" /> <span className="input-group-text"><span>USDT</span> <span className="ms-2">MAX</span> <span></span></span>
                                            </InputGroup>
                                        </Form.Group>
                                        <div className="advancesettingbox">
                                            <div className="settingb mb-4">
                                                <Button onClick={() => setOpen1(!open1)} aria-controls="record1" aria-expanded={open1} className="alinkt btn borderbtn">Advanced Settings<FontAwesomeIcon icon={faAngleDown} className='ms-3' /></Button>
                                            </div>
                                            <Collapse in={open1}>
                                                <div id="demo2" className="collapse in">
                                                    <Form.Group className="form-group">
                                                        <Form.Label>Margin Mode</Form.Label>
                                                        <Form.Select id='marginsel' className="form-control">
                                                            <option>Lead trader’s margin mode</option>
                                                        </Form.Select><small>Your margin mode will be the same as the Lead Trader’s settings.</small>
                                                    </Form.Group>
                                                    <Form.Group className="form-group">
                                                        <Form.Label>Leverage</Form.Label>
                                                        <Form.Select id='leadsel' className="form-control">
                                                            <option>Lead trader’s leverage</option>
                                                        </Form.Select><small>Your margin mode will be the same as the Lead Trader’s settings.</small>
                                                    </Form.Group>
                                                    <Form.Group className="form-group">
                                                        <Form.Label>
                                                            Position Risk
                                                            <OverlayTrigger
                                                                placement="top"
                                                                overlay={
                                                                    <Tooltip id="tooltip-position-risk">
                                                                        Lorem text
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <span>
                                                                    <FontAwesomeIcon icon={faInfoCircle} className='ms-2' />
                                                                </span>
                                                            </OverlayTrigger>
                                                        </Form.Label>
                                                        <Row>
                                                            <Col lg={4}>
                                                                <Form.Label>Take Profit</Form.Label>
                                                                <InputGroup className="input-group">
                                                                    <FormControl id='takeprof' className="form-control" placeholder="0-2,000" /> <span className="input-group-text">% ROE<span></span></span>
                                                                </InputGroup>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <Form.Label>Stop Loss</Form.Label>
                                                                <InputGroup className="input-group">
                                                                    <FormControl id='roe' className="form-control" placeholder="0-95" /> <span className="input-group-text">% ROE<span></span></span>
                                                                </InputGroup>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <Form.Label>Max Position Per Symbol</Form.Label>
                                                                <InputGroup className="input-group">
                                                                    <FormControl id='maxpos' className="form-control" placeholder="5-95" /> <span className="input-group-text">%<span></span></span>
                                                                </InputGroup>
                                                            </Col>
                                                        </Row>
                                                    </Form.Group>
                                                    <Form.Group className="form-group">
                                                        <Form.Label>Total Stop Loss
                                                            <OverlayTrigger
                                                                placement="top"
                                                                overlay={
                                                                    <Tooltip id="tooltip-info">
                                                                        Lorem text
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <span>
                                                                    <FontAwesomeIcon icon={faInfoCircle} className='ms-2' />
                                                                </span>
                                                            </OverlayTrigger>
                                                        </Form.Label>
                                                        <InputGroup className="input-group">
                                                            <FormControl id='roe2' className="form-control" placeholder="0 - 95" /> <span className="input-group-text">% ROE<span></span></span>
                                                        </InputGroup>
                                                          <p className='mt-2'> <small>
                                                          When the estimated margin balance of copying the trader reaches -- USDT, a Stop Loss Market order will be triggered to close all positions. Estimated PNL is -- USDT.
                                                        </small>
                                                        </p>
                                                    </Form.Group>
                                                </div>
                                            </Collapse>
                                        </div>
                                        <div className="form-group">
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
                                        </div>
                                        <div className="form-group">
                                            <Link href="/futures-copy-trade-3" id='cpybtn3' className="btn sitebtn">Copy</Link>
                                        </div>
                                    </Form>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </Container>
            </section>

            <Homefooter />
        </div>
    )
}

export default FuturesTradeCopy2;