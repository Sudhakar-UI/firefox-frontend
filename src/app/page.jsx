'use client';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Image, Table, Accordion, Button, Tab, Nav, Badge, Tabs } from 'react-bootstrap';
import Homeheader from './components/Homeheader';
import Homefooter from './components/Homefooter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faChevronRight, faTelegramPlane, faTelegram } from '@fortawesome/free-solid-svg-icons';
import "react-multi-carousel/lib/styles.css";
import SimpleBar from 'simplebar-react';
import ResponsiveTable from '../app/components/ResponsiveTable';
import 'simplebar-react/dist/simplebar.min.css';




export default function Home() {

    const [activeKey, setActiveKey] = useState("1");
    const [activeTab, setActiveTab] = useState("trade");

    const handleToggle = (key) => {
        setActiveKey(activeKey === key ? null : key);
    };

    useEffect(() => {
        AOS.init();
    })

    return (

        <div className='homepagebg'>
            <Homeheader />
            <section className="homebannerbg">
                <Container className="sitebannercontent">
                    <Row className="align-items-center text-center">
                        <Col lg={12} className="mx-auto">
                            <h2 className="heading-title">Manage crypto payments and spot trading from a single dashboard.</h2>
                            <Link href='/signin' className="alink alinkfnz">Get Started <Image src="assets/images/arrowbtn.svg" alt="icon" width={24} height={24} /></Link>
                            <div className="text-center">
                                <Image src="assets/images/bannericon.svg" className="banner-img lightthemeicon" alt="icon" width={100} height={100} />
                                <Image src="assets/images/bannericon1.svg" className="banner-img darkthemeicon" alt="icon" width={100} height={100} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="personalsbanner">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} md={6}>
                            <p>Whether you're managing personal transactions or running a full-scale operation, our crypto payment solution adapts to your needs—seamlessly, securely, and globally.</p>
                            <div className="personalcntbox">
                                <div className="personactb">
                                    <div>
                                        <div className="persicon"><Image src="assets/images/personalicons.svg" alt="icon" width={100} height={100} /></div>
                                    </div>
                                    <div>
                                        <h5>Personal</h5>
                                        <p>Send, receive, store, convert, and make internal transfers</p>
                                    </div>
                                </div>
                                <div className="personactb">
                                    <div>
                                        <div className="persicon"><Image src="assets/images/businessicons.svg" alt="icon" width={100} height={100} /></div>
                                    </div>
                                    <div>
                                        <h5>Business</h5>
                                        <p>Create merchant accounts (multiple), generate payment links, send cryptos (withdraw)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <Link href='/signup' className="alink alinkfnz">Create an Account <Image src="assets/images/arrowbtn.svg" alt="icon" width={24} height={24} /></Link>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="text-center pernalcrypto">
                                <Image src="assets/images/personalcrypto.png" alt="icon" width={100} height={100} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="telegrambanner">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} md={6}>
                            <div className="text-center pernalcryptos">
                                <Image src="assets/images/telegrambot.png" alt="icon" width={100} height={100} />
                            </div>
                        </Col>
                        <Col lg={6} md={6}>

                            <Link href="/" className="mb-3 d-block">
                                <Image src="assets/images/logo.png" width={100} height={57} className="logo lightthemeicon" alt="logo" />
                                <Image src="assets/images/logo-dark.png" width={100} height={57} className="logo darkthemeicon" alt="logo" />
                            </Link>
                            <h6 className="heading-title mb-3">Seamless Telegram Access</h6>

                            <p className='mb-3'>Sign in Securely with Telegram and receive instant < br />
                                updates for payments, transfers and trading activity.
                            </p>
                            <div className="telegrm-btn-box">
                                <button type="button" className="telegrambtn">
                                    <Image
                                        src="assets/images/telegram-icon.svg"
                                        width={35}
                                        height={35}
                                        alt="btc"
                                        className="coinicon me-2"
                                    />
                                    {' '}Sign in with Telegram
                                </button>
                            </div>

                        </Col>

                    </Row>
                </Container>
            </section>

            <section className="markettablebg" id="marketslist">
                <Container>
                    <div className="market-heading-wrapper ">
                        <h2 className="heading-title pb-3">Market Trends</h2>
                    </div>
                    <Tabs id="controlled-tab-example" defaultActiveKey="hotList" className='gap-3'>
                        <Tab eventKey="hotList" title="Hot List">
                            <SimpleBar className="table-responsive">
                                <Table className="sitetable table-responsive-stack" id="table1">
                                    <thead>
                                        <tr>
                                            <th>Pair</th>
                                            <th>Price</th>
                                            <th>24H Change</th>
                                            <th>24H Volume</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        <tr>
                                            <td>
                                                <div className="coin-info">
                                                    <Image
                                                        src="assets/images/color/btc.svg"
                                                        width={35}
                                                        height={35}
                                                        alt="btc"
                                                        className="coinicon me-2"
                                                    />

                                                    <span className="coin-symbol">BTC/USDT</span>

                                                </div>
                                            </td>
                                            <td><span className="">$102,872.48</span></td>
                                            <td><span className="t-green">+0.04%</span></td>
                                            <td>$1.57B</td>
                                            <td><Link href="/trade" className='btn sitebtn'>Trade</Link></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="coin-info">
                                                    <Image
                                                        src="assets/images/color/eth.svg"
                                                        width={35}
                                                        height={35}
                                                        alt="btc"
                                                        className="coinicon me-2"
                                                    />
                                                    <span className="coin-symbol">ETH/USDT</span>
                                                </div>
                                            </td>
                                            <td><span className="">$2,595.27</span></td>
                                            <td><span className="t-red">-0.07%</span></td>
                                            <td>$1.57B</td>
                                            <td><Link href="/trade" className='btn sitebtn'>Trade</Link></td>
                                        </tr><tr>
                                            <td>
                                                <div className="coin-info">
                                                    <Image
                                                        src="assets/images/color/ltc.svg"
                                                        width={35}
                                                        height={35}
                                                        alt="btc"
                                                        className="coinicon me-2"
                                                    />
                                                    <span className="coin-symbol">LTC/USDT</span>
                                                </div>
                                            </td>
                                            <td><span className="">$651.16</span></td>
                                            <td><span className="t-green">+0.54%</span></td>
                                            <td>$1.57B</td>
                                            <td><Link href="/trade" className='btn sitebtn'>Trade</Link></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="coin-info">
                                                    <Image
                                                        src="assets/images/color/trx.svg"
                                                        width={35}
                                                        height={35}
                                                        alt="btc"
                                                        className="coinicon me-2"
                                                    />
                                                    <span className="coin-symbol">TRX/USDT</span>
                                                </div>
                                            </td>
                                            <td><span className="">$0.2730</span></td>
                                            <td><span className="t-red">-0.12%</span></td>
                                            <td>$1.57B</td>
                                            <td><Link href="/trade" className='btn sitebtn'>Trade</Link></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="coin-info">
                                                    <Image
                                                        src="assets/images/color/sol.svg"
                                                        width={35}
                                                        height={35}
                                                        alt="btc"
                                                        className="coinicon me-2"
                                                    />
                                                    <span className="coin-symbol">SOL/USDT</span>
                                                </div>
                                            </td>
                                            <td><span className="">$174.99</span></td>
                                            <td><span className="t-green">+0.19%</span></td>
                                            <td>$1.57B</td>
                                            <td><Link href="/trade" className='btn sitebtn'>Trade</Link></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="coin-info">
                                                    <Image
                                                        src="assets/images/color/avax.svg"
                                                        width={35}
                                                        height={35}
                                                        alt="btc"
                                                        className="coinicon me-2"
                                                    />
                                                    <span className="coin-symbol">AVAX/USDT</span>
                                                </div>
                                            </td>
                                            <td><span className="">$2.52</span></td>
                                            <td><span className="t-red">-0.03%</span></td>
                                            <td>$1.57B</td>
                                            <td><Link href="/trade" className='btn sitebtn'>Trade</Link></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="coin-info">
                                                    <Image
                                                        src="assets/images/color/ton.svg"
                                                        width={35}
                                                        height={35}
                                                        alt="btc"
                                                        className="coinicon me-2"
                                                    />
                                                    <span className="coin-symbol">TON/USDT</span>
                                                </div>
                                            </td>
                                            <td><span className="">$0.7944</span></td>
                                            <td><span className="t-green">+0.10%</span></td>
                                            <td>$1.57B</td>
                                            <td><Link href="/trade" className='btn sitebtn'>Trade</Link></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </SimpleBar>
                            <ResponsiveTable tableId="table1" />
                        </Tab>
                        <Tab eventKey="topGainers" title="Top Gainers">
                            <SimpleBar className="table-responsive">
                                <Table className="sitetable table-responsive-stack" id="table2">
                                    <thead>
                                        <tr>
                                            <th>Pair</th>
                                            <th>Price</th>
                                            <th>24H Change</th>
                                            <th>24H Volume</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        <tr>
                                            <td>
                                                <div className="coin-info">
                                                    <Image
                                                        src="assets/images/color/btc.svg"
                                                        width={35}
                                                        height={35}
                                                        alt="btc"
                                                        className="coinicon me-2"
                                                    />

                                                    <span className="coin-symbol">BTC/USDT</span>

                                                </div>
                                            </td>
                                            <td><span className="">$102,872.48</span></td>
                                            <td><span className="t-green">+0.04%</span></td>
                                            <td>$1.57B</td>
                                            <td><Link href="/trade" className='btn sitebtn'>Trade</Link></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="coin-info">
                                                    <Image
                                                        src="assets/images/color/eth.svg"
                                                        width={35}
                                                        height={35}
                                                        alt="btc"
                                                        className="coinicon me-2"
                                                    />
                                                    <span className="coin-symbol">ETH/USDT</span>
                                                </div>
                                            </td>
                                            <td><span className="">$2,595.27</span></td>
                                            <td><span className="t-red">-0.07%</span></td>
                                            <td>$1.57B</td>
                                            <td><Link href="/trade" className='btn sitebtn'>Trade</Link></td>
                                        </tr><tr>
                                            <td>
                                                <div className="coin-info">
                                                    <Image
                                                        src="assets/images/color/ltc.svg"
                                                        width={35}
                                                        height={35}
                                                        alt="btc"
                                                        className="coinicon me-2"
                                                    />
                                                    <span className="coin-symbol">LTC/USDT</span>
                                                </div>
                                            </td>
                                            <td><span className="">$651.16</span></td>
                                            <td><span className="t-green">+0.54%</span></td>
                                            <td>$1.57B</td>
                                            <td><Link href="/trade" className='btn sitebtn'>Trade</Link></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="coin-info">
                                                    <Image
                                                        src="assets/images/color/trx.svg"
                                                        width={35}
                                                        height={35}
                                                        alt="btc"
                                                        className="coinicon me-2"
                                                    />
                                                    <span className="coin-symbol">TRX/USDT</span>
                                                </div>
                                            </td>
                                            <td><span className="">$0.2730</span></td>
                                            <td><span className="t-red">-0.12%</span></td>
                                            <td>$1.57B</td>
                                            <td><Link href="/trade" className='btn sitebtn'>Trade</Link></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="coin-info">
                                                    <Image
                                                        src="assets/images/color/sol.svg"
                                                        width={35}
                                                        height={35}
                                                        alt="btc"
                                                        className="coinicon me-2"
                                                    />
                                                    <span className="coin-symbol">SOL/USDT</span>
                                                </div>
                                            </td>
                                            <td><span className="">$174.99</span></td>
                                            <td><span className="t-green">+0.19%</span></td>
                                            <td>$1.57B</td>
                                            <td><Link href="/trade" className='btn sitebtn'>Trade</Link></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="coin-info">
                                                    <Image
                                                        src="assets/images/color/avax.svg"
                                                        width={35}
                                                        height={35}
                                                        alt="btc"
                                                        className="coinicon me-2"
                                                    />
                                                    <span className="coin-symbol">AVAX/USDT</span>
                                                </div>
                                            </td>
                                            <td><span className="">$2.52</span></td>
                                            <td><span className="t-red">-0.03%</span></td>
                                            <td>$1.57B</td>
                                            <td><Link href="/trade" className='btn sitebtn'>Trade</Link></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="coin-info">
                                                    <Image
                                                        src="assets/images/color/ton.svg"
                                                        width={35}
                                                        height={35}
                                                        alt="btc"
                                                        className="coinicon me-2"
                                                    />
                                                    <span className="coin-symbol">TON/USDT</span>
                                                </div>
                                            </td>
                                            <td><span className="">$0.7944</span></td>
                                            <td><span className="t-green">+0.10%</span></td>
                                            <td>$1.57B</td>
                                            <td><Link href="/trade" className='btn sitebtn'>Trade</Link></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </SimpleBar>
                            <ResponsiveTable tableId="table2" />
                        </Tab>
                        <Tab eventKey="newListing" title="New Listing">
                            <SimpleBar className="table-responsive">
                                <Table className="sitetable table-responsive-stack" id="table3">
                                    <thead>
                                        <tr>
                                            <th>Pair</th>
                                            <th>Price</th>
                                            <th>24H Change</th>
                                            <th>24H Volume</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        <tr>
                                            <td>
                                                <div className="coin-info">
                                                    <Image
                                                        src="assets/images/color/btc.svg"
                                                        width={35}
                                                        height={35}
                                                        alt="btc"
                                                        className="coinicon me-2"
                                                    />

                                                    <span className="coin-symbol">BTC/USDT</span>

                                                </div>
                                            </td>
                                            <td><span className="">$102,872.48</span></td>
                                            <td><span className="t-green">+0.04%</span></td>
                                            <td>$1.57B</td>
                                            <td><Link href="/trade" className='btn sitebtn'>Trade</Link></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="coin-info">
                                                    <Image
                                                        src="assets/images/color/eth.svg"
                                                        width={35}
                                                        height={35}
                                                        alt="btc"
                                                        className="coinicon me-2"
                                                    />
                                                    <span className="coin-symbol">ETH/USDT</span>
                                                </div>
                                            </td>
                                            <td><span className="">$2,595.27</span></td>
                                            <td><span className="t-red">-0.07%</span></td>
                                            <td>$1.57B</td>
                                            <td><Link href="/trade" className='btn sitebtn'>Trade</Link></td>
                                        </tr><tr>
                                            <td>
                                                <div className="coin-info">
                                                    <Image
                                                        src="assets/images/color/ltc.svg"
                                                        width={35}
                                                        height={35}
                                                        alt="btc"
                                                        className="coinicon me-2"
                                                    />
                                                    <span className="coin-symbol">LTC/USDT</span>
                                                </div>
                                            </td>
                                            <td><span className="">$651.16</span></td>
                                            <td><span className="t-green">+0.54%</span></td>
                                            <td>$1.57B</td>
                                            <td><Link href="/trade" className='btn sitebtn'>Trade</Link></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="coin-info">
                                                    <Image
                                                        src="assets/images/color/trx.svg"
                                                        width={35}
                                                        height={35}
                                                        alt="btc"
                                                        className="coinicon me-2"
                                                    />
                                                    <span className="coin-symbol">TRX/USDT</span>
                                                </div>
                                            </td>
                                            <td><span className="">$0.2730</span></td>
                                            <td><span className="t-red">-0.12%</span></td>
                                            <td>$1.57B</td>
                                            <td><Link href="/trade" className='btn sitebtn'>Trade</Link></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="coin-info">
                                                    <Image
                                                        src="assets/images/color/sol.svg"
                                                        width={35}
                                                        height={35}
                                                        alt="btc"
                                                        className="coinicon me-2"
                                                    />
                                                    <span className="coin-symbol">SOL/USDT</span>
                                                </div>
                                            </td>
                                            <td><span className="">$174.99</span></td>
                                            <td><span className="t-green">+0.19%</span></td>
                                            <td>$1.57B</td>
                                            <td><Link href="/trade" className='btn sitebtn'>Trade</Link></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="coin-info">
                                                    <Image
                                                        src="assets/images/color/avax.svg"
                                                        width={35}
                                                        height={35}
                                                        alt="btc"
                                                        className="coinicon me-2"
                                                    />
                                                    <span className="coin-symbol">AVAX/USDT</span>
                                                </div>
                                            </td>
                                            <td><span className="">$2.52</span></td>
                                            <td><span className="t-red">-0.03%</span></td>
                                            <td>$1.57B</td>
                                            <td><Link href="/trade" className='btn sitebtn'>Trade</Link></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="coin-info">
                                                    <Image
                                                        src="assets/images/color/ton.svg"
                                                        width={35}
                                                        height={35}
                                                        alt="btc"
                                                        className="coinicon me-2"
                                                    />
                                                    <span className="coin-symbol">TON/USDT</span>
                                                </div>
                                            </td>
                                            <td><span className="">$0.7944</span></td>
                                            <td><span className="t-green">+0.10%</span></td>
                                            <td>$1.57B</td>
                                            <td><Link href="/trade" className='btn sitebtn'>Trade</Link></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </SimpleBar>
                            <ResponsiveTable tableId="table3" />
                        </Tab>
                    </Tabs>
                </Container>
            </section>

            <section className="howitworksp2p" id="howitworksp2p">
                <Container data-aos="fade-up">
                    <h2 className="heading-title text-start pb-3">Completed P2P Trades in three steps, and Firefox!</h2>
                    <Tabs
                        defaultActiveKey="trade"
                        id="howItTabs"
                        className="
                         mb-3 nav-tabs border-0 gap-3"
                    >
                        <Tab eventKey="trade" title="Buy Crypto">
                            <div className="howitflexp2p">
                                <div className="howitboxp2p">
                                    <div className="">
                                        <Image
                                            src="assets/images/select-ur-ad.svg"
                                            width={35}
                                            height={35}
                                            alt="btc"
                                            className="howitflexp2picon"
                                        />
                                    </div>
                                    <div>
                                        <h5>1 Select Your Ad</h5>
                                        <p>
                                            After you place an order, your crypto will be escrowed by our P2P.
                                        </p>
                                    </div>
                                </div>

                                <div className="arrowptop">
                                    <Image
                                        src="assets/images/arrhome.svg"
                                        width={35}
                                        height={35}
                                        alt="btc"
                                        className="arrhomeicon"
                                    />
                                </div>

                                <div className="howitboxp2p">
                                    <div className="">
                                        <Image
                                            src="assets/images/confirm-payment.svg"
                                            width={35}
                                            height={35}
                                            alt="btc"
                                            className="howitflexp2picon"
                                        />
                                    </div>
                                    <div>
                                        <h5>2 Confirm the Payment</h5>
                                        <p>
                                            Check the transaction Record in the given payment account. and make sure you receivethe money send buy the buyer.
                                        </p>
                                    </div>
                                </div>

                                <div className="arrowptop">
                                    <Image
                                        src="assets/images/arrhome.svg"
                                        width={35}
                                        height={35}
                                        alt="btc"
                                        className="arrhomeicon"
                                    />
                                </div>

                                <div className="howitboxp2p">
                                    <div className="">
                                        <Image
                                            src="assets/images/start-trading.svg"
                                            width={35}
                                            height={35}
                                            alt="btc"
                                            className="howitflexp2picon"
                                        />
                                    </div>
                                    <div>
                                        <h5>3 Start Trading</h5>
                                        <p>
                                            Once you confirm the receipt of money, release crypto to the buyer on our P2P.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="merchant" title="Sell Crypto">
                            <div className="howitflexp2p">
                                <div className="howitboxp2p">
                                    <div className="hiconb">
                                        <Image
                                            src="assets/images/select-ur-ad.svg"
                                            width={35}
                                            height={35}
                                            alt="btc"
                                            className="howitflexp2picon"
                                        />
                                    </div>
                                    <div>
                                        <h5>1 Select Your Ad</h5>
                                        <p>
                                            After you place an order, your crypto will be escrowed by our P2P.
                                        </p>
                                    </div>
                                </div>
                                <div className="arrowptop">
                                    <Image
                                        src="assets/images/arrhome.svg"
                                        width={35}
                                        height={35}
                                        alt="btc"
                                        className="arrhomeicon"
                                    />
                                </div>

                                <div className="howitboxp2p">
                                    <div className="hiconb">
                                        <Image
                                            src="assets/images/confirm-payment.svg"
                                            width={35}
                                            height={35}
                                            alt="btc"
                                            className="howitflexp2picon"
                                        />
                                    </div>
                                    <div>
                                        <h5>2 Confirm the Payment</h5>
                                        <p>
                                            Check the transaction Record in the given payment account. and make sure you receivethe money send buy the buyer.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <Image
                                        src="assets/images/arrhome.svg"
                                        width={35}
                                        height={35}
                                        alt="btc"
                                        className="arrhomeicon"
                                    />
                                </div>

                                <div className="howitboxp2p">
                                    <div className="">
                                        <Image
                                            src="assets/images/start-trading.svg"
                                            width={35}
                                            height={35}
                                            alt="btc"
                                            className="howitflexp2picon"
                                        />
                                    </div>
                                    <div>
                                        <h5>3 Start Trading</h5>
                                        <p>
                                            Once you confirm the receipt of money, release crypto to the buyer on our P2P.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </Container>
            </section>



            <section className="howitworks" id="howitworks">
                <Container data-aos="fade-up">
                    <h2 className="heading-title text-center pb-3">How It Works</h2>
                    <Tabs
                        defaultActiveKey="trade"
                        id="howItTabs"
                        className="justify-content-center mb-3 nav-tabs border-0"
                    >
                        <Tab eventKey="trade" title="Trade">
                            <div className="d-flex text-center howitflex">
                                <div className="howitbox">
                                    <div className="hiconb">
                                        <h6>Step 1</h6>
                                    </div>
                                    <div>
                                        <h5>Create an Account</h5>
                                        <p>
                                            Get Started Quickly by Signing Up with Your Email Address and a Secure Password with Our Enriched Features.
                                        </p>
                                    </div>
                                </div>

                                <div className="howitbox">
                                    <div className="hiconb">
                                        <h6>Step 2</h6>
                                    </div>
                                    <div>
                                        <h5>KYC Verification</h5>
                                        <p>
                                            We Implement Two - Factor Authentication in Our Platform to Make Sure Your Transactions are Performed Securely.
                                        </p>
                                    </div>
                                </div>

                                <div className="howitbox">
                                    <div className="hiconb">
                                        <h6>Step 3</h6>
                                    </div>
                                    <div>
                                        <h5>Start Trading</h5>
                                        <p>
                                            You can Invest with Your Cryptocurrencies and Flat Currencies and Start Your Trading Process to Gain Profits.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="merchant" title="Merchant">
                            <div className="d-flex text-center howitflex">
                                <div className="howitbox">
                                    <div className="hiconb">
                                        <h6>Step 1</h6>
                                    </div>
                                    <div>
                                        <h5>Register as a Merchant</h5>
                                        <p>
                                            Sign up as a merchant to start accepting payments securely
                                            through our platform.
                                        </p>
                                    </div>
                                </div>

                                <div className="howitbox">
                                    <div className="hiconb">
                                        <h6>Step 2</h6>
                                    </div>
                                    <div>
                                        <h5>Integration</h5>
                                        <p>
                                            Integrate our APIs or payment gateway with your website or
                                            app for smooth transactions.
                                        </p>
                                    </div>
                                </div>

                                <div className="howitbox">
                                    <div className="hiconb">
                                        <h6>Step 3</h6>
                                    </div>
                                    <div>
                                        <h5>Start Receiving Payments</h5>
                                        <p>
                                            Accept crypto and fiat payments instantly and withdraw your
                                            earnings with ease.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </Container>
            </section>

            <section className="howitbg">
                <Container data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="heading-title text-center mb-4">Key Features Built for Every Trader</h2>
                    <div className="table-content">
                        <div className="hflex">
                            <div className="hbox d-flex gap-3">
                                <div>
                                    <Image src="/assets/images/nari1.svg" width={100} height={100} alt="ficon" className='howitbgicon lightthemeicon' />
                                    <Image src="/assets/images/nari11.svg" width={100} height={100} alt="ficon" className='howitbgicon darkthemeicon' />
                                </div>
                                <div>

                                    <h4 className="sub-heading">Smart Payment Module</h4>
                                    <p className="content">Instant crypto payments with multi-network support.</p>
                                </div>

                            </div>
                            <div className="hbox d-flex gap-3">
                                <div>
                                    <Image src="/assets/images/nari2.svg" width={100} height={100} alt="ficon" className='howitbgicon lightthemeicon' />
                                    <Image src="/assets/images/nari22.svg" width={100} height={100} alt="ficon" className='howitbgicon darkthemeicon' />
                                </div>
                                <div>
                                    <h4 className="sub-heading">Spot Trading Simplified</h4>
                                    <p className="content">Buy and sell crypto in real-time with live charts.</p>
                                </div>

                            </div>
                            <div className="hbox d-flex gap-3">
                                <div>
                                    <Image src="/assets/images/nari3.svg" width={100} height={100} alt="ficon" className='howitbgicon lightthemeicon' />
                                    <Image src="/assets/images/nari33.svg" width={100} height={100} alt="ficon" className='howitbgicon darkthemeicon' />
                                </div>
                                <div>
                                    <h4 className="sub-heading">Futures Trading Power</h4>
                                    <p className="content">Trade with leverage and control your profits easily.</p>
                                </div>
                            </div>

                        </div>
                        <div className="text-center">
                            <Image src="/assets/images/nari.png" width={100} height={100} alt="ficon" className='howitimg lightthemeicon' />
                            <Image src="/assets/images/narii.png" width={100} height={100} alt="ficon" className='howitimg darkthemeicon' />
                        </div>
                        <div className="hflex">
                            <div className="hbox d-flex gap-3">
                                <div>
                                    <Image src="/assets/images/nari4.svg" width={100} height={100} alt="ficon" className='howitbgicon lightthemeicon' />
                                    <Image src="/assets/images/nari44.svg" width={100} height={100} alt="ficon" className='howitbgicon darkthemeicon' />
                                </div>
                                <div>
                                    <h4 className="sub-heading">Advanced Security</h4>
                                    <p className="content">Multi-layer protection with 2FA and cold wallet storage.</p>
                                </div>
                            </div>
                            <div className="hbox d-flex gap-3">
                                <div>
                                    <Image src="/assets/images/nari5.svg" width={100} height={100} alt="ficon" className='howitbgicon lightthemeicon' />
                                    <Image src="/assets/images/nari55.svg" width={100} height={100} alt="ficon" className='howitbgicon darkthemeicon' />
                                </div>
                                <div>
                                    <h4 className="sub-heading">Multi-Network Integration</h4>
                                    <p className="content">Supports Ethereum, BSC, and Tron networks seamlessly.</p>
                                </div>
                            </div>
                            <div className="hbox d-flex gap-3">
                                <div>
                                    <Image src="/assets/images/nari6.svg" width={100} height={100} alt="ficon" className='howitbgicon lightthemeicon' />
                                    <Image src="/assets/images/nari66.svg" width={100} height={100} alt="ficon" className='howitbgicon darkthemeicon' />
                                </div>
                                <div>
                                    <h4 className="sub-heading">Smart Dashboard</h4>
                                    <p className="content">Manage payments, trades, and wallets in one place.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>



            <div className="supportcoinbg mt-5 mb-5">
                <Container className="text-center" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="heading-title pb-3">Supported Cryptocurrencies</h2>
                    <div className="supprtcoinsbg">
                        <div className="supprtcoinbox">
                            <div className="suprttable">
                                <div>
                                    <Image src="assets/images/color/btc.svg" alt="icon" width={100} height={100} />
                                </div>
                                <div>
                                    <p>Bitcoin BTC</p>
                                    <h5>$116,600.14</h5>
                                </div>
                            </div>
                        </div>
                        <div className="supprtcoinbox">
                            <div className="suprttable">
                                <div>
                                    <Image src="assets/images/color/eth.svg" alt="icon" width={100} height={100} />
                                </div>
                                <div>
                                    <p>Ethereum ETH</p>
                                    <h5>$116,600.14</h5>
                                </div>
                            </div>
                        </div>
                        <div className="supprtcoinbox">
                            <div className="suprttable">
                                <div>
                                    <Image src="assets/images/color/ltc.svg" alt="icon" width={100} height={100} />
                                </div>
                                <div>
                                    <p>Litecoin LTC</p>
                                    <h5>$116,600.14</h5>
                                </div>
                            </div>
                        </div>
                        <div className="supprtcoinbox">
                            <div className="suprttable">
                                <div>
                                    <Image src="assets/images/color/trx.svg" alt="icon" width={100} height={100} />
                                </div>
                                <div>
                                    <p>Tron TRX</p>
                                    <h5>$116,600.14</h5>
                                </div>
                            </div>
                        </div>
                        <div className="supprtcoinbox">
                            <div className="suprttable">
                                <div>
                                    <Image src="assets/images/color/bch.svg" alt="icon" width={100} height={100} />
                                </div>
                                <div>
                                    <p>Bitcoin Cash BCH</p>
                                    <h5>$116,600.14</h5>
                                </div>
                            </div>
                        </div>
                        <div className="supprtcoinbox">
                            <div className="suprttable">
                                <div>
                                    <Image src="assets/images/color/usdt.svg" alt="icon" width={100} height={100} />
                                </div>
                                <div>
                                    <p>Tether USDT</p>
                                    <h5>$116,600.14</h5>
                                </div>
                            </div>
                        </div>
                        <div className="supprtcoinbox">
                            <div className="suprttable">
                                <div>
                                    <Image src="assets/images/color/sol.svg" alt="icon" width={100} height={100} />
                                </div>
                                <div>
                                    <p>Solana SOL</p>
                                    <h5>$116,600.14</h5>
                                </div>
                            </div>
                        </div>
                        <div className="supprtcoinbox">
                            <div className="suprttable">
                                <div>
                                    <Image src="assets/images/color/avax.svg" alt="icon" width={100} height={100} />
                                </div>
                                <div>
                                    <p>Avalanche AVAX</p>
                                    <h5>$116,600.14</h5>
                                </div>
                            </div>
                        </div>
                        <div className="supprtcoinbox">
                            <div className="suprttable">
                                <div>
                                    <Image src="assets/images/color/ton.svg" alt="icon" width={100} height={100} />
                                </div>
                                <div>
                                    <p>Toncoin TON</p>
                                    <h5>$116,600.14</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>


            <section className="choosefeatresbg" id="features">
                <Container data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="heading-title text-center pb-4">You can use our service in various categories</h2>
                    <div className="chooselinebbox">
                        <div className="chsiconbox text-center pt-2 chooselogobox">
                            <Image src="assets/images/cicon.png" alt="icon" width={100} height={100} />
                        </div>
                        <div className="chhsflex d-flex">
                            <div className="chsiconbox">
                                <Image src="assets/images/cicon1.png" alt="icon" width={100} height={100} />
                                <h6>Payment gateway</h6>
                            </div>
                            <div className="chsiconbox">
                                <Image src="assets/images/cicon2.png" alt="icon" width={100} height={100} />
                                <h6>Spot trade</h6>
                            </div>
                            <div className="chsiconbox">
                                <Image src="assets/images/cicon3.png" alt="icon" width={100} height={100} />
                                <h6>Future trade</h6>
                            </div>
                            <div className="chsiconbox">
                                <Image src="assets/images/cicon4.png" alt="icon" width={100} height={100} />
                                <h6>P2P</h6>
                            </div>
                            <div className="chsiconbox">
                                <Image src="assets/images/cicon5.png" alt="icon" width={100} height={100} />
                                <h6>Copy trade</h6>
                            </div>
                        </div>
                    </div>

                    {/* <div className="categoryboxbicon">
         <Image src="assets/images/features.png" alt="icon" width={100} height={100} />
      </div> */}

                    <Row className="chooseusflex align-items-center">
                        <Col lg={4}>
                            <div className="chooseusbox">
                                <div>
                                    <h5>Mass Payouts</h5>
                                    <p>Phasellus vestibulum, purus vel dignissim suscipit, diam odio ultrices turpis malesuada justo.</p>
                                </div>
                                <div>
                                    <h5>Converter</h5>
                                    <p>Phasellus vestibulum, purus vel dignissim suscipit, diam odio ultrices turpis malesuada justo.</p>
                                </div>
                                <div>
                                    <h5>Internal Transfers</h5>
                                    <p>Phasellus vestibulum, purus vel dignissim suscipit, diam odio ultrices turpis malesuada justo.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className="choosecentericon">
                            <Image src="assets/images/chooseicon.svg" className="lightthemeicon" alt="icon" width={100} height={100} />
                            <Image src="assets/images/chooseicon1.svg" className="darkthemeicon" alt="icon" width={100} height={100} />
                        </Col>
                        <Col lg={4}>
                            <div className="chooseusbox">
                                <div>
                                    <h5>Low Commission</h5>
                                    <p>Phasellus vestibulum, purus vel dignissim suscipit, diam odio ultrices turpis malesuada justo.</p>
                                </div>
                                <div>
                                    <h5>Instant Transfers</h5>
                                    <p>Phasellus vestibulum, purus vel dignissim suscipit, diam odio ultrices turpis malesuada justo.</p>
                                </div>
                                <div>
                                    <h5>Auto-Withdrawal</h5>
                                    <p>Phasellus vestibulum, purus vel dignissim suscipit, diam odio ultrices turpis malesuada justo.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="aboutusbg" id="secure">
                <Container data-aos="fade-up" data-aos-duration="1000">
                    <Row className="align-items-center">
                        <Col xl={3} lg={4} md={5} className="text-center">
                            <Image src="assets/images/security.svg" alt="icon" width={100} height={100} className="dwnimg" />
                        </Col>
                        <Col xl={9} lg={8} md={7}>
                            <h2 className="heading-title mb-3">Most secured platform</h2>
                            <div className="badgeflx d-flex mb-3">
                                <Badge bg="success">KYC</Badge>
                                <Badge bg="success">AML</Badge>
                                <Badge bg="success">KYT</Badge>
                            </div>
                            <p className='content'>Our platform is built with enterprise-grade security protocols to protect every transaction and wallet interaction. We follow strict KYC (Know Your Customer), AML (Anti-Money Laundering), and KYT (Know Your Transaction) standards to ensure full compliance and prevent fraudulent activities.</p>
                            <Link href='/signin' className="alink alinkfnz">Get Started <Image src="assets/images/arrowbtn.svg" alt="icon" width={24} height={24} /></Link>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="p2pfaq" id="faq" data-aos="fade-up" data-aos-duration="1000">
                <Container>
                    <Tab.Container defaultActiveKey="tab1">
                        <Row>
                            <Col xl={3} lg={4} md={4}>
                                <h2 className="heading-title pb-4">FAQs</h2>
                                <div className="lineleftab">
                                    <Nav className="nav nav-tabs tabbanner border-0" role="tablist">
                                        <Nav.Item className="nav-item"><Nav.Link eventKey="tab1">All<FontAwesomeIcon icon={faAngleRight} /></Nav.Link></Nav.Item>
                                        <Nav.Item className="nav-item"><Nav.Link eventKey="tab2">For Personal<FontAwesomeIcon icon={faAngleRight} /></Nav.Link></Nav.Item>
                                        <Nav.Item className="nav-item"><Nav.Link eventKey="tab3">For Business<FontAwesomeIcon icon={faAngleRight} /></Nav.Link></Nav.Item>
                                        <Nav.Item className="nav-item"><Nav.Link eventKey="tab4">For Spot<FontAwesomeIcon icon={faAngleRight} /></Nav.Link></Nav.Item>
                                        <Nav.Item className="nav-item"><Nav.Link eventKey="tab5">For Futures<FontAwesomeIcon icon={faAngleRight} /></Nav.Link></Nav.Item>
                                        <Nav.Item className="nav-item"><Nav.Link eventKey="tab6">Show More<FontAwesomeIcon icon={faAngleRight} /></Nav.Link></Nav.Item>
                                    </Nav>
                                </div>
                            </Col>
                            <Col xl={9} lg={8} md={8}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="tab1">
                                        <Accordion defaultActiveKey="1" flush>
                                            <Accordion.Item eventKey="1" className="active">
                                                <Accordion.Header>How do I get started with the gateway?</Accordion.Header>
                                                <Accordion.Body>
                                                    Simply sign up, configure your wallet or API settings, and choose how you want to receive payments—through plugins, invoices, or custom integrations.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>Which cryptocurrencies are supported?</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>Is it safe to accept crypto payments?</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header>Can I integrate this with my e-commerce store?</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header>What are the transaction fees?</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab2">
                                        <Accordion defaultActiveKey="persn1" flush>
                                            <Accordion.Item eventKey="persn1" className="active">
                                                <Accordion.Header>How do I get started with the gateway?</Accordion.Header>
                                                <Accordion.Body>
                                                    Simply sign up, configure your wallet or API settings, and choose how you want to receive payments—through plugins, invoices, or custom integrations.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="persn2">
                                                <Accordion.Header>Which cryptocurrencies are supported?</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="persn3">
                                                <Accordion.Header>Is it safe to accept crypto payments?</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="persn4">
                                                <Accordion.Header>Can I integrate this with my e-commerce store?</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="persn5">
                                                <Accordion.Header>What are the transaction fees?</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab3">
                                        <Accordion defaultActiveKey="busness1" flush>
                                            <Accordion.Item eventKey="busness1" className="active">
                                                <Accordion.Header>How do I get started with the gateway?</Accordion.Header>
                                                <Accordion.Body>
                                                    Simply sign up, configure your wallet or API settings, and choose how you want to receive payments—through plugins, invoices, or custom integrations.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="busness2">
                                                <Accordion.Header>Which cryptocurrencies are supported?</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="busness3">
                                                <Accordion.Header>Is it safe to accept crypto payments?</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="busness4">
                                                <Accordion.Header>Can I integrate this with my e-commerce store?</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="busness5">
                                                <Accordion.Header>What are the transaction fees?</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab4">
                                        <Accordion defaultActiveKey="busness1" flush>
                                            <Accordion.Item eventKey="busness1" className="active">
                                                <Accordion.Header>How do I get started with the gateway?</Accordion.Header>
                                                <Accordion.Body>
                                                    Simply sign up, configure your wallet or API settings, and choose how you want to receive payments—through plugins, invoices, or custom integrations.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="busness2">
                                                <Accordion.Header>Which cryptocurrencies are supported?</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="busness3">
                                                <Accordion.Header>Is it safe to accept crypto payments?</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="busness4">
                                                <Accordion.Header>Can I integrate this with my e-commerce store?</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="busness5">
                                                <Accordion.Header>What are the transaction fees?</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab5">
                                        <Accordion defaultActiveKey="busness1" flush>
                                            <Accordion.Item eventKey="busness1" className="active">
                                                <Accordion.Header>How do I get started with the gateway?</Accordion.Header>
                                                <Accordion.Body>
                                                    Simply sign up, configure your wallet or API settings, and choose how you want to receive payments—through plugins, invoices, or custom integrations.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="busness2">
                                                <Accordion.Header>Which cryptocurrencies are supported?</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="busness3">
                                                <Accordion.Header>Is it safe to accept crypto payments?</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="busness4">
                                                <Accordion.Header>Can I integrate this with my e-commerce store?</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="busness5">
                                                <Accordion.Header>What are the transaction fees?</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </section>

            <Homefooter />
        </div>

    );
}