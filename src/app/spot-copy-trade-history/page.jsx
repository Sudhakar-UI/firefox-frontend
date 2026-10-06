"use client";
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';
import { Container, Image, Row, Col, Nav, Table, Form, Tab, Badge, Accordion, InputGroup, Button, Dropdown } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Highcharts, { color } from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faShare } from '@fortawesome/free-solid-svg-icons';
import ResponsiveTable from '../../app/components/ResponsiveTable';

// Function to detect if night mode is active
const isNightMode = () => document.body.classList.contains('nightmode');

// Function to get the appropriate grid color
const getGridColor = () => isNightMode() ? '#313131' : '#e7e7e7';


const SpotTradeCopy1 = () => {

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
                        <Col lg={7} md={7} className='spottrade1'>
                            <h2 className="heading-title"><span className="profileicon"><Image alt='coin' width={20} height={20} src="assets/images/profile1.svg" className='profilimg' /></span> Albert Flores (Spot)</h2>
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
                                <Link href="/spot-copy-trade-2" id='copybtn' className="btn sitebtn">Copy</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="performancebanner pb-2">
                <Container>
                    <div className="d-flex perfrmborder">
                   <div className="panelcontentbox pan-cont-bx-yy">
                            <h5 className="subhead subh-y">Performance</h5>
                            <hr/>
                            <div className="tabrightbox">
                                <Form className="siteformbg">
                                    <Form.Select id='durationselect' className="form-control smselectbox">
                                        <option>7D</option>
                                    </Form.Select>
                                </Form>
                            </div>
                            <Table id='table1' className="table sitetble mb-0">
                                <tbody>
                                    <tr>
                                        <td>ROI</td>
                                        <td className="text-end">+0.78%</td>
                                    </tr>
                                    <tr>
                                        <td>PnL</td>
                                        <td className="text-end">+1,588.02</td>
                                    </tr>
                                      <tr>
                                        <td>MDD</td>
                                        <td className="text-end">1.62%</td>
                                    </tr>
                                    <tr>
                                        <td>Win Rate</td>
                                        <td className="text-end">74.00%</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                            <div className="panelcontentbox pan-cont-bx-yy">
                            <h5 className="subhead subh-y">Lead Trader Overview</h5>
                            <hr/>
                            <Table id='table2' className="table sitetble mb-0">
                                <tbody>
                                    <tr>
                                        <td>Profit Sharing</td>
                                        <td className="text-end">15.00%</td>
                                    </tr>
                                    <tr>
                                        <td>Minimum Copy Amount</td>
                                        <td className="text-end">4000/4000 USDT</td>
                                    </tr>
                                    <tr>
                                        <td>Last Trade</td>
                                        <td className="text-end">2024-08-26 05:58</td>
                                    </tr>
                                    <tr>
                                        <td>Copier PnL</td>
                                        <td className="text-end">759,839.48 USDT</td>
                                    </tr>
                                    <tr>
                                        <td>Leading Balance</td>
                                        <td className="text-end">203,619.80 USDT</td>
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
                <Container>
                    <Tab.Container defaultActiveKey='holding'>
                        <div className="linetabbanner mb-3">
                            <Nav variant='tabs' className="nav nav-tabs tabbanner border-0" role="tablist">
                                <Nav.Item className="nav-item">
                                    <Nav.Link className="nav-link" eventKey="holding">Holdings</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="nav-item">
                                    <Nav.Link className="nav-link" eventKey="tradehistory">Trade History</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="nav-item">
                                    <Nav.Link className="nav-link" eventKey="balancehistory">Balance History</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="nav-item">
                                    <Nav.Link className="nav-link" eventKey="copytrade">Copy Traders</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="">
                            <Tab.Content className="tab-content">
                                <Tab.Pane eventKey="holding" className="tab-pane fade in">
                                    <div className="tabrightbox seemoretab">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                <Image alt='coin' width={20} height={20} src="assets/images/filter.svg" />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item as="div">
                                                    <Form.Check type="checkbox" id="spotcheck" label="Hide assets below 1 USDT" />
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>

                                    <div className='tblbg'>
                                        <SimpleBar className='table-responsive sitescroll copy-data-table-y'>
                                            <Table id='table3' className="table sitetable table-responsive-stack copydatatable">
                                                <thead>
                                                    <tr>
                                                        <th>Assets</th>
                                                        <th>Time Updated</th>
                                                        <th>Remain Amount</th>
                                                        <th>Buy Amount</th>
                                                        <th>Avg. Buy Price</th>
                                                        <th>Last Price</th>
                                                        <th>Unrealized PNL</th>
                                                        <th>Realized PNL</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* <tr className="nodata">
                                                        <td colSpan="7">
                                                            <Image alt='coin' width={20} height={20} src="assets/images/nodata.svg" />
                                                            No record found
                                                        </td>
                                                    </tr> */}
                                                    <tr>
                                                        <td><Image alt='coin' width={20} height={20} src="assets/images/color/btc.svg" className="coinlisticon" />BTC</td>
                                                        <td>2024-08-08 07:02:49</td>
                                                        <td>39956.822444<br /><small className="t-gray">~51,344.51 USDT</small></td>
                                                        <td>39956.4092</td>
                                                        <td>1.264</td>
                                                        <td>1.264</td>
                                                        <td className="t-green">+838.50 USDT<br />(+1.66%)</td>
                                                        <td>0.00 USDT<Link href="#" className="alink ms-3"><FontAwesomeIcon icon={faAngleRight} /></Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image alt='coin' width={20} height={20} src="assets/images/color/eth.svg" className="coinlisticon" />ETH</td>
                                                        <td>2024-08-08 07:02:49</td>
                                                        <td>39956.822444<br /><small className="t-gray">~51,344.51 USDT</small></td>
                                                        <td>39956.4092</td>
                                                        <td>1.264</td>
                                                        <td>1.264</td>
                                                        <td className="t-green">+838.50 USDT<br />(+1.66%)</td>
                                                        <td>0.00 USDT<Link href="#" className="alink ms-3"><FontAwesomeIcon icon={faAngleRight} /></Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image alt='coin' width={20} height={20} src="assets/images/color/ltc.svg" className="coinlisticon" />LTC</td>
                                                        <td>2024-08-08 07:02:49</td>
                                                        <td>39956.822444<br /><small className="t-gray">~51,344.51 USDT</small></td>
                                                        <td>39956.4092</td>
                                                        <td>1.264</td>
                                                        <td>1.264</td>
                                                        <td className="t-green">+838.50 USDT<br />(+1.66%)</td>
                                                        <td>0.00 USDT<Link href="#" className="alink ms-3"><FontAwesomeIcon icon={faAngleRight} /></Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image alt='coin' width={20} height={20} src="assets/images/color/trx.svg" className="coinlisticon" />TRX</td>
                                                        <td>2024-08-08 07:02:49</td>
                                                        <td>39956.822444<br /><small className="t-gray">~51,344.51 USDT</small></td>
                                                        <td>39956.4092</td>
                                                        <td>1.264</td>
                                                        <td>1.264</td>
                                                        <td className="t-green">+838.50 USDT<br />(+1.66%)</td>
                                                        <td>0.00 USDT<Link href="#" className="alink ms-3"><FontAwesomeIcon icon={faAngleRight} /></Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image alt='coin' width={20} height={20} src="assets/images/color/sol.svg" className="coinlisticon" />SOL</td>
                                                        <td>2024-08-08 07:02:49</td>
                                                        <td>39956.822444<br /><small className="t-gray">~51,344.51 USDT</small></td>
                                                        <td>39956.4092</td>
                                                        <td>1.264</td>
                                                        <td>1.264</td>
                                                        <td className="t-green">+838.50 USDT<br />(+1.66%)</td>
                                                        <td>0.00 USDT<Link href="#" className="alink ms-3"><FontAwesomeIcon icon={faAngleRight} /></Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image alt='coin' width={20} height={20} src="assets/images/color/usdt.svg" className="coinlisticon" />AVAX</td>
                                                        <td>2024-08-08 07:02:49</td>
                                                        <td>39956.822444<br /><small className="t-gray">~51,344.51 USDT</small></td>
                                                        <td>39956.4092</td>
                                                        <td>1.264</td>
                                                        <td>1.264</td>
                                                        <td className="t-green">+838.50 USDT<br />(+1.66%)</td>
                                                        <td>0.00 USDT<Link href="#" className="alink ms-3"><FontAwesomeIcon icon={faAngleRight} /></Link></td>
                                                    </tr>
                                                     <tr>
                                                        <td><Image alt='coin' width={20} height={20} src="assets/images/color/ton.svg" className="coinlisticon" />TON</td>
                                                        <td>2024-08-08 07:02:49</td>
                                                        <td>39956.822444<br /><small className="t-gray">~51,344.51 USDT</small></td>
                                                        <td>39956.4092</td>
                                                        <td>1.264</td>
                                                        <td>1.264</td>
                                                        <td className="t-green">+838.50 USDT<br />(+1.66%)</td>
                                                        <td>0.00 USDT<Link href="#" className="alink ms-3"><FontAwesomeIcon icon={faAngleRight} /></Link></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </SimpleBar>
                                        <ResponsiveTable tableId="table3" />
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="tradehistory" className="tab-pane fade in">
                                    <SimpleBar className='table-responsive sitescroll copy-data-table-y'>
                                        <Table id='table4' className="table sitetable copydatatable">
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
                                </Tab.Pane>
                                <Tab.Pane eventKey="balancehistory" className="tab-pane fade in">
                                    <SimpleBar className='table-responsive sitescroll copy-data-table-y'>
                                        <Table id='table5' className="table sitetable copydatatable">
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
                                </Tab.Pane>
                                <Tab.Pane eventKey="copytrade" className="tab-pane fade in">
                                    <SimpleBar className='table-responsive sitescroll copy-data-table-y'>
                                        <Table id='table6' className="table sitetable copydatatable">
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
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </Tab.Container>
                </Container>
            </section>

            <Homefooter />
        </div>
    )
}

export default SpotTradeCopy1;