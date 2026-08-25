"use client"
import React, { useState } from "react";
import Link from 'next/link';
import { Container, Image, Table, Button, Form, Nav, Row, Col, Modal, NavDropdown, Tooltip, InputGroup, Badge } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faSortDown, faEyeSlash, faAngleDown, faQuestionCircle, faCircleExclamation, faCopy, faCircleCheck, faClock,faCheck,faXmark } from '@fortawesome/free-solid-svg-icons';
import ResponsiveTable from '../components/ResponsiveTable';
import Leftsidemenu from '../components/Leftsidemenu';
import Select from 'react-select';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Personalwallet = () => {

	return (
		<div className="pagecontent gridpagecontent innerpagegrid funddetails-page">
			<div className="backgroundoverlay" id="backgroundoverlay"></div>
			<Userheader />
			<Leftsidemenu />
			<div className="innerpagecontent">
				<Container className="sitecontainer">
					<h2 className="h2">Missingfund Details</h2>
					<div className="tabrightbox">
						<Link href="/missingfund" className="btn sitebtn btn-sm" id="backbtn">Back</Link>
					</div>
				</Container>
			</div>
			<article className="gridparentbox">
				<Container className="sitecontainer ">

					<div className="wlltpageblnce">
						<div className=" totblance topblce-y">
							<h2 className="heading-box pb-1">Request Overview
							</h2>
							<p class="m-0">view transation details and current status</p>
							<div className="flexbox-new ">
								<div className="d-flex align-items-center">
									<Image
										src="assets/images/searchid.svg"
										alt="btc"
										className="searchid-img"
									/>
									<div className=" d-flex align-items-end gap-3">

										<div >
											<p className="mb-1">
												Search ID
											</p>
											<h4 className="subhead pb-0">12345678988979 </h4>
										</div>
										<div className="copy-bg">
											<FontAwesomeIcon
												icon={faCopy}

											/>
										</div>


									</div>
								</div>
								<div className="d-flex align-items-center">
									<Image
										src="assets/images/userinvoice.svg"
										alt="btc"
										className="userinvoice-img"
									/>
									<div>

										<p className="mb-1">
											Choose option
										</p>
										<h4 className="subhead pb-0">Personal</h4>
									</div>
								</div>
								<div className="d-flex align-items-center">
									<Image
										src="assets/images/dateandtime.svg"
										alt="btc"
										className="dateandtime-img"
									/>
									<div>

										<p className="mb-1">
											Submitted Date & Time
										</p>
										<h4 className="subhead pb-0">18/08/2026, 11:11:00</h4>
									</div>
								</div>

								<div className="">
									<p className="mb-1">
										Current Status
									</p>
									<Badge bg="success"><span className=""><FontAwesomeIcon icon={faCircleCheck} /></span> Completed</Badge>

								</div>
							</div>
						</div>
					</div>
					<Row className="my-4 align-items-stretch">
						<Col lg={6} md={6} sm={12}>
							<div className="panelcontentbox">

								<div className=" totblance topblce-y">
									<div className="d-flex align-items-center gap-2 mb-2">
										<Image
											src="assets/images/msfund1.svg"
											alt="btc"
											className="missfund-big-img"
										/>
										<h2 className="heading-box pb-0">Transaction information</h2>
									</div>

									<div className="flexbox">
										<div className="transaction-details-wrap">

											<div className="transaction-detail-row">
												<div className="d-flex">
													<Image
														src="assets/images/msfundsm3.svg"
														alt="btc"
														className="missfund-sm-img"
													/>
													<p className="transaction-detail-label">Merchant ID</p>

												</div>

												<div className="transaction-detail-value-wrap">
													<p className="transaction-detail-value">
														1234569874633215451155151611511651165 <span className="copy-gap"><FontAwesomeIcon
															icon={faCopy}
															className="transaction-copy-icon"
														/></span>
													</p>
												</div>
											</div>

											<div className="transaction-detail-row">
												<div className="d-flex">
													<Image
														src="assets/images/msfundsm2.svg"
														alt="btc"
														className="missfund-sm-img"
													/>
													<p className="transaction-detail-label">Transaction Hash</p>

												</div>

												<div className="transaction-detail-value-wrap">
													<p className="transaction-detail-value">
														1234569874633 <span className="copy-gap"><FontAwesomeIcon
															icon={faCopy}
															className="transaction-copy-icon"
														/></span>
													</p>

												</div>
											</div>
											<div className="transaction-detail-row">
												<div className="d-flex">
													<Image
														src="assets/images/msfundsm1.svg"
														alt="btc"
														className="missfund-sm-img"
													/>
													<p className="transaction-detail-label">Deposit Address</p>

												</div>

												<div className="transaction-detail-value-wrap">
													<p className="transaction-detail-value">
														1234569874633 <span className="copy-gap"><FontAwesomeIcon
															icon={faCopy}
															className="transaction-copy-icon"
														/></span>
													</p>

												</div>
											</div>
											<div className="transaction-detail-row">
												<div className="d-flex">
													<Image
														src="assets/images/coin-mis.svg"
														alt="btc"
														className="missfund-sm-img"
													/>
													<p className="transaction-detail-label">Coin</p>

												</div>

												<div className="transaction-detail-value-wrap">
													<p className="transaction-detail-value">
														<Image src="assets/images/color/btc.svg" className="coinicon" />BTC
													</p>

												</div>
											</div>
											<div className="transaction-detail-row">
												<div className="d-flex">
													<Image
														src="assets/images/netmis.svg"
														alt="btc"
														className="missfund-sm-img"
													/>
													<p className="transaction-detail-label">Network</p>

												</div>

												<div className="transaction-detail-value-wrap">
													<p className="transaction-detail-value">
														<Image src="assets/images/color/eth.svg" className="coinicon" />ETH
													</p>

												</div>
											</div>
											<div className="transaction-detail-row">
												<div className="d-flex">
													<Image
														src="assets/images/dpmiss.svg"
														alt="btc"
														className="missfund-sm-img"
													/>
													<p className="transaction-detail-label">Choose Option</p>

												</div>

												<div className="transaction-detail-value-wrap">
													<p className="transaction-detail-value">
														Personal
													</p>

												</div>
											</div>



										</div>
									</div>
								</div>

							</div>

						</Col>
						<Col lg={6} md={6} sm={12}>
							<div className="panelcontentbox h-100">

								<div className=" totblance topblce-y">

									<div className="d-flex align-items-center gap-2 mb-2">
										<Image
											src="assets/images/msfund2.svg"
											alt="btc"
											className="missfund-big-img"
										/>
										<h2 className="heading-box pb-0">Request Information	</h2>
									</div>

									<div className="flexbox">
										<div className="transaction-details-wrap">

											<div className="transaction-detail-row">
												<p className="transaction-detail-label">Message</p>

												<div className="transaction-detail-value-wrap">
													<p className="transaction-detail-value">
														Lorem ipsum dolor, sit amet consectetur adipisicing elit. At fugit impedit, ullam eum ab possimus aliquid. Vero doloremque alias debitis.
													</p>
												</div>
											</div>

											<div className="transaction-detail-row">
												<p className="transaction-detail-label">
													Terms & Conditions
												</p>

												<div className="transaction-detail-value-wrap">
													<p className="transaction-detail-value Accepted-tick">
														<span className="me-1"><FontAwesomeIcon icon={faCircleCheck} /></span>Accepted
													</p>
												</div>
											</div>


										</div>
									</div>
								</div>

							</div>

						</Col>
					</Row>

					<div className="wlltpageblnce">

						{/* Header */}
						<div className="request-activity-header topblce-y">
							<div className="d-flex align-items-center gap-2 mb-2">
								<Image
									src="assets/images/msfund3.svg"
									alt="btc"
									className="missfund-big-img"
								/>
								<h2 className="heading-box pb-0">Request Activity &amp; Processing</h2>
							</div>


						</div>

						{/* Timeline */}
						<div className="request-timeline">

							{/* Step 1 */}
							<div className="timeline-item">

								<div className="timeline-marker-wrapper">
									<span className="timeline-dot active-dot"></span>
									<span className="timeline-line orange-line"></span>
								</div>

								<div className="timeline-content">
									<div className="timeline-info">
										<h5>Submitted Date &amp; Time</h5>
										<p>Request was submitted by the user</p>
									</div>

									<div className="timeline-date">
										18/08/2026, 11:11:00
									</div>
								</div>

							</div>

							{/* Step 2 */}
							<div className="timeline-item">

								<div className="timeline-marker-wrapper">
									<span className="timeline-dot processing-dot">
										<span></span>
									</span>
									<span className="timeline-line green-line"></span>
								</div>

								<div className="timeline-content">
									<div className="timeline-info">
										<h5>Last Updated</h5>
										<p>Last status update</p>
									</div>

									<div className="timeline-date">
										18/08/2026, 18:10:00
									</div>
								</div>

							</div>

							{/* Step 3 */}
							<div className="timeline-item last-item">

								<div className="timeline-marker-wrapper">
									<span className="timeline-dot completed-dot">
										<FontAwesomeIcon icon={faCheck} />
										{/* <FontAwesomeIcon icon={faXmark} /> */}
										{/* <FontAwesomeIcon icon={faClock} /> */}
									</span>
								</div>

								<div className="timeline-content">

									<div className="timeline-info">
										<h5>Processing Remarks / Resolution Details</h5>
										<p>Admin remarks and resolution details</p>
									</div>

									<div className="resolution-box">

										<div className="resolution-icon">
											<FontAwesomeIcon icon={faCheck} />
										</div>

										<div className="resolution-text">
											<p>
												We have reviewed your request and verified the transaction
												on the blockchain.
												<br />
												The funds were sent to an unsupported address. This is not
												credited to the system.
												<br />
												Request completed.
											</p>
										</div>

										<div className="resolution-date">
											18/08/2026, 18:10:00
										</div>

									</div>

								</div>

							</div>

						</div>
					</div>


				</Container>
			</article>
			<Userfooter />

		</div>
	);
}

export default Personalwallet;