'use client';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Image, Table, Accordion, Button, Tab, Nav, Badge, Tabs } from 'react-bootstrap';
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faChevronRight, faTelegramPlane, faTelegram } from '@fortawesome/free-solid-svg-icons';
import "react-multi-carousel/lib/styles.css";
import SimpleBar from 'simplebar-react';
import ResponsiveTable from '../components/ResponsiveTable';
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

        <div className='homepagebg spin-wheel-page'>
            <Homeheader />

            <section className="homebannerbg spin-wheel-home">
                <Container className="sitebannercontent">
                    <div className="spin-wheel-content">
                        <div className="spin-wheel-left">
                            <div className="spin-wheel-left-badge">
                                <span className="spin-wheel-left-badge-icon"> <Image
                                    src="assets/images/gift-head.svg"
                                    width={16}
                                    height={16}
                                    alt="btc"
                                    className=""
                                /></span>
                                <span>1 Free spin available</span>
                            </div>

                            <h2 className="spin-wheel-left-heading">
                                More spins. More LHU
                                <span className="spin-wheel-left-heading-highlight">More value</span>
                            </h2>

                            <p className="spin-wheel-left-subtext">
                                Take your chance, spin the wheel and get rewarded with LHU tokens!
                            </p>

                            <div className="spin-wheel-left-conversion">
                                <div className="spin-wheel-left-conversion-text">
                                    <span className="spin-wheel-left-conversion-lhu">25 LHU</span>
                                    <span className="spin-wheel-left-conversion-equal">=</span>
                                    <span className="spin-wheel-left-conversion-usd">1 USD</span>
                                    <p className="spin-wheel-left-conversion-caption">Spin &amp; Win LHU Token</p>
                                </div>
                                <div className="spin-wheel-left-conversion-coins">
                                    <Image
                                        src="assets/images/spin-cons.svg"
                                        width={100}
                                        height={100}
                                        alt="btc"
                                        className="spn-cn-icon"
                                    />
                                </div>
                            </div>

                            <div className="spin-wheel-left-actions">
                                <button type="button" className="spin-wheel-left-spin-btn">
                                    <span className="spin-wheel-left-spin-btn-icon"><Image
                                        src="assets/images/spin-now.svg"
                                        width={16}
                                        height={16}
                                        alt="btc"
                                        className=""
                                    /></span>
                                    Spin Now
                                    <span className="spin-wheel-left-spin-btn-arrow">
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </span>
                                </button>
                                <button type="button" className="spin-wheel-left-sound-btn">
                                    <span className="spin-wheel-left-sound-btn-icon"><Image
                                        src="assets/images/spk-icon.svg"
                                        width={16}
                                        height={16}
                                        alt="btc"
                                        className=""
                                    /></span>
                                    Sound On
                                </button>
                            </div>

                            <div className="spin-wheel-left-duration">
                                <span className="spin-wheel-left-duration-icon"><Image
                                    src="assets/images/spin-duration-icon.svg"
                                    width={16}
                                    height={16}
                                    alt="btc"
                                    className=""
                                /></span>
                                Spin duration: <span className="spin-wheel-left-duration-value">4.5 seconds</span>
                            </div>

                            <div className="spin-wheel-left-auth">
                                <span className="spin-wheel-left-auth-icon"><Image
                                    src="assets/images/sign-in-to-pin.svg"
                                    width={25}
                                    height={25}
                                    alt="btc"
                                    className=""
                                /></span>
                                <span className="spin-wheel-left-auth-text">
                                    Authentication Required. <strong>Please Sign in to spin!</strong>
                                </span>
                                <span className="spin-wheel-left-auth-arrow">   <FontAwesomeIcon icon={faChevronRight} /></span>
                            </div>
                        </div>

                        <div className="spin-wheel-right">

                        </div>
                    </div>
                </Container>
            </section>
            <section className="recentspins">
                <Container>
                    <div className="recent-spins-row">
                        <div className="recent-spins recent-spins-left">
                            <div className="recent-times">
                                <div className="recent-time-icon-wrapper">
                                    <Image
                                        src="/assets/images/recent-times.svg"
                                        width={30}
                                        height={30}
                                        className="recent-time-icon"
                                        alt="Recent Spins"
                                    />

                                    {/* <Image
                                        src="/assets/images/recent-times.svg"
                                        width={30}
                                        height={30}
                                        className="recent-time-icon darkthemeicon"
                                        alt="Recent Spins"
                                    /> */}
                                </div>

                                <div>
                                    <h6 className="sub-heading">Recent Spins</h6>
                                </div>
                            </div>
                            <p className='ms-4 mb-3'>Here’s what you’ve won in your recent spins
                            </p>
                            <div className="recent-spins-box">
                                <div className="recent-spins-tokens">

                                    <div className="recent-spins-box">
                                        <div className="recent-spins-lhu">
                                            <Image src="assets/images/lhu.svg" width={25} height={25} className="spinbox" alt="spinbox" />
                                        </div>

                                    </div>
                                    <h6 className="sub-heading">100 Tokens</h6>
                                    <p>Sep 6, 2025
                                        02:14 PM</p>
                                    <span className="badge bg-success"><span><Image src="assets/images/re-green-tick.svg" width={16} height={16} className="me-1" alt="spinbox" /></span>Won</span>
                                </div>
                                <div className="recent-spins-tokens">

                                    <div className="recent-spins-box">
                                        <div className="recent-spins-lhu">
                                            <Image src="assets/images/zero-tokens.svg" width={25} height={25} className="spinbox" alt="spinbox" />
                                        </div>

                                    </div>
                                    <h6 className="sub-heading">100 Tokens</h6>
                                    <p>Sep 6, 2025
                                        02:14 PM</p>
                                    <span className="badge bg-danger"><span><Image src="assets/images/loss-rec.svg" width={16} height={16} className="me-1" alt="spinbox" /></span>Lost</span>
                                </div>
                                <div className="recent-spins-tokens">

                                    <div className="recent-spins-box">
                                        <div className="recent-spins-lhu">
                                            <Image src="assets/images/lhu.svg" width={25} height={25} className="spinbox" alt="spinbox" />
                                        </div>

                                    </div>
                                    <h6 className="sub-heading">100 Tokens</h6>
                                    <p>Sep 6, 2025
                                        02:14 PM</p>
                                    <span className="badge bg-success"><span><Image src="assets/images/re-green-tick.svg" width={16} height={16} className="me-1" alt="spinbox" /></span>Won</span>
                                </div>
                                <div className="recent-spins-tokens">

                                    <div className="recent-spins-box">
                                        <div className="recent-spins-lhu ihu">
                                            <Image src="assets/images/rec-try-icon.svg" width={25} height={25} className="spinbox" alt="spinbox" />
                                        </div>

                                    </div>
                                    <h6 className="sub-heading">100 Tokens</h6>
                                    <p>Sep 6, 2025
                                        02:14 PM</p>
                                    <span className="badge badge-fail"><span><Image src="assets/images/try-again.svg" width={16} height={16} className="me-1" alt="spinbox" /></span>Try Again</span>
                                </div>
                            </div>
                        </div>
                        <div className="recent-spins recent-spins-right">
                            <div className="recent-times">
                                <div className="recent-time-icon-wrapper">
                                    <Image
                                        src="/assets/images/spn-wlt-icon.svg"
                                        width={30}
                                        height={30}
                                        className="recent-time-icon"
                                        alt="Recent Spins"
                                    />

                                    {/* <Image
                                        src="/assets/images/recent-times.svg"
                                        width={30}
                                        height={30}
                                        className="recent-time-icon darkthemeicon"
                                        alt="Recent Spins"
                                    /> */}
                                </div>

                                <div>
                                    <h6 className="sub-heading">Your Spin</h6>
                                </div>
                            </div>
                            <div className="recent-times">
                                <div>
                                    <p className="">Current Reward Balance</p>
                                </div>
                                <div className="recent-time-icon-wrapper">
                                    <Image
                                        src="/assets/images/exgola-mark.svg"
                                        width={14}
                                        height={14}
                                        className="recent-time-icon time"
                                        alt="Recent Spins"
                                    />

                                    {/* <Image
                                        src="/assets/images/recent-times.svg"
                                        width={30}
                                        height={30}
                                        className="recent-time-icon darkthemeicon"
                                        alt="Recent Spins"
                                    /> */}
                                </div>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                                <h3 className="heading">125 LHU =</h3>
                                <button className="borderbtn btn-sm">$5.00</button>
                            </div>
                            <div className="reward-spin-progress">
                                <div className="reward-spin-progress-top">
                                    <span>125/250 LHU</span>
                                </div>

                                <div className="reward-progress-bar-bg">
                                    <div className="reward-progress-bar-fill"></div>
                                </div>

                                <div className="reward-next-box">
                                    <Image
                                        src="/assets/images/ret-gift.svg"
                                        width={32}
                                        height={32}
                                        alt="Gift"
                                    />

                                    <div className="reward-next-content">
                                        <h6>You're just 125 LHU away</h6>
                                        <p>from your next reward!</p>
                                    </div>

                                    <span className="reward-arrow">   <FontAwesomeIcon icon={faChevronRight} /></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </Container>
            </section>

            <section className="how-spin-wheel" id="howitworks">
                <Container data-aos="fade-up">
                    <h2 className="heading-title text-center pb-3">How It Works</h2>
                    <div className="how-it-img-y">
                        <Image
                            src="assets/images/howitwrkhead.png"
                            width={100}
                            height={100}
                            alt="btc"
                            className="howitwrkheadimg"
                        />
                        <div className="howitflex-spin">
                            <div className="howitbox">
                                <div className="hiconb">
                                    <div className="">
                                        <Image
                                            src="assets/images/connect-wallet.png"
                                            width={35}
                                            height={35}
                                            alt="btc"
                                            className="howiticon"
                                        />
                                    </div>
                                    <h6 className="badge step-one ">Step 1</h6>
                                </div>
                                <div>
                                    <h5 className="sub-heading">Create Your Account</h5>
                                    <p>
                                        Sign up or log in to your account in seconds.
                                    </p>
                                </div>
                            </div>

                            <div className="howitbox">
                                <div className="hiconb">
                                    <div className="">
                                        <Image
                                            src="assets/images/create-account.png"
                                            width={35}
                                            height={35}
                                            alt="btc"
                                            className="howiticon"
                                        />
                                    </div>
                                    <h6 className="badge step-two">Step 2</h6>
                                </div>
                                <div>
                                    <h5 className="sub-heading">Deposit & Get Tokens</h5>
                                    <p>
                                        Add funds to your wallet and receive your free tipins/tokens
                                    </p>
                                </div>
                            </div>

                            <div className="howitbox">
                                <div className="hiconb">
                                    <div className="">
                                        <Image
                                            src="assets/images/spin-wheel.png"
                                            width={35}
                                            height={35}
                                            alt="btc"
                                            className="howiticon"
                                        />
                                    </div>
                                    <h6 className="badge step-three">Step 3</h6>
                                </div>
                                <div>
                                    <h5 className="sub-heading">Spin the Wheel</h5>
                                    <p>
                                        Use your tokens to spin the wheel and win amazing rewards.
                                    </p>
                                </div>
                            </div>
                            <div className="howitbox">
                                <div className="hiconb">
                                    <div className="">
                                        <Image
                                            src="assets/images/cle-rew.png"
                                            width={35}
                                            height={35}
                                            alt="btc"
                                            className="howiticon"
                                        />
                                    </div>
                                    <h6 className="badge step-four">Step 4</h6>
                                </div>
                                <div>
                                    <h5 className="sub-heading">Claim Your Rewards</h5>
                                    <p>
                                        Get your tokens, bonuses and exclusive prizes instantly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

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