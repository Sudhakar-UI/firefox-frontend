"use client"
import React, { useEffect } from 'react'
import Link from 'next/link';
import { Container, Image, Table, Badge, Tooltip, OverlayTrigger } from 'react-bootstrap';
import Leftsidemenu from '../components/Leftsidemenu';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import './../../../public/assets/css/p2pcustom.css';
import { usePathname } from 'next/navigation';


const Page = () => {
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
            <article className="trademsgpage">
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
                                            <Link
                                                href="/trademessage"
                                                className={`nav-link ${pathname === '/trademessage' ? 'active' : ''}`}
                                            >
                                                Trade Message
                                            </Link>
                                        </h5>
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
                                            <Link href="tradehistory">Completed Trade History</Link></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Container className="">
                    <div className="inpgycon-y">
                        <h2 className="sub-heading">Trade Message</h2>
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
                                                <td className="text-start ">
                                                    <span className='d-flex align-items-center'>
                                                        <span className="profileiconpic prof-icon-pic-y">
                                                            <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                            <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                        </span>
                                                        <span className="t-darkblue tooltiptxt"><b>
                                                            <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">John Meyer John Meyer</Tooltip>} >
                                                                <span>John Meyer</span>
                                                            </OverlayTrigger>
                                                        </b></span>
                                                    </span>

                                                </td>
                                                <td className="text-end">
                                                    <Badge bg="success">
                                                        <span className="tooltiptxt">
                                                            <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">Waiting For Confirmation</Tooltip>} >
                                                                <span>Waiting</span>
                                                            </OverlayTrigger>
                                                        </span>
                                                    </Badge></td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <hr className="mt-0 mb-0" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <table className="table sitetable">
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
                                                                <td className="text-end"><Link href="/buytrade" className="alink borderbtn"><span className="me-1"></span>Message</Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
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
                                                <td className="text-start ">
                                                    <span className='d-flex align-items-center'>
                                                        <span className="profileiconpic prof-icon-pic-y">
                                                            <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                            <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                        </span>
                                                        <span className="t-darkblue tooltiptxt"><b>
                                                            <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">John Meyer John Meyer</Tooltip>} >
                                                                <span>John Meyer</span>
                                                            </OverlayTrigger>
                                                        </b></span>
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
                                                    <table className="table sitetable">
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
                                                                <td className="text-end"><Link href="/buytrade" className="alink borderbtn"><span className="me-1"></span>Message</Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
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
                                                <td className="text-start ">
                                                    <span className='d-flex align-items-center'>
                                                        <span className="profileiconpic prof-icon-pic-y">
                                                            <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                            <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                        </span>
                                                        <span className="t-darkblue tooltiptxt"><b>
                                                            <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">John Meyer John Meyer</Tooltip>} >
                                                                <span>John Meyer</span>
                                                            </OverlayTrigger>
                                                        </b></span>
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
                                                    <table className="table sitetable">
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
                                                                <td className="text-end"><Link href="/buytrade" className="alink borderbtn"><span className="me-1"></span>Message</Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
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
                                                <td className="text-start ">
                                                    <span className='d-flex align-items-center'>
                                                        <span className="profileiconpic prof-icon-pic-y">
                                                            <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                            <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                        </span>
                                                        <span className="t-darkblue tooltiptxt"><b>
                                                            <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">John Meyer John Meyer</Tooltip>} >
                                                                <span>John Meyer</span>
                                                            </OverlayTrigger>
                                                        </b></span>
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
                                                    <table className="table sitetable">
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
                                                                <td className="text-end"><Link href="/buytrade" className="alink borderbtn"><span className="me-1"></span>Message</Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
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
                                                <td className="text-start ">
                                                    <span className='d-flex align-items-center'>
                                                        <span className="profileiconpic prof-icon-pic-y">
                                                            <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                            <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                        </span>
                                                        <span className="t-darkblue tooltiptxt"><b>
                                                            <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">John Meyer John Meyer</Tooltip>} >
                                                                <span>John Meyer</span>
                                                            </OverlayTrigger>
                                                        </b></span>
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
                                                    <table className="table sitetable">
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
                                                                <td className="text-end"><Link href="/buytrade" className="alink borderbtn"><span className="me-1"></span>Message</Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
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
                                                <td className="text-start ">
                                                    <span className='d-flex align-items-center'>
                                                        <span className="profileiconpic prof-icon-pic-y">
                                                            <Image src="assets/images/profile.svg" width={100} height={100} alt="logo" className="coinicon lightthemeicon" />
                                                            <Image src="assets/images/profile-dark.svg" width={100} height={100} alt="logo" className="coinicon darkthemeicon" />
                                                        </span>
                                                        <span className="t-darkblue tooltiptxt"><b>
                                                            <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">John Meyer John Meyer</Tooltip>} >
                                                                <span>John Meyer</span>
                                                            </OverlayTrigger>
                                                        </b></span>
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
                                                    <table className="table sitetable">
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
                                                                <td className="text-end"><Link href="/buytrade" className="alink borderbtn"><span className="me-1"></span>Message</Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
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
            <Userfooter />
        </div>
    )
}

export default Page;