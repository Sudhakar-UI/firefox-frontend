"use client"
import React, { useEffect, useState } from "react";
import { Container, Table, Image, Row, Form, Col, Badge, Accordion, OverlayTrigger, Tooltip, Modal, InputGroup, Button } from "react-bootstrap";
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faSortDown, faEyeSlash, faAngleDown, faQuestionCircle, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import ResponsiveTable from '../components/ResponsiveTable';
import SimpleBar from 'simplebar-react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const earn = () => {
    const flexscroll = {
        desktop: {
            breakpoint: { max: 1920, min: 1200 },
            items: 3,
        },
        laptop: {
            breakpoint: { max: 1200, min: 1050 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1050, min: 600 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 2,
        }
    };
    useEffect(() => {
        document.body.classList.add('innerpagebg');

        return () => {
            document.body.classList.remove("innerpagebg");
        };
    });
    const [activeKey, setActiveKey] = useState("1");
    const [openRow, setOpenRow] = useState(null);

    const toggleRow = (row) => {
        setOpenRow(openRow === row ? null : row);
    };

    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);
    return (
        <>
            <article className="innerpage new-earn-page">
                <Homeheader />
                <section className="homebannerbg">
                    <Container className="sitebannercontent">
                        <Row className="align-items-center text-center">
                            <Col lg={6} md={6} sm={12} className="main-div-flex" >
                                <h2 className="main-heading">Earn More <br /><span>Grow Your Crypto</span></h2>
                                <p className="text-start"> Stake your crypto assets and earn stable,<br /> reliable returns with Firefox Earn.</p>
                                < button className="sitebtn w-auto">Start Earning</button>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <div className="text-center">
                                    <Image src="assets/images/earn-banner.png" className="banner-img " alt="icon" width={100} height={100} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="earn-crypto">
                    <Container >
                        <div className="panelcontentbox savingbannersec">
                            <h2 className="heading-title pt-0 pb-2 border-0 text-center">Popular Products</h2>

                            <div className="bordertablebox">
                                <div className="table-responsive sitescroll">
                                    <Table className="sitetable sitescroll" id='table1'>
                                        <thead>
                                            <tr>
                                                <th>Coins</th>
                                                <th>Est.APR</th>
                                                <th> <span className="duration-days">Duration</span></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody className="border-0">
                                            <tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data1" data-bs-parent="#accordion" aria-expanded="false">
                                                <td><Image src="assets/images/color/btc.svg" className="coinicon" />BTC</td>
                                                <td><span className="t-green">4.2%~12.11%</span></td>
                                                <td><span className="duration-days">
                                                    Flexible/Locked
                                                </span>
                                                </td>
                                                <td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
                                            </tr>
                                            <tr className="accordeon-content">
                                                <td colSpan={4} className="p-0">
                                                    <div id="data1" className="collapse">
                                                        <Table className="sitetable">
                                                            <tbody>
                                                                <tr>
                                                                    <td rowSpan="3"></td>
                                                                    <td rowSpan="3"><span className="t-green ps-2">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></span></td>
                                                                    <td><span className="t-gray mx-1 duration-days">Flexible</span></td>
                                                                    <td className="notablehead"><Link className="sitebtn btn-sm" href="#" onClick={handleShow1}>Invest Now</Link></td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="accordeon-content">
                                                <td colSpan={4} className="p-0">
                                                    <div id="data1" className="collapse">
                                                        <Table className="sitetable">
                                                            <tbody>
                                                                <tr>
                                                                    <td rowSpan="3"></td>
                                                                    <td><span className="t-green ps-2">4.2%</span></td>
                                                                    <td><span className="t-gray mx-1 duration-days">Locked</span></td>
                                                                    <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Invest Now</Link></td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data2" data-bs-parent="#accordion" aria-expanded="false">
                                                <td><Image src="assets/images/color/eth.svg" className="coinicon" />ETH</td>
                                                <td><span className="t-green">4.2%~12.11%</span></td>
                                                <td><span className="duration-days">
                                                    Flexible/Locked
                                                </span>
                                                </td>
                                                <td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
                                            </tr>
                                            <tr className="accordeon-content">
                                                <td colSpan={4} className="p-0">
                                                    <div id="data2" className="collapse">
                                                        <Table className="sitetable">
                                                            <tbody>
                                                                <tr>
                                                                    <td rowSpan="3"></td>
                                                                    <td ><span className="t-green ps-2">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></span></td>
                                                                    <td><span className="t-gray mx-1 duration-days">Flexible</span></td>
                                                                    <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Invest Now</Link></td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="accordeon-content">
                                                <td colSpan={4} className="p-0">
                                                    <div id="data2" className="collapse">
                                                        <Table className="sitetable">
                                                            <tbody>
                                                                <tr>
                                                                    <td rowSpan="3"></td>
                                                                    <td><span className="t-green ps-2">4.2%</span></td>
                                                                    <td><span className="t-gray mx-1 duration-days">Locked</span></td>
                                                                    <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Invest Now</Link></td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data3" data-bs-parent="#accordion" aria-expanded="false">
                                                <td><Image src="assets/images/color/ltc.svg" className="coinicon" />LTC</td>
                                                <td><span className="t-green">4.2%~12.11%</span></td>
                                                <td><span className="duration-days">
                                                    Flexible/Locked
                                                </span>
                                                </td>
                                                <td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
                                            </tr>

                                            <tr className="accordeon-content">
                                                <td colSpan={4} className="p-0">
                                                    <div id="data3" className="collapse">
                                                        <Table className="sitetable">
                                                            <tbody>
                                                                <tr>
                                                                    <td rowSpan="3"></td>
                                                                    <td><span className="t-green ps-2">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></span></td>
                                                                    <td><span className="t-gray mx-1 duration-days">Flexible</span></td>
                                                                    <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Invest Now</Link></td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="accordeon-content">
                                                <td colSpan={4} className="p-0">
                                                    <div id="data3" className="collapse">
                                                        <Table className="sitetable">
                                                            <tbody>
                                                                <tr>
                                                                    <td rowSpan="3"></td>
                                                                    <td><span className="t-green ps-2">4.2%</span></td>
                                                                    <td><span className="t-gray mx-1 duration-days">Flexible</span></td>
                                                                    <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Invest Now</Link></td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data4" data-bs-parent="#accordion" aria-expanded="false">
                                                <td><Image src="assets/images/color/trx.svg" className="coinicon" />TRX</td>
                                                <td><span className="t-green">4.2%~12.11%</span></td>
                                                <td><span className="duration-days">
                                                    Flexible/Locked
                                                </span>
                                                </td>
                                                <td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
                                            </tr>
                                            <tr className="accordeon-content">
                                                <td colSpan={4} className="p-0">
                                                    <div id="data4" className="collapse">
                                                        <Table className="sitetable">
                                                            <tbody>
                                                                <tr>
                                                                    <td rowSpan="3"></td>
                                                                    <td><span className="t-green ps-2">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></span>
                                                                    </td>
                                                                    <td><span className="t-gray mx-1 duration-days">Flexible</span></td>
                                                                    <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Invest Now</Link></td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="accordeon-content">
                                                <td colSpan={4} className="p-0">
                                                    <div id="data4" className="collapse">
                                                        <Table className="sitetable">
                                                            <tbody>
                                                                <tr>
                                                                    <td></td>
                                                                    <td><span className="t-green ps-2">4.2%</span></td>
                                                                    <td><span className="t-gray mx-1 duration-days">Flexible</span></td>
                                                                    <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Invest Now</Link></td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data5" data-bs-parent="#accordion" aria-expanded="false">
                                                <td><Image src="assets/images/color/sol.svg" className="coinicon" />SOL</td>
                                                <td><span className="t-green">4.2%~12.11%</span></td>
                                                <td><span className="duration-days">
                                                    Flexible/Locked
                                                </span>
                                                </td>
                                                <td><FontAwesomeIcon icon={faAngleDown} /></td>
                                            </tr>
                                            <tr className="accordeon-content">
                                                <td colSpan={4} className="p-0">
                                                    <div id="data5" className="collapse">
                                                        <Table className="sitetable">
                                                            <tbody>
                                                                <tr>
                                                                    <td rowSpan="3"></td>
                                                                    <td><span className="t-green ps-2">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></span>
                                                                    </td>
                                                                    <td><span className="t-gray mx-1 duration-days">Flexible</span></td>
                                                                    <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Invest Now</Link></td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="accordeon-content">
                                                <td colSpan={4} className="p-0">
                                                    <div id="data5" className="collapse">
                                                        <Table className="sitetable">
                                                            <tbody>
                                                                <tr>
                                                                    <td rowSpan="3"></td>
                                                                    <td><span className="t-green ps-2">4.2%</span></td>
                                                                    <td><span className="t-gray mx-1 duration-days">Flexible</span></td>
                                                                    <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Invest Now</Link></td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data6" data-bs-parent="#accordion" aria-expanded="false">
                                                <td><Image src="assets/images/color/avax.svg" className="coinicon" />AVAX</td>
                                                <td><span className="t-green">4.2%~12.11%</span></td>
                                                <td><span className="duration-days">
                                                    Flexible/Locked
                                                </span>
                                                </td>
                                                <td><FontAwesomeIcon icon={faAngleDown} /></td>
                                            </tr>
                                            <tr className="accordeon-content">
                                                <td colSpan={4} className="p-0">
                                                    <div id="data6" className="collapse">
                                                        <Table className="sitetable">
                                                            <tbody>
                                                                <tr>
                                                                    <td rowSpan="3"></td>
                                                                    <td><span className="t-green ps-2">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></span>
                                                                    </td>
                                                                    <td><span className="t-gray mx-1 duration-days">Flexible</span></td>
                                                                    <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Invest Now</Link></td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="accordeon-content">
                                                <td colSpan={4} className="p-0">
                                                    <div id="data6" className="collapse">
                                                        <Table className="sitetable">
                                                            <tbody>
                                                                <tr>
                                                                    <td rowSpan="3"></td>
                                                                    <td><span className="t-green ps-2">4.2%</span></td>
                                                                    <td><span className="t-gray mx-1 duration-days">Flexible</span></td>
                                                                    <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Invest Now</Link></td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data7" data-bs-parent="#accordion" aria-expanded="false">
                                                <td><Image src="assets/images/color/ton.svg" className="coinicon" />TON</td>
                                                <td><span className="t-green">4.2%~12.11%</span></td>
                                                <td><span className="duration-days">
                                                    Flexible/Locked
                                                </span>
                                                </td>
                                                <td><FontAwesomeIcon icon={faAngleDown} /></td>
                                            </tr>
                                            <tr className="accordeon-content">
                                                <td colSpan={4} className="p-0">
                                                    <div id="data7" className="collapse">
                                                        <Table className="sitetable">
                                                            <tbody>
                                                                <tr>
                                                                    <td rowSpan="3"></td>
                                                                    <td><span className="t-green ps-2">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></span>
                                                                    </td>
                                                                    <td><span className="t-gray mx-1 duration-days">Flexible</span></td>
                                                                    <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Invest Now</Link></td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="accordeon-content">
                                                <td colSpan={4} className="p-0">
                                                    <div id="data7" className="collapse">
                                                        <Table className="sitetable">
                                                            <tbody>
                                                                <tr>
                                                                    <td rowSpan="3"></td>
                                                                    <td><span className="t-green ps-2">4.2%</span></td>
                                                                    <td><span className="t-gray mx-1 duration-days">Flexible</span></td>
                                                                    <td className="notablehead"><Link className="sitebtn  btn-sm" href="#" onClick={handleShow1}>Invest Now</Link></td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </Table>
                                </div>
                                <ResponsiveTable tableId="table4" />
                            </div>

                        </div>
                    </Container>
                </section>
                {/* <section className="what-earn">
                    <Container className="sitebannercontent">
                        <Row className="align-items-center text-center">

                            <Col lg={6} md={6} sm={12}>
                                <div className="text-center">
                                    <Image src="assets/images/earn-banner-dark.png" className="banner-img lightthemeicon" alt="icon" width={100} height={100} />
                                    <Image src="assets/images/staking-img.png" className="banner-img " alt="icon" width={100} height={100} />
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} className=" d-flex align-items-start flex-column justify-content-start" >
                                <h2 className="heading-title">What is Staking?</h2>
                                <p className="text-start"> Staking allows you to lock your crypto assets for a period of time to earn rewards. The longer you stake, the more you earn — without active trading.</p>
                                < button className="sitebtn w-auto">Start Earning</button>
                            </Col>
                        </Row>
                    </Container>
                </section> */}
                <section className="howitworksp2p" id="howitworksp2p">
                    <Container data-aos="fade-up">
                        <h2 className="heading-title text-center pb-3">How It Works</h2>

                        <div className="howitflexp2p">
                            <div className="howitboxp2p">
                                <div className="">
                                    <Image
                                        src="assets/images/choose_coin.svg"
                                        width={35}
                                        height={35}
                                        alt="btc"
                                        className="howitflexp2picon"
                                    />
                                </div>
                                <div>
                                    <h5 className="text-center">1.Choose Coin</h5>
                                    <p className="text-center">
                                        Select your preferred cryptocurrency from the list of supported assets to start earning.
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
                                        src="assets/images/earn_rewards.svg"
                                        width={35}
                                        height={35}
                                        alt="btc"
                                        className="howitflexp2picon"
                                    />
                                </div>
                                <div>
                                    <h5 className="text-center">2.Stake Crypto</h5>
                                    <p className="text-center">
                                        Lock your crypto securely by selecting your preferred staking amount and duration.
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
                                        src="assets/images/stake_crypto.svg"
                                        width={35}
                                        height={35}
                                        alt="btc"
                                        className="howitflexp2picon"
                                    />
                                </div>
                                <div>
                                    <h5 className="text-center">3.Earn Rewards</h5>
                                    <p className="text-center">
                                        Receive daily rewards and monitor your earnings anytime through Firefox Earn.
                                    </p>
                                </div>
                            </div>
                        </div>



                    </Container>
                </section>

                <section className="p2pfaq" id="faq" >
                    <Container>
                        <h2 className="heading-title pt-0 pb-2 border-0 text-center">Staking Rules</h2>

                        <Row>
                            <Col xl={12} lg={12} md={12}>
                                <div className="faqcntbox">
                                    <Accordion
                                        defaultActiveKey="1"
                                        activeKey={activeKey}
                                        onSelect={(k) => setActiveKey(k)}
                                        flush
                                    >
                                        <Accordion.Item
                                            eventKey="1"
                                            className={activeKey === "1" ? "active" : ""}
                                        >
                                            <Accordion.Header>
                                                What is Reward Calculation?
                                            </Accordion.Header>

                                            <Accordion.Body>
                                                KYC may be required based on regional regulations or if
                                                you want higher withdrawal limits.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item
                                            eventKey="2"
                                            className={activeKey === "2" ? "active" : ""}
                                        >
                                            <Accordion.Header>
                                                Who is Eligible?
                                            </Accordion.Header>

                                            <Accordion.Body>
                                                KYC may be required based on regional regulations or if
                                                you want higher withdrawal limits.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item
                                            eventKey="3"
                                            className={activeKey === "3" ? "active" : ""}
                                        >
                                            <Accordion.Header>
                                                What is Early Unstake?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                KYC may be required based on regional regulations or if
                                                you want higher withdrawal limits.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item
                                            eventKey="4"
                                            className={activeKey === "4" ? "active" : ""}
                                        >
                                            <Accordion.Header>
                                                Terms & Conditions
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                KYC may be required based on regional regulations or if
                                                you want higher withdrawal limits.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item
                                            eventKey="5"
                                            className={activeKey === "5" ? "active" : ""}
                                        >
                                            <Accordion.Header>
                                                What is Lock Period?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                KYC may be required based on regional regulations or if
                                                you want higher withdrawal limits.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>

                            </Col>
                        </Row>

                    </Container>
                </section>
                <section className="earn-crypto">
                    <Container>
                        <div className="readyinvestbox">
                            <Image src="assets/images/staking-last.png" className="" alt="icon" width={100} height={100} />
                            <div>
                                <h2 className="heading-title">Ready To Start Earning?</h2>
                                <p className="text-start"> Stake your crypto today and enjoy secure,high returns</p>
                                < button className="sitebtn w-auto">Stake Now</button>
                            </div>
                            <Image src="assets/images/staking-chart-dark.png" className=" " alt="icon" width={100} height={100} />
                        </div>
                    </Container>
                </section>
            </article>
            <Homefooter />
            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal subscribemodalbox' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Subscribe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Row>
                            <Col lg={12} xs={12}>
                                <Carousel className="partnerflex" responsive={flexscroll} autoPlay={true} autoPlaySpeed={3000} showDots={false} swipeable={true} draggable={true}>
                                    <a href="" className="s-flex-modal">
                                        <p className="s-modal-txt">Flexible</p>
                                        <p className="saving-txt">12.11% </p>
                                    </a>
                                    <a href="" className="s-flex-modal active">
                                        <p className="s-modal-txt">Fixed 7D</p>
                                        <p className="saving-txt"> 14.50%</p>
                                    </a>
                                    <a href="" className="s-flex-modal">
                                        <p className="s-modal-txt">Fixed 30D</p>
                                        <p className="saving-txt">18.00% </p>
                                    </a>
                                    <a href="" className="s-flex-modal">
                                        <p className="s-modal-txt">Flexible</p>
                                        <p className="saving-txt">18.23% </p>
                                    </a>
                                </Carousel>
                                <Form.Group>
                                    <Form.Group className="form-group" >
                                        <Form.Label>Amount</Form.Label>
                                        <InputGroup>
                                            <Form.Control name="code" id="code" type="text" placeholder="Min 0.1 USDT" />
                                            <InputGroup.Text id="max">Max</InputGroup.Text>
                                        </InputGroup>
                                        <div className="notestitle notesgray dpstnotes">
                                            <p className="pb-0 t-gray text-start">
                                                Available 5,857.27879652 USDT
                                            </p>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Summary</Form.Label>
                                        <div className="saving-summary savng-y">
                                            <div className="">

                                                <div className="table-responsive" data-simplebar>
                                                    <Table className="sitetable m-0" id='table1'>
                                                        <tbody>
                                                            <tr>
                                                                <td>Subscription Date</td>
                                                                <td className="sub-date-y">2026-01-06 11:17:05</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Interest Start Date</td>
                                                                <td className="sub-date-y">2026-01-06 11:17:05</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Interest Period</td>
                                                                <td className="sub-date-y">1 Day</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Interest Payment Date</td>
                                                                <td className="sub-date-y">2026-01-06 11:17:05</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                    </Form.Group>
                                </Form.Group>
                                <Form.Group>
                                    <div className="saving-checkbox-wrapper">
                                        <Form.Check id="savingcheck" className="saving-checkbox me-2" />
                                        <Form.Label className="saving-checkbox-label">I have read and agreed to </Form.Label><Link href="#" className="alink a-lik-y"> Firefox Simple Earn Service Terms & Conditions</Link>
                                    </div>
                                </Form.Group>
                                <Form.Group className="text-center">
                                    <Button className="sitebtn" id='confirmbtn'>
                                        Login to continue
                                    </Button>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default earn