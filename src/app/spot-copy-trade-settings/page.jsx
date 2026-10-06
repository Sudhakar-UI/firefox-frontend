"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';
import { Container, Image, Row, Col, Nav, Table, Form, Tab, Badge, Accordion, InputGroup, Button } from 'react-bootstrap';
import 'simplebar-react/dist/simplebar.min.css';


const SpotTradeCopy3 = () => {
    useEffect(() => {
        document.body.classList.add('spotcopytrade');
        return () => {
            document.body.classList.remove("spotcopytrade");
        };
    });

    return (
        <div className='cpytrade'>
            <Homeheader />

            <section className="innerpagecontent copytradetopsection savingbannersec ieobannerbg spt-cpy-trd-y-y">
                <Container>
                    <h2 className="heading-title mb-0 pb-0">Spot Copy Settings</h2>
                </Container>
            </section>


            <section className="copytradecntsection">
                <Container>
                    <div className="centerbox mx-auto successdtabox fixamtborder">
                        <div className="text-center paymntspbg-y">
                            <Image src="assets/images/payment-confirmation.svg" width={100} height={100} alt="logo" className="" />
                            {/* <Image src="assets/images/payment-confirmation.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" /> */}
                            <h5 className="mt-3">Copy Trading Successful</h5>
                            <p>You have successfully copied Albert Flores. You can go to Copy Trading Overview to view the details or return to the homepage to continue browsing the portfolios.</p>
                            <div className="viewlead-y">
                                <Link href="/spot-copy-trade-4" id='gocpytrade' className="btn sitebtn">Go to Copy Trade Overview</Link>
                                <Link href="/spot-copy-trade-5" id='viewlead' className="btn borderbtn">View Lead Trader’s Details</Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <Homefooter />
        </div>
    )
}

export default SpotTradeCopy3;