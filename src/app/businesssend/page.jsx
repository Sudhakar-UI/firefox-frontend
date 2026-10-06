
"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import { Container, Form, Image, Table, InputGroup, Button, Badge, Row, Col, Nav, FormCheck, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Leftsidemenu from '../components/Leftsidemenu';
import Select from 'react-select';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../components/ResponsiveTable';

const Businesssend = () => {

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
          <h2 className="h2">Business</h2>
          <div className="boxtabb tabrightbox">
            <Nav className="nav nav-tabs tabbanner border-0" role="tablist">
              <Nav.Item className="nav-item"><Nav.Link href="/businesswallet">Overview</Nav.Link></Nav.Item>
              <Nav.Item className="nav-item"><Nav.Link href="/merchant">Merchant</Nav.Link></Nav.Item>
              <Nav.Item className="nav-item"><Nav.Link href="/businesstransfer">Transfer</Nav.Link></Nav.Item>
              <Nav.Item className="nav-item"><Nav.Link href="/businesssend" className="active">Send</Nav.Link></Nav.Item>
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
                  <Form.Group className="form-group">
                    <Form.Label>Select Wallet</Form.Label>
                    <Select options={options} id='currency' placeholder="Select an option" styles={customStyles} value={singleOption}
                      onChange={handleSingleChange} getOptionLabel={customOptionLabel} />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>Recipient’s  Address</Form.Label>
                    <InputGroup>
                      <Form.Control placeholder="Enter Address" id='coinaddress' />
                      <InputGroup.Text id="copy" className="cpybtn">Copy</InputGroup.Text>
                    </InputGroup>
                    <div className="mt-2">
                      <FormCheck type="radio" id="terms-agreement" label={<>Add Address to Secure Wallet{' '}
                        <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={
                          <Tooltip id="staylogged-tooltip">
                            Next time, you don't need a 2FA for this address You can remove it from whitelist management
                          </Tooltip>}><FontAwesomeIcon icon={faInfoCircle} className="t-gray" />
                        </OverlayTrigger></>} />
                      <small className="t-green">Funds can only be withdrawn to a USDT wallet</small>
                    </div>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>Select Network</Form.Label>
                    <Form.Select className="form-control" id='network'>
                      <option>Enter recipient’s address to select network</option>
                      <option>BTC</option>
                    </Form.Select>
                    <small>Contract address : 0xf...cbb9 <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={
                      <Tooltip id="staylogged-tooltip">
                        A contract address is a unique identifier for a smart contract deployed on a blockchain.
                      </Tooltip>}><FontAwesomeIcon icon={faInfoCircle} className="t-gray" />
                    </OverlayTrigger></small>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control id='withdrawamt' placeholder="1 USDT = 1000000 USDT" />
                    <small className="t-green">Funds will be collected from the USDT wallet</small>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>Add a Comment</Form.Label>
                    <Form.Control as="textarea" id='comment' rows={3} />
                  </Form.Group>
                  <Form.Group className="form-group d-flex dflexbtn mb-0">
                    <Button type="button" className="borderbtn btn-block me-2" id="cancelbtn">Cancel</Button>
                    <Button type="button" className="sitebtn btn-block" id="submitbtn">Send</Button>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
          <div className="wlltdpstbox mt-3">
            <h2 className="heading-box pt-0 ps-2 border-0">Recent Send History</h2>
            <div className="tabrightbox">
              <Link href="/sendhistory" className="btn borderbtn btn-sm" id="viewbtn">View More</Link>
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
    </div>
  );
}
export default Businesssend