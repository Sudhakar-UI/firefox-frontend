import React from 'react'
import { Image, Table, Nav, Tab,  Form, InputGroup, Button, Dropdown, Modal} from 'react-bootstrap'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal,faArrowUp,faArrowDown,} from '@fortawesome/free-solid-svg-icons';
import Slider from './RangeSlider';

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
        console.log('clickbuysell');
    }
 const handleShow1 = () => setShowModal1(true);
    return (
        <div className="orderbook griddragoption">
            <div className="suborderbook buysellshow" id="suborderbook">
                   <Tab.Container defaultActiveKey="limit">
                    <Nav variant="pills" className="orderfrmtab limitabbg">
                        <Nav.Item><Nav.Link eventKey="limit">Limit</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="market">Market</Nav.Link></Nav.Item>
                        <Nav.Item>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="limit">
                             <Nav variant="pills" className="tabbanner charttabbg orderchangebg">
                        <Nav.Item><Nav.Link className="buysellshow" onClick={buysellShow}><Image src="assets/images/buy-sell-icon.svg" alt="icon" width={20} height={20} /></Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link className="buyshow" onClick={buyShow}><Image src="assets/images/buy-icon.svg" alt="icon" width={20} height={20} /></Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link className="sellshow" onClick={sellShow}><Image src="assets/images/sell-icon.svg" alt="icon" width={20} height={20} /></Nav.Link></Nav.Item>
                    </Nav>
                        </Tab.Pane>
                        <Tab.Pane eventKey="market">
                            <div className="orderformbg1">
                                <div className="buyorderform">
                                    <Form className="siteformbg">
                                        <Form.Group className="form-group">
                                            <Form.Label>Price</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="" id='buy_marketprice' />
                                                <InputGroup.Text>BTC</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Amount</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="" id='buymarketvolume' />
                                                <InputGroup.Text>ETH</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Slider />

                                        <div className="text-center">
                                            <Button className="btn btn-block sitebtn green-btn" id='buymarket_order'>Buy BTC</Button>
                                        </div>
                                    </Form>
                                </div>
                                <div className="sellorderform">
                                    <Form className="siteformbg">
                                        <Form.Group className="form-group">
                                            <Form.Label>Price</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="" id='sell_marketprice' />
                                                <InputGroup.Text>BTC</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Amount</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="" id='sellmarketvolume' />
                                                <InputGroup.Text>ETH</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>

                                        <Slider />

                                        <div className="text-center">
                                            <Button className="btn btn-block sitebtn red-btn" id='sellmarket_order'>Sell BTC</Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="stoplimit">
                            <div className="orderformbg1">
                                <div className="buyorderform">
                                    <Form className="siteformbg">
                                        <Form.Group className="form-group">
                                            <Form.Label>Trigger Price</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="0.0000" id='triggerprice' />
                                                <InputGroup.Text>BTC</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Price</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="0.0000" id='stopprice' />
                                                <InputGroup.Text>ETH</InputGroup.Text>
                                                <InputGroup.Text className="p-0">
                                                    <Form.Select className="form-control">
                                                        <option value="1">Limit</option>
                                                        <option value="2">Market</option>
                                                    </Form.Select>
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Amount</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="0.0000" id='stopamount' />
                                                <InputGroup.Text>ETH</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Total</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="0.0000" id='stoptotal' />
                                                <InputGroup.Text>BTC</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group bg-none">
                                            <div className="control-value-box stoplimtboxt">
                                                <div>
                                                    <div className="link-div">
                                                        <div className="activelimit">25%</div>
                                                        <div>50%</div>
                                                        <div>75%</div>
                                                        <div>100%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form.Group>

                                        <div className="text-center">
                                            <Button className="btn btn-block sitebtn green-btn" id='stopsubmit'>Buy BTC</Button>
                                        </div>
                                    </Form>
                                </div>
                                <div className="sellorderform">
                                    <Form className="siteformbg">
                                        <Form.Group className="form-group">
                                            <Form.Label>Trigger Price</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="0.0000" id='stoptriggerprice' />
                                                <InputGroup.Text>BTC</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Price</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="0.0000" id='stopsellprice' />
                                                <InputGroup.Text>ETH</InputGroup.Text>
                                                <InputGroup.Text className="p-0">
                                                    <Form.Select className="form-control">
                                                        <option value="1">Limit</option>
                                                        <option value="2">Market</option>
                                                    </Form.Select>
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Amount</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="0.0000" id='stopsellamount' />
                                                <InputGroup.Text>ETH</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Total</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="0.0000" id='stopselltotal' />
                                                <InputGroup.Text>BTC</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group bg-none">
                                            <div className="control-value-box stoplimtboxt">
                                                <div>
                                                    <div className="link-div">
                                                        <div className="activelimit">25%</div>
                                                        <div>50%</div>
                                                        <div>75%</div>
                                                        <div>100%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form.Group>
                                        <div className="text-center">
                                            <Button className="btn btn-block sitebtn red-btn" id='stopsubmit'>Sell BTC</Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="stoploss">
                            <div className="orderformbg1">
                                <div className="buyorderform">
                                    <Form className="siteformbg">
                                        <Form.Group className="form-group">
                                            <Form.Label>Price</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="0.0000" id='stoplossprice' />
                                                <InputGroup.Text>BTC</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Amount</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="0.0000" id='stoplossamount' />
                                                <InputGroup.Text>ETH</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Total</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="0.0000" id='stoplosstotal' />
                                                <InputGroup.Text>BTC</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group bg-none">
                                            <div className="control-value-box stoplimtboxt">
                                                <div>
                                                    <div className="link-div">
                                                        <div className="activelimit">25%</div>
                                                        <div>50%</div>
                                                        <div>75%</div>
                                                        <div>100%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form.Group>

                                        <div className="text-center">
                                            <Button className="btn btn-block sitebtn green-btn" id='stopsubmit'>Buy BTC</Button>
                                        </div>
                                    </Form>
                                </div>
                                <div className="sellorderform">
                                    <Form className="siteformbg">
                                        <Form.Group className="form-group">
                                            <Form.Label>Price</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="0.0000" id='sellorderprice' />
                                                <InputGroup.Text>BTC</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Amount</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="0.0000" id='sellorderamount' />
                                                <InputGroup.Text>ETH</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Total</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="0.0000" id='sellordertotal' />
                                                <InputGroup.Text>BTC</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group bg-none">
                                            <div className="control-value-box stoplimtboxt">
                                                <div>
                                                    <div className="link-div">
                                                        <div className="activelimit">25%</div>
                                                        <div>50%</div>
                                                        <div>75%</div>
                                                        <div>100%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form.Group>
                                        <div className="text-center">
                                            <Button className="btn btn-block sitebtn red-btn" id='submit'>Sell BTC</Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                <div className="d-flex">
                <h2 className="heading-box">Order Book</h2>
                 <h2 className="heading-box">markets</h2>
                 </div>
                <div className="tabrightbox">
                    <Nav variant="pills" className="tabbanner charttabbg orderchangebg">
                        <Nav.Item><Nav.Link className="buysellshow" onClick={buysellShow}><Image src="assets/images/buy-sell-icon.svg" alt="icon" width={20} height={20} /></Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link className="buyshow" onClick={buyShow}><Image src="assets/images/buy-icon.svg" alt="icon" width={20} height={20} /></Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link className="sellshow" onClick={sellShow}><Image src="assets/images/sell-icon.svg" alt="icon" width={20} height={20} /></Nav.Link></Nav.Item>
                    </Nav>
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
                        <div className="table-responsive sitescroll">
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
                        </div>
                    </div>
                    <div className="livepricebox" id="livepricebox">
                        <Table className="sitetable">
                            <thead>
                                <tr>
                                    <th><span className="t-green">0.256
                                         <FontAwesomeIcon icon={faArrowUp} className="text-green-500 ms-1" />
                                          <FontAwesomeIcon icon={faArrowDown} className="text-red-500 ms-1" /></span></th>
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
            </div>
        </div>
    )
}

export default Orderbook