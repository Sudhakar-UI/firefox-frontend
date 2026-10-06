
"use client"
import React, { useState } from 'react'
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import Link from 'next/link';
import { Container, Form, Image, Table, InputGroup, Button, Row, Col, Nav, Tab, Modal, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode, faExchange, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Leftsidemenu from '../components/Leftsidemenu';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../components/ResponsiveTable';

const Transferhistory = () => {

  return (
    <div className="pagecontent gridpagecontent innerpagegrid">
      <div className="backgroundoverlay" id="backgroundoverlay"></div>
      <Userheader />
      <Leftsidemenu />
        <div className="innerpagecontent">
            <Container className="sitecontainer">
                <h2 className="h2">History</h2>
                <div className="boxtabb tabrightbox">
                        <Nav className="nav nav-tabs tabbanner border-0" role="tablist">
                            <Nav.Item className="nav-item"><Nav.Link href="/sendhistory">Send</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item"><Nav.Link href="/receivehistory">Receive</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item"><Nav.Link href="/converthistory">Convert</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item"><Nav.Link href="/transferhistory" className="active">Transfer</Nav.Link></Nav.Item>
                        </Nav>
                    </div>
            </Container>
        </div>
        <article className="gridparentbox">
          <Container className="sitecontainer">  
            <div className="panelcontentbox">
          <Tab.Container defaultActiveKey="personaltrans">
					<div className="innerpagetab">
						<Nav className="nav nav-tabs tabbanner" role="tablist">
							<Nav.Item className="nav-item"><Nav.Link eventKey="personaltrans">Personal</Nav.Link></Nav.Item>
							<Nav.Item className="nav-item"><Nav.Link eventKey="businesstrans">Business</Nav.Link></Nav.Item>       
						</Nav>
					</div>
					<Tab.Content className="mt-3">
							<Tab.Pane eventKey="personaltrans">
								<div className="bordertablebox">
								<SimpleBar className="table-responsive sitescroll">
									<Table className="sitetable table-responsive-stack historytable" id="table1">
										<thead>
											<tr>
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
												<td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />BTC</td>
												<td className="breaktagtd"><b>1.00 BTC</b><br/><span className="t-gray">≈$0.00</span></td>
												<td className="breaktagtd"><b>18:00:00</b><br/><span className="t-gray">30/07/2025</span></td>
												<td><Badge bg="success">Completed</Badge></td>
											</tr>
											<tr>
												<td><Image src="assets/images/color/eth.svg" width={50} height={50} alt="coin" className="coinlisticon" />ETH</td>
												<td className="breaktagtd"><b>1.00 ETH</b><br/><span className="t-gray">≈$0.00</span></td>
												<td className="breaktagtd"><b>18:00:00</b><br/><span className="t-gray">30/07/2025</span></td>
												<td><Badge bg="warning">Pending</Badge></td>
											</tr>
											<tr>
												<td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" />SOL</td>
												<td className="breaktagtd"><b>1.00 SOL</b><br/><span className="t-gray">≈$0.00</span></td>
												<td className="breaktagtd"><b>18:00:00</b><br/><span className="t-gray">30/07/2025</span></td>
												<td><Badge bg="danger">Cancelled</Badge></td>
											</tr>
											<tr>
												<td><Image src="assets/images/color/trx.svg" width={50} height={50} alt="coin" className="coinlisticon" />TRX</td>
												<td className="breaktagtd"><b>1.00 TRX</b><br/><span className="t-gray">≈$0.00</span></td>
												<td className="breaktagtd"><b>18:00:00</b><br/><span className="t-gray">30/07/2025</span></td>
												<td><Badge bg="success">Completed</Badge></td>
											</tr>
											<tr>
												<td><Image src="assets/images/color/bch.svg" width={50} height={50} alt="coin" className="coinlisticon" />BCH</td>
												<td className="breaktagtd"><b>1.00 BCH</b><br/><span className="t-gray">≈$0.00</span></td>
												<td className="breaktagtd"><b>18:00:00</b><br/><span className="t-gray">30/07/2025</span></td>
												<td><Badge bg="success">Completed</Badge></td>
											</tr>
											<tr>
												<td><Image src="assets/images/color/ltc.svg" width={50} height={50} alt="coin" className="coinlisticon" />LTC</td>
												<td className="breaktagtd"><b>1.00 LTC</b><br/><span className="t-gray">≈$0.00</span></td>
												<td className="breaktagtd"><b>18:00:00</b><br/><span className="t-gray">30/07/2025</span></td>
												<td><Badge bg="warning">Pending</Badge></td>
											</tr>
											<tr>
												<td><Image src="assets/images/color/usdt.svg" width={50} height={50} alt="coin" className="coinlisticon" />USDT</td>
												<td className="breaktagtd"><b>1.00 USDT</b><br/><span className="t-gray">≈$0.00</span></td>
												<td className="breaktagtd"><b>18:00:00</b><br/><span className="t-gray">30/07/2025</span></td>
												<td><Badge bg="danger">Cancelled</Badge></td>
											</tr>
											<tr>
												<td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />BTC</td>
												<td className="breaktagtd"><b>1.00 BTC</b><br/><span className="t-gray">≈$0.00</span></td>
												<td className="breaktagtd"><b>18:00:00</b><br/><span className="t-gray">30/07/2025</span></td>
												<td><Badge bg="success">Completed</Badge></td>
											</tr>
										</tbody>
									</Table>
								</SimpleBar>
								<ResponsiveTable tableId="table1" />
								</div>
							</Tab.Pane>
							<Tab.Pane eventKey="businesstrans">
								<div className="bordertablebox">
								<SimpleBar className="table-responsive sitescroll">
									<Table className="sitetable table-responsive-stack historytable" id="table2">
										<thead>
											<tr>
												<th>Asset</th>
												<th>Amount</th>
												<th>Time</th>
												<th>Status</th>
											</tr>
										</thead>
										<tbody>
											{/* <tr className="nodata">
												<td colSpan={4}>
													<Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />No record found
												</td>
											</tr>   */}
										<tr>									
												<td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />BTC</td>
												<td className="breaktagtd"><b>1.00 BTC</b><br/><span className="t-gray">≈$0.00</span></td>
												<td className="breaktagtd"><b>18:00:00</b><br/><span className="t-gray">30/07/2025</span></td>
												<td><Badge bg="success">Completed</Badge></td>
											</tr>
											<tr>
												<td><Image src="assets/images/color/eth.svg" width={50} height={50} alt="coin" className="coinlisticon" />ETH</td>
												<td className="breaktagtd"><b>1.00 ETH</b><br/><span className="t-gray">≈$0.00</span></td>
												<td className="breaktagtd"><b>18:00:00</b><br/><span className="t-gray">30/07/2025</span></td>
												<td><Badge bg="warning">Pending</Badge></td>
											</tr>
											<tr>
												<td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" />SOL</td>
												<td className="breaktagtd"><b>1.00 SOL</b><br/><span className="t-gray">≈$0.00</span></td>
												<td className="breaktagtd"><b>18:00:00</b><br/><span className="t-gray">30/07/2025</span></td>
												<td><Badge bg="danger">Cancelled</Badge></td>
											</tr>
											<tr>
												<td><Image src="assets/images/color/trx.svg" width={50} height={50} alt="coin" className="coinlisticon" />TRX</td>
												<td className="breaktagtd"><b>1.00 TRX</b><br/><span className="t-gray">≈$0.00</span></td>
												<td className="breaktagtd"><b>18:00:00</b><br/><span className="t-gray">30/07/2025</span></td>
												<td><Badge bg="success">Completed</Badge></td>
											</tr>
											<tr>
												<td><Image src="assets/images/color/bch.svg" width={50} height={50} alt="coin" className="coinlisticon" />BCH</td>
												<td className="breaktagtd"><b>1.00 BCH</b><br/><span className="t-gray">≈$0.00</span></td>
												<td className="breaktagtd"><b>18:00:00</b><br/><span className="t-gray">30/07/2025</span></td>
												<td><Badge bg="success">Completed</Badge></td>
											</tr>
											<tr>
												<td><Image src="assets/images/color/ltc.svg" width={50} height={50} alt="coin" className="coinlisticon" />LTC</td>
												<td className="breaktagtd"><b>1.00 LTC</b><br/><span className="t-gray">≈$0.00</span></td>
												<td className="breaktagtd"><b>18:00:00</b><br/><span className="t-gray">30/07/2025</span></td>
												<td><Badge bg="warning">Pending</Badge></td>
											</tr>
											<tr>
												<td><Image src="assets/images/color/usdt.svg" width={50} height={50} alt="coin" className="coinlisticon" />USDT</td>
												<td className="breaktagtd"><b>1.00 USDT</b><br/><span className="t-gray">≈$0.00</span></td>
												<td className="breaktagtd"><b>18:00:00</b><br/><span className="t-gray">30/07/2025</span></td>
												<td><Badge bg="danger">Cancelled</Badge></td>
											</tr>
											<tr>
												<td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" />BTC</td>
												<td className="breaktagtd"><b>1.00 BTC</b><br/><span className="t-gray">≈$0.00</span></td>
												<td className="breaktagtd"><b>18:00:00</b><br/><span className="t-gray">30/07/2025</span></td>
												<td><Badge bg="success">Completed</Badge></td>
											</tr>
										</tbody>
									</Table>
								</SimpleBar>
								<ResponsiveTable tableId="table2" />
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
export default Transferhistory