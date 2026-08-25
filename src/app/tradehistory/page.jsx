"use client"
import React, { useEffect } from 'react'
import Link from 'next/link';
import { Container, Image, Table, Badge } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../components/ResponsiveTable';
import './../../../public/assets/css/p2pcustom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, } from '@fortawesome/free-solid-svg-icons';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { usePathname } from 'next/navigation';

const Page = () => {

  const downlinescroll = {
    desktop: {
      breakpoint: { max: 1920, min: 1670 },
      items: 4,
    },
    laptop: {
      breakpoint: { max: 1670, min: 1270 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1270, min: 767 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    }
  };

  useEffect(() => {
    document.body.classList.add('p2p');

    return () => {
      document.body.classList.remove("p2p");
    };
  });
  useEffect(() => {
    const handleResize = () => {
      const table = document.getElementById('table1');
      if (!table) return; // Check if the table exists

      const isMobile = window.innerWidth < 768;

      const headers = table.querySelectorAll('th');
      const rows = table.querySelectorAll('tbody tr');

      const responsiveHeader = table.querySelector('.table-responsive-stack-thead');
      const thead = table.querySelector('thead');

      if (isMobile) {
        // Show responsive headers and hide thead
        if (responsiveHeader) responsiveHeader.style.display = 'block';
        if (thead) thead.style.display = 'none';

        rows.forEach(row => {
          headers.forEach((header, index) => {
            const cell = row.cells[index];
            if (cell && !cell.querySelector('.table-responsive-stack-thead')) {
              const span = document.createElement('span');
              span.className = 'table-responsive-stack-thead';
              span.textContent = header.textContent + ' ';
              cell.prepend(span);
            }
          });
        });
      } else {
        // Hide responsive headers and show thead
        if (responsiveHeader) responsiveHeader.style.display = 'none';
        if (thead) thead.style.display = 'table-header-group';
      }
    };

    // Initial call
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const pathname = usePathname();

  return (
    <div className="pagecontent gridpagecontent innerpagegrid">
      <div className="backgroundoverlay" id="backgroundoverlay"></div>
      <Userheader />
      <article className="">
        <div className="innerpagecontent inpgycon-y">
          <div className="cryptopricebox">
            <div className="introbox panelcontentbox panycon-y ">
              <div className="cryptobox">
                <div className="crytb-y">
                  <div>
                    <h5 className="h5">
                      <Link href="/p2poverview">Overview</Link></h5>
                  </div>
                  <div>
                    <h5 className="h5">
                      <Link href="/buysell">Buy/Sell</Link></h5>
                  </div>
                  <div>
                    <h5 className="h5">
                      <Link href="#">Post New Ad</Link></h5>
                  </div>
                  <div>
                    <h5 className="h5">
                      <Link href="/trademessage">Trade Message</Link></h5>
                  </div>
                  <div>
                    <h5 className="h5">
                      <Link href="/disputetrade">Dispute Trade</Link></h5>
                  </div>
                  <div>
                    <h5 className="h5">
                      <Link href="/adshistory">Advertisement History</Link></h5>
                  </div>
                  <div>
                    <h5 className="h5">
                      <Link href="/feedback">Feedback</Link></h5>
                  </div>
                  <div>
                    <h5 className="h5">
                      <Link
                        href="/tradehistory"
                        className={`nav-link ${pathname === '/tradehistory' ? 'active' : ''}`}
                      >
                        Completed Trade History
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Container className="p2poverview">
          <div className="adsbox mt-3">
            <h2 class="sub-heading border-0 pb-3">Trade History</h2>
            <div className="tabpanel panelcontentbox">
              <SimpleBar className="table-responsive sitescroll">
                <Table className="sitetable table-responsive-stack" id="table1">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Date</th>
                      <th>Type</th>
                      <th>Buyer</th>
                      <th>Seller</th>
                      <th>Amount</th>
                      <th>Asset</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="nodata">
                      <td colSpan={10}>
                        <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                        <p>No record found</p>
                      </td>
                    </tr>
                    {/* <tr>
                      <td>1</td>
                      <td>14/04/2025</td>
                      <td><Image src="assets/images/color/btc.svg" className="smallcoin" />BTC</td>
                      <td><span className="t-green bg-green">Buy</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>58.26</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td><Link href="/adshistory" id="view_btn" className="btn viewbtn">View</Link></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>14/04/2025</td>
                      <td><Image src="assets/images/color/eth.svg" className="smallcoin" />ETH</td>
                      <td><span className="t-green bg-green">Buy</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>10.3659</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td><Link href="/adshistory" id="view_btn" className="btn viewbtn">View</Link></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>14/04/2025</td>
                      <td><Image src="assets/images/color/ltc.svg" className="smallcoin" />LTC</td>
                      <td><span className="t-red bg-red">Sell</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>0.26</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td><Link href="/adshistory" id="view_btn" className="btn viewbtn">View</Link></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>14/04/2025</td>
                      <td><Image src="assets/images/color/trx.svg" className="smallcoin" />TRX</td>
                      <td><span className="t-green bg-green">Buy</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>0.2625987</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td><Link href="/adshistory" id="view_btn" className="btn viewbtn">View</Link></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>14/04/2025</td>
                      <td><Image src="assets/images/color/sol.svg" className="smallcoin" />SOL</td>
                      <td><span className="t-red bg-red">Sell</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>0.2625987</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td><Link href="/adshistory" id="view_btn" className="btn viewbtn">View</Link></td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>14/04/2025</td>
                      <td><Image src="assets/images/color/avax.svg" className="smallcoin" />AVAX</td>
                      <td><span className="t-red bg-red">Sell</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>0.2625987</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td><Link href="/adshistory" id="view_btn" className="btn viewbtn">View</Link></td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>14/04/2025</td>
                      <td><Image src="assets/images/color/ton.svg" className="smallcoin" />TON</td>
                      <td><span className="t-red bg-red">Sell</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>0.2625987</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td><Link href="/adshistory" id="view_btn" className="btn viewbtn">View</Link></td>
                    </tr> */}
                  </tbody>
                </Table>
              </SimpleBar>
              <ResponsiveTable tableId="table1" />
            </div>
          </div>
        </Container>
      </article>
      <Userfooter />
    </div>
  )
}

export default Page;