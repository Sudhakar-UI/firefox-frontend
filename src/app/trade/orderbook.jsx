import React, { useEffect, useRef } from 'react'
import { Image, Table, Nav, Tab, Form } from 'react-bootstrap'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faArrowUp, faArrowDown, faLongArrowUp } from '@fortawesome/free-solid-svg-icons';

const Orderbook = () => {
    function buyShow() {
        const element = document.getElementById("suborderbook");
        element.classList.add("buyshow");
        element.classList.remove("sellshow");
        element.classList.remove("buysellshow");
        console.log('clickbuy');
    }

    function sellShow() {
        const element2 = document.getElementById("suborderbook");
        element2.classList.add("sellshow");
        element2.classList.remove("buyshow");
        element2.classList.remove("buysellshow");
        console.log('clicksell');
    }

function buysellShow() {
        const element1 = document.getElementById("suborderbook");
        element1.classList.add("buysellshow");
        element1.classList.remove("buyshow");
        element1.classList.remove("sellshow");
 
        // Scroll to bottom for bottom-to-top viewing
        setTimeout(() => {
            const sellboxtablebg = document.querySelector('.sellboxorder .sellboxtablebg');
            if (sellboxtablebg) {
                sellboxtablebg.scrollTop = sellboxtablebg.scrollHeight;
            }
        }, 100);
 
        console.log('clickbuysell');
    }
 
    useEffect(() => {
        // Set initial scroll position to bottom for sells table
        const sellboxtablebg = document.querySelector('.sellboxorder .sellboxtablebg');
        if (sellboxtablebg) {
            sellboxtablebg.scrollTop = sellboxtablebg.scrollHeight;
        }
    }, []);
    const scrollContainerRef = useRef(null);
    return (
        <div className="orderbook griddragoption">
            <div className="suborderbook buysellshow" id="suborderbook">
                <h2 className="heading-box">Order Book</h2>
                <Tab.Container defaultActiveKey="orderbook">
                    <div className="innerpagetab historytab">
                        <Nav variant="pills" className="tabbanner">
                            <Nav.Item><Nav.Link eventKey="orderbook" id='orderbook'>Order Book</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="trades" id='trades'>Market Trades</Nav.Link></Nav.Item>
                        </Nav>
                    </div>
                    <Tab.Content>
                        <Tab.Pane eventKey="orderbook">
                            <div className="tabrightbox d-flex">
                                {/* <Image src="assets/images/filtericon.svg" width={20} height={20} alt="icon" /> */}
                            </div>
                            <div className="orderbookscroll">
                                <div className="d-flex odrbookflex">
                                    <div>
                                        <Nav variant="pills" className="tabbanner charttabbg orderchangebg">
                                            <Nav.Item><Nav.Link className="buysellshow" onClick={buysellShow}><Image src="assets/images/buy-sell-icon.svg" alt="icon" width={20} height={20} /></Nav.Link></Nav.Item>
                                            <Nav.Item><Nav.Link className="buyshow" onClick={buyShow}><Image src="assets/images/buy-icon.svg" alt="icon" width={20} height={20} /></Nav.Link></Nav.Item>
                                            <Nav.Item><Nav.Link className="sellshow" onClick={sellShow}><Image src="assets/images/sell-icon.svg" alt="icon" width={20} height={20} /></Nav.Link></Nav.Item>
                                        </Nav>
                                    </div>
                                </div>
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
                                <div className="sellboxorder sellbxord-y" id="sellorderbox">
                                    <div className="table-responsive sitescroll" id="sellpagescroll" ref={scrollContainerRef}>
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
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897<span className="ordervolumebg bg-red" style={{ width: '70%' }}></span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897<span className="ordervolumebg bg-red" style={{ width: '30%' }}></span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897<span className="ordervolumebg bg-red" style={{ width: '50%' }}></span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897<span className="ordervolumebg bg-red" style={{ width: '40%' }}></span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897<span className="ordervolumebg bg-red" style={{ width: '30%' }}></span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-red">0.2563</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    
                                    </div>
                                </div>
                                <div className="livepricebox" id="livepricebox">
                                    <Table className="sitetable">
                                        <thead>
                                            <tr>
                                                <th><span className="t-green">0.256 <FontAwesomeIcon icon={faLongArrowUp} /></span> <span className="text-end t-gray">≈ $3.068</span></th>
                                            </tr>
                                        </thead>
                                    </Table>
                                </div>
                                <div className="buyboxorder buybxord-y" id="buyorderbox">
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
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897<span className="ordervolumebg bg-green" style={{ width: '50%' }}></span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897<span className="ordervolumebg bg-green" style={{ width: '70%' }}></span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897<span className="ordervolumebg bg-green" style={{ width: '20%' }}></span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897<span className="ordervolumebg bg-green" style={{ width: '30%' }}></span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897<span className="ordervolumebg bg-green" style={{ width: '40%' }}></span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897<span className="ordervolumebg bg-green" style={{ width: '50%' }}></span></td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-green">0.82569</span></td>
                                                        <td className="text-end">0.0052897</td>
                                                        <td className="text-end">0.0052897</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </SimpleBar>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="trades" className="tradeorderscroll">
                            <SimpleBar className="table-responsive sitescroll stesrl-y">
                                <Table className="sitetable mb-0" id="table3">
                                    <thead>
                                        <tr>
                                            <th>Price(BTC)</th>
                                            <th>Amount(BTC)</th>
                                            <th>Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><span className="t-green">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-green">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                        <tr>
                                            <td><span className="t-red">0.36985936</span></td>
                                            <td>0.00520674897</td>
                                            <td>07:16:16</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </SimpleBar>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
        </div>
    )
}

export default Orderbook