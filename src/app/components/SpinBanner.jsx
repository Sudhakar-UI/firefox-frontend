"use client";

import React, { useEffect, useRef, useState } from "react";
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark ,faArrowRight  } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';


const SpinBanner = () => {
    const [isMinimized, setIsMinimized] = useState(false);
const [side, setSide] = useState("right"); // first load = right
const checked = useRef(false);
const [visible, setVisible] = useState(true);
// illa
const [isClosed, setIsClosed] = useState(false);
// illa
const [minimized, setMinimized] = useState(false);

useEffect(() => {
    if (checked.current) return; // dev StrictMode-la rendu thadava run aagaama
    checked.current = true;

    const nav = performance.getEntriesByType("navigation")[0];
    let next = "right";

    try {
        const prev = sessionStorage.getItem("spinSide");
        if (nav?.type === "reload" && prev) {
            next = prev === "right" ? "left" : "right";
        }
        sessionStorage.setItem("spinSide", next);
    } catch (e) {}

    setSide(next);
}, []);

// state peru "visible" (true = open) na:
useEffect(() => {
    document.body.classList.toggle("spin-open", visible);
    return () => document.body.classList.remove("spin-open");
}, [visible]);

// state peru "isClosed" (true = close) na:
useEffect(() => {
    document.body.classList.toggle("spin-open", !isClosed);
    return () => document.body.classList.remove("spin-open");
}, [isClosed]);

// state peru "minimized" (true = close) na:
useEffect(() => {
    document.body.classList.toggle("spin-open", !minimized);
    return () => document.body.classList.remove("spin-open");
}, [minimized]);
    return (
        <div
            className={`spin-banner-wrapper spin-banner-wrapper-${side}`}
            aria-live="polite"
        >
          
            {isMinimized ? (
                <button
                    type="button"
                    className="spin-minimized-btn"
                    aria-label="Show spin offer"
                    onFocus={() => setIsMinimized(false)}
                    onClick={() => setIsMinimized(false)}
                >
                    <Image
                        className="spin-minimized-img"
                        src="assets/images/spin-circle.png"
                        alt="Show spin offer"
                        width={100}
                        height={100}
                    />
                    <span className="spin-notification-badge" aria-label="1 new offer">
                        1
                    </span>
                </button>
            ) : (
              <div className="spin-banner">
                <button
                   type="button"
                   className="spin-close-btn"
                   aria-label="Close offer"
                   onClick={() => setIsMinimized(true)}
                >
                   <FontAwesomeIcon icon={faXmark} />
                </button>

                <Link href="/spinwheel" className="spin-banner-link" aria-label="Open spin wheel">
                    <div className="wheel-section">
                        <Image className="spin-pro-img" src="assets/images/spin-pro.png" alt="Spin offer" width={100} height={100} />
                    </div>

                    <div className="spin-title">
                        <Image className="spin-text-img" src="assets/images/spin-text.png" alt="Spin cash reward" width={100} height={100} />
                        <span className="spin-btn">
                            <Image
                                src="assets/images/spin-now.svg"
                                width={100}
                                height={100}
                                alt=""
                                className="spin-now"
                            />

                            <span className="spin-text">Spin Now</span>
                            <span className="arrow"><FontAwesomeIcon icon={faArrowRight} /></span>
                        </span>
                    </div>
                </Link>
              </div>
            )}
        </div>
    );
};

export default SpinBanner;