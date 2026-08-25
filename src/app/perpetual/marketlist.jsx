"use client"
import React from 'react';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Image, Table, Nav, Tab, NavDropdown, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const page = () => {

    return (
        <div className="marketlist marketnewbox">
            <h2 className="heading-box">Markets List</h2>
            <Tab.Container defaultActiveKey="eth">
                <div className="filtersearch">
                    <Form className="siteformbg">
                        <Form.Group className="form-group mb-0">
                            <InputGroup>
                                <Form.Control placeholder="Search" id='search' />
                                <div className="input-group-append">
                                    <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                                </div>
                            </InputGroup>
                        </Form.Group>
                    </Form>
                </div>
                <div className="innerpagetab historytab">
                    <Nav variant="pills" className="tabbanner">
                        <Nav.Item><Nav.Link eventKey="eth">ETH</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="trx">TRX</Nav.Link></Nav.Item>
                    </Nav>
                </div>
                <Tab.Content>
                    <Tab.Pane eventKey="eth">
                        <Simplebar className="table-responsive">
                            <Table className="sitetable" id='table1'>
                                <thead>
                                    <tr>
                                        <th>Coin</th>
                                        <th>Last Price</th>
                                        <th>24h Change</th>
                                        <th>24h Volume</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="activerow">
                                        <td><Image src="../assets/images/color/btc.svg" width={25} height={25} alt="coin" className="coinlisticon" />BTC/ETH</td>
                                        <td>2562.365289</td>
                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                        <td>2562.365289</td>
                                    </tr>
                                    <tr>
                                        <td><Image src="../assets/images/color/trx.svg" width={25} height={25} alt="coin" className="coinlisticon" />TRX/ETH</td>
                                        <td>2562.365289</td>
                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                        <td>2562.365289</td>
                                    </tr>
                                    <tr>
                                        <td><Image src="../assets/images/color/xrp.svg" width={25} height={25} alt="coin" className="coinlisticon" />XRP/ETH</td>
                                        <td>2562.365289</td>
                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                        <td>2562.365289</td>
                                    </tr>
                                    <tr>
                                        <td><Image src="../assets/images/color/bnb.svg" width={25} height={25} alt="coin" className="coinlisticon" />BNB/ETH</td>
                                        <td>2562.365289</td>
                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                        <td>2562.365289</td>
                                    </tr>

                                </tbody>
                            </Table>
                        </Simplebar>
                    </Tab.Pane>
                    <Tab.Pane eventKey="trx">
                        <Simplebar className="table-responsive">
                            <Table className="sitetable" id='table2'>
                                <thead>
                                    <tr>
                                        <th>Coin</th>
                                        <th>Last Price</th>
                                        <th>24h Change</th>
                                        <th>24h Volume</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="activerow">
                                        <td><Image src="../assets/images/color/btc.svg" width={25} height={25} alt="coin" className="coinlisticon" />BTC/ETH</td>
                                        <td>2562.365289</td>
                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                        <td>2562.365289</td>
                                    </tr>
                                    <tr>
                                        <td><Image src="../assets/images/color/trx.svg" width={25} height={25} alt="coin" className="coinlisticon" />TRX/ETH</td>
                                        <td>2562.365289</td>
                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                        <td>2562.365289</td>
                                    </tr>
                                    <tr>
                                        <td><Image src="../assets/images/color/xrp.svg" width={25} height={25} alt="coin" className="coinlisticon" />XRP/ETH</td>
                                        <td>2562.365289</td>
                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                        <td>2562.365289</td>
                                    </tr>
                                    <tr>
                                        <td><Image src="../assets/images/color/bnb.svg" width={25} height={25} alt="coin" className="coinlisticon" />BNB/ETH</td>
                                        <td>2562.365289</td>
                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                        <td>2562.365289</td>
                                    </tr>

                                </tbody>
                            </Table>
                        </Simplebar>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>

    )
}

export default page;