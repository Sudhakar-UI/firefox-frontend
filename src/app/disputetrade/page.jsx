"use client"
import React, { useState, useEffect } from 'react'
import { Container, Image, Modal, Form, Table, Badge } from 'react-bootstrap';
import Leftsidemenu from '../components/Leftsidemenu';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import './../../../public/assets/css/p2pcustom.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Page = () => {
    const [showModal1, setShowModal1] = useState(false);

        useEffect(() => {
          document.body.classList.add('p2p');
      
          return () => {
            document.body.classList.remove("p2p");
          };
        });

    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);
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
                                            <Link href="posttrade">Post New Ad</Link></h5>
                                    </div>
                                    <div>
                                        <h5 className="h5">
                                            <Link href="/trademessage">Trade Message</Link></h5>
                                    </div>
                                    <div>
                                        <h5 className="h5">
                                            <Link
                                                href="/disputetrade"
                                                className={`nav-link ${pathname === '/disputetrade' ? 'active' : ''}`}
                                            >
                                                Dispute Trade
                                            </Link>
                                        </h5>
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
                                            <Link href="tradehistory">Completed Trade History</Link></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Container className="">
                    <div className="inpgycon-y">
                        <h2 className="sub-heading">Dispute Trade</h2>
                    </div>
                    <div className="tradetablebox">
                        {/* <div className="panelcontentbox contentbox">
                            <div className="nodata">
                                <Image src="assets/images/nodata.svg" width={20} height={20} alt="nodata" />
                                    <p>No record found</p>
                            </div>
                        </div> */}
                        <div className="cardbox">
                            <div className="cardlistbox">
                                <div className="panelcontentbox">
                                    <Table className="sitetable" id="table1">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className='d-flex align-items-center'>
                                                        <span className="profileiconpic prof-icon-pic-y">
                                                            <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                            <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                        </span><span
                                                            className="t-darkblue"><b>John Meyer</b></span>
                                                    </span>

                                                </td>

                                                <td className="text-end"><Badge bg="success">Completed</Badge></td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <hr className="mt-0 mb-0" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="t-gray">Project</td>
                                                                <td className="text-end"><span className="t-black">
                                                                    <div className="shortnotes">Buying 0.481289 BTC</div>
                                                                </span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Time and date</td>
                                                                <td className="text-end"><span className="t-black">26-12-2025,
                                                                    08:00</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Unread</td>
                                                                <td className="text-end"><span className="t-black">20</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Action</td>
                                                                <td className="text-end"><a id="chat" onClick={handleShowModal1} className="alink borderbtn"><span className="me-1"></span>Chat</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className="cardlistbox">
                                <div className="panelcontentbox">
                                    <Table className="sitetable" id="table2">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className='d-flex align-items-center'>
                                                        <span className="profileiconpic prof-icon-pic-y">
                                                            <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                            <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                        </span><span
                                                            className="t-darkblue"><b>John Meyer</b></span>
                                                    </span>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <hr className="mt-0 mb-0" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="t-gray">Project</td>
                                                                <td className="text-end"><span className="t-black">
                                                                    <div className="shortnotes">Buying 0.481289 BTC</div>
                                                                </span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Time and date</td>
                                                                <td className="text-end"><span className="t-black">26-12-2025,
                                                                    08:00</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Unread</td>
                                                                <td className="text-end"><span className="t-black">20</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Action</td>
                                                                <td className="text-end"><a id="chat" onClick={handleShowModal1} className="alink borderbtn"><span className="me-1"></span>Chat</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className="cardlistbox">
                                <div className="panelcontentbox">
                                    <Table className="sitetable" id="table3">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className='d-flex align-items-center'>
                                                        <span className="profileiconpic prof-icon-pic-y">
                                                            <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                            <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                        </span><span
                                                            className="t-darkblue"><b>John Meyer</b></span>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <hr className="mt-0 mb-0" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="t-gray">Project</td>
                                                                <td className="text-end"><span className="t-black">
                                                                    <div className="shortnotes">Buying 0.481289 BTC</div>
                                                                </span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Time and date</td>
                                                                <td className="text-end"><span className="t-black">26-12-2025,
                                                                    08:00</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Unread</td>
                                                                <td className="text-end"><span className="t-black">20</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Action</td>
                                                                <td className="text-end"><a id="chat" onClick={handleShowModal1} className="alink borderbtn"><span className="me-1"></span>Chat</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className="cardlistbox">
                                <div className="panelcontentbox">
                                    <Table className="sitetable" id="table4">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className='d-flex align-items-center'>
                                                        <span className="profileiconpic prof-icon-pic-y">
                                                            <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                            <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                        </span><span
                                                            className="t-darkblue"><b>John Meyer</b></span>
                                                    </span>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <hr className="mt-0 mb-0" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="t-gray">Project</td>
                                                                <td className="text-end"><span className="t-black">
                                                                    <div className="shortnotes">Buying 0.481289 BTC</div>
                                                                </span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Time and date</td>
                                                                <td className="text-end"><span className="t-black">26-12-2025,
                                                                    08:00</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Unread</td>
                                                                <td className="text-end"><span className="t-black">20</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Action</td>
                                                                <td className="text-end"><a id="chat" onClick={handleShowModal1} className="alink borderbtn"><span className="me-1"></span>Chat</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className="cardlistbox">
                                <div className="panelcontentbox">
                                    <Table className="sitetable" id="table5">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className='d-flex align-items-center'>
                                                        <span className="profileiconpic prof-icon-pic-y">
                                                            <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                            <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                        </span><span
                                                            className="t-darkblue"><b>John Meyer</b></span>
                                                    </span>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <hr className="mt-0 mb-0" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <Table className="sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="t-gray">Project</td>
                                                                <td className="text-end"><span className="t-black">
                                                                    <div className="shortnotes">Buying 0.481289 BTC</div>
                                                                </span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Time and date</td>
                                                                <td className="text-end"><span className="t-black">26-12-2025,
                                                                    08:00</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Unread</td>
                                                                <td className="text-end"><span className="t-black">20</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Action</td>
                                                                <td className="text-end"><a id="chat" onClick={handleShowModal1} className="alink borderbtn"><span className="me-1"></span>Chat</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className="cardlistbox">
                                <div className="panelcontentbox">
                                    <Table className="sitetable" id="table6">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className='d-flex align-items-center'>
                                                        <span className="profileiconpic prof-icon-pic-y">
                                                            <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                            <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                        </span><span
                                                            className="t-darkblue"><b>John Meyer</b></span>
                                                    </span>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <hr className="mt-0 mb-0" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <Table className="table sitetable">
                                                        <tbody>
                                                            <tr>
                                                                <td className="t-gray">Project</td>
                                                                <td className="text-end"><span className="t-black">
                                                                    <div className="shortnotes">Buying 0.481289 BTC</div>
                                                                </span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Time and date</td>
                                                                <td className="text-end"><span className="t-black">26-12-2025,
                                                                    08:00</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Unread</td>
                                                                <td className="text-end"><span className="t-black">20</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="t-gray">Action</td>
                                                                <td className="text-end"><a id="chat" onClick={handleShowModal1} className="alink borderbtn"><span className="me-1"></span>Chat</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </article>
            <Modal show={showModal1} onHide={handleCloseModal1}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modalbgt chatmodal'>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Chat
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='chatbox ticketchat'>
                    <SimpleBar className="chatboxscroll">
                        <ul className="chat">
                            <li className="left clearfix">
                                <div className="chat-img pull-left"><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" className="img-circle" /></div>
                                <div className="chat-body clearfix">
                                    <div className="header">
                                        <h4 className="primary-font">John</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <h5><span className="me-1"><FontAwesomeIcon icon={faCalendarDays} /></span>Mar 18, 2024</h5></div>
                                </div>
                            </li>
                            <li className="right clearfix">
                                <div className="chat-body clearfix">
                                    <div className="header">
                                        <h4 className="primary-font">John</h4>
                                        <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.</p>
                                        <h5><span className="me-1"><FontAwesomeIcon icon={faCalendarDays} /></span>Mar 18, 2024</h5></div>
                                </div>
                                <div className="chat-img pull-right"><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" className="img-circle" /></div>
                            </li>
                            <li className="right clearfix">
                                <div className="chat-body clearfix">
                                    <div className="header">
                                        <h4 className="primary-font">John</h4>
                                        <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.</p>
                                        <h5><span className="me-1"><FontAwesomeIcon icon={faCalendarDays} /></span>Mar 18, 2024</h5></div>
                                </div>
                                <div className="chat-img pull-right"><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" className="img-circle" /></div>
                            </li>
                            <li className="right clearfix">
                                <div className="chat-body clearfix">
                                    <div className="header">
                                        <h4 className="primary-font">John</h4>
                                        <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.</p>
                                        <h5><span className="me-1"><FontAwesomeIcon icon={faCalendarDays} /></span>Mar 18, 2024</h5></div>
                                </div>
                                <div className="chat-img pull-right"><Image src="assets/images/profile.svg" width={20} height={20} alt="icon" className="img-circle" /></div>
                            </li>
                        </ul>
                    </SimpleBar>
                    <div className="chat-foot">
                        <Form className='siteformbg'>
                            <Form.Group className="form-group">
                                <Form.Label>Enter your message</Form.Label>
                                <Form.Control as="textarea" rows={2} id="enter_msg" />
                            </Form.Group>
                            <div className="form-group text-center">
                                <input type="submit" className="btn sitebtn" id="submit_btn" value="Submit" />
                            </div>
                        </Form>
                    </div>
                </Modal.Body >
            </Modal >
            <Userfooter />
        </div >
    )
}

export default Page;