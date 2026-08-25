"use client"
import React, { useState } from "react";
import Link from 'next/link';
import { Container, Image, Table, Button, Form, Nav, Row, Col, Modal, NavDropdown, ProgressBar } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faSortDown,faMagnifyingGlassDollar} from '@fortawesome/free-solid-svg-icons';
import ResponsiveTable from '../components/ResponsiveTable';
import Leftsidemenu from '../components/Leftsidemenu';
import Select from 'react-select';



const Personalwallet = () => {

	const [showModal1, setShowModal1] = useState(false);
	const handleShowModal1 = () => setShowModal1(true);
	const handleCloseModal1 = () => setShowModal1(false);

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
					<h2 className="h2">Personal Wallet</h2>
					<div className="boxtabb tabrightbox">
						<Nav className="nav nav-tabs tabbanner border-0" role="tablist">
							<Nav.Item className="nav-item"><Nav.Link as={Link} href="/personalwallet" className="active">Overview</Nav.Link></Nav.Item>
							<Nav.Item className="nav-item"><Nav.Link as={Link} href="/personalsend">Send</Nav.Link></Nav.Item>
							<Nav.Item className="nav-item"><Nav.Link as={Link} href="/personalreceive">Receive</Nav.Link></Nav.Item>
							<Nav.Item className="nav-item"><Nav.Link as={Link} href="/personalconvert">Convert</Nav.Link></Nav.Item>
							<Nav.Item className="nav-item"><Nav.Link as={Link} href="/personaltransfer">Transfer</Nav.Link></Nav.Item>
						</Nav>
					</div>
				</Container>
			</div>
			<article className="gridparentbox">
				<Container className="sitecontainer walletoverviewbg">
					<div className="panelcontentbox">
						<div className="wlltpageblnce">
							<div className="balanceshowt totblance d-flex align-items-center">
								<div>
									<h5>Personal balances<span className="ps-2"><FontAwesomeIcon icon={faEye} /></span></h5>
									<h4 className="h4">$ 0.00000
										<span className="h5">

											<Select options={options} id='currency' styles={customStyles} value={singleOption} onChange={handleSingleChange} getOptionLabel={customOptionLabel} />

											{/* <NavDropdown title={<div className="">USD <FontAwesomeIcon icon={faSortDown} /></div>} id="basic-nav-dropdown">
											<NavDropdown.Item as={Link} href="#">USD</NavDropdown.Item>    
											<NavDropdown.Item as={Link} href="#">INR</NavDropdown.Item>    
											<NavDropdown.Item as={Link} href="#">TRX</NavDropdown.Item>                 
										</NavDropdown> */}

										</span></h4>
								</div>
								<div className="text-end">
									<Image src="assets/images/personalact.svg" alt="icon" withd={20} height={20} />
								</div>
							</div>
						</div>
					</div>
					<div className="wllettable panelcontentbox mobilepaneltablebox mt-3">
						<Row>
							<Col xl={3} lg={4} md={6}>
								<Form className="siteformbg">
									<div className="supportsearch p-0">
										<Form.Group className="form-group mb-0">
											<Form.Control placeholder="Find Asset" id="search" />
										</Form.Group>
									</div>
								</Form>
							</Col>
						</Row>
						<div className="tabrightbox miss-btn-add">
							<Button className="sitebtn btn-sm ms-3" id="addcoinbtn" onClick={handleShowModal1}>Request to add coin</Button> 
							<Button  href="/missingfund" className="sitebtn btn-sm ms-3" id="addcoinbtn" ><span className="pe-2">
						   <FontAwesomeIcon icon={faMagnifyingGlassDollar} /></span>Missing Fund Search</Button> 
						</div>

						<div className="bordertablebox mt-3">
							<SimpleBar className="table-responsive sitescroll">
								<Table className="sitetable table-responsive-stack historytable" id="table1">
									<thead>
										<tr>
											<th>Asset</th>
											<th>Amount</th>
											<th>Avg.Cost</th>
											<th>Allocation</th>
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
											<td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />BTC</td>
											<td className="breaktagtd"><b>0.293985<br /><span className="t-gray">≈$0.00</span></b></td>
											<td>$23.72</td>
											<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
											<td><Link href="/personalsend" className="btn borderbtn green-btn btn-sm me-1">Send</Link><Link href="/personalreceive" className="btn borderbtn red-btn btn-sm">Receive</Link></td>
										</tr>
										<tr>
											<td><Image src="assets/images/color/eth.svg" width={50} height={50} alt="coin" className="coinlisticon" />ETH</td>
											<td className="breaktagtd"><b>0.293985<br /><span className="t-gray">≈$0.00</span></b></td>
											<td>$23.72</td>
											<td><div className="d-flex prgrsflx"><div>0%</div><div><ProgressBar variant="success" now={0} /></div></div></td>
											<td><Link href="/personalsend" className="btn borderbtn green-btn btn-sm me-1">Send</Link><Link href="/personalreceive" className="btn borderbtn red-btn btn-sm">Receive</Link></td>
										</tr>
										<tr>
											<td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" />SOL</td>
											<td className="breaktagtd"><b>0.293985<br /><span className="t-gray">≈$0.00</span></b></td>
											<td>$23.72</td>
											<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
											<td><Link href="/personalsend" className="btn borderbtn green-btn btn-sm me-1">Send</Link><Link href="/personalreceive" className="btn borderbtn red-btn btn-sm">Receive</Link></td>
										</tr>
										<tr>
											<td><Image src="assets/images/color/ton.svg" width={50} height={50} alt="coin" className="coinlisticon" />TON</td>
											<td className="breaktagtd"><b>0.293985<br /><span className="t-gray">≈$0.00</span></b></td>
											<td>$23.72</td>
											<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
											<td><Link href="/personalsend" className="btn borderbtn green-btn btn-sm me-1">Send</Link><Link href="/personalreceive" className="btn borderbtn red-btn btn-sm">Receive</Link></td>
										</tr>
										<tr>
											<td><Image src="assets/images/color/trx.svg" width={50} height={50} alt="coin" className="coinlisticon" />TRX</td>
											<td className="breaktagtd"><b>0.293985<br /><span className="t-gray">≈$0.00</span></b></td>
											<td>$23.72</td>
											<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
											<td><Link href="/personalsend" className="btn borderbtn green-btn btn-sm me-1">Send</Link><Link href="/personalreceive" className="btn borderbtn red-btn btn-sm">Receive</Link></td>
										</tr>
										<tr>
											<td><Image src="assets/images/color/bch.svg" width={50} height={50} alt="coin" className="coinlisticon" />BCH</td>
											<td className="breaktagtd"><b>0.293985<br /><span className="t-gray">≈$0.00</span></b></td>
											<td>$23.72</td>
											<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
											<td><Link href="/personalsend" className="btn borderbtn green-btn btn-sm me-1">Send</Link><Link href="/personalreceive" className="btn borderbtn red-btn btn-sm">Receive</Link></td>
										</tr>
										<tr>
											<td><Image src="assets/images/color/usdt.svg" width={50} height={50} alt="coin" className="coinlisticon" />USDT</td>
											<td className="breaktagtd"><b>0.293985<br /><span className="t-gray">≈$0.00</span></b></td>
											<td>$23.72</td>
											<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
											<td><Link href="/personalsend" className="btn borderbtn green-btn btn-sm me-1">Send</Link><Link href="/personalreceive" className="btn borderbtn red-btn btn-sm">Receive</Link></td>
										</tr>
										<tr>
											<td><Image src="assets/images/color/avax.svg" width={50} height={50} alt="coin" className="coinlisticon" />AVAX</td>
											<td className="breaktagtd"><b>0.293985<br /><span className="t-gray">≈$0.00</span></b></td>
											<td>$23.72</td>
											<td><div className="d-flex prgrsflx"><div>40%</div><div><ProgressBar variant="success" now={40} /></div></div></td>
											<td><Link href="/personalsend" className="btn borderbtn green-btn btn-sm me-1">Send</Link><Link href="/personalreceive" className="btn borderbtn red-btn btn-sm">Receive</Link></td>
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
			<Modal className="modalbgt" show={showModal1} onHide={handleCloseModal1} aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton>
					<Modal.Title>Request to add coin or token</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className='siteformbg'>
						<Form.Group className="form-group">
							<Form.Label>Blockchain</Form.Label>
							<Form.Control type="text" id="blockchain" />
						</Form.Group>
						<Form.Group className="form-group">
							<Form.Label>Hash</Form.Label>
							<Form.Control type="text" id="hash" />
						</Form.Group>
						<Form.Group className="form-group">
							<Form.Label>Coins or tokens</Form.Label>
							<Form.Control type="text" id="coin" />
						</Form.Group>
						<Form.Group className="form-group">
							<Form.Label>Description (optional)</Form.Label>
							<Form.Control as="textarea" rows={5} name="Message" id="description" />
						</Form.Group>
						<div className="text-center">
							<Button className='sitebtn w-100' id="requestbtn">Send</Button>
						</div>
					</Form>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default Personalwallet;