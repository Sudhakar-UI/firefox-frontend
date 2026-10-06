"use client"
import React, { useState } from "react"
import Userheader from '../components/Userheader'
import Userfooter from '../components/Userfooter'
import { Container, Image, Button, Accordion, Badge, Table, Modal, Form, FormCheck } from 'react-bootstrap'
import Link from "next/link"
import Leftsidemenu from '../components/Leftsidemenu';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../components/ResponsiveTable';


const Notification = () => {

	const [showModal1, setShowModal1] = useState(false);
	const handleClose1 = () => setShowModal1(false);
	const handleShow1 = () => setShowModal1(true);

	return (
		<div className="pagecontent gridpagecontent innerpagegrid">
			<div className="backgroundoverlay" id="backgroundoverlay"></div>
			<Userheader />
			<Leftsidemenu />
			<div className="innerpagecontent">
				<Container className="sitecontainer">
					<h2 className="h2">Notifications</h2>
				</Container>
			</div>
			<article className="gridparentbox">


				<Container className="sitecontainer securitypage">
					<div className="panelcontentbox">
						<div className="helketbussiness">
								<div className="d-flex justify-content-between">
									<div>
										<h6>helket bussiness telegram bot:<span className="alink"> @helket_pay_bot</span></h6>
										
										<p>used to receive notifications concerning the user's merchants</p>
									</div>
									<div>
										<Button className="sitebtn">Connect</Button>
									</div>

								</div>
							</div>
						<div className="bordertablebox">
							
							<SimpleBar className="table-responsive">
								<Table className="sitetable table-responsive-stack" id="table1">
									<thead>
										<tr>
											<th>Account notifications</th>
											<th>Email</th>
											<th>Telegram</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Authorization </td>
											<td><FormCheck type="checkbox" id="radio1" label="" /></td>
											<td><FormCheck type="checkbox" id="radio1" label="" /></td>
										</tr>
										<tr>
											<td>Changing password </td>
											<td><FormCheck type="checkbox" id="radio1" label="" /></td>
											<td><FormCheck type="checkbox" id="radio1" label="" /></td>
										</tr>
										<tr>
											<td>Add and Changing Email </td>
											<td><FormCheck type="checkbox" id="radio1" label="" /></td>
											<td><FormCheck type="checkbox" id="radio1" label="" /></td>
										</tr>
									</tbody>
								</Table>
							</SimpleBar>
							<ResponsiveTable tableId="table1" />
						</div>

					</div>
					<div className="flexbox mt-2">

						<div className="panelcontentbox">
							<div className="bordertablebox">
								<SimpleBar className="table-responsive">
									<Table className="sitetable table-responsive-stack" id="table2">
										<thead>
											<tr>
												<th>Personal wallet notifications</th>
												<th>Email</th>
												<th>Telegram</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>New payment received to personal wallet</td>
												<td><FormCheck type="checkbox" id="radio1" label="" /></td>
												<td><FormCheck type="checkbox" id="radio1" label="" /></td>
											</tr>
											<tr>
												<td>Success withdrawal </td>
												<td><FormCheck type="checkbox" id="radio1" label="" /></td>
												<td><FormCheck type="checkbox" id="radio1" label="" /></td>
											</tr>
											<tr>
												<td>Fail withdrawal</td>
												<td><FormCheck type="checkbox" id="radio1" label="" /></td>
												<td><FormCheck type="checkbox" id="radio1" label="" /></td>
											</tr>
											<tr>
												<td>New withdrawal</td>
												<td><FormCheck type="checkbox" id="radio1" label="" /></td>
												<td><FormCheck type="checkbox" id="radio1" label="" /></td>
											</tr>
											<tr>
												<td>Transfer from Personal to Business</td>
												<td><FormCheck type="checkbox" id="radio1" label="" /></td>
												<td><FormCheck type="checkbox" id="radio1" label="" /></td>
											</tr>
											<tr>
												<td>Transfer from Business to Personal </td>
												<td><FormCheck type="checkbox" id="radio1" label="" /></td>
												<td><FormCheck type="checkbox" id="radio1" label="" /></td>
											</tr>

										</tbody>
									</Table>
								</SimpleBar>
								<ResponsiveTable tableId="table2" />
							</div>
						</div>
						<div className="panelcontentbox">
							<div className="bordertablebox">
								<SimpleBar className="table-responsive">
									<Table className="sitetable table-responsive-stack" id="table3">
										<thead>
											<tr>
												<th>Business wallet notifications</th>
												<th>Email</th>
												<th>Telegram</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Request merchant API-key</td>
												<td><FormCheck type="checkbox" id="radio1" label="" /></td>
												<td><FormCheck type="checkbox" id="radio1" label="" /></td>
											</tr>
											<tr>
												<td>Request merchant API-key </td>
												<td><FormCheck type="checkbox" id="radio1" label="" /></td>
												<td><FormCheck type="checkbox" id="radio1" label="" /></td>
											</tr>
											<tr>
												<td>Paid invoices</td>
												<td><FormCheck type="checkbox" id="radio1" label="" /></td>
												<td><FormCheck type="checkbox" id="radio1" label="" /></td>
											</tr>
											<tr>
												<td>Payout API key</td>
												<td><FormCheck type="checkbox" id="radio1" label="" /></td>
												<td><FormCheck type="checkbox" id="radio1" label="" /></td>
											</tr>
											<tr>
												<td>Partially paid invoices</td>
												<td><FormCheck type="checkbox" id="radio1" label="" /></td>
												<td><FormCheck type="checkbox" id="radio1" label="" /></td>
											</tr>
										</tbody>
									</Table>
								</SimpleBar>
								<ResponsiveTable tableId="table3" />
							</div>
						</div>
					</div>



				</Container>
			</article>
			<Userfooter />

		</div>
	)
}

export default Notification