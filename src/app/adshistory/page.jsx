"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { Container, Image, Table, Modal, Button, Form } from 'react-bootstrap';
import Leftsidemenu from '../components/Leftsidemenu';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../components/ResponsiveTable';
import './../../../public/assets/css/p2pcustom.css';
import { usePathname } from 'next/navigation';


const Page = () => {
  const [showModal1, setShowModal1] = useState(false);
  const handleClose1 = () => setShowModal1(false);
  const handleShow1 = () => setShowModal1(true);

  const handleClose2 = () => setShowModal2(false);
  const handleShow2 = () => setShowModal2(true);
  const [showModal2, setShowModal2] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    document.body.classList.add('p2p');

    return () => {
      document.body.classList.remove("p2p");
    };
  });
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
                      <Link href="posttrade">Post New Ad</Link></h5>
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
                      <Link
                        href="/adshistory"
                        className={`nav-link ${pathname === '/adshistory' ? 'active' : ''}`}
                      >
                        Advertisement History
                      </Link>
                    </h5>
                  </div>
                  <div>
                    <h5 className="h5">
                      <Link href="/feedback">Feedback</Link></h5>
                  </div>
                  <div>
                    <h5 className="h5">
                      <Link href="tradehistory">Completed Trade History</Link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Container className="">
          <div className="inpgycon-y">
            <h2 className="sub-heading">Advertisement History</h2>
          </div>
          <div className="panelcontentbox adshistpage">
            <div className="tabpanel">
              <SimpleBar className="table-responsive sitescroll">
                <Table className="sitetable table-responsive-stack" id="table1">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Date</th>
                      <th>Coins</th>
                      <th>Type</th>
                      <th>Limit</th>
                      <th>Max limit</th>
                      <th>Margin (%)</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr className="nodata">
												<td colSpan={10}>
													<Image src="../assets/images/nodata.svg"/>
													<p>No record found</p>
												</td>
											</tr> */}
                    <tr>
                      <td>1</td>
                      <td>26-12-2025</td>
                      <td><Image src="../assets/images/color/btc.svg" className="smallcoin" />BTC</td>
                      <td><span className="t-green bg-green">Buy</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>58.26</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td className="tableheadhide">
                        <Link id="view_btn" href="#" className="sitebtn btn-sm me-1">View</Link>
                        <Link id="edit_btn" href="#" className="sitebtn btn-sm me-1">Edit</Link>
                        <Button id="cancel_btn" type="button"
                          className="sitebtn  red-btn redbtn-y me-1" onClick={handleShow1}>Cancel</Button>
                        <Button id="disable_btn" type="button"
                          className="sitebtn  red-btn redbtn-y" onClick={handleShow2}>Disable</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>26-12-2025</td>
                      <td><Image src="../assets/images/color/eth.svg" className="smallcoin" />ETH</td>
                      <td><span className="t-green bg-green">Buy</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>10.3659</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td className="tableheadhide">
                        <Link id="view_btn" href="#" className="sitebtn btn-sm me-1">View</Link>
                        <Link id="edit_btn" href="#" className="sitebtn btn-sm me-1">Edit</Link>
                        <Button id="cancel_btn" type="button"
                          className="sitebtn  red-btn redbtn-y me-1" onClick={handleShow1}>Cancel</Button>
                        <Button id="disable_btn" type="button"
                          className="sitebtn  red-btn redbtn-y" onClick={handleShow2}>Disable</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>26-12-2025</td>
                      <td><Image src="../assets/images/color/ltc.svg" className="smallcoin" />LTC</td>
                      <td><span className="t-red bg-red">Sell</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>0.26</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td className="tableheadhide">
                        <Link id="view_btn" href="#" className="sitebtn btn-sm me-1">View</Link>
                        <Link id="edit_btn" href="#" className="sitebtn btn-sm me-1">Edit</Link>
                        <Button id="cancel_btn" type="button"
                          className="sitebtn  red-btn redbtn-y me-1" onClick={handleShow1}>Cancel</Button>
                        <Button id="disable_btn" type="button"
                          className="sitebtn  red-btn redbtn-y" onClick={handleShow2}>Disable</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>26-12-2025</td>
                      <td><Image src="../assets/images/color/trx.svg" className="smallcoin" />TRX</td>
                      <td><span className="t-green bg-green">Buy</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>0.2625987</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td className="tableheadhide">
                        <Link id="view_btn" href="#" className="sitebtn btn-sm me-1">View</Link>
                        <Link id="edit_btn" href="#" className="sitebtn btn-sm me-1">Edit</Link>
                        <Button id="cancel_btn" type="button"
                          className="sitebtn  red-btn redbtn-y me-1" onClick={handleShow1}>Cancel</Button>
                        <Button id="disable_btn" type="button"
                          className="sitebtn  red-btn redbtn-y" onClick={handleShow2}>Disable</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>26-12-2025</td>
                      <td><Image src="../assets/images/color/sol.svg" className="smallcoin" />SOL</td>
                      <td><span className="t-red bg-red">Sell</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>0.2625987</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td className="tableheadhide">
                        <Link id="view_btn" href="#" className="sitebtn btn-sm me-1">View</Link>
                        <Link id="edit_btn" href="#" className="sitebtn btn-sm me-1">Edit</Link>
                        <Button id="cancel_btn" type="button"
                          className="sitebtn  red-btn redbtn-y me-1" onClick={handleShow1}>Cancel</Button>
                        <Button id="disable_btn" type="button"
                          className="sitebtn  red-btn redbtn-y" onClick={handleShow2}>Disable</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>26-12-2025</td>
                      <td><Image src="../assets/images/color/avax.svg" className="smallcoin" />AVAX</td>
                      <td><span className="t-red bg-red">Sell</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>2.5987</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td className="tableheadhide">
                        <Link id="view_btn" href="#" className="sitebtn btn-sm me-1">View</Link>
                        <Link id="edit_btn" href="#" className="sitebtn btn-sm me-1">Edit</Link>
                        <Button id="cancel_btn" type="button"
                          className="sitebtn  red-btn redbtn-y me-1" onClick={handleShow1}>Cancel</Button>
                        <Button id="disable_btn" type="button"
                          className="sitebtn  red-btn redbtn-y" onClick={handleShow2}>Disable</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>26-12-2025</td>
                      <td><Image src="../assets/images/color/ton.svg" className="smallcoin" />TON</td>
                      <td><span className="t-red bg-red">Sell</span></td>
                      <td>10,00000- 10,0000</td>
                      <td>10,0000256</td>
                      <td>2.5987</td>
                      <td>1.26398578</td>
                      <td>Completed</td>
                      <td className="tableheadhide">
                        <Link id="view_btn" href="#" className="sitebtn btn-sm me-1">View</Link>
                        <Link id="edit_btn" href="#" className="sitebtn btn-sm me-1">Edit</Link>
                        <Button id="cancel_btn" type="button"
                          className="sitebtn  red-btn redbtn-y me-1" onClick={handleShow1}>Cancel</Button>
                        <Button id="disable_btn" type="button"
                          className="sitebtn  red-btn redbtn-y" onClick={handleShow2}>Disable</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </SimpleBar>
              <ResponsiveTable tableId="table1" />
            </div>
          </div>
        </Container>
      </article>
      <Userfooter />


      <Modal show={showModal1} onHide={handleClose1}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='modalbgt authtblemdlbox'>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Advertisement
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form className='siteformbg'>
            <p>Are you sure want to cancel this Advertisement?</p>
            <div className="text-center d-flex gap-3">
              <a className="btn sitebtn ms-1 w-100" id="payment_confirmbtn">Confirm</a>
               <a href="#" className="btn borderbtn me-1 w-100" id="payment_cancelbtn">Cancel</a>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
        <Modal show={showModal2} onHide={handleClose2}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='modalbgt authtblemdlbox'>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Advertisement
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='siteformbg'>
            <p>Are you sure want to cancel this Advertisement?</p>
            <div className="text-center d-flex gap-3">
              <a className="btn sitebtn ms-1 w-100" id="payment_confirmbtn">Confirm</a>
               <a href="#" className="btn borderbtn me-1 w-100" id="payment_cancelbtn">Cancel</a>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Page;