"use client"
import React, { useState } from "react"
import Userheader from '../components/Userheader'
import Userfooter from '../components/Userfooter'
import { Container, Image, Badge, Modal, Button, Form, Table, InputGroup, Alert, FormCheck } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faInfoCircle, faCopy, faAngleDown, faTrash } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import Leftsidemenu from '../components/Leftsidemenu';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../components/ResponsiveTable';
import Select from 'react-select';

const Security = () => {
    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);

    const [showModal2, setShowModal2] = useState(false);
    const handleClose2 = () => setShowModal2(false);
    const handleShow2 = () => setShowModal2(true);

    const [showModal3, setShowModal3] = useState(false);
    const handleClose3 = () => {
        setShowModal3(false);
        setShowModal6(true)
    }
    const handleShow3 = () => setShowModal3(true);

    const [showModal4, setShowModal4] = useState(false);
    const handleClose4 = () => setShowModal4(false);
    const handleShow4 = () => setShowModal4(true);

    const [showModal5, setShowModal5] = useState(false);
    const handleClose5 = () => setShowModal5(false);
    const handleShow5 = () => setShowModal5(true);

    const [showModal6, setShowModal6] = useState(false);
    const handleClose6 = () => setShowModal6(false);
    const handleShow6 = () => setShowModal6(true);

    const [showModal7, setShowModal7] = useState(false);
    const handleClose7 = () => setShowModal7(false);
    const handleShow7 = () => setShowModal7(true);

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

    // Custom option label with image
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
                    <h2 className="h2">Security Settings</h2>
                </Container>
            </div>
            <article className="gridparentbox">
                <Container className="sitecontainer">
                    <div className="securitypage">
                        <div className="">
                            <div className="securityinnerbox panelcontentbox mt-0">
                                <h2 className="heading-box">General</h2>
                                <div className="faverifybox mt-4">
                                    <div className="profiletablebox contentbox">
                                        <div> <Image src="assets/images/email.svg" className="securityiconbox" /> </div>
                                        <div>
                                            <h4>Email</h4>
                                            <h5 className="t-gray">pi***h@g*.com</h5>
                                        </div>
                                        <div>
                                            <Button className="btn borderbtn btn-sm" type="button" id="emailbtn" onClick={handleShow1}>Change</Button>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="profiletablebox contentbox">
                                        <div> <Image src="assets/images/password.svg" className="securityiconbox" /> </div>
                                        <div>
                                            <h4>Password</h4>
                                        </div>
                                        <div>
                                            <Button className="btn borderbtn btn-sm" type="button" id="changepassword_btn" onClick={handleShow2}>Change</Button>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="profiletablebox contentbox">
                                        <div> <Image src="assets/images/pin.svg" className="securityiconbox" /> </div>
                                        <div>
                                            <h4>PIN code</h4>
                                        </div>
                                        <div>
                                            <div className="d-flex">
                                                <Button className="btn borderbtn btn-sm me-1" id="pincodebtn" type="button" onClick={handleShow3}>Enable</Button>
                                                <Button className="btn borderbtn btn-sm" id="pincodebtn" type="button">Disable</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="profiletablebox contentbox">
                                        <div> <Image src="assets/images/auth.svg" className="securityiconbox" /> </div>
                                        <div>
                                            <h4>Two-Factor Authentication</h4>
                                            <h5 className="t-gray">You cannot disable 2FA due to security reasons If you have any questions please contact support</h5>
                                        </div>
                                        <div>
                                            <Button className="btn borderbtn btn-sm" id="authbtn" type="button" onClick={handleShow4}>Enable</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 flexbox">
                            <div className="securityinnerbox panelcontentbox mt-0">
                                <h2 className="heading-box mb-4">Address Whitelist</h2>
                                <Alert variant="info" className="securityalert">
                                    <FontAwesomeIcon icon={faInfoCircle} className="me-2" />When whitelist enabled withdrawals from Personal wallet to addresses that are not included in the whitelist will be rejected
                                </Alert>
                                <div className="faverifybox mt-4">
                                    <div className="profiletablebox contentbox">
                                        <div> <Image src="assets/images/address.svg" className="securityiconbox" /> </div>
                                        <div>
                                            <h4>Address whitelist</h4>
                                            <h5 className="t-gray">This is a list of allowed addresses which you can use to withdraw funds from Personal wallet</h5>
                                        </div>
                                        <div>
                                            <Button className="btn borderbtn btn-sm" id="whitelistbtn" type="button" onClick={handleShow5}>Enable</Button>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="mt-2 text-center">
                                        <Button className="btn sitebtn btn-sm" id="whitelistbtn" type="button" onClick={handleShow7}>Add Address</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="securityinnerbox panelcontentbox mt-0 adrresssitetable">
                                <h2 className="heading-box mb-1">Addresses</h2>
                                <div className="">
                                    <div className="">
                                        <SimpleBar className="table-responsive sitescroll">
                                            <Table className="sitetable historytable" id="table">
                                                <tbody>
                                                    {/* <tr className="nodata">
												<td className="text-center">
													<Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />No record found
												</td>
											</tr>  */}
                                                    <tr>
                                                        <td><Image src="assets/images/color/usdt.svg" width={50} height={50} alt="coin" className="coinlisticon" />USDT (ETH)</td>
                                                        <td>FYTUY5245537FDAGYIUJHJ546</td>
                                                        <td className="text-end"><FontAwesomeIcon icon={faTrash} /></td>
                                                    </tr>
                                                    <tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data1" data-bs-parent="#accordion" aria-expanded="false">
                                                        <td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />BTC (BTC)</td>
                                                        <td colspan={2} className="angleiconcell text-end"><FontAwesomeIcon icon={faAngleDown} /></td>
                                                    </tr>
                                                    <tr className="accordeon-content">
                                                        <td colspan={3}>
                                                            <div id="data1" className="collapse">
                                                                <Table className="sitetable mb-0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>FYTUY5245537FDAGYIUJHJ546</td>
                                                                            <td className="text-end"><FontAwesomeIcon icon={faTrash} /></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>FYTUY5245537FDAGYIUJHJ546</td>
                                                                            <td className="text-end"><FontAwesomeIcon icon={faTrash} /></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </SimpleBar>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3">
                            <h2 className="heading-box border-0">Security Confirmation</h2>
                            <div className="flexbox">
                                <div className="panelcontentbox">
                                    <div className="bordertablebox">
                                        <SimpleBar className="table-responsive">
                                            <Table className="sitetable table-responsive-stack" id="table1">
                                                <thead>
                                                    <tr>
                                                        <th>Account Security</th>
                                                        <th>Email</th>
                                                        <th>Google2Fa</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Authorization </td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Change password </td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Reset password </td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Add, change or disable PIN code </td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Change security settings </td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Delete account </td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </SimpleBar>
                                        <ResponsiveTable tableId="table1" />
                                    </div>
                                </div>
                                <div className="panelcontentbox">
                                    <div className="bordertablebox">
                                        <SimpleBar className="table-responsive">
                                            <Table className="sitetable table-responsive-stack" id="table2">
                                                <thead>
                                                    <tr>
                                                        <th>General Security</th>
                                                        <th>Email</th>
                                                        <th>Google2Fa</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Withdraw from Personal </td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Transfer from Personal to Business </td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Delete merchant </td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Refund invoice </td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Auto-Withdrawal </td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Turn on/off whitelist management </td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Add addresses to Addresses’s whitelist </td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Add IP to API’s whitelist </td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Payment API key </td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Payout API key </td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                        <td><FormCheck type="checkbox" id="radio1" label="" /></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </SimpleBar>
                                        <ResponsiveTable tableId="table2" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="mt-3">

                            <h2 className="heading-box border-0">Secure wallets</h2>
                            <div className="panelcontentbox">
                                <Alert variant="info" className="securityalert">
                                    <FontAwesomeIcon icon={faInfoCircle} className="me-2" />This is a list of your secure wallets that allowed to send without 2FA
                                </Alert>
                                <SimpleBar className="table-responsive">
                                    <Table className="sitetable" id="table3">
                                        <tbody>
                                            <tr className="nodata">
                                                <td colSpan={5}>
                                                    <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />No secure wallets
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </SimpleBar>
                            </div>
                        </div>
                    </div>

                </Container>
            </article>
            <Userfooter />

            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal authtblemdlbox' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Change email</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Alert variant="info" className="securityalert">
                            <FontAwesomeIcon icon={faInfoCircle} className="me-2" />After changing the email, withdrawals on the account will be temporarily blocked
                        </Alert>
                        <Form.Group className="form-group">
                            <Form.Label>Enter email</Form.Label>
                            <Form.Control name="code" id="email_address" />
                        </Form.Group>
                        <div className="text-center">
                            <Button type="button" className="borderbtn btn-sm w-100" id="changeemail_submit">Change Mail</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={showModal2} onHide={handleClose2} className='modalbgt authmodal authtblemdlbox' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Change password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Alert variant="info" className="securityalert">
                            <FontAwesomeIcon icon={faInfoCircle} className="me-2" />After changing the password, withdrawals on the account will be temporarily blocked
                        </Alert>
                        <Form.Group className="form-group">
                            <Form.Label>Current Password</Form.Label>
                            <InputGroup>
                                <Form.Control type="password" id="current_password" />
                                <div className="input-group-append">
                                    <InputGroup.Text> <FontAwesomeIcon icon={faEye} id="eye1" /> </InputGroup.Text>
                                </div>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>New Password</Form.Label>
                            <InputGroup>
                                <Form.Control type="password" id="newpassword" />
                                <div className="input-group-append">
                                    <InputGroup.Text> <FontAwesomeIcon icon={faEye} id="eye1" /> </InputGroup.Text>
                                </div>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>Confirm Password</Form.Label>
                            <InputGroup>
                                <Form.Control type="password" id="confirmpassword" />
                                <div className="input-group-append">
                                    <InputGroup.Text> <FontAwesomeIcon icon={faEyeSlash} id="eye3" /> </InputGroup.Text>
                                </div>
                            </InputGroup>
                        </Form.Group>
                        <div className="text-center">
                            <Button type="button" id="submit" className="sitebtn w-100">Submit</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>


            <Modal show={showModal3} onHide={handleClose3} className='modalbgt authmodal authtblemdlbox' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add PIN code</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group">
                            <Form.Label>Enter your new PIN code</Form.Label>
                            <Form.Control name="code" id="pin_code" />
                        </Form.Group>
                        <div className="text-center">
                            <Button type="button" className="borderbtn btn-sm w-100" id="pincode_change" onClick={handleClose3}>Submit</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={showModal4} onHide={handleClose4} className='modalbgt authmodal authtblemdlbox' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Two-Factor Authentication</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group text-center">
                            <p className="mb-0">Scan this QR with Authenticator App</p>
                            <div className="qrimg">
                                <Image src="assets/images/qrcode.png" alt="img" className="g-qr" />
                            </div>
                        </Form.Group>
                        <Form.Group className="form-group">
                            <InputGroup>
                                <Form.Control type="text" id="key" placeholder="HX2ACJBOY2BC5Z2K" />
                                <div className="input-group-append">
                                    <InputGroup.Text id="copy"> <FontAwesomeIcon icon={faCopy} /> </InputGroup.Text>
                                </div>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>Enter Authenticator app code to continue</Form.Label>
                            <Form.Control name="code" placeholder="" id="otpverify" />
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>Enter Email code</Form.Label>
                            <Form.Control name="code" placeholder="" id="emailotpverify" />
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Link href="#" className="alink">Resend code</Link>
                            <p>No code yet? Check your spam folder.</p>
                        </Form.Group>
                        <div className="">
                            <Button className="sitebtn w-100" id="otpsubmit">Confirm</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={showModal5} onHide={handleClose5} className='modalbgt authmodal authtblemdlbox' aria-labelledby="contained-modal-title-vcenter" centered>
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
            </Modal>

            <Modal show={showModal6} onHide={handleClose6} className='modalbgt authmodal authtblemdlbox' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Enable PIN code</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group">
                            <Form.Label>Email Code</Form.Label>
                            <Form.Control name="code" placeholder="Enter email code" id="pincodeotp" />
                            <small>Request code in 58 seconds</small>
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Link href="#" className="alink">Resend code</Link>
                            <p>No code yet? Check your spam folder.</p>
                        </Form.Group>
                        <div className="">
                            <Button className="sitebtn w-100" id="pinconfirmbtn">Confirm</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>


            <Modal show={showModal7} onHide={handleClose7} className='modalbgt authmodal authtblemdlbox' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group">
                            <Form.Label>Wallet</Form.Label>
                            <Select options={options} id='currency' placeholder="Select an option" styles={customStyles} value={singleOption} onChange={handleSingleChange} getOptionLabel={customOptionLabel} />
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>Select Network</Form.Label>
                            <Form.Select className="form-control" id='network'>
                                <option>BTC</option>
                            </Form.Select>
                            <small>Available network for BTC wallet</small>
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>Add Address</Form.Label>
                            <Form.Control placeholder="" id='addaddress' />
                        </Form.Group>
                        <div className="">
                            <Button className="sitebtn w-100" id="address_confirmbtn">Confirm</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

        </div>

    )
}

export default Security