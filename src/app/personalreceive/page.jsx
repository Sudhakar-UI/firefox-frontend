
"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import { Container, Form, Image, Table, InputGroup, Button, Badge, Row, Col, Nav, Alert, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode, faInfoCircle, } from '@fortawesome/free-solid-svg-icons';
import Leftsidemenu from '../components/Leftsidemenu';
import Select from 'react-select';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../components/ResponsiveTable';
import {
  faMoneyBillWave,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWallet,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

const Personalreceive = () => {

  const [showModal1, setShowModal1] = useState(false);
  const handleShowModal1 = () => setShowModal1(true);
  const handleCloseModal1 = () => setShowModal1(false);

  const [showModal2, setShowModal2] = useState(false);
  const handleShowModal2 = () => setShowModal2(true);
  const handleCloseModal2 = () => setShowModal2(false);

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
          <h2 className="h2">Personal</h2>
          <div className="boxtabb tabrightbox">
            <Nav className="nav nav-tabs tabbanner border-0" role="tablist">
              <Nav.Item className="nav-item"><Nav.Link href="/personalwallet">Overview</Nav.Link></Nav.Item>
              <Nav.Item className="nav-item"><Nav.Link href="/personalsend">Send</Nav.Link></Nav.Item>
              <Nav.Item className="nav-item"><Nav.Link href="/personalreceive" className="active">Receive</Nav.Link></Nav.Item>
              <Nav.Item className="nav-item"><Nav.Link href="/personalconvert">Convert</Nav.Link></Nav.Item>
              <Nav.Item className="nav-item"><Nav.Link href="/personaltransfer">Transfer</Nav.Link></Nav.Item>
            </Nav>
          </div>
        </Container>
      </div>
      <article className="gridparentbox">
        <Container className="sitecontainer walletpagebg depositbg">
          <div className="panelcontentbox">
            <Form className="siteformbg">
              <Row>
                <Col lg={5} md={6}>
                  {/* <Alert variant="info" className="securityalert">
                    <FontAwesomeIcon icon={faInfoCircle} className="me-2" />We don't have a minimum amount requirement for receiving
                  </Alert> */}
                  {/* <Alert  className=" securityalert securityalert-withfee">
                    <FontAwesomeIcon icon={faMoneyBillWave} className="me-2" />With Deposit Fee
                  </Alert>
                  <Alert  className=" securityalert securityalert-withoutfee">
                    <FontAwesomeIcon icon={faInfoCircle} className="me-2" />Without Deposit Fee
                  </Alert> */}
                  <div className="deposit-wrapper">

                    <Alert className="deposit-alert success-alert">
                      <div className=" warning-alert-flex">

                        <div className="alert-icon">
                          <FontAwesomeIcon icon={faWallet} />
                        </div>

                        <div >
                          <h6 className="mb-1">With Deposit Fee</h6>
                          <p className="mb-0">
                            A deposit fee will be applied to this transaction.
                          </p>
                        </div>

                        <div className="dot-pattern"></div>

                      </div>
                    </Alert>

                    <Alert className="deposit-alert warning-alert mt-3">
                      <div className="warning-alert-flex">

                        <div className="alert-icon">
                          <FontAwesomeIcon icon={faCircleInfo} />
                        </div>

                        <div >
                          <h6 className="mb-1">Without Deposit Fee</h6>
                          <p className="mb-0">
                            No deposit fee will be applied to this transaction.
                          </p>
                        </div>

                        <div className="dot-pattern"></div>

                      </div>
                    </Alert>

                  </div>
                  <Form.Group className="form-group">
                    <Form.Label>Select Wallet</Form.Label>
                    <Select options={options} id='currency' placeholder="Select an option" styles={customStyles} value={singleOption}
                      onChange={handleSingleChange} getOptionLabel={customOptionLabel} />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>Select Network</Form.Label>
                    <Form.Select className="form-control" id='network'>
                      <option>BTC</option>
                    </Form.Select>
                    <small>Available network for BTC wallet</small>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label className="mb-0">Share wallet address</Form.Label>
                    <p className="t-green">Share the address of the BTC wallet</p>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>BTC Address</Form.Label>
                    <InputGroup>
                      <Form.Control placeholder="qqd3frnksqr87s0zchge6ly382nlwd9hnygk8wjucw" id='coinaddress' />
                      <InputGroup.Text id="copy" className="cpybtn">Copy</InputGroup.Text>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="form-group d-flex dflexbtn mb-0">
                    <Button type="button" className="borderbtn btn-block me-2" id='download_address' onClick={handleShowModal1}><FontAwesomeIcon icon={faQrcode} /> Show QR Code</Button>
                    <Button type="button" className="sitebtn btn-block" id="submitbtn" onClick={handleShowModal2}>Generate new address</Button>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
          <div className="wlltdpstbox mt-3">
            <h2 className="heading-box pt-0 ps-2 border-0">Recent receive History</h2>
            <div className="tabrightbox">
              <Link href="/receivehistory" className="btn borderbtn btn-sm" id="viewbtn">View More</Link>
            </div>
            <div className="panelcontentbox">
              <div className="bordertablebox">
                <SimpleBar className="table-responsive sitescroll">
                  <Table className="sitetable table-responsive-stack historytable" id="table1">
                    <thead>
                      <tr>
                        <th>Asset</th>
                        <th>Amount</th>
                        <th>Time</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <tr className="nodata">
												<td colSpan={5}>
													<Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />No record found
												</td>
											</tr>   */}
                      <tr>
                        <td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />BTC</td>
                        <td className="breaktagtd"><b>1.00 BTC</b><br /><span className="t-gray">≈$0.00</span></td>
                        <td className="breaktagtd"><b>18:00:00</b><br /><span className="t-gray">30/07/2025</span></td>
                        <td><Badge bg="success">Completed</Badge></td>
                      </tr>
                      <tr>
                        <td><Image src="assets/images/color/eth.svg" width={50} height={50} alt="coin" className="coinlisticon" />ETH</td>
                        <td className="breaktagtd"><b>1.00 ETH</b><br /><span className="t-gray">≈$0.00</span></td>
                        <td className="breaktagtd"><b>18:00:00</b><br /><span className="t-gray">30/07/2025</span></td>
                        <td><Badge bg="warning">Pending</Badge></td>
                      </tr>
                      <tr>
                        <td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" />SOL</td>
                        <td className="breaktagtd"><b>1.00 SOL</b><br /><span className="t-gray">≈$0.00</span></td>
                        <td className="breaktagtd"><b>18:00:00</b><br /><span className="t-gray">30/07/2025</span></td>
                        <td><Badge bg="danger">Cancelled</Badge></td>
                      </tr>
                      <tr>
                        <td><Image src="assets/images/color/trx.svg" width={50} height={50} alt="coin" className="coinlisticon" />TRX</td>
                        <td className="breaktagtd"><b>1.00 TRX</b><br /><span className="t-gray">≈$0.00</span></td>
                        <td className="breaktagtd"><b>18:00:00</b><br /><span className="t-gray">30/07/2025</span></td>
                        <td><Badge bg="success">Completed</Badge></td>
                      </tr>
                      <tr>
                        <td><Image src="assets/images/color/bch.svg" width={50} height={50} alt="coin" className="coinlisticon" />BCH</td>
                        <td className="breaktagtd"><b>1.00 BCH</b><br /><span className="t-gray">≈$0.00</span></td>
                        <td className="breaktagtd"><b>18:00:00</b><br /><span className="t-gray">30/07/2025</span></td>
                        <td><Badge bg="success">Completed</Badge></td>
                      </tr>
                      <tr>
                        <td><Image src="assets/images/color/ltc.svg" width={50} height={50} alt="coin" className="coinlisticon" />LTC</td>
                        <td className="breaktagtd"><b>1.00 LTC</b><br /><span className="t-gray">≈$0.00</span></td>
                        <td className="breaktagtd"><b>18:00:00</b><br /><span className="t-gray">30/07/2025</span></td>
                        <td><Badge bg="warning">Pending</Badge></td>
                      </tr>

                    </tbody>
                  </Table>
                </SimpleBar>
                <ResponsiveTable tableId="table1" />
              </div>
            </div>
          </div>
        </Container>
      </article>
      <Userfooter />
      <Modal className="modalbgt" show={showModal1} onHide={handleCloseModal1} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Scan QR code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='siteformbg'>
            <Form.Group className="form-group">
              <Form.Label>BTC Address</Form.Label>
              <InputGroup>
                <Form.Control placeholder="qqd3frnksqr87s0zchge6ly382nlwd9hnygk8wjucw" id='coinaddress' />
                <InputGroup.Text id="copy" className="cpybtn">Copy</InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <Form.Group className="form-group qrcode text-center">
              <Image src="assets/images/qrcode.png" width={50} height={50} alt="coin" id='qrcode' />
            </Form.Group>
            <div className="text-center">
              <Button className="btn sitebtn btn-sm ms-2 mt-2" id='download_address'>Download</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal className="modalbgt" show={showModal2} onHide={handleCloseModal2} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Generate new address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='siteformbg'>
            <p>Current address won’t be available if you generate the new one. If you change your address now, you will not be able to change it again for 24 hours</p>
            <Form.Group className="form-group">
              <Form.Label>BTC Address</Form.Label>
              <InputGroup>
                <Form.Control placeholder="qqd3frnksqr87s0zchge6ly382nlwd9hnygk8wjucw" id='address' />
                <InputGroup.Text id="copy1" className="cpybtn">Copy</InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <div className="text-center">
              <Button className="btn sitebtn btn-sm ms-2 mt-2" id='download_address1'>Generate new address</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default Personalreceive