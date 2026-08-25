import React from 'react'
import { Image, Table, Nav, Tab , Form} from 'react-bootstrap'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal } from '@fortawesome/free-solid-svg-icons';

const Orderbook = () => {
    function buyShow() {
        const element = document.getElementById("suborderbook");
        element.classList.add("buyshow");
        element.classList.remove("sellshow");
        element.classList.remove("buysellshow");
    }

    function sellShow() {
        const element2 = document.getElementById("suborderbook");
        element2.classList.add("sellshow");
        element2.classList.remove("buyshow");
        element2.classList.remove("buysellshow");
    }

    function buysellShow() {
        const element1 = document.getElementById("suborderbook");
        element1.classList.add("buysellshow");
        element1.classList.remove("buyshow");
        element1.classList.remove("sellshow");
    }

    return (
        <div className="orderbook griddragoption">
            <div className="suborderbook buysellshow" id="suborderbook">
                <Tab.Container defaultActiveKey="orderbook">
                    <div className="innerpagetab historytab">
                        <Nav variant="pills" className="tabbanner">
                            <Nav.Item><Nav.Link eventKey="orderbook" id='orderbook'>Order Book</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="recenttrade" id='recenttrade'>Recent Trades</Nav.Link></Nav.Item>
                        </Nav>
                    </div>
                    <Tab.Content>
                        <Tab.Pane eventKey="orderbook">
                            <div className="futureordertab">
                                <Nav variant="pills" className="tabbanner charttabbg orderchangebg">
                                    <Nav.Item><Nav.Link className="buysellshow" onClick={buysellShow}><Image src="assets/images/buy-icon.svg" alt="icon" width={20} height={20} /></Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link className="buyshow" onClick={buyShow}><Image src="assets/images/buy-icon.svg" alt="icon" width={20} height={20} /></Nav.Link></Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="sellshow" onClick={sellShow}><Image src="assets/images/sell-icon.svg" alt="icon" width={20} height={20} /></Nav.Link></Nav.Item>
                                </Nav>
                                <div className="tabrightbox digitformbox">
                                    <Form className="siteformbg">
                                        <div className="form-group mb-0">
                                            <Form.Select className="form-control">
                                                <option>0.01</option>
                                                <option>0.1</option>
                                                <option>1</option>
                                                <option>10</option>
                                            </Form.Select>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                            <div className="orderbookscroll">
                                <SimpleBar className="table-responsive">
                                    <Table className="sitetable">
                                        <thead>
                                            <tr>
                                                <th>Price(ETH)</th>
                                                <th className="text-end">Amount(BTC)</th>
                                                <th className="text-end">Total(ETH)</th>
                                            </tr>
                                        </thead>
                                    </Table>
                                </SimpleBar>
                                <div className="sellboxorder" id="sellorderbox">
                                    <SimpleBar className="table-responsive sitescroll per-pe-tual-y">
                                        <div className="sellboxtablebg">
                                            <Table className="sitetable" id='table5'>
                                                <thead>
                                                    <tr>
                                                        <th>Price(ETH)</th>
                                                        <th className="text-end">Amount(BTC)</th>
                                                        <th className="text-end">Total(ETH)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><span className="t-red">0.005198759560</span></td>
                                                        <td className="text-end">0.005198759560</td>
                                                        <td className="text-end">0.005198759560</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.005198759560</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.005198759560</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.005198759560</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.005198759560</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.005198759560</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.005198759560</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.005198759560</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.005198759560</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.005198759560</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.005198759560</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.005198759560</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.005198759560</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.005198759560</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.005198759560</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.005198759560</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.005198759560</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.005198759560</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.005198759560</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.005198759560</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.005198759560</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.005198759560</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.005198759560</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.005198759560</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </SimpleBar>
                                </div>
                                <div className="livepricebox" id="livepricebox">
                                    <Table className="sitetable">
                                        <thead>
                                            <tr>
                                                <th><span className="t-green">0.256</span></th>
                                                <th className="text-end">0.001%<FontAwesomeIcon icon={faSignal} /></th>
                                            </tr>
                                        </thead>
                                    </Table>
                                </div>
                                <div className="buyboxorder" id="buyorderbox">
                                    <SimpleBar className="table-responsive sitescroll">
                                        <div className="sellboxtablebg">
                                            <Table className="sitetable" id='table6'>
                                                <thead>
                                                    <tr>
                                                        <th>Price(ETH)</th>
                                                        <th className="text-end">Amount(BTC)</th>
                                                        <th className="text-end">Total(ETH)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.00520674897</span></td>
                                                        <td className="text-end">0.00520674897</td>
                                                        <td className="text-end">0.00520674897</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </SimpleBar>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="recenttrade">
                            <div className="recenthistory">
                                <SimpleBar className="table-responsive sitescroll">
                                    <Table className="sitetable">
                                        <thead>
                                            <tr>
                                                <th>Price(BTC)</th>
                                                <th>Amount(BTC)</th>
                                                <th>Date &amp; Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><span className="t-green">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-green">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-red">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-red">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-red">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-green">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-green">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-red">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-green">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-green">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-red">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-green">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-green">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-red">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-red">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-red">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-red">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-red">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-red">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-red">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-red">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-red">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-red">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-red">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-red">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-red">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                            <tr>
                                                <td><span className="t-red">0.36985936</span></td>
                                                <td>0.0052</td>
                                                <td>30-12-24,07:16:16</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </SimpleBar>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
        </div>
    )
}

export default Orderbook