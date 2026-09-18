'use client';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Image, Table, Accordion, Button, Tab, Nav, Badge, Tabs, Modal } from 'react-bootstrap';
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
    const [isSpinning, setIsSpinning] = useState(false);
    const [wheelRotation, setWheelRotation] = useState(0);
    const [lightsOn, setLightsOn] = useState(false);
    const [soundOn, setSoundOn] = useState(true);
    const [wonPrize, setWonPrize] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const PRIZES = [
        { name: '100 Tokens', type: 'win', tokens: 100, angle: 22.5 },
        { name: '35 Tokens', type: 'win', tokens: 35, angle: 67.5 },
        { name: '50 Tokens', type: 'win', tokens: 50, angle: 112.5 },
        { name: 'Spin Again', type: 'spin_again', tokens: 0, angle: 157.5 },
        { name: '10 Tokens', type: 'win', tokens: 10, angle: 202.5 },
        { name: '20 Tokens', type: 'win', tokens: 20, angle: 247.5 },
        { name: 'Not This Time', type: 'loss', tokens: 0, angle: 292.5 },
        { name: 'Spin Again', type: 'spin_again', tokens: 0, angle: 337.5 },
    ];

    const BULB_POSITIONS = [
        { x: 239, y: 26, color: '#FFFF49', glow: 'rgba(255, 255, 73, 0.95)' },
        { x: 321, y: 38, color: '#FF7F00', glow: 'rgba(255, 127, 0, 0.95)' },
        { x: 396, y: 83, color: '#38BDF8', glow: 'rgba(56, 189, 248, 0.95)' },
        { x: 448, y: 152, color: '#34D399', glow: 'rgba(52, 211, 153, 0.95)' },
        { x: 461, y: 243, color: '#E879F9', glow: 'rgba(232, 121, 249, 0.95)' },
        { x: 445, y: 322, color: '#FB923C', glow: 'rgba(251, 146, 60, 0.95)' },
        { x: 399, y: 395, color: '#60A5FA', glow: 'rgba(96, 165, 250, 0.95)' },
        { x: 321, y: 443, color: '#F43F5E', glow: 'rgba(244, 63, 94, 0.95)' },
        { x: 241, y: 453, color: '#A78BFA', glow: 'rgba(167, 139, 250, 0.95)' },
        { x: 157, y: 440, color: '#4ADE80', glow: 'rgba(74, 222, 128, 0.95)' },
        { x: 90, y: 391, color: '#F43F5E', glow: 'rgba(244, 63, 94, 0.95)' },
        { x: 40, y: 322, color: '#38BDF8', glow: 'rgba(56, 189, 248, 0.95)' },
        { x: 23, y: 241, color: '#FACC15', glow: 'rgba(250, 204, 21, 0.95)' },
        { x: 36, y: 157, color: '#4ADE80', glow: 'rgba(74, 222, 128, 0.95)' },
        { x: 85, y: 88, color: '#FB7185', glow: 'rgba(251, 113, 133, 0.95)' },
        { x: 147, y: 45, color: '#818CF8', glow: 'rgba(129, 140, 248, 0.95)' },
    ];

    const playTickSound = (pitch = 850) => {
        if (!soundOn || typeof window === 'undefined') return;
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;
            const ctx = new AudioCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(pitch, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(160, ctx.currentTime + 0.04);
            gain.gain.setValueAtTime(0.12, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.04);
        } catch (e) { }
    };

    const playWinSound = () => {
        if (!soundOn || typeof window === 'undefined') return;
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;
            const ctx = new AudioCtx();
            [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12);
                gain.gain.setValueAtTime(0.16, ctx.currentTime + idx * 0.12);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.12 + 0.35);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(ctx.currentTime + idx * 0.12);
                osc.stop(ctx.currentTime + idx * 0.12 + 0.35);
            });
        } catch (e) { }
    };

    const handleSpin = () => {
        if (isSpinning) return;

        setIsSpinning(true);
        setLightsOn(true);
        setShowResult(false);

        // Pick a target prize
        const targetIndex = Math.floor(Math.random() * PRIZES.length);
        const selectedPrize = PRIZES[targetIndex];
        const targetDeg = 360 - selectedPrize.angle;

        // Calculate rotation (at least 5 to 7 full rotations forward)
        const extraRounds = 360 * (5 + Math.floor(Math.random() * 3));
        const delta = ((targetDeg - (wheelRotation % 360) + 360) % 360);
        const newRotation = wheelRotation + extraRounds + delta;

        setWheelRotation(newRotation);

        // Sound ticking simulation
        const tickIntervals = [80, 80, 80, 90, 100, 120, 140, 170, 200, 240, 300, 380, 480];
        let tickTime = 0;
        tickIntervals.forEach((interval) => {
            tickTime += interval;
            setTimeout(() => {
                playTickSound();
            }, tickTime);
        });

        // 4.5 seconds spin completion
        setTimeout(() => {
            setIsSpinning(false);
            setWonPrize(selectedPrize);
            setShowResult(true);
            playWinSound();
        }, 4500);
    };

    const handleToggle = (key) => {
        setActiveKey(activeKey === key ? null : key);
    };

    useEffect(() => {
        AOS.init();
    })
    const [time, setTime] = useState({
        hours: 48,
        minutes: 16,
        seconds: 32,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prev) => {
                let { hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    seconds--;
                } else {
                    seconds = 59;

                    if (minutes > 0) {
                        minutes--;
                    } else {
                        minutes = 59;

                        if (hours > 0) {
                            hours--;
                        }
                    }
                }

                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const [showModal1, setShowModal1] = useState(false);
    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);

    const [showModal2, setShowModal2] = useState(false);
    const handleShowModal2 = () => setShowModal2(true);
    const handleCloseModal2 = () => setShowModal2(false);




    return (

        <div className='homepagebg spin-wheel-page'>
            <Homeheader />

            <section className="homebannerbg spin-wheel-home">
                <Container className="sitebannercontent">
                    <div className="spin-wheel-content">
                        <div className="spin-wheel-left">
                            <div className="spin-wheel-left-badge">
                                <span className="spin-wheel-left-badge-icon"> <Image
                                    src="assets/images/gift-box-top.svg"
                                    width={100}
                                    height={100}
                                    alt="btc"
                                    className="gift-hand"
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
                                        src="assets/images/spin-coin.svg"
                                        width={100}
                                        height={100}
                                        alt="btc"
                                        className="spn-cn-icon"
                                    />
                                </div>
                            </div>

                            <div className='spin-timing-section'>
                                <div className="countdown-section">
                                    <div className="countdown-card">


                                        <h2>Next spin available in</h2>

                                        <div className="countdown">
                                            <div className="time-box">
                                                <span className="number">
                                                    {String(time.hours).padStart(2, "0")}
                                                </span>
                                                <span className="label">Hours</span>
                                            </div>

                                            <span className="separator">:</span>

                                            <div className="time-box">
                                                <span className="number">
                                                    {String(time.minutes).padStart(2, "0")}
                                                </span>
                                                <span className="label">Minutes</span>
                                            </div>

                                            <span className="separator">:</span>

                                            <div className="time-box">
                                                <span className="number">
                                                    {String(time.seconds).padStart(2, "0")}
                                                </span>
                                                <span className="label">Seconds</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='my-4'>
                                    <button className='spin-wheel-left-spin-btn ' onClick={handleShowModal2}>
                                        <Image
                                            src="assets/images/locked.svg"
                                            width={100}
                                            height={100}
                                            alt="btc"
                                            className="locked-img"
                                        />
                                        spin Locked
                                        <span className="spin-wheel-left-spin-btn-arrow">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </span>
                                    </button>
                                </div>
                                <div className="spin-wheel-left-duration">
                                    <span className="spin-wheel-left-duration-icon"><Image
                                        src="assets/images/exgola-mark.svg"
                                        width={100}
                                        height={100}
                                        alt="btc"
                                        className="spin-duration-icon"
                                    /></span>
                                    Come back when the timer ends to spin again
                                </div>
                            </div>



                            <div>
                                <div className="spin-wheel-left-actions">
                                    <button
                                        type="button"
                                        className={`spin-wheel-left-spin-btn ${isSpinning ? 'spinning-active' : ''}`}
                                        onClick={handleSpin}
                                        disabled={isSpinning}
                                    >
                                        <span className="spin-wheel-left-spin-btn-icon"><Image
                                            src="assets/images/spin-now.svg"
                                            width={100}
                                            height={100}
                                            alt="btc"
                                            className="spin-now"
                                        /></span>
                                        {isSpinning ? 'Spinning...' : 'Spin Now'}
                                        <span className="spin-wheel-left-spin-btn-arrow">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </span>
                                    </button>
                                    <button
                                        type="button"
                                        className={`spin-wheel-left-sound-btn ${soundOn ? 'sound-on-active' : ''}`}
                                        onClick={() => setSoundOn(!soundOn)}
                                    >
                                        <span className="spin-wheel-left-sound-btn-icon"><Image
                                            src="assets/images/spk-icon.svg"
                                            width={100}
                                            height={100}
                                            alt="btc"
                                            className="spk-icon"
                                        /></span>
                                        Sound {soundOn ? 'On' : 'Off'}
                                    </button>
                                </div>

                                <div className="spin-wheel-left-duration">
                                    <span className="spin-wheel-left-duration-icon"><Image
                                        src="assets/images/spin-duration-icon.svg"
                                        width={100}
                                        height={100}
                                        alt="btc"
                                        className="spin-duration-icon"
                                    /></span>
                                    Spin duration: <span className="spin-wheel-left-duration-value">4.5 seconds</span>
                                </div>

                                <div className="spin-wheel-left-auth">
                                    <span className="spin-wheel-left-auth-icon"><Image
                                        src="assets/images/sign-in-to-pin.svg"
                                        width={100}
                                        height={100}
                                        alt="btc"
                                        className="sign-in-to-pin"
                                    /></span>
                                    <span className="spin-wheel-left-auth-text">
                                        Authentication Required. <strong>Please Sign in to spin!</strong>
                                    </span>
                                    <span className="spin-wheel-left-auth-arrow">   <FontAwesomeIcon icon={faChevronRight} /></span>
                                </div>
                            </div>
                        </div>

                        <div className="spin-wheel-right">
                            <div className="spin-wheel-scene">
                                {/* Backlight Aura */}
                                <div className={`spin-wheel-backlight ${isSpinning ? 'spinning' : ''} ${lightsOn ? 'active' : ''}`}>
                                    <div className="backlight-radial-1"></div>
                                    <div className="backlight-radial-2"></div>
                                    <div className="backlight-radial-3"></div>
                                </div>

                                {/* Fox in Background */}
                                <div className="spin-fox-bg">
                                    <Image
                                        src="assets/images/fox.svg"
                                        width={658}
                                        height={535}
                                        alt="Fox Background"
                                        className="fox-img"
                                        priority
                                    />
                                </div>

                                {/* Spin Wheel Frame & Rotor Assembly */}
                                <div className="spin-wheel-frame-wrapper">
                                    {/* Stationary Base Frame (Pedestal Stand, Golden Ring, Static Bulbs) */}
                                    <div className="wheel-base-img-wrapper">
                                        <Image
                                            src="assets/images/wheel.svg"
                                            width={486}
                                            height={552}
                                            alt="Wheel Frame"
                                            className="wheel-base-svg-img"
                                            priority
                                        />
                                    </div>

                                    {/* Animated Chasing Lights Overlay on the Rim */}
                                    <div className={`wheel-bulbs-track ${isSpinning ? 'spinning' : ''} ${lightsOn ? 'lit' : ''}`}>
                                        {BULB_POSITIONS.map((bulb, i) => (
                                            <span
                                                key={i}
                                                className={`rim-bulb-glow bulb-idx-${(i % 10) + 1}`}
                                                style={{
                                                    left: `${(bulb.x / 486) * 100}%`,
                                                    top: `${(bulb.y / 552) * 100}%`,
                                                    backgroundColor: bulb.color,
                                                    boxShadow: `0 0 14px 4px ${bulb.glow}`,
                                                    animationDelay: `${(i % 5) * 0.15}s`,
                                                }}
                                            />
                                        ))}
                                    </div>

                                    {/* Rotating Wheel Rotor (8 Slices, Text, and Center Badge) */}
                                    <div
                                        className={`wheel-rotor-layer ${isSpinning ? 'spinning' : ''}`}
                                        style={{
                                            transform: `rotate(${wheelRotation}deg)`,
                                            transition: isSpinning ? 'transform 4.5s cubic-bezier(0.15, 0.9, 0.2, 1)' : 'none',
                                        }}
                                    >
                                        <svg viewBox="0 0 486 552" className="rotor-svg-element" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <linearGradient id="paint4_linear_rotor" x1="366.37" y1="77.3077" x2="302.354" y2="202.422" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#990000" /><stop offset="1" stopColor="#CC0000" />
                                                </linearGradient>
                                                <linearGradient id="paint5_linear_rotor" x1="235.294" y1="344.171" x2="350.649" y2="34.9158" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FFBF00" /><stop offset="0.3906" stopColor="#FFBF00" /><stop offset="0.7025" stopColor="#FF7F00" /><stop offset="1" stopColor="#994000" />
                                                </linearGradient>
                                                <linearGradient id="paint6_linear_rotor" x1="75.1936" y1="125.13" x2="200.362" y2="189.04" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#990000" /><stop offset="1" stopColor="#CC0000" />
                                                </linearGradient>
                                                <linearGradient id="paint7_linear_rotor" x1="342.153" y1="256.104" x2="32.9487" y2="140.611" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FFBF00" /><stop offset="0.3906" stopColor="#FFBF00" /><stop offset="0.7025" stopColor="#FF7F00" /><stop offset="1" stopColor="#994000" />
                                                </linearGradient>
                                                <linearGradient id="paint8_linear_rotor" x1="123.387" y1="416.358" x2="187.093" y2="291.086" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#990000" /><stop offset="1" stopColor="#CC0000" />
                                                </linearGradient>
                                                <linearGradient id="paint9_linear_rotor" x1="253.973" y1="149.187" x2="138.838" y2="458.524" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FFBF00" /><stop offset="0.3906" stopColor="#FFBF00" /><stop offset="0.7025" stopColor="#FF7F00" /><stop offset="1" stopColor="#994000" />
                                                </linearGradient>
                                                <linearGradient id="paint10_linear_rotor" x1="414.063" y1="368.354" x2="288.937" y2="304.36" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#990000" /><stop offset="1" stopColor="#CC0000" />
                                                </linearGradient>
                                                <linearGradient id="paint11_linear_rotor" x1="147.185" y1="237.248" x2="456.366" y2="352.801" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FFBF00" /><stop offset="0.3906" stopColor="#FFBF00" /><stop offset="0.7025" stopColor="#FF7F00" /><stop offset="1" stopColor="#994000" />
                                                </linearGradient>
                                                <clipPath id="rotorCenterBadgeClip">
                                                    <circle cx="244.67" cy="246.68" r="31" />
                                                </clipPath>
                                            </defs>

                                            {/* Slices Base */}
                                            <path d="M33.4688 243.575C33.4688 131.473 126.086 40.3555 240.452 40.3555C354.63 40.3555 447.435 131.289 447.435 243.575C447.435 355.677 354.817 446.795 240.452 446.795C126.086 446.795 33.4688 355.677 33.4688 243.575Z" fill="#FF7F00" />
                                            {/* 8 Slices */}
                                            <path d="M442.464 246.68C442.464 272.655 437.348 298.375 427.408 322.373C417.468 346.371 402.898 368.176 384.531 386.543L244.668 246.68H442.464Z" fill="url(#paint4_linear_rotor)" />
                                            <path d="M384.357 106.645C402.747 124.989 417.343 146.775 427.313 170.761C437.283 194.746 442.432 220.46 442.464 246.435L244.668 246.682L384.357 106.645Z" fill="url(#paint5_linear_rotor)" />
                                            <path d="M244.501 48.8907C270.476 48.8687 296.201 53.9631 320.207 63.883C344.213 73.8028 366.03 88.3539 384.413 106.705L244.668 246.687L244.501 48.8907Z" fill="url(#paint6_linear_rotor)" />
                                            <path d="M104.693 106.936C123.046 88.5542 144.839 73.9672 168.829 64.0077C192.818 54.0483 218.535 48.9115 244.51 48.8906L244.669 246.687L104.693 106.936Z" fill="url(#paint7_linear_rotor)" />
                                            <path d="M46.8737 247.174C46.8094 221.199 51.8619 195.466 61.7427 171.444C71.6235 147.421 86.1391 125.58 104.461 107.168L244.669 246.685L46.8737 247.174Z" fill="url(#paint8_linear_rotor)" />
                                            <path d="M105.08 386.82C86.677 368.489 72.0648 346.713 62.0776 322.735C52.0904 298.756 46.9239 273.046 46.873 247.071L244.669 246.684L105.08 386.82Z" fill="url(#paint9_linear_rotor)" />
                                            <path d="M244.705 444.48C218.73 444.484 193.008 439.373 169.008 429.437C145.009 419.501 123.201 404.936 104.831 386.572L244.669 246.684L244.705 444.48Z" fill="url(#paint10_linear_rotor)" />
                                            <path d="M384.616 386.462C366.26 404.84 344.463 419.423 320.472 429.378C296.48 439.332 270.763 444.464 244.788 444.48L244.668 246.684L384.616 386.462Z" fill="url(#paint11_linear_rotor)" />

                                            {/* Slices Text */}
                                            {PRIZES.map((item, idx) => (
                                                <g key={idx} transform={`rotate(${item.angle} 244.67 246.68)`}>
                                                    <text
                                                        x="244.67"
                                                        y="108"
                                                        fill={item.type === 'win' && idx % 2 === 0 ? '#FFFFFF' : item.type === 'loss' ? '#FFFFFF' : '#8D4B00'}
                                                        fontWeight="800"
                                                        fontSize="16"
                                                        fontFamily="'Poppins', sans-serif"
                                                        textAnchor="middle"
                                                        transform="rotate(-90 244.67 108)"
                                                        style={{ letterSpacing: '0.5px' }}
                                                    >
                                                        {item.name}
                                                    </text>
                                                </g>
                                            ))}

                                            {/* Center Badge with Lion/Fox Emblem */}
                                            <circle cx="244.67" cy="246.68" r="32" fill="#FFB700" stroke="#8D4B00" strokeWidth="3" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.4))" />
                                            <g clipPath="url(#rotorCenterBadgeClip)">
                                                <image href="assets/images/wheel.svg" x="0" y="0" width="486" height="552" />
                                            </g>
                                        </svg>
                                    </div>

                                    {/* Top Pin Pointer (Click to Spin) */}
                                    <div
                                        className={`wheel-pin-wrapper ${isSpinning ? 'ticking' : ''}`}
                                        onClick={handleSpin}
                                        role="button"
                                        tabIndex={0}
                                        title="Click to Spin the Wheel!"
                                    >
                                        <div className="pin-pulse-halo"></div>
                                        <Image
                                            src="assets/images/pin.svg"
                                            width={46}
                                            height={47}
                                            alt="Spin Pointer"
                                            className="pin-svg-icon"
                                        />
                                        <div className="pin-hint-tag">
                                            <span>Click Pin!</span>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            
            <section className="recentspins">
                <Container>
                    <div className="recent-spins-row">
                        <div className="recent-spins recent-spins-left">
                            <div className="recent-times mt-0">
                                <div className="recent-time-icon-wrapper ">
                                    <Image
                                        src="/assets/images/recent-times.svg"
                                        width={100}
                                        height={100}
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
                                    <h6 className="heading-title ret-sin">Recent Spins</h6>
                                    <p className='youvewin mb-0'>Here’s what you’ve won in your recent spins
                                    </p>
                                </div>
                            </div>

                            <div className="recent-spins-box">
                                <div className="recent-spins-tokens">

                                    <div className="recent-spins-box">
                                        <div className="recent-spins-lhu">
                                            <Image src="assets/images/lhu.svg" width={25} height={25} className="spinbox" alt="spinbox" />
                                        </div>

                                    </div>
                                    <div>
                                        <h6 className="sub-heading text-center">100 Tokens</h6>
                                        <p className='mb-0'>Sep 6, 2025 02:14 PM</p>
                                    </div>
                                    <span className="badge bg-success"><span><Image src="assets/images/re-green-tick.svg" width={16} height={16} className="me-1" alt="spinbox" /></span>Won</span>
                                </div>
                                <div className="recent-spins-tokens">

                                    <div className="recent-spins-box">
                                        <div className="recent-spins-lhu">
                                            <Image src="assets/images/zero-tokens.svg" width={25} height={25} className="spinbox" alt="spinbox" />
                                        </div>

                                    </div>
                                    <div>
                                        <h6 className="sub-heading text-center">0 Tokens</h6>
                                        <p className='mb-0'>Sep 6, 2025
                                            02:14 PM</p>
                                    </div>
                                    <span className="badge bg-danger"><span><Image src="assets/images/loss-rec.svg" width={16} height={16} className="me-1" alt="spinbox" /></span>Lost</span>
                                </div>
                                <div className="recent-spins-tokens">

                                    <div className="recent-spins-box">
                                        <div className="recent-spins-lhu">
                                            <Image src="assets/images/lhu.svg" width={25} height={25} className="spinbox" alt="spinbox" />
                                        </div>

                                    </div>
                                    <div>
                                        <h6 className="sub-heading text-center">50 Tokens</h6>
                                        <p className='mb-0'>Sep 6, 2025
                                            02:14 PM</p>
                                    </div>
                                    <span className="badge bg-success"><span><Image src="assets/images/re-green-tick.svg" width={16} height={16} className="me-1" alt="spinbox" /></span>Won</span>
                                </div>
                                <div className="recent-spins-tokens">

                                    <div className="recent-spins-box">
                                        <div className="recent-spins-lhu ihu">
                                            <Image src="assets/images/rec-try-icon.svg" width={25} height={25} className="spinbox" alt="spinbox" />
                                        </div>

                                    </div>
                                    <div>
                                        <h6 className="sub-heading text-center">Try Again</h6>
                                        <p className='mb-0'>Sep 6, 2025
                                            02:14 PM</p>
                                    </div>
                                    <span className="badge badge-fail"><span><Image src="assets/images/try-again.svg" width={16} height={16} className="me-1" alt="spinbox" /></span>Try Again</span>
                                </div>
                            </div>
                        </div>
                        <div className="recent-spins recent-spins-right">
                            <div className="recent-times align-content-center">
                                <div className="recent-time-icon-wrapper spn-wlt-icon-div">
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
                            <div className="recent-times mt-3">
                                <div>
                                    <p className="mb-0">Current Reward Balance</p>
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
                                        Sign up or log in to your  account  in seconds.
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
                                    </Nav>
                                </div>
                            </Col>
                            <Col xl={9} lg={8} md={8}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="tab1">
                                        <Accordion defaultActiveKey="1" flush>
                                            <Accordion.Item eventKey="1" className="active">
                                                <Accordion.Header>How do I get started with Spin & Win?</Accordion.Header>
                                                <Accordion.Body>
                                                    Sign up or log in to your account, get your LHU tokens, and use them to spin the wheel and win rewards.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>How does the Spin & Win wheel work?</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>How many LHU tokens do I need to spin?</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis consectetur pariatur quidem sit quo fugit et cumque itaque, eius ipsam dolore iure dolor error, blanditiis quaerat, quos autem! Nihil.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header>What rewards can I win?</Accordion.Header>
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
                                                <Accordion.Header>Can I spin again after winning?</Accordion.Header>
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

            <Modal className="modalbgt spain-wheel-pop-up" show={showModal1} onHide={handleCloseModal1} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body>
                    <Image
                        src="assets/images/open-box.png"
                        width={35}
                        height={35}
                        alt="btc"
                        className="open-box-img"
                    />
                    <div className=' d-flex align-items-center justify-content-center gap-2 flex-column'>
                        <h2 className="congratulations-text">
                            Congratulations!
                        </h2>
                        <h5>You have Won</h5>
                        <div className="spin-wheel-left-conversion">
                            <div className="spin-wheel-left-conversion-text">
                                <span className="spin-wheel-left-conversion-usd pe-2">100</span>
                                <span className="spin-wheel-left-conversion-lhu">Tokens</span>


                            </div>
                            <div className="spin-wheel-left-conversion-coins">
                                <Image
                                    src="assets/images/spin-coin.svg"
                                    width={100}
                                    height={100}
                                    alt="btc"
                                    className="spn-cn-icon"
                                />
                            </div>
                        </div>
                        <div className=' last-gift-banner'>
                            <Image
                                src="assets/images/gift-box-top.svg"
                                width={35}
                                height={35}
                                alt="btc"
                                className="open-box-img"
                            />
                            <p >The takes have been added to your account . Keep spinning for more rewards!</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal className="modalbgt spain-wheel-pop-up" show={showModal2} onHide={handleCloseModal2} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body>
                    <Image
                        src="assets/images/better-luck-img.png"
                        width={35}
                        height={35}
                        alt="btc"
                        className="better-box-img"
                    />
                    <div className=' d-flex align-items-center justify-content-center gap-2 flex-column'>
                        <div>
                            <h2 className="luck-text luck-text-black">
                                Better luck
                            </h2>
                            <h2 className="luck-text luck-text-org text-center">
                                next time!
                            </h2>
                        </div>
                        <p className='text-center mb-0 color-ch'>You didn’t win this time, but there are more <br /> rewards waiting for you!</p>
                        <div className="countdown-section">
                            <div className="countdown-card">


                                <h2>Next spin available in</h2>

                                <div className="countdown">
                                    <div className="time-box">
                                        <span className="number">
                                            {String(time.hours).padStart(2, "0")}
                                        </span>
                                        <span className="label">Hours</span>
                                    </div>

                                    <span className="separator">:</span>

                                    <div className="time-box">
                                        <span className="number">
                                            {String(time.minutes).padStart(2, "0")}
                                        </span>
                                        <span className="label">Minutes</span>
                                    </div>

                                    <span className="separator">:</span>

                                    <div className="time-box">
                                        <span className="number">
                                            {String(time.seconds).padStart(2, "0")}
                                        </span>
                                        <span className="label">Seconds</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>

            <Homefooter />
        </div>

    );
}