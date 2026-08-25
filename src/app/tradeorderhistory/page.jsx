
"use client"
import React, { useState } from 'react'
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import Link from 'next/link';
import { Container, Form, Image, Table, InputGroup, Button, Row, Col, Nav, Tab, Modal, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode, faExchange, faArrowUp, faArrowDown, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Leftsidemenu from '../components/Leftsidemenu';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../components/ResponsiveTable';
import "flatpickr/dist/themes/material_orange.css";
import Flatpickr from "react-flatpickr";

const Sendhistory = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	return (
		<div className="pagecontent gridpagecontent innerpagegrid">
			<div className="backgroundoverlay" id="backgroundoverlay"></div>
			<Userheader />
			<Leftsidemenu />
			<div className="innerpagecontent">
				<Container className="sitecontainer">
					<h2 className="h2">Open Order History</h2>
					<div className="boxtabb tabrightbox">
						<Nav className="nav nav-tabs tabbanner border-0" role="tablist">
							<Nav.Item className="nav-item"><Nav.Link href="/spothistory" >Open Order History</Nav.Link></Nav.Item>
							<Nav.Item className="nav-item"><Nav.Link href="/myorderhistory">My Order History</Nav.Link></Nav.Item>
							<Nav.Item className="nav-item"><Nav.Link href="/tradeorderhistory" className="active">Trade Order History</Nav.Link></Nav.Item>
						</Nav>
					</div>
				</Container>
			</div>
	<article className="gridparentbox">
				<Container className="sitecontainer">
					<div className="panelcontentbox">
						<Tab.Container defaultActiveKey="personaltrans">
							<div className="innerpagetab">
								<Form className="siteformbg">
									<div className="searchfrm">
										<Form.Group className="form-group dateinput" id="startdate">
											<Flatpickr value={startDate} onChange={(startDate) => setStartDate(startDate)}
												options={{ dateFormat: "Y-m-d", enableTime: false, }}
											/>
										</Form.Group>
										<Form.Group className="form-group dateinput" id="enddate">
											<Flatpickr value={endDate} onChange={(endDate) => setEndDate(endDate)} options={{ dateFormat: "Y-m-d", enableTime: false, }}
											/>
										</Form.Group>
										<Form.Group className="mb-3">
											<Form.Select className="form-control" id="coin">
												<option>All</option>
												<option>ETH</option>
												<option>BNB</option>
												<option>XRP</option>
												<option>TRX</option>
												<option>USD</option>
											</Form.Select>
										</Form.Group>
										<Form.Group className="mb-3">
											<Form.Select className="form-control" id="coin">
												<option>All</option>
												<option>ETH</option>
												<option>BNB</option>
												<option>XRP</option>
												<option>TRX</option>
												<option>USD</option>
											</Form.Select>
										</Form.Group>
										<Form.Group className="mb-3">
											<Form.Select className="form-control" id="coin">
												<option>All</option>
												<option>ETH</option>
												<option>BNB</option>
												<option>XRP</option>
												<option>TRX</option>
												<option>USD</option>
											</Form.Select>
										</Form.Group>
										<div className="clerbtn">
											<Form.Group className="form-group">
												<Button className="btn sitebtn btn-sm me-1" id="clearbtn">Clear</Button>
												<Link href="/" className="btn sitebtn btn-sm red-btn" id="resetbtn">Reset</Link>
											</Form.Group>
										</div>

									</div>
								</Form>
							</div>
							<Tab.Content className="mt-3">
								<Tab.Pane eventKey="personaltrans">
									<div className="bordertablebox">
										<SimpleBar className="table-responsive sitescroll">
											<Table className="sitetable table-responsive-stack historytable" id="table4">
												<thead>
													<tr>
														<th>Date & Time</th>
														<th>Coin</th>
														<th>TX Hash</th>
														<th>Sender</th>
														<th>Receiver</th>
														<th>Deposit</th>
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
														<td>18/01/2024, 05:05:00</td>
														<td><Image src="assets/images/color/btc.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />BTC</td>
														<td>FDATRWYTUNDJF8455674</td>
														<td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
														<td>FDATRWYTUNDJF8455674</td>
														<td>2563971</td>
														<td><Badge bg="success">Confirm</Badge></td>
													</tr>
													<tr>
														<td>18/01/2024, 05:05:00</td>
														<td><Image src="assets/images/color/eth.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />ETH</td>
														<td>FDATRWYTUNDJF8455674</td>
														<td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
														<td>FDATRWYTUNDJF8455674</td>
														<td>2563971</td>
														<td><Badge bg="success">Confirm</Badge></td>
													</tr>
													<tr>
														<td>18/01/2024, 05:05:00</td>
														<td><Image src="assets/images/color/trx.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />TRX</td>
														<td>FDATRWYTUNDJF8455674</td>
														<td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
														<td>FDATRWYTUNDJF8455674</td>
														<td>2563971</td>
														<td><Badge bg="success">Confirm</Badge></td>
													</tr>
													<tr>
														<td>18/01/2024, 05:05:00</td>
														<td><Image src="assets/images/color/xrp.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />XRP</td>
														<td>FDATRWYTUNDJF8455674</td>
														<td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
														<td>FDATRWYTUNDJF8455674</td>
														<td>2563971</td>
														<td><Badge bg="success">Confirm</Badge></td>
													</tr>
													<tr>
														<td>18/01/2024, 05:05:00</td>
														<td><Image src="assets/images/color/bnb.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />BNB</td>
														<td>FDATRWYTUNDJF8455674</td>
														<td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
														<td>FDATRWYTUNDJF8455674</td>
														<td>2563971</td>
														<td><Badge bg="success">Confirm</Badge></td>
													</tr>
												</tbody>
											</Table>
										</SimpleBar>
										<ResponsiveTable tableId="table4" />
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey="businesstrans">
									<div className="bordertablebox">
										<SimpleBar className="table-responsive sitescroll">
											<Table className="sitetable table-responsive-stack historytable" id="table4">
												<thead>
													<tr>
													<th>Date & Time</th>
														<th>Coin</th>
														<th>TX Hash</th>
														<th>Sender</th>
														<th>Receiver</th>
														<th>Deposit</th>
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
														<td>18/01/2024, 05:05:00</td>
														<td><Image src="assets/images/color/btc.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />BTC</td>
														<td>FDATRWYTUNDJF8455674</td>
														<td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
														<td>FDATRWYTUNDJF8455674</td>
														<td>2563971</td>
														<td><Badge bg="success">Confirm</Badge></td>
													</tr>
													<tr>
														<td>18/01/2024, 05:05:00</td>
														<td><Image src="assets/images/color/eth.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />ETH</td>
														<td>FDATRWYTUNDJF8455674</td>
														<td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
														<td>FDATRWYTUNDJF8455674</td>
														<td>2563971</td>
														<td><Badge bg="success">Confirm</Badge></td>
													</tr>
													<tr>
														<td>18/01/2024, 05:05:00</td>
														<td><Image src="assets/images/color/trx.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />TRX</td>
														<td>FDATRWYTUNDJF8455674</td>
														<td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
														<td>FDATRWYTUNDJF8455674</td>
														<td>2563971</td>
														<td><Badge bg="success">Confirm</Badge></td>
													</tr>
													<tr>
														<td>18/01/2024, 05:05:00</td>
														<td><Image src="assets/images/color/xrp.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />XRP</td>
														<td>FDATRWYTUNDJF8455674</td>
														<td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
														<td>FDATRWYTUNDJF8455674</td>
														<td>2563971</td>
														<td><Badge bg="success">Confirm</Badge></td>
													</tr>
													<tr>
														<td>18/01/2024, 05:05:00</td>
														<td><Image src="assets/images/color/bnb.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />BNB</td>
														<td>FDATRWYTUNDJF8455674</td>
														<td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
														<td>FDATRWYTUNDJF8455674</td>
														<td>2563971</td>
														<td><Badge bg="success">Confirm</Badge></td>
													</tr>
												</tbody>
											</Table>
										</SimpleBar>
										<ResponsiveTable tableId="table4" />
									</div>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</div>
				</Container>
			</article>
			<Userfooter />

		</div>
	);
}
export default Sendhistory