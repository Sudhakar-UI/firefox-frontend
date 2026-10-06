"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Image, Table, Badge, Nav, Tab, NavDropdown, ProgressBar } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../components/ResponsiveTable';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Leftsidemenu from '../components/Leftsidemenu';
import Personalchart from './Personalbalancechart';
import Businesschart from './Businessbalancechart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faExchange, faArrowUp, faArrowDown, faArrowsRotate, faSortDown } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';


const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 3000;

const timerProps = {
	isPlaying: true,
	size: 70,
	strokeWidth: 3
};

const renderTime = (dimension, time) => {
	return (
		<div className="time-wrapper">
			<div className="datetxticon">{dimension}</div>
			<div className="time timeszeicon">{time}</div>
		</div>
	);
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const Dashboard = () => {
	const [showModal1, setShowModal1] = useState(false);

	const handleClose1 = () => setShowModal1(false);
	const handleShow1 = () => setShowModal1(true);

	const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
	const endTime = stratTime + 243248; // use UNIX timestamp in seconds

	const remainingTime = endTime - stratTime;
	const days = Math.ceil(remainingTime / daySeconds);
	const daysDuration = days * daySeconds;

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
					<h2 className="h2">Trade</h2>
				</Container>
			</div>
			<article className="gridparentbox">
				<Container className="sitecontainer dashboardpage">
					<div className="flexbox">
						<div>
							<div className="securpanelbox panelcontentbox">
								<div className="overviewbalancebox">
									<div className="securepanelbox">
										<div className="balanceshowt totblance d-flex align-items-center">
											<div>
												<h5>Total funds</h5>
												<h4 className="h4">$ 0.00000
													<span className="h5">

														<Select options={options} id='currency' styles={customStyles} value={singleOption} onChange={handleSingleChange} getOptionLabel={customOptionLabel} />


														{/* <NavDropdown title={<div className="">USD <FontAwesomeIcon icon={faSortDown} /></div>} id="basic-nav-dropdown">
													<NavDropdown.Item as={Link} href="#">USD</NavDropdown.Item>    
													<NavDropdown.Item as={Link} href="#">INR</NavDropdown.Item>    
													<NavDropdown.Item as={Link} href="#">TRX</NavDropdown.Item>                 
												</NavDropdown> */}

													</span>
												</h4>
											</div>
											<div className="text-end">
												<Image src="assets/images/personal.svg" alt="icon" withd={20} height={20} />
											</div>
										</div>

									</div>
								</div>
							</div>
							<div className="balanceshowbox mt-3">
								<div className="walletbalancebox">
									<div className="tablebox d-flex">
										<div className="balancetableb panelcontentbox">
											<div className="balanceshowt table-content">
												<div>
													<h5 className="h5">Spot</h5>
												</div>

											</div>
											<hr />
											<h4 className="h4">$2,5639</h4>
										</div>
										<div className="balancetableb panelcontentbox">
											<div className="balanceshowt table-content">
												<div>
													<h5 className="h5">Features</h5>
												</div>

											</div>
											<hr />
											<h4 className="h4">$2,87615056</h4>
										</div>
									</div>
								</div>
							</div>
							<div className="panelcontentbox balancechartact mt-2 pb-2">
								<Tab.Container defaultActiveKey="personalbalance">
									<div className="innerpagetab">
										<Nav className="nav nav-tabs tabbanner justify-content-center" role="tablist">
											<Nav.Item className="nav-item"><Nav.Link eventKey="personalbalance">Spot Balance</Nav.Link></Nav.Item>
											<Nav.Item className="nav-item"><Nav.Link eventKey="businessbalance">Features Balance</Nav.Link></Nav.Item>
										</Nav>
									</div>
									<Tab.Content>
										<Tab.Pane eventKey="personalbalance">
											<Personalchart />
										</Tab.Pane>
										<Tab.Pane eventKey="businessbalance">
											<Businesschart />
										</Tab.Pane>
									</Tab.Content>
								</Tab.Container>
							</div>
						</div>
						<div className="panelcontentbox purchasetable mobilepaneltablebox">
							<h2 className="heading-box mb-3">My Assets</h2>
							<Tab.Container defaultActiveKey="trade">
								<div className="boxtabb tabrightbox">
									<Nav className="nav nav-tabs tabbanner border-0" role="tablist">
										<Nav.Item className="nav-item"><Nav.Link eventKey="trade">Trade</Nav.Link></Nav.Item>
										<Nav.Item className="nav-item"><Nav.Link eventKey="personalasset">Personal</Nav.Link></Nav.Item>
										<Nav.Item className="nav-item"><Nav.Link eventKey="businessasset">Business</Nav.Link></Nav.Item>
									</Nav>
								</div>
								<Nav className="nav nav-tabs tabbanner mb-2" role="tablist">
									<Nav.Item className="nav-item"><Nav.Link eventKey="personalasset">Spot</Nav.Link></Nav.Item>
									<Nav.Item className="nav-item"><Nav.Link eventKey="businessasset">Features</Nav.Link></Nav.Item>
								</Nav>
								<Tab.Content>
									<Tab.Pane eventKey="trade">
										<div className="bordertablebox">
											<SimpleBar className="table-responsive sitescroll">
												<Table className="sitetable table-responsive-stack historytable" id="table4">
													<thead>
														<tr>
															<th>Asset</th>
															<th>Amount</th>
															<th>Avg.Cost</th>
															<th>Allocation</th>
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
															<td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />BTC</td>
															<td className="breaktagtd"><b>0.293985</b><br /><span className="t-gray">≈$0.00</span></td>
															<td>$23.72</td>
															<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
														</tr>
														<tr>
															<td><Image src="assets/images/color/eth.svg" width={50} height={50} alt="coin" className="coinlisticon" />ETH</td>
															<td className="breaktagtd"><b>0.293985</b><br /><span className="t-gray">≈$0.00</span></td>
															<td>$23.72</td>
															<td><div className="d-flex prgrsflx"><div>0%</div><div><ProgressBar variant="success" now={0} /></div></div></td>
														</tr>
														<tr>
															<td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" />SOL</td>
															<td className="breaktagtd"><b>0.293985</b><br /><span className="t-gray">≈$0.00</span></td>
															<td>$23.72</td>
															<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
														</tr>
														<tr>
															<td><Image src="assets/images/color/ton.svg" width={50} height={50} alt="coin" className="coinlisticon" />TON</td>
															<td className="breaktagtd"><b>0.293985</b><br /><span className="t-gray">≈$0.00</span></td>
															<td>$23.72</td>
															<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
														</tr>
														<tr>
															<td><Image src="assets/images/color/trx.svg" width={50} height={50} alt="coin" className="coinlisticon" />TRX</td>
															<td className="breaktagtd"><b>0.293985</b><br /><span className="t-gray">≈$0.00</span></td>
															<td>$23.72</td>
															<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
														</tr>
														<tr>
															<td><Image src="assets/images/color/bch.svg" width={50} height={50} alt="coin" className="coinlisticon" />BCH</td>
															<td className="breaktagtd"><b>0.293985</b><br /><span className="t-gray">≈$0.00</span></td>
															<td>$23.72</td>
															<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
														</tr>
														<tr>
															<td><Image src="assets/images/color/usdt.svg" width={50} height={50} alt="coin" className="coinlisticon" />USDT</td>
															<td className="breaktagtd"><b>0.293985</b><br /><span className="t-gray">≈$0.00</span></td>
															<td>$23.72</td>
															<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
														</tr>
														<tr>
															<td><Image src="assets/images/color/avax.svg" width={50} height={50} alt="coin" className="coinlisticon" />AVAX</td>
															<td className="breaktagtd"><b>0.293985</b><br /><span className="t-gray">≈$0.00</span></td>
															<td>$23.72</td>
															<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
														</tr>
													</tbody>
												</Table>
											</SimpleBar>
											<ResponsiveTable tableId="table4" />
										</div>
										<div className="text-center mt-3">
											<Link href="/personalwallet" id="viewpersonalbtn" className="btn borderbtn">Show More <FontAwesomeIcon icon={faAngleRight} /></Link>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="personalasset">
										<div className="bordertablebox">
											<SimpleBar className="table-responsive sitescroll">
												<Table className="sitetable table-responsive-stack historytable" id="table5">
													<thead>
														<tr>
															<th>Asset</th>
															<th>Amount</th>
															<th>Avg.Cost</th>
															<th>Allocation</th>
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
															<td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />BTC</td>
															<td className="breaktagtd"><b>0.293985</b><br /><span className="t-gray">≈$0.00</span></td>
															<td>$23.72</td>
															<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
														</tr>
														<tr>
															<td><Image src="assets/images/color/eth.svg" width={50} height={50} alt="coin" className="coinlisticon" />ETH</td>
															<td className="breaktagtd"><b>0.293985</b><br /><span className="t-gray">≈$0.00</span></td>
															<td>$23.72</td>
															<td><div className="d-flex prgrsflx"><div>0%</div><div><ProgressBar variant="success" now={0} /></div></div></td>
														</tr>
														<tr>
															<td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" />SOL</td>
															<td className="breaktagtd"><b>0.293985</b><br /><span className="t-gray">≈$0.00</span></td>
															<td>$23.72</td>
															<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
														</tr>
														<tr>
															<td><Image src="assets/images/color/ton.svg" width={50} height={50} alt="coin" className="coinlisticon" />TON</td>
															<td className="breaktagtd"><b>0.293985</b><br /><span className="t-gray">≈$0.00</span></td>
															<td>$23.72</td>
															<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
														</tr>
														<tr>
															<td><Image src="assets/images/color/trx.svg" width={50} height={50} alt="coin" className="coinlisticon" />TRX</td>
															<td className="breaktagtd"><b>0.293985</b><br /><span className="t-gray">≈$0.00</span></td>
															<td>$23.72</td>
															<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
														</tr>
														<tr>
															<td><Image src="assets/images/color/bch.svg" width={50} height={50} alt="coin" className="coinlisticon" />BCH</td>
															<td className="breaktagtd"><b>0.293985</b><br /><span className="t-gray">≈$0.00</span></td>
															<td>$23.72</td>
															<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
														</tr>
														<tr>
															<td><Image src="assets/images/color/usdt.svg" width={50} height={50} alt="coin" className="coinlisticon" />USDT</td>
															<td className="breaktagtd"><b>0.293985</b><br /><span className="t-gray">≈$0.00</span></td>
															<td>$23.72</td>
															<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
														</tr>
														<tr>
															<td><Image src="assets/images/color/avax.svg" width={50} height={50} alt="coin" className="coinlisticon" />AVAX</td>
															<td className="breaktagtd"><b>0.293985</b><br /><span className="t-gray">≈$0.00</span></td>
															<td>$23.72</td>
															<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
														</tr>
													</tbody>
												</Table>
											</SimpleBar>
											<ResponsiveTable tableId="table5" />
										</div>
										<div className="text-center mt-3">
											<Link href="/personalwallet" id="viewpersonalbtn" className="btn borderbtn">Show More <FontAwesomeIcon icon={faAngleRight} /></Link>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="businessasset">
										<div className="bordertablebox">
											<SimpleBar className="table-responsive sitescroll">
												<Table className="sitetable table-responsive-stack historytable" id="table6">
													<thead>
														<tr>
															<th>Asset</th>
															<th>Amount</th>
															<th>Avg.Cost</th>
															<th>Allocation</th>
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
															<td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />BTC</td>
															<td className="breaktagtd"><b>0.293985</b><br /><span className="t-gray">≈$0.00</span></td>
															<td>$23.72</td>
															<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
														</tr>
														<tr>
															<td><Image src="assets/images/color/eth.svg" width={50} height={50} alt="coin" className="coinlisticon" />ETH</td>
															<td className="breaktagtd"><b>0.293985</b><br /><span className="t-gray">≈$0.00</span></td>
															<td>$23.72</td>
															<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
														</tr>
														<tr>
															<td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" />SOL</td>
															<td className="breaktagtd"><b>0.293985</b><br /><span className="t-gray">≈$0.00</span></td>
															<td>$23.72</td>
															<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
														</tr>
														<tr>
															<td><Image src="assets/images/color/ton.svg" width={50} height={50} alt="coin" className="coinlisticon" />TON</td>
															<td className="breaktagtd"><b>0.293985</b><br /><span className="t-gray">≈$0.00</span></td>
															<td>$23.72</td>
															<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
														</tr>
														<tr>
															<td><Image src="assets/images/color/trx.svg" width={50} height={50} alt="coin" className="coinlisticon" />TRX</td>
															<td className="breaktagtd"><b>0.293985</b><br /><span className="t-gray">≈$0.00</span></td>
															<td>$23.72</td>
															<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
														</tr>
														<tr>
															<td><Image src="assets/images/color/bch.svg" width={50} height={50} alt="coin" className="coinlisticon" />BCH</td>
															<td className="breaktagtd"><b>0.293985</b><br /><span className="t-gray">≈$0.00</span></td>
															<td>$23.72</td>
															<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
														</tr>
														<tr>
															<td><Image src="assets/images/color/usdt.svg" width={50} height={50} alt="coin" className="coinlisticon" />USDT</td>
															<td className="breaktagtd"><b>0.293985</b><br /><span className="t-gray">≈$0.00</span></td>
															<td>$23.72</td>
															<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
														</tr>
														<tr>
															<td><Image src="assets/images/color/avax.svg" width={50} height={50} alt="coin" className="coinlisticon" />AVAX</td>
															<td className="breaktagtd"><b>0.293985</b><br /><span className="t-gray">≈$0.00</span></td>
															<td>$23.72</td>
															<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
														</tr>
													</tbody>
												</Table>
											</SimpleBar>
											<ResponsiveTable tableId="table6" />
										</div>
										<div className="text-center mt-3">
											<Link href="/businesswallet" id="viewbusinessbtn" className="btn borderbtn">Show More <FontAwesomeIcon icon={faAngleRight} /></Link>
										</div>
									</Tab.Pane>
								</Tab.Content>
							</Tab.Container>
						</div>
					</div>

					<div className="panelcontentbox purchasetable mobilepaneltablebox mt-1">
						<h2 className="heading-box mb-3">Last Transactions</h2>
						<Tab.Container defaultActiveKey="trade">
							<div className="boxtabb tabrightbox">
								<Nav className="nav nav-tabs tabbanner border-0" role="tablist">
									<Nav.Item className="nav-item"><Nav.Link eventKey="trade">Trade</Nav.Link></Nav.Item>
									<Nav.Item className="nav-item"><Nav.Link eventKey="personaltrans">Personal</Nav.Link></Nav.Item>
									<Nav.Item className="nav-item"><Nav.Link eventKey="businesstrans">Business</Nav.Link></Nav.Item>
								</Nav>
							</div>
							<Tab.Content>
								<Tab.Pane eventKey="trade">
									<div className="bordertablebox">
										<SimpleBar className="table-responsive sitescroll">
											<Table className="sitetable table-responsive-stack historytable" id="table1">
												<thead>
													<tr>
														<th>Type</th>
														<th>Asset</th>
														<th>Amount</th>
														<th>Time</th>
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
														<td><span className="icontypes"><FontAwesomeIcon icon={faExchange} /></span></td>
														<td><Image src="assets/images/color/usdt.svg" width={50} height={50} alt="coin" className="coinlisticon" />USDT Sent</td>
														<td className="breaktagtd"><b>1.00 BCH</b><br /><span className="t-gray">≈$0.00</span></td>
														<td className="breaktagtd"><b>18:00:00</b><br /><span className="t-gray">30/07/2025</span></td>
														<td><Badge bg="success">Completed</Badge></td>
													</tr>
													<tr>
														<td><span className="icontypes t-green downicon"><FontAwesomeIcon icon={faArrowDown} /></span></td>
														<td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />BTC Received</td>
														<td className="breaktagtd"><b>1.00 BCH</b><br /><span className="t-gray">≈$0.00</span></td>
														<td className="breaktagtd"><b>18:00:00</b><br /><span className="t-gray">30/07/2025</span></td>
														<td><Badge bg="warning">Pending</Badge></td>
													</tr>
													<tr>
														<td><span className="icontypes t-red upicon"><FontAwesomeIcon icon={faArrowUp} /></span></td>
														<td><Image src="assets/images/color/bch.svg" width={50} height={50} alt="coin" className="coinlisticon" />BCH Sent</td>
														<td className="breaktagtd"><b>1.00 BCH</b><br /><span className="t-gray">≈$0.00</span></td>
														<td className="breaktagtd"><b>18:00:00</b><br /><span className="t-gray">30/07/2025</span></td>
														<td><Badge bg="danger">Cancelled</Badge></td>
													</tr>
													<tr>
														<td><span className="icontypes"><FontAwesomeIcon icon={faArrowsRotate} /></span></td>
														<td><Image src="assets/images/color/trx.svg" width={50} height={50} alt="coin" className="coinlisticon" />TRX Convert</td>
														<td><b>1.00 TRX</b><br /><span className="t-gray">≈$0.00</span></td>
														<td className="breaktagtd"><b>18:00:00</b><br /><span className="t-gray">30/07/2025</span></td>
														<td><Badge bg="success">Completed</Badge></td>
													</tr>
												</tbody>
											</Table>
										</SimpleBar>
										<ResponsiveTable tableId="table1" />
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey="personaltrans">
									<div className="bordertablebox">
										<SimpleBar className="table-responsive sitescroll">
											<Table className="sitetable table-responsive-stack historytable" id="table2">
												<thead>
													<tr>
														<th>Type</th>
														<th>Asset</th>
														<th>Amount</th>
														<th>Time</th>
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
														<td><span className="icontypes"><FontAwesomeIcon icon={faExchange} /></span></td>
														<td><Image src="assets/images/color/usdt.svg" width={50} height={50} alt="coin" className="coinlisticon" />USDT Sent</td>
														<td className="breaktagtd"><b>1.00 BCH</b><br /><span className="t-gray">≈$0.00</span></td>
														<td className="breaktagtd"><b>18:00:00</b><br /><span className="t-gray">30/07/2025</span></td>
														<td><Badge bg="success">Completed</Badge></td>
													</tr>
													<tr>
														<td><span className="icontypes t-green downicon"><FontAwesomeIcon icon={faArrowDown} /></span></td>
														<td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />BTC Received</td>
														<td className="breaktagtd"><b>1.00 BCH</b><br /><span className="t-gray">≈$0.00</span></td>
														<td className="breaktagtd"><b>18:00:00</b><br /><span className="t-gray">30/07/2025</span></td>
														<td><Badge bg="warning">Pending</Badge></td>
													</tr>
													<tr>
														<td><span className="icontypes t-red upicon"><FontAwesomeIcon icon={faArrowUp} /></span></td>
														<td><Image src="assets/images/color/bch.svg" width={50} height={50} alt="coin" className="coinlisticon" />BCH Sent</td>
														<td className="breaktagtd"><b>1.00 BCH</b><br /><span className="t-gray">≈$0.00</span></td>
														<td className="breaktagtd"><b>18:00:00</b><br /><span className="t-gray">30/07/2025</span></td>
														<td><Badge bg="danger">Cancelled</Badge></td>
													</tr>
													<tr>
														<td><span className="icontypes"><FontAwesomeIcon icon={faArrowsRotate} /></span></td>
														<td><Image src="assets/images/color/trx.svg" width={50} height={50} alt="coin" className="coinlisticon" />TRX Convert</td>
														<td><b>1.00 TRX</b><br /><span className="t-gray">≈$0.00</span></td>
														<td className="breaktagtd"><b>18:00:00</b><br /><span className="t-gray">30/07/2025</span></td>
														<td><Badge bg="success">Completed</Badge></td>
													</tr>
												</tbody>
											</Table>
										</SimpleBar>
										<ResponsiveTable tableId="table2" />
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey="businesstrans">
									<div className="bordertablebox">
										<SimpleBar className="table-responsive sitescroll">
											<Table className="sitetable table-responsive-stack historytable" id="table3">
												<thead>
													<tr>
														<th>Type</th>
														<th>Asset</th>
														<th>Amount</th>
														<th>Time</th>
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
														<td><span className="icontypes"><FontAwesomeIcon icon={faExchange} /></span></td>
														<td><Image src="assets/images/color/usdt.svg" width={50} height={50} alt="coin" className="coinlisticon" />USDT Sent</td>
														<td className="breaktagtd"><b>1.00 BCH</b><br /><span className="t-gray">≈$0.00</span></td>
														<td className="breaktagtd"><b>18:00:00</b><br /><span className="t-gray">30/07/2025</span></td>
														<td><Badge bg="success">Completed</Badge></td>
													</tr>
													<tr>
														<td><span className="icontypes t-green downicon"><FontAwesomeIcon icon={faArrowDown} /></span></td>
														<td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />BTC Received</td>
														<td className="breaktagtd"><b>1.00 BCH</b><br /><span className="t-gray">≈$0.00</span></td>
														<td className="breaktagtd"><b>18:00:00</b><br /><span className="t-gray">30/07/2025</span></td>
														<td><Badge bg="warning">Pending</Badge></td>
													</tr>
													<tr>
														<td><span className="icontypes t-red upicon"><FontAwesomeIcon icon={faArrowUp} /></span></td>
														<td><Image src="assets/images/color/bch.svg" width={50} height={50} alt="coin" className="coinlisticon" />BCH Sent</td>
														<td className="breaktagtd"><b>1.00 BCH</b><br /><span className="t-gray">≈$0.00</span></td>
														<td className="breaktagtd"><b>18:00:00</b><br /><span className="t-gray">30/07/2025</span></td>
														<td><Badge bg="danger">Cancelled</Badge></td>
													</tr>
													<tr>
														<td><span className="icontypes"><FontAwesomeIcon icon={faArrowsRotate} /></span></td>
														<td><Image src="assets/images/color/trx.svg" width={50} height={50} alt="coin" className="coinlisticon" />TRX Convert</td>
														<td><b>1.00 TRX</b><br /><span className="t-gray">≈$0.00</span></td>
														<td className="breaktagtd"><b>18:00:00</b><br /><span className="t-gray">30/07/2025</span></td>
														<td><Badge bg="success">Completed</Badge></td>
													</tr>
												</tbody>
											</Table>
										</SimpleBar>
										<ResponsiveTable tableId="table3" />
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


export default Dashboard;