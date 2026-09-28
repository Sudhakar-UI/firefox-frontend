'use client';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Container, Image, Carousel } from 'react-bootstrap';
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'simplebar-react/dist/simplebar.min.css';

const whyLhuFeatures = [
    {
        icon: 'y-lhu-1.svg',
        title: 'Free LHU Claim',
        points: [
            'Participate in Spin Wheel',
            'Win and claim LHU tokens for free',
            'Reward amount varies by spin result',
            'Claimed LHU credited to your wallet',
        ],
        button: 'Spin & Claim Now',
    },
    {
        icon: 'y-lhu-2.svg',
        title: 'Trade LHU',
        points: [
            'Trade LHU on our centralized exchange',
            'Trading pair: LHU/USDT',
            'Buy and sell through the order book',
            'Market price based on reat trading activity',
        ],
        button: 'Trade LHU/USDT',
    },
    {
        icon: 'y-lhu-3.svg',
        title: 'LHU Wallet',
        points: [
            'View your LHU balance',
            'Check transaction history',
            'Use LHU for supported features',
            'Secure and easy to manage',
        ],
        button: 'View Wallet',
    },
];


export default function Home() {

    const [activeHowSection, setActiveHowSection] = useState("trading");
    const [isSpinning, setIsSpinning] = useState(false);
    const [cardsPerSlide, setCardsPerSlide] = useState(3);
    const [activeFeatureSlide, setActiveFeatureSlide] = useState(0);



    useEffect(() => {
        AOS.init();
    })

    useEffect(() => {
        const updateCardsPerSlide = () => {
            setCardsPerSlide(window.innerWidth <= 768 ? 1 : window.innerWidth <= 1080 ? 2 : 3);
        };

        updateCardsPerSlide();
        window.addEventListener('resize', updateCardsPerSlide);
        return () => window.removeEventListener('resize', updateCardsPerSlide);
    }, []);

    useEffect(() => {
        setActiveFeatureSlide(0);
    }, [cardsPerSlide]);
    const [animateText, setAnimateText] = useState(false);

    useEffect(() => {
        setAnimateText(true);
    }, []);




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
                                <span className={animateText ? "spin-wheel-badge-text animate" : "spin-wheel-badge-text"}>The Native Token of Our Exchange</span>
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

                        {/* <div className="spin-wheel-right lhu-banner-orbit">
                            <Image
                                src="/assets/images/right-bottom.png"
                                width={100}
                                height={100}
                                alt="btc"
                                className="lhu-banner-img lhu-left-top"
                            />

                            <Image
                                src="/assets/images/left-bottom.png"
                                width={100}
                                height={100}
                                alt="btc"
                                className="lhu-banner-img lhu-left-bottom"
                            />
                            <Image
                                src="/assets/images/lhu-center.png"
                                width={100}
                                height={100}
                                alt="btc"
                                className="lhu-banner-img lhu-center-main"
                            />
                            <Image
                                src="/assets/images/right-top.png"
                                width={100}
                                height={100}
                                alt="btc"
                                className="lhu-banner-img lhu-right-top"
                            />

                            <Image
                                src="/assets/images/left-top.png"
                                width={100}
                                height={100}
                                alt="btc"
                                className="lhu-banner-img  lhu-right-bottom"
                            />

                        </div> */}
                        {/* <div className="spin-wheel-right">
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
                        </div> */}
                        <div className="spin-wheel-right lhu-banner-orbit">
                            <div className="lhu-stage-container">
                                <div className="lhu-stage-inner">

                                    <img
                                        src="/assets/images/left-top.png"
                                        alt="Left Top Coin"
                                        className="lhu-satellite-coin lhu-pos-left-top"
                                    />
                                    <img
                                        src="/assets/images/left-bottom.png"
                                        alt="Left Bottom Coin"
                                        className="lhu-satellite-coin lhu-pos-left-bottom"
                                    />
                                    <img
                                        src="/assets/images/right-top.png"
                                        alt="Right Top Coin"
                                        className="lhu-satellite-coin lhu-pos-right-top"
                                    />
                                    <img
                                        src="/assets/images/right-bottom.png"
                                        alt="Right Bottom Coin"
                                        className="lhu-satellite-coin lhu-pos-right-bottom"
                                    />

                                    <div className="lhu-podium-stack">
                                        <div className="lhu-podium-ground-shadow" />
                                        <img
                                            src="/assets/images/main-center-bottom-1.png"
                                            alt="Podium Base"
                                            className="lhu-podium-layer-1"
                                        />

                                        <div className="lhu-podium-layer-2-wrapper">
                                            <img
                                                src="/assets/images/main-center-bottom-2.png"
                                                alt="Glowing Ring"
                                                className="lhu-podium-layer-2-img"
                                            />
                                            <svg
                                                viewBox="0 0 510 64"
                                                className="lhu-podium-ring-svg"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <defs>
                                                    <linearGradient id="lhuBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
                                                        <stop offset="35%" stopColor="#ffaa00" />
                                                        <stop offset="70%" stopColor="#ffe744" />
                                                        <stop offset="100%" stopColor="#ffffff" />
                                                    </linearGradient>
                                                    <filter id="lhuGlow" x="-15%" y="-40%" width="130%" height="180%">
                                                        <feGaussianBlur stdDeviation="2" result="blur" />
                                                        <feMerge>
                                                            <feMergeNode in="blur" />
                                                            <feMergeNode in="SourceGraphic" />
                                                        </feMerge>
                                                    </filter>
                                                </defs>
                                                <ellipse
                                                    cx="255"
                                                    cy="32"
                                                    rx="250"
                                                    ry="27.5"
                                                    fill="none"
                                                    stroke="url(#lhuBeamGrad)"
                                                    strokeWidth="5"
                                                    strokeLinecap="round"
                                                    className="lhu-ring-beam-1"
                                                    filter="url(#lhuGlow)"
                                                />
                                                <ellipse
                                                    cx="255"
                                                    cy="32"
                                                    rx="250"
                                                    ry="27.5"
                                                    fill="none"
                                                    stroke="url(#lhuBeamGrad)"
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    className="lhu-ring-beam-2"
                                                />
                                            </svg>
                                        </div>
                                        <img
                                            src="/assets/images/main-center-bottom-3.png"
                                            alt="Upper Podium Tier"
                                            className="lhu-podium-layer-3"
                                        />
                                        <div className="lhu-main-coin-shadow" />
                                    </div>

                                    <div className="lhu-main-coin-wrapper">
                                        <img
                                            src="/assets/images/main-center-bottom-4.png"
                                            alt="Main Center Fox Coin"
                                            className="lhu-main-coin-img"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="recentspins about-lhu about-lhu-main">
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
                        controls={false}
                        indicators={cardsPerSlide < whyLhuFeatures.length}
                        interval={null}
                        touch={true}
                        wrap={false}
                        activeIndex={activeFeatureSlide}
                        onSelect={setActiveFeatureSlide}
                    >
                        {Array.from({ length: Math.ceil(whyLhuFeatures.length / cardsPerSlide) }, (_, slideIndex) => (
                            <Carousel.Item key={slideIndex}>
                                <div className='why-lhu-slide'>
                                    {whyLhuFeatures
                                        .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                                        .map((feature) => (
                                            <div className='why-lhu-box' key={feature.title}>
                                                <Image src={`assets/images/${feature.icon}`} width={16} height={16} className="y-lhu-img" alt="spinbox" />
                                                <div className='spin-why-main-x'>
                                                    <div className="spin-why-main">{feature.title}</div>
                                                    <div className='why-lhu-main-list'>
                                                        {feature.points.map((point) => (
                                                            <div className='why-lhu-box-list' key={point}>
                                                                <Image src="assets/images/why-tick-lhu.svg" width={16} height={16} className="why-tick-lhu-img" alt="spinbox" />
                                                                <p className='mb-0'>{point}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <button className='border-btn-y'>
                                                    {feature.button}
                                                    <span><Image src="assets/images/y-lhu-arrow.svg" width={16} height={16} className="line-abot" alt="spinbox" /></span>
                                                </button>
                                            </div>
                                        ))}
                                </div>
                            </Carousel.Item>
                        ))}
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
                            src="/assets/images/howitwrkhead.svg"
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
                            src="/assets/images/howitwrkhead.svg"
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