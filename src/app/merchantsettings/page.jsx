
"use client"
import React, { useState } from 'react'
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import Link from 'next/link';
import { Container, Form, Image, Table, InputGroup, Button, Badge, Row, Col, Nav, Alert, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode, faInfoCircle, faCopy, faIdBadge } from '@fortawesome/free-solid-svg-icons';
import Leftsidemenu from '../components/Leftsidemenu';
import Chart from './Chart';


const Merchantsettings = () => {

    const [showModal1, setShowModal1] = useState(false);
    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);

    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent">
                <Container className="sitecontainer">
                    <h2 className="h2">Merchant Settings</h2>
                    <div className="tabrightbox">
                        <Link href="/merchant" className="btn sitebtn btn-sm" id="backbtn">Back</Link>
                    </div>
                </Container>
            </div>
            <article className="gridparentbox">
                <Container className="sitecontainer">
                    <div className="flexbox mercsettingpage">
                        <div className="panelcontentbox">
                            <h2 className="heading-box mb-3">API Integration</h2>
                            <p>Leave a request for Firefox.VIP integration on your website or Telegram</p>
                            <p className='mb-1'>Leave a request for Firefox.VIP integration on your website or Telegram</p>
                            <div className='lightgraybg'>
                                <h6>Project name</h6>
                                <p>Cheapest smm panel</p>
                            </div>
                            <div className='lightgraybg mt-2'>
                                <h6>Project URL</h6>
                                <p>https://Cheapestsmmpanel.com/</p>
                            </div>
                            <div className='lightgraybg mt-2'>
                                <h6>Merchant id</h6>
                                <span> <p>B89ef252-1bo9-4ec2-b91e-268d1de40f13 &nbsp;
                                    <FontAwesomeIcon icon={faCopy} /></p> </span>
                            </div>
                            <div className='d-flex align-items-center justify-content-between gap-3 mt-2 lightgraybg'>
                                <div>
                                    <h6>Payment API Key</h6>
                                    <p className="mb-0">
                                        TBok**********l1iW &nbsp;
                                        <FontAwesomeIcon icon={faCopy} />
                                    </p>
                                </div>
                                <Badge bg="warning">Regenerate</Badge>
                            </div>
                            <div className='d-flex align-items-center justify-content-between gap-3 mt-2 lightgraybg'>
                                <div>
                                    <h6>Payment API Key</h6>
                                    <p className="mb-0">
                                        ITKg**********Npht &nbsp;
                                    </p>
                                </div>
                                <Badge bg="warning">Regenerate</Badge>
                            </div>
                        </div>
                        <div className="panelcontentbox merchantpymrntflex">
                            <h2 className="heading-box mb-3">Payment Accuracy</h2>
                            <div className="d-flex align-items-center">
                                <div>
                                    <Chart />
                                </div>
                                <div className="">
                                    <p className="mb-2">Manually set payment accuracy to suit your acquiring needs and never worry about payment status</p>
                                    <Button className="borderbtn" id="paymentmanagebtn" onClick={handleShowModal1}>Manage</Button>
                                </div>
                            </div>
                            <hr className="mangelistbox-line" />
                            <div className="mangelistbox">
                                <p className="text-center mb-2">Enable or disable currencies. Add a discount or increase the commission</p>
                                <ul>
                                    <li className='lightgraybg'>
                                        <h5>Enabled coins</h5>
                                        <h2>32</h2>
                                    </li>
                                    <li className='lightgraybg'>
                                        <h5>With discount</h5>
                                        <h2>0</h2>
                                    </li>
                                    <li className='lightgraybg'>
                                        <h5>With commission</h5>
                                        <h2>0</h2>
                                    </li>
                                </ul>
                                <div className='text-center mt-3'>
                                    <Link href="/merchantcoinview" id="coinview" className="btn borderbtn">Manage</Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="panelcontentbox merchantpymrntflex">
                        <h2 className="heading-box mb-3">Auto-Convert</h2>
                        <p>Once the invoice has been paid, we will automatically convert the funds received into the coin of your choice.</p>
                        <div className='tabrightbox merchttabright'>
                            <Link href="/merchantconvert" id="convert" className="btn borderbtn">Manage</Link>
                        </div>
                    </div>

                </Container>
            </article>
            <Userfooter />
            <Modal className="modalbgt" show={showModal1} onHide={handleCloseModal1}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Payment Accuracy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>The invoice is marked as Paid even if the client has not paid 0.00% of the amount.</p>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group">
                            <Form.Control type="text" id="amount" placeholder='0.00' />
                            <small>Anything below this value will be marked as a Partially paid</small>
                        </Form.Group>
                        <div className="text-center">
                            <Button className='sitebtn w-100' id="submit">Save</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}
export default Merchantsettings