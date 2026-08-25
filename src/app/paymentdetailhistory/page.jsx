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