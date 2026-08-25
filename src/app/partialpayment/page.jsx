"use client"
import React, { useState, useEffect } from 'react'
import Countdown from 'react-countdown';
import '../../../public/assets/css/Checkout.css';
import { Container, Image, Row, Form, Col, Badge, Tooltip, OverlayTrigger, Alert, InputGroup, Button, NavDropdown, Nav, Accordion, Tab } from 'react-bootstrap'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faQuestionCircle, faCircleExclamation, faCopy, faExclamationCircle, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


const page = () => {
    const [show, setShow] = useState(true);
    const [singleOption, setSingleOption] = useState(null);
    const [showMore, setShowMore] = useState(false);
    const [showFaq, setShowFaq] = useState(false);
    const [faq, setFaq] = useState([]);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [search, setSearch] = useState("");

    // useEffect(() => {
    //     document.body.classList.add('partialpayment');

    //     return () => {
    //         document.body.classList.remove("partialpayment");
    //     };
    // });
    // const targetDate = new Date(2025, 9, 29);
    // Define the target date and time (29th October 2025, 15:30)
    const targetDate = new Date(2025, 12, 30, 15, 30); // 3:30 PM

    const handleItemClick = (e) => {
        e.stopPropagation();
    };

    const toggleDropdown = (name, e) => {
        e.stopPropagation();
        setOpenDropdown(prev => (prev === name ? null : name));
    };
    const options = [
        { value: 'btc', label: 'BTC Bitcoin', image: 'assets/images/color/btc.svg', balance: 0.523 },
        { value: 'eth', label: 'ETH Ethereum', image: 'assets/images/color/eth.svg', balance: 2.51223 },
        { value: 'ltc', label: 'LTC Litecoin', image: 'assets/images/color/ltc.svg', balance: 3.723 },
    ];

    const handleSingleChange = (selected) => {
        setSingleOption(selected);
        console.log('Single Select:', selected);
    };
    const customOptionLabel = (data) => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={data.image} alt={data.label} style={{ width: 20, height: 20, marginRight: 10 }} />
                {data.label}
            </div>
            <span style={{ fontSize: '0.85em', color: '#000' }}>
                {data.balance}
            </span>
        </div>
    );

    const txIds = [
        "8b7e049db3acb63afe36f31a5b2e85f45fbd4f09849747a2027fbdafc56553b9",
        "91ab22cd45ef9012abf33a5d98f7e6b4c3d2e1f00998877665544332211aa",
        "aa33bb44cc55dd66ee77ff88990011223344556677889900aabbccddeeff",
        "1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
        "91ab22cd45ef9012abf33a5d98f7e6b4c3d2e1f00998877665544332211aa",
        "aa33bb44cc55dd66ee77ff88990011223344556677889900aabbccddeeff",
    ];

    const customStyles = {
        control: (base, state) => ({
            ...base,
            borderColor: state.isFocused ? '#4bb1d9' : '#ccc',
            boxShadow: state.isFocused ? '0 0 5px #4bb1d9' : 'none',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
                borderColor: '#4bb1d9',
            },
        }),
        option: (base, { isFocused }) => ({
            ...base,
            backgroundColor: isFocused ? '#F6F6F7' : '#F6F6F7',
            color: '#000',
            transition: 'background-color 0.3s ease',
        }),
    };

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span>The countdown is over!</span>;
        } else {
            return (
                <div className="counttimerb d-flex mt-2 pt-2">
                    <div>
                        <div className="numicon">{days}</div>
                        <div>Days</div>
                    </div>
                    <div>
                        <div className="numicon">{hours}</div>
                        <div>Hours</div>
                    </div>
                    <div>
                        <div className="numicon">{minutes}</div>
                        <div>Minutes</div>
                    </div>
                    <div>
                        <div className="numicon">{seconds}</div>
                        <div>Seconds</div>
                    </div>
                </div>
            );
        }
    };

    return (
        <>
            <section className="paymentstepsbg">
                <div>
                    <Container>
                        <div className='partialpayment'>
                            <div className="pyspsbg">
                                <div className={`faq-sidebar ${showFaq ? "open" : ""}`}>
                                    <div className="faq-header d-flex justify-content-between align-items-center ">
                                        <h5 className="m-0">FAQ</h5>

                                        <span
                                            onClick={() => setShowFaq(false)}
                                            style={{ cursor: "pointer", fontSize: "18px" }}
                                        >
                                            ✕
                                        </span>
                                    </div>

                                    <div className="faq-body mt-3">
                                        <div className="searchfrmbox">
                                            <Form className="siteformbg srh-icon-y">
                                                <div className="searchfrm mer-viw-y">
                                                    <Form.Group className="form-group w-100">
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Search FAQ"
                                                                value={search}
                                                                onChange={(e) => setSearch(e.target.value)}
                                                            />
                                                            <InputGroup.Text>
                                                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                                            </InputGroup.Text>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </div>
                                            </Form>
                                            {/* {
                                            search.trim() !== "" && (
                                                faq?.filter(item =>
                                                    item.question?.toLowerCase().includes(search.trim().toLowerCase())
                                                ).length === 0 ? (
                                                    <div className="no-record-box mt-2">
                                                        {search.trim()}
                                                    </div>
                                                ) : null
                                            )
                                        } */}

                                            {/* {
                                            search.trim() === "" && faq?.length === 0 && (
                                                <div className="no-record-box mt-2 nodata">
                                                    <Image src="../assets/images/nodata.svg"/>
                                                    <p>No record found</p>

                                                </div>
                                            )
                                        } */}
                                        </div>
                                        <Tab.Container defaultActiveKey="tab1">
                                            <SimpleBar className="faqsitescroll">
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="tab1">
                                                        <Accordion defaultActiveKey="1" flush>
                                                            <Accordion defaultActiveKey="0">

                                                                <Accordion.Item eventKey="0">
                                                                    <Accordion.Header>
                                                                        Gateway FAQs
                                                                    </Accordion.Header>

                                                                    <Accordion.Body>

                                                                        <Accordion defaultActiveKey="0" className="inner-accordion">

                                                                            {/* First Inner FAQ */}
                                                                            <Accordion.Item eventKey="0">
                                                                                <Accordion.Header className="inner-header">
                                                                                    How do I get started with the gateway?
                                                                                </Accordion.Header>

                                                                                <Accordion.Body className="inner-body">
                                                                                    Simply sign up, configure your wallet or API settings, and choose how you want to receive payments—through plugins, invoices, or custom integrations.
                                                                                </Accordion.Body>
                                                                            </Accordion.Item>

                                                                            {/* Second Inner FAQ */}
                                                                            <Accordion.Item eventKey="1">
                                                                                <Accordion.Header className="inner-header">
                                                                                    What payment methods are supported?
                                                                                </Accordion.Header>

                                                                                <Accordion.Body className="inner-body">
                                                                                    The gateway supports crypto payments, wallet transfers, API-based payments, and plugin integrations depending on your setup.
                                                                                </Accordion.Body>
                                                                            </Accordion.Item>

                                                                        </Accordion>

                                                                    </Accordion.Body>
                                                                </Accordion.Item>

                                                            </Accordion>
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
                                            </SimpleBar>
                                        </Tab.Container>
                                    </div>

                                </div>
                                {showFaq && (
                                    <div
                                        className="faq-overlay"
                                        onClick={() => setShowFaq(false)}
                                    ></div>
                                )}


                                <div className="paybg pay-bg-y">
                                    <div className="d-flex justify-content-between align-item-center">
                                        <div className="m-0 patial-paymt-y">
                                            <Image src="assets/images/logo.png" width={100} height={100} alt="logo" className="lightthemeicon ps-2" />
                                            <Image src="assets/images/logo-dark.png" width={100} height={57} alt="logo" className="darkthemeicon ps-2" />
                                        </div>
                                        <div className='d-flex gap-2 align-items-center mb-2'>
                                            <div>
                                                {/* <small><OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={
                                                <Tooltip id="staylogged-tooltip">
                                                    A contract address is a unique
                                                </Tooltip>}><FontAwesomeIcon icon={faQuestionCircle} size="lg" />
                                            </OverlayTrigger></small> */}
                                                <small onClick={() => setShowFaq(true)} style={{ cursor: "pointer" }}>
                                                    <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
                                                </small>

                                            </div>
                                            <div>
                                                <NavDropdown title={<div className="pull-left" id="lang">EN</div>} className="langmenu borderlangbox" id="basic-nav-dropdown">
                                                    <NavDropdown.Item as={Link} href="/" className="active">
                                                        <span className="langenicon"><Image src="assets/images/en.svg" alt="icon" width={100} height={100} /></span>
                                                        English
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Item as={Link} href="/">
                                                        <span className="langenicon"><Image src="assets/images/cn.svg" alt="icon" width={100} height={100} /></span>
                                                        Chinese
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Item as={Link} href="/">
                                                        <span className="langenicon"><Image src="assets/images/es.svg" alt="icon" width={100} height={100} /></span>
                                                        Spanish
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Item as={Link} href="/">
                                                        <span className="langenicon"><Image src="assets/images/ru.svg" alt="icon" width={100} height={100} /></span>
                                                        Russian
                                                    </NavDropdown.Item>
                                                </NavDropdown>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pay-tsp-sbg-y">
                                        <div className="paymentspsbg mb-3">
                                            <div className='d-flex justify-content-between'>
                                                <h6 className="h6">
                                                    To Pay:
                                                </h6>
                                                <div className='d-flex align
                                            -items-center gap-2'>
                                                    <p className="sub-heading text-center text-decoration-line-through">
                                                        1.00 USDT</p>
                                                    <h2 className="sub-heading text-center">
                                                        1.00 USDT
                                                    </h2>
                                                </div>

                                            </div>

                                            <div className="d-flex gap-2 mb-2 justify-content-between ">
                                                <div className='d-flex gap-2 netwrk-y'>
                                                    <Badge bg="warning">Network: TRON(TRC-20)</Badge>
                                                    <Badge bg="warning"><FontAwesomeIcon icon={faQuestionCircle} size="lg me-2" />Contract</Badge>
                                                </div>
                                                <div>
                                                    <h6 className="sma-usdt-y">
                                                        = $1.00
                                                    </h6>
                                                </div>

                                            </div>
                                            <p>
                                                <Badge bg="warning">
                                                    <FontAwesomeIcon icon={faExclamationCircle} className="me-2" size="lg" />
                                                    You pay network fee
                                                </Badge>
                                            </p>
                                            <hr />
                                            <div className='text-center  mt-1'>
                                                <Image src="assets/images/partialpayment.svg" width={100} height={100} alt="logo" className="partialpaymentimg" />
                                                <h2 className="sub-heading">
                                                    Partial Payment
                                                </h2>
                                                <p>The Invoice was paid only for <b className="bold-letter-y">0.554 USDT Of 1.00 USDT.</b>you have <b className="bold-letter-y">0.446 USDT</b> left to pay</p>
                                            </div>
                                            <Alert variant="warning" className='mt-3 p-3'>
                                                <div className='d-flex justify-content-between'>
                                                    <div>Invoice Amount</div>
                                                    <div className="bold-letter-y">1.00 USDT</div>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <div>Amount Paid</div>
                                                    <div className="bold-letter-y">0.554 USDT</div>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <div>Amount Remaining to pay</div>
                                                    <div className="bold-letter-y">0.446 USDT</div>
                                                </div>
                                            </Alert>
                                            <hr />
                                            <p>We have detected your transaction. Confirm may take several Minitutes</p>
                                            <div className='text-center  mt-1'>
                                                <Image src="assets/images/ffloader.gif" width={100} height={100} alt="logo" className="ffloader-y" />
                                                <p className="bold-letter-y">
                                                    Payment Confirmation Process
                                                </p>
                                            </div>

                                            <div className="row align-items-center mt-2">
                                                <div className="col-md-12">
                                                    <form action="" className='siteformbg '>
                                                        <Form.Group className="form-group">
                                                            <Form.Label><b>Wallet address for Transfer:</b></Form.Label>
                                                            <InputGroup>
                                                                <Form.Control type="text" id="merchantid" placeholder="TR742tkTdsLv9qAxCUxNnkkXXbWdTZv4jmP" />
                                                                <div className="input-group-append">
                                                                    <InputGroup.Text id="copybtn"> <FontAwesomeIcon icon={faCopy} /> </InputGroup.Text>
                                                                </div>
                                                            </InputGroup>
                                                        </Form.Group>
                                                        <div className={`siteformbg ${showMore ? "" : ""}`}>
                                                            <Form.Group className="form-group">
                                                                <Form.Label><b>TxID:</b></Form.Label>
                                                                {!showMore && (
                                                                    <InputGroup>
                                                                        <Form.Control
                                                                            type="text"
                                                                            value={txIds[0]}
                                                                            readOnly
                                                                        />
                                                                        <InputGroup.Text id="copybtn">
                                                                            <FontAwesomeIcon icon={faCopy} />
                                                                        </InputGroup.Text>
                                                                    </InputGroup>
                                                                )}
                                                                {showMore && (
                                                                    <div className="txid-scroll-box">
                                                                        {txIds.map((tx, index) => (
                                                                            <InputGroup className="mb-2" key={index}>
                                                                                <Form.Control
                                                                                    type="text"
                                                                                    value={tx}
                                                                                    readOnly
                                                                                />
                                                                                <InputGroup.Text id="copybtn">
                                                                                    <FontAwesomeIcon icon={faCopy} />
                                                                                </InputGroup.Text>
                                                                            </InputGroup>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </Form.Group>
                                                        </div>

                                                        <div className='text-center prar-pymnt-y'>
                                                            <Button
                                                                type="button"
                                                                className="btn sitebtn mb-2 text-decoration-none"
                                                                onClick={() => setShowMore(!showMore)}
                                                            >
                                                                {showMore ? "Show Less" : "Show More"}
                                                            </Button> <br />
                                                            <Link id="view_btn" href="#" className="btn sitebtn">Decline to Pay Remaining Amount</Link>
                                                            <p className='text-center mt-3'>
                                                                Timer remaining for payment
                                                            </p>
                                                            <div className='d-flex justify-content-center align-items-center'>
                                                                <div className='text-center'>
                                                                    <Image src="assets/images/hourglass.gif" width={100} height={100} alt="logo" className="frglsloader-y" />
                                                                </div>
                                                                <div class="numicon m-0"><span>05:58:27</span></div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="procbt mt-1">
                                        <p>Created By  <Image src="assets/images/logo.png" width={100} height={100} alt="logo" className="lightthemeicon ps-2" />
                                            <Image src="assets/images/logo-dark.png" width={100} height={57} alt="logo" className="darkthemeicon ps-2" /></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Container>
                </div >
            </section >
        </>
    )
}

export default page