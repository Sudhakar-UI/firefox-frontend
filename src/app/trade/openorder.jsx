import React, {useState} from 'react'
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Table, Nav, Tab ,Modal ,Form ,Button } from 'react-bootstrap';
import Link from 'next/link';


const openorder = () => {
    const [showModal1, setShowModal1] = useState(false);

    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);
    return (
        <div className="openorder griddragoption">
            <Tab.Container defaultActiveKey="openorder">
                <div className="innerpagetab historytab">
                    <Nav variant="pills" className="tabbanner">
                        <Nav.Item><Nav.Link eventKey="openorder" id='openorder'>Open Orders</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="orderhistory" id='orderhistory'>My Order History</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="tradehistory" id='tradehistory'>My Trade History</Nav.Link></Nav.Item>
                    </Nav>
                </div>
                <Tab.Content>
                    <Tab.Pane eventKey="openorder">
                        <h2 className="heading-box">Open Orders</h2>
                        <Simplebar className="table-responsive sitescroll">
                            <Table className="sitetable" id='table3'>
                                <thead>
                                    <tr>
                                        <th>Order type</th>
                                        <th>Date & Time</th>
                                        <th>Order</th>
                                        <th>Pair</th>
                                        <th>Amount</th>
                                        <th>Price</th>
                                        <th>Remaining</th>
                                        <th>Trade Fee</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Cancel</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11-12-2025,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Link href="#" onClick={handleShow1} className="btn sitebtn btn-sm" id="cancel_trade">Cancel</Link></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11-12-2025,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>ETH/BTC</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Link href="/" className="btn sitebtn btn-sm" id="cancel_trade">Cancel</Link></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11-12-2025,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>SOL/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Link href="/" className="btn sitebtn btn-sm" id="cancel_trade">Cancel</Link></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11-12-2025,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>TON/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Link href="/" className="btn sitebtn btn-sm" id="cancel_trade">Cancel</Link></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11-12-2025,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>TRX/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Link href="/" className="btn sitebtn btn-sm" id="cancel_trade">Cancel</Link></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11-12-2025,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BCH/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Link href="/" className="btn sitebtn btn-sm" id="cancel_trade">Cancel</Link></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Simplebar>
                    </Tab.Pane>
                    <Tab.Pane eventKey="orderhistory">
                        <h2 className="heading-box">My Order History</h2>
                        <Simplebar className="table-responsive sitescroll">
                            <Table className="sitetable" id='table3'>
                                <thead>
                                    <tr>
                                        <th>Order type</th>
                                        <th>Date & Time</th>
                                        <th>Order</th>
                                        <th>Pair</th>
                                        <th>Amount</th>
                                        <th>Price</th>
                                        <th>Remaining</th>
                                        <th>Trade Fee</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Cancel</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11-12-2025,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Link href="/" className="btn sitebtn btn-sm">Cancel</Link></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11-12-2025,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Link href="/" className="btn sitebtn btn-sm">Cancel</Link></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11-12-2025,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Link href="/" className="btn sitebtn btn-sm">Cancel</Link></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11-12-2025,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Link href="/" className="btn sitebtn btn-sm">Cancel</Link></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11-12-2025,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Link href="/" className="btn sitebtn btn-sm">Cancel</Link></td>
                                    </tr>
                                    <tr>
                                        <td>Limit</td>
                                        <td>11-12-2025,07:16:16</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>BTC/ETH</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>0.00520674897</td>
                                        <td>Completed</td>
                                        <td><Link href="/" className="btn sitebtn btn-sm">Cancel</Link></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Simplebar>
                    </Tab.Pane>
                   <Tab.Pane eventKey="tradehistory">
                        <h2 className="heading-box">Trade History</h2>
                        <Simplebar className="table-responsive sitescroll">
                            <Table className="sitetable" id='table4'>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Pair</th>
                                        <th>Type</th>
                                        <th>Amount</th>
                                        <th>Staus</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>18/02/2025, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0052067489771</td>
                                        <td>Confirm</td>
                                    </tr>
                                    <tr>
                                        <td>18/02/2025, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-red">Sell</span></td>
                                        <td>0052067489771</td>
                                        <td>Wating</td>
                                    </tr>
                                    <tr>
                                        <td>18/02/2025, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0052067489771</td>
                                        <td>Wating</td>
                                    </tr>
                                    <tr>
                                        <td>18/02/2025, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0052067489771</td>
                                        <td>Confirm</td>
                                    </tr>
                                    <tr>
                                        <td>18/02/2025, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-red">Sell</span></td>
                                        <td>0052067489771</td>
                                        <td>Wating</td>
                                    </tr>
                                    <tr>
                                        <td>18/02/2025, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0052067489771</td>
                                        <td>Confirm</td>
                                    </tr>
                                    <tr>
                                        <td>18/02/2025, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-red">Sell</span></td>
                                        <td>0052067489771</td>
                                        <td>Wating</td>
                                    </tr>
                                    <tr>
                                        <td>18/02/2025, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0052067489771</td>
                                        <td>Confirm</td>
                                    </tr>
                                    <tr>
                                        <td>18/02/2025, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-red">Sell</span></td>
                                        <td>0052067489771</td>
                                        <td>Wating</td>
                                    </tr>
                                    <tr>
                                        <td>18/02/2025, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-green">Buy</span></td>
                                        <td>0052067489771</td>
                                        <td>Confirm</td>
                                    </tr>
                                    <tr>
                                        <td>18/02/2025, 05:05:00</td>
                                        <td>BTC/ETH</td>
                                        <td><span className="t-red">Sell</span></td>
                                        <td>0052067489771</td>
                                        <td>Wating</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Simplebar>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Cancel
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='sub-heading'>Are you sure you want to Cancel Order?</p>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="btn sitebtn" id="cancel_market_btn">Cancel</Button>
                            <Button type="button" className="btn sitebtn" id="confirm_market_btn">Confirm</Button>
                        </div>
                </Modal.Body>
            </Modal>
        </div>
        
    )
}

export default openorder