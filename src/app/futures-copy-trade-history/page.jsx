"use client";
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';
import { Container, Image, Row, Col, Nav, Table, Form, Tab, Badge, Accordion, InputGroup, Button, Dropdown } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';


// Import and initialize Highcharts modules at the top level
if (typeof Highcharts === 'object') {
    require('highcharts/modules/accessibility')(Highcharts);
    require('highcharts/modules/exporting')(Highcharts);
    require('highcharts/modules/export-data')(Highcharts);
}

// Function to detect if night mode is active
const isNightMode = () => document.body.classList.contains('nightmode');

// Function to get the appropriate grid color
const getGridColor = () => isNightMode() ? '#313131' : '#e7e7e7';

const FuturesTradeCopy1 = () => {

    useEffect(() => {
        document.body.classList.add('featurescopytrade');

        return () => {
            document.body.classList.remove("featurescopytrade");
        };
    });

    const [gridColor, setGridColor] = useState(getGridColor());
    const chartRef = useRef(null);

    // Watch for theme changes
    useEffect(() => {
        const updateGridColor = () => {
            setGridColor(getGridColor());
        };

        // Create a MutationObserver to watch for class changes on body
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    updateGridColor();
                }
            });
        });

        // Start observing the body element
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['class']
        });

        // Cleanup
        return () => observer.disconnect();
    }, []);

    const options = {
        chart: {
            type: 'area',
            backgroundColor: 'transparent',
            plotBackgroundColor: 'transparent',
            style: {
                color: '#6B7280'
            }
        },
        title: {
            text: '  ',
            style: {
                color: '#6B7280'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            x: 150,
            y: 100,
            floating: true,
            enabled: false,
            borderWidth: 0,
            backgroundColor: 'transparent',
            itemStyle: {
                color: '#6B7280'
            }
        },
        xAxis: {
            categories: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            gridLineColor: gridColor,
            lineColor: gridColor,
            tickColor: gridColor,
            labels: {
                style: {
                    color: '#6B7280'
                }
            }
        },
        yAxis: {
            gridLineColor: gridColor,
            lineColor: gridColor,
            tickColor: gridColor,
            title: {
                text: ' Amount ',
                style: {
                    color: '#6B7280'
                }
            },
            labels: {
                style: {
                    color: '#6B7280'
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' units',
            style: {
                color: '#000'
            }
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: ' ',
            data: [0, 1, 4, 4, 5, 2, 3],

            // 🔴 Line color
            color: '#FF3C00',

            // 🔴 Area fill color
            fillColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#ff3c002a'],
                    [1, '#ff3c002a']
                ]
            },

            // 🔴 Point dots (optional)
            marker: {
                enabled: true,
                radius: 4,
                fillColor: '#FF3C00',
                lineColor: '#FF3C00'
            }
        }]
    };

    const options2 = {
        chart: {
            type: 'area',
            backgroundColor: 'transparent'
        },
        title: {
            text: '  ',
            style: {
                color: '#6B7280'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            enabled: false,
            borderWidth: 0,
            backgroundColor: 'transparent',
            itemStyle: {
                color: '#6B7280'
            }
        },
        xAxis: {
            categories: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            gridLineColor: gridColor,
            lineColor: gridColor,
            tickColor: gridColor,
            labels: {
                style: {
                    color: '#6B7280'
                }
            }
        },
        yAxis: {
            gridLineColor: gridColor,
            lineColor: gridColor,
            tickColor: gridColor,
            title: {
                text: ' Amount ',
                style: {
                    color: '#6B7280'
                }
            },
            labels: {
                style: {
                    color: '#6B7280'
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' units',
            style: {
                color: '#000'
            }
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: ' ',
            data: [0, 1, 4, 4, 5, 2, 3],

            // 🔴 Line color
            color: '#FF3C00',

            // 🔴 Area fill color
            fillColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#ff3c002a'],
                    [1, '#ff3c002a']
                ]
            },

            // 🔴 Point dots (optional)
            marker: {
                enabled: true,
                radius: 4,
                fillColor: '#FF3C00',
                lineColor: '#FF3C00'
            }
        }]
    };

    return (
        <div className='cpytrade'>
            <Homeheader />

            <section className="innerpagecontent copytradetopsection savingbannersec ieobannerbg">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7} md={7}>
                            <h2 className="heading-title"><span className="profileicon"><Image alt='coin' width={20} height={20} src="assets/images/profile1.svg" className='profilimg' /></span> Albert Flores (Futures)</h2>
                            <p>Choose the “Fixed Ratio” mode and leave other settings untouched, especially avoiding stop loss. * I trade with confidence, maintaining a long-term win rate of around 90% * Experience steady asset growth with zero risk.</p>
                            <ul className="cpytradelist">
                                <li>
                                    <p className="t-gray mb-0">Days Trading</p>
                                    <h5>260</h5>
                                </li>
                                <li>
                                    <p className="t-gray mb-0">Copiers</p>
                                    <h5>743/800</h5>
                                </li>
                                <li>
                                    <p className="t-gray mb-0">Total Copiers</p>
                                    <h5>3,946</h5>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={5} md={5}>
                            <div className="text-center portfolioborder">
                                <p><Link href="#" className="alink"><u>Back to portfolios list</u></Link></p>
                                <p><span className="borderline-box">206 marked as favorites</span></p>
                                <p><span className="borderline-box"><FontAwesomeIcon icon={faShare} className='me-2' />Share</span></p>
                                <Link href="/spot-copy-trade-2" id='cpybtn' className="btn sitebtn">Copy</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="performancebanner pb-2">
                <Container>
                    <div className="d-flex perfrmborder">
                        <div className="panelcontentbox pan-cont-bx-yy">
                            <h5 className="subhead">Performance</h5>
                            <div className="tabrightbox">
                                <Form className="siteformbg">
                                    <Form.Select id='seldurperfomace' className="form-control smselectbox">
                                        <option>7D</option>
                                    </Form.Select>
                                </Form>
                            </div>
                            <Table id='table1' className="table sitetble mb-0">
                                <tbody>
                                    <tr>
                                        <td>ROI</td>
                                        <td className="text-end t-green">+0.78%</td>
                                    </tr>
                                    <tr>
                                        <td>PnL</td>
                                        <td className="text-end t-green">+1,588.02</td>
                                    </tr>
                                    <tr>
                                        <td>Sharpe Ratio</td>
                                        <td className="text-end">3.36</td>
                                    </tr>
                                    <tr>
                                        <td>MDD</td>
                                        <td className="text-end">1.62%</td>
                                    </tr>
                                    <tr>
                                        <td>Win Rate</td>
                                        <td className="text-end">74.00%</td>
                                    </tr>
                                    <tr>
                                        <td>Win Positions</td>
                                        <td className="text-end">37</td>
                                    </tr>
                                    <tr>
                                        <td>Total Positions</td>
                                        <td className="text-end">37</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="panelcontentbox pan-cont-bx-yy">
                            <h5 className="subhead">Lead Trader Overview</h5>
                            <Table id='table2' className="table sitetble mb-0">
                                <tbody>
                                    <tr>
                                        <td>Copier PnL</td>
                                        <td className="text-end t-green">759,839.48 USDT</td>
                                    </tr>
                                    <tr>
                                        <td>AUM</td>
                                        <td className="text-end">8,412,041.57 USDT</td>
                                    </tr>
                                    <tr>
                                        <td>Profit Sharing</td>
                                        <td className="text-end">15.00%</td>
                                    </tr>
                                    <tr>
                                        <td>Leading Margin Balance</td>
                                        <td className="text-end">4000/4000 USDT</td>
                                    </tr>
                                    <tr>
                                        <td>Minimum Copy Amount</td>
                                        <td className="text-end">8,412,041.57 USDT</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>

                    <div className="perfrmborder">
                        <Tab.Container defaultActiveKey="pnl">
                            <div className="panelcontentbox">
                                <div className="twotablesec smallboxtab">
                                    <Nav variant='tabs' className="nav nav-tabs border-0" role="tablist">
                                        <Nav.Item className="nav-item">
                                            <Nav.Link className="nav-link nav-link-y-pnl" id='pnltab' eventKey="pnl">PnL</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="nav-item">
                                            <Nav.Link className="nav-link nav-link-y-pnl" id='roitab' eventKey="roi">ROI</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                                <div className="tabrightbox">
                                    <Form className="siteformbg">
                                        <Form.Select id='seldurchart' className="form-control smselectbox">
                                            <option>7D</option>
                                            <option>30D</option>
                                            <option>90D</option>
                                        </Form.Select>
                                    </Form>
                                </div>
                                <Tab.Content className="tab-content mt-3">
                                    <Tab.Pane eventKey="pnl" className="tab-pane fade">
                                        <div className="pnlchartdesign">
                                            <HighchartsReact
                                                highcharts={Highcharts}
                                                options={options2}
                                            />
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="roi" className="tab-pane fade in">
                                        <div className="pnlchartdesign roichartdesign">
                                            <HighchartsReact
                                                highcharts={Highcharts}
                                                options={options}
                                            />
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                </Container>
            </section>


            <section className="cpytradehistory pt-2">
                <div className="container">
                    <div className="linetabbanner mb-3">
                        <ul className="nav nav-tabs tabbanner border-0" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-bs-toggle="tab" href="#position">Positions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#positionhistory">Position History</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#tradehistory">Trade History</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#transfer">Transfer History</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#copytrade">Copy Traders</a>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <div className="tab-content">
                            <div id="position" className="tab-pane fade in active show">
                                <div className="tabrightbox seemoretab">
                                    <div className="dropdown">
                                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <Image alt='filter' width={20} height={20} src="assets/images/filter.svg" />
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <a className="dropdown-item">
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <label className="form-check-label">Hide assets below 1 USDT</label>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <SimpleBar className="table-responsive sitescroll copy-data-table-y">
                                    <Table id='table3' className="table sitetable copydatatable">
                                        <thead>
                                            <tr>
                                                <th>Symbol</th>
                                                <th>Size</th>
                                                <th>Entry Price</th>
                                                <th>Mark Price</th>
                                                <th>Margin</th>
                                                <th>PNL(ROE)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><div className="brderleft greenbrd"><span className="ms-2">ADAUSDT</span><br /><small className="ms-2">Perpetual</small></div></td>
                                                <td className="t-green">0.548 ETH</td>
                                                <td>26,754.32</td>
                                                <td>16.5685</td>
                                                <td>45,620.40 USDT<br /><small>(Isolated)</small></td>
                                                <td>+8,741.22 USDT<br /><small>(+19.16%)</small></td>
                                            </tr>
                                            <tr>
                                                <td><div className="brderleft redbrd"><span className="ms-2">ADAUSDT</span><br /><small className="ms-2">Perpetual</small></div></td>
                                                <td className="t-green">0.548 ETH</td>
                                                <td>26,754.32</td>
                                                <td>16.5685</td>
                                                <td>45,620.40 USDT<br /><small>(Isolated)</small></td>
                                                <td>+8,741.22 USDT<br /><small>(+19.16%)</small></td>
                                            </tr>
                                            <tr>
                                                <td><div className="brderleft redbrd"><span className="ms-2">ADAUSDT</span><br /><small className="ms-2">Perpetual</small></div></td>
                                                <td className="t-green">0.548 ETH</td>
                                                <td>26,754.32</td>
                                                <td>16.5685</td>
                                                <td>45,620.40 USDT<br /><small>(Isolated)</small></td>
                                                <td>+8,741.22 USDT<br /><small>(+19.16%)</small></td>
                                            </tr>
                                            <tr>
                                                <td><div className="brderleft greenbrd"><span className="ms-2">ADAUSDT</span><br /><small className="ms-2">Perpetual</small></div></td>
                                                <td className="t-green">0.548 ETH</td>
                                                <td>26,754.32</td>
                                                <td>16.5685</td>
                                                <td>45,620.40 USDT<br /><small>(Isolated)</small></td>
                                                <td>+8,741.22 USDT<br /><small>(+19.16%)</small></td>
                                            </tr>
                                            <tr>
                                                <td><div className="brderleft greenbrd"><span className="ms-2">ADAUSDT</span><br /><small className="ms-2">Perpetual</small></div></td>
                                                <td className="t-green">0.548 ETH</td>
                                                <td>26,754.32</td>
                                                <td>16.5685</td>
                                                <td>45,620.40 USDT<br /><small>(Isolated)</small></td>
                                                <td>+8,741.22 USDT<br /><small>(+19.16%)</small></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </SimpleBar>
                            </div>
                            <div id="positionhistory" className="tab-pane fade in">
                                <SimpleBar className="table-responsive sitescroll copy-data-table-y">
                                    <Table id='table4' className="table sitetable copydatatable">
                                        <thead>
                                            <tr>
                                                <th>Symbol</th>
                                                <th>Size</th>
                                                <th>Entry Price</th>
                                                <th>Mark Price</th>
                                                <th>Margin</th>
                                                <th>PNL(ROE)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><div className="brderleft greenbrd"><span className="ms-2">ADAUSDT</span><br /><small className="ms-2">Perpetual</small></div></td>
                                                <td className="t-green">0.548 ETH</td>
                                                <td>26,754.32</td>
                                                <td>16.5685</td>
                                                <td>45,620.40 USDT<br /><small>(Isolated)</small></td>
                                                <td>+8,741.22 USDT<br /><small>(+19.16%)</small></td>
                                            </tr>
                                            <tr>
                                                <td><div className="brderleft redbrd"><span className="ms-2">ADAUSDT</span><br /><small className="ms-2">Perpetual</small></div></td>
                                                <td className="t-green">0.548 ETH</td>
                                                <td>26,754.32</td>
                                                <td>16.5685</td>
                                                <td>45,620.40 USDT<br /><small>(Isolated)</small></td>
                                                <td>+8,741.22 USDT<br /><small>(+19.16%)</small></td>
                                            </tr>
                                            <tr>
                                                <td><div className="brderleft redbrd"><span className="ms-2">ADAUSDT</span><br /><small className="ms-2">Perpetual</small></div></td>
                                                <td className="t-green">0.548 ETH</td>
                                                <td>26,754.32</td>
                                                <td>16.5685</td>
                                                <td>45,620.40 USDT<br /><small>(Isolated)</small></td>
                                                <td>+8,741.22 USDT<br /><small>(+19.16%)</small></td>
                                            </tr>
                                            <tr>
                                                <td><div className="brderleft greenbrd"><span className="ms-2">ADAUSDT</span><br /><small className="ms-2">Perpetual</small></div></td>
                                                <td className="t-green">0.548 ETH</td>
                                                <td>26,754.32</td>
                                                <td>16.5685</td>
                                                <td>45,620.40 USDT<br /><small>(Isolated)</small></td>
                                                <td>+8,741.22 USDT<br /><small>(+19.16%)</small></td>
                                            </tr>
                                            <tr>
                                                <td><div className="brderleft greenbrd"><span className="ms-2">ADAUSDT</span><br /><small className="ms-2">Perpetual</small></div></td>
                                                <td className="t-green">0.548 ETH</td>
                                                <td>26,754.32</td>
                                                <td>16.5685</td>
                                                <td>45,620.40 USDT<br /><small>(Isolated)</small></td>
                                                <td>+8,741.22 USDT<br /><small>(+19.16%)</small></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </SimpleBar>
                            </div>
                            <div id="tradehistory" className="tab-pane fade in">
                                <SimpleBar className="table-responsive sitescroll copy-data-table-y">
                                    <Table id='table5' className="table sitetable copydatatable">
                                        <thead>
                                            <tr>
                                                <th>Time</th>
                                                <th>Pair</th>
                                                <th>Side</th>
                                                <th>Executed</th>
                                                <th>Role</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2024-09-05 19:17:22	</td>
                                                <td>GUSDT</td>
                                                <td className="t-green">Buy</td>
                                                <td>1246 G</td>
                                                <td>Taker</td>
                                                <td>40.92 USDT</td>
                                            </tr>
                                            <tr>
                                                <td>2024-09-05 19:17:22	</td>
                                                <td>GUSDT</td>
                                                <td className="t-green">Buy</td>
                                                <td>1246 G</td>
                                                <td>Taker</td>
                                                <td>40.92 USDT</td>
                                            </tr>
                                            <tr>
                                                <td>2024-09-05 19:17:22	</td>
                                                <td>GUSDT</td>
                                                <td className="t-green">Buy</td>
                                                <td>1246 G</td>
                                                <td>Taker</td>
                                                <td>40.92 USDT</td>
                                            </tr>
                                            <tr>
                                                <td>2024-09-05 19:17:22	</td>
                                                <td>GUSDT</td>
                                                <td className="t-green">Buy</td>
                                                <td>1246 G</td>
                                                <td>Taker</td>
                                                <td>40.92 USDT</td>
                                            </tr>
                                            <tr>
                                                <td>2024-09-05 19:17:22	</td>
                                                <td>GUSDT</td>
                                                <td className="t-green">Buy</td>
                                                <td>1246 G</td>
                                                <td>Taker</td>
                                                <td>40.92 USDT</td>
                                            </tr>
                                            <tr>
                                                <td>2024-09-05 19:17:22	</td>
                                                <td>GUSDT</td>
                                                <td className="t-green">Buy</td>
                                                <td>1246 G</td>
                                                <td>Taker</td>
                                                <td>40.92 USDT</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </SimpleBar>
                            </div>
                            <div id="transfer" className="tab-pane fade in">
                                <SimpleBar className="table-responsive sitescroll copy-data-table-y">
                                    <Table id='table6' className="table sitetable copydatatable">
                                        <thead>
                                            <tr>
                                                <th>Coin</th>
                                                <th>Time</th>
                                                <th>Amount</th>
                                                <th>From</th>
                                                <th>To</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>USDT</td>
                                                <td>2024-08-08 07:02:49</td>
                                                <td>30,000.00000000	</td>
                                                <td>Lead Trading</td>
                                                <td>Fiat and Spot</td>
                                            </tr>
                                            <tr>
                                                <td>USDT</td>
                                                <td>2024-08-08 07:02:49</td>
                                                <td>30,000.00000000	</td>
                                                <td>Lead Trading</td>
                                                <td>Fiat and Spot</td>
                                            </tr>
                                            <tr>
                                                <td>USDT</td>
                                                <td>2024-08-08 07:02:49</td>
                                                <td>30,000.00000000	</td>
                                                <td>Lead Trading</td>
                                                <td>Fiat and Spot</td>
                                            </tr>
                                            <tr>
                                                <td>USDT</td>
                                                <td>2024-08-08 07:02:49</td>
                                                <td>30,000.00000000	</td>
                                                <td>Lead Trading</td>
                                                <td>Fiat and Spot</td>
                                            </tr>
                                            <tr>
                                                <td>USDT</td>
                                                <td>2024-08-08 07:02:49</td>
                                                <td>30,000.00000000	</td>
                                                <td>Lead Trading</td>
                                                <td>Fiat and Spot</td>
                                            </tr>
                                            <tr>
                                                <td>USDT</td>
                                                <td>2024-08-08 07:02:49</td>
                                                <td>30,000.00000000	</td>
                                                <td>Lead Trading</td>
                                                <td>Fiat and Spot</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </SimpleBar>
                            </div>
                            <div id="copytrade" className="tab-pane fade in">
                                <SimpleBar className="table-responsive sitescroll copy-data-table-y">
                                    <Table id='table7' className="table sitetable copydatatable">
                                        <thead>
                                            <tr>
                                                <th>User ID	</th>
                                                <th>Amount</th>
                                                <th>Total PNL</th>
                                                <th>Total ROI</th>
                                                <th>Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Ano**************222</td>
                                                <td>321.63 USDT</td>
                                                <td className="t-green">+24.02 USDT</td>
                                                <td className="t-green">+8.01%</td>
                                                <td>47 Days</td>
                                            </tr>
                                            <tr>
                                                <td>Ano**************222</td>
                                                <td>321.63 USDT</td>
                                                <td className="t-green">+24.02 USDT</td>
                                                <td className="t-green">+8.01%</td>
                                                <td>47 Days</td>
                                            </tr>
                                            <tr>
                                                <td>Ano**************222</td>
                                                <td>321.63 USDT</td>
                                                <td className="t-green">+24.02 USDT</td>
                                                <td className="t-green">+8.01%</td>
                                                <td>47 Days</td>
                                            </tr>
                                            <tr>
                                                <td>Ano**************222</td>
                                                <td>321.63 USDT</td>
                                                <td className="t-green">+24.02 USDT</td>
                                                <td className="t-green">+8.01%</td>
                                                <td>47 Days</td>
                                            </tr>
                                            <tr>
                                                <td>Ano**************222</td>
                                                <td>321.63 USDT</td>
                                                <td className="t-green">+24.02 USDT</td>
                                                <td className="t-green">+8.01%</td>
                                                <td>47 Days</td>
                                            </tr>
                                            <tr>
                                                <td>Ano**************222</td>
                                                <td>321.63 USDT</td>
                                                <td className="t-green">+24.02 USDT</td>
                                                <td className="t-green">+8.01%</td>
                                                <td>47 Days</td>
                                            </tr>
                                            <tr>
                                                <td>Ano**************222</td>
                                                <td>321.63 USDT</td>
                                                <td className="t-green">+24.02 USDT</td>
                                                <td className="t-green">+8.01%</td>
                                                <td>47 Days</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </SimpleBar>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Homefooter />
        </div>
    )
}

export default FuturesTradeCopy1;