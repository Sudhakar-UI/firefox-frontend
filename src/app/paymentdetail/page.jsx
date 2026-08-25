"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { Container, Image, Table, Button, Form, Nav, Badge, NavDropdown, Accordion, FormCheck, Tab, Alert, OverlayTrigger, Tooltip, InputGroup, Modal, Row, Col } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEye, faSortDown, faAngleDown, faCircleExclamation, faCheck, faBook, faCopy, faSearch, faMagnifyingGlass, faBookOpen, faWallet, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ResponsiveTable from '../components/ResponsiveTable';
import Leftsidemenu from '../components/Leftsidemenu';
import "flatpickr/dist/themes/dark.css";
import Flatpickr from "react-flatpickr";
import { Label } from "@amcharts/amcharts5";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const Merchantview = () => {
	useEffect(() => {
		document.body.classList.add('merchantview');

		return () => {
			document.body.classList.remove("merchantview");
		};
	});
	const [showModal1, setShowModal1] = useState(false);
	const [showModal2, setShowModal2] = useState(false);
	const handleShowModal1 = () => setShowModal1(true);
	const handleCloseModal1 = () => setShowModal1(false);
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [openRow, setOpenRow] = useState('data1');
	const handleShowModal2 = () => setShowModal2(true);
	const handleCloseModal2 = () => setShowModal2(false);


	return (
		<div className="pagecontent gridpagecontent innerpagegrid">
			<div className="backgroundoverlay" id="backgroundoverlay"></div>
			<Userheader />
			<Leftsidemenu />
			<div className="innerpagecontent">
				<Container className="sitecontainer">
					<h2 className="h2">testaccount <Badge bg="warning" className="newbdgebg"><FontAwesomeIcon icon={faCheckCircle} /> New</Badge></h2>
					<div className="boxtabb tabrightbox pay-deta-y">
						<Button className="btn sitebtn btn-sm me-1" id="clearbtn"><FontAwesomeIcon icon={faArrowLeft} className='me-2' />Back</Button>
					</div> 
				</Container>
			</div>
			<article className="gridparentbox merchantpage grd-part-mercht-y">
				<Container className="sitecontainer">
					<div className="wllettable panelcontentbox mt-3">
						<div className="bordertablebox">
							<SimpleBar className="table-responsive sitescroll">
								<Table className="sitetable table-responsive-stack historytable" id="table1">
									<thead>
										<tr>
											<th></th>
											<th>Asset</th>
											<th>Amount</th>
											<th>Avg.Cost</th>
											<th>Allocation</th>
											{/* <th>Action</th> */}
										</tr>
									</thead>
									<tbody>
										<tr
										// className="accordionrow acr-rw-y"
										// onClick={() => setOpenRow(openRow === 'data1' ? null : 'data1')}
										>
											<td>
												<Image src="assets/images/payment-red.svg" width={100} height={100} alt="logo" className="mer-vie-icon-y lightthemeicon" />
												<Image src="assets/images/payment-red1.svg" width={100} height={100} alt="logo" className="mer-vie-icon-y darkthemeicon" />
											</td>

											<td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />BTC</td>
											<td className="breaktagtd"><b>2.00%</b></td>
											<td className="breaktagtd"><b>0.002</b></td>
											<td>0.00</td>
											{/* <td> 1233   </td> */}
											{/* <td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} className={`ang-down-y ${openRow === 'data1' ? 'acc-ang-rotate' : ''}`} /></td> */}
										</tr>
										<tr className="accordeon-content">
											<td colspan={6}>
												<div className={`collapse ${openRow === 'data1' ? 'show' : ''}`}>
													<Alert variant="warning " className='alrt-y red-btn'>
														<FontAwesomeIcon icon={faCircleExclamation} className="me-2" /> Invoice has been paid partially<br />
														<p className="fundsand-y">you can recalculate and send a new invoice to receive the remaining amount, or accept the received fundsand close the invoice</p>
													</Alert>
													<div className="accorddatacell mercntvew-y ">
														<div><h6><b className="t-black">Date</b><br /><span>3 January, 19.02</span></h6></div>
														<div className="">
															<div><h6><b className="t-black">Status<Badge bg="warning" className="mar-us-pid-y ms-2">Mark Us Paid</Badge></b><br />
																<span>partially paid
																</span>
															</h6></div>
														</div>
														<div><h6><b className="t-black">Type</b><br />

															<span><FontAwesomeIcon icon={faWallet} className="me-2" /> Linked invoice</span>
														</h6></div>
														<div><h6><b className="t-black">Merchant</b><br /><span>Firefox fun</span></h6></div>
														<div><h6><b className="t-black">Validity period</b><br /><span>Firefox fun</span></h6></div>

														<div><h6><b className="t-black">Invoice currency and Network</b><br /><span>USDT, Tron</span></h6></div>

														<div><h6><b className="t-black">Commission</b><br /><span>0.02400000 USDT</span></h6></div>

														<div><h6><b className="t-black">Network fee</b><br /><span>0.0.00000000</span></h6></div>
														<div className="d-flex ord-id-y">
															<div><h6><b className="t-black">Order Id</b><br /><span>456789 <FontAwesomeIcon icon={faCopy} className="ms-1" /></span></h6></div>
															<div className=""></div>
														</div>
														<div className="rec-amt-y"><h6><b className="t-black">Received amount</b><br /><span>4.00 USDT</span></h6></div>
														<div className="d-flex gap-2 frm-amq-y">
															<div><h6><b className="t-black">From</b><br /><span className="address-wrap-y">TXvAT6MfNmGobM9VxSEktPAmqo6wyzW9mt <FontAwesomeIcon icon={faCopy} className="ms-1" /></span></h6></div>
															<div className=""></div>
														</div>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</Table>
							</SimpleBar>
							<ResponsiveTable tableId="table1" />
						</div>
					</div>
				<div className="panelcontentbox purchasetable mobilepaneltablebox mt-3">
					<h2 className="heading-box border-0">Payment details history</h2>
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
					</div>
				</Container>
			</article>
			<Modal show={showModal1} onHide={handleCloseModal1}
				aria-labelledby="contained-modal-title-vcenter"
				centered
				className="modalbgt buymodal authtblemdlbox">
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">Your file is being created
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="buytradecell">
						<div className="tradepricebanner">
							<div className="tradepricebox">
								<Alert variant="" className='text-center'>
									<Image src="assets/images/check.svg" width={100} height={100} alt="logo" className="check-icon-y" />
									<p className="">Your file has been send sucessfully</p>
								</Alert>
							</div>
						</div>
					</div>
					<Form className="siteformbg">

						<div className="text-center">
							<Link href="/" className="btn sitebtn ms-1 w-100" id="buy_cryptobtn">Ok</Link>
						</div>
					</Form>

				</Modal.Body>
			</Modal>
			<Modal show={showModal2} onHide={handleCloseModal2}
				aria-labelledby="contained-modal-title-vcenter"
				centered
				className="modalbgt buymodal authtblemdlbox">
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">Your file is being created
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="buytradecell">
						<div className="tradepricebanner">
							<div className="tradepricebox">
								<Form className="siteformbg">
									<Form.Group className="form-group">
										<Form.Label>Email Address to send the file to </Form.Label>
										<Form.Control type="text" name="" id="email" placeholder='sm***t@g*.com' />
									</Form.Group>
									{/* <Form.Group className="form-group">
										<FormCheck type="checkbox" id="terms-agreement" label="sm***t@g*.com" />
									</Form.Group> */}
								</Form>
							</div>
						</div>
					</div>
					<Form className="siteformbg">

						<div className="text-center">
							<Link href="/" className="btn sitebtn ms-1 w-100" id="buy_cryptobtn">Send</Link>
						</div>
					</Form>

				</Modal.Body>
			</Modal>
			<Userfooter />


		</div>
	);
}

export default Merchantview;