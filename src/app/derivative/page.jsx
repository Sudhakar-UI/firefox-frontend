"use client"
import React, { useEffect, useState } from 'react';
import Userheader from '../components/Userheader';
import Leftsidemenu from '../components/Leftsidemenu';
import Userfooter from '../components/Userfooter';
import Livepricelist from './livepricelist'
import Chart from './chart'
import Orderbook from './orderbook'
import Orderform from './orderform'
import Openorder from './openorder'
import Tradehistory from './tradehistory'
import BuySelltab from './buyselltab'
import Recentliveprice from './recentliveprice'
import { Container, Table, Modal, Form, InputGroup, Button, Image } from 'react-bootstrap';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Link from 'next/link';


export const page = () => {
    const [showModal1, setShowModal1] = useState(false);
    // transfer modal
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);

    useEffect(() => {
        document.body.classList.add('futurespage');
        return () => {
            document.body.classList.remove('futurespage','tradepagbg');
        };
    }, []);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    function chartTab(event) {
        const element1 = document.getElementById("tradepage");
        element1?.classList.add("chartactive");
        element1?.classList.remove("openorderactive");
        element1?.classList.remove("tradeactive");
    }

    function orderTab(event) {
        const element1 = document.getElementById("tradepage");
        element1?.classList.remove("chartactive");
        element1?.classList.add("openorderactive");
        element1?.classList.remove("tradeactive");
    }

    function tradeTab(event) {
        const element1 = document.getElementById("tradepage");
        element1?.classList.remove("chartactive");
        element1?.classList.remove("openorderactive");
        element1?.classList.add("tradeactive");
    }

    useEffect(() => {
        document.body.classList.add('tradepagbg');
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const tradepageElement = document.getElementById('tradepage');
        if (windowWidth < 991) {
            tradepageElement.classList.add('buyorderformactive1');
        } else {
            tradepageElement.classList.remove('buyorderformactive1');
        }
    }, [windowWidth]);

    useEffect(() => {
        const tradepageElement = document.getElementById('tradepage');
        if (windowWidth < 767) {
            tradepageElement.classList.remove('buyorderformactive1');
        }
    }, [windowWidth]);

    return (
        <div className="pagecontent gridpagecontent tradepage chartactive" id="tradepage">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox tradecontentbox">
                <Container className="container sitecontainer">
                    <div className="grid-box-futures">
                        <div className="mobilegrid tabs-nav">
                            <li className="orderlist"><a href="#tab-1" onClick={chartTab}>Chart</a></li>
                            <li className="orderlist"><a href="#tab-2" onClick={orderTab}>Open Orders</a></li>
                        </div>
                        <BuySelltab />
                        <Recentliveprice />
                        <Livepricelist />
                        <Chart />
                        <Orderbook />
                        <Orderform />
                        <div className="walletassets">
                            <h2 className="heading-box mb-2">Assets</h2>
                            <Simplebar className="table-responsive">
                                <Table className="sitetable" id='table8'>
                                    <tbody>
                                        <tr>
                                            <td>Balance</td>
                                            <td className="text-end"><b>0 USDT</b></td>
                                        </tr>
                                        <tr>
                                            <td>Unrealized PNL</td>
                                            <td className="text-end"><b>0 USDT</b></td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2} className="text-center">
                                                <div className="d-flex">
                                                    <Link href="#" onClick={handleShow1} className="btn btn-sm borderbtn me-2">Transfer</Link>
                                                    <Link href="/deposit" className="btn btn-sm border-green me-2">Deposit</Link>
                                                    <Link href="/withdraw" className="btn btn-sm border-red">Withdraw</Link>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Simplebar>
                            <h2 className="heading-box mb-3">Contract Details BTCUSDT</h2>
                            <Simplebar className="table-responsive">
                                <Table className="sitetable" id='table9'>
                                    <tbody>
                                        <tr>
                                            <td>Expiration Date <small className="t-gray pull-right">Futures</small></td>
                                        </tr>
                                        <tr>
                                            <td>Index Price <small className="t-gray pull-right"><span>63668.94</span> USDT</small></td>
                                        </tr>
                                        <tr>
                                            <td>Mark Price <small className="t-gray pull-right"><span>63648.80</span> USDT</small></td>
                                        </tr>
                                        <tr>
                                            <td>Open Interest <small className="t-gray pull-right"><span>180636.93100</span> BTC</small></td>
                                        </tr>
                                        <tr>
                                            <td>24H Turnover <small className="t-gray pull-right"><span>3458352921.34</span> USDT</small></td>
                                        </tr>
                                        <tr>
                                            <td>24H Volume <small className="t-gray pull-right"><span>55361.10600</span> BTC</small></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Simplebar>
                        </div>
                        <Openorder />
                    </div>
                </Container>
            </article>
            <Userfooter />
            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Transfer
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group">
                            <Form.Label>From</Form.Label>
                            <Form.Select id='spot' className='form-control'>
                                <option>Spot</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="form-group form-group exchangeicon">
                            <Form.Label>To</Form.Label>
                            <div className="arrowhead"><Image src="assets/images/exchangearrow.png" alt='icon' /></div>
                            <Form.Select id='to' className='form-control'>
                                <option>Futures</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>Coin</Form.Label>
                            <Form.Select id='coin' className='form-control'>
                                <option>USDT Tether</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="form-group formtabrightbox">
                            <Form.Label>Amount</Form.Label>
                            <div className="text-end tabrightbox">0 in order / 0 available</div>
                            <InputGroup className="mb-3">
                                <Form.Control name="code" />
                                <InputGroup.Text id="basic-addon2">Max</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <p className="transnotes text-center">Transfers between Spot and Futures are considered internal and completely free of charge. These transactions are executed instantly, so you can move your funds seamlessly.</p>
                        <div className="text-center mt-3">
                            <Button type="button" className="sitebtn">Transfer</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

        </div >
    )
}

export default page;