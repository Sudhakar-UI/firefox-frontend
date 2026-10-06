"use client"
import React, { useState } from "react"
import Userheader from '../components/Userheader'
import Userfooter from '../components/Userfooter'
import { Container, Image, Button, Accordion, Badge, Table, Modal, Form, Nav, OverlayTrigger, Tooltip, FormCheck } from 'react-bootstrap'
import Link from "next/link"
import Leftsidemenu from '../components/Leftsidemenu';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faLocationDot, faTrash, faQuestionCircle, faInfoCircle, faCopy } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';


const Businesssettings = () => {

    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);
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
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent">
                <Container className="sitecontainer">
                    <h2 className="h2">Business Settings</h2>
                    <div className="boxtabb tabrightbox">
                        <Nav className="nav nav-tabs tabbanner  tabbner  border-0" role="tablist">
                            <Nav.Item className="nav-item"><Nav.Link as={Link} href="/apiswhitelist">API's whitelist</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item"><Nav.Link as={Link} href="/autowithdrawal" className="active">Auto-withdrawal</Nav.Link></Nav.Item>
                        </Nav>
                    </div>
                </Container>
            </div>
            <article className="gridparentbox">
                <Container className="sitecontainer securitypage">
                    <div className="securityinnerbox panelcontentbox mt-0">
                        <div className="faverifybox">
                            <div className="profiletablebox contentbox">
                                <div> <Image src="assets/images/auto.svg" className="securityiconbox" /> </div>
                                <div>
                                    <h4>Auto-withdrawal</h4>
                                    <h5 className="t-gray">All money that has been added to your business wallet will be automatically withdrawn in the manner of your choice</h5>
                                </div>
                                <div>
                                    <Button className="btn borderbtn btn-sm" type="button" id="autowithdrawlink" onClick={handleShow1}>Enable</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container className="sitecontainer securitypage mt-2">
                    <div className="securityinnerbox panelcontentbox mt-0">
                        <div className="faverifybox pb-3">
                            <div className="d-flex justify-content-between addadres">
                                <h6 className="mb-0">Addresses</h6>
                                <div className="tabrightbox">
                                    <h6
                                        onClick={handleShow1}
                                        className="mb-0"
                                    >
                                        <FontAwesomeIcon icon={faPlus} className="me-2" /> Add Addresses
                                    </h6>
                                </div>
                            </div>

                        </div>
                        <SimpleBar className="table-responsive sitescroll addressscroll-y h-100">
                            <div className="faverifybox">
                                <div className="d-flex justify-content-between apiwhitelist-y ">
                                    <span>
                                        <FontAwesomeIcon icon={faLocationDot} className="me-2" /> 103.113.190.46
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </span>
                                </div>
                            </div>
                            <div className="faverifybox">
                                <div className="d-flex justify-content-between apiwhitelist-y ">
                                    <span>
                                        <FontAwesomeIcon icon={faLocationDot} className="me-2" /> 103.113.190.46
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </span>
                                </div>
                            </div>
                            <div className="faverifybox">
                                <div className="d-flex justify-content-between apiwhitelist-y ">
                                    <span>
                                        <FontAwesomeIcon icon={faLocationDot} className="me-2" /> 103.113.190.46
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </span>
                                </div>
                            </div>
                            <div className="faverifybox">
                                <div className="d-flex justify-content-between apiwhitelist-y ">
                                    <span>
                                        <FontAwesomeIcon icon={faLocationDot} className="me-2" /> 103.113.190.46
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </span>
                                </div>
                            </div>
                            <div className="faverifybox">
                                <div className="d-flex justify-content-between apiwhitelist-y ">
                                    <span>
                                        <FontAwesomeIcon icon={faLocationDot} className="me-2" /> 103.113.190.46
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </span>
                                </div>
                            </div>

                        </SimpleBar>
                    </div>

                </Container>
            </article>
            <Userfooter />


            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal authtblemdlbox' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group">
                            <Form.Label>Coin</Form.Label>
                            <Select options={options} id='currency' placeholder="Select" styles={customStyles} value={singleOption}
                                onChange={handleSingleChange} getOptionLabel={customOptionLabel} />
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>Network</Form.Label>
                            <Form.Select className="form-control" id='network'>
                                <option>select coin</option>
                                <option>BTC</option>
                            </Form.Select>
                            <Form.Select className="form-control mt-3" id='network'>
                                <option>select Network</option>
                                <option>BTC</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>Recipient’s  Address</Form.Label>
                            <Form.Control placeholder="Enter Address" id='coinaddress' />
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>Amount to auto-withdrawal</Form.Label>
                            <Form.Control placeholder="1USDT - 1000000 USDT" id='coinaddress' />
                        </Form.Group>
                        <div className="mt-2">
                            <FormCheck type="radio" id="terms-agreement" label={<>Always send the maximum balance{' '}
                            </>} />
                        </div>
                        <Form.Group className="form-group">
                            <Form.Label>Frequency of withdrawal</Form.Label>
                            <div className="d-flex justify-content-between freqbtn-y gap-2">
                                <span className="active">1 hour</span>
                                <span className="">4 hour</span>
                                <span className="">24 hour</span>
                            </div> 
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>Minimum amount on the wallet <FontAwesomeIcon icon={faQuestionCircle} className="ms-1" /></Form.Label>
                            <Form.Control placeholder="Minimum amount" id='coinaddress' />
                        </Form.Group>
                        <div className="mt-2">
                            <FormCheck type="radio" id="terms-agreement" label={<>Send Notifications to the email when withdrawing funds{' '}
                            </>} />
                        </div>

                        <div className="">
                            <Button className="sitebtn w-100" id="otpsubmit">Confirm</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal authtblemdlbox' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group">
                            <Form.Label>Two-Factor Authentication</Form.Label>
                            <Form.Control name="code" placeholder="Enter 2FA code" id="otpverify" />
                        </Form.Group>
                        <div className="">
                            <Button className="sitebtn w-100" id="otpsubmit">Confirm</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal> */}


        </div>
    )
}

export default Businesssettings