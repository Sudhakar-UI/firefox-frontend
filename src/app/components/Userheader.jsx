import React, { useEffect, useState, useRef } from "react";
import Link from 'next/link';
import { Container, Navbar, Nav, Image, NavDropdown, Button, Modal, Form, Table } from 'react-bootstrap';
import { usePathname } from 'next/navigation'
import '../../../public/assets/css/user.css';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faEye, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Userheader = () => {

  const pathname = usePathname()

  useEffect(() => {
    document.body.classList.add('userpanelpage');

    return () => {
      document.body.classList.remove("userpanelpage");
    };
  });

  const sidebarCollapse = () => {
    const element = document.querySelector('#leftsidemenu');
    const element1 = document.querySelector('#backgroundoverlay');

    if (window.innerWidth <= 1080) {
      if (element) {
        element.classList.add('active');
      }
      if (element1) {
        element1.classList.add('active');
      }
      document.body.classList.add('pagewrapperbox');
    } else {
      if (element) {
        element.classList.remove('active');
      }
      if (element1) {
        element1.classList.remove('active');
      }
      document.body.classList.remove('pagewrapperbox');
    }
  };

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleDropdownToggle = (isOpen) => {
    setIsSubmenuOpen(isOpen);
  };

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const isDesktop = () => window.innerWidth >= 280;

  const handleMouseEnter = (key) => {
    if (isDesktop()) {
      setActiveDropdown(key);
    }
  };

  const handleMouseLeave = (e) => {
    if (!isDesktop()) return;

    const submenuWrapper = document.querySelector('.submenu-open-active');

    // Check if mouse is moving into submenu
    if (submenuWrapper && submenuWrapper.contains(e.relatedTarget)) {
      return;
    }

    setActiveDropdown(null);
    setActiveSubmenu(null);
  };

  const handleSubmenuEnter = (submenuKey) => {
    if (isDesktop()) {
      setActiveSubmenu(submenuKey);
    }
  };

  const handleSubmenuLeave = () => {
    if (isDesktop()) {
      setActiveSubmenu(null);
    }
  };

  const handleDropdownClick = (key) => {
    if (!isDesktop()) {
      setActiveDropdown(prev => (prev === key ? null : key));
    }
  };

  const handleSubmenuClick = (e, submenuKey, parentKey) => {
    if (!isDesktop()) {
      e.stopPropagation(); // prevent bubbling to parent
      setActiveDropdown(parentKey); // ⬅️ ensure parent stays open
      setActiveSubmenu(prev => (prev === submenuKey ? null : submenuKey));
    }
  };

  const [showModal1, setShowModal1] = useState(false);
  const handleShowModal1 = () => setShowModal1(true);
  const handleCloseModal1 = () => setShowModal1(false);

  const [showModal2, setShowModal2] = useState(false);
  const handleShowModal2 = () => setShowModal2(true);
  const handleCloseModal2 = () => setShowModal2(false);

  const handleThemeChange = (e) => {
    const x = `${e.clientX}px`;
    const y = `${e.clientY}px`;

    document.body.style.setProperty("--x", x);
    document.body.style.setProperty("--y", y);

    document.body.classList.add("theme-transition");

    setTimeout(() => {
      document.body.classList.toggle("nightmode");
    }, 100);

    setTimeout(() => {
      document.body.classList.remove("theme-transition");
    }, 700);
  };

  function nightMode() {
    document.body.classList.add('nightmode');
    var element = document.getElementById("daymode");
    element?.classList.remove("activemode");
    var element1 = document.getElementById("nightmode");
    element1?.classList.add("activemode");
  }

  function dayMode() {
    document.body.classList.remove('nightmode');
    var element2 = document.getElementById("daymode");
    element2?.classList.add("activemode");
    var element3 = document.getElementById("nightmode");
    element3?.classList.remove("activemode");

  }


  const [showsDropdown, setShowsDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggles = (isOpen) => {
    setShowsDropdown(isOpen);
  };

  const submenuClose = () => {
    setShowsDropdown(false); // This closes the dropdown
  };

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  const [showssDropdown, setShowssDropdown] = useState(false);
  const dropdownsRef = useRef(null);

  const handleToggless = (isOpen) => {
    setShowssDropdown(isOpen);
  };

  const submenusClose = () => {
    setShowssDropdown(false); // This closes the dropdown
  };

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownsRef.current &&
        !dropdownsRef.current.contains(event.target)
      ) {
        setShowssDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div>
      {/* <div className={`text-center text-dark ${pathname === "/demotrade" ? "d-block" : "d-none"}`}>
        <p className="content m-0">
          This is a demo trading platform. No real funds are used.
        </p>
      </div> */}
      <header className="headermenu">
        {/* <Navbar expand="lg" className={`headbg uheadbg ${pathname === "/demotrade" ? "demo-trade-y" : ""}`}  */}
        <Navbar expand="lg" className={`headbg uheadbg ${pathname === "/demotrade" ? "demo-trade-y" : ""}`} >

          <Container>
            <div className="mobiletoggle">
              <Button type="button" onClick={sidebarCollapse} className="btn sidebtntoggle">
                <Image src="assets/images/menubar.svg" width={100} height={57} alt="logo" />
              </Button>
            </div>
            <Navbar.Brand>
              <Link href="/">
                <Image src="/assets/images/logo.png" width={100} height={57} className="logo lightthemeicon" alt="logo" />
                <Image src="/assets/images/logo-dark.png" width={100} height={57} className="logo darkthemeicon" alt="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navbar-nav leftheadbg">
                <NavDropdown title="Trade" id="trade">
                  <NavDropdown.Item as={Link} href="/trade" className={`${pathname === '/trade' ? 'active' : ''}`}>
                    <div className="tableicon"><span><span className="iconboxbg"><Image src="assets/images/spoticon.svg" alt="icon" width={100} height={100} /></span></span> <span>Spot<br /><small className="t-gray">Buy and Sell crypto with ease</small></span></div>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/p2poverview" className={`${pathname === '/p2poverview' ? 'active' : ''}`}>
                    <div className="tableicon"><span><span className="iconboxbg"><Image src="assets/images/p2p.svg" alt="icon" width={100} height={100} /></span></span> <span>P2P <span className="alink comig-soon-y">(Coming soon)</span><br /><small className="t-gray">Buy and sell crypto via P2P marketplace</small></span></div>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/spot-copy-trade" className={`${pathname === '/spot-copy-trade' ? 'active' : ''}`}>
                    <div className="tableicon"><span><span className="iconboxbg"><Image src="assets/images/copy-trade-icon.svg" alt="icon" width={100} height={100} /></span></span> <span>Copy Trade <span className="alink comig-soon-y">(Coming soon)</span><br /><small className="t-grayc">Automatically copy trades from top-performing traders</small></span></div>
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Derivatives" id="derivativeslink">
                  <NavDropdown.Item as={Link} href="/derivative" className={`${pathname === '/derivative' ? 'active' : ''}`}>
                    <div className="tableicon"><span><span className="iconboxbg"><Image src="assets/images/derivativeicon.svg" alt="icon" width={100} height={100} /></span></span> <span>Futures<br /><small className="t-gray">Trade futures contracts in USDT</small></span></div>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/perpetual" className={`${pathname === '/perpetual' ? 'active' : ''}`}>
                    <div className="tableicon"><span><span className="iconboxbg"><Image src="assets/images/perpetual.svg" alt="icon" width={100} height={100} /></span></span> <span>USD@M-Futures<br /><small className="t-gray">Trade futures contracts, settled in USDC or coin</small></span></div>
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Item><Link href="/dashboard" id="dashboardlink" className={`nav-link ${pathname === '/dashboard' ? 'active' : ''}`}>Overview </Link></Nav.Item>
                <NavDropdown title="Personal" id="assetsdrp" className="walletdropblnce" show={activeDropdown === "personalwallet"} onMouseEnter={() => handleMouseEnter("personalwallet")} onMouseLeave={handleMouseLeave} onClick={() => handleDropdownClick("personalwallet")}>
                  <NavDropdown.Item as={Link} href="/personalwallet" id="walletlink" className={`${pathname === '/personalwallet' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/overviewicon.svg" alt="icon" width={100} height={100} /></span>Overview</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/personalsend" id="withdrawlink" className={`${pathname === '/personalsend' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/sendicon.svg" alt="icon" width={100} height={100} /></span>Send</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/personalreceive" id="depositlink" className={`${pathname === '/personalreceive' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/receiveicon.svg" alt="icon" width={100} height={100} /></span>Receive</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/personalconvert" id="convertlink" className={`${pathname === '/personalconvert' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/converticon.svg" alt="icon" width={100} height={100} /></span>Convert</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/personaltransfer" id="transferlink" className={`${pathname === '/personaltransfer' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/transfericon.svg" alt="icon" width={100} height={100} /></span>Transfer</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Business" id="assetsdrp" className="walletdropblnce" show={activeDropdown === "businesswallet"} onMouseEnter={() => handleMouseEnter("businesswallet")} onMouseLeave={handleMouseLeave} onClick={() => handleDropdownClick("businesswallet")}>
                  <NavDropdown.Item as={Link} href="/businesswallet" id="walletlink" className={`${pathname === '/businesswallet' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/overviewicon.svg" alt="icon" width={100} height={100} /></span>Overview</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/merchant" id="merchantlink" className={`${pathname === '/merchant' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/merchanticon.svg" alt="icon" width={100} height={100} /></span>Merchants</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/businesssend" id="withdrawlink" className={`${pathname === '/businesssend' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/sendicon.svg" alt="icon" width={100} height={100} /></span>Send</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/businesstransfer" id="transferlink" className={`${pathname === '/businesstransfer' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/transfericon.svg" alt="icon" width={100} height={100} /></span>Transfer</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="History" id="assetsdrp" className="walletdropblnce" show={activeDropdown === "History"} onMouseEnter={() => handleMouseEnter("History")} onMouseLeave={handleMouseLeave} onClick={() => handleDropdownClick("History")} >
                  <NavDropdown.Item as={Link} href="/sendhistory" id="withdrawlink" className={`${pathname === '/sendhistory' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/sendicon.svg" alt="icon" width={100} height={100} /></span>Send History</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/spothistory" id="spotlink" className={`${pathname === '/spothistory' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/spot.svg" alt="icon" width={100} height={100} /></span>Spot History</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/featureshistory" id="featurelink" className={`${pathname === '/featureshistory' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/features.svg" alt="icon" width={100} height={100} /></span>Features History</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/transhistory" id="transferlink" className={`${pathname === '/transferhistory' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/transferhistory.svg" alt="icon" width={100} height={100} /></span>Transfer History</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Earn" id="p2p" className="walletdropblnce" show={activeDropdown === "earn"} onMouseEnter={() => handleMouseEnter("earn")} onMouseLeave={handleMouseLeave} onClick={() => handleDropdownClick("earn")} >
                  <NavDropdown.Item as={Link} href="/saving" id="savinglink" className={`${pathname === '/saving' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/savings.svg" alt="icon" width={100} height={100} /></span>Earn Overview</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/earnhistory" id="currentholdinglink" className={`${pathname === '/earnhistory' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/currentholding.svg" alt="icon" width={100} height={100} /></span>Current Holding
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/hostorical" id="hostorical" className={`${pathname === '/hostorical' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/hostoricalholding.svg" alt="icon" width={100} height={100} /></span>Hostorical Holding</NavDropdown.Item>
                </NavDropdown>

                {/* <Nav.Item><Link href="/p2poverview" id="p2p" className={`nav-link ${pathname === '/p2poverview' ? 'active' : ''}`}>P2P</Link></Nav.Item> */}

              </Nav>
              <Nav className="navbar-nav rightheadbg ms-auto">
                <NavDropdown title={<div className="pull-left"><Image src="assets/images/bell.svg" className="menuicon" alt="user" width={100} height={57} /><span className="notifycunticon">20</span></div>} id="basic-nav-dropdown" className="notifyicon">
                  <NavDropdown.Item className="userprofiledrop" as={Link} href="/support">
                    <p style={{ background: "none" }}>Notifications</p>
                  </NavDropdown.Item>
                  <SimpleBar className="chat-notification">
                    <NavDropdown.Item as={Link} href="/support"><span className="nav-dot-y"></span>Test Message<br /><small className="ms-3">July 30, 2025</small><span className="righticon">
                      <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/support"><span className="nav-dot-grey"></span>Test Message<br /><small className="ms-3">July 30, 2025</small><span className="righticon">
                      <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/support"><span className="nav-dot-y"></span>Test Message<br /><small className="ms-3">July 30, 2025</small><span className="righticon">
                      <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/support"><span className="nav-dot-grey"></span>Test Message<br /><small className="ms-3">July 30, 2025</small><span className="righticon">
                      <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/support"><span className="nav-dot-y"></span>Test Message<br /><small className="ms-3">July 30, 2025</small><span className="righticon">
                      <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                    </NavDropdown.Item>
                    <Table className="sitetable mb-0">
                      <tbody>
                        <tr className="nodata">
                          <td>
                            <Image src="assets/images/notifydata.svg" width={50} height={50} alt="nodata" />No data found

                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </SimpleBar>
                  <hr />
                  <div className="text-center mb-2">
                    {/* <Link href="/notifications" className="borderbtn btn-sm">View all</Link> */}
                    <Link href="/notifications" className="viewallnoti-y">View all notifications</Link>
                  </div>
                </NavDropdown>
                <Nav.Item className="modebg">
                  <Link href="#" className="nav-link modeicon daymodeicon activemode" id="daymode" onClick={(e) => {
                    e.preventDefault();
                    handleThemeChange(e);
                    dayMode();
                  }}><Image src="assets/images/sun.svg" width={20} height={20} alt="icon" /></Link>
                  <Link href="#" className="nav-link modeicon nightmodeicon" id="nightmode" onClick={(e) => {
                    e.preventDefault();
                    handleThemeChange(e);
                    nightMode();
                  }} ><Image src="assets/images/moon.svg" width={20} height={20} alt="icon" /></Link>
                </Nav.Item>
                <NavDropdown className="usermenudrop dropdownsubmenu" title={<div className="pull-left"><Image src="assets/images/profile.svg" className="photopic" id="userprofile" alt="user" /><span className="prfileusertxt">John</span></div>} id="profiledrp" show={activeDropdown === "profile"} onMouseEnter={() => handleMouseEnter("profile")} onMouseLeave={handleMouseLeave} onClick={() => handleDropdownClick("profile")}>
                  <div className="dropdown-menu-wrapper">
                    <NavDropdown.Item as={Link} href="/profile" className="profilesubdropbox">
                      <span className="photopic">
                        <Image src="assets/images/profile.svg" alt="icon" width={100} height={100} id="profile" />
                      </span>
                      <h5>john@mailinator.com<span className="t-gray ms-1">(<span className="t-green"> <FontAwesomeIcon icon={faCheck} /></span><span className="t-green ms-1">Verified</span> )</span><br /><span className="t-gray">username</span></h5>
                    </NavDropdown.Item>
                    <hr />
                    {/* <NavDropdown.Item as={Link} href="#" onClick={handleShowModal1} id="langlink" ><span className="iconboxbg"><Image src="assets/images/langicon.svg" alt="icon" width={100} height={100} /></span>Language</NavDropdown.Item> */}
                    <div ref={dropdownRef} onMouseLeave={() => setShowsDropdown(false)}>
                      <NavDropdown title={<div className="" id="lang"><span className="iconboxbg"><Image src="assets/images/langicon.svg" alt="icon" width={100} height={100} /></span>Language</div>} className="langmenu nav-link me-1 ms-1 submenu-dropdown" id="basic-nav-dropdown" show={showsDropdown} onToggle={handleToggles}>
                        <h6 className="text-center"><span className="closesubmenu" onClick={submenuClose} ><FontAwesomeIcon icon={faAngleLeft} className="t-gray" /></span>Langauge</h6>
                        <hr />
                        <NavDropdown.Item as={Link} href="#" className="active">
                          <span className="langenicon"><Image src="assets/images/en.svg" alt="icon" width={100} height={100} /></span>
                          English
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} href="#">
                          <span className="langenicon"><Image src="assets/images/cn.svg" alt="icon" width={100} height={100} /></span>
                          Chinese
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} href="#">
                          <span className="langenicon"><Image src="assets/images/es.svg" alt="icon" width={100} height={100} /></span>
                          Spanish
                        </NavDropdown.Item>
                      </NavDropdown>
                    </div>
                    <div ref={dropdownsRef} onMouseLeave={() => setShowssDropdown(false)}>
                      <NavDropdown title={<div className="" id="lang"><span className="iconboxbg"><Image src="assets/images/currency.svg" alt="icon" width={100} height={100} /></span>Currency</div>} className="langmenu nav-link me-1 ms-1 submenu-dropdown" id="basic-nav-dropdown" show={showssDropdown} onToggle={handleToggless}>
                        <h6 className="text-center"><span className="closesubmenu" onClick={submenusClose} ><FontAwesomeIcon icon={faAngleLeft} className="t-gray" /></span>Currency</h6>
                        <hr />
                        <div className="supportsearch pt-0 pb-0">
                          <Form className="siteformbg">
                            <Form.Group className="form-group mb-0">
                              <Form.Control className="form-control" placeholder="Search" />
                            </Form.Group>
                          </Form>
                        </div>
                        <SimpleBar className="currencydropscroll">
                          <NavDropdown.Item as={Link} href="#" className="active">USD</NavDropdown.Item>
                          <NavDropdown.Item as={Link} href="#">INR</NavDropdown.Item>
                          <NavDropdown.Item as={Link} href="#">TRY</NavDropdown.Item>
                          <NavDropdown.Item as={Link} href="#">EUR</NavDropdown.Item>
                          <NavDropdown.Item as={Link} href="#">ARS</NavDropdown.Item>
                          <NavDropdown.Item as={Link} href="#">CAD</NavDropdown.Item>
                          <NavDropdown.Item as={Link} href="#">CHF</NavDropdown.Item>
                          <NavDropdown.Item as={Link} href="#">NGN</NavDropdown.Item>
                          <NavDropdown.Item as={Link} href="#">USD</NavDropdown.Item>
                          <NavDropdown.Item as={Link} href="#">INR</NavDropdown.Item>
                          <NavDropdown.Item as={Link} href="#">TRY</NavDropdown.Item>
                          <NavDropdown.Item as={Link} href="#">EUR</NavDropdown.Item>
                          <NavDropdown.Item as={Link} href="#">ARS</NavDropdown.Item>
                          <NavDropdown.Item as={Link} href="#">CAD</NavDropdown.Item>
                          <NavDropdown.Item as={Link} href="#">CHF</NavDropdown.Item>
                          <NavDropdown.Item as={Link} href="#">NGN</NavDropdown.Item>
                        </SimpleBar>
                      </NavDropdown>
                    </div>
                    {/* <NavDropdown.Item as={Link} href="#" onClick={handleShowModal2} id="langlink" ><span className="iconboxbg"><Image src="assets/images/currency.svg" alt="icon" width={100} height={100} /></span>Currency</NavDropdown.Item> */}
                    <hr />
                    <div className="dropdown-item" id="logoutlink"><span className="iconboxbg"><Image src="assets/images/logouticon.svg" alt="icon" width={100} height={100} /></span>Sign out</div>
                  </div>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <Modal show={showModal1} onHide={handleCloseModal1} aria-labelledby="contained-modal-title-vcenter" centered className='modalbgt langmodalbg'>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Language</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='siteformbg'>
            <Form.Group className="mb-3">
              <Form.Control type="text" id="search" placeholder="Search Language" />
            </Form.Group>
          </Form>
          <ul className="langslctlist">
            <li>English</li>
            <li className="text-center">Language 1</li>
            <li className="text-end">Language 2</li>
          </ul>
        </Modal.Body>
      </Modal>
      <Modal show={showModal2} onHide={handleCloseModal2} aria-labelledby="contained-modal-title-vcenter" centered className='modalbgt langmodalbg'>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Currency</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='siteformbg'>
            <Form.Group className="mb-3">
              <Form.Control type="text" id="search" placeholder="Search Currency" />
            </Form.Group>
          </Form>
          <ul className="langslctlist">
            <li>USD</li>
            <li className="text-center">INR</li>
            <li className="text-end">TRY</li>
          </ul>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Userheader