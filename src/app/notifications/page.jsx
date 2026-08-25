
"use client"
import React, { useState } from 'react'
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import Link from 'next/link';
import { Container, Form, Image, Table, InputGroup, Button, Row, Col, Nav, Tab, Modal, Badge, Pagination } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode, faExchange, faArrowUp, faArrowDown, faAngleDown, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import Leftsidemenu from '../components/Leftsidemenu';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../components/ResponsiveTable';
import "flatpickr/dist/themes/material_orange.css";
import Flatpickr from "react-flatpickr";

const Sendhistory = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [activePage, setActivePage] = useState(1);


	// const handlePageClick() = {
	// 	setActivePage
	// }

	return (
		<div className="pagecontent gridpagecontent innerpagegrid">
			<div className="backgroundoverlay" id="backgroundoverlay"></div>
			<Userheader />
			<Leftsidemenu />
			<div className="innerpagecontent">
				<Container className="sitecontainer">
					<h2 className="h2">All Notifications</h2>
					<div className="boxtabb tabrightbox">
						<Nav className="nav nav-tabs tabbanner border-0" role="tablist">
							{/* <Nav.Item className="nav-item"><Nav.Link href="/notifications" className="active">Read</Nav.Link></Nav.Item>
							<Nav.Item className="nav-item"><Nav.Link href="/notificationsunread">Unread</Nav.Link></Nav.Item> */}
						</Nav>
					</div>
				</Container>
			</div>
			<article className="gridparentbox">
				<Container className="sitecontainer">
					<div className="">
						<div className="panelcontentbox purchasetable mobilepaneltablebox mt-1">
							<Tab.Container defaultActiveKey="personaltrans">

								<Tab.Content>
									<Tab.Pane eventKey="personaltrans">
										<div className="bordertablebox">
											<SimpleBar className="table-responsive sitescroll">
												<Table className="sitetable table-responsive-stack historytable" id="table3">
													<thead>
														<tr>
															<th>No.</th>
															<th>Date&Time</th>
															<th>Title</th>
															{/* <th>Type</th> */}
															<th>Description</th>
															<th>Action</th>
														</tr>
													</thead>
													<tbody>
														{/* <tr className="nodata">
												<td colSpan={5}>
													<Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />No record found
												</td>
											</tr>   */}
														<tr>
															<td>1</td>
															<td>28.07.2025 06:26</td>
															<td>KYC Rejected</td>
															{/* <td><Badge bg="success">KYC</Badge></td> */}
															<td>Need to change the ID Type</td>
															<td><Button className="btn sitebtn btn-sm me-1" id="clearbtn">View</Button></td>

														</tr>
														<tr className='historytable-read'>
															<td>1</td>
															<td>28.07.2025 06:26</td>
															<td>KYC Rejected</td>
															{/* <td><Badge bg="success">KYC</Badge></td> */}
															<td className='text-wrap'>Need to change the ID Type Need to change the ID Type
																Need to change the ID Type
																Need to change the ID Type 	Need to change the ID Type
																Need to change the ID Type
																
															</td>
															<td><Button className="btn sitebtn btn-sm me-1" id="clearbtn">View</Button></td>
														</tr>
													</tbody>
												</Table>
											</SimpleBar>
											<ResponsiveTable tableId="table3" />
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="businesstrans">
										<div className="bordertablebox">
											<SimpleBar className="table-responsive sitescroll">
												<Table className="sitetable table-responsive-stack historytable" id="table4">
													<thead>
														<tr>
															<th>No.</th>
															<th>Date&Time</th>
															<th>Title</th>
															<th>Type</th>
															<th>Description</th>
															<th>Action</th>
														</tr>
													</thead>
													<tbody>
														{/* <tr className="nodata">
												<td colSpan={5}>
													<Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />No record found
												</td>
											</tr>   */}
														<tr>
															<td>1</td>
															<td>28.07.2025 06:26</td>
															<td>KYC Rejected</td>
															<td><Badge bg="success">KYC</Badge></td>
															<td>Need to change the ID Type</td>
															<td><Button className="btn sitebtn btn-sm me-1" id="clearbtn">View</Button></td>

														</tr>
														<tr>
															<td>1</td>
															<td>28.07.2025 06:26</td>
															<td>KYC Rejected</td>
															<td><Badge bg="success">KYC</Badge></td>
															<td>Need to change the ID Type</td>
															<td><Button className="btn sitebtn btn-sm me-1" id="clearbtn">View</Button></td>
														</tr>
													</tbody>
												</Table>

											</SimpleBar>
											<ResponsiveTable tableId="table4" />
										</div>
									</Tab.Pane>
								</Tab.Content>
							</Tab.Container>
							<Pagination>
								<Pagination.Prev />
								<Pagination.Item active={activePage === 1}>
									{1}
								</Pagination.Item>
								<Pagination.Item active={activePage === 2} >
									{2}
								</Pagination.Item>
								<Pagination.Item active={activePage === 3}>
									{3}
								</Pagination.Item>

								<Pagination.Next />
							</Pagination>

						</div>

					</div>
				</Container>
			</article>
			<Userfooter />

		</div>
	);
}
export default Sendhistory