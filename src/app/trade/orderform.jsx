import React, { useState } from 'react'
import { Table, Form, InputGroup, Nav, Tab, Button, Dropdown, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Slider from './RangeSlider';
import Link from "next/link";

const orderform = () => {
    const [showModal1, setShowModal1] = useState(false);

    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);
    function buyTab(event) {

        const element1 = document.getElementById("tradepage");
        element1?.classList.add("buyorderformactive1");
        element1?.classList.remove("sellorderformactive1");
        event.target.classList.add("active");

        const tabFirst = document.getElementById("sellTab");
        tabFirst?.classList.remove("active");
    }

    function sellTab(event) {
        const element2 = document.getElementById("tradepage");
        element2?.classList.add("sellorderformactive1");
        element2?.classList.remove("buyorderformactive1");
        event.target.classList.add("active");

        const tabSecond = document.getElementById("buyTab");
        tabSecond?.classList.remove("active");
    }

    function closeTab(event) {
        const element3 = document.getElementById("tradepage");
        element3?.classList.remove("sellorderformactive1");
        element3?.classList.remove("buyorderformactive1");

        const buyclose = document.getElementById("buyclose");
        buyclose?.classList.remove("active");

        const sellclose = document.getElementById("sellclose");
        sellclose?.classList.remove("active");
    }
    const [selectedType, setSelectedType] = useState("Stop Limit");
    return (
        <div className="orderform griddragoption" id="orderformtabshow">
            <div className="orderformbox">
                <div className="orderformbg ordrfrmbg-y">
                    <div className="buyselltabbg">
                        <Nav variant="pills" className="orderfrmtab buyselltab">
                            <Nav.Item><Nav.Link id="buyTab" onClick={buyTab} className="active">Buy</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link id="sellTab" onClick={sellTab}>Sell</Nav.Link></Nav.Item>
                        </Nav>
                    </div>
                </div>
                <div className="clostbuytab" onClick={closeTab}>
                    <a><FontAwesomeIcon icon={faTimes} /></a>
                </div>
                <ul className="ruleslist">
                    <li><a><FontAwesomeIcon icon={faInfoCircle} /> <span className="thide">Trading Rules</span>
                        <div className="none rulesnotes">
                            <Table className="sitetable" id="table7">
                                <tbody>
                                    <tr>
                                        <td>Minimum Trade Amount : </td>
                                        <td>0.000001 ETH</td>
                                    </tr>
                                    <tr>
                                        <td>Min Price Movement : </td>
                                        <td>0.000001 ETH</td>
                                    </tr>
                                    <tr>
                                        <td>Minimum Order Size : </td>
                                        <td>0.000001 ETH</td>
                                    </tr>
                                    <tr>
                                        <td>Maximum Market Order Amount : </td>
                                        <td>0.000001 ETH</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </a>
                    </li>
                </ul>
                <Tab.Container defaultActiveKey="limit">
                    <Nav variant="pills" className="orderfrmtab limitabbg">
                        <Nav.Item><Nav.Link eventKey="limit">Limit</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="market">Market</Nav.Link></Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Dropdown onSelect={(e) => setSelectedType(e)}>
                                    <Dropdown.Toggle id="" className='moredrp'>
                                        {selectedType}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item eventKey="stoplimit">Stop Limit</Dropdown.Item>
                                        <Dropdown.Item eventKey="stoploss">Stop Loss</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="limit">
                            <div className="orderformbg1">
                                <div className="buyorderform">
                                    <Form className="siteformbg">
                                        <Form.Group className="form-group">
                                            <Form.Label>Price</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="" id='buyprice' />
                                                <InputGroup.Text>BTC</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Amount</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="" id="buyvolume" />
                                                <InputGroup.Text className="p-0">
                                                    <Form.Select className="form-select  form-control amtdrpdon-Y">
                                                        <option value="ETH">ETH</option>
                                                        <option value="BTC">BTC</option>
                                                    </Form.Select>
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Total</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="" id='buytotal' />
                                                <InputGroup.Text>BTC</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Slider />
                                        <Form.Group className="form-group fee-formbox bg-none">
                                            <InputGroup>
                                                <InputGroup.Text>Fee</InputGroup.Text>
                                                <InputGroup.Text className="feeamt">0.25 BTC</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        {/* <div className="text-center ">
                                            <Button className="btn btn-block sitebtn green-btn" onClick={handleShow1} id='buylimit_order'>Buy BTC</Button>
                                              <Button className="btn btn-block sitebtn" onClick={handleShow1} id='buylimit_order'>Buy BTC</Button>
                                        </div> */}
                                         <div class="d-flex gap-2"><button type="button" id="" class="sitebtn w-100" fdprocessedid="hze9bm">Sign in</button><button type="button" id="" class="sitebtn w-100" fdprocessedid="t9n6hya">Sign up</button></div>
                                    </Form>
                                </div>
                                <div className="sellorderform">
                                    <Form className="siteformbg">
                                        <Form.Group className="form-group">
                                            <Form.Label>Price</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="" id='sellprice' />
                                                <InputGroup.Text>BTC</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Amount</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="" id='sellvolume' />
                                                <InputGroup.Text>ETH</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Total</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="" id='selltotal' />
                                                <InputGroup.Text>BTC</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Slider />
                                        <Form.Group className="form-group fee-formbox bg-none">
                                            <InputGroup>
                                                <InputGroup.Text>Fee</InputGroup.Text>
                                                <InputGroup.Text className="feeamt">0.25 BTC</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <div className="text-center">
                                            <Button className="btn btn-block sitebtn red-btn" id='selllimit_order'>Sell BTC</Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
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
                <Modal show={showModal1} onHide={handleClose1} centered size="md" className="modalbgt authmodal withdrmodal" >
                    <Modal.Header closeButton>
                        <Modal.Title>Order Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="lightgraybg">
                            <div className="table-responsive sitescroll">
                                {/* Replace the hidden input with a React state if needed */}
                                <input type="hidden" id="confirmpaymenttype" />
                                <Table className="sitetable">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span className="lastvalue">Type</span>
                                            </td>
                                            <td className="text-end">
                                                <span className="lastvalue lastnum" id="modal-trade-type">
                                                    {/* Dynamic content */}00
                                                </span>
                                            </td>
                                        </tr>
                                        <tr id="stop_price_div">
                                            <td>
                                                <span className="lastvalue">Stop Price</span>
                                            </td>
                                            <td className="text-end">
                                                <span className="lastvalue lastnum" id="modal-trade-stopprice">
                                                    {/* Dynamic content */}00
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="lastvalue">Price</span>
                                            </td>
                                            <td className="text-end">
                                                <span className="lastvalue lastnum" id="modal-trade-price">
                                                    {/* Dynamic content */}00
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="lastvalue">Volume</span>
                                            </td>
                                            <td className="text-end">
                                                <span className="lastvalue lastnum" id="modal-trade-size">
                                                    {/* Dynamic content */}000
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <div className="d-flex gap-2 mt-3">
                            <Button className='sitebtn' id='cancel'>
                                Back
                            </Button>
                            <Button className="sitebtn confirmbtn" id='confirm'>
                                Confirm
                            </Button>
                        </div>
                    </Modal.Body>
                </Modal>

            </div>
        </div>
    )
}

export default orderform