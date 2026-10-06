"use client";

import React, { useState } from "react";
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark ,faArrowRight  } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';


const SpinBanner = () => {
    const [isMinimized, setIsMinimized] = useState(false);

    return (
        <div
            className={`spin-banner-wrapper ${isMinimized ? 'is-minimized' : ''}`}
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

                <div className="wheel-section">
                   <Image className="spin-pro-img" src="assets/images/spin-pro.png" alt="Spin offer" width={100} height={100} />
                </div>

                <div className="spin-title">
                   <Image className="spin-text-img" src="assets/images/spin-text.png" alt="Spin cash reward" width={100} height={100} />
                   <Link href='/spinwheel' type="button" className="spin-btn">
                       <Image
                           src="assets/images/spin-now.svg"
                           width={100}
                           height={100}
                           alt="Spin now"
                           className="spin-now"
                       />

                       <span className="spin-text">Spin Now</span>
                       <span className="arrow"><FontAwesomeIcon icon={faArrowRight} /></span>
                   </Link>
                </div>
              </div>
            )}
        </div>
    );
};

export default SpinBanner;