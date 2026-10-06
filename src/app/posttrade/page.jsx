"use client"
import React, { useState, useEffect } from 'react'
import { Container, Form, Row, Col, InputGroup, Tooltip, OverlayTrigger } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import './../../../public/assets/css/p2pcustom.css';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Page = () => {

    useEffect(() => {
        document.body.classList.add('p2p');

        return () => {
            document.body.classList.remove("p2p");
        };
    });
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        setChecked(e.target.checked);
    };


    const pathname = usePathname();
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <article className="">
                <div className="innerpagecontent inpgycon-y">
                    <div className="cryptopricebox">
                        <div className="introbox panelcontentbox panycon-y ">
                            <div className="cryptobox">
                                <div className="crytb-y">
                                    <div>
                                        <h5 className="h5">
                                            <Link href="/p2poverview">Overview</Link></h5>
                                    </div>
                                    <div>
                                        <h5 className="h5">
                                            <Link href="/buysell">Buy/Sell</Link></h5>
                                    </div>
                                    <div>
                                        <h5 className="h5">
                                            <Link
                                                href="/posttrade"
                                                className={`nav-link ${pathname === '/posttrade' ? 'active' : ''}`}
                                            >
                                                Post New Ad
                                            </Link>
                                        </h5>
                                    </div>
                                    <div>
                                        <h5 className="h5">
                                            <Link href="/trademessage">Trade Message</Link></h5>
                                    </div>
                                    <div>
                                        <h5 className="h5">
                                            <Link href="/disputetrade">Dispute Trade</Link></h5>
                                    </div>
                                    <div>
                                        <h5 className="h5">
                                            <Link href="/adshistory">Advertisement History</Link></h5>
                                    </div>
                                    <div>
                                        <h5 className="h5">
                                            <Link href="/feedback">Feedback</Link></h5>
                                    </div>
                                    <div>
                                        <h5 className="h5">
                                            <Link href="tradehistory">Completed Trade History</Link></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Container className="posttradepage">
                    <h2 class="sub-heading">Post New Advertisement</h2>
                    <div className="panelcontentbox posttradebox">
                        <div className="contentbox">
                            <Form className="siteformbg">
                                <div className="posttradebox">
                                    <div className="posttitlebox">
                                        <h4 className="innertitle">Asset</h4>
                                    </div>
                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Cryptocurrency <span className="text-danger">*</span></Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Select className='form-control' id="cryptocurrency_select">
                                                <option>BTC</option>
                                                <option>ETH</option>
                                                <option>DASH</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                </div>
                                <hr />

                                <div className="posttradebox">
                                    <div className="posttitlebox">
                                        <h4 className="innertitle">Trade Type*</h4>
                                    </div>
                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Buy / Sell <span className="text-danger"></span></Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Select className='form-control' id="tradetype">
                                                <option>Buy</option>
                                                <option>Sell</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Location <span className="text-danger"></span></Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Control type="text" id="location" />
                                        </Col>
                                        <Col md={5} lg={7}>
                                            <p>Please Specify your City</p>
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Country <span className="text-danger"></span></Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Select className='form-control' id="country">
                                                <option>United States of America</option>
                                                <option>India</option>
                                            </Form.Select>
                                        </Col>
                                        <Col md={5} lg={7}>
                                            <p>Please Specify your Country to find the Trade</p>
                                        </Col>
                                    </Row>

                                </div>
                                <hr />
                                <div className="posttradebox">
                                    <div className="posttitlebox">
                                        <h4 className="innertitle">Currency Info*</h4>
                                    </div>
                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Market <span className="text-danger"></span></Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Select className='form-control' id="market">
                                                <option>USD</option>
                                                <option>INR</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Margin <span className="text-danger"></span></Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <InputGroup>
                                                <Form.Control type="text" id="margin" />
                                                <InputGroupText>%</InputGroupText>
                                            </InputGroup>
                                        </Col>
                                        <Col md={5} lg={7}>
                                            <p>Margin you want over the coin market price. Use a negative value for buying or selling under the market price to attract more contacts.</p>
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Trade price <span className="text-danger"></span></Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Select className='form-control' id="country">
                                                <option>BTC (in USD)*USD (in INR)</option>
                                                <option>BTC (in USD)*USD (in INR)</option>
                                            </Form.Select>
                                        </Col>
                                        <Col md={5} lg={7}>
                                            <p>How the trade price is determined from the hourly market price.</p>
                                        </Col>
                                        <Col md={3} lg={2}></Col>
                                        <Col md={4} lg={3} className="mt-2">
                                            <small className="t-green">Trade price with current market value <br />9243447.36 + (9243447.36 + 0%) = 9243447.36
                                            </small>
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Quantity</Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Control type="text" id="quantity" />
                                        </Col>
                                        <Col md={5} lg={7}>
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Min Limit </Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Control type="text" id="min_translimit" />
                                        </Col>
                                        <Col md={5} lg={7}>
                                            <p>Min amount allowed per Trade</p>
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Max Limit</Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Control type="text" id="max_translimit" />
                                        </Col>
                                        <Col md={5} lg={7}>
                                            <p>Min amount allowed per Trade</p>
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Payment Window</Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Control type="text" id="payment_window" />
                                        </Col>
                                        <Col md={5} lg={7}>
                                            <p>Minimum payment time 15mins. If you does not pay within the payment time, the trade will be cancelled automatically.</p>
                                        </Col>
                                    </Row>


                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Availability Hours
                                                <span className="tooltiptxt ms-2">
                                                    <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">Availability Hours are based on UTC (Coordinated Universal Time)</Tooltip>}>
                                                        <FontAwesomeIcon icon={faInfoCircle} />
                                                    </OverlayTrigger>
                                                </span></Form.Label>
                                            <div className="form-group">
                                                <Form.Check type="checkbox" id="applyall" label="Apply All" />
                                            </div>
                                        </Col>
                                        <Col md={12} lg={7}>
                                            <div className="openinghbg">
                                                <div>
                                                    <h6>Sunday</h6>
                                                    <div className="srthoursbg">
                                                        <Form.Select className='form-control' id="sun_startdate">
                                                            <option value="">Start</option>
                                                        </Form.Select>
                                                        <Form.Select className='form-control' id="sun_enddate">
                                                            <option value="" >End</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6>Monday</h6>
                                                    <div className="srthoursbg">
                                                        <Form.Select className='form-control' id="mon_startdate">
                                                            <option value="" >Start</option>
                                                        </Form.Select>
                                                        <Form.Select className='form-control' id="mon_endtdate">
                                                            <option value="" >End</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6>Tuesday</h6>
                                                    <div className="srthoursbg">
                                                        <Form.Select className='form-control' id="tues_startdate">
                                                            <option value="" >Start</option>
                                                        </Form.Select>
                                                        <Form.Select className='form-control' id="tues_enddate">
                                                            <option value="" >End</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6>Wednesday</h6>
                                                    <div className="srthoursbg">
                                                        <Form.Select className='form-control' id="wed_startdate">
                                                            <option value="" >Start</option>
                                                        </Form.Select>
                                                        <Form.Select className='form-control' id="wed_enddate">
                                                            <option value="" >End</option>
                                                            <option value="00:00">00:00</option>
                                                            <option value="00:00">00:00</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6>Thursday</h6>
                                                    <div className="srthoursbg">
                                                        <Form.Select className='form-control' id="thurs_startdate">
                                                            <option value="" >Start</option>
                                                        </Form.Select>
                                                        <Form.Select className='form-control' id="thurs_enddate">
                                                            <option value="" >End</option>
                                                            <option value="00:00">00:00</option>
                                                            <option value="00:15">00:15</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6>Friday</h6>
                                                    <div className="srthoursbg">
                                                        <Form.Select className='form-control' id="fri_startdate">
                                                            <option value="" >Start</option>
                                                            <option value="00:00">00:00</option>
                                                        </Form.Select>
                                                        <Form.Select className='form-control' id="fri_enddate">
                                                            <option value="" >End</option>
                                                            <option value="00:00">00:00</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6>Saturday</h6>
                                                    <div className="srthoursbg">
                                                        <Form.Select className='form-control' id="sat_startdate">
                                                            <option value="" >Start</option>
                                                            <option value="00:00">00:00</option>
                                                            <option value="00:15">00:15</option>
                                                            <option value="23:45">23:45</option>
                                                        </Form.Select>
                                                        <Form.Select className='form-control' id="sat_endtdate">
                                                            <option value="" >End</option>
                                                            <option value="00:00">00:00</option>
                                                            <option value="00:15">00:15</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <hr />
                                <div className="posttradebox">
                                    <div className="posttitlebox">
                                        <h4 className="innertitle">Online Options </h4>
                                    </div>
                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Payment Method <span className="text-danger">*</span> </Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Select className='form-control' id="payment_method">
                                                <option>Select Payment Method</option>
                                                <option>Cash Deposit</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Account Details<span className="text-danger">*</span></Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Control as="textarea" rows={3} id="acc_details" />
                                        </Col>
                                        <Col md={5} lg={7}>
                                            <p>please enter your account details.</p>
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Additional Information</Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Control type="text" id="add_info" />
                                        </Col>
                                        <Col md={5} lg={7}>
                                            <p>Optional. If needed, please provide details how to transfer money. This could be a bank account number for wire transfer or user ID for payment platforms</p>
                                        </Col>
                                    </Row>

                                </div>
                                <hr />
                                <div className="posttradebox">
                                    <div className="posttitlebox">
                                        <h4 className="innertitle">Terms of Trade</h4>
                                    </div>
                                    <Row className="form-group">
                                        <Col md={3} lg={2}>
                                            <Form.Label>Terms<span className="text-danger">*</span></Form.Label>
                                        </Col>
                                        <Col md={4} lg={3}>
                                            <Form.Control as="textarea" rows={3} id="terms" />
                                        </Col>
                                        <Col md={5} lg={7}>
                                            <p>Any Additional information you want to share about you trade</p>
                                        </Col>
                                    </Row>
                                </div>
                                <hr />
                                <div className="text-center form-group mt-20">
                                    <input type="submit" className="btn sitebtn" id="submit_btn" />
                                </div>
                            </Form>
                        </div>
                    </div>
                </Container>
            </article>
            <Userfooter />
        </div >
    )
}

export default Page;