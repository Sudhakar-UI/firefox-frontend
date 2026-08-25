
"use client"
import React, { useState } from 'react'
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import Link from 'next/link';
import { Container, Form, Image, Table, InputGroup, Button, Badge, Row, Col, Nav, Alert, FormCheck, FormControl} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Leftsidemenu from '../components/Leftsidemenu';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const Merchantcoinview = () => {

    const [showModal1, setShowModal1] = useState(false);
    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);
    const [value, setValue] = useState([1]);

  return (
    <div className="pagecontent gridpagecontent innerpagegrid">
      <div className="backgroundoverlay" id="backgroundoverlay"></div>
      <Userheader />
      <Leftsidemenu />
        <div className="innerpagecontent">
            <Container className="sitecontainer">
                <h2 className="h2">Coins</h2>
                  <div className="tabrightbox">
                    <Link href="/merchantsettings" className="btn sitebtn btn-sm" id="backbtn">Back</Link>
                </div>
            </Container>
        </div>
        <article className="gridparentbox">
        <Container className="sitecontainer">  
            <div className="panelcontentbox mercoinviewpage">
                <div className="mb-3 historsysrch">
                    <div className="searchfrmbox">
                    <Form className="siteformbg">
                        <div className="searchfrm">
                            <Form.Group className="form-group">
                                <Form.Control type="text" placeholder="Search Coin" />
                            </Form.Group>
                            <Form.Group className="form-group d-flex mstchbox mt-2">
                                <FormCheck type="radio" id="radio1-1" label="No Value" />
                                <Form.Group className="form-group radio-up">
                                    <FormCheck type="radio"label="Discount" />
                                        <InputGroup className="siteformbg">
                                            <Form.Control />
                                        <InputGroup.Text id="copy" className="cpybtn">%</InputGroup.Text></InputGroup>
                                </Form.Group>
                                <FormCheck type="radio" id="radio1-1" label="additional_commission" />
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Button className="borderbtn" id="applybtn">Apply</Button>
                            </Form.Group>
                        </div>
                    </Form>
                </div>
                </div>
            <Row className="coinleftviewbox">
                <Col xl={4} lg={6} md={6}>
                        <div className="lightgraybg">
                        <Table className="sitetable" id="table1">
                            <tbody>
                                <tr>
                                    <td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" />SOL</td>
                                    <td className="swtchtogglebox">
                                        <FormCheck type="switch" id="radio" label="" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <div class="fswtchbox">
                                            <FormCheck type="radio" id="radio1" label="No Value" />
                                                <Form.Group className="form-group radio-tog">
                                                    <FormCheck type="radio" id="radioDiscount" label="Discount"/>
                                                    <InputGroup name="discount" className="siteformbg">
                                                        <Form.Control />
                                                        <InputGroup.Text id="copy" className="cpybtn">%</InputGroup.Text></InputGroup>
                                                </Form.Group>
                                                <div className="add-tog mt-3">
                                                    <Form.Group className="form-group radio-tog">
                                                        <FormCheck type="radio" id="radio3" label="Additional Commission"/>
                                                        <InputGroup name="discount" className="siteformbg">
                                                            <Form.Control />
                                                            <InputGroup.Text id="copy" className="cpybtn">%</InputGroup.Text></InputGroup>
                                                    </Form.Group>
                                                </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>                            
                </Col>
                <Col xl={4} lg={6} md={6}>
                            <div className="lightgraybg">
                        <Table className="sitetable" id="table1">
                            <tbody>
                                <tr>
                                    <td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />BTC</td>
                                    <td className="swtchtogglebox">
                                        <FormCheck type="switch" id="radio" label="" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <div class="fswtchbox">
                                            <FormCheck type="radio" id="radio1" label="No Value" />
                                            <FormCheck type="radio" id="radio2" label="Discount" />
                                            <FormCheck type="radio" id="radio3" label="Additional Commission" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>        
                </Col>
                <Col xl={4} lg={6} md={6}>
                            <div className="lightgraybg">
                        <Table className="sitetable" id="table1">
                            <tbody>
                                <tr>
                                    <td><Image src="assets/images/color/eth.svg" width={50} height={50} alt="coin" className="coinlisticon" />ETH</td>
                                    <td className="swtchtogglebox">
                                        <FormCheck type="switch" id="radio" label="" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <div class="fswtchbox">
                                            <FormCheck type="radio" id="radio1" label="No Value" />
                                            <FormCheck type="radio" id="radio2" label="Discount" />
                                            <FormCheck type="radio" id="radio3" label="Additional Commission" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>        
                </Col>
                <Col xl={4} lg={6} md={6}>
                            <div className="lightgraybg">
                        <Table className="sitetable" id="table1">
                            <tbody>
                                <tr>
                                    <td><Image src="assets/images/color/trx.svg" width={50} height={50} alt="coin" className="coinlisticon" />TRX</td>
                                    <td className="swtchtogglebox">
                                        <FormCheck type="switch" id="radio" label="" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <div class="fswtchbox">
                                            <FormCheck type="radio" id="radio1" label="No Value" />
                                            <FormCheck type="radio" id="radio2" label="Discount" />
                                            <FormCheck type="radio" id="radio3" label="Additional Commission" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>        
                </Col>
                <Col xl={4} lg={6} md={6}>
                            <div className="lightgraybg">
                        <Table className="sitetable" id="table1">
                            <tbody>
                                <tr>
                                    <td><Image src="assets/images/color/usdt.svg" width={50} height={50} alt="coin" className="coinlisticon" />USDT</td>
                                    <td className="swtchtogglebox">
                                        <FormCheck type="switch" id="radio" label="" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <div class="fswtchbox">
                                            <FormCheck type="radio" id="radio1" label="No Value" />
                                            <FormCheck type="radio" id="radio2" label="Discount" />
                                            <FormCheck type="radio" id="radio3" label="Additional Commission" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>        
                </Col>
                <Col xl={4} lg={6} md={6}>
                            <div className="lightgraybg">
                        <Table className="sitetable" id="table1">
                            <tbody>
                                <tr>
                                    <td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" />SOL</td>
                                    <td className="swtchtogglebox">
                                        <FormCheck type="switch" id="radio" label="" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <div class="fswtchbox">
                                            <FormCheck type="radio" id="radio1" label="No Value" />
                                            <FormCheck type="radio" id="radio2" label="Discount" />
                                            <FormCheck type="radio" id="radio3" label="Additional Commission" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>        
                </Col>
            </Row>
            </div>
           
        </Container>
        </article>
      <Userfooter />
    </div>
  );
}
export default Merchantcoinview