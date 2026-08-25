"use client"
import React, { useState, useEffect } from 'react'
import Countdown from 'react-countdown';
import '../../../public/assets/css/Checkout.css';
import { Container, Image, Row, Form, Col, Badge, Tooltip, OverlayTrigger, Alert, InputGroup, Button } from 'react-bootstrap'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faQuestionCircle, faCircleExclamation, faCopy, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';

const page = () => {
    const [show, setShow] = useState(true);
    const [singleOption, setSingleOption] = useState(null);
    // const targetDate = new Date(2025, 9, 29);
    // Define the target date and time (29th October 2025, 15:30)
    const targetDate = new Date(2025, 12, 30, 15, 30); // 3:30 PM


    const options = [
        { value: 'btc', label: 'BTC Bitcoin', image: 'assets/images/color/btc.svg', balance: 0.523 },
        { value: 'eth', label: 'ETH Ethereum', image: 'assets/images/color/eth.svg', balance: 2.51223 },
        { value: 'ltc', label: 'LTC Litecoin', image: 'assets/images/color/ltc.svg', balance: 3.723 },
    ];

    const handleSingleChange = (selected) => {
        setSingleOption(selected);
        console.log('Single Select:', selected);
    };
    const customOptionLabel = (data) => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={data.image} alt={data.label} style={{ width: 20, height: 20, marginRight: 10 }} />
                {data.label}
            </div>
            <span style={{ fontSize: '0.85em', color: '#000' }}>
                {data.balance}
            </span>
        </div>
    );

    const customStyles = {
        control: (base, state) => ({
            ...base,
            borderColor: state.isFocused ? '#4bb1d9' : '#ccc',
            boxShadow: state.isFocused ? '0 0 5px #4bb1d9' : 'none',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
                borderColor: '#4bb1d9',
            },
        }),
        option: (base, { isFocused }) => ({
            ...base,
            backgroundColor: isFocused ? '#F6F6F7' : '#F6F6F7',
            color: '#000',
            transition: 'background-color 0.3s ease',
        }),
    };

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span>The countdown is over!</span>;
        } else {
            return (
                <div className="counttimerb d-flex mt-2 pt-2">
                    <div>
                        <div className="numicon">{days}</div>
                        <div>Days</div>
                    </div>
                    <div>
                        <div className="numicon">{hours}</div>
                        <div>Hours</div>
                    </div>
                    <div>
                        <div className="numicon">{minutes}</div>
                        <div>Minutes</div>
                    </div>
                    <div>
                        <div className="numicon">{seconds}</div>
                        <div>Seconds</div>
                    </div>
                </div>
            );
        }
    };

    return (
        <>
            <section className="paymentstepsbg">
                <div>
                    <Container>
                        <div className="pyspsbg">
                            <div className="paybg">
                                <div className="d-flex justify-content-between align-item-center">
                                    <div className="mb-3 d-flex align-items-center gap-2">
                                        <div className="back-btn">
                                            <FontAwesomeIcon icon={faChevronLeft} />
                                        </div>

                                        <Image
                                            src="/assets/images/logo.png"
                                            width={100}
                                            height={100}
                                            alt="logo"
                                            className="lightthemeicon"
                                        />

                                        <Image
                                            src="/assets/images/logo-dark.png"
                                            width={100}
                                            height={57}
                                            alt="logo"
                                            className="darkthemeicon"
                                        />
                                    </div>

                                    <div>
                                        <small><OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={
                                            <Tooltip id="staylogged-tooltip">
                                                A contract address is a unique
                                            </Tooltip>}><FontAwesomeIcon icon={faQuestionCircle} size="lg" />
                                        </OverlayTrigger></small>

                                    </div>
                                </div>
                                <div className="paytspsbg">
                                    <div className="paymentspsbg mb-3">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 className="mb-0">
                                                    <FontAwesomeIcon icon={faCircleExclamation} /> &nbsp; You pay network fee
                                                </h6>
                                            </div>
                                            <div class="numicon m-0"><span>23:58:27</span></div>
                                        </div>
                                        <div className='paymnt-che-y mt-3'>
                                            <div className='pny-chk-y'>
                                                <h2 className="">
                                                    Pay
                                                </h2>
                                                <p class="sub-heading text-center text-decoration-line-through">12 BTC</p>
                                                <h2 className="">
                                                    1.00 USDT
                                                </h2>
                                            </div>
                                            <div>
                                                <Badge bg="success">Contract</Badge>
                                            </div>

                                        </div>
                                        <div className='pay-tsp-sbg-y'>
                                            <h6 className="sma-usdt-y">
                                                = $1.00
                                            </h6>
                                        </div>

                                        <div className="d-flex gap-2 mb-2">
                                            <Badge bg="warning">BSC (BEP-20)</Badge>
                                            <Badge bg="warning">Contract</Badge>
                                            {/* <Badge bg="success">Contract</Badge> */}

                                        </div>
                                        <p>Scan QR Code or send exact amount to specified address
                                        </p>
                                        <hr />
                                        <div className="row align-items-center">
                                            <div className="col-md-4">
                                                <Image src='assets/images/qrcode.png' alt='qrcode' width={100} height={100} className='qrimg' />
                                            </div>
                                            <div className="col-md-8">
                                                <form action="" className='siteformbg '>
                                                    <Form.Group className="form-group">
                                                        <Form.Label><b>Recipient's wallet address:</b></Form.Label>
                                                        <InputGroup>
                                                            <Form.Control type="text" id="merchantid" placeholder="74c558b6-fd53-4819-9f75-72b1aa6ba1fd" />
                                                            <div className="input-group-append">
                                                                <InputGroup.Text id="copybtn"> <FontAwesomeIcon icon={faCopy} /> </InputGroup.Text>
                                                            </div>
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <Form.Group className="form-group">
                                                        <Form.Label><b>Amount:</b></Form.Label>
                                                        <InputGroup>
                                                            <Form.Control type="text" id="merchantid" placeholder="1.00 USDT" />
                                                            <div className="input-group-append">
                                                                <InputGroup.Text id="copybtn"> <FontAwesomeIcon icon={faCopy} /> </InputGroup.Text>
                                                            </div>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </form>
                                            </div>

                                        </div>

                                        <div className="badgesn">
                                            <p> </p>
                                        </div>
                                        <Alert variant="warning " className='p-3'>
                                            <FontAwesomeIcon icon={faCircleExclamation} /> After payment, wait until you are redirected to the order conformation Page
                                        </Alert>
                                        <div className="paymnt-scuss-tick">
                                            <div className="pmt-scs-tick">
                                                <div className="pmt-scs-ticks">
                                                    <Image
                                                        src="/assets/images/paymentsucesstick.svg"
                                                        width={50}
                                                        height={50}
                                                        alt="success"
                                                        className="paymnt-scss-icon"
                                                    />
                                                    <div>
                                                        <h2 className="sub-heading mb-1">
                                                            Payment Successful
                                                        </h2>
                                                    </div>
                                                </div>

                                                <div>
                                                    <span class="badge bg-success">Safe & Secure</span>
                                                </div>
                                            </div>
                                            <p className="fnt-recd">
                                                Payment received successfully; funds are secure and verification is in progress verification is in progress
                                            </p>
                                            <div className="verification-box">
                                                <span className="dot"></span>
                                                Background verification in progress...
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="procbt mt-1">
                                    <p>Created By  <Image src="assets/images/logo.png" width={100} height={100} alt="logo" className="lightthemeicon ps-2" />
                                        <Image src="assets/images/logo-dark.png" width={100} height={57} alt="logo" className="darkthemeicon ps-2" /></p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div >
            </section >
        </>
    )
}

export default page