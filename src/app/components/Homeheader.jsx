import React, { useEffect, useState, useRef } from "react";
import Link from 'next/link';
import { Container, Navbar, Nav, Image, NavDropdown, Modal, Form } from 'react-bootstrap';
import { usePathname } from 'next/navigation'
import '../../../public/assets/css/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Homeheader = () => {
  const themeTimeouts = useRef([]);
  const themeTransitionId = useRef(0);
  const handleThemeChange = (nightMode) => {
    const body = document.body;
    const root = document.documentElement;
    const isMobileHeader = window.matchMedia("(max-width: 991.98px)").matches;
    const toggle = document.querySelector(
      isMobileHeader
        ? ".mobile-header-controls .modebg"
        : ".desktop-nav-content .rightheadbg .modebg"
    );
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


  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  let prevScrollPos = typeof window !== "undefined" ? window.pageYOffset : 0;

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNavbar(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.remove('userpanelpage');
  })

  const [showModal1, setShowModal1] = useState(false);
  const handleShowModal1 = () => setShowModal1(true);
  const handleCloseModal1 = () => setShowModal1(false);


  function nightMode() {
    document.querySelectorAll(".daymodeicon").forEach((element) => element.classList.remove("activemode"));
    document.querySelectorAll(".nightmodeicon").forEach((element) => element.classList.add("activemode"));
  }

  function dayMode() {
    document.querySelectorAll(".daymodeicon").forEach((element) => element.classList.add("activemode"));
    document.querySelectorAll(".nightmodeicon").forEach((element) => element.classList.remove("activemode"));
  }


  return (
    <div>
      <header className={`headermenu${mobileNavOpen ? " mobile-nav-open" : ""}`}>
        <Navbar
          expand="lg"
          className="headbg"
          expanded={mobileNavOpen}
          onToggle={setMobileNavOpen}
        >
          <Container>
            <Navbar.Brand>
              <Link href="/">
                <Image src="assets/images/logo.png" width={100} height={57} className="logo lightthemeicon" alt="logo" />
                <Image src="assets/images/logo-dark.png" width={100} height={57} className="logo darkthemeicon" alt="logo" />
              </Link>
            </Navbar.Brand>
            <Nav className="mobile-header-controls">
              <NavDropdown
                title="EN"
                className="langmenu borderlangbox"
                id="basic-nav-dropdown-mobile-header"
              >
                <NavDropdown.Item as={Link} href="/" className="active">
                  <span className="langenicon"><Image src="assets/images/en.svg" alt="icon" width={100} height={100} /></span>English
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/">
                  <span className="langenicon"><Image src="assets/images/cn.svg" alt="icon" width={100} height={100} /></span>Chinese
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/">
                  <span className="langenicon"><Image src="assets/images/es.svg" alt="icon" width={100} height={100} /></span>Spanish
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item className="modebg">
                <Link href="#" className="nav-link modeicon daymodeicon activemode" id="daymode-mobile-header" onClick={(e) => {
                  e.preventDefault();
                  handleThemeChange(false);
                  dayMode();
                }}><Image src="assets/images/sun.svg" width={20} height={20} alt="Day mode" /></Link>
                <Link href="#" className="nav-link modeicon nightmodeicon" id="nightmode-mobile-header" onClick={(e) => {
                  e.preventDefault();
                  handleThemeChange(true);
                  nightMode();
                }}><Image src="assets/images/moon.svg" width={20} height={20} alt="Night mode" /></Link>
              </Nav.Item>
            </Nav>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="mobile-nav-content">
                <div
                  className="mobile-nav-close closeiconbtn"
                  role="button"
                  tabIndex={0}
                  aria-label="Close navigation"
                  onClick={() => setMobileNavOpen(false)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setMobileNavOpen(false);
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faXmark} aria-hidden="true" />
                </div>
              <Nav className="navbar-nav leftheadbg mx-auto text-center" onSelect={() => setMobileNavOpen(false)}>
                {/* <Nav.Item><Link href="/#features" id="featureslink" className="nav-link">Markets</Link></Nav.Item>
                <Nav.Item><Link href="/#howitworks" id="howitworkslink" className="nav-link">How it Works</Link></Nav.Item>
                <Nav.Item><Link href="/aboutus" id="aboutuslink" className="nav-link">Merchant Tools</Link></Nav.Item> */}
                <Nav.Item>
                  <Link href="/aboutus" id="aboutuslink" className="nav-link nav-link-with-icon">
                    <Image src="assets/images/earn1.svg" alt="" width={100} height={100} className="nav-link-icon" />
                    Earn
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/trade" id="trade" className="nav-link nav-link-with-icon">
                    <Image src="assets/images/trade1.svg" alt="" width={100} height={100} className="nav-link-icon" />
                    Trade
                  </Link>
                </Nav.Item>

                <Nav.Item>
                  <Link href="/p2poverview" id="p2p" className="nav-link nav-link-with-icon">
                    <Image src="assets/images/p2p1.svg" alt="" width={100} height={100} className="nav-link-icon" />
                    P2P
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/spot-copy-trade" id="copytrade-mobile" className="nav-link nav-link-with-icon">
                    <Image src="assets/images/copy-trade1.svg" alt="" width={100} height={100} className="nav-link-icon" />
                    Copy Trade
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/beforeconvert" id="beforeconvert" className="nav-link nav-link-with-icon">
                    <Image src="assets/images/convert1.svg" alt="" width={100} height={100} className="nav-link-icon" />
                    Convert
                  </Link>
                </Nav.Item>
                {/* <Nav.Item><Link href="/#faq" id="faqlink" className="nav-link">FAQ</Link></Nav.Item> */}
              </Nav>
               <div className="mobile-auth-buttons mt-2">
                  <Nav.Item><Link href="/signin" id="login" className="nav-link btn borderbtn me-1">Sign in</Link></Nav.Item>
                  <Nav.Item><Link href="/signup" id="register" className="nav-link btn sitebtn">Sign up</Link></Nav.Item>
                </div>
              </div>
              <div className="desktop-nav-content">
               <Nav className="navbar-nav leftheadbg mx-auto text-center" onSelect={() => setMobileNavOpen(false)}>
                 <Nav.Item>
                   <NavDropdown title={<span className="nav-link-with-icon"><Image src="assets/images/trade1.svg" alt="" width={100} height={100} className="nav-link-icon" />Trade</span>} id="trade-desktop">
                     <NavDropdown.Item as={Link} href="/trade" className={pathname === "/trade" ? "active" : ""}>
                       <div className="tableicon"><span><span className="iconboxbg"><Image src="assets/images/spoticon.svg" alt="icon" width={100} height={100} /></span></span><span>Spot<br /><small className="t-gray">Buy and Sell crypto with ease</small></span></div>
                     </NavDropdown.Item>
                     <NavDropdown.Item as={Link} href="/p2poverview" className={pathname === "/p2poverview" ? "active" : ""}>
                       <div className="tableicon"><span><span className="iconboxbg"><Image src="assets/images/p2p.svg" alt="icon" width={100} height={100} /></span></span><span>P2P <span className="alink comig-soon-y">(Coming soon)</span><br /><small className="t-gray">Buy and sell crypto via P2P marketplace</small></span></div>
                     </NavDropdown.Item>
                     <NavDropdown.Item as={Link} href="/spot-copy-trade" className={pathname === "/spot-copy-trade" ? "active" : ""}>
                       <div className="tableicon"><span><span className="iconboxbg"><Image src="assets/images/copy-trade-icon.svg" alt="icon" width={100} height={100} /></span></span><span>Copy Trade <span className="alink comig-soon-y">(Coming soon)</span><br /><small className="t-grayc">Automatically copy trades from top-performing traders</small></span></div>
                     </NavDropdown.Item>
                   </NavDropdown>
                 </Nav.Item>
                 <Nav.Item>
                   <Link href="/aboutus" id="aboutuslink-desktop" className="nav-link nav-link-with-icon">
                     <Image src="assets/images/earn1.svg" alt="" width={100} height={100} className="nav-link-icon" />
                     Earn
                   </Link>
                 </Nav.Item>
                 <Nav.Item>
                   <Link href="/aboutus" id="copytrade-desktop" className="nav-link nav-link-with-icon">
                     <Image src="assets/images/copy-trade1.svg" alt="" width={100} height={100} className="nav-link-icon" />
                     Copy Trade
                   </Link>
                 </Nav.Item>
                 <Nav.Item>
                   <Link href="/beforeconvert" id="beforeconvert-desktop" className="nav-link nav-link-with-icon">
                     <Image src="assets/images/convert1.svg" alt="" width={100} height={100} className="nav-link-icon" />
                     Convert
                   </Link>
                 </Nav.Item>
               </Nav>
               <Nav className="navbar-nav rightheadbg" onSelect={() => setMobileNavOpen(false)}>
                 <Nav.Item className="modebg">
                   <Link href="#" className="nav-link modeicon daymodeicon activemode" id="daymode-desktop" onClick={(e) => {
                     e.preventDefault();
                     handleThemeChange(false);
                     dayMode();
                   }}><Image src="assets/images/sun.svg" width={20} height={20} alt="icon" /></Link>
                   <Link href="#" className="nav-link modeicon nightmodeicon" id="nightmode-desktop" onClick={(e) => {
                     e.preventDefault();
                     handleThemeChange(true);
                     nightMode();
                   }}><Image src="assets/images/moon.svg" width={20} height={20} alt="icon" /></Link>
                 </Nav.Item>
                 <NavDropdown title={<span className="nav-link-with-icon"><Image src="assets/images/change-lang1.svg" alt="" width={100} height={100} className="nav-link-icon" />EN</span>} className="langmenu borderlangbox me-1 ms-1" id="basic-nav-dropdown-desktop">
                   <NavDropdown.Item as={Link} href="/" className="active">
                     <span className="langenicon"><Image src="assets/images/en.svg" alt="icon" width={100} height={100} /></span>English
                   </NavDropdown.Item>
                   <NavDropdown.Item as={Link} href="/">
                     <span className="langenicon"><Image src="assets/images/cn.svg" alt="icon" width={100} height={100} /></span>Chinese
                   </NavDropdown.Item>
                   <NavDropdown.Item as={Link} href="/">
                     <span className="langenicon"><Image src="assets/images/es.svg" alt="icon" width={100} height={100} /></span>Spanish
                   </NavDropdown.Item>
                 </NavDropdown>
                 <Nav.Item><Link href="/signin" id="login-desktop" className="nav-link btn borderbtn me-1">Sign in</Link></Nav.Item>
                 <Nav.Item><Link href="/signup" id="register-desktop" className="nav-link btn sitebtn">Sign up</Link></Nav.Item>
               </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {mobileNavOpen && (
          <button
            type="button"
            className="mobile-nav-backdrop"
            aria-label="Close navigation"
            onClick={() => setMobileNavOpen(false)}
          />
        )}
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
    </div>
  )
}

export default Homeheader