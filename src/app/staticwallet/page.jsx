"use client"
import React, { useState, useEffect } from 'react'
import Countdown from 'react-countdown';
import '../../../public/assets/css/Checkout.css';
import { Container, Image, Row, Form, Col, Badge, Tooltip, OverlayTrigger, Alert, InputGroup, Button } from 'react-bootstrap'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faQuestionCircle, faCircleExclamation, faCopy, faGear } from '@fortawesome/free-solid-svg-icons';
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
                                    <div className="mb-3">
                                        <Image src="assets/images/logo.png" width={100} height={100} alt="logo" className="lightthemeicon ps-2" />
                                        <Image src="assets/images/logo-dark.png" width={100} height={57} alt="logo" className="darkthemeicon ps-2" />
                                    </div>
                                    <div>
                                        <small><OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={
                                            <Tooltip id="staylogged-tooltip">
                                                A contract address is a unique
                                            </Tooltip>}><FontAwesomeIcon icon={faQuestionCircle} size="lg me-3" />

                                        </OverlayTrigger></small>
                                        <FontAwesomeIcon icon={faGear} size="lg" />
                                    </div>
                                </div>
                                <div className="paytspsbg">
                                    <div className="paymentspsbg mb-3">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="stc-wat-y">
                                                <h1>
                                                    Pay <br />
                                                    to a static wallet
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="d-flex gap-2 mb-2 mt-3">
                                            <Badge bg="warning">Tron</Badge>
                                        </div>
                                        <Alert variant="warning " className='p-3'>
                                            <FontAwesomeIcon icon={faCircleExclamation} /> You can pay this bill as many times as you want, for different amounts.
                                        </Alert>
                                        <p>Scan QR code or send exact amount to specified address
                                        </p>
                                        <div className='stc-wat-y-chek'>
                                            <Image src="assets/images/ffloader.gif" width={100} height={100} alt="logo" className="ffloader-y" /> <p>Checking blockchain transaction</p>
                                        </div>
                                        <div className="row align-items-center mb-4">
                                            <div className="col-md-4">
                                                <Image src='assets/images/qrcode.png' alt='qrcode' width={100} height={100} className='qrimg' />
                                            </div>
                                            <div className="col-md-8">
                                                <form action="" className='siteformbg '>
                                                    <Form.Group className="form-group">
                                                        <Form.Label><b>Recipient's wallet address:</b></Form.Label>
                                                        <InputGroup>
                                                            <Form.Control type="text" id="merchantid" placeholder="TXf8aUAZqRUwT6M2zk75kVgtfRK7yRaDby..." />
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
                                            <FontAwesomeIcon icon={faCircleExclamation} /> After payment, wait until you are redirected to the order confirmation page
                                        </Alert>
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