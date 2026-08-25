
"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import { Container, Form, Image, Table, InputGroup, Button, Badge, Row, Col, Nav, FormCheck, Tooltip, OverlayTrigger, Modal, Alert, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faCopy, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';
import Leftsidemenu from '../components/Leftsidemenu';
import Select from 'react-select';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../components/ResponsiveTable';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Slider from './Slider';
import '../../../public/assets/css/bootstrap-slider.css';
import '../../../public/assets/js/bootstrap-slider.js';
import $ from 'jquery';

const Personalsend = () => {
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

  useEffect(() => {
    // Wait for modal to be fully shown
    $('#myModal').on('.modal-dialog', function () {
      const $slider = $(".rangeslider").slider({
        min: 0,
        max: 400,
        step: 5,
        tooltip: 'hide'
      });

      $slider.on('change', (e) => {
        setValue(e.value.newValue);
      });
    });

    // Cleanup when component unmounts
    return () => {
      $('#myModal').off('.modal-dialog ');
    };
  }, []);

  useEffect(() => {
    const range = rangeRef.current;
    if (!range) return;

    const update = () => {
      const percent =
        ((range.value - range.min) / (range.max - range.min)) * 100;
      range.style.setProperty("--value", percent + "%");
    };

    update(); // initial fill
    range.addEventListener("input", update);

    return () => {
      range.removeEventListener("input", update);
    };
  }, []);

  return (
    <div className="pagecontent gridpagecontent innerpagegrid progrsbar-d">
      <div className="backgroundoverlay" id="backgroundoverlay"></div>
      <Userheader />
      <Leftsidemenu />
      <div className="innerpagecontent">
        <Container className="sitecontainer">
          <h2 className="h2">Personal</h2>
          <div className="boxtabb tabrightbox">
            <Nav className="nav nav-tabs tabbanner border-0" role="tablist">
              <Nav.Item className="nav-item"><Nav.Link href="/personalwallet">Overview</Nav.Link></Nav.Item>
              <Nav.Item className="nav-item"><Nav.Link href="/personalsend" className="active">Send</Nav.Link></Nav.Item>
              <Nav.Item className="nav-item"><Nav.Link href="/personalreceive">Receive</Nav.Link></Nav.Item>
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
                {/* <div className="alert-box">
                  <h2 className="alert-title">
                    Alert: Withdrawal Services Temporarily Halted
                  </h2>

                  <p className="alert-message">
                    We are currently experiencing a temporary halt in withdrawal services
                    due to maintenance/operational reasons. We are working to restore
                    normal services as soon as possible. Please try again later. We regret
                    the inconvenience.
                  </p>
                </div> */}
                <Col xl={5} lg={6} md={6}>

                  {/* <Button className="sitebtn btn-sm ms-3" id="addcoinbtn" onClick={handleShowModal1}>Request to add coin</Button>  */}
                  {/* <Button href="/missingfund" className="sitebtn btn-sm m2-3" id="addcoinbtn" ><span className="pe-2">
                    <FontAwesomeIcon icon={faMagnifyingGlassDollar} /></span>Missing Fund Search</Button>
                  <hr /> */}


                  <Form.Group className="form-group">
                    <Form.Label>Select Wallet</Form.Label>
                    <Select id='currency' placeholder="Select an option" />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>Recipient’s  Address</Form.Label>
                    <Form.Control placeholder="Enter Address" id='coinaddress' />
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
                    <InputGroup>
                      <Form.Control id='withdrawamt' placeholder="1 USDT = 1000000 USDT" />
                      <InputGroup.Text id="allprice" className="cpybtn">All</InputGroup.Text>
                    </InputGroup>
                    <small className="">$89.02</small><br />
                    <small className="t-green">Funds will be collected from the USDT wallet</small>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>Add a Comment</Form.Label>
                    <Form.Control as="textarea" id='comment' rows={1} />
                  </Form.Group>

                  <Form.Group className="form-group">
                    <div className="lightgraybg notesminitable p-0 pt-2 pb-2">
                      <Table className="sitetable mb-0">
                        <tbody>
                          <tr>
                            <td><span className="t-black"><b>Commission from personal wallet balance</b></span></td>
                            <td className="text-end frmswtch">
                              <FormCheck type="switch" id="radio1" label="" />
                            </td>
                          </tr>
                          <tr>
                            <td colspan={2}><hr className="mt-0 mb-0" /></td>
                          </tr>
                          <tr>
                            <td><span className="t-black"><b>The receipt will receive</b></span></td>
                            <td className="text-end">10 USDT</td>
                          </tr>
                          <tr>
                            <td><span className="t-black"><b>From your balance</b></span></td>
                            <td className="text-end">10 USDT</td>
                          </tr>
                          <tr>
                            <td colspan={2}><hr className="mt-0 mb-0" /></td>
                          </tr>
                          <tr>
                            <td><span className="t-black"><b>The Commission is valid for</b></span></td>
                            <td className="text-end">
                              <div className="timerflexboxb d-flex">
                                {/* 
                                  <CountdownCircleTimer
                                    {...timerProps}
                                    colors="#ff8c00"
                                    duration={hourSeconds}
                                    initialRemainingTime={remainingTime % hourSeconds}
                                    onComplete={(totalElapsedTime) => ({
                                      shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
                                    })}
                                  >
                                    {({ elapsedTime, color }) => (
                                      <span style={{ color }}>
                                        {renderTime("min", getTimeMinutes(hourSeconds - elapsedTime))}
                                      </span>
                                    )}
                                  </CountdownCircleTimer>
                                  <CountdownCircleTimer
                                    {...timerProps}
                                    colors="#ff8c00"
                                    duration={minuteSeconds}
                                    initialRemainingTime={remainingTime % minuteSeconds}
                                    onComplete={(totalElapsedTime) => ({
                                      shouldRepeat: remainingTime - totalElapsedTime > 0
                                    })}
                                  >
                                    {({ elapsedTime, color }) => (
                                      <span style={{ color }}>
                                        {renderTime("sec", getTimeSeconds(elapsedTime))}
                                      </span>
                                    )}
                                  </CountdownCircleTimer> */}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Form.Group>
                  <Form.Group className="form-group d-flex dflexbtn mb-0">
                    <Link href="/" className="btn borderbtn btn-block me-2" id="cancelbtn">Cancel</Link>
                    <Button type="button" className="sitebtn btn-block" id="submitbtn" onClick={handleShowModal1}>Send</Button>
                  </Form.Group>
                </Col>
              </Row>

            </Form>
          </div>
          <div className="wlltdpstbox mt-3">
            <h2 className="heading-box pt-0 ps-2 border-0">Recent Send History</h2>
            <div className="tabrightbox miss-btn-add">
              <Link href="/sendhistory" className="btn borderbtn btn-sm" id="backbtn">View More</Link>

              <Button href="/missingfund" className="sitebtn btn-sm mx-3" id="addcoinbtn" ><span className="pe-2">
                <FontAwesomeIcon icon={faMagnifyingGlassDollar} /></span>Missing Fund Search</Button>

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



      {/* <Modal className="modalbgt summarymdal" show={showModal1} onHide={handleCloseModal1} aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>Invoice created</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className='siteformbg'>

              <div className="lightgraybg text-center mb-2">
                <p className="mb-2">Invoice Builder</p>
                <h4 className="heading-title mb-1">1 BCH</h4>
                <p className="mb-1">Invoice expires in 2 hours</p>
                <p className="mb-0">After this Period, the payment link will stop working</p>
              </div>

              <Form.Group className="form-group">
                <div className="makerbg mt-2 marpre">
                  <h4 className="subhead border-0 pb-3">Share Your Link</h4><span className="tabrightbox">
                    <Button type="button" className="sitebtn btn-sm" id="submitbtn"><FontAwesomeIcon icon={faCopy} /> &nbsp;copy</Button>
                  </span>
                  <div className="makpre">
                    <pre className="">
                      <div className="">
                        <SimpleBar className="sitescroll">
                          https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=181&ct=1763375061&rver=7.5.2234.0&wp=MBI_SSL&wreply=https%3A%2F%2Faccount.microsoft.com%2Fauth%2Fcomplete-signin%3Fru%3Dhttps%253A%252F%252Faccount.microsoft.com%252F%253Fref%253Dsettings%2526mkt%253Den-US%2526refd%253Daccount.microsoft.com&lc=1033&id=292666&username=sureshkrishna%40pixelwebsolutions.com&lw=1&fl=easi2
                        </SimpleBar>
                        <div >

                        </div>
                      </div>
                    </pre>
                  </div>
                </div>
              </Form.Group>
              <div className="qrcdimg text-center">
                <Image src="assets/images/qrcode.png" width={50} height={50} alt="coin" className="" />
              </div>
              <Form.Group className="form-group d-flex dflexbtn mt-3">
                <Link href="/" className="btn borderbtn btn-block me-2" id="cancelbtn">Back</Link>
                <Button type="button" className="sitebtn btn-block" id="submitbtn">Create new invoice</Button>
              </Form.Group>

            </Form>
          </Modal.Body>
        </Modal> */}
      <Modal className="modalbgt payment-accuracy" show={showModal1} onHide={handleCloseModal1} aria-labelledby="contained-modal-title-vcenter" centered backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Accuracy</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            The invoice is marked as <strong>Paid</strong> even if the client has not
            paid
            {/* <strong>{accuracy}%</strong>  */}
            of the amount.
          </p>

          <Form className="siteformbg">
            <Form.Group className="form-group mb-3">
              <Form.Range
                min={0}
                max={5}
                step={0.1}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                style={{
                  "--value": `${(value / 5) * 100}%`
                }}
              />
              <Form.Control className="d-block mt-3"
                type="number"
                id="amount"
                placeholder="0.00"
                step="0.1"
                min="0"
                max="5"
              // value={accuracy}
              // onChange={handleInputChange}
              />
              <small   >
                Anything below this value will be marked as a <strong>Partially paid</strong>.
              </small> <br />
            </Form.Group>
            <div className="text-center">
              <Button className="sitebtn w-100" id="submit" >
                {/* onClick={handleSubmit}
                  Save */}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* <Modal
          className="modalbgt progrsbar-d range-y"
          show={showModal1}
          onHide={handleCloseModal1}
          aria-labelledby="contained-modal-title-vcenter"
          centered id="myModal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Connect Heleket business telegram bot</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex gap-2">
              <div>
                <p>
                  1.Scan the QR code or click on the provided Link
                </p>
                <p>
                  2.Lanuch the Telegram bot by pressing the "Start button"
                </p>
                <p>
                  3.Send him a message with your code
                </p>

                <Form className="siteformbg heleket">
                  <Form.Group className="form-group">
                    <Form.Label>The code for the bot's telegram</Form.Label>
                    <InputGroup>
                      <Form.Control type="text" id="boattelegram" placeholder="/Start h6VzGyCrhqCBMts..." />
                      <div className="input-group-append">
                        <InputGroup.Text> <FontAwesomeIcon icon={faCopy} /> </InputGroup.Text>
                      </div>
                    </InputGroup>
                  </Form.Group>
                  
                </Form>
              </div>
              <div>
                <div className="text-center mt-3">
                  <Image src="assets/images/qrcode.png" width={97} height={97} className="heleketqr mb-3" alt="nodata" />
                    <Link href="/" className="sitebtn heleketsubs" >Subscribe</Link>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal> */}
      {/* <Modal.Body>
            <Row>
              <Col xl={6}>
                <p>
                  1.Scan the QR code or click on the provided Link
                </p>
                <p>
                  2.Lanuch the Telegram bot by pressing the "Start button"
                </p>
                <p>
                  3.Send him a message with your code
                </p>
                <Form className="siteformbg heleket">
                  The code for the bot's telegram
                  <Form.Group className="form-group mb-3">
                    <Form.Control className="d-block mt-3"
                      type="number"
                      id="amount"
                      placeholder="0.00"
                      step="0.1"
                      min="0"
                      max="100"
                    /><Button type="button" className="sitebtn tabrightbox" id="submitbtn"><FontAwesomeIcon icon={faCopy} /> &nbsp;copy</Button>
                  </Form.Group>
                </Form>
              </Col>
              <Col xl={6}>
                <div className="text-center mt-3">
                  <Image src="assets/images/qrcode.png" width={50} height={50} className="heleketqr" alt="nodata" />
                    <Button className="sitebtn mt-4">Subscribe</Button>
                </div>
              </Col>
            </Row>
          </Modal.Body> */}

      {/* <Modal
          className="modalbgt progrsbar-d range-y"
          show={showModal1}
          onHide={handleCloseModal1}
          aria-labelledby="contained-modal-title-vcenter"
          centered id="myModal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Request Test Coins</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Your Spot Account on Bybit Testnet will receive 10,000
              USDT and 1 BTC test coins. Please notes that you can
              only request once every 24 hours. The timer starts when
              you last received test coins.
            </p>
            <Form className="siteformbg mt-4">
              <div className="text-center">
                <Button className="sitebtn w-100" id="submit">
                  Request
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal> */}
      {/* <Modal
          className="modalbgt progrsbar-d range-y"
          show={showModal1}
          onHide={handleCloseModal1}
          aria-labelledby="contained-modal-title-vcenter"
          centered id="myModal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Are you logging out?</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="logimg-y text-center">
                <Image src="assets/images/logout.svg" width={50} height={50} alt="coin" className="" />
              </div> 
            <p>
              you can always log back in at any time.if yoy<br />
              just wants to switch accounts, you can   <span className="underline-y">add</span><br />
              <span className="underline-y">another account</span>
            </p>
            <Form className="siteformbg stefnbg-y">
              <div className="text-center d-flex gap-5">
                <Button className="borderbtn w-100" id="submit">
                  cancel
                </Button>
                <Button className="sitebtn w-100" id="submit">
                  No
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal> */}


      {/* <Modal
          className="modalbgt progrsbar-d range-y"
          show={showModal1}
          onHide={handleCloseModal1}
          aria-labelledby="contained-modal-title-vcenter"
          centered id="myModal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to signout?</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              The invoice is marked as <strong>Paid</strong> even if the client has not
              paid <strong>%</strong> of the amount.
            </p> 
            <>
              <Form.Range
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  e.target.style.setProperty(
                    '--range-percent',
                    `${(e.target.value / e.target.max) * 100}%`
                  );
                }}
                max={100}
              />
            </> 
            <Form className="siteformbg">
              <Form.Group className="form-group mb-3">

                <Form.Control className="d-block mt-3"
                  type="number"
                  id="amount"
                  placeholder="0.00"
                  step="0.1"
                  min="0"
                  max="100"
                />
                <small p className="mt-3" >
                  Anything below this value will be marked as a <strong>Partially paid</strong>.
                </small>
              </Form.Group> 
              <div className="text-center d-flex gap-5">
                <Button className="sitebtn w-100" id="submit">
                  yes
                </Button>
                <Button className="sitebtn w-100" id="submit">
                  No
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>  */}

      {/* <Modal className="modalbgt summarymdal" show={showModal1} onHide={handleCloseModal1} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
              <Modal.Title>Summary</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form className='siteformbg'>
                <Alert variant="info">
                  <div className="d-flex">
                    <div><p className="mb-0">Amount</p></div>
                    <div className="text-end"><h6 className="mb-0">10 USDT</h6></div>
                  </div>
                </Alert>
                <Form.Group className="form-group">
                    <div className="lightgraybg notesminitable p-0 pt-2 pb-2">
                      <Table className="sitetable mb-0">
                        <tbody>
                          <tr>
                            <td colSpan={2}><span className="t-black"><b>Send From</b></span></td>
                          </tr>
                          <tr>
                            <td>
                                <div className="d-flex">
                                  <div>
                                    <Image src="assets/images/color/usdt.svg" width={20} height={20} alt="icon" className="coinlisticon"/>
                                  </div>
                                  <div>
                                    USDT
                                  </div>
                                </div>
                            </td>
                            <td className="text-end">5426FDATRWYCVFH457637</td>
                          </tr>
                          <tr>
                            <td colSpan={2}><hr className="mt-0 mb-0"/></td>
                          </tr>
                          <tr>
                            <td colSpan={2}><span className="t-black"><b>Recipient's wallet</b></span></td>
                          </tr>
                          <tr>
                            <td>
                                <div className="d-flex">
                                  <div>
                                    <Image src="assets/images/color/usdt.svg" width={20} height={20} alt="icon" className="coinlisticon"/>
                                  </div>
                                  <div>
                                    USDT
                                  </div>
                                </div>
                            </td>
                              <td className="text-end">5426FDATRWYCVFH457637</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                </Form.Group>
                <Form.Group className="form-group">
                    <div className="lightgraybg notesminitable p-0 pt-2 pb-2">
                      <Table className="sitetable mb-0">
                        <tbody>
                          <tr>
                            <td><span className="t-black"><b>Network</b></span></td>
                            <td className="text-end">BTC</td>
                          </tr>
                          <tr>
                            <td><span className="t-black"><b>The receipt will receive</b></span></td>
                            <td className="text-end">10 USDT</td>
                          </tr>
                          <tr>
                            <td><span className="t-black"><b>Commission</b></span></td>
                            <td className="text-end">10 USDT</td>
                          </tr>
                          <tr>
                            <td colspan={2}><hr className="mt-0 mb-0"/></td>
                          </tr>
                          <tr>
                            <td><span className="t-black"><b>The Commission is valid for</b></span></td>
                            <td className="text-end">
                            <div className="timerflexboxb d-flex">
                                  
                                  <CountdownCircleTimer
                                  {...timerProps}
                                  colors="#ff8c00"
                                  duration={hourSeconds}
                                  initialRemainingTime={remainingTime % hourSeconds}
                                  onComplete={(totalElapsedTime) => ({
                                    shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
                                  })}
                                  >
                                  {({ elapsedTime, color }) => (
                                    <span style={{ color }}>
                                    {renderTime("min", getTimeMinutes(hourSeconds - elapsedTime))}
                                    </span>
                                  )}
                                  </CountdownCircleTimer>
                                  <CountdownCircleTimer
                                  {...timerProps}
                                  colors="#ff8c00"
                                  duration={minuteSeconds}
                                  initialRemainingTime={remainingTime % minuteSeconds}
                                  onComplete={(totalElapsedTime) => ({
                                    shouldRepeat: remainingTime - totalElapsedTime > 0
                                  })}
                                  >
                                  {({ elapsedTime, color }) => (
                                    <span style={{ color }}>
                                    {renderTime("sec", getTimeSeconds(elapsedTime))}
                                    </span>
                                  )}
                                  </CountdownCircleTimer>
                                  </div>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                </Form.Group>
                <Form.Group className="form-group">
                      <Form.Label>Two-Factor Authentication</Form.Label>
                      <Form.Control name="code" placeholder="Enter 2FA code" id="otpverify" />
                  </Form.Group>
                  <Form.Group className="form-group d-flex dflexbtn mb-0">
                        <Button type="button" className="borderbtn btn-block me-2" id="cancelbtn" onClick={handleCloseModal1}>Back</Button>
                        <Button type="button" className="sitebtn btn-block" id="submitbtn" onClick={handleShowModal2}>Send</Button>
                  </Form.Group>    
              </Form>
            </Modal.Body>
        </Modal> */}

      {/* <Modal className="modalbgt summarymdal" show={showModal1} onHide={handleCloseModal1} aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>Invoice Builder - Payment Request</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className='siteformbg'>
              <Alert variant="info">
                <div className="d-flex">
                  <div><p className="mb-0">Copy the below code, after page refresh then you can't recover this<br />
                    code again!</p></div>
                </div>
              </Alert>
              <Form.Group className="form-group">
                <div>
                  <Button type="button" className="sitebtn" id="submitbtn"><FontAwesomeIcon icon={faCopy} /> &nbsp;copy</Button>

                </div>
              </Form.Group>

              <Form.Group className="form-group">
                <div className="makerbg mt-2">
                  <h4 className="subhead border-0 pb-1">Generated Code</h4>
                  <div>
                    <pre className="p-3 bg-light border rounded">
                      // {formHtml}
                    </pre>
                  </div>
                </div>
              </Form.Group>

            </Form>
          </Modal.Body>
        </Modal>  */}
      <Modal className="modalbgt summarymdal" show={showModal2} onHide={handleCloseModal2} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='siteformbg'>
            <Alert variant="success">
              <div className="d-flex">
                <div><p className="mb-0">Sucessfully Sent</p></div>
                <div className="text-end"><h6 className="mb-0">10 USDT</h6></div>
              </div>
            </Alert>
            <Form.Group className="form-group">
              <div className="lightgraybg notesminitable p-0 pt-2 pb-2">
                <Table className="sitetable mb-0">
                  <tbody>
                    <tr>
                      <td><span className="t-black"><b>Network</b></span></td>
                      <td className="text-end">BTC</td>
                    </tr>
                    <tr>
                      <td><span className="t-black"><b>Status</b></span></td>
                      <td className="text-end"><Badge bg="warning">In Progress</Badge></td>
                    </tr>
                    <tr>
                      <td><span className="t-black"><b>Recipient's Wallet</b></span></td>
                      <td className="text-end">RETXVCVHYJ65378</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Form.Group>

            <Form.Group className="form-group d-flex dflexbtn mb-0">
              <Link href="/sendhistory" className="borderbtn btn btn-block me-2" id="historylink" onClick={handleCloseModal2}>Transaction History</Link>
              <Button type="button" className="sitebtn btn-block" id="submitbtn">Send Again</Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );

}
export default Personalsend