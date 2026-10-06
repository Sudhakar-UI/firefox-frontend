"use client"
import React, { useEffect, useState } from "react";
import { Container, Table, Tab, Nav, Alert, NavDropdown, Image, Form, InputGroup, Button } from "react-bootstrap";
import Homeheader from '../components/Homeheader';
import Homefooter from '../components/Homefooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faCopy, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Apidoc = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [search, setSearch] = useState("");
    const [faq, setFaq] = useState([]);

    const toggleDropdown = (name, e) => {
        e.stopPropagation();
        setOpenDropdown(prev => (prev === name ? null : name));
    };

    const handleItemClick = (e) => {
        e.stopPropagation();
    };

    useEffect(() => {
        document.body.classList.add("innerpagebg", "apidoc");
        return () => {
            document.body.classList.remove("innerpagebg");
            document.body.classList.remove("loginbanner");
            document.body.classList.remove("apidoc");
        };
    }, []);

    const handleTabChange = (key) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <article className="innerpage">
                <Homeheader />
                <section className="innercontentpage">
                    <Container>
                        <h2 className="heading-title text-center pb-0 mb-0">Faq</h2>
                    </Container>
                </section>
                <section className="innerpages apipagedoc">
                    <Container>
                        <Tab.Container defaultActiveKey="tab1" onSelect={handleTabChange}>
                            <div className="d-flex apipageflex">
                                <div className="panelcontentbox getapikey-y">
                                    <div className="leftsidenavtab">
                                        <div className="searchfrmbox">
                                            <Form className="siteformbg srh-icon-y">
                                                <div className="searchfrm mer-viw-y">
                                                    <Form.Group className="form-group w-100">
                                                        <InputGroup>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Search FAQ"
                                                                value={search}
                                                                onChange={(e) => setSearch(e.target.value)}
                                                            />
                                                            <InputGroup.Text>
                                                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                                            </InputGroup.Text>
                                                        </InputGroup>
                                                    </Form.Group>
                                                </div>
                                            </Form>
                                            {
                                                search.trim() !== "" && (
                                                    faq?.filter(item =>
                                                        item.question?.toLowerCase().includes(search.trim().toLowerCase())
                                                    ).length === 0 ? (
                                                        <div className="no-record-box mt-2">
                                                            {search.trim()}
                                                        </div>
                                                    ) : null
                                                )
                                            }

                                            {
                                                search.trim() === "" && faq?.length === 0 && (
                                                    <div className="no-record-box mt-2 nodata">
                                                        {/* <Image src="../assets/images/nodata.svg"/> */}
                                                        <p>No record found</p>

                                                    </div>
                                                )
                                            }
                                        </div>



                                        <Nav className="nav nav-tabs tabbanner border-0" role="tablist">
                                            <Nav.Item><Nav.Link eventKey="tab1">Getting FAQ keys</Nav.Link></Nav.Item>
                                            <Nav.Item><Nav.Link eventKey="tab2">Request Format</Nav.Link></Nav.Item>
                                            <NavDropdown
                                                title="Payments"
                                                show={openDropdown === "payments"}
                                                onClick={(e) => toggleDropdown("payments", e)}
                                            >
                                                <NavDropdown.Item onClick={handleItemClick}><Nav.Link eventKey="tab3">Getting Started</Nav.Link></NavDropdown.Item>
                                                <NavDropdown.Item onClick={handleItemClick}><Nav.Link eventKey="tab4">Creating an Invoice</Nav.Link></NavDropdown.Item>
                                                <NavDropdown.Item onClick={handleItemClick}><Nav.Link eventKey="tab5">Creating a QR-Code</Nav.Link></NavDropdown.Item>
                                            </NavDropdown>
                                            <Nav.Item><Nav.Link eventKey="tab6">List of Exchange Rates</Nav.Link></Nav.Item>
                                            <Nav.Item><Nav.Link eventKey="tab7">Balance</Nav.Link></Nav.Item>
                                            <NavDropdown
                                                title="Payments"
                                                show={openDropdown === "paymentss"}
                                                onClick={(e) => toggleDropdown("paymentss", e)}
                                            >
                                                <NavDropdown.Item onClick={handleItemClick}><Nav.Link eventKey="tab6">Getting Started</Nav.Link></NavDropdown.Item>
                                                <NavDropdown.Item onClick={handleItemClick}><Nav.Link eventKey="tab7">Creating an Invoices</Nav.Link></NavDropdown.Item>
                                                <NavDropdown.Item onClick={handleItemClick}><Nav.Link eventKey="tab8">calculation of the widthdrawal amount</Nav.Link></NavDropdown.Item>
                                                <NavDropdown
                                                    title="Pay"
                                                    show={openDropdown === "paymentss"}
                                                    onClick={(e) => toggleDropdown("pay", e)}
                                                    className="nested-dropdown-y"
                                                >
                                                    <NavDropdown.Item onClick={handleItemClick}><Nav.Link eventKey="tab11">How do i issues on invoice</Nav.Link></NavDropdown.Item>
                                                </NavDropdown>
                                            </NavDropdown>

                                            <Nav.Item><Nav.Link eventKey="tab11">Reference</Nav.Link></Nav.Item>
                                        </Nav>
                                    </div>
                                </div>
                                <SimpleBar className="panelcontentbox pt-0 get-api-keys-y">
                                    <Form className="siteformbg">
                                        <Tab.Content>
                                            <Tab.Pane eventKey="tab1">
                                                <h2 className="heading-title">Getting FAQ keys</h2>
                                                <Alert variant="info" className="securityalert">
                                                    <FontAwesomeIcon icon={faInfoCircle} className="me-2" />You need to release a different API key for accepting payment and making payouts
                                                </Alert>
                                                <h4 className="subhead">Payment API key</h4>
                                                <ul>
                                                    <li>1. Create Merchant or open Settings tab in merchant (step 2)</li>
                                                    <li>2. In Settings tab сopy Merchant ID. Enter the URL and Description fields and click Submit.</li>
                                                    <li>3. Confirm the domain using one of the following methods</li>
                                                    <li>4. Wait for the merchant's moderation</li>
                                                    <li>5. You will be able to copy API key and Merchant ID later</li>
                                                </ul>
                                                <h4 className="subhead">Payout API key</h4>
                                                <ul>
                                                    <li>1. Open the Settings section of your personal account</li>
                                                    <li>2. Bind two-factor authentication if you haven't already done it</li>
                                                    <li>3. Go to the - Business settings</li>
                                                    <li>4. Generate - Payout key (Remember withdrawals will be temporarily blocked for 24 hour after generate new payout API key)</li>
                                                    <li>5. Done!</li>
                                                </ul>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab2">
                                                <h2 className="heading-title">Request format</h2>
                                                <Form.Group className="form-group">
                                                    <Form.Label>EndPoint</Form.Label>
                                                    <InputGroup>
                                                        <Form.Control name="code" placeholder="https://api.test.com/" id="apikey" />
                                                        <div className="input-group-append">
                                                            <InputGroup.Text> <FontAwesomeIcon icon={faCopy} /> </InputGroup.Text>
                                                        </div>
                                                    </InputGroup>
                                                </Form.Group>
                                                <p>All requests must be sent via POST method in JSON format.</p>
                                                <p>Request must be signed</p>
                                                <h4 className="subhead">Authentication</h4>
                                                <p>The authentication process is carried out by sending 2 HTTP headers:</p>
                                                <SimpleBar className="table-responsive sitescroll">
                                                    <Table className="sitetable">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Definition</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>merchant</td>
                                                                <td>The merchants uuid, which you can find in the merchants personal account in the settings section.</td>
                                                            </tr>
                                                            <tr>
                                                                <td>sign</td>
                                                                <td>MD5 hash of the body of the POST request encoded in base64 and combined with your API key.</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </SimpleBar>
                                                <div className="copyapicodeb">
                                                    <p>Example of signature generation in php:</p>
                                                    <pre className="highlight plaintext">
                                                        <div className="tabrightbox">
                                                            <Button className="borderbtn btn-sm"><FontAwesomeIcon icon={faCopy} /> Copy</Button>
                                                        </div>
                                                        <code>
                                                            {`
$data = json_encode($data);
$sign = md5(base64_encode($data) . $API_KEY);        
                                `}
                                                        </code>
                                                    </pre>
                                                </div>
                                                <div className="copyapicodeb">
                                                    <p>If the request doesn’t require passing parameters in the body, then form a signature for an empty string:</p>
                                                    <pre className="highlight plaintext">
                                                        <div className="tabrightbox">
                                                            <Button className="borderbtn btn-sm"><FontAwesomeIcon icon={faCopy} /> Copy</Button>
                                                        </div>
                                                        <code>
                                                            {`
$sign = md5(base64_encode('') . $API_KEY);       
                                `}
                                                        </code>
                                                    </pre>
                                                </div>
                                                <Alert variant="danger" className="securityalert">
                                                    Different Key APIs are used to accept payments and payouts
                                                </Alert>
                                                <div className="copyapicodeb">
                                                    <p>Request example</p>

                                                    <pre className="highlight plaintext">
                                                        <div className="tabrightbox">
                                                            <Button className="borderbtn btn-sm"><FontAwesomeIcon icon={faCopy} /> Copy</Button>
                                                        </div>
                                                        <code>
                                                            {`
curl https://api.heleket.com/v1/payment/services \
  -X POST \
  -H 'merchant: 8b03432e-385b-4670-8d06-064591096795' \
  -H 'sign: f80fa426a89eb62bd53997326865d850' \
  -H 'Content-Type: application/json' \
  -d '{}'       
                                `}
                                                        </code>
                                                    </pre>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab3">
                                                <h2 className="heading-title">Getting started</h2>
                                                <h4 className="subhead">Selecting the type of integration</h4>
                                                <p>There are 2 types of integration</p>
                                                <h4>1. Invoice</h4>
                                                <p>This payment method is suitable for paying for goods with a specific amount.</p>
                                                <p>You can specify the currency, then the payer can select the cryptocurrency and network on the payment page.You can also specify the crypto-currency and network immediately, then a crypto-currency address will be generated and you can give it to the client.</p>
                                                <p>Once the client has paid, you will receive a notification - a webhook, which indicates the status, the payment amount and hash, as well as additional data (more details - Link )</p>
                                                <p>If the client didn’t pay, you will receive the cancel status.</p>
                                                <p>If the client sent the exact amount, you will receive a paid status.</p>
                                                <p>If the client sent a lower amount, you will receive the wrong_amount status.</p>
                                                <p>If the client sent a higher amount, you will receive the paid_over status.</p>
                                                <p>To allow the client to pay the rest, pass the parameter is_payment_multiple = true</p>
                                                <p>On the payment page, the client will be notified that there is a surcharge to be paid. If the client doesn't pay the rest of an amount, you will receive a webhook with the wrong_amount status, when the invoice expires.</p>

                                                <h4>2. Static wallet</h4>
                                                <p>Suitable for balance top-up</p>
                                                <p>You can create a static address in a specific currency and network. The address will be attached to the order_id</p>
                                                <p>All transactions sent to this address will be credited regardless of the amount.</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab4">
                                                <h2 className="heading-title">Creating an invoice</h2>
                                                <div className="copyapicodeb">
                                                    <p>Request example</p>
                                                    <pre className="highlight plaintext">
                                                        <div className="tabrightbox">
                                                            <Button className="borderbtn btn-sm"><FontAwesomeIcon icon={faCopy} /> Copy</Button>
                                                        </div>
                                                        <code>
                                                            {`
Post https://api.heleket.com/v1/payment
`}
                                                        </code>
                                                    </pre>
                                                </div>
                                                <h4>Request</h4>
                                                <p>Query parameters</p>
                                                <SimpleBar className="table-responsive sitescroll">
                                                    <Table className="sitetable">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Parameter type</th>
                                                                <th>Default value</th>
                                                                <th>Definition</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>amount</td>
                                                                <td>string</td>
                                                                <td></td>
                                                                <td>Amount to be paid.<br />If there are pennies in the amount, then send them with a separator. Example: 10.28</td>
                                                            </tr>
                                                            <tr>
                                                                <td>amount</td>
                                                                <td>string</td>
                                                                <td></td>
                                                                <td>Amount to be paid.<br />If there are pennies in the amount, then send them with a separator. Example: 10.28</td>
                                                            </tr>
                                                            <tr>
                                                                <td>amount</td>
                                                                <td>string</td>
                                                                <td></td>
                                                                <td>Amount to be paid.<br />If there are pennies in the amount, then send them with a separator. Example: 10.28</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </SimpleBar>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab5">
                                                <h2 className="heading-title">Generate a QR-code</h2>
                                                <p>You can generate a QR-code for a static wallet address or for an invoice address. Scanning it, the user will receive the address for depositing funds.</p>
                                                <h4>Generate a QR-code for the static wallet address</h4>
                                                <div className="copyapicodeb">
                                                    <p>Request example</p>
                                                    <pre className="highlight plaintext">
                                                        <div className="tabrightbox">
                                                            <Button className="borderbtn btn-sm"><FontAwesomeIcon icon={faCopy} /> Copy</Button>
                                                        </div>
                                                        <code>
                                                            {`
Post https://api.heleket.com/v1/wallet/qr
`}
                                                        </code>
                                                    </pre>
                                                </div>
                                                <h4>Request</h4>
                                                <p>Query parameters</p>
                                                <SimpleBar className="table-responsive sitescroll">
                                                    <Table className="sitetable">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Parameter type</th>
                                                                <th>Definition</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>wallet_address_uuid</td>
                                                                <td>string uuid	</td>
                                                                <td>uuid of a static wallet</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </SimpleBar>
                                                <div className="copyapicodeb">
                                                    <p>Request example</p>
                                                    <pre className="highlight plaintext">
                                                        <div className="tabrightbox">
                                                            <Button className="borderbtn btn-sm"><FontAwesomeIcon icon={faCopy} /> Copy</Button>
                                                        </div>
                                                        <code>
                                                            {`

curl  https://api.heleket.com/v1/wallet/qr \
-X POST \
-H 'merchant: 8b03432e-385b-4670-8d06-064591096795' \
-H 'sign: fe99035f86fa436181717b302b95bacff1' \
-H 'Content-Type: application/json' \
-d '{
    "wallet_address_uuid": "8b03432e-385b-4670-8d06-064591096795",
}'
`}
                                                        </code>
                                                    </pre>
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="tab6">
                                                <h2 className="heading-title">List</h2>
                                                <Alert variant="info" className="securityalert">
                                                    <FontAwesomeIcon icon={faInfoCircle} className="me-2" />Request should be sent via GET method
                                                </Alert>
                                                <div className="copyapicodeb">
                                                    <p>Request example</p>
                                                    <pre className="highlight plaintext">
                                                        <div className="tabrightbox">
                                                            <Button className="borderbtn btn-sm"><FontAwesomeIcon icon={faCopy} /> Copy</Button>
                                                        </div>
                                                        <code>
                                                            {`
Post /v1/exchange-rate/{currency}/list
`}
                                                        </code>
                                                    </pre>
                                                </div>
                                                <h4>Request</h4>
                                                <p>Query parameters</p>
                                                <SimpleBar className="table-responsive sitescroll">
                                                    <Table className="sitetable">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Definition</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Currency</td>
                                                                <td>Currency code</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </SimpleBar>
                                                <div className="copyapicodeb">
                                                    <p>Request example</p>
                                                    <pre className="highlight plaintext">
                                                        <div className="tabrightbox">
                                                            <Button className="borderbtn btn-sm"><FontAwesomeIcon icon={faCopy} /> Copy</Button>
                                                        </div>
                                                        <code>
                                                            {`
curl https://api.heleket.com/v1/exchange-rate/ETH/list
`}
                                                        </code>
                                                    </pre>
                                                </div>
                                                <h4>Response</h4>
                                                <p>Response parameters</p>
                                                <SimpleBar className="table-responsive sitescroll">
                                                    <Table className="sitetable">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Definition</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>from</td>
                                                                <td>From currency</td>
                                                            </tr>
                                                            <tr>
                                                                <td>to</td>
                                                                <td>To currency</td>
                                                            </tr>
                                                            <tr>
                                                                <td>course</td>
                                                                <td>Exchange rate</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </SimpleBar>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab7">
                                                <h2 className="heading-title">Balance</h2>
                                                <div className="copyapicodeb">
                                                    <p>Request example</p>
                                                    <pre className="highlight plaintext">
                                                        <div className="tabrightbox">
                                                            <Button className="borderbtn btn-sm"><FontAwesomeIcon icon={faCopy} /> Copy</Button>
                                                        </div>
                                                        <code>
                                                            {`
Post /v1/balance
`}
                                                        </code>
                                                    </pre>
                                                </div>
                                                <h4>Request</h4>
                                                <h4>Query parameters</h4>
                                                <p>No parameters</p>
                                                <h4>Response</h4>
                                                <p>Response parameters</p>
                                                <SimpleBar className="table-responsive sitescroll">
                                                    <Table className="sitetable">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Definition</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Balance</td>
                                                                <td>merchant / user</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </SimpleBar>
                                                <p>Response parameters</p>
                                                <SimpleBar className="table-responsive sitescroll">
                                                    <Table className="sitetable">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Definition</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>uuid</td>
                                                                <td>Wallet UUID</td>
                                                            </tr>
                                                            <tr>
                                                                <td>balance</td>
                                                                <td>Personal wallet balance</td>
                                                            </tr>
                                                            <tr>
                                                                <td>currency_code</td>
                                                                <td>Wallet currency_code</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </SimpleBar>
                                                <p>Personal</p>
                                                <SimpleBar className="table-responsive sitescroll">
                                                    <Table className="sitetable">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Definition</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>uuid</td>
                                                                <td>Wallet UUID</td>
                                                            </tr>
                                                            <tr>
                                                                <td>balance</td>
                                                                <td>Personal wallet balance</td>
                                                            </tr>
                                                            <tr>
                                                                <td>currency_code</td>
                                                                <td>Wallet currency_code</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </SimpleBar>
                                                <SimpleBar className="copyapicodeb">
                                                    <p>Response example</p>

                                                    <pre className="highlight plaintext">
                                                        <div className="tabrightbox">
                                                            <Button className="borderbtn btn-sm"><FontAwesomeIcon icon={faCopy} /> Copy</Button>
                                                        </div>
                                                        <code>
                                                            {`
{
    "state": 0,
    "result": [
        {
            "balance": {
                "merchant": [
                    {
                        "uuid": "abcdabcd-abcd-1234-1234-abcdabcdabcdabcd-abcd-1234-1234-abcdabcdabcdabcd-abcd-1234-1234-abcdabcdabcdabcd-abcd-1234-1234-abcdabcdabcdabcd-abcd-1234-1234-abcdabcdabcdabcd-abcd-1234-1234-abcdabcdabcdabcd-abcd-1234-1234-abcdabcdabcdabcd-abcd-1234-1234-abcdabcdabcdabcd-abcd-1234-1234-abcdabcdabcdabcd-abcd-1234-1234-abcdabcdabcdabcd-abcd-1234-1234-abcdabcd",
                        "balance": "0.00000000",
                        "currency_code": "ETH"
                    },
                    {
                        "uuid": "abcdabcd-abcd-1234-1234-abcdabcd",
                        "balance": "0.57000000",
                        "currency_code": "BTC"
                    },
                    {
                        "uuid": "abcdabcd-abcd-1234-1234-abcdabcd",
                        "balance": "23.57327446",
                        "currency_code": "TRX"
                    },
                    {
                        "uuid": "abcdabcd-abcd-1234-1234-abcdabcd",
                        "balance": "5.00000000",
                        "currency_code": "USDT"
                    },
                    {
                        "uuid": "abcdabcd-abcd-1234-1234-abcdabcd",
                        "balance": "10.00120000",
                        "currency_code": "DASH"
                    },
                    {
                        "uuid": "abcdabcd-abcd-1234-1234-abcdabcd",
                        "balance": "0.18500000",
                        "currency_code": "LTC"
                    }
                ],
                "user": [
                    {
                        "uuid": "abcdabcd-abcd-1234-1234-abcdabcd",
                        "balance": "0.40000000",
                        "currency_code": "BTC"
                    },
                    {
                        "uuid": "abcdabcd-abcd-1234-1234-abcdabcd",
                        "balance": "52.00000000",
                        "currency_code": "USDT"
                    },
                    {
                        "uuid": "abcdabcd-abcd-1234-1234-abcdabcd",
                        "balance": "0.00000000",
                        "currency_code": "DASH"
                    },
                    {
                        "uuid": "abcdabcd-abcd-1234-1234-abcdabcd",
                        "balance": "0.30000000",
                        "currency_code": "LTC"
                    },
                    {
                        "uuid": "abcdabcd-abcd-1234-1234-abcdabcd",
                        "balance": "27.00000000",
                        "currency_code": "TRX"
                    },
                    {
                        "uuid": "abcdabcd-abcd-1234-1234-abcdabcd",
                        "balance": "0.19000000",
                        "currency_code": "ETH"
                    }
                ]
            }
        }
    ]
}
`}
                                                        </code>
                                                    </pre>
                                                </SimpleBar>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab8">
                                                <h2 className="heading-title">Shortcodes of methods</h2>
                                                <Alert variant="info" className="securityalert">
                                                    <FontAwesomeIcon icon={faInfoCircle} className="me-2" />Supported currencies and networks
                                                </Alert>
                                                <SimpleBar className="table-responsive sitescroll">
                                                    <Table className="sitetable">
                                                        <thead>
                                                            <tr>
                                                                <th>Currency Code</th>
                                                                <th>Netwok Code</th>
                                                                <th>Description</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>USDC</td>
                                                                <td>arbitrum</td>
                                                                <td>Arbitrum USDC</td>
                                                            </tr>
                                                            <tr>
                                                                <td>USDC</td>
                                                                <td>arbitrum</td>
                                                                <td>Arbitrum USDC</td>
                                                            </tr>
                                                            <tr>
                                                                <td>USDC</td>
                                                                <td>arbitrum</td>
                                                                <td>Arbitrum USDC</td>
                                                            </tr>
                                                            <tr>
                                                                <td>USDC</td>
                                                                <td>arbitrum</td>
                                                                <td>Arbitrum USDC</td>
                                                            </tr>
                                                            <tr>
                                                                <td>USDC</td>
                                                                <td>arbitrum</td>
                                                                <td>Arbitrum USDC</td>
                                                            </tr>
                                                            <tr>
                                                                <td>USDC</td>
                                                                <td>arbitrum</td>
                                                                <td>Arbitrum USDC</td>
                                                            </tr>
                                                            <tr>
                                                                <td>USDC</td>
                                                                <td>arbitrum</td>
                                                                <td>Arbitrum USDC</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </SimpleBar>
                                                <div className="d-flex align-items-center">
                                                    <span className="t-red me-1">*</span>
                                                    <p className="mb-0">mandatory parameter</p>
                                                </div>
                                                <div className="copyapicodeb">
                                                    <p>Request example</p>

                                                    <pre className="highlight plaintext">
                                                        <div className="tabrightbox">
                                                            <Button className="borderbtn btn-sm"><FontAwesomeIcon icon={faCopy} /> Copy</Button>
                                                        </div>
                                                        <code>
                                                            <div className="">"curl https": <span className="t-green">"//api.heleket.com/v1/payout/calc \",</span>
                                                            </div>
                                                            <div className="">-X POST \</div>
                                                            <div className="">- H  <span className="t-red">"merchant: 8b03432e-385b-4670-8do6-064591096795 \",</span>
                                                            </div>
                                                            <div className="">- H  <span className="t-red">"sign: 8b03432e-385b-4670-8do6-064591096795 \",</span>
                                                            </div>
                                                            <div className="">- H  <span className="t-red">"Content-Type: application.json \",</span>
                                                            </div>
                                                            <div className="">- d
                                                                <span className="t-red">'{` 
    "amount": "5",
    "address": "8b03432e-385b-4670-8do6-064591096795",
    "currency": "USDT",
    "network": "TRON",
    "network": "TRON",
    "is_subtract": "1",                                                           
    } `
                                                                }'</span>
                                                            </div>
                                                        </code>
                                                    </pre>
                                                </div>


                                            </Tab.Pane>

                                            <Tab.Pane eventKey="tab11">
                                                <h2 className="heading-title">How do i issues on invoice</h2>
                                                <div className="d-flex align-items-center">
                                                    <span className="t-red me-1">*</span>
                                                    <p className="mb-0">mandatory parameter</p>
                                                </div>
                                                <div className="copyapicodeb">
                                                    <p>Request example</p>

                                                    {/* <pre className="highlight plaintext invoiceise-y"> */}
                                                    <Image src="assets/images/firefox-test.png" width={100} height={100} alt="logo" className="invoiceissueimg">
                                                    </Image>
                                                    {/* </pre> */}
                                                </div>
                                            </Tab.Pane>

                                        </Tab.Content>
                                    </Form>
                                </SimpleBar>
                            </div>
                        </Tab.Container>
                    </Container>
                </section>
            </article>
            <Homefooter />
        </>
    )
}

export default Apidoc