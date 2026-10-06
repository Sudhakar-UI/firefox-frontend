"use client";
import React , { useState } from "react";
import Simplebar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { Image, Table, Nav, Tab, NavDropdown, Form, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faArrowUp } from "@fortawesome/free-solid-svg-icons";

export const Page = () => {
    
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = (isOpen) => {
        setShowDropdown(isOpen);
    };

    const handleItemClick = (e) => {
        e.stopPropagation(); // Prevents dropdown from closing on inside clicks
    };

    const closeTab = () => {
        setShowDropdown(false); // Explicitly close the dropdown
        console.log('Dropdown closed');
    };
  return (
    <div className="livepricelist">
      <div className="livepricemobile">
        <ul className="livepricenavbg">
          <li>
            <span className="markettabdropbox">
              <NavDropdown title={ <div className="pull-left"> <Image src="assets/images/color/btc.svg" className="coinlisticon" alt="coin" /> BTC/USDT - 30-Oct <span className="t-gray cointxt">Perpetual</span> </div> }  id="basic-nav-dropdown"
                className="marketlist markeselect"  show={showDropdown} onToggle={toggleDropdown} >
                <NavDropdown.Item as="div" onClick={handleItemClick}>
                  <div id="closemarketicon" className="closeiconlist" onClick={closeTab}>
                    <FontAwesomeIcon icon={faTimes} />
                  </div>
                  <h2 className="heading-box bg-none">Markets List</h2>
                   <div className="filtersearch">
                      <Form className="siteformbg">
                        <Form.Group className="form-group mb-2">
                          <Form.Control placeholder="Search" id="search" />
                        </Form.Group>
                      </Form>
                    </div>

                  <Tab.Container defaultActiveKey="eth">
                    <div className="innerpagetab historytab">
                      <Nav variant="pills" className="tabbanner">
                        <Nav.Item>
                          <NavLink eventKey="eth" as="span" className="nav-link"> ETH </NavLink>
                        </Nav.Item>
                        <Nav.Item>
                          <NavLink eventKey="trx" as="span" className="nav-link"> TRX </NavLink>
                        </Nav.Item>
                      </Nav>
                    </div>

                   
                    <Tab.Content>
                      <Tab.Pane eventKey="eth">
                        <Simplebar className="table-responsive">
                          <Table className="sitetable" id="markettable">
                            <thead>
                              <tr>
                                <th>Coin</th>
                                <th>Last Price</th>
                                <th>24h Change</th>
                                <th>24h Volume</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="activerow">
                                <td>
                                  <Image src="../assets/images/color/btc.svg" width={25} height={25} alt="coin" className="coinlisticon" />
                                  BTC/ETH
                                </td>
                                <td>2562.365289</td>
                                <td>
                                  <span className="t-green">
                                    2.20% <FontAwesomeIcon icon={faArrowUp} />
                                  </span>
                                </td>
                                <td>2562.365289</td>
                              </tr>
                              <tr>
                                <td>
                                  <Image src="../assets/images/color/trx.svg" width={25} height={25} alt="coin"
                                    className="coinlisticon" />
                                  TRX/ETH
                                </td>
                                <td>2562.365289</td>
                                <td>
                                  <span className="t-green">
                                    2.20% <FontAwesomeIcon icon={faArrowUp} />
                                  </span>
                                </td>
                                <td>2562.365289</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Simplebar>
                      </Tab.Pane>
                      <Tab.Pane eventKey="trx">
                        <Simplebar className="table-responsive">
                          <Table className="sitetable" id="markettable2">
                            <thead>
                              <tr>
                                <th>Coin</th>
                                <th>Last Price</th>
                                <th>24h Change</th>
                                <th>24h Volume</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <Image src="../assets/images/color/xrp.svg" width={25} height={25} alt="coin" className="coinlisticon" />
                                  XRP/ETH
                                </td>
                                <td>2562.365289</td>
                                <td>
                                  <span className="t-green">
                                    2.20% <FontAwesomeIcon icon={faArrowUp} />
                                  </span>
                                </td>
                                <td>2562.365289</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Simplebar>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </NavDropdown.Item>
              </NavDropdown>
            </span>
          </li>
          <li>
            <div className="livepricet">
              Last price<span className="t-red">0.236589</span>
            </div>
          </li>
          <li>
            <div className="livepricet">
              24H change<span className="t-green">0.236589</span>
            </div>
          </li>
          <li>
            <div className="livepricet">
              24H volume<span>0.236589 BTC</span>
            </div>
          </li>
          <li>
            <div className="livepricet">
              24H Low<span>0.236589 BTC</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
