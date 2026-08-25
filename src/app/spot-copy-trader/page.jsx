"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';
import { Container, Image, Row, Col, Nav, Table, Form, Tab, Badge, Accordion, InputGroup, Button, FormControl, FormGroup } from 'react-bootstrap';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faExchange } from '@fortawesome/free-solid-svg-icons';
import UploadForm from './UploadForm';
import '../../../public/assets/css/user.css';


const SpotTradeCopy6 = () => {
    useEffect(() => {
        document.body.classList.add('spotcopytradesix');
        return () => {
            document.body.classList.remove("spotcopytradesix");
        };
    });


    return (
        <>
            <div className='cpytrade'>
                <Homeheader />

                <section className="copytradetopsection savingbannersec ieobannerbg">
                    <Container>
                        <Row className="align-items-center spt-cpy-tre-y">
                            <Col lg={7} md={7}>
                                <h2 className="heading-title">Become a Lead Trader</h2>
                                <p>Activate your lead trader portfolio and earn a 10% profit share from the trades of those you inspire.</p>
                            </Col>
                            <Col lg={5} md={5}>
                                {/* <div className="text-center portfolioborder">
                                    
                                </div> */}
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="copytradecntsection">
                    <Container className="leadprofilepage">
                        <div className="panelcontentbox profiletabbg feacpytrd-four">
                            <h2 class="heading-box mb-3">Start your lead trading</h2>
                            <div className="table-content">
                                <div className="profilebox text-center">
                                    <div className="profilimg">
                                        <UploadForm />
                                    </div>
                                    <div className="profiledatainfo mt-3">
                                        <h3 className="h5">John</h3>
                                        <small className="t-gray">(Upload your image like jpg,jpeg,png (MAX: 1MB))</small>

                                    </div>
                                </div>
                                <div className="">
                                    <Form className="siteformbg mt-3">
                                        <Row>
                                            <Col xl={6} lg={6} md={6}>
                                                <Form.Group className="form-group">
                                                    <Form.Label>Nickname</Form.Label>
                                                    <Form.Control name="code" id="nickname" />
                                                </Form.Group>
                                            </Col>
                                            <Col xl={6} lg={6} md={6}>
                                                <Form.Group className="form-group">
                                                    <div className='d-flex justify-content-between'>
                                                               <div>
                                                        <Form.Label>Copy amount</Form.Label>
                                                    </div>


                                                    <div className="">
                                                        <p>
                                                            Available in Spot 3,000 USDT{" "}
                                                            <FontAwesomeIcon icon={faExchange} />
                                                        </p>
                                                    </div>

                                                    </div>
                                             

                                                    <div className="input-group">
                                                        <FormControl
                                                            id="cpyamnt"
                                                            type="text"
                                                            placeholder="10 - 50,000"
                                                        />
                                                        <span className="input-group-text">
                                                            <span className="ms-2">MAX</span>
                                                        </span>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={12} md={12}>
                                                <Form.Group className="form-group">
                                                    <Form.Label>Description</Form.Label>
                                                    <Form.Control
                                                        id="desc"
                                                        as="textarea"
                                                        rows={5}
                                                        placeholder="Enter your profile description here..."
                                                    />
                                                </Form.Group>
                                                <Form.Group className="form-group">
                                                    <h4 className='sub-heading'>Please note the following:</h4>
                                                    <p className="mb-0">1. Once the portfolio is created, assets will be automatically transferred from your Spot wallet to your Lead trading account.</p>
                                                    <p className="mb-0">2. Assets can be transferred at any time when the portfolio is active. Once the portfolio has ended, the remaining assets will automatically return to your Spot wallet.</p>
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
                                            </Col>
                                            <Form.Group className="form-group mb-0">
                                                <Button type="button" id='confbtn' className="btn sitebtn" >Confirm</Button>
                                            </Form.Group>
                                        </Row>
                                    </Form>
                                </div></div>
                        </div>
                    </Container>
                </section>
                <Homefooter />
            </div>
        </>
    )
}

export default SpotTradeCopy6;