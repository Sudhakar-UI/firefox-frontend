'use client';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            const thirdSection = document.querySelector('.personalsbanner');
            if (thirdSection) {
                const rect = thirdSection.getBoundingClientRect();
                // Show the button when the 3rd section comes into the viewport
                if (rect.top <= window.innerHeight / 1.5) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            } else {
                if (window.scrollY > 800) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        // Initial check on mount
        toggleVisibility();
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`scroll-to-top ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
            <FontAwesomeIcon icon={faChevronUp} className="scroll-icon-cher"/>
        </div>
    );
}
