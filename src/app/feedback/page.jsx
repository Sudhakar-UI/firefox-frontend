"use client"
import React, { useState, useEffect } from 'react'
import { Container, Image, Modal, Form, Nav, Tab, Table, Button, Badge } from 'react-bootstrap';
import Leftsidemenu from '../components/Leftsidemenu';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import './../../../public/assets/css/p2pcustom.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Page = () => {
    const [showModal1, setShowModal1] = useState(false);

    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);
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
                                            <Link href="/adshistory">Advertisement History</Link></h5>
                                    </div>
                                    <div>
                                        <h5 className="h5">
                                            <Link
                                                href="/feedback"
                                                className={`nav-link ${pathname === '/feedback' ? 'active' : ''}`}
                                            >
                                                Feedback
                                            </Link>
                                        </h5>
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
                <Container className="in-pgy-con-y">
                    <div className="">
                        <h2 className="sub-heading fed-bak-hed-y border-0">Feedback</h2>
                    </div>

                    <Tab.Container id="left-tabs-example" defaultActiveKey="receive">
                        <div className="tabrightbox cardviewbg boxtabb fedbak-y">
                            <Nav variant="pills" className='tabbanner'>
                                <Nav.Item>
                                    <Nav.Link eventKey="receive">Receive</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="trust">Trusted users</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="block">Blocked users</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <Tab.Content className=''>
                            <Tab.Pane eventKey="receive">
                                <div className="cardbox">
                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table1'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start d-flex align-items-center">
                                                                <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 26-12-2025</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>
                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table2'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start d-flex align-items-center">
                                                                <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 26-12-2025</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>

                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table3'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start d-flex align-items-center">
                                                                <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 26-12-2025</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>

                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table4'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start d-flex align-items-center">
                                                                <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 26-12-2025</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>

                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table5'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start d-flex align-items-center">
                                                                <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 26-12-2025</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>

                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table6'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start d-flex align-items-center">
                                                                <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 26-12-2025</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="trust">
                                <div className="cardbox">
                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table7'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start d-flex align-items-center">
                                                                <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 26-12-2025</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>
                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table8'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start d-flex align-items-center">
                                                                <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 26-12-2025</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>

                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table9'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start d-flex align-items-center">
                                                                <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 26-12-2025</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>

                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table10'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start d-flex align-items-center">
                                                                <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 26-12-2025</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>

                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table11'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start d-flex align-items-center">
                                                                <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 26-12-2025</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>

                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table12'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start d-flex align-items-center">
                                                                <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 26-12-2025</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="block">
                                <div className="cardbox">
                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table13'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start d-flex align-items-center">
                                                                <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 26-12-2025</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>
                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table14'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start d-flex align-items-center">
                                                                <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 26-12-2025</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>

                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table15'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start d-flex align-items-center">
                                                                <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 26-12-2025</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>

                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table16'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start d-flex align-items-center">
                                                                <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 26-12-2025</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>

                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table17'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start d-flex align-items-center">
                                                                <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 26-12-2025</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>

                                    <div className="cardlistbox">
                                        <div className="panelcontentbox">
                                            <SimpleBar className="table-responsive feedbackscroll">
                                                <Table className="sitetable" id='table18'>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-start d-flex align-items-center">
                                                                <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                                <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                                John</td>
                                                            <td className="text-right"><Badge bg="success">80%</Badge></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2}><hr /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date & Time</td>
                                                            <td className="text-right">05:05:00, 26-12-2025</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Name</td>
                                                            <td className="text-right">John</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray">Nice to trade with him. Nice to trade with him. Nice to trade with him trade with him. Nice to trade with him.</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={2} className="t-gray"><a onClick={handleShowModal1} className="btn borderbtn w-100" id="update_btn">Update</a></td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Container>
            </article>

            <Modal show={showModal1} onHide={handleCloseModal1}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modalbgt chatmodal authtblemdlbox">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Update Your Feedback</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <div className="feedbackscrt">
                            <div>
                                <Form.Label>Feedback Score (Out of 5)</Form.Label>
                            </div>
                            <div>
                                <Form.Select className="form-control" name="feedback_score" id="feedback_score">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Select>
                            </div>
                        </div>
                        <Form.Group className="form-group">
                            <Form.Check type="radio" id="trustworth_radiobtn" label="Trustworthy" />
                            <label className="labelleft">Give your trading partner trustworthy feedback to increase his reputation and mark him as a trusted user.</label>
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Check type="radio" id="distrust_radiobtn" label="Distrust and block" />
                            <label className="labelleft">Give your trading partner negative feedback that decreases his reputation and block his account, this prevents him from trading with you again.</label>
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>Write your Feedback</Form.Label>
                            <Form.Control as="textarea" id="enter_feedback" rows={5} />
                        </Form.Group>
                        <div className="form-group text-center mt-3 mb-0">
                            <Button type="submit" id="send_btn" name="submit" className="btn sitebtn">Send</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            <Userfooter />
        </div >
    )
}

export default Page;