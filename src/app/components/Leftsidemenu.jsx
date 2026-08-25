'use client'
import React, { useEffect } from "react";
import Link from 'next/link';
import { Image, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const Leftsidemenu = () => {

  const pathname = usePathname()

  function menuclick() {
    var element = document.getElementById("leftsidemenu");
    element?.classList.remove("active");
    document.body.classList.remove('pagewrapperbox');
    var element1 = document.getElementById("backgroundoverlay");
    element1?.classList.remove("active");
  }

  function closeCollapse() {
    var element = document.getElementById("leftsidemenu");
    element?.classList.remove("active");
    document.body.classList.remove('pagewrapperbox');
    var element1 = document.getElementById("backgroundoverlay");
    element1?.classList.remove("active");
  }

  useEffect(() => {
    // This code only runs on the client

    // Resize handler
    const handleResize = () => {
      if (window.innerWidth > 1080) {
        const element = document.querySelector('#leftsidemenu');
        const element1 = document.querySelector('#backgroundoverlay');

        element?.classList.remove('active');
        element1?.classList.remove('active');
        document.body.classList.remove('pagewrapperbox');
      }
    };

    // Attach resize listener
    window.addEventListener('resize', handleResize);

    // Clean up listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById('leftsidemenu');
      const overlay = document.getElementById('backgroundoverlay');

      if (
        sidebar?.classList.contains('active') &&
        !sidebar.contains(event.target) &&
        !overlay?.contains(event.target)
      ) {
        // Assuming you have a closeCollapse function defined
        closeCollapse();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (

    <div className="leftsidemenu" id="leftsidemenu">
      <div className="sidelogoicon">
        <Link href="/">
          <Image src="assets/images/logo.png" width={100} height={57} className="lightthemeicon" alt="logo" />
          <Image src="assets/images/logo-dark.png" width={100} height={57} className="darkthemeicon" alt="logo" />
        </Link>
      </div>
      <div className="closeiconbtn" onClick={closeCollapse}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className="leftsidescroll">
        
        <SimpleBar className="scrollleftmenu">
          <ul>
            <li className="webhide"><Link id="dashboardlink" href="/dashboard" className={`titlemenu ${pathname === '/dashboard' ? 'active' : ''}`} onClick={menuclick}><i><Image src="assets/images/homeicon.svg" alt="icon" width={100} height={100} /></i><div>Dashboard</div></Link></li>
            <NavDropdown title={<div className="d-flex"><i><Image src="assets/images/personalicon.svg" alt="icon" width={100} height={100} /></i><div>Personal</div></div>} id="personal" className="webhide">
              <NavDropdown.Item as={Link} href="/personalwallet" id="walletlink" className={`${pathname === '/personalwallet' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/overviewicon.svg" alt="icon" width={100} height={100} /></span>Overview</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/personalsend" id="withdrawlink" className={`${pathname === '/personalsend' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/sendicon.svg" alt="icon" width={100} height={100} /></span>Send</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/personalreceive" id="depositlink" className={`${pathname === '/personalreceive' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/receiveicon.svg" alt="icon" width={100} height={100} /></span>Receive</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/personalconvert" id="convertlink" className={`${pathname === '/personalconvert' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/converticon.svg" alt="icon" width={100} height={100} /></span>Convert</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/personaltransfer" id="transferlink" className={`${pathname === '/personaltransfer' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/transfericon.svg" alt="icon" width={100} height={100} /></span>Transfer</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<div className="d-flex"><i><Image src="assets/images/businessicon1.svg" alt="icon" width={100} height={100} /></i><div>Business</div></div>} id="business" className="webhide">
              <NavDropdown.Item as={Link} href="/businesswallet" id="walletlink" className={`${pathname === '/businesswallet' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/overviewicon.svg" alt="icon" width={100} height={100} /></span>Overview</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/merchant" id="merchantlink" className={`${pathname === '/merchant' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/merchanticon.svg" alt="icon" width={100} height={100} /></span>Merchants</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/businesssend" id="withdrawlink" className={`${pathname === '/businesssend' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/sendicon.svg" alt="icon" width={100} height={100} /></span>Send</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/businesstransfer" id="transferlink" className={`${pathname === '/businesstransfer' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/transfericon.svg" alt="icon" width={100} height={100} /></span>Transfer</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<div className="d-flex"><i><Image src="assets/images/history1.svg" alt="icon" width={100} height={100} /></i><div>History</div></div>} id="assetsdrp" className="webhide">
              <NavDropdown.Item as={Link} href="/sendhistory" id="withdrawlink" className={`${pathname === '/sendhistory' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/sendicon.svg" alt="icon" width={100} height={100} /></span>Send History</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/spothistory" id="spotlink" className={`${pathname === '/spothistory' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/spot.svg" alt="icon" width={100} height={100} /></span>Spot History</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/featureshistory" id="featurelink" className={`${pathname === '/featureshistory' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/features.svg" alt="icon" width={100} height={100} /></span>Features History</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<div className="d-flex"><i><Image src="assets/images/earn1.svg" alt="icon" width={100} height={100} /></i><div>Earn</div></div>} id="earndrp" className="webhide">
              <NavDropdown.Item as={Link} href="/saving" id="savinglink" className={`${pathname === '/saving' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/savings.svg" alt="icon" width={100} height={100} /></span>Earn Overview</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/earnhistory" id="currentholdinglink" className={`${pathname === '/earnhistory' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/currentholding.svg" alt="icon" width={100} height={100} /></span>Current Holding</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/hostorical" id="hostorical" className={`${pathname === '/hostorical' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/hostoricalholding.svg" alt="icon" width={100} height={100} /></span>Hostorical Holding</NavDropdown.Item>
            </NavDropdown>


            <li className="webhide"><Link id="trade" href="/trade" className={`titlemenu ${pathname === '/trade' ? 'active' : ''}`} onClick={menuclick}><i><Image src="assets/images/trade1.svg" alt="icon" width={100} height={100} /></i><div>Trade</div></Link></li>
            <NavDropdown title={<div className="d-flex"><i><Image src="assets/images/history1.svg" alt="icon" width={100} height={100} /></i><div>Derivatives</div></div>} id="tradedrop" className="webhide">
             <NavDropdown.Item as={Link} href="/perpetual" className={`${pathname === '/perpetual' ? 'active' : ''}`}>
                    <div className="tableicon"><span><span className="iconboxbg"><Image src="assets/images/perpetual.svg" alt="icon" width={100} height={100} /></span></span> Perpetual</div>
                  </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/derivative" className={`${pathname === '/derivative' ? 'active' : ''}`}>
                    <div className="tableicon"><span><span className="iconboxbg"><Image src="assets/images/derivativeicon.svg" alt="icon" width={100} height={100} /></span></span> Futures</div>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/demotrade" className={`${pathname === '/demotrade' ? 'active' : ''}`}>
                    <div className="tableicon"><span><span className="iconboxbg"><Image src="assets/images/demo-trade.svg" alt="icon" width={100} height={100} /></span></span> Demo-trade</div>
                  </NavDropdown.Item>
            </NavDropdown>
            <li className="webhide"><Link id="sendhistorylinklink" href="/sendhistory" className={`titlemenu ${pathname === '/sendhistory' ? 'active' : ''}`} onClick={menuclick}><i><Image src="assets/images/historyicon.svg" alt="icon" width={100} height={100} /></i><div>History</div></Link></li>
            <li><Link id="settingslink" href="/settings" className={`titlemenu ${pathname === '/settings' ? 'active' : ''}`} onClick={menuclick}><i><Image src="assets/images/accounticon.svg" alt="icon" width={100} height={100} /></i><div>Preference</div></Link></li>
            <li><Link id="securitylink" className={`titlemenu ${pathname === '/security' ? 'active' : ''}`} href="/security"><i><Image src="assets/images/securityicon.svg" alt="icon" width={100} height={100} /></i><div>Security</div></Link></li>
            <li><Link id="kyclink" className={`titlemenu ${pathname === '/kyc' ? 'active' : ''}`} href="/kyc"><i><Image src="assets/images/kycicon-1.svg" alt="icon" width={100} height={100} /></i><div>KYC/AML/KYT</div></Link></li>
            <li><Link id="businessettinglink" href="/businesssettings" className={`titlemenu ${pathname === '/businesssettings' ? 'active' : ''}`} onClick={menuclick}><i><Image src="assets/images/businessicon.svg" alt="icon" width={100} height={100} /></i><div>Business Settings</div></Link></li>
            <li><Link id="notificationlink" href="/notification" className={`titlemenu ${pathname === '/notification' ? 'active' : ''}`} onClick={menuclick}><i><Image src="assets/images/notifyicon.svg" alt="icon" width={100} height={100} /></i><div>Notifications</div></Link></li>

            <li><Link id="referrallink" href="/referral" className={`titlemenu ${pathname === '/referral' ? 'active' : ''}`} onClick={menuclick}><i><Image src="assets/images/reficon.svg" alt="icon" width={100} height={100} /></i><div>Referral</div></Link></li>
            <li><Link id="apilink" href="/api" className={`titlemenu ${pathname === '/api' ? 'active' : ''}`} onClick={menuclick}><i><Image src="assets/images/apiicon.svg" alt="icon" width={100} height={100} /></i><div>API</div></Link></li>
            <li><Link id="supportlink" className={`titlemenu ${pathname === '/support' ? 'active' : ''}`} href="/support"><i><Image src="assets/images/supporticon.svg" alt="icon" width={100} height={100} /></i><div>Support</div></Link></li>
            <li>
              <Link
                id="tradewalletlink"
                className={`titlemenu ${(pathname === '/spotwallet' || pathname === '/featureswallet') ? 'active' : ''}`}
                href="/spotwallet"
              >
                <i>
                  <Image
                    src="assets/images/trade-wallet.svg"
                    alt="icon"
                    width={100}
                    height={100}
                  />
                </i>
                <div>Trade Wallet</div>
              </Link>
            </li>
            <li><Link id="tradelink" className={`titlemenu ${pathname === '/dashboardcopy' ? 'active' : ''}`} href="/dashboardcopy"><i><Image src="assets/images/transfer.svg" alt="icon" width={100} height={100} /></i><div>Transfer</div></Link></li>
            <li><div className="titlemenu logout logoutmenu" id="logoutlink"><i><Image src="assets/images/logouticon.svg" alt="icon" width={100} height={100} /></i><div>Sign out</div></div></li>
          </ul>
        </SimpleBar>

      </div>


    </div>
  )
}

export default Leftsidemenu