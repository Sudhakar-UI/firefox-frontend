"use client"
import React, { useState } from "react";
import Link from 'next/link';
import { Container, Image, Nav, Tab, Table, Form, Badge, Modal, Row, Col, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Leftsidemenu from '../components/Leftsidemenu';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import ResponsiveTable from '../components/ResponsiveTable';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Desktoppage = () => {

    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    const handleClose2 = () => setShowModal2(false);
    const handleShow1 = () => setShowModal1(true);
    const handleShow2 = () => setShowModal2(true);

    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <div className="innerpagecontent">
                <Container className="sitecontainer">
                    <h2 className="h2"> Current Holding</h2>
                    <div className="boxtabb tabrightbox">
                        <Nav className="nav nav-tabs tabbanner border-0" role="tablist">
                            <Nav.Item className="nav-item"><Nav.Link href="/saving">Overview</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item"><Nav.Link href="/earnhistory" className="active">Current</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item"><Nav.Link href="/hostorical">Hostorical</Nav.Link></Nav.Item>
                        </Nav>
                    </div>
                </Container>
            </div>
            <article className="gridparentbox">
                <Container className="sitecontainer earnbg">
                    <div className="balanceshowt totblance ern-hts-y gradientdarkbg">
                        <div className="table-content">
                            <div>
                                {/* <h5> */}
                                    {/* Earn Account <FontAwesomeIcon icon={faEyeSlash} id="eyeicon" /> */}
                                    <h5 className="subhead p-0 pb-2 d-flex align-items-center gap-2">
                                       Earn Account
                                        <OverlayTrigger
                                            placement="bottom"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={
                                                <Tooltip id="staylogged-tooltip">
                                                   Earn Account
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

                                    </h5>

                                {/* </h5> */}
                                <h4 className="h4">$ 0.00000 <span className="h5">= 0.0000000 USD</span></h4>
                            </div>
                            <div className="text-end">
                                <Image src="assets/images/earn-history.svg" alt="icon" className="tb-img" />
                            </div>
                        </div>
                    </div>
                    <div className='earntablebg mt-3 panelcontentbox'>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="current">
                            <div className="innerpagetab historytab">
                                {/* <h2 className="heading-box pt-0 ps-2 border-0">Popular Products</h2> */}
                            </div>
                            <div className="bordertablebox">
                                <SimpleBar className="table-responsive sitescroll">
                                    <Table className="sitetable table-responsive-stack historytable" id="table1">
                                        <thead>
                                            <tr>
                                                <th>Assets</th>
                                                <th>Amount</th>
                                                <th>Payment Date</th>
                                                <th>Duration</th>
                                                <th>Interest</th>
                                                <th>Received Interest</th>
                                                <th>Est.Interest</th>
                                                <th>Subscribe Date</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" /> BTC</td>
                                                <td>000000000</td>
                                                <td>2026-01-06 </td>
                                                <td>30 </td>
                                                <td><span className="t-green">5%</span></td>
                                                <td><span className="t-green">5%</span></td>
                                                <td><span className="t-green">5%</span></td>
                                                <td>2026-01-06</td>
                                                <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Close</Link></td>
                                            </tr>
                                            <tr>
                                                <td><Image src="assets/images/color/eth.svg" width={50} height={50} alt="coin" className="coinlisticon" />ETH</td>
                                                <td>000000000</td>
                                                <td>2026-01-06 </td>
                                                <td>30 </td>
                                                <td><span className="t-green">5%</span></td>
                                                <td><span className="t-green">5%</span></td>
                                                <td><span className="t-green">5%</span></td>
                                                <td>2026-01-06</td>
                                                <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Close</Link></td>
                                            </tr>
                                            <tr>
                                                <td><Image src="assets/images/color/bnb.svg" width={50} height={50} alt="coin" className="coinlisticon" />LTC</td>
                                                <td>000000000</td>
                                                <td>2026-01-06 </td>
                                                <td>30 </td>
                                                <td><span className="t-green">5%</span></td>
                                                <td><span className="t-green">5%</span></td>
                                                <td><span className="t-green">5%</span></td>
                                                <td>2026-01-06</td>
                                                <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Close</Link></td>
                                            </tr>
                                            <tr>
                                                <td><Image src="assets/images/color/trx.svg" width={50} height={50} alt="coin" className="coinlisticon" />TRX</td>
                                                <td>000000000</td>
                                                <td>2026-01-06 </td>
                                                <td>30 </td>
                                                <td><span className="t-green">5%</span></td>
                                                <td><span className="t-green">5%</span></td>
                                                <td><span className="t-green">5%</span></td>
                                                <td>2026-01-06</td>
                                                <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Close</Link></td>
                                            </tr>
                                            <tr>
                                                <td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" />SOL</td>
                                                <td>000000000</td>
                                                <td>2026-01-06 </td>
                                                <td>30 </td>
                                                <td><span className="t-green">5%</span></td>
                                                <td><span className="t-green">5%</span></td>
                                                <td><span className="t-green">5%</span></td>
                                                <td>2026-01-06</td>
                                                <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Close</Link></td>
                                            </tr>
                                            <tr>
                                                <td><Image src="assets/images/color/avax.svg" width={50} height={50} alt="coin" className="coinlisticon" />AVAX</td>
                                                <td>000000000</td>
                                                <td>2026-01-06 </td>
                                                <td>30 </td>
                                                <td><span className="t-green">5%</span></td>
                                                <td><span className="t-green">5%</span></td>
                                                <td><span className="t-green">5%</span></td>
                                                <td>2026-01-06</td>
                                                <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Close</Link></td>
                                            </tr>
                                            <tr>
                                                <td><Image src="assets/images/color/ton.svg" width={50} height={50} alt="coin" className="coinlisticon" />TON</td>
                                                <td>000000000</td>
                                                <td>2026-01-06 </td>
                                                <td>30 </td>
                                                <td><span className="t-green">5%</span></td>
                                                <td><span className="t-green">5%</span></td>
                                                <td><span className="t-green">5%</span></td>
                                                <td>2026-01-06</td>
                                                <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Close</Link></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </SimpleBar>
                            </div>

                            <ResponsiveTable tableId="table1" />
                        </Tab.Container>
                    </div>
                </Container >
            </article >
            <Userfooter />
            <Modal
                className="modalbgt progrsbar-d range-y"
                show={showModal1}
                onHide={handleClose1}
                aria-labelledby="contained-modal-title-vcenter"
                centered id="myModal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Close Flexible Plan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure want to close this Flexible plan?</p>
                    <Form className="siteformbg mt-4">
                        <div className="text-center">
                            <Form className="siteformbg w-100">
                                <Button className="sitebtn me-2" id="submit">
                                    Yes
                                </Button>
                                <Button className="borderbtn" id="submit">
                                    No
                                </Button>
                            </Form>

                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal subscribemodalbox' aria-labelledby="contained-modal-title-vcenter"
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
																<td className="sub-date-y">2025-06-19 11:17:05</td>
															</tr>
															<tr>
																<td>Interest Start Date</td>
																<td className="sub-date-y">2025-06-19 11:17:05</td>
															</tr>
															<tr>
																<td>Interest Period</td>
																<td className="sub-date-y">1 Day</td>
															</tr>
															<tr>
																<td>Interest Payment Date</td>
																<td className="sub-date-y">2025-06-19 11:17:05</td>
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
			</Modal> */}
        </div>
    );
}

export default Desktoppage;