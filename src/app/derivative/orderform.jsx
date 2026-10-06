import React, { useState, useEffect } from 'react'
import { Table, Form, InputGroup, Nav, Tab, Button, Modal, Image, FormGroup, FormCheck, Row, Col, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faInfoCircle, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Slider from './RangeSlider';
import Slider2 from './RangeSlider2';
import PriceSlider from './Slider';

const orderform = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [showModal5, setShowModal5] = useState(false);
    const [showModal8, setShowModal8] = useState(false);

    // transfer modal
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);
    // cross modal
    const handleClose2 = () => setShowModal2(false);
    const handleShow2 = () => setShowModal2(true);
    // leverage modal
    const handleClose3 = () => setShowModal3(false);
    const handleShow3 = () => setShowModal3(true);
    // limit modal
    const handleClose4 = () => setShowModal4(false);
    const handleShow4 = () => setShowModal4(true);
    // market modal
    const handleClose5 = () => setShowModal5(false);
    const handleShow5 = () => setShowModal5(true);

    const handleClose8 = () => setShowModal8(false);
    const handleShow8 = () => setShowModal8(true);

    // leveragescript 

    const [leverage, setLeverage] = useState(14);

    const handleMinusClick = () => {
        setLeverage(leverage - 1);
    };

    const handlePlusClick = () => {
        setLeverage(leverage + 1);
    };

    function buyTab(event) {
        const element1 = document.getElementById("tradepage");
        element1?.classList.add("buyorderformactive1");
        element1?.classList.remove("sellorderformactive1");
        event.target.classList.add("active");

        const tabFirst = document.getElementById("sellTab");
        tabFirst?.classList.remove("active");
    }

    function sellTab(event) {
        const element2 = document.getElementById("tradepage");
        element2?.classList.add("sellorderformactive1");
        element2?.classList.remove("buyorderformactive1");
        event.target.classList.add("active");

        const tabSecond = document.getElementById("buyTab");
        tabSecond?.classList.remove("active");
    }

    function closeTab(event) {
        const element3 = document.getElementById("tradepage");
        element3?.classList.remove("sellorderformactive1");
        element3?.classList.remove("buyorderformactive1");

        const buyclose = document.getElementById("buyclose");
        buyclose?.classList.remove("active");

        const sellclose = document.getElementById("sellclose");
        sellclose?.classList.remove("active");
    }

        useEffect(() => {
            document.body.classList.add('derivative');
    
            return () => {
                document.body.classList.remove("derivative");
            };
        });

    return (
        <div className="orderform griddragoption" id="orderformtabshow">
            <div className="orderformbox">
                <div className="orderformbg">
                    {/* <div className="buyselltabbg">
                        <Nav variant="pills" className="orderfrmtab buyselltab">
                            <Nav.Item><Nav.Link id="buyTab" onClick={buyTab} className="active">Buy</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link id="sellTab" onClick={sellTab}>Sell</Nav.Link></Nav.Item>
                        </Nav>
                    </div> */}
                </div>
                <div className="futuretab furetab-y">
                    <ul className="nav nav-tabs orderfrmtab border-0" role="tablist">
                        <Nav.Item><Nav.Link onClick={handleShow2}>Cross</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link onClick={handleShow3}>20x</Nav.Link></Nav.Item>
                        {/* <li className="nav-item"><a className="livepricet btncross" href="#" data-bs-toggle="modal"
                            data-bs-target="#crossmodal">Cross</a></li>
                        <li className="nav-item"><a className="livepricet btncross" href="#" data-bs-toggle="modal"
                            data-bs-target="#leveragemodal">20x</a></li> */}
                    </ul>
                </div>
                <div className="clostbuytab" onClick={closeTab}>
                    <a><FontAwesomeIcon icon={faTimes} /></a>
                </div>
                <ul className="ruleslist">
                    <li><a><FontAwesomeIcon icon={faInfoCircle} />
                        <div className="none rulesnotes">
                            <Table className="sitetable" id="table7">
                                <tbody>
                                    <tr>
                                        <td>Minimum Trade Amount : </td>
                                        <td>0.000001 ETH</td>
                                    </tr>
                                    <tr>
                                        <td>Min Price Movement : </td>
                                        <td>0.000001 ETH</td>
                                    </tr>
                                    <tr>
                                        <td>Minimum Order Size : </td>
                                        <td>0.000001 ETH</td>
                                    </tr>
                                    <tr>
                                        <td>Maximum Market Order Amount : </td>
                                        <td>0.000001 ETH</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </a>
                    </li>
                </ul>
                <Tab.Container defaultActiveKey="limit">
                    <Nav variant="pills" className="orderfrmtab limitabbg">
                        <Nav.Item><Nav.Link eventKey="limit">Limit</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="market">Market</Nav.Link></Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="limit">
                            <div className="orderformbg1">
                                <div className="buyorderform">
                                    <Form className="siteformbg">
                                        <div className="balancewlt">
                                            <h6 className="h6">
                                                <span className="avmodal" onClick={handleShow1}>Available <span className="">0.0000000 USDT</span> <i className="fa fa-exchange"></i></span>

                                                <span className="pull-right arrowmdlclickdropdown" onClick={handleShow8}>Calculator<i className="fa fa-plus-square-o ms-2"></i></span>
                                            </h6>
                                        </div>
                                        <Form.Group className="form-group">
                                            <Form.Label>Price</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="0.0000" id='buylimit_futuresprice' />
                                                <InputGroup.Text className="t-blue rounded-0" id='limitlast'>Last</InputGroup.Text>
                                                <InputGroup.Text id='limitusdt'>USDT</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>

                                        <Form.Group className="form-group">
                                            <Form.Label>Size</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="0.0000" id='buylimit_futuressize' />
                                                <InputGroup.Text>
                                                    <Form.Control as="select" id='limitcurrency'>
                                                        <option>USDT</option>
                                                        <option>BTC</option>
                                                    </Form.Control>
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Slider />

                                        <FormGroup className="checkboxlabelbg">
                                            <InputGroup>
                                                <FormCheck type="checkbox" label="TP/SL" id='tpsl' />
                                                <FormCheck type="checkbox" label="Reduce-Only" id='reduceonly' />
                                            </InputGroup>
                                        </FormGroup>
                                        <Form.Group className="form-group">
                                            <Form.Label>Take Profit</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="0.0000" id='take_profit' />
                                                <InputGroup.Text id=''>Last Price</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Size</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="0.0000" id='stop_loss' />
                                                <InputGroup.Text id=''>Last Price</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="form-group m-0">
                                            <Table className="sitetable table border-0" id='costtable'>
                                                <tbody>
                                                    <tr>
                                                        <td><span className="t-gray">Cost</span> : 0.00 USD</td>
                                                        <td className='text-end'><span className="t-gray">Cost</span> : 0.00 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-gray">Max</span> : 0.00 BTC </td>
                                                        <td className='text-end'><span className="t-gray">Max</span> : 0.00 BTC </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Form.Group>
                                        <Row className="form-group">
                                            <Col md={6}>
                                                <Button className='btn-block sitebtn green-btn' id='buylimit_futures_order' onClick={handleShow4}>
                                                    Buy / Long
                                                </Button>
                                            </Col>
                                            <Col md={6}>
                                                <Button className='btn-block sitebtn red-btn' id='selllimit_futures_order' onClick={handleShow4}>
                                                    Sell / Short
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="market">
                            <div className="orderformbg1">
                                <div className="buyorderform">
                                    <Form className="siteformbg">
                                        <div className="balancewlt">
                                            <h6 className="h6">
                                                <span className="avmodal" onClick={handleShow1}>Available <i className="fa fa-plus-square-o"></i></span>
                                                <span className="pull-right">0.0000000 USDT</span>
                                            </h6>
                                        </div>
                                        <Form.Group className="form-group">
                                            <Form.Label>Size</Form.Label>
                                            <InputGroup>
                                                <Form.Control placeholder="0.0000" id='buymarket_futuressize' />
                                                <InputGroup.Text>
                                                    <Form.Control as="select" id='marketcurrency'>
                                                        <option>USDT</option>
                                                        <option>BTC</option>
                                                    </Form.Control>
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Slider2 />
                                        <FormGroup className="checkboxlabelbg">
                                            <InputGroup>
                                                <FormCheck type="checkbox" label="TP/SL" id='markettpsl' />
                                                <FormCheck type="checkbox" label="Reduce-Only" id='marketreduceonly' />
                                            </InputGroup>
                                        </FormGroup>
                                        <Form.Group className="form-group m-0">
                                            <Table className="sitetable table border-0" id='marketcost'>
                                                <tbody>
                                                    <tr>
                                                        <td><span className="t-gray">Cost</span> : 0.00 USD</td>
                                                        <td className='text-end'><span className="t-gray">Cost</span> : 0.00 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td><span className="t-gray">Max</span> : 0.00 BTC </td>
                                                        <td className='text-end'><span className="t-gray">Max</span> : 0.00 BTC </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Form.Group>
                                        <Row className="form-group">
                                            <Col md={6}>
                                                <Button className='btn-block sitebtn green-btn' id='buymarket_futures_order'>
                                                    Buy / Long
                                                </Button>
                                            </Col>
                                            <Col md={6}>
                                                <Button className='btn-block sitebtn red-btn' id='sellmarket_futures_order'>
                                                    Sell / Short
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>

            </div>
            <Modal show={showModal8} onHide={handleClose8} className='modalbgt authmodal pnlmodalform pnl-cal-y' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        BTCUSDT
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="pt-2">
                    <Tab.Container defaultActiveKey="pnlform">
                        <div className="innerpagetab historytab">
                            {/* <Nav variant="pills" className="tabbanner">
                                <Nav.Item><Nav.Link eventKey="pnlform" id='pnlform'>PnL</Nav.Link></Nav.Item>
                            </Nav> */}
                        </div>
                        <Tab.Content className="mt-3">
                            <Tab.Pane eventKey="pnlform">
                                <Form className='siteformbg'>
                                    <div className="d-flex lngshrtflex">

                                        <Tab.Container defaultActiveKey="buy">
                                            <div className="innerpagetab historytab">
                                                <Nav variant="pills" className="tabbanner">
                                                    <Nav.Item><Nav.Link eventKey="buy" id='pnlform'>Buy</Nav.Link></Nav.Item>
                                                    <Nav.Item><Nav.Link eventKey="sell" id='pnlform'>Sell</Nav.Link></Nav.Item>
                                                </Nav>
                                                <Tab.Content className="mt-3">
                                                    <Tab.Pane eventKey="buy">
                                                        <Form.Group>
                                                            <InputGroup className="mb-3 mt-3">
                                                                <InputGroup.Text>
                                                                    <span className='adjusticon'>
                                                                        <FontAwesomeIcon icon={faMinus} />
                                                                    </span>
                                                                </InputGroup.Text>
                                                                <Form.Control className="text-center" placeholder="14x" />
                                                                <InputGroup.Text>
                                                                    <span className='adjusticon'>
                                                                        <FontAwesomeIcon icon={faPlus} />
                                                                    </span>
                                                                </InputGroup.Text>
                                                            </InputGroup>
                                                        </Form.Group>
                                                        <PriceSlider />
                                                        <p>Maximum position at current leverage : 0 USDT</p>
                                                        <Form.Group className="form-group">
                                                            <InputGroup>
                                                                <Form.Control name="code" placeholder="Entry Price" id="entry_price" />
                                                                <InputGroup.Text>USDT</InputGroup.Text>
                                                            </InputGroup>
                                                        </Form.Group>
                                                        <Form.Group className="form-group">
                                                            <InputGroup>
                                                                <Form.Control name="code" placeholder="Exit Price" id="exit_price" />
                                                                <InputGroup.Text>USDT</InputGroup.Text>
                                                            </InputGroup>
                                                        </Form.Group>
                                                        <Form.Group className="form-group">
                                                            <InputGroup>
                                                                <Form.Control name="code" placeholder="Quantity" id="token_quantity" />
                                                                <InputGroup.Text>BTC</InputGroup.Text>
                                                            </InputGroup>
                                                        </Form.Group>
                                                        <div className="text-center">
                                                            <Button type="button" className="sitebtn w-100" id='calculate'>Calculate</Button>
                                                        </div>

                                                    </Tab.Pane>
                                                </Tab.Content>
                                                <Tab.Content className="mt-3">
                                                    <Tab.Pane eventKey="sell">
                                                        <Form.Group>
                                                            <InputGroup className="mb-3 mt-3">
                                                                <InputGroup.Text>
                                                                    <span className='adjusticon'>
                                                                        <FontAwesomeIcon icon={faMinus} />
                                                                    </span>
                                                                </InputGroup.Text>
                                                                <Form.Control className="text-center" placeholder="14x" />
                                                                <InputGroup.Text>
                                                                    <span className='adjusticon'>
                                                                        <FontAwesomeIcon icon={faPlus} />
                                                                    </span>
                                                                </InputGroup.Text>
                                                            </InputGroup>
                                                        </Form.Group>
                                                        <PriceSlider />
                                                        <p>Maximum position at current leverage : 0 USDT</p>
                                                        <Form.Group className="form-group">
                                                            <InputGroup>
                                                                <Form.Control name="code" placeholder="Entry Price" id="entry_price" />
                                                                <InputGroup.Text>USDT</InputGroup.Text>
                                                            </InputGroup>
                                                        </Form.Group>
                                                        <Form.Group className="form-group">
                                                            <InputGroup>
                                                                <Form.Control name="code" placeholder="Exit Price" id="exit_price" />
                                                                <InputGroup.Text>USDT</InputGroup.Text>
                                                            </InputGroup>
                                                        </Form.Group>
                                                        <Form.Group className="form-group">
                                                            <InputGroup>
                                                                <Form.Control name="code" placeholder="Quantity" id="token_quantity" />
                                                                <InputGroup.Text>BTC</InputGroup.Text>
                                                            </InputGroup>
                                                        </Form.Group>
                                                        <div className="text-center">
                                                            <Button type="button" className="sitebtn w-100" id='calculate'>Calculate</Button>
                                                        </div>

                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </div>
                                        </Tab.Container>


                                        <div className="lightgraybg">
                                            <p className="mb-1"><b>Results</b></p>
                                            <Form.Group className="form-group m-0">
                                                <Table className="sitetable table border-0" id='costtable'>
                                                    <tbody>
                                                        <tr>
                                                            <td><span className="t-gray">Initial Margin</span></td>
                                                            <td className='text-end'>0.02563 USDT</td>
                                                        </tr>
                                                        <tr>
                                                            <td><span className="t-gray">Pnl</span></td>
                                                            <td className='text-end'>0.02563 USDT</td>
                                                        </tr>
                                                        <tr>
                                                            <td><span className="t-gray">ROI</span></td>
                                                            <td className='text-end'>0.02563 USDT</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Form.Group>
                                            <Form.Group className="form-group m-0 frm-grp-nots-y">
                                                <Table className="sitetable table border-0" id='costtable'>
                                                    <tbody>
                                                        <tr className="not-y">
                                                            <td className="text-wrap" > <p className="mb-1"><b>Notes</b></p><p>A derivative is the rate at which a function changes with respect to a variable.
                                                                It shows how fast one quantity changes when another quantity changes.</p></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Form.Group>
                                        </div>
                                    </div>
                                </Form>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Modal.Body>
            </Modal>
            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Transfer
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group">
                            <Form.Label>From</Form.Label>
                            <Form.Select id='spot' className='form-control'>
                                <option>Spot</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="form-group form-group exchangeicon">
                            <Form.Label>To</Form.Label>
                            <div className="arrowhead"><Image src="assets/images/exchangearrow.png" alt='icon' /></div>
                            <Form.Select id='to' className='form-control'>
                                <option>Futures</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>Coin</Form.Label>
                            <Form.Select id='coin' className='form-control'>
                                <option>USDT Tether</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="form-group formtabrightbox">
                            <Form.Label>Amount</Form.Label>
                            <div className="text-end tabrightbox">0 in order / 0 available</div>
                            <InputGroup className="mb-3">
                                <Form.Control name="code" />
                                <InputGroup.Text id="basic-addon2">Get Code</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <p className="transnotes text-center">Transfers between Spot and Futures are considered internal and completely free of charge. These transactions are executed instantly, so you can move your funds seamlessly.</p>
                        <div className="text-center mt-3">
                            <Button type="button" className="sitebtn">Transfer</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={showModal2} onHide={handleClose2} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        BTCUSD Futures Margin Mode
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <div className="margincheck">
                            <FormGroup className="mcbox mb-3 active">
                                <FormCheck type="radio" id="flexRadioDefault1" name="flexRadioDefault" defaultChecked>
                                    <FormCheck.Label className="custom-control overflow-checkbox">
                                        <FormCheck.Input className="overflow-control-input" />
                                        <span className="ck-text">Cross Margin Mode</span>
                                    </FormCheck.Label>
                                    <p className="content pt-2">
                                        All cross positions under the same margin asset share the same asset cross margin balance. In the event of liquidation, your assets’ full margin balance along with any remaining open positions under the asset may be forfeited.
                                    </p>
                                </FormCheck>
                            </FormGroup>
                            <FormGroup className="mcbox">
                                <FormCheck type="radio" id="flexRadioDefault2" name="flexRadioDefault">
                                    <FormCheck.Label className="custom-control overflow-checkbox">
                                        <FormCheck.Input className="overflow-control-input" />
                                        <span className="ck-text">Isolated Margin Mode</span>
                                    </FormCheck.Label>
                                    <p className="content pt-2">
                                        Manage your risk on individual positions by restricting the amount of margin allocated to each. If the margin ratio of a position reaches 100%, the position will be liquidated. Margin can be added or removed from positions using this mode.
                                    </p>
                                </FormCheck>
                            </FormGroup>
                            <div className="text-center">
                                <Button type="button" className="sitebtn" id='crosssubmit'>Submit</Button>
                            </div>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={showModal3} onHide={handleClose3} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Adjust Leverage
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <FormGroup>
                            <Form.Label>Leverage</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>
                                    <span className='adjusticon' onClick={handleMinusClick} id='minus'>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </span>
                                </InputGroup.Text>
                                <Form.Control className="text-center" placeholder={`${leverage}x`} id='leverage' />
                                <InputGroup.Text>
                                    <span className='adjusticon' onClick={handlePlusClick} id='plus'>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </span>
                                </InputGroup.Text>
                            </InputGroup>
                        </FormGroup>
                        <p className="text-center">Maximum position at current leverage: 5,000,000 USD</p>
                        <div className="text-center">
                            <Button type="button" className="sitebtn" id='leveragesubmit'>Submit</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            {/* ftlimit_confirmbox */}
            <Modal show={showModal4} onHide={handleClose4} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Check and confirm your order
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <FormGroup>
                            <p className="content">Type : <span className="pull-right">xxxx</span></p>
                            <p className="content">Price : <span className="pull-right">xxxx</span></p>
                            <p className="content">Volume : <span className="pull-right">xxxx</span></p>
                            <p className="content">Leverage : <span className="pull-right">xxxx</span></p>
                        </FormGroup>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="btn borderbtn" id="backlimit_btn">Cancel</Button>
                            <Button type="button" className="btn sitebtn" id="ft_confirm_order">Confirm</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            {/* ftmarket_confirmbox */}
            <Modal show={showModal5} onHide={handleClose5} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Check and confirm your order
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <FormGroup>
                            <p className="content">Type : <span className="pull-right">xxxx</span></p>
                            <p className="content">Price : <span className="pull-right">xxxx</span></p>
                            <p className="content">Volume : <span className="pull-right">xxxx</span></p>
                            <p className="content">Leverage : <span className="pull-right">xxxx</span></p>
                        </FormGroup>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="btn borderbtn" id="backlimit_btn">Cancel</Button>
                            <Button type="button" className="btn sitebtn" id="ft_confirm_order">Confirm</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>


    )
}

export default orderform