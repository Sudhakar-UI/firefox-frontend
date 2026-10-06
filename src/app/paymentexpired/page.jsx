"use client"
import React, { useState } from 'react'
import { Container, Image, Row, Form, Col, Button, Tooltip, OverlayTrigger } from 'react-bootstrap'
import '../../../public/assets/css/Checkout.css';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faQuestionCircle, faCircleExclamation, faCopy } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';



const page = () => {
    const [singleOption, setSingleOption] = useState(null);

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

    return (
        <>
            <section className="paymentstepsbg">
                <div>
                    <Container>
                        <div className="pyspsbg">
                            <div className="paybgs-y">
                                <div className="d-flex justify-content-between align-item-center mb-3">
                                    <div className="">
                                        <Image src="assets/images/logo.png" width={100} height={100} alt="logo" className="lightthemeicon" />
                                        <Image src="assets/images/logo-dark.png" width={100} height={100} alt="logo" className="darkthemeicon" />
                                    </div>
                                    <div>
                                        <small><OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={
                                            <Tooltip id="staylogged-tooltip">
                                                A contract address is a unique
                                            </Tooltip>}><FontAwesomeIcon className="fee-icon-y" icon={faQuestionCircle} size="lg" />
                                        </OverlayTrigger></small>
                                    </div>
                                </div>
                                <div className="paytspsbg ">
                                    <div className="paymentspsbg paymntspbg-y">
                                        <div className='d-flex justify-content-center mt-4 mb-3'>
                                            <Image src="assets/images/expireicon.svg" width={100} height={100} alt="logo" />
                                        </div>
                                        <h5 className="text-center mt-4">
                                            Invoice has been expired
                                        </h5>
                                        <p className="mt-3 text-center mb-2">
                                            Please request a new invoice.
                                        </p>
                                        <Button className='sitebtn btn-sm w-100'>Go back</Button>
                                    </div>
                                </div>

                                <div className="procbt mt-3">
                                    <p>Created By   <Image src="assets/images/logo.png" width={100} height={57} alt="logo" className="lightthemeicon ps-2" />
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