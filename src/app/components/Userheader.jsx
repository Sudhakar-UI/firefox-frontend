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
  const [selectedLang, setSelectedLang] = useState("en");
  const [selectedCurrency, setSelectedCurrency] = useState("BTC");
  const [currencySearch, setCurrencySearch] = useState("");
  const themeTimeouts = useRef([]);
  const themeTransitionId = useRef(0);
  const profileLanguages = [
    { code: "en", label: "English", icon: "/assets/images/en.svg" },
    { code: "cn", label: "中文", icon: "/assets/images/cn.svg" },
    { code: "es", label: "Español", icon: "/assets/images/es.svg" },
    { code: "ru", label: "Русский", icon: "/assets/images/ru.svg" },
  ];

  const profileCurrencyCodes = [
    "AFN", "EUR", "ALL", "DZD", "USD",
    "BTC", "ETH", "SOL", "TON", "TRX", "BCH", "USDT", "AVAX",
  ];
  const profileCurrencies = profileCurrencyCodes
    .map((code) => ({ code }))
    .filter((currency) => currency.code.toLowerCase().includes(currencySearch.toLowerCase()));
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
  const [showsDropdown, setShowsDropdown] = useState(false);
  const [showssDropdown, setShowssDropdown] = useState(false);

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

  const handleProfileMouseLeave = (e) => {
    if (showsDropdown || showssDropdown) {
      return;
    }

    handleMouseLeave(e);
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

  const handleThemeChange = (nightMode) => {
    const body = document.body;
    const root = document.documentElement;
    const toggle = document.querySelector(".modebg");
    const toggleBounds = toggle?.getBoundingClientRect();

    if (!toggleBounds) {
      body.classList.toggle("nightmode", nightMode);
      return;
    }

    root.style.setProperty("--theme-x", `${toggleBounds.left + toggleBounds.width / 2}px`);
    root.style.setProperty("--theme-y", `${toggleBounds.top + toggleBounds.height / 2}px`);
    themeTimeouts.current.forEach(clearTimeout);
    const transitionId = ++themeTransitionId.current;
    root.classList.remove("theme-going-to-bottom", "theme-going-to-toggle");
    body.classList.remove("theme-transition", "theme-going-to-bottom", "theme-going-to-toggle");
    void root.offsetWidth;

    const transitionClass = nightMode ? "theme-going-to-bottom" : "theme-going-to-toggle";
    body.style.setProperty("--theme-overlay-color", nightMode ? "#0f0f0f" : "#fff");
    if (document.startViewTransition) {
      root.classList.add(transitionClass);
      const transition = document.startViewTransition(() => {
        body.classList.toggle("nightmode", nightMode);
      });
      const clearTransitionClass = () => {
        if (themeTransitionId.current === transitionId) {
          root.classList.remove(transitionClass);
        }
      };
      transition.finished.then(clearTransitionClass, clearTransitionClass);
      return;
    }

    body.classList.add("theme-transition", transitionClass);

    themeTimeouts.current = [
      setTimeout(() => body.classList.toggle("nightmode", nightMode), 1000),
      setTimeout(() => {
        body.classList.remove("theme-transition", "theme-going-to-bottom", "theme-going-to-toggle");
      }, 1200),
    ];
  };

  function nightMode() {
    var element = document.getElementById("daymode");
    element?.classList.remove("activemode");
    var element1 = document.getElementById("nightmode");
    element1?.classList.add("activemode");
  }

  function dayMode() {
    var element2 = document.getElementById("daymode");
    element2?.classList.add("activemode");
    var element3 = document.getElementById("nightmode");
    element3?.classList.remove("activemode");

  }


  const handleToggles = (isOpen) => {
    if (isOpen) {
      setShowsDropdown(true);
      setShowssDropdown(false);
    }
  };

  const submenuClose = () => {
    setShowsDropdown(false);
    setActiveDropdown("profile");
  };

  const handleToggless = (isOpen) => {
    if (isOpen) {
      setShowssDropdown(true);
      setShowsDropdown(false);
    }
  };

  const submenusClose = () => {
    setShowssDropdown(false);
    setActiveDropdown("profile");
  };

  const handleLanguageSelect = (language) => {
    setSelectedLang(language.code);
  };

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency.code);
    setCurrencySearch("");
  };

  const profileSubmenuHeaderStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    minHeight: "44px",
    margin: 0,
    padding: "10px 40px",
    borderBottom: "1px dashed #dedede",
    textAlign: "center",
  };
  const profileSubmenuBackStyle = {
    position: "absolute",
    top: "50%",
    left: "12px",
    padding: "4px",
    transform: "translateY(-50%)",
  };
  const profileSubmenuItemsStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    boxSizing: "border-box",
    width: "100%",
    padding: "8px 10px",
  };
  const profileSubmenuItemStyle = {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    width: "100%",
    minHeight: "40px",
    margin: 0,
    padding: "6px 12px",
    textAlign: "left",
  };

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
                    handleThemeChange(false);
                    dayMode();
                  }}><Image src="assets/images/sun.svg" width={20} height={20} alt="icon" /></Link>
                  <Link href="#" className="nav-link modeicon nightmodeicon" id="nightmode" onClick={(e) => {
                    e.preventDefault();
                    handleThemeChange(true);
                    nightMode();
                  }} ><Image src="assets/images/moon.svg" width={20} height={20} alt="icon" /></Link>
                </Nav.Item>
                <NavDropdown className="usermenudrop dropdownsubmenu" title={<div className="pull-left"><Image src="assets/images/profile.svg" className="photopic" id="userprofile" alt="user" /><span className="prfileusertxt">John</span></div>} id="profiledrp" show={activeDropdown === "profile"} autoClose="outside" onToggle={(isOpen) => setActiveDropdown(isOpen ? "profile" : null)} onMouseEnter={() => handleMouseEnter("profile")} onMouseLeave={handleProfileMouseLeave}>
                  <div className="dropdown-menu-wrapper profile-menu-wrapper">
                    <NavDropdown.Item as={Link} href="/profile" className="profilesubdropbox">
                      <span className="photopic">
                        <Image src="/assets/images/profile.svg" alt="icon" width={100} height={100} id="profile" />
                      </span>
                      <h5>john@mailinator.com<span className="t-gray ms-1">(<span className="t-green"> <FontAwesomeIcon icon={faCheck} /></span><span className="t-green ms-1">Verified</span> )</span><br /><span className="t-gray">username</span></h5>
                    </NavDropdown.Item>
                    <hr />

                    <div onClick={(event) => event.stopPropagation()}>
                      <NavDropdown
                        title={
                          <div id="profile-language-label" className="profile-menu-row" style={{ display: "flex", position: "relative", left: "-16px", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "100%", minWidth: 0, padding: 0, gap: "8px", textAlign: "left" }}>
                            <span className="iconboxbg" style={{ display: "flex", flex: "0 0 20px", width: "20px", height: "20px", alignItems: "center", justifyContent: "center", margin: 0 }}>
                              <Image src="/assets/images/langicon.svg" alt="icon" width={20} height={20} style={{ width: "20px", height: "20px" }} />
                            </span>
                            <span style={{ display: "block", flex: "1 1 auto", width: "100%", margin: 0, textAlign: "left" }}>Language</span>
                          </div>
                        }
                        className="langmenu nav-link me-1 ms-1 submenu-dropdown"
                        id="profile-language-dropdown"
                        show={showsDropdown}
                        autoClose={false}
                        onToggle={handleToggles}
                      >
                        <h6 style={profileSubmenuHeaderStyle}>
                          <button type="button" className="closesubmenu" style={profileSubmenuBackStyle} aria-label="Back to profile menu" onClick={submenuClose}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                          </button>
                          Language
                        </h6>
                        <hr />
                        <div style={profileSubmenuItemsStyle}>
                          {profileLanguages.map((lang) => (
                            <NavDropdown.Item
                              as="button"
                              type="button"
                              key={lang.code}
                              className={selectedLang === lang.code ? "active" : ""}
                              style={profileSubmenuItemStyle}
                              onClick={() => handleLanguageSelect(lang)}
                            >
                              <span className="langenicon"><Image src={lang.icon} alt="icon" width={100} height={100} /></span>
                              {lang.label}
                            </NavDropdown.Item>
                          ))}
                        </div>
                      </NavDropdown>
                    </div>

                    <div onClick={(event) => event.stopPropagation()}>
                      <NavDropdown
                        title={
                          <div id="profile-currency-label" className="profile-menu-row" style={{ display: "flex", position: "relative", left: "-16px", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "100%", minWidth: 0, padding: 0, gap: "8px", textAlign: "left" }}>
                            <span className="iconboxbg" style={{ display: "flex", flex: "0 0 20px", width: "20px", height: "20px", alignItems: "center", justifyContent: "center", margin: 0 }}>
                              <Image src="/assets/images/currency.svg" alt="icon" width={20} height={20} style={{ width: "20px", height: "20px" }} />
                            </span>
                            <span style={{ display: "block", flex: "1 1 auto", width: "100%", margin: 0, textAlign: "left" }}>Currency</span>
                          </div>
                        }
                        className="langmenu nav-link me-1 ms-1 submenu-dropdown"
                        id="profile-currency-dropdown"
                        show={showssDropdown}
                        autoClose={false}
                        onToggle={handleToggless}
                      >
                        <h6 style={profileSubmenuHeaderStyle}>
                          <button type="button" className="closesubmenu" style={profileSubmenuBackStyle} aria-label="Back to profile menu" onClick={submenusClose}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                          </button>
                          Currency
                        </h6>
                        <hr />
                        <div className="supportsearch pt-0 pb-0" style={{ boxSizing: "border-box", width: "100%", padding: "8px 10px 6px" }}>
                          <Form
                            className="siteformbg"
                            style={{ width: "100%", margin: 0 }}
                            onSubmit={(e) => {
                              e.preventDefault();
                              const match = profileCurrencies.find(
                                (currency) => currency.code.toLowerCase() === currencySearch.trim().toLowerCase()
                              );
                              if (match) {
                                handleCurrencySelect(match);
                              }
                            }}
                          >
                            <Form.Group className="form-group mb-0" style={{ width: "100%", margin: 0 }}>
                              <Form.Control
                                className="form-control"
                                placeholder="Search"
                                value={currencySearch}
                                style={{ display: "block", boxSizing: "border-box", width: "100%", maxWidth: "100%" }}
                                onChange={(e) => setCurrencySearch(e.target.value)}
                              />
                            </Form.Group>
                          </Form>
                        </div>
                        <SimpleBar className="profile-currency-scroll" style={{ width: "100%", maxHeight: "200px" }}>
                          <div style={profileSubmenuItemsStyle}>
                            {profileCurrencies.map((currency) => (
                              <NavDropdown.Item
                                as="button"
                                type="button"
                                key={currency.code}
                                className={selectedCurrency === currency.code ? "active" : ""}
                                style={profileSubmenuItemStyle}
                                onClick={() => handleCurrencySelect(currency)}
                              >
                                {currency.code}
                              </NavDropdown.Item>
                            ))}
                          </div>
                        </SimpleBar>
                      </NavDropdown>
                    </div>

                    <hr />
                    <button type="button" className="dropdown-item profile-menu-row" id="logoutlink" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "7px 8px", textAlign: "left" }}>
                      <span className="iconboxbg" style={{ display: "flex", flex: "0 0 20px", width: "20px", height: "20px", alignItems: "center", justifyContent: "center", margin: 0 }}>
                        <Image src="/assets/images/logouticon.svg" alt="icon" width={20} height={20} style={{ width: "20px", height: "20px" }} />
                      </span>
                      Sign out
                    </button>
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