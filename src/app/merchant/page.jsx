"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
	Container,
	Image,
	Table,
	Button,
	Form,
	Nav,
	Badge,
	Modal,
	Alert, FormControl, FormCheck, InputGroup, FormGroup
} from "react-bootstrap";
import Userheader from "../components/Userheader";
import Userfooter from "../components/Userfooter";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import ResponsiveTable from "../components/ResponsiveTable";
import Leftsidemenu from "../components/Leftsidemenu";

const Merchant = () => {
	const [showModal1, setShowModal1] = useState(false);
	const handleShowModal1 = () => setShowModal1(true);
	const handleCloseModal1 = () => setShowModal1(false);

	const [showModal2, setShowModal2] = useState(false);
	const handleShowModal2 = () => setShowModal2(true);
	const handleCloseModal2 = () => setShowModal2(false);

	return (
		<div className="pagecontent gridpagecontent innerpagegrid merchant-x">
			<div className="backgroundoverlay" id="backgroundoverlay"></div>
			<Userheader />
			<Leftsidemenu />
			<div className="innerpagecontent">
				<Container className="sitecontainer">
					<h2 className="h2">Merchants</h2>
					<div className="boxtabb tabrightbox">
						<Nav className="nav nav-tabs tabbanner border-0" role="tablist">
							<Nav.Item className="nav-item">
								<Nav.Link href="/businesswallet">Overview</Nav.Link>
							</Nav.Item>
							<Nav.Item className="nav-item">
								<Nav.Link href="/merchant" className="active">
									Merchant
								</Nav.Link>
							</Nav.Item>
							<Nav.Item className="nav-item">
								<Nav.Link href="/businesstransfer">Transfer</Nav.Link>
							</Nav.Item>
							<Nav.Item className="nav-item">
								<Nav.Link href="/businesssend">Send</Nav.Link>
							</Nav.Item>
						</Nav>
					</div>
				</Container>
			</div>

			<article className="gridparentbox">
				<Container className="sitecontainer">
					<div className="panelcontentbox mt-3">
						<h2 className="heading-box">List of Merchants</h2>
						<div className="tabrightbox merchttabright">
							<Button
								type="button"
								id="createmerchantbtn"
								className="borderbtn btn-block"
								onClick={handleShowModal1}
							>
								Create Merchant
							</Button>
						</div>

						<div className="bordertablebox mt-3">
							<SimpleBar className="table-responsive sitescroll">
								<Table
									className="sitetable table-responsive-stack historytable"
									id="table1"
								>
									<thead>
										<tr>
											<th>Name</th>
											<th>Income for today</th>
											<th>Total turnover</th>
											<th>Status</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										{/* <tr className="nodata">
												<td colSpan={4}>
													<Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
													No record found
												</td>
											</tr>  */}
										<tr>
											<td>testaccount</td>
											<td className="breaktagtd"><b>$0<br /><span className="t-green">0%</span></b></td>
											<td>$0</td>
											<td><Badge bg="warning" className="newbdgebg"><FontAwesomeIcon icon={faCheckCircle} /> New</Badge></td>
											<td><Link href="/merchantview" id="merchantviewbtn" className="btn borderbtn btn-sm me-1">View</Link> <div onClick={handleShowModal2} className="btn borderbtn delete-btn-td btn-sm me-1">Delete</div></td>
										</tr>
										<tr>
											<td>test</td>
											<td className="breaktagtd"><b>$0<br /><span className="t-green">0%</span></b></td>
											<td>$0</td>
											<td><Badge bg="warning" className="newbdgebg"><FontAwesomeIcon icon={faCheckCircle} /> New</Badge></td>
											<td><Link href="/merchantview" id="merchantviewbtn" className="btn borderbtn btn-sm me-1">View</Link><div onClick={handleShowModal2} className="btn borderbtn delete-btn-td btn-sm me-1">Delete</div></td>
										</tr>
										<tr>
											<td>test</td>
											<td className="breaktagtd"><b>$0<br /><span className="t-green">0%</span></b></td>
											<td>$0</td>
											<td><Badge bg="warning" className="newbdgebg"><FontAwesomeIcon icon={faCheckCircle} /> New</Badge></td>
											<td><Link href="/merchantview" id="merchantviewbtn" className="btn borderbtn btn-sm me-1">View</Link><div onClick={handleShowModal2} className="btn borderbtn delete-btn-td btn-sm me-1">Delete</div></td>
										</tr>
										<tr>
											<td>test</td>
											<td className="breaktagtd"><b>$0<br /><span className="t-green">0%</span></b></td>
											<td>$0</td>
											<td><Badge bg="warning" className="newbdgebg"><FontAwesomeIcon icon={faCheckCircle} /> New</Badge></td>
											<td><Link href="/merchantview" id="merchantviewbtn" className="btn borderbtn btn-sm me-1">View</Link><div onClick={handleShowModal2} className="btn borderbtn delete-btn-td btn-sm me-1">Delete</div></td>
										</tr>
										<tr>
											<td>test</td>
											<td className="breaktagtd"><b>$0<br /><span className="t-green">0%</span></b></td>
											<td>$0</td>
											<td><Badge bg="warning" className="newbdgebg"><FontAwesomeIcon icon={faCheckCircle} /> New</Badge></td>
											<td><Link href="/merchantview" id="merchantviewbtn" className="btn borderbtn btn-sm me-1">View</Link><div onClick={handleShowModal2} className="btn borderbtn delete-btn-td btn-sm me-1">Delete</div></td>
										</tr>
									</tbody>
								</Table>
							</SimpleBar>
							<ResponsiveTable tableId="table1" />
						</div>
					</div>
				</Container>
			</article>

			<Userfooter />

			<Modal
				className="modalbgt merchant-modalbgt"
				show={showModal1}
				onHide={handleCloseModal1}
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>Create New Merchant</Modal.Title>
				</Modal.Header>
				<Alert variant="success" className="text-center mb-0">
					<h6>Congratulations!</h6>
					<p className="mb-0">
						You have created a new merchant <b>"sdfsdf"</b>
					</p>
				</Alert>
				<Modal.Body>
					<div className="mb-3">
						<h6>Pass project moderation</h6>
						<p className="mb-0">
							Get the API key. Create one-time payment links and post them
							anywhere or send them to each of your customers. You can also use
							the widget on your website.
						</p>
					</div>
					<div className="mb-3">
						<h6>Integrate Heleket via API</h6>
						<p className="mb-0">
							Automatically generate a payment directly on your website for your
							customers to see.
						</p>
					</div>
					<div className="text-center">
						<Link href="/" className="sitebtn btn-block text-decoration-none">
							Go to setup
						</Link>
					</div>


				</Modal.Body>
			</Modal>


			<Modal
				className="modalbgt merchant-modalbgt"
				show={showModal2}
				onHide={handleCloseModal2}
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>Delete Merchant</Modal.Title>
				</Modal.Header>
				<Modal.Body className="text-center">
					<p>All merchant data will be permanently deleted and can't be restored.Are you sure you want to delete this merchant?</p>

					<div className="del-alert text-start">
						<div className=" d-flex align-items-start gap-3">
							<Image className="wran-img" src="assets/images/warning.svg" width={50} height={50} alt="nodata" />

							<div>
								<span className="warn-tt">Deleting this merchant account will remove its Invoice or Static Wallet and API keys. Future deposits to the existing wallet address may not be tracked. 
									<br /> <span className="bold-red-tt">Do not send new deposits to associated address.</span> </span>
								<FormGroup className="checkboxlabelbg checkboxlabelbg-wran mt-2">
									<InputGroup className=" d-flex  gap-3">
										<FormCheck type="checkbox" label="Invoice Wallet" id='sureinvoice' />
										<FormCheck type="checkbox" label="Static Wallet" id='surestatic' />
									</InputGroup>
								</FormGroup>
							</div>
						</div>
					</div>
					<hr />
					<FormGroup className="checkboxlabelbg-v mb-3">
						<div className="d-flex align-items-center">
							<Form.Check
								type="checkbox"
								id="acceptall"
							/>

							<img
								src="/assets/images/security-new.svg"
								alt="shield"
								className="shield-icon mx-1"
							/>

							<label htmlFor="acceptall" className="mb-0">
								I Accept All Terms
							</label>
						</div>
					</FormGroup>
					<div className="d-flex justify-content-center gap-3">

						<Button variant="secondary" className="btn btn-block  borderbtn   btn-sm me-1" onClick={handleCloseModal2}>
							Cancel
						</Button>
						<Button variant="danger" className="btn btn-block  sitebtn btn-sm me-1" onClick={handleCloseModal2}>
							Delete
						</Button>
					</div>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default Merchant;
