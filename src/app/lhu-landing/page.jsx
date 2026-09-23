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
import Carousel from "react-multi-carousel";
import SimpleBar from 'simplebar-react';
import ResponsiveTable from '../components/ResponsiveTable';
import 'simplebar-react/dist/simplebar.min.css';

const whyLhuResponsive = {
    desktop: {
        breakpoint: { max: 1920, min: 1080 },
        items: 3,
    },
    // tablet: {
    //     breakpoint: { max: 1200, min: 1080 },
    //     items: 3,
    // },
    tablet: {
        breakpoint: { max: 1080, min: 769 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
    },
};




export default function Home() {

    const [activeKey, setActiveKey] = useState("1");
    const [activeTab, setActiveTab] = useState("trade");
    const [activeHowSection, setActiveHowSection] = useState("trading");
    const [isSpinning, setIsSpinning] = useState(false);
    const [wheelRotation, setWheelRotation] = useState(0);
    const [lightsOn, setLightsOn] = useState(false);
    const [soundOn, setSoundOn] = useState(true);
    const [wonPrize, setWonPrize] = useState(null);
    const [showResult, setShowResult] = useState(false);



    useEffect(() => {
        AOS.init();
    })





    return (

        <div className='homepagebg spin-wheel-page lhu-home-page'>
            <Homeheader />

            <section className="homebannerbg spin-wheel-home">
                <Container className="sitebannercontent">
                    <div className="spin-wheel-content">
                        <div className="spin-wheel-left">
                            <div className="spin-wheel-left-badge">
                                 <span className="spin-wheel-left-spin-btn-icon"><Image
                                        src="assets/images/lhu-coin.svg"
                                        width={100}
                                        height={100}
                                        alt="btc"
                                        className="lhu-icon"
                                    /></span>
                                <span>The Native Token of Our Exchange</span>
                            </div>

                            <h2 className="spin-wheel-left-heading">
                                Spin. Claim <br />
                                Trade <span className="spin-wheel-left-heading-highlight">LHU</span>
                            </h2>

                            <p className="spin-wheel-left-subtext">
                                Win LHU for free through Spin Wheel and trade it on <br /> our exchange.
                            </p>



                            <div className="spin-wheel-left-actions">
                                <button
                                    type="button"
                                    className={`spin-wheel-left-spin-btn ${isSpinning ? 'spinning-active' : ''}`}

                                    disabled={isSpinning}
                                >
                                    <span className="spin-wheel-left-spin-btn-icon"><Image
                                        src="assets/images/spin-now.svg"
                                        width={100}
                                        height={100}
                                        alt="btc"
                                        className="spin-now"
                                    /></span>
                                    {isSpinning ? 'Spinning...' : 'Spin & Claim Now'}
                                    <span className="spin-wheel-left-spin-btn-arrow">
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </span>
                                </button>
                                <button
                                    type="button"
                                    className="spin-wheel-left-sound-btn"

                                >
                                    <span className="spin-wheel-left-spin-btn-icon"><Image
                                        src="assets/images/lhu-tra.svg"
                                        width={100}
                                        height={100}
                                        alt="btc"
                                        className="spk-icon"
                                    /></span>

                                    Trade LHU/USDT
                                </button>
                            </div>
                            <div className='luh-left-last'>
                                <div className=' d-flex align-items-center gap-2'>
                                    <div className="lhu-h-img-div">
                                        <Image
                                            src="assets/images/lhu-h-1.svg"
                                            width={100}
                                            height={100}
                                            alt="btc"
                                            className="lhu-h-img"
                                        />
                                    </div>
                                    <div className=' d-flex align-items-start flex-column'>
                                        <span className='span-main'>Free Claim</span>
                                        <span className='span-pha'>Via Spin Wheel</span>
                                    </div>
                                </div>
                                <div className=' d-flex align-items-center gap-2'>
                                    <div className="lhu-h-img-div">
                                        <Image
                                            src="assets/images/lhu-h-2.svg"
                                            width={100}
                                            height={100}
                                            alt="btc"
                                            className="lhu-h-img"
                                        />
                                    </div>
                                    <div className=' d-flex align-items-start flex-column'>
                                        <span className='span-main'>Trade on Exchange</span>
                                        <span className='span-pha'>LHU/USDT</span>
                                    </div>
                                </div>
                                <div className=' d-flex align-items-center gap-2'>
                                    <div className="lhu-h-img-div">
                                        <Image
                                            src="assets/images/lhu-h-3.svg"
                                            width={100}
                                            height={100}
                                            alt="btc"
                                            className="lhu-h-img"
                                        />
                                    </div>
                                    <div className=' d-flex align-items-start flex-column'>
                                        <span className='span-main'>Use in Ecosystem</span>
                                        <span className='span-pha'>More Utilities Coming</span>
                                    </div>
                                </div>
                            </div>




                        </div>

                        <div className="spin-wheel-right">
                            <Image
                                src="assets/images/lhu-banner.svg"
                                width={100}
                                height={100}
                                alt="btc"
                                className="lhu-banner-img lhu-light"
                            />
                            <Image
                                src="assets/images/lhu-banner-dark.png"
                                width={100}
                                height={100}
                                alt="btc"
                                className="lhu-banner-img lhu-dark"
                            />
                        </div>
                    </div>
                </Container>
            </section>
            <section className="recentspins about-lhu">
                <Container>
                    <div className="recent-spins-row">
                        <div className="lhu-banner-div" >
                            <Image
                                src="assets/images/about-lhu.svg"
                                width={100}
                                height={100}
                                alt="btc"
                                className="lhu-banner-img lhu-light"
                            />
                            <Image
                                src="assets/images/about-lhu-dark.png"
                                width={100}
                                height={100}
                                alt="btc"
                                className="lhu-banner-img lhu-dark"
                            />
                        </div>
                        <div className="recent-spins recent-spins-left">
                            <div className="spin-wheel-left-badge">
                                <span>ABOUT LHU</span>
                            </div>
                            <h2 className="heading-title  pb-2">What is LHU Token?</h2>


                            <p className='youvewin'>LHU is the native token of our crypto exchange ecosystem. It is designed to reward, empower and engage our community with real utility across our platform.
                            </p>
                            <div className="recent-spins-box">
                                <div className="recent-spins-tokens">

                                    <div className="recent-spins-box">
                                        <div className="recent-spins-lhu">
                                            <Image src="assets/images/about-lhu-1.svg" width={25} height={25} className="spinbox" alt="spinbox" />
                                        </div>

                                    </div>
                                    <h6 className="span-main">Community Driven</h6>
                                    <Image src="assets/images/about-lhu-line.svg" width={16} height={16} className="line-abot" alt="spinbox" />
                                    <p className='span-p-about'>Built and powered by our community</p>

                                </div>
                                <div className="recent-spins-tokens">

                                    <div className="recent-spins-box">
                                        <div className="recent-spins-lhu">
                                            <Image src="assets/images/about-lhu-2.svg" width={25} height={25} className="spinbox" alt="spinbox" />
                                        </div>

                                    </div>
                                    <h6 className="span-main">Real Utility</h6>
                                    <Image src="assets/images/about-lhu-line.svg" width={16} height={16} className="line-abot" alt="spinbox" />
                                    <p className='span-p-about'>Use LHU across our ecosystem</p>

                                </div>
                                <div className="recent-spins-tokens">

                                    <div className="recent-spins-box">
                                        <div className="recent-spins-lhu">
                                            <Image src="assets/images/about-lhu-3.svg" width={25} height={25} className="spinbox" alt="spinbox" />
                                        </div>

                                    </div>
                                    <h6 className="span-main">Tradeable Asset</h6>
                                    <Image src="assets/images/about-lhu-line.svg" width={16} height={16} className="line-abot" alt="spinbox" />
                                    <p className='span-p-about'>Trade LHU on our exchange anytime</p>

                                </div>


                            </div>
                        </div>

                    </div>
                </Container>
            </section>
            <section className=" why-lhu">
                <Container>
                    <div className='why-lhu-div-main'>
                        <div className="spin-wheel-left-badge ">
                            <span>KEY FEATURES</span>
                        </div>
                        <h2 className="heading-title text-center">
                            Why Choose LHU?
                        </h2>
                        <p className="text-center  why-lhu-p">LHU offers multiple ways to earn, trade and use within our exchange <br /> ecosystem. Simple, rewarding and built for the community.</p>
                    </div>
                    <Carousel
                        className='why-lhu-main'
                        responsive={whyLhuResponsive}
                        arrows={false}
                        showDots={true}
                        infinite={false}
                        swipeable={true}
                        draggable={true}
                    >
                        <div className='why-lhu-box'>
                            <Image src="assets/images/y-lhu-1.svg" width={16} height={16} className="y-lhu-img" alt="spinbox" />
                            <div className='spin-why-main-x'>
                                <div className="spin-why-main">
                                    Free LHU Claim
                                </div>
                                <div className='why-lhu-main-list'>
                                    <div className='why-lhu-box-list'>
                                        <Image src="assets/images/why-tick-lhu.svg" width={16} height={16} className="why-tick-lhu-img" alt="spinbox" />
                                        <p className='mb-0'>Participate in Spin Wheel</p>
                                    </div>
                                    <div className='why-lhu-box-list'>
                                        <Image src="assets/images/why-tick-lhu.svg" width={16} height={16} className="why-tick-lhu-img" alt="spinbox" />
                                        <p className='mb-0'>Win and claim LHU tokens for free</p>
                                    </div>
                                    <div className='why-lhu-box-list'>
                                        <Image src="assets/images/why-tick-lhu.svg" width={16} height={16} className="why-tick-lhu-img" alt="spinbox" />
                                        <p className='mb-0'>Reward amount varies by spin result</p>
                                    </div>
                                    <div className='why-lhu-box-list'>
                                        <Image src="assets/images/why-tick-lhu.svg" width={16} height={16} className="why-tick-lhu-img" alt="spinbox" />
                                        <p className='mb-0'>Claimed LHU credited to your wallet</p>
                                    </div>
                                </div>
                            </div>

                            <button className='border-btn-y'>Spin & Claim Now <span> <Image src="assets/images/y-lhu-arrow.svg" width={16} height={16} className="line-abot" alt="spinbox" /></span> </button>
                        </div>
                        <div className='why-lhu-box'>
                            <Image src="assets/images/y-lhu-2.svg" width={16} height={16} className="y-lhu-img" alt="spinbox" />
                            <div className='spin-why-main-x'>
                                <div className="spin-why-main">
                                    Trade LHU
                                </div>
                                <div className='why-lhu-main-list'>
                                    <div className='why-lhu-box-list'>
                                        <Image src="assets/images/why-tick-lhu.svg" width={16} height={16} className="why-tick-lhu-img" alt="spinbox" />
                                        <p className='mb-0'>Trade LHU on our centralized exchange</p>
                                    </div>
                                    <div className='why-lhu-box-list'>
                                        <Image src="assets/images/why-tick-lhu.svg" width={16} height={16} className="why-tick-lhu-img" alt="spinbox" />
                                        <p className='mb-0'>Trading pair: LHU/USDT</p>
                                    </div>
                                    <div className='why-lhu-box-list'>
                                        <Image src="assets/images/why-tick-lhu.svg" width={16} height={16} className="why-tick-lhu-img" alt="spinbox" />
                                        <p className='mb-0'>Buy and sell through the order book</p>
                                    </div>
                                    <div className='why-lhu-box-list'>
                                        <Image src="assets/images/why-tick-lhu.svg" width={16} height={16} className="why-tick-lhu-img" alt="spinbox" />
                                        <p className='mb-0'>Market price based on reat trading activity</p>
                                    </div>
                                </div>
                            </div>

                            <button className='border-btn-y'>Trade LHU/USDT <span> <Image src="assets/images/y-lhu-arrow.svg" width={16} height={16} className="line-abot" alt="spinbox" /></span> </button>
                        </div>
                        <div className='why-lhu-box'>
                            <Image src="assets/images/y-lhu-3.svg" width={16} height={16} className="y-lhu-img" alt="spinbox" />
                            <div className='spin-why-main-x'>
                                <div className="spin-why-main">
                                    LHU Wallet
                                </div>
                                <div className='why-lhu-main-list'>
                                    <div className='why-lhu-box-list'>
                                        <Image src="assets/images/why-tick-lhu.svg" width={16} height={16} className="why-tick-lhu-img" alt="spinbox" />
                                        <p className='mb-0'>View your LHU balance</p>
                                    </div>
                                    <div className='why-lhu-box-list'>
                                        <Image src="assets/images/why-tick-lhu.svg" width={16} height={16} className="why-tick-lhu-img" alt="spinbox" />
                                        <p className='mb-0'>Check transaction history</p>
                                    </div>
                                    <div className='why-lhu-box-list'>
                                        <Image src="assets/images/why-tick-lhu.svg" width={16} height={16} className="why-tick-lhu-img" alt="spinbox" />
                                        <p className='mb-0'>Use LHU for supported features</p>
                                    </div>
                                    <div className='why-lhu-box-list'>
                                        <Image src="assets/images/why-tick-lhu.svg" width={16} height={16} className="why-tick-lhu-img" alt="spinbox" />
                                        <p className='mb-0'>Secure and easy to manage</p>
                                    </div>
                                </div>
                            </div>

                            <button className='border-btn-y'>View Wallet <span> <Image src="assets/images/y-lhu-arrow.svg" width={16} height={16} className="line-abot" alt="spinbox" /></span> </button>
                        </div>
                    </Carousel>
                </Container>
            </section>
            <section className="how-spin-wheel how-lhu" id="howitworks">
                <Container data-aos="fade-up">
                    <h2 className="heading-title text-center pb-3">Simple Steps to Get Started</h2>
                    <div className="trading-toggle">
                        <div
                            className={`toggle-item ${activeHowSection === "trading" ? "active" : ""}`}
                            onClick={() => setActiveHowSection("trading")}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(event) => {
                                if (event.key === "Enter" || event.key === " ") {
                                    setActiveHowSection("trading");
                                }
                            }}
                        >
                            Trading Flow
                        </div>

                        <div
                            className={`toggle-item ${activeHowSection === "spin" ? "active" : ""}`}
                            onClick={() => setActiveHowSection("spin")}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(event) => {
                                if (event.key === "Enter" || event.key === " ") {
                                    setActiveHowSection("spin");
                                }
                            }}
                        >
                            Spin & Claim Now
                        </div>
                    </div>
                    <div className={`how-it-img-y how-section-one ${activeHowSection === "trading" ? "" : "d-none"}`}>
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
                                            src="assets/images/how-lhu-1.svg"
                                            width={35}
                                            height={35}
                                            alt="btc"
                                            className="howiticon"
                                        />
                                    </div>
                                    <h6 className="badge step-one ">Step 1</h6>
                                </div>
                                <div>
                                    <h5 className="sub-heading">LHU Wallet</h5>
                                    <p>
                                        Sign up or log in to your account in seconds.
                                    </p>
                                </div>
                            </div>

                            <div className="howitbox">
                                <div className="hiconb">
                                    <div className="">
                                        <Image
                                            src="assets/images/how-lhu-2.svg"
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
                                            src="assets/images/how-lhu-3.svg"
                                            width={35}
                                            height={35}
                                            alt="btc"
                                            className="howiticon"
                                        />
                                    </div>
                                    <h6 className="badge step-three">Step 3</h6>
                                </div>
                                <div>
                                    <h5 className="sub-heading">Buy / Sell</h5>
                                    <p>
                                        Use your tokens to spin the wheel and win amazing rewards.
                                    </p>
                                </div>
                            </div>
                            <div className="howitbox">
                                <div className="hiconb">
                                    <div className="">
                                        <Image
                                            src="assets/images/how-lhu-4.svg"
                                            width={35}
                                            height={35}
                                            alt="btc"
                                            className="howiticon"
                                        />
                                    </div>
                                    <h6 className="badge step-four">Step 4</h6>
                                </div>
                                <div>
                                    <h5 className="sub-heading">Wallet Balance</h5>
                                    <p>
                                        Get your tokens, bonuses and exclusive prizes instantly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`how-it-img-y how-section-two ${activeHowSection === "spin" ? "" : "d-none"}`}>
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

            <section className="recentspins about-lhu join-lhu">
                <Container>
                    <div className="recent-spins-row">

                        <div className="recent-spins recent-spins-left">

                            <h2 className="heading-title join-lhu-title">Join the LHU Community Today</h2>
                            <p className='join-sub-text'>Spin, claim, trade and be part of a growing ecosystem.</p>
                            <div className='btn-join-div'>
                                <button className='spin-wheel-left-spin-btn'>
                                    Get Started Now
                                    <span className="spin-wheel-left-spin-btn-arrow">
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </span>
                                </button>
                                <button className='spin-wheel-left-sound-btn leran-more-btn'>Learn More</button>
                            </div>

                        </div>
                        <div className="lhu-banner-div" >
                            <Image
                                src="assets/images/join-lhu.svg"
                                width={100}
                                height={100}
                                alt="btc"
                                className="join-lhu-img lhu-light"
                            />
                            <Image
                                src="assets/images/join-lhu-dark.png"
                                width={100}
                                height={100}
                                alt="btc"
                                className="join-lhu-img lhu-dark"
                            />
                        </div>

                    </div>
                </Container>
            </section>



            <Homefooter />
        </div>

    );
}