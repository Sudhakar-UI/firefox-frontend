
"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import { Container, Form, Image, Table, InputGroup, Button, Badge, Row, Col, Nav, FormCheck, Tooltip, OverlayTrigger, Modal, Alert, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faCopy, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Leftsidemenu from '../components/Leftsidemenu';
import Select from 'react-select';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../components/ResponsiveTable';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import '../../../public/assets/css/bootstrap-slider.css';
import '../../../public/assets/js/bootstrap-slider.js';
import $ from 'jquery';

const MissingFund = () => {
  const [showModal1, setShowModal1] = useState(false);
  const handleShowModal1 = () => setShowModal1(true);
  const handleCloseModal1 = () => setShowModal1(false);
  const [showModal2, setShowModal2] = useState(false);
  const handleShowModal2 = () => {
    setShowModal2(true);
    setShowModal1(false);
  }
  const handleCloseModal2 = () => setShowModal2(false);

  const [value, setValue] = useState(0);
  const rangeRef = useRef(null);



 

  return (
    <div className="pagecontent gridpagecontent innerpagegrid progrsbar-d missing-funding-page">
      <div className="backgroundoverlay" id="backgroundoverlay"></div>
      <Userheader />
      <Leftsidemenu />
      <div className="innerpagecontent">
        <Container className="sitecontainer">
          <h2 className="h2">Missing Funds</h2>

        </Container>
      </div>
      <article className="gridparentbox">
        <Container className="sitecontainer walletpagebg ">
          <div className="panelcontentbox">
            <Form className="siteformbg">
              <Row className=' justify-content-between align-items-center'>

                <Col xl={6} lg={6} md={6} sm={12}>
                  <Form.Group className="form-group">
                    <Form.Label>Select Wallet</Form.Label>

                    <InputGroup className="d-flex gap-3">
                      <Form.Check
                        type="radio"
                        label="Personal"
                        name="wallet"
                        id="personalmissfund"
                      />

                      <Form.Check
                        type="radio"
                        label="Invoice"
                        name="wallet"
                        id="invoicemissfund"
                      />

                      <Form.Check
                        type="radio"
                        label="Static Wallet"
                        name="wallet"
                        id="staticmissfund"
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="form-group">
                    <Form.Label>Merchant id</Form.Label>
                    <InputGroup>
                      <Form.Control id='missingfundmerchant' placeholder="B89ef252-1bo9-4ec2-b91e-268d1de40f13 &nbsp;" />
                      <InputGroup.Text id="allprice" className="cpybtn"><FontAwesomeIcon icon={faCopy} /></InputGroup.Text>
                    </InputGroup>

                  </Form.Group>


                  <Form.Group className="form-group">
                    <Form.Label>Transaction Hash</Form.Label>
                    <Form.Control placeholder="Enter Transaction Hash" id='missingfundtransactionhash' />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>Deposit Address</Form.Label>
                    <Form.Control placeholder="Enter Address" id='missingfundcoinaddress' />
                  </Form.Group>

                  <Form.Group className="form-group">
                    <Form.Label>Enter your message</Form.Label>
                    <Form.Control as="textarea" id="missingfundenter_msg" rows={3} />
                  </Form.Group>


                  <Form.Group>
                    <div className="saving-checkbox-wrapper">
                      <Form.Check id="missingfundsavingcheck" className="saving-checkbox me-2" />
                      <Form.Label className="saving-checkbox-label">I have read and agreed to </Form.Label><Link href="#" className="alink a-lik-y"> Firefox Simple Earn Service Terms & Conditions</Link>
                    </div>
                  </Form.Group>

                  <Form.Group className="form-group d-flex dflexbtn mb-0">
                    {/* <Link href="/" className="btn borderbtn btn-block me-2" id="cancelbtn">Cancel</Link> */}
                    <Button type="button" className="sitebtn btn-block" id="missingfundsubmitbtn" onClick={handleShowModal1}>Submit</Button>
                  </Form.Group>



                </Col>
                <Col xl={5} lg={6} md={6} sm={12}>
                  <Image
                    src="assets/images/missingfund-banner.png"
                    alt="btc"
                    className="arrhomeicon-m inner-img-ani"
                  />
                </Col>
              </Row>

            </Form>
          </div>
          <div className=" mt-3">
            <h2 className="heading-box pt-0 ps-2 border-0">Missing Fund History</h2>

            {/* <div className="tabrightbox">
              <Link href="/sendhistory" className="btn borderbtn btn-sm" id="backbtn">View More</Link>
            </div> */}
            <div className="panelcontentbox">

              <div className=' view-new-flex'>
                <Form className="siteformbg ">
                  <div className="supportsearch p-0">
                    <Form.Group className="form-group mb-0">
                      <InputGroup>
                        <Form.Control type="text" id="search" placeholder="Find History" />
                        <div className="input-group-append">
                          <InputGroup.Text> <FontAwesomeIcon icon={faMagnifyingGlass} /> </InputGroup.Text>
                        </div>
                      </InputGroup>
                    </Form.Group>
                  </div>
                </Form>

                <div>
                  <Link href="/sendhistory" className="btn borderbtn btn-sm" id="backbtn">View More</Link>
                </div>


              </div>

              <div className="bordertablebox">
                <SimpleBar className="table-responsive sitescroll">
                  <Table className="sitetable table-responsive-stack historytable" id="table1">
                    <thead>
                      <tr>
                        <th>Search ID</th>
                        <th>Type</th>
                        <th>Merchant ID</th>
                        <th>Status</th>
                        <th>Submitted On</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <tr className="nodata">
                          <td colSpan={5}>
                            <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />No record found
                          </td>
                        </tr>   */}
                      <tr>
                        <td>1234567899</td>
                        <td className="breaktagtd">Personal</td>
                        <td className="breaktagtd">1234569874633</td>
                        <td><Badge bg="success">Completed</Badge></td>
                        <td>18/01/2024, 05:05:00</td>
                        <td><Link href="/missingfunddetails" className="btn borderbtn btn-sm" id="backbtn">View request</Link></td>
                      </tr>
                      <tr>
                        <td>1234567899</td>
                        <td className="breaktagtd">Invoice</td>
                        <td className="breaktagtd">1234569874633</td>
                        <td><Badge bg="warning">Pending</Badge></td>

                        <td>18/01/2024, 05:05:00</td>
                        <td><Link href="/missingfunddetails" className="btn borderbtn btn-sm" id="backbtn">View request</Link></td>
                      </tr>
                      <tr>
                        <td>1234567899</td>
                        <td className="breaktagtd">Static Wallet</td>
                        <td className="breaktagtd">1234569874633</td>
                        <td><Badge bg="danger">Cancelled</Badge></td>
                        <td>18/01/2024, 05:05:00</td>
                        <td><Link href="/missingfunddetails" className="btn borderbtn btn-sm" id="backbtn">View request</Link></td>
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




      <Modal className="modalbgt payment-accuracy" show={showModal1} onHide={handleCloseModal1} aria-labelledby="contained-modal-title-vcenter" centered backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Missing fund status</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Image
            src="assets/images/missingfund.png"

            alt="btc"
            className="arrhomeicon-m"
          />
          <h6 className='text-center missingfund-pop-head'> <span>Missing fund searching </span> is in process.</h6>

          <p className='text-center'>
            Your request has been submitted successfully. <br /> You can track the progress of your missing fund search from the list.
          </p>
          <Form.Group className="form-group">
            <Form.Label>Merchant id</Form.Label>
            <InputGroup>
              <Form.Control id='missingfundmerchantpop' placeholder="B89ef252-1bo9-4ec2-b91e-268d1de40f13 &nbsp;" />
              <InputGroup.Text id="allprice" className="cpybtn "><FontAwesomeIcon icon={faCopy} /></InputGroup.Text>
            </InputGroup>

          </Form.Group>
          <Button type="button" className="sitebtn btn-block" id="submitbtn" >Done</Button>



        </Modal.Body>
      </Modal>



    </div>
  );

}
export default MissingFund