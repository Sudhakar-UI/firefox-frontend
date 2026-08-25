"use client"
import React, { useState } from "react"
import Userheader from '../components/Userheader'
import Userfooter from '../components/Userfooter'
import { Container, Image, Button, Accordion, Badge, Table } from 'react-bootstrap'
import Link from "next/link"
import Leftsidemenu from '../components/Leftsidemenu';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../components/ResponsiveTable';

const Kyc = () => {
	
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader /> 
			<Leftsidemenu />
			<div className="innerpagecontent">
				<Container className="sitecontainer">
						<h2 className="h2">KYC/AML/KYT Verification</h2>						
                </Container>
					</div>       
            <article className="gridparentbox">
               
                <Container className="sitecontainer kycpage">    
					
				<div className="panelcontentbox">
                        <div className="table-content kycnotestable">
                            <div>
                                <p>KYC/AML/KYT verification is a mandatory process that ensures compliance with regulatory requirements by verifying user identities before granting access to cryptocurrency services. This helps prevent fraud, money laundering, and unauthorized activities, creating a secure and trustworthy trading environment.</p>
                                <Button className="borderbtn me-2" id="startverify_btn">Enable KYC</Button>
                                <Button className="borderbtn me-2" id="startamlverify_btn">Enable AML</Button>
                                <Button className="borderbtn me-2" id="startkytverify_btn">Enable KYT</Button>
                            </div>
                            <div className="text-end"> 
                                <Image src="assets/images/kycproof.svg" width={50} height={50} alt="coin" />
                            </div>
                        </div>
                    </div>

					<div className="panelcontentbox mt-3">
                        <h2 className="heading-box mb-3">Account Benefits</h2>
                        <div className="bordertablebox">
                        <SimpleBar className="table-responsive sitescroll">
                            <Table className="sitetable table-responsive-stack" id="table1">                               
                                <thead>
                                <tr>
                                        <th><span className="t-gray"><b>KYC/AML/KYT Level</b></span></th>
                                        <th><span className="t-gray">Unverified</span></th>
                                        <th><span className="t-gray">Verified</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><b>Crypto Send</b></td>
                                        <td>Unlimited</td>
                                        <td>Unlimited</td>
                                    </tr>
                                    <tr>
                                        <td><b>Crypto Receive</b></td>
                                        <td>10 BTC per day</td>
                                        <td>80 BTC per day</td>
                                    </tr>  
                                     <tr>
                                        <td><b>Crypto Convert</b></td>
                                        <td>Unlimited</td>
                                        <td>Unlimited</td>
                                    </tr>
                                    <tr>
                                        <td><b>Crypto Transfer</b></td>
                                        <td>10 BTC per day</td>
                                        <td>80 BTC per day</td>
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
         
          
        </div>
    )
}

export default Kyc