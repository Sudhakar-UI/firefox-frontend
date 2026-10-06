const fs = require('fs');

const rotorText = fs.readFileSync('scratch_rotor_text.txt', 'utf8');
let page = fs.readFileSync('src/app/spin-wheel/page.jsx', 'utf8');

// Normalize line endings
page = page.replace(/\r\n/g, '\n');

// 1. Remove setShowResult(true); in handleSpin
page = page.replace('            setShowResult(true);\n', '');

// 2. Replace clipPath in defs and wrap slices
const oldDefsClip = '<clipPath id="rotorCenterBadgeClip">\n                                                    <circle cx="244.67" cy="246.68" r="31" />\n                                                </clipPath>';
const newDefsClip = '<clipPath id="rotorRimClip">\n                                                    <circle cx="240.45" cy="243.58" r="185" />\n                                                </clipPath>';

if (!page.includes(oldDefsClip)) {
    console.error('oldDefsClip not found!');
    process.exit(1);
}
page = page.replace(oldDefsClip, newDefsClip);

// Wrap slices base and 8 slices
const oldSlicesStart = '                                            {/* Slices Base */}\n';
const newSlicesStart = '                                            <g clipPath="url(#rotorRimClip)">\n                                            {/* Slices Base */}\n';

if (!page.includes(oldSlicesStart)) {
    console.error('oldSlicesStart not found!');
    process.exit(1);
}
page = page.replace(oldSlicesStart, newSlicesStart);

// Find from {/* Slices Text */} to the end of spin-result-toast
const oldMiddleStart = '                                            {/* Slices Text */}';
const toastMarker = '<div className="spin-result-toast">';
const toastIdx = page.indexOf(toastMarker);

if (toastIdx === -1) {
    console.error('toastMarker not found!');
    process.exit(1);
}

// Find closing tag of toast: </Container> or after closing )}
const endMarker = '                                )}';
const afterToastEnd = page.indexOf(endMarker, toastIdx) + endMarker.length;

const startIdx = page.indexOf(oldMiddleStart);

console.log('startIdx:', startIdx, 'afterToastEnd:', afterToastEnd);

const newMiddle = rotorText + `                                            </g>
                                        </svg>
                                    </div>

                                    {/* Stationary Center Fox Badge (Does not rotate) */}
                                    <div className="wheel-center-badge">
                                        <svg viewBox="0 0 486 552" className="center-badge-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <clipPath id="stationaryCenterBadgeClip">
                                                    <circle cx="240.45" cy="243.21" r="34" />
                                                </clipPath>
                                            </defs>
                                            <g clipPath="url(#stationaryCenterBadgeClip)">
                                                <image href="assets/images/wheel.svg" x="0" y="0" width="486" height="552" />
                                            </g>
                                        </svg>
                                    </div>

                                    {/* Top Pin Pointer (Stationary Indicator) */}
                                    <div className="wheel-pin-wrapper">
                                        <Image
                                            src="assets/images/pin.svg"
                                            width={46}
                                            height={47}
                                            alt="Spin Pointer"
                                            className="pin-svg-icon"
                                            priority
                                        />
                                    </div>
                                </div>`;

const updatedPage = page.substring(0, startIdx) + newMiddle + page.substring(afterToastEnd);
fs.writeFileSync('src/app/spin-wheel/page.jsx', updatedPage, 'utf8');
console.log('Successfully updated src/app/spin-wheel/page.jsx!');
