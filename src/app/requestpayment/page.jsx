"use client"
import React, { useState, useEffect } from 'react'
import Countdown from 'react-countdown';
import '../../../public/assets/css/Checkout.css';
import { Container, Image, Row, Form, Col, Badge, Tooltip, OverlayTrigger, Alert, InputGroup, Button, NavDropdown, Nav, Accordion, Tab } from 'react-bootstrap'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faQuestionCircle, faCircleExclamation, faCopy, faExclamationCircle, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Select, { components } from "react-select";


const page = () => {
    const [show, setShow] = useState(true);
    const [singleOption, setSingleOption] = useState(null);
    const [showMore, setShowMore] = useState(false);
    const [showFaq, setShowFaq] = useState(false);
    const [faq, setFaq] = useState([]);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [search, setSearch] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedNetwork, setSelectedNetwork] = useState(null);
    const [networkSearch, setNetworkSearch] = useState("");
    const [exchangeTime, setExchangeTime] = useState(117);

    const targetDate = new Date(2025, 12, 30, 15, 30);

    useEffect(() => {
        if (exchangeTime <= 0) return;

        const timer = setInterval(() => {
            setExchangeTime((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [exchangeTime]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;

        return `${mins.toString().padStart(2, '0')}:${secs
            .toString()
            .padStart(2, '0')}`;
    };

    const handleItemClick = (e) => {
        e.stopPropagation();
    };

    const toggleDropdown = (name, e) => {
        e.stopPropagation();
        setOpenDropdown(prev => (prev === name ? null : name));
    };
    const options = [
        { value: 'btc', label: 'BTC Bitcoin', image: 'assets/images/color/btc.svg', balance: '-12%' },
        { value: 'eth', label: 'ETH Ethereum', image: 'assets/images/color/eth.svg', balance: '+8%' },
        { value: 'ltc', label: 'LTC Litecoin', image: 'assets/images/color/ltc.svg', balance: '+16' },
    ];
    const networkOptions = [
        { value: 'btc', label: 'BTC Network', image: 'assets/images/color/btc.svg' },
        { value: 'eth', label: 'Ethereum ERC20', image: 'assets/images/color/eth.svg' },
        { value: 'ltc', label: 'Litecoin Network', image: 'assets/images/color/ltc.svg' },
    ];

    const Option = (props) => {
        const { data } = props;

        return (
            <components.Option {...props}>
                <div className="wallet-option">
                    <div className="wallet-left">
                        <img src={data.image} alt={data.label} className="wallet-icon" />
                        <span className="wallet-label">{data.label}</span>
                    </div>
                    <span className="wallet-badge">
                        {data.balance}
                    </span>
                </div>
            </components.Option>
        );
    };

    const CustomOption = (props) => {
        const { data } = props;

        return (
            <components.Option {...props}>
                <div className="wallet-option">
                    <div className="wallet-left">
                        <img src={data.image} alt={data.label} className="wallet-icon" />
                        <span className="wallet-label">{data.label}</span>
                    </div>
                </div>
            </components.Option>
        );
    };
    const NetworkMenuList = (props) => {

        const filtered = props.options.filter(option =>
            option.label.toLowerCase().includes(networkSearch.toLowerCase())
        );

        return (
            <components.MenuList {...props}>
                <div className="dropdown-search-wrapper">
                    <input
                        type="text"
                        placeholder="Search"
                        className="drpn-srh-inpt-y"
                        value={networkSearch}
                        onChange={(e) => setNetworkSearch(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>

                {filtered.length > 0 ? (
                    filtered.map((option) => (
                        <CustomOption
                            key={option.value}
                            {...props}
                            data={option}
                        />
                    ))
                ) : (
                    <div className="no-data">No record found</div>
                )}
            </components.MenuList>
        );
    };

    const MenuList = (props) => (
        <components.MenuList {...props}>
            <div className="dropdown-search-wrapper">
                <input
                    type="text"
                    placeholder="Search"
                    className="drpn-srh-inpt-y"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
            {props.children}
        </components.MenuList>
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
                                <div className="paybg pay-bg-y">
                                    <div className="d-flex justify-content-between align-item-center">
                                        <div className="m-0 patial-paymt-y">
                                            <Image src="assets/images/logo.png" width={100} height={100} alt="logo" className="lightthemeicon ps-2" />
                                            <Image src="assets/images/logo-dark.png" width={100} height={57} alt="logo" className="darkthemeicon ps-2" />
                                        </div>
                                        <div className='d-flex gap-2 align-items-center mb-2'>
                                            <div>
                                                <small>
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
                                                    <h2 className="sub-heading text-center">
                                                        1000.00 INR
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <Badge bg="success">Discount 50%</Badge>
                                            </div>
                                            <hr />
                                            <Form.Group className="form-group">
                                                <Form.Label>Select Wallet</Form.Label>
                                                <Select
                                                    options={options}
                                                    // menuIsOpen={true}
                                                    value={selectedOption}
                                                    onChange={setSelectedOption}
                                                    components={{ MenuList, Option }}
                                                    isSearchable={false}
                                                    placeholder="Select wallet"
                                                    classNamePrefix="wallet"
                                                    filterOption={(option) =>
                                                        option.label.toLowerCase().includes(inputValue.toLowerCase())
                                                    }
                                                    noOptionsMessage={() => "No record found"}

                                                />
                                            </Form.Group>
                                            <Form.Group className="form-group">
                                                <Form.Label>Select Network</Form.Label>
                                                <Select
                                                    options={networkOptions}
                                                    value={selectedNetwork}
                                                    onChange={setSelectedNetwork}
                                                    components={{ MenuList: NetworkMenuList, Option: CustomOption }}
                                                    isSearchable={false}
                                                    placeholder="Select network"
                                                    classNamePrefix="wallet"
                                                />
                                            </Form.Group>
                                            <Alert variant="warning payable-yy" className='mt-3 p-3'>
                                                <div className='d-flex justify-content-between'>
                                                    <div>Amount payable in selected currency</div>
                                                    <div className="bold-letter-y">0.00013934 BTC</div>
                                                </div>
                                                <hr />
                                                <div className='d-flex justify-content-between align-items-center m-0 p-0'>
                                                    <div>The exchange rate is vaild for</div>
                                                    <div className="bold-letter-y">
                                                        <span>
                                                            <Image
                                                                src="assets/images/ffloader.gif"
                                                                width={100}
                                                                height={100}
                                                                alt="loader"
                                                                className="ffloader-y"
                                                            />
                                                        </span>
                                                        {exchangeTime > 0 ? formatTime(exchangeTime) : "00:00"}
                                                    </div>
                                                </div>
                                            </Alert>
                                            <div className="row align-items-center mt-2">
                                                <div className="col-md-12">
                                                    <form action="" className='siteformbg '>
                                                        <div className='text-center prar-pymnt-y'>
                                                            <Link id="view_btn" href="#" className="btn sitebtn">Proceed to payment</Link>
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