"use client"
import React, { useState } from "react";
import Link from 'next/link';
import { Container, Image, Table, Button, Form, Nav, Row, Col, Modal, NavDropdown, ProgressBar, OverlayTrigger, Tooltip, InputGroup } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faSortDown, faEyeSlash, faAngleDown, faQuestionCircle, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import ResponsiveTable from '../components/ResponsiveTable';
import Leftsidemenu from '../components/Leftsidemenu';
import Select from 'react-select';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Personalwallet = () => {
	const flexscroll = {
		desktop: {
			breakpoint: { max: 1920, min: 1200 },
			items: 3,
		},
		laptop: {
			breakpoint: { max: 1200, min: 1050 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1050, min: 600 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 600, min: 0 },
			items: 2,
		}
	};

	const [showModal1, setShowModal1] = useState(false);
	const handleClose1 = () => setShowModal1(false);
	const handleClose2 = () => setShowModal2(false);
	const handleShow1 = () => setShowModal1(true);
	const handleShow2 = () => setShowModal2(true);


	const [singleOption, setSingleOption] = useState(
		{
			value: 'usd',
			label: 'USD',
		}
	);

	const options = [
		{ value: 'usd', label: 'USD' },
		{ value: 'inr', label: 'INR' },
		{ value: 'ltc', label: 'LTC' },
	];

	const handleSingleChange = (selected) => {
		setSingleOption(selected);
		console.log('Single Select:', selected);
	};

	const customStyles = {
		control: (base, state) => ({
			...base,
			borderColor: state.isFocused ? '#4bb1d9' : '#ccc',
			boxShadow: state.isFocused ? '0 0 5px #4bb1d9' : 'none',
			transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
			'&:hover': {
				borderColor: '#4bb1d9',
			},
		}),
		option: (base, { isFocused }) => ({
			...base,
			backgroundColor: isFocused ? '#F6F6F7' : '#F6F6F7',
			color: '#000',
			transition: 'background-color 0.3s ease',
		}),
	};

	// Custom option label with image
	const customOptionLabel = (data) => (
		<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				{data.label}
			</div>
		</div>
	);

	return (
		<div className="pagecontent gridpagecontent innerpagegrid">
			<div className="backgroundoverlay" id="backgroundoverlay"></div>
			<Userheader />
			<Leftsidemenu />
			<div className="innerpagecontent">
				<Container className="sitecontainer">
					<h2 className="h2">Earn Overview</h2>
					<div className="boxtabb tabrightbox">
						<Nav className="nav nav-tabs tabbanner border-0" role="tablist">
							<Nav.Item className="nav-item"><Nav.Link href="/saving" className="active">Overview</Nav.Link></Nav.Item>
							<Nav.Item className="nav-item"><Nav.Link href="/earnhistory">Current</Nav.Link></Nav.Item>
							<Nav.Item className="nav-item"><Nav.Link href="/hostorical">Hostorical</Nav.Link></Nav.Item>
						</Nav>
					</div>
				</Container>
			</div>
			<article className="gridparentbox">
				<Container className="sitecontainer walletoverviewbg">
					<div className="panelcontentbox">
						<div className="wlltpageblnce">
							<div className="balanceshowt totblance topblce-y">
								<h2 className="heading-box">Firefox Earn
								</h2>
								<p class="m-0">Smart Earning Starts Here - 300+ Crypto Assets Supported</p>
								<div className="flexbox stacking-y">
									<div>
										<h4 className="subhead p-0 pb-2 d-flex align-items-center gap-2">
											My Holdings
											
											<OverlayTrigger
												placement="bottom"
												delay={{ show: 250, hide: 400 }}
												overlay={
													<Tooltip id="staylogged-tooltip">
														My Holdings
													</Tooltip>
												}
											>
												<span className="d-inline-flex">
													<FontAwesomeIcon
														className="fee-icon-y"
														icon={faCircleExclamation}
													/>
												</span>
											</OverlayTrigger>
											
										</h4>
										<p class="m-0">******</p>
									</div>
									<div className="">
										<h4 className="subhead p-0 pb-2 d-flex align-items-center gap-2">
											Last Day Profit
											
											<OverlayTrigger
												placement="bottom"
												delay={{ show: 250, hide: 400 }}
												overlay={
													<Tooltip id="staylogged-tooltip">
														Last Day Profit
													</Tooltip>
												}
											>
												<span className="d-inline-flex">
													<FontAwesomeIcon
														className="fee-icon-y"
														icon={faCircleExclamation}
													/>
												</span>
											</OverlayTrigger>
											
										</h4>
										<p class="m-0">******</p>

										{/* <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={
											<Tooltip id="staylogged-tooltip">
												A Last Day Profit is a unique
											</Tooltip>}>
											<h4 className="subhead p-0 pb-2">Last Day Profit <FontAwesomeIcon icon={faCircleExclamation} className="ms-2" /></h4>
										</OverlayTrigger>
										<p class="m-0">******</p> */}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="panelcontentbox savingbannersec mt-3">
						<h2 className="heading-box pt-0 ps-2 border-0">Popular Products</h2>
						<div className="table-responsive-stack">

						</div>
						<div className="bordertablebox">
							<Table className="sitetable sitescroll" id='table1'>
								<thead>
									<tr>
										<th>Coins</th>
										<th>Est.APR</th>
										<th> <span className="duration-days">Duration</span></th>
										<th></th>
									</tr>
								</thead>
								<tbody className="border-0">
									<tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data1" data-bs-parent="#accordion" aria-expanded="false">
										<td><Image src="assets/images/color/btc.svg" className="coinicon" />BTC</td>
										<td><span className="t-green">4.2%~12.11%</span></td>
										<td><span className="duration-days">
											Flexible/Locked
										</span>
										</td>
										<td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
									</tr>
									<tr className="accordeon-content">
										<td colSpan={4} className="p-0">
											<div id="data1" className="collapse">
												<Table className="sitetable">
													<tbody>
														<tr>
															<td rowSpan="3"></td>
															<td><span className="t-green">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></span></td>
															<td><span className="t-gray mx-1 duration-days">Flexible</span></td>
															<td className="notablehead"><Link className="sitebtn btn-sm" href="#" onClick={handleShow1}>Subscribe</Link></td>
														</tr>
													</tbody>
												</Table>
											</div>
										</td>
									</tr>
									<tr className="accordeon-content">
										<td colSpan={4} className="p-0">
											<div id="data1" className="collapse">
												<Table className="sitetable">
													<tbody>
														<tr>
															<td rowSpan="3"></td>
															<td><span className="t-green">4.2%</span></td>
															<td><span className="t-gray mx-1 duration-days">Locked</span></td>
															<td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow2}>Subscribe</Link></td>
														</tr>
													</tbody>
												</Table>
											</div>
										</td>
									</tr>
									<tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data2" data-bs-parent="#accordion" aria-expanded="false">
										<td><Image src="assets/images/color/eth.svg" className="coinicon" />ETH</td>
										<td><span className="t-green">4.2%~12.11%</span></td>
										<td><span className="duration-days">
											Flexible/Locked
										</span>
										</td>
										<td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
									</tr>
									<tr className="accordeon-content">
										<td colSpan={4} className="p-0">
											<div id="data2" className="collapse">
												<Table className="sitetable">
													<tbody>
														<tr>
															<td rowSpan="3"></td>
															<td><span className="t-green">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></span></td>
															<td><span className="t-gray mx-1 duration-days">Flexible</span></td>
															<td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Subscribe</Link></td>
														</tr>
													</tbody>
												</Table>
											</div>
										</td>
									</tr>
									<tr className="accordeon-content">
										<td colSpan={4} className="p-0">
											<div id="data2" className="collapse">
												<Table className="sitetable">
													<tbody>
														<tr>
															<td rowSpan="3"></td>
															<td><span className="t-green">4.2%</span></td>
															<td><span className="t-gray mx-1 duration-days">Locked</span></td>
															<td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow2}>Subscribe</Link></td>
														</tr>
													</tbody>
												</Table>
											</div>
										</td>
									</tr>
									<tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data3" data-bs-parent="#accordion" aria-expanded="false">
										<td><Image src="assets/images/color/ltc.svg" className="coinicon" />LTC</td>
										<td><span className="t-green">4.2%~12.11%</span></td>
										<td><span className="duration-days">
											Flexible/Locked
										</span>
										</td>
										<td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
									</tr>

									<tr className="accordeon-content">
										<td colSpan={4} className="p-0">
											<div id="data3" className="collapse">
												<Table className="sitetable">
													<tbody>
														<tr>
															<td rowSpan="3"></td>
															<td><span className="t-green">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></span></td>
															<td><span className="t-gray mx-1 duration-days">Flexible</span></td>
															<td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Subscribe</Link></td>
														</tr>
													</tbody>
												</Table>
											</div>
										</td>
									</tr>
									<tr className="accordeon-content">
										<td colSpan={4} className="p-0">
											<div id="data3" className="collapse">
												<Table className="sitetable">
													<tbody>
														<tr>
															<td rowSpan="3"></td>
															<td><span className="t-green">4.2%</span></td>
															<td><span className="t-gray mx-1 duration-days">Flexible</span></td>
															<td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Subscribe</Link></td>
														</tr>
													</tbody>
												</Table>
											</div>
										</td>
									</tr>

									<tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data4" data-bs-parent="#accordion" aria-expanded="false">
										<td><Image src="assets/images/color/trx.svg" className="coinicon" />TRX</td>
										<td><span className="t-green">4.2%~12.11%</span></td>
										<td><span className="duration-days">
											Flexible/Locked
										</span>
										</td>
										<td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
									</tr>
									<tr className="accordeon-content">
										<td colSpan={4} className="p-0">
											<div id="data4" className="collapse">
												<Table className="sitetable">
													<tbody>
														<tr>
															<td rowSpan="3"></td>
															<td><span className="t-green">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></span>
															</td>
															<td><span className="t-gray mx-1 duration-days">Flexible</span></td>
															<td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Subscribe</Link></td>
														</tr>
													</tbody>
												</Table>
											</div>
										</td>
									</tr>
									<tr className="accordeon-content">
										<td colSpan={4} className="p-0">
											<div id="data4" className="collapse">
												<Table className="sitetable">
													<tbody>
														<tr>
															<td></td>
															<td><span className="t-green">4.2%</span></td>
															<td><span className="t-gray mx-1 duration-days">Flexible</span></td>
															<td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Subscribe</Link></td>
														</tr>
													</tbody>
												</Table>
											</div>
										</td>
									</tr>
									<tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data5" data-bs-parent="#accordion" aria-expanded="false">
										<td><Image src="assets/images/color/sol.svg" className="coinicon" />SOL</td>
										<td><span className="t-green">4.2%~12.11%</span></td>
										<td><span className="duration-days">
											Flexible/Locked
										</span>
										</td>
										<td><FontAwesomeIcon icon={faAngleDown} /></td>
									</tr>
									<tr className="accordeon-content">
										<td colSpan={4} className="p-0">
											<div id="data5" className="collapse">
												<Table className="sitetable">
													<tbody>
														<tr>
															<td rowSpan="3"></td>
															<td><span className="t-green">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></span>
															</td>
															<td><span className="t-gray mx-1 duration-days">Flexible</span></td>
															<td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Subscribe</Link></td>
														</tr>
													</tbody>
												</Table>
											</div>
										</td>
									</tr>
									<tr className="accordeon-content">
										<td colSpan={4} className="p-0">
											<div id="data5" className="collapse">
												<Table className="sitetable">
													<tbody>
														<tr>
															<td rowSpan="3"></td>
															<td><span className="t-green">4.2%</span></td>
															<td><span className="t-gray mx-1 duration-days">Flexible</span></td>
															<td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Subscribe</Link></td>
														</tr>
													</tbody>
												</Table>
											</div>
										</td>
									</tr>
									<tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data6" data-bs-parent="#accordion" aria-expanded="false">
										<td><Image src="assets/images/color/avax.svg" className="coinicon" />AVAX</td>
										<td><span className="t-green">4.2%~12.11%</span></td>
										<td><span className="duration-days">
											Flexible/Locked
										</span>
										</td>
										<td><FontAwesomeIcon icon={faAngleDown} /></td>
									</tr>
									<tr className="accordeon-content">
										<td colSpan={4} className="p-0">
											<div id="data6" className="collapse">
												<Table className="sitetable">
													<tbody>
														<tr>
															<td rowSpan="3"></td>
															<td><span className="t-green">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></span>
															</td>
															<td><span className="t-gray mx-1 duration-days">Flexible</span></td>
															<td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Subscribe</Link></td>
														</tr>
													</tbody>
												</Table>
											</div>
										</td>
									</tr>
									<tr className="accordeon-content">
										<td colSpan={4} className="p-0">
											<div id="data6" className="collapse">
												<Table className="sitetable">
													<tbody>
														<tr>
															<td rowSpan="3"></td>
															<td><span className="t-green">4.2%</span></td>
															<td><span className="t-gray mx-1 duration-days">Flexible</span></td>
															<td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Subscribe</Link></td>
														</tr>
													</tbody>
												</Table>
											</div>
										</td>
									</tr>
									<tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data7" data-bs-parent="#accordion" aria-expanded="false">
										<td><Image src="assets/images/color/ton.svg" className="coinicon" />TON</td>
										<td><span className="t-green">4.2%~12.11%</span></td>
										<td><span className="duration-days">
											Flexible/Locked
										</span>
										</td>
										<td><FontAwesomeIcon icon={faAngleDown} /></td>
									</tr>
									<tr className="accordeon-content">
										<td colSpan={4} className="p-0">
											<div id="data7" className="collapse">
												<Table className="sitetable">
													<tbody>
														<tr>
															<td rowSpan="3"></td>
															<td><span className="t-green">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></span>
															</td>
															<td><span className="t-gray mx-1 duration-days">Flexible</span></td>
															<td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Subscribe</Link></td>
														</tr>
													</tbody>
												</Table>
											</div>
										</td>
									</tr>
									<tr className="accordeon-content">
										<td colSpan={4} className="p-0">
											<div id="data7" className="collapse">
												<Table className="sitetable">
													<tbody>
														<tr>
															<td rowSpan="3"></td>
															<td><span className="t-green">4.2%</span></td>
															<td><span className="t-gray mx-1 duration-days">Flexible</span></td>
															<td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Subscribe</Link></td>
														</tr>
													</tbody>
												</Table>
											</div>
										</td>
									</tr>

								</tbody>
							</Table>
						</div>

					</div>
				</Container>
			</article>
			<Userfooter />
			<Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal subscribemodalbox' aria-labelledby="contained-modal-title-vcenter"
				centered>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">Subscribe</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className='siteformbg'>
						<Row>
							<Col lg={12} xs={12}>
								<Carousel className="partnerflex" responsive={flexscroll} autoPlay={true} autoPlaySpeed={3000} showDots={false} swipeable={true} draggable={true}>
									<a href="" className="s-flex-modal">
										<p className="s-modal-txt">Flexible</p>
										<p className="saving-txt">12.11% </p>
									</a>
									<a href="" className="s-flex-modal active">
										<p className="s-modal-txt">Fixed 7D</p>
										<p className="saving-txt"> 14.50%</p>
									</a>
									<a href="" className="s-flex-modal">
										<p className="s-modal-txt">Fixed 30D</p>
										<p className="saving-txt">18.00% </p>
									</a>
									<a href="" className="s-flex-modal">
										<p className="s-modal-txt">Flexible</p>
										<p className="saving-txt">18.23% </p>
									</a>
								</Carousel>
								<Form.Group>
									<Form.Group className="form-group" >
										<Form.Label>Amount</Form.Label>
										<InputGroup>
											<Form.Control name="code" id="code" type="text" placeholder="Min 0.1 USDT" />
											<InputGroup.Text id="max">Max</InputGroup.Text>
										</InputGroup>
										<div className="notestitle notesgray dpstnotes">
											<p className="pb-0 t-gray text-start">
												Available 5,857.27879652 USDT
											</p>
										</div>
									</Form.Group>
									<Form.Group>
										<Form.Label>Summary</Form.Label>
										<div className="saving-summary savng-y">
											<div className="">

												<div className="table-responsive" data-simplebar>
													<Table className="sitetable m-0" id='table1'>
														<tbody>
															<tr>
																<td>Subscription Date</td>
																<td className="sub-date-y">2026-01-06 11:17:05</td>
															</tr>
															<tr>
																<td>Interest Start Date</td>
																<td className="sub-date-y">2026-01-06 11:17:05</td>
															</tr>
															<tr>
																<td>Interest Period</td>
																<td className="sub-date-y">1 Day</td>
															</tr>
															<tr>
																<td>Interest Payment Date</td>
																<td className="sub-date-y">2026-01-06 11:17:05</td>
															</tr>
														</tbody>
													</Table>
												</div>
											</div>
										</div>
									</Form.Group>
								</Form.Group>
								<Form.Group>
									<div className="saving-checkbox-wrapper">
										<Form.Check id="savingcheck" className="saving-checkbox me-2" />
										<Form.Label className="saving-checkbox-label">I have read and agreed to </Form.Label><Link href="#" className="alink a-lik-y"> Firefox Simple Earn Service Terms & Conditions</Link>
									</div>
								</Form.Group>
								<Form.Group className="text-center">
									<Button className="sitebtn" id='confirmbtn'>
										Confirm
									</Button>
								</Form.Group>
							</Col>
						</Row>
					</Form>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default Personalwallet;