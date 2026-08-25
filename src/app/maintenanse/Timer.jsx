"use client";
import React, { useEffect, useState } from "react";

export default function Timer() {
    const getTime = () => {
        const date = new Date();
        let h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();
        const ap = h < 12 ? "AM" : "PM";

        if (h === 0) h = 12;
        if (h > 12) h -= 12;

        return {
            hours: String(h).padStart(2, "0"),
            minutes: String(m).padStart(2, "0"),
            seconds: String(s).padStart(2, "0"),
            ap
        };
    };

    const [time, setTime] = useState(getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true);
            setTime(getTime());

            setTimeout(() => setAnimate(false), 750);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="clock">
            <div className="clock__block">
                <span className="clock__number">{time.hours}</span>
                <span className="clock__label">HOURS</span>
            </div>

            <div className="clock__colon">:</div>

            <div className="clock__block">
                <span className="clock__number">{time.minutes}</span>
                <span className="clock__label">MINUTES</span>
            </div>

            <div className="clock__colon">:</div>

            <div className={`clock__block ${animate ? "clock__block--bounce" : ""}`}>
                <span className="clock__number">{time.seconds}</span>
                <span className="clock__label">SECONDS</span>
            </div>

            {/* <div className="clock__block clock__block--small">
                <span className="clock__number">{time.ap}</span>
                <span className="clock__label">ZONE</span>
            </div> */}
        </div>
    );
}