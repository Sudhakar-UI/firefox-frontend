"use client"
import React, { useState } from 'react';
import { Container, Form, Row, Col, Image, Button, Table, InputGroup, Tab, Nav, Badge } from 'react-bootstrap';
import Link from "next/link";
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import "flatpickr/dist/themes/material_orange.css";
import Flatpickr from "react-flatpickr";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../components/ResponsiveTable';
import Leftsidemenu from '../components/Leftsidemenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCopy } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import UploadForm from './UploadForm';

const Settings = () => {

	 const [singleOption, setSingleOption] = useState(
		{
			 value: 'usd',
      		 label: 'USD',
		}
	 );
	
	  const options = [
		  { value: 'usd', label: 'USD' },
		  { value: 'inr', label: 'INR' },
		  { value: 'ltc', label: 'LTC' },
	  ];
	
	  const handleSingleChange = (selected) => {
		  setSingleOption(selected);
		  console.log('Single Select:', selected);
	  };
	
	  const customStyles = {
		  control: (base, state) => ({
			  ...base,
			  borderColor: state.isFocused ? '#4bb1d9' : '#ccc',
			  boxShadow: state.isFocused ? '0 0 5px #4bb1d9' : 'none',
			  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
			  '&:hover': {
				  borderColor: '#4bb1d9',
			  },
		  }),
		  option: (base, { isFocused }) => ({
			  ...base,
			  backgroundColor: isFocused ? '#F6F6F7' : '#F6F6F7',
			  color: '#000',
			  transition: 'background-color 0.3s ease',
		  }),
	  };
	
	  // Custom option label with image
	  const customOptionLabel = (data) => (
		<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				{data.label}
			</div>
		</div>
	  );

	  const [single1Option, setSingle1Option] = useState(
		{
			 value: 'turkey',
      		 label: 'Turkey',
		}
	 );
	
	  const options1 = [
		  { value: 'turkey', label: 'Turkey' },
		  { value: 'india', label: 'India' },
		  { value: 'ltc', label: 'LTC' },
	  ];
	
	  const handleSingle1Change = (selected) => {
		  setSingle1Option(selected);
		  console.log('Single Select:', selected);
	  };
	
	  const customStyles1 = {
		  control: (base, state) => ({
			  ...base,
			  borderColor: state.isFocused ? '#4bb1d9' : '#ccc',
			  boxShadow: state.isFocused ? '0 0 5px #4bb1d9' : 'none',
			  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
			  '&:hover': {
				  borderColor: '#4bb1d9',
			  },
		  }),
		  option: (base, { isFocused }) => ({
			  ...base,
			  backgroundColor: isFocused ? '#F6F6F7' : '#F6F6F7',
			  color: '#000',
			  transition: 'background-color 0.3s ease',
		  }),
	  };
	
	  // Custom option label with image
	  const customOptionLabel1 = (data) => (
		<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				{data.label}
			</div>
		</div>
	  );

	  const [single2Option, setSingle2Option] = useState(
		{
			 value: 'pacific',
      		 label: 'Pacific',
		}
	 );
	
	  const options2 = [
		  { value: 'pacific', label: 'Pacific' },
		  { value: 'pacific', label: 'Pacific' },
		  { value: 'pacific', label: 'Pacific' },
	  ];
	
	  const handleSingle2Change = (selected) => {
		  setSingle2Option(selected);
		  console.log('Single Select:', selected);
	  };
	
	  const customStyles2 = {
		  control: (base, state) => ({
			  ...base,
			  borderColor: state.isFocused ? '#4bb1d9' : '#ccc',
			  boxShadow: state.isFocused ? '0 0 5px #4bb1d9' : 'none',
			  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
			  '&:hover': {
				  borderColor: '#4bb1d9',
			  },
		  }),
		  option: (base, { isFocused }) => ({
			  ...base,
			  backgroundColor: isFocused ? '#F6F6F7' : '#F6F6F7',
			  color: '#000',
			  transition: 'background-color 0.3s ease',
		  }),
	  };
	
	  // Custom option label with image
	  const customOptionLabel2 = (data) => (
		<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				{data.label}
			</div>
		</div>
	  );

    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
			<div className="innerpagecontent">
					<Container className="sitecontainer">
						<h2 className="h2">My Account</h2>
					</Container>
			</div>
            <article className="gridparentbox">
                <Container className="sitecontainer profilepage">
				<div className="flexbox">
					<div className="">
					<div className="panelcontentbox">
						<h2 className="heading-box mb-3">Account</h2>
						     <div className="introbox">
								<div className="cryptobox crtbox">
									<div className="table-content">
										<div>
											<div className="profileiconpic"><Image id="profilepic" src="assets/images/profile.svg" width={20} height={20} alt="icon"/></div>
										</div>
										<div>
											<h5 className="h5">Hello, pi***h@g*.com <Badge bg="warning">Unverified</Badge></h5> 
											<p className="mb-0">UID · 8a4ceec5...efb <FontAwesomeIcon icon={faCopy} /></p>
										</div>    
									</div>							
								</div>
							</div>
					</div>
					<div className="panelcontentbox mt-2 basicprftable">
					<h2 className="heading-box mb-3">Basic Preference</h2>
							<Table className="sitetable" id='table'>
								<tbody>
									<tr>
										<td>Currency</td>
										<td className="text-end">
											<Select options={options} id='currency' styles={customStyles} value={singleOption} onChange={handleSingleChange} getOptionLabel={customOptionLabel} />        
										</td>
									</tr>
									<tr>
										<td>Country/Region</td>
										<td className="text-end">
											<Select options={options1} id='country' styles={customStyles1} value={single1Option} onChange={handleSingle1Change} getOptionLabel={customOptionLabel1} />        
										</td>
									</tr>
									<tr>
										<td>Time zone</td>
										<td className="text-end">
											<Select options={options2} id='timezone' styles={customStyles2} value={single2Option} onChange={handleSingle2Change} getOptionLabel={customOptionLabel2} />        
										</td>
									</tr>
								</tbody>
							</Table>
					</div>
					</div>
					<div className="panelcontentbox">
						<h2 className="heading-box mb-3">Active Sessions</h2>
						<div className="bordertablebox">
							<SimpleBar className="table-responsive sitescroll activesessions-y">
								{/* style={{ maxHeight: '300px' }} */}
								<Table className="sitetable table-responsive-stack" id="table1">
									<thead>
										<tr>
											<th>Device</th>
											<th>Location</th>
											<th>IP</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><FontAwesomeIcon icon={faCircle} className="t-green crclfntsz" /> Desktop </td>
											<td>Malappuram India</td>
											<td>42.109.143.229</td>
											<td><Button className="borderbtn btn-sm">Terminate</Button></td>
										</tr>
										<tr>
											<td><FontAwesomeIcon icon={faCircle} className="t-green crclfntsz" /> Desktop </td>
											<td>Malappuram India</td>
											<td>42.109.143.229</td>
											<td><Button className="borderbtn btn-sm">Terminate</Button></td>
										</tr>
										<tr>
											<td><FontAwesomeIcon icon={faCircle} className="t-green crclfntsz" /> Desktop </td>
											<td>Malappuram India</td>
											<td>42.109.143.229</td>
											<td><Button className="borderbtn btn-sm">Terminate</Button></td>
										</tr>
										<tr>
											<td><FontAwesomeIcon icon={faCircle} className="t-gray crclfntsz" /> Desktop </td>
											<td>Malappuram India</td>
											<td>42.109.143.229</td>
											<td><Button className="borderbtn btn-sm">Terminate</Button></td>
										</tr>
										<tr>
											<td><FontAwesomeIcon icon={faCircle} className="t-gray crclfntsz" /> Desktop </td>
											<td>Malappuram India</td>
											<td>42.109.143.229</td>
											<td><Button className="borderbtn btn-sm">Terminate</Button></td>
										</tr>
										<tr>
											<td><FontAwesomeIcon icon={faCircle} className="t-gray crclfntsz" /> Desktop </td>
											<td>Malappuram India</td>
											<td>42.109.143.229</td>
											<td><Button className="borderbtn btn-sm">Terminate</Button></td>
										</tr>
											<tr>
											<td><FontAwesomeIcon icon={faCircle} className="t-gray crclfntsz" /> Desktop </td>
											<td>Malappuram India</td>
											<td>42.109.143.229</td>
											<td><Button className="borderbtn btn-sm">Terminate</Button></td>
										</tr>
											<tr>
											<td><FontAwesomeIcon icon={faCircle} className="t-gray crclfntsz" /> Desktop </td>
											<td>Malappuram India</td>
											<td>42.109.143.229</td>
											<td><Button className="borderbtn btn-sm">Terminate</Button></td>
										</tr>
											<tr>
											<td><FontAwesomeIcon icon={faCircle} className="t-gray crclfntsz" /> Desktop </td>
											<td>Malappuram India</td>
											<td>42.109.143.229</td>
											<td><Button className="borderbtn btn-sm">Terminate</Button></td>
										</tr>
										
									</tbody>
								</Table>
							</SimpleBar>
							<ResponsiveTable tableId="table1" />
							</div>
					</div>
				</div>
				<div className="panelcontentbox profiletabbg">
					<h2 className="heading-box mb-3">Basic Informations</h2>

                        <div className="table-content">
                    <div className="profilebox text-center">
                            <div className="profilimg">
                                <UploadForm />
                            </div>
                            <div className="profiledatainfo mt-3">
                                <h3 className="h5">John</h3>
								<small className="t-gray">(Upload your image like jpg,jpeg,png (MAX: 1MB))</small>
                                
                            </div>
                        </div>
                        <div className="">
                        <Form className="siteformbg mt-3">
                            <Row>
                                <Col xl={4} lg={6} md={6}>
                                        <Form.Group className="form-group">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control name="code" id="firstname" />
                                    </Form.Group>
                                </Col>
                                <Col xl={4} lg={6} md={6}>
                                    <Form.Group className="form-group" >
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control name="code" id="lastname" />
                                    </Form.Group>
                                </Col>
                                                        
                                 <Col xl={4} lg={12} md={6}>
                                    <Form.Group className="form-group">
                                        <Form.Label>Select Country</Form.Label>
                                        <Form.Select className="form-control" id='country'>
                                            <option>India</option>                                        
                                        </Form.Select> 
                                    </Form.Group>
                                </Col>
                                </Row>
                                <Row>
                                <Col lg={12} md={12}>
                                    <Form.Group className="form-group">
                                        <Form.Label>Address</Form.Label>
                                        <textarea className="form-control" rows={3} id='address'></textarea>
                                    </Form.Group>
                                </Col>

                                <div className="form-group profbtn m-0 text-center">
                                    <Button type="submit" className="btn sitebtn" id="submit">Submit</Button>
                                </div>
                            </Row>
                        </Form>
                    </div></div>
                    </div>
                </Container>
            </article>
            <Userfooter />
        </div >
    )
}

export default Settings