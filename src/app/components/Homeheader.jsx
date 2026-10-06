import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { Container, Navbar, Nav, Image, NavDropdown, Modal, Form } from 'react-bootstrap';
import { usePathname } from 'next/navigation'
import '../../../public/assets/css/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Homeheader = () => {
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


  const [showNavbar, setShowNavbar] = useState(true);
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


  return (
    <div>
      <header className="headermenu">
        <Navbar expand="lg" className="headbg">
          <Container>
            <Navbar.Brand>
              <Link href="/">
                <Image src="assets/images/logo.png" width={100} height={57} className="logo lightthemeicon" alt="logo" />
                <Image src="assets/images/logo-dark.png" width={100} height={57} className="logo darkthemeicon" alt="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navbar-nav leftheadbg mx-auto text-center">
                <Nav.Item>
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

                </Nav.Item>
                {/* <Nav.Item><Link href="/#features" id="featureslink" className="nav-link">Markets</Link></Nav.Item>
                <Nav.Item><Link href="/#howitworks" id="howitworkslink" className="nav-link">How it Works</Link></Nav.Item>
                <Nav.Item><Link href="/aboutus" id="aboutuslink" className="nav-link">Merchant Tools</Link></Nav.Item> */}
                <Nav.Item><Link href="/aboutus" id="aboutuslink" className="nav-link">Earn</Link></Nav.Item>
                <Nav.Item><Link href="/aboutus" id="aboutuslink" className="nav-link">Copy Trade</Link></Nav.Item>
                <Nav.Item><Link href="/beforeconvert" id="beforeconvert" className="nav-link">Convert</Link></Nav.Item>
                {/* <Nav.Item><Link href="/#faq" id="faqlink" className="nav-link">FAQ</Link></Nav.Item> */}
              </Nav>
              <Nav className="navbar-nav rightheadbg">
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
                  }}><Image src="assets/images/moon.svg" width={20} height={20} alt="icon" /></Link>
                </Nav.Item>
                {/* <Nav.Item><Link href="#" id="langlink" className="nav-link borderlangbox me-1 ms-1" onClick={handleShowModal1}>EN</Link></Nav.Item> */}
                <NavDropdown title={<div className="pull-left" id="lang">EN</div>} className="langmenu borderlangbox me-1 ms-1" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} href="/" className="active">
                    <span className="langenicon"><Image src="assets/images/en.svg" alt="icon" width={100} height={100} /></span>
                    English
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/">
                    <span className="langenicon"><Image src="assets/images/cn.svg" alt="icon" width={100} height={100} /></span>
                    Chinese
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/">
                    <span className="langenicon"><Image src="assets/images/es.svg" alt="icon" width={100} height={100} /></span>
                    Spanish
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Item><Link href="/signin" id="login" className="nav-link btn borderbtn me-1">Sign in</Link></Nav.Item>
                <Nav.Item><Link href="/signup" id="register" className="nav-link btn sitebtn">Sign up</Link></Nav.Item>
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
    </div>
  )
}

export default Homeheader