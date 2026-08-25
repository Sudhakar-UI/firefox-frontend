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
	Alert, FormControl, FormCheck, InputGroup, FormGroup, Row, Col,
} from "react-bootstrap";
import Userheader from "../components/Userheader";
import Userfooter from "../components/Userfooter";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ResponsiveTable from "../components/ResponsiveTable";
import Leftsidemenu from "../components/Leftsidemenu";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Merchant = () => {
	const [showModal1, setShowModal1] = useState(false);
	const handleShowModal1 = () => setShowModal1(true);
	const handleCloseModal1 = () => setShowModal1(false);

	const [showModal2, setShowModal2] = useState(false);
	const handleShowModal2 = () => setShowModal2(true);
	const handleCloseModal2 = () => setShowModal2(false);

	return (
		<div className="pagecontent gridpagecontent innerpagegrid merchant-x missingfunddetails-pages">
			<div className="backgroundoverlay" id="backgroundoverlay"></div>
			<Userheader />
			<Leftsidemenu />
			<div className="innerpagecontent">
				<Container className="sitecontainer">
					<h2 className="h2">Missingfund details</h2>
					<div className="tabrightbox">
						<Link href="/missingfund" className="btn sitebtn btn-sm" id="backbtn">Back</Link>
					</div>
				</Container>
			</div>

			<article className="gridparentbox">
				<Container className="sitecontainer">
					<div className="panelcontentbox mt-3">
						<Row className='mb-2'>
							<Col xl={12} lg={12} md={12}>
								<Form className="siteformbg">
									<div className="searchfrm">
										<Form.Group className="form-group">
											<InputGroup>
												<Form.Control type="text" id="search" placeholder="Find History" />
												<div className="input-group-append">
													<InputGroup.Text> <FontAwesomeIcon icon={faMagnifyingGlass} /> </InputGroup.Text>
												</div>
											</InputGroup>
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
											<Form.Group className="form-group mb-0">
												<Button className="btn sitebtn btn me-1" id="clearbtn">Clear</Button>

											</Form.Group>
										</div>
									</div>
								</Form>
							</Col>
						</Row>

						<div className="bordertablebox">
							<SimpleBar className="table-responsive sitescroll">
								<Table className="sitetable table-responsive-stack historytable" id="table1">
									<thead>
										<tr>
											<th>Search ID</th>
											<th>Choose Option</th>
											<th>Merchant ID</th>
											<th>Transaction Hash</th>
											<th>Deposit Address</th>
											<th>Message</th>
											<th>Terms & Conditions</th>
											<th>Current Status</th>
											<th>Date & Time</th>
											<th>Last Updated</th>

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
											<td className="breaktagtd">1234569874633</td>
											<td className="breaktagtd">1234569874633</td>
											<td className="breaktagtd">1234569874633</td>
											<td className="breaktagtd">1234569874633</td>
											<td><Badge bg="success">Completed</Badge></td>
											<td>18/01/2024, 05:05:00</td>
											<td>18/01/2024, 05:05:00</td>
										</tr>
										<tr>
											<td>1234567899</td>
											<td className="breaktagtd">Invoice</td>
											<td className="breaktagtd">1234569874633</td>
											<td className="breaktagtd">1234569874633</td>
											<td className="breaktagtd">1234569874633</td>
											<td className="breaktagtd">1234569874633</td>
											<td className="breaktagtd">Yes</td>
											<td><Badge bg="warning">Pending</Badge></td>
											<td>18/01/2024, 05:05:00</td>
											<td>18/01/2024, 05:05:00</td>
										</tr>
										<tr>
											<td>1234567899</td>
											<td className="breaktagtd">Static Wallet</td>
											<td className="breaktagtd">1234569874633</td>
											<td className="breaktagtd">1234569874633</td>
											<td className="breaktagtd">1234569874633</td>
											<td className="breaktagtd">1234569874633</td>
											<td className="breaktagtd">1234569874633</td>
											<td><Badge bg="danger">Cancelled</Badge></td>
											<td>18/01/2024, 05:05:00</td>
											<td>18/01/2024, 05:05:00</td>
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


		</div>
	);
};

export default Merchant;
