"use client"
import React, { useState } from "react"
import Userheader from '../components/Userheader'
import Userfooter from '../components/Userfooter'
import { Container, Image, Button, Accordion, Badge, Table, Modal, Form, Nav, Dropdown, NavDropdown, } from 'react-bootstrap'
import Link from "next/link"
import Leftsidemenu from '../components/Leftsidemenu';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faLocationDot, faEllipsisH, faQuestionCircle, faCircleQuestion, faEdit, faTrash, faCircleExclamation, faSortDown } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';

const Businesssettings = () => {

    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);
    const [walletOption, setWalletOption] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (wallet) => {
        setOpenDropdown((prev) => (prev === wallet ? null : wallet));
    };

    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent">
                <Container className="sitecontainer">
                    <h2 className="h2">Business Settings</h2>
                    <div className="boxtabb tabrightbox">
                        <Nav className="nav nav-tabs tabbanner tabbner border-0" role="tablist">
                            <Nav.Item className="nav-item"><Nav.Link as={Link} href="/apiswhitelist" className="active">API's whitelist</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item"><Nav.Link as={Link} href="/autowithdrawal">Auto-withdrawal</Nav.Link></Nav.Item>
                        </Nav>
                    </div>
                </Container>
            </div>
            <article className="gridparentbox">
                <Container className="sitecontainer securitypage">
                    <div className="securityinnerbox panelcontentbox mt-0">
                        <div className="faverifybox">
                            <div className="profiletablebox contentbox">
                                <div> <Image src="assets/images/apiwhite.svg" className="securityiconbox" /> </div>
                                <div>
                                    <h4>API’s whitelist</h4>
                                    <h5 className="t-gray">This is a list of IP addresses allowed to send requests to Heleket API. When the whitelist enabled, requests to API will be rejected if your API keys are from IPs not on the whitelist.</h5>
                                </div>
                                <div>
                                    <Button className="btn borderbtn btn-sm" type="button" id="whitelistlink" onClick={handleShow1}>Enable</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container className="sitecontainer securitypage">
                    <div className="securityinnerbox panelcontentbox mt-2">
                        <div className="faverifybox">
                            <div className="profiletablebox contentbox">
                                <div className="alert-icon-y">
                                    <FontAwesomeIcon icon={faCircleExclamation} />
                                </div>
                                <h4>you don't have access to this section</h4>
                                <h5 className="t-gray">you need enabled two factor to enable whitelist</h5>

                                <Link href="/transferhistory" className="btn borderbtn btn-sm mt-3" id="viewbtn">To Security Settings</Link>

                            </div>
                        </div>
                    </div>
                </Container>
                <Container className="sitecontainer securitypage mt-2">

                    <div className="securityinnerbo panelcontentbox mt-0">

                        <div className="faverifybox">
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
                        <SimpleBar className="table-responsive sitescroll adrescrol-y">
                            {/* BTC */}
                            <div className="faverifybox">
                                <div className="d-flex justify-content-between apiwhitelist-y">
                                    <div className="d-flex align-items-start">
                                        <Image
                                            src="assets/images/color/btc.svg"
                                            className="securityiconbox me-2"
                                            width={30}
                                            height={30}
                                            alt="BTC"
                                        />
                                        <div>
                                            <p>BTC (BTC)</p>
                                            <h6>bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0lh</h6>

                                            <div className="d-flex justify-content-between apiwhitlit-y">
                                                <div className="mt-4">
                                                    <p>Amount Withdrawal</p>
                                                    <h6>0.24 BTC</h6>
                                                </div>
                                                <div className="mt-4">
                                                    <p>Frequency of withdrawal</p>
                                                    <h6>1 hour</h6>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-between apiwhlit-y">
                                                <div className="mt-3">
                                                    <p>Minimum amount of the wallet</p>
                                                    <h6>1.00 BTC</h6>
                                                </div>
                                                <div className="mt-3">
                                                    <p>Notification on email</p>
                                                    <h6>No</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tabrightbox">
                                        <FontAwesomeIcon
                                            icon={faEllipsisH}
                                            className="wallet-toggle-icon"
                                            onClick={() => toggleDropdown("btc")}
                                        />

                                        {openDropdown === "btc" && (
                                            <NavDropdown
                                                show
                                                id="wallet-dropdown-btc"
                                            >
                                                <NavDropdown.Item href="#">
                                                    <FontAwesomeIcon icon={faEdit} className="me-2" /> Change
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="#">
                                                    <FontAwesomeIcon icon={faTrash} className="me-2" /> Delete
                                                </NavDropdown.Item>

                                            </NavDropdown>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="faverifybox">
                                <div className="d-flex justify-content-between apiwhitelist-y">
                                    <div className="d-flex align-items-start">
                                        <Image
                                            src="assets/images/color/eth.svg"
                                            className="securityiconbox me-2"
                                            width={30}
                                            height={30}
                                            alt="ETH"
                                        />
                                        <div>
                                            <p>ETH (ETH)</p>
                                            <h6>0x165cd37b4c644c2921454429E7F9358D18A45e14</h6>

                                            <div className="d-flex justify-content-between apiwhitlit-y">
                                                <div className="mt-4">
                                                    <p>Amount Withdrawal</p>
                                                    <h6>1 ETH</h6>
                                                </div>
                                                <div className="mt-4">
                                                    <p>Frequency of withdrawal</p>
                                                    <h6>4 Hours</h6>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-between apiwhlit-y">
                                                <div className="mt-3">
                                                    <p>Minimum amount of the wallet</p>
                                                    <h6>2.00 ETH</h6>
                                                </div>
                                                <div className="mt-3">
                                                    <p>Notification on email</p>
                                                    <h6>No</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tabrightbox">
                                        <FontAwesomeIcon
                                            icon={faEllipsisH}
                                            className="wallet-toggle-icon"
                                            onClick={() => toggleDropdown("eth")}
                                        />

                                        {openDropdown === "eth" && (
                                            <NavDropdown
                                                show
                                                id="wallet-dropdown-eth"
                                            >
                                                <NavDropdown.Item href="#">
                                                    <FontAwesomeIcon icon={faEdit} className="me-2" /> Change
                                                </NavDropdown.Item>

                                                <NavDropdown.Item href="#">
                                                    <FontAwesomeIcon icon={faTrash} className="me-2" /> Delete
                                                </NavDropdown.Item>

                                            </NavDropdown>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </SimpleBar>
                    </div>
                </Container>
            </article>
            <Userfooter />


            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal authtblemdlbox' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add IP address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group">
                            <Form.Label>IP address</Form.Label>
                            <Form.Control name="code" placeholder="Add IP address" id="otpverify" />
                        </Form.Group>
                        <div className="">
                            <Button className="sitebtn w-100" id="otpsubmit">Continue</Button>
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