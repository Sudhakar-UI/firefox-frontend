
"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { Container, Form, Image, Table, InputGroup, Button, Row, Col, Nav, Tab, Modal, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Homefooter from '../components/Homefooter';
import Homeheader from '../components/Homeheader';

import Select from 'react-select';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../components/ResponsiveTable';

const Personalconvert = () => {

  const [showModal1, setShowModal1] = useState(false);
  const handleShowModal1 = () => setShowModal1(true);
  const handleCloseModal1 = () => setShowModal1(false);

  const [showModal2, setShowModal2] = useState(false);
  const handleShowModal2 = () => setShowModal2(true);
  const handleCloseModal2 = () => setShowModal2(false);

  const [singleOption, setSingleOption] = useState({
    value: 'btc',
    label: 'BTC',
    image: 'assets/images/color/btc.svg'
  });

  const options = [
    { value: 'btc', label: 'BTC', image: 'assets/images/color/btc.svg' },
    { value: 'eth', label: 'ETH', image: 'assets/images/color/eth.svg' },
    { value: 'ltc', label: 'LTC', image: 'assets/images/color/ltc.svg' },
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
    </div>
  );

  const [secondOption, setSecondOption] = useState(null);

  const optionssecond = [
    { value: 'btc', label: 'BTC', image: 'assets/images/color/btc.svg' },
    { value: 'eth', label: 'ETH', image: 'assets/images/color/eth.svg' },
    { value: 'ltc', label: 'LTC', image: 'assets/images/color/ltc.svg' },
  ];

  const handleSecondChange = (selected) => {
    setSingleOption(selected);
    console.log('Single Select:', selected);
  };

  const customStylessecond = {
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
  const customOptionLabelsecond = (data) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={data.image} alt={data.label} style={{ width: 20, height: 20, marginRight: 10 }} />
        {data.label}
      </div>
    </div>
  );

  return (
    <div className="pagecontent gridpagecontent innerpagegrid">
      <div className="backgroundoverlay" id="backgroundoverlay"></div>
      <Homeheader />
      {/* <Leftsidemenu /> */}

      <section className="innercontentpage">
        <Container>
          <h2 className="heading-title text-center pb-0 mb-0">Covert</h2>
        </Container>
      </section>
      <article className="gridparentbox mt-3">
        <Container className="sitecontainer before-convertpage">
          <Row>
            <Col lg={6} md={6}>
              <div className="panelcontentbox before-convertpage-p">
                <Tab.Container defaultActiveKey="market">
                  <div className="innerpagetab">
                    <Nav className="nav nav-tabs tabbanner" role="tablist">
                      <Nav.Item className="nav-item"><Nav.Link eventKey="market">Market</Nav.Link></Nav.Item>
                      <Nav.Item className="nav-item"><Nav.Link eventKey="limit">Limit</Nav.Link></Nav.Item>
                    </Nav>
                  </div>

                  <Tab.Content className="mt-3">
                    <Tab.Pane eventKey="market">
                      <Form className="siteformbg">
                        <Form.Group className="form-group convertfrmg">
                          <Form.Label>From</Form.Label>
                          <div className="tabrightbox">
                            <p>0.00256 BTC</p>
                          </div>
                          <InputGroup>
                            <Form.Control placeholder="0.00000000" id='from' />
                            <InputGroup.Text><Button className="borderbtn btn-sm">Convert all</Button></InputGroup.Text>
                            <InputGroup.Text className="p-0">
                              <Select options={options} id='currency' styles={customStyles} value={singleOption} onChange={handleSingleChange} getOptionLabel={customOptionLabel} />
                            </InputGroup.Text>
                          </InputGroup>
                        </Form.Group>
                        <Form.Group className="form-group text-center">
                          <Image src="assets/images/exchangearrow.png" width={24} height={24} alt="icon" />
                        </Form.Group>
                        <Form.Group className="form-group convertfrmg">
                          <Form.Label>To</Form.Label>
                          <div className="tabrightbox">
                            <p>0.00256 BTC</p>
                          </div>
                          <InputGroup>
                            <Form.Control placeholder="0.00000000" id='to' />
                            <InputGroup.Text className="p-0">
                              <Select options={optionssecond} id='currency' styles={customStylessecond} value={secondOption} onChange={handleSecondChange} getOptionLabel={customOptionLabelsecond} />
                            </InputGroup.Text>
                          </InputGroup>
                        </Form.Group>
                        <Form.Group className="form-group">
                          <div className="notestitle notesgray p-0">
                            <p className="pb-0 "><span className="t-gray">Exchange Rate</span><span className="t-black text-end">0.00060000 BTC</span></p>
                          </div>
                        </Form.Group>
                        <Form.Group className="form-group d-flex dflexbtn mb-0">
                          <Button type="button" className="sitebtn btn-block w-100" id="submitbtn">Convert</Button>
                        </Form.Group>
                      </Form>
                    </Tab.Pane>
                    <Tab.Pane eventKey="limit">
                      <Form className="siteformbg">
                        <Form.Group className="form-group convertfrmg">
                          <Form.Label>From</Form.Label>
                          <div className="tabrightbox">
                            <p>0.00256 BTC</p>
                          </div>
                          <InputGroup>
                            <Form.Control placeholder="0.00000000" id='from' />
                            <InputGroup.Text><Button className="borderbtn btn-sm">Convert all</Button></InputGroup.Text>
                            <InputGroup.Text className="p-0">
                              <Select options={options} id='currency' styles={customStyles} value={singleOption} onChange={handleSingleChange} getOptionLabel={customOptionLabel} />
                            </InputGroup.Text>
                          </InputGroup>
                        </Form.Group>
                        <Form.Group className="form-group">
                          <Form.Label>Limit Price</Form.Label>
                          <Form.Control placeholder="Set limit price" id='limit' />
                        </Form.Group>
                        <Form.Group className="form-group text-center">
                          <Image src="assets/images/exchangearrow.png" width={24} height={24} alt="icon" />
                        </Form.Group>
                        <Form.Group className="form-group convertfrmg">
                          <Form.Label>To</Form.Label>
                          <div className="tabrightbox">
                            <p>0.00256 BTC</p>
                          </div>
                          <InputGroup>
                            <Form.Control placeholder="0.00000000" id='to' />
                            <InputGroup.Text className="p-0">
                              <Select options={optionssecond} id='tocoin' styles={customStylessecond} value={secondOption} onChange={handleSecondChange} getOptionLabel={customOptionLabelsecond} />
                            </InputGroup.Text>
                          </InputGroup>
                        </Form.Group>
                        <Form.Group className="form-group">
                          <div className="notestitle notesgray p-0">
                            <p className="pb-0"><span className="t-gray">Market Price</span><span className="t-black">0.00060000 BTC</span></p>
                          </div>
                        </Form.Group>
                        <Form.Group className="form-group d-flex dflexbtn mb-0">

                          <Button type="button" className="sitebtn btn-block w-100" id="submitbtn">Convert</Button>
                        </Form.Group>
                      </Form>
                    </Tab.Pane>
                  </Tab.Content>

                </Tab.Container>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <Image src="../assets/images/fox-convert.png" className="covert-img-c covert-img-light" />
              <Image src="../assets/images/fox-convert-dark.png" className="covert-img-c covert-img-dark" />
            </Col>
          </Row>
          {/* <div className="wlltdpstbox mt-3">
            <h2 className="heading-box pt-0 ps-2 border-0">Recent Convert History</h2>
            <div className="tabrightbox">
              <Link href="/converthistory" className="btn borderbtn btn-sm" id="viewbtn">View More</Link>
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
                      <tr className="nodata">
                    <td colSpan={5}>
                      <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />No record found
                    </td>
                  </tr>  
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
          </div> */}
        </Container>
      </article>
      <Homefooter />

    </div>
  );
}
export default Personalconvert