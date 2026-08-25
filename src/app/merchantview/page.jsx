"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { Container, Image, Table, Button, Form, Nav, Badge, NavDropdown, Accordion, FormCheck, Tab, Alert, OverlayTrigger, Tooltip, InputGroup, Modal, Row, Col } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEye, faSortDown, faAngleDown, faCircleExclamation, faCheck, faBook, faCopy, faSearch, faMagnifyingGlass, faBookOpen, faWallet, faInfoCircle,faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';
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
	const [showModal3, setShowModal3] = useState(false);
	const handleShowModal1 = () => setShowModal1(true);
	const handleCloseModal1 = () => setShowModal1(false);

	const handleShowModal3 = () => setShowModal3(true);
	const handleCloseModal3 = () => setShowModal3(false);

	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [openRow, setOpenRow] = useState(null);
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
					<div className="boxtabb tabrightbox">
						<Nav className="nav nav-tabs tabbanner border-0" role="tablist">
							<Nav.Item className="nav-item"><Nav.Link href="/businesswallet">Overview</Nav.Link></Nav.Item>
							<Nav.Item className="nav-item"><Nav.Link href="/merchant" className="active">Merchant</Nav.Link></Nav.Item>
							<Nav.Item className="nav-item"><Nav.Link href="/businesstransfer">Transfer</Nav.Link></Nav.Item>
							<Nav.Item className="nav-item"><Nav.Link href="/businesssend">Send</Nav.Link></Nav.Item>
						</Nav>
					</div>
				</Container>
			</div>
			<article className="gridparentbox merchantpage grd-part-mercht-y">
				<Container className="sitecontainer">
					<div className="panelcontentbox tun-ove-y">
						<div className="wlltpageblnce">
							<div className="balanceshowt totblance">
								<div className="total-turn-over-y mb-2">
									<div>
										<div className="inc-fr-tdy-y">
											<h5>Income for today<span className="ps-2"><FontAwesomeIcon icon={faEye} /></span></h5>
											<h4 className="h4">$ 0.00000
											</h4>
										</div>
									</div>
									<div>
										<div className="inc-fr-tdy-y">
											<h5>Total Turnover<span className="ps-2"><FontAwesomeIcon icon={faEye} /></span></h5>
											<h4 className="h4">$ 0.00000</h4>
											{/* <span className="h5"><NavDropdown title={<div className="">USD <FontAwesomeIcon icon={faSortDown} /></div>} id="basic-nav-dropdown">
												<NavDropdown.Item as={Link} href="#">USD</NavDropdown.Item>
												<NavDropdown.Item as={Link} href="#">INR</NavDropdown.Item>
												<NavDropdown.Item as={Link} href="#">TRX</NavDropdown.Item>
											</NavDropdown></span> */}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="tabrightbox mecrcointabb">
							<Link href="/merchantlink" id="paymentlinkbtn" className="btn borderbtn btn-sm"><span className="pe-2">
								<FontAwesomeIcon icon={faMagnifyingGlassDollar} /></span>Missing Fund Search</Link>
							<Link href="/merchantsettings" id="settingbtn" className="btn borderbtn btn-sm mx-2">Merchant Settings</Link>
							<Link href="/merchantlink" id="paymentlinkbtn" className="btn borderbtn btn-sm ">Payment by Link</Link>
						</div>
					</div>
					<div className="wllettable panelcontentbox mt-3">
						<Tab.Container defaultActiveKey="payment">
							<div className="innerpagetab">
								<Nav className="nav nav-tabs tabbanner" role="tablist">
									<Nav.Item className="nav-item"><Nav.Link eventKey="payment">Payments</Nav.Link></Nav.Item>
									<Nav.Item className="nav-item"><Nav.Link eventKey="commission">Commissions</Nav.Link></Nav.Item>
								</Nav>
							</div>
							<Tab.Content className="mt-3">
								<Tab.Pane eventKey="payment">
									<div className="mb-3 historsysrch">
										<div className="searchfrmbox">
											<Form className="siteformbg srh-icon-y">
												<div className="searchfrm mer-viw-y">
													<div>
														<Form.Group className="form-group">
															<InputGroup>
																<Form.Control type="text" id="search" placeholder="Find Payments" />
																<div className="input-group-append">
																	<InputGroup.Text> <FontAwesomeIcon icon={faMagnifyingGlass} /> </InputGroup.Text>
																</div>
															</InputGroup>
														</Form.Group>

													</div>
													<div>
														<div className='mer-viw-flt-y w-100'>
															<Form.Group className="form-group wlletdropmenubox">
																<NavDropdown
																	title="Filter"
																	id="assetsdrp"
																	className="custom-dropdown"
																	onClick={(e) => e.stopPropagation()}
																>
																	<div onClick={(e) => e.stopPropagation()}>
																		<Accordion defaultActiveKey="0">
																			<Accordion.Item eventKey="0">
																				<Accordion.Header>Payment Type</Accordion.Header>
																				<Accordion.Body>
																					<FormCheck type="checkbox" label="API static wallet" />
																					<FormCheck type="checkbox" label="API Invoice" />
																					<FormCheck type="checkbox" label="Link static wallet" />
																					<FormCheck type="checkbox" label="Link Invoice" />
																				</Accordion.Body>
																			</Accordion.Item>
																			<Accordion.Item eventKey="1">
																				<Accordion.Header>Status Payment</Accordion.Header>
																				<Accordion.Body>
																					<FormCheck type="checkbox" label="Partially Paid" />
																					<FormCheck type="checkbox" label="Paid" />
																					<FormCheck type="checkbox" label="Active" />
																					<FormCheck type="checkbox" label="Expired" />
																				</Accordion.Body>
																			</Accordion.Item>
																			<Accordion.Item eventKey="2">
																				<Accordion.Header>Period</Accordion.Header>
																				<Accordion.Body>
																					<FormCheck type="radio" name="period" label="Yesterday" />
																					<FormCheck type="radio" name="period" label="Last 30 days" />
																					<Form.Group className="form-group dateinput">
																						<Flatpickr className="form-control" placeholder="Start date" value="Custom period" onChange={(startDate) => setStartDate(startDate)}
																							options={{ dateFormat: "Y-m-d", enableTime: false, }}
																						/>
																					</Form.Group>
																					<Form.Group className="form-group dateinput">
																						<Flatpickr className="form-control" placeholder="End date" value="Custom period" onChange={(endDate) => setStartDate(endDate)}
																							options={{ dateFormat: "Y-m-d", enableTime: false, }}
																						/>
																					</Form.Group>
																				</Accordion.Body>
																			</Accordion.Item>
																		</Accordion>
																		<hr />
																		<Form.Group className="form-group d-flex dflexbtn mb-0 gap-2">
																			<Button type="button" className="borderbtn btn-block btn-sm me-2" id="clearbtn">
																				Clear all
																			</Button>
																			<Button type="button" className="sitebtn btn-sm btn-block" id="submitbtn">
																				Apply
																			</Button>
																		</Form.Group>
																	</div>
																</NavDropdown>
															</Form.Group>
															<Form.Group className="form-group">
																<Button className="borderbtn me-0" id="downloadbtn" onClick={handleShowModal1} >Download Report</Button>
															</Form.Group>
														</div>

													</div>
													{/* <Form.Group className="form-group donlod-rept-y">
														<Button className="borderbtn" id="downloadbtn">Submit</Button>
													</Form.Group> */}
												</div>
											</Form>
										</div>
									</div>

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
														<th>Action</th>
													</tr>
												</thead>
												<tbody>
													<tr
														className="accordionrow acr-rw-y"
														onClick={() => setOpenRow(openRow === 'data1' ? null : 'data1')}
													>
														<td>
															<Image src="assets/images/payment-block-light.svg" width={100} height={100} alt="logo" className="mer-vie-icon-y lightthemeicon" />
															<Image src="assets/images/payment-block-dark.svg" width={100} height={100} alt="logo" className="mer-vie-icon-y darkthemeicon" />
														</td>

														<td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />BTC</td>
														<td className="breaktagtd"><b>2.00%</b></td>
														<td className="breaktagtd"><b>0.002</b></td>
														<td>0.00</td>
														<td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} className={`ang-down-y ${openRow === 'data1' ? 'acc-ang-rotate' : ''}`} /></td>
													</tr>
													<tr className="accordeon-content">
														<td colspan={6}>
															<div className={`accordion-collpse-y ${openRow === 'data1' ? 'open' : ''}`}>
																<Alert variant="warning" className='alrt-y red-btn'>
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
																		{/* <span><FontAwesomeIcon icon={faBook} className="me-2" /> Linked invoice</span> */}
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
																	<div className="">
																		<div><h6><b className="t-black">From</b><br /><span className="address-wrap-y">TXvAT6MfNmGobM9VxSEktPAmqo6wyzW9mt <FontAwesomeIcon icon={faCopy} className="ms-1" /></span></h6></div>
																		<div className=""></div>
																	</div>
																	<div className='text-start'>
																		<Button className="borderbtn btn-sm me-2" id="showmore" >Show More</Button>
																		<Button className="sitebtn btn-sm" id="refund" onClick={handleShowModal3} >Refund</Button>
																	</div>
																</div>
															</div>
														</td>
													</tr>
													<tr
														className="accordionrow acr-rw-y"
														onClick={() => setOpenRow(openRow === 'data2' ? null : 'data2')}
													>
														<td>
															<Image src="assets/images/payment-yellow.svg" width={100} height={100} alt="logo" className="mer-vie-icon-y lightthemeicon" />
															<Image src="assets/images/payment-yellow1.svg" width={100} height={100} alt="logo" className="mer-vie-icon-y darkthemeicon" />
														</td>
														<td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />BTC</td>
														<td className="breaktagtd"><b>2.00%</b></td>
														<td className="breaktagtd"><b>0.002</b></td>
														<td>0.00</td>
														<td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} className={`ang-down-y ${openRow === 'data2' ? 'acc-ang-rotate' : ''}`} /></td>
													</tr>
													<tr className="accordeon-content">
														<td colspan={6}>
															<div className={`accordion-collpse-y ${openRow === 'data2' ? 'open' : ''}`}>
																<Alert variant="warning " className='alrt-y yellow-btn'>
																	<FontAwesomeIcon icon={faCircleExclamation} className="me-3" /> Invoice has expired<br />
																	<p className="fund-sand-y">Create a new invoice to accept payment</p>
																</Alert>
																<div className="accorddatacell mercntvew-y">
																	<div><h6><b className="t-black">Date</b><br /><span>7 January, 13.15</span></h6></div>
																	<div className="">
																		<div><h6><b className="t-black">Status<Badge bg="warning" className="mar-us-pid-y ms-2">Mark Us Paid</Badge></b><br />
																			<span>partially paid
																			</span>
																		</h6></div>
																	</div>
																	<div><h6><b className="t-black">Type</b><br /><span><FontAwesomeIcon icon={faBook} className="me-2" /> Linked invoice</span></h6></div>
																	<div><h6><b className="t-black">Merchant</b><br /><span>Firefox fun</span></h6></div>
																	<div><h6><b className="t-black">Commission</b><br /><span>0.02400000 USDT</span></h6></div>
																	<div className="d-flex ord-id-y">
																		<div><h6><b className="t-black">Order Id</b><br /><span>456789 <FontAwesomeIcon icon={faCopy} className="ms-1" /></span></h6></div>
																		<div className=""></div>
																	</div>
																	<div className="d-flex">
																		<div><h6><b className="t-black">Payment id</b><br /><span className="address-wrap-y">7b8fd387-e4f4-4afe-ba5a-14a4f44d9f6b <FontAwesomeIcon icon={faCopy} className="ms-1" /></span></h6></div>

																	</div>
																	<div className="d-flex">
																		<div><h6><b className="t-black">Received to</b><br /><span className="address-wrap-y">1tc1q2j6wet6y4g0c0nf69ykseyq8yrnuhrnhv7jp6d<FontAwesomeIcon icon={faCopy} className="ms-1" /></span></h6></div>
																	</div>
																	

																</div>
															</div>
														</td>
													</tr>
													<tr
														className="accordionrow acr-rw-y"
														onClick={() => setOpenRow(openRow === 'data6' ? null : 'data6')}
													>
														<td>
															<Image src="assets/images/payment-green.svg" width={100} height={100} alt="logo" className="mer-vie-icon-y lightthemeicon" />
															<Image src="assets/images/payment-green1.svg" width={100} height={100} alt="logo" className="mer-vie-icon-y darkthemeicon" />
														</td>
														<td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />BTC</td>
														<td className="breaktagtd"><b>2.00%</b></td>
														<td className="breaktagtd"><b>0.002</b></td>
														<td>0.00</td>
														<td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} className={`ang-down-y ${openRow === 'data6' ? 'acc-ang-rotate' : ''}`} /></td>
													</tr>

													<tr className="accordeon-content">
														<td colspan={6}>
															<div className={`accordion-collpse-y ${openRow === 'data6' ? 'open' : ''}`}>
																<Alert variant="warning " className='alrt-y grn-btn'>
																	<FontAwesomeIcon icon={faCircleExclamation} className="me-2" /> Invoice has been paid partially<br />
																	<p className="fundsand-y">you can recalculate and send a new invoice to receive the remaining amount, or accept the received fundsand close the invoice</p>
																</Alert>
																<div className="accorddatacell mercntvew-y">
																	<div><h6><b className="t-black">Date</b><br /><span>11 January, 16.16</span></h6></div>
																	<div className="">
																		<div><h6><b className="t-black">Status<Badge bg="warning" className="mar-us-pid-y ms-2">Mark Us Paid</Badge></b><br />
																			<span>partially paid
																			</span>
																		</h6></div>
																	</div>
																	<div><h6><b className="t-black">Type</b><br /><span><FontAwesomeIcon icon={faBook} className="me-2" /> Static Wallet</span></h6></div>
																	<div><h6><b className="t-black">Merchant</b><br /><span>Firefox fun</span></h6></div>
																	<div><h6><b className="t-black">Invoice currency and network</b><br /><span>TRX, Tron</span></h6></div>
																	<div><h6><b className="t-black">Commission</b><br /><span>20.0802102 TRX</span></h6></div>
																	<div><h6><b className="t-black">Networkfee</b><br /><span>0.00000000</span></h6></div>
																	<div className="d-flex">
																		<div><h6><b className="t-black">From</b><br /><span className="address-wrap-y">7b8fd387-e4f4-4afe-ba5a-14a4f44d9f6b <FontAwesomeIcon icon={faCopy} className="ms-1" /></span></h6></div>
																	</div>
																	<div className="d-flex">
																		<div><h6><b className="t-black">Hash</b><br /><span className="address-wrap-y">1tc1q2j6wet6y4g0c0nf69ykseyq8yrnuhrnhv7jp6d<FontAwesomeIcon icon={faCopy} className="ms-1" /></span></h6></div>

																	</div>
																	<div className="d-flex">
																		<div><h6><b className="t-black">Received to</b><br /><span className="address-wrap-y">1tc1q2j6wet6y4g0c0nf69ykseyq8yrnuhrnhv<FontAwesomeIcon icon={faCopy} className="ms-1" /></span></h6></div>

																	</div>
																</div>
															</div>
														</td>
													</tr>
													<tr
														className="accordionrow acr-rw-y"
														onClick={() => setOpenRow(openRow === 'data7' ? null : 'data7')}
													>
														<td>
															<Image src="assets/images/payment-black.svg" width={100} height={100} alt="logo" className="mer-vie-icon-y lightthemeicon" />
															<Image src="assets/images/payment-black1.svg" width={100} height={100} alt="logo" className="mer-vie-icon-y darkthemeicon" />
														</td>
														<td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />BTC</td>
														<td className="breaktagtd"><b>2.00%</b></td>
														<td className="breaktagtd"><b>0.002</b></td>
														<td>0.00</td>
														<td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} className={`ang-down-y ${openRow === 'data7' ? 'acc-ang-rotate' : ''}`} /></td>
													</tr>

													<tr className="accordeon-content">
														<td colspan={6}>
															<div className={`collapse ${openRow === 'data7' ? 'show' : ''}`}>
																<div className="accorddatacell mercntvew-y ">
																	<div><h6><b className="t-black">Date</b><br /><span>11 January, 16.16</span></h6></div>
																	<div className="">
																		<div><h6><b className="t-black">Status<Badge bg="warning" className="mar-us-pid-y ms-2">Mark Us Paid</Badge></b><br />
																			<span>partially paid
																			</span>
																		</h6></div>
																	</div>
																	<div><h6><b className="t-black">Type</b><br /><span><FontAwesomeIcon icon={faBook} className="me-2" /> Static Wallet</span></h6></div>
																	<div><h6><b className="t-black">Merchant</b><br /><span>Firefox fun</span></h6></div>

																	<div><h6><b className="t-black">Invoice currency and network</b><br /><span>TRX, Tron</span></h6></div>
																	<div><h6><b className="t-black">Commission</b><br /><span>20.0802102 TRX</span></h6></div>
																	<div><h6><b className="t-black">Networkfee</b><br /><span>0.00000000</span></h6></div>
																	<div className="d-flex">
																		<div><h6><b className="t-black">From</b><br /><span className="address-wrap-y">7b8fd387-e4f4-4afe-ba5a-14a4f44d9f6b <FontAwesomeIcon icon={faCopy} className="ms-1" /></span></h6></div>

																	</div>
																	<div className="d-flex">
																		<div><h6><b className="t-black">Hash</b><br /><span className="address-wrap-y">1tc1q2j6wet6y4g0c0nf69ykseyq8yrnuhrnhv7jp6d<FontAwesomeIcon icon={faCopy} className="ms-1" /></span></h6></div>

																	</div>
																	<div className="d-flex">
																		<div><h6><b className="t-black">Received to</b><br /><span className="address-wrap-y">1tc1q2j6wet6y4g0c0nf69ykseyq8yrnuhrnhv<FontAwesomeIcon icon={faCopy} className="ms-1" /></span></h6></div>

																	</div>
																</div>
															</div>
														</td>
													</tr>
													<tr
														className="accordionrow acr-rw-y"
														onClick={() => setOpenRow(openRow === 'data8' ? null : 'data8')}
													>
														<td>
															<Image src="assets/images/payment-greenarrw.svg" width={100} height={100} alt="logo" className="mer-vie-icon-y lightthemeicon" />
															<Image src="assets/images/payment-greenarrw1.svg" width={100} height={100} alt="logo" className="mer-vie-icon-y darkthemeicon" />
														</td>
														<td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />BTC</td>
														<td className="breaktagtd"><b>2.00%</b></td>
														<td className="breaktagtd"><b>0.002</b></td>
														<td>0.00</td>
														<td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} className={`ang-down-y ${openRow === 'data8' ? 'acc-ang-rotate' : ''}`} /></td>
													</tr>

													<tr className="accordeon-content">
														<td colspan={6}>
															<div className={`accordion-collpse-y ${openRow === 'data8' ? 'open' : ''}`}>
																<div className="accorddatacell mercntvew-y ">
																	<div><h6><b className="t-black">Date</b><br /><span>11 January, 16.16</span></h6></div>
																	<div className="">
																		<div><h6><b className="t-black">Status<Badge bg="warning" className="mar-us-pid-y ms-2">Mark Us Paid</Badge></b><br />
																			<span>partially paid
																			</span>
																		</h6></div>
																	</div>
																	<div><h6><b className="t-black">Type</b><br /><span><FontAwesomeIcon icon={faBook} className="me-2" /> Static Wallet</span></h6></div>
																	<div><h6><b className="t-black">Merchant</b><br /><span>Firefox fun</span></h6></div>

																	<div><h6><b className="t-black">Invoice currency and network</b><br /><span>TRX, Tron</span></h6></div>
																	<div><h6><b className="t-black">Commission</b><br /><span>20.0802102 TRX</span></h6></div>
																	<div><h6><b className="t-black">Networkfee</b><br /><span>0.00000000</span></h6></div>
																	<div className="d-flex">
																		<div><h6><b className="t-black">From</b><br /><span className="address-wrap-y">7b8fd387-e4f4-4afe-ba5a-14a4f44d9f6b <FontAwesomeIcon icon={faCopy} className="ms-1" /></span></h6></div>

																	</div>
																	<div className="d-flex">
																		<div><h6><b className="t-black">Hash</b><br /><span className="address-wrap-y">1tc1q2j6wet6y4g0c0nf69ykseyq8yrnuhrnhv7jp6d<FontAwesomeIcon icon={faCopy} className="ms-1" /></span></h6></div>

																	</div>
																	<div className="d-flex">
																		<div><h6><b className="t-black">Received to</b><br /><span className="address-wrap-y">1tc1q2j6wet6y4g0c0nf69ykseyq8yrnuhrnhv<FontAwesomeIcon icon={faCopy} className="ms-1" /></span></h6></div>

																	</div>
																</div>
															</div>
														</td>
													</tr>
													{/* <tr className="nodata">
														<td colSpan={5}>
															<Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
															<p className="mb-0">No transactions yet</p>
															<p>Create a <Link href="/merchantlink" className="alink">Payment Link</Link> or set up an <Link href="#" className="alink">API Integration</Link></p>
														</td>
													</tr> */}

												</tbody>
											</Table>
										</SimpleBar>
										<ResponsiveTable tableId="table1" />
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey="commission">
									<div className="mb-3 historsysrch">
										<div className="searchfrmbox">
											<Form className="siteformbg">
												<div className="searchfrm">
													<Form.Group className="form-group">
														<Form.Control placeholder="Search coins" id="search" />
													</Form.Group>
												</div>
											</Form>
										</div>
									</div>
									<div className="bordertablebox">
										<SimpleBar className="table-responsive sitescroll">
											<Table className="sitetable table-responsive-stack historytable" id="table2">
												<thead>
													<tr>
														<th>Coin</th>
														<th>Payment Commission</th>
														<th>Fixed Withdrawal Commission</th>
														<th>Withdrawal Commission</th>
														<th></th>
														{/* <th>Min. - Max.withdrawal</th>
														<th>Min. - Max.receive</th>
														<th>confirmation Needed</th> */}
													</tr>
												</thead>
												<tbody>
													{/* <tr className="nodata">
												<td colSpan={6}>
													<Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
													<p className="mb-0">No active invoices</p>
												</td>
											</tr>  */}
													<tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data1" data-bs-parent="#accordion" aria-expanded="false">
														<td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />BTC</td>
														<td className="breaktagtd"><b>2.00%</b></td>
														<td className="breaktagtd"><b>0.002</b></td>
														<td>0.00</td>
														<td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
													</tr>
													<tr className="accordeon-content">
														<td colspan={6}>
															<div id="data1" className="collapse">
																<div className="accorddatacell d-flex">
																	<div><h6><b className="t-black">Min. - Max.withdrawal</b><br /><span>0.1 - 1000000</span></h6></div>
																	<div><h6><b className="t-black">Min. - Max.receive</b><br /><span>0.1 - 1000000</span></h6></div>
																	<div><h6><b className="t-black">confirmation Needed</b><br /><span>1 block</span></h6></div>
																</div>
															</div>
														</td>
													</tr>
													<tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data3" data-bs-parent="#accordion" aria-expanded="false">
														<td><Image src="assets/images/color/usdt.svg" width={50} height={50} alt="coin" className="coinlisticon" />USDT</td>
														<td className="breaktagtd"><b>2.00%</b></td>
														<td className="breaktagtd"><b>0.002</b></td>
														<td>0.00</td>
														<td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
													</tr>
													<tr className="accordeon-content">
														<td colspan={6}>
															<div id="data3" className="collapse">
																<div className="accorddatacell d-flex">
																	<div><h6><b className="t-black">Min. - Max.withdrawal</b><br /><span>0.1 - 1000000</span></h6></div>
																	<div><h6><b className="t-black">Min. - Max.receive</b><br /><span>0.1 - 1000000</span></h6></div>
																	<div><h6><b className="t-black">confirmation Needed</b><br /><span>1 block</span></h6></div>
																</div>
															</div>
														</td>
													</tr>
													<tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data4" data-bs-parent="#accordion" aria-expanded="false">
														<td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" />SOL</td>
														<td className="breaktagtd"><b>2.00%</b></td>
														<td className="breaktagtd"><b>0.002</b></td>
														<td>0.00</td>
														<td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
													</tr>
													<tr className="accordeon-content">
														<td colspan={6}>
															<div id="data4" className="collapse">
																<div className="accorddatacell d-flex">
																	<div><h6><b className="t-black">Min. - Max.withdrawal</b><br /><span>0.1 - 1000000</span></h6></div>
																	<div><h6><b className="t-black">Min. - Max.receive</b><br /><span>0.1 - 1000000</span></h6></div>
																	<div><h6><b className="t-black">confirmation Needed</b><br /><span>1 block</span></h6></div>
																</div>
															</div>
														</td>
													</tr>
													<tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data5" data-bs-parent="#accordion" aria-expanded="false">
														<td><Image src="assets/images/color/eth.svg" width={50} height={50} alt="coin" className="coinlisticon" />ETH</td>
														<td className="breaktagtd"><b>2.00%</b></td>
														<td className="breaktagtd"><b>0.002</b></td>
														<td>0.00</td>
														<td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
													</tr>
													<tr className="accordeon-content">
														<td colspan={6}>
															<div id="data5" className="collapse">
																<div className="accorddatacell d-flex">
																	<div><h6><b className="t-black">Min. - Max.withdrawal</b><br /><span>0.1 - 1000000</span></h6></div>
																	<div><h6><b className="t-black">Min. - Max.receive</b><br /><span>0.1 - 1000000</span></h6></div>
																	<div><h6><b className="t-black">confirmation Needed</b><br /><span>1 block</span></h6></div>
																</div>
															</div>
														</td>
													</tr>
													<tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data6" data-bs-parent="#accordion" aria-expanded="false">
														<td><Image src="assets/images/color/bch.svg" width={50} height={50} alt="coin" className="coinlisticon" />BCH</td>
														<td className="breaktagtd"><b>2.00%</b></td>
														<td className="breaktagtd"><b>0.002</b></td>
														<td>0.00</td>
														<td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
													</tr>
													<tr className="accordeon-content">
														<td colspan={6}>
															<div id="data6" className="collapse">
																<div className="accorddatacell d-flex">
																	<div><h6><b className="t-black">Min. - Max.withdrawal</b><br /><span>0.1 - 1000000</span></h6></div>
																	<div><h6><b className="t-black">Min. - Max.receive</b><br /><span>0.1 - 1000000</span></h6></div>
																	<div><h6><b className="t-black">confirmation Needed</b><br /><span>1 block</span></h6></div>
																</div>
															</div>
														</td>
													</tr>
													{/* <tr>
														<td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />BTC</td>
														<td><b>2.00%</b></td>
														<td>0.002</td>
														<td>0.00</td>
														<td>0.1 - 1000000</td>
														<td>0.1 - 1000000</td>
														<td>1 block </td>
													</tr>
													<tr>
														<td><Image src="assets/images/color/usdt.svg" width={50} height={50} alt="coin" className="coinlisticon" />USDT</td>
														<td><b>2.00%</b></td>
														<td>0.002</td>
														<td>0.00</td>
														<td>0.1 - 1000000</td>
														<td>0.1 - 1000000</td>
														<td>1 block </td>
													</tr>
													<tr>
														<td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" />SOL</td>
														<td><b>2.00%</b></td>
														<td>0.002</td>
														<td>0.00</td>
														<td>0.1 - 1000000</td>
														<td>0.1 - 1000000</td>
														<td>1 block </td>
													</tr>
													<tr>
														<td><Image src="assets/images/color/eth.svg" width={50} height={50} alt="coin" className="coinlisticon" />ETH</td>
														<td><b>2.00%</b></td>
														<td>0.002</td>
														<td>0.00</td>
														<td>0.1 - 1000000</td>
														<td>0.1 - 1000000</td>
														<td>1 block </td>
													</tr>
													<tr>
														<td><Image src="assets/images/color/bch.svg" width={50} height={50} alt="coin" className="coinlisticon" />BCH</td>
														<td><b>2.00%</b></td>
														<td>0.002</td>
														<td>0.00</td>
														<td>0.1 - 1000000</td>
														<td>0.1 - 1000000</td>
														<td>1 block </td>
													</tr> */}
												</tbody>
											</Table>
										</SimpleBar>
										<ResponsiveTable tableId="table2" />
									</div>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
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

			<Modal show={showModal3} onHide={handleCloseModal3}
				aria-labelledby="contained-modal-title-vcenter"
				centered
				className="modalbgt buymodal authtblemdlbox">
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">Refund Overpayment
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="buytradecell">
						<div className="tradepricebanner">
							<div className="tradepricebox">
								<Form className="siteformbg">
									<div className="">
										<div className="loginformbox">
											<div className="logcenterbox">
												<div className="formcontentbox">
													<Form.Group className="form-group">
														<Form.Label>Email Address </Form.Label>
														<Form.Control type="text" name="" id="email" />
													</Form.Group>
												</div>
											</div>
										</div>
									</div>
									<div className="mt-2 mb-3">
										<FormCheck type="radio" id="terms-agreement" label={<>Commission from business balance{' '}</> } />
									</div>
								</Form>
							</div>
						</div>
					</div>
					<Form className="siteformbg">

						<div className="text-center">
							<Link href="/" className="btn sitebtn ms-1 w-100" id="buy_cryptobtn">Refund</Link>
						</div>
					</Form>

				</Modal.Body>
			</Modal>
			<Userfooter />


		</div>
	);
}

export default Merchantview;