"use client"
import React, { useState, useRef,useEffect } from "react"
import { Container, Form, Button, Table, Image, Modal, Badge, Nav, Tab, InputGroup } from 'react-bootstrap';
import Userheader from '../components/Userheader';
import Userfooter from '../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Link from "next/link";
import Leftsidemenu from '../components/Leftsidemenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faClose, faCircle, faPaperclip } from '@fortawesome/free-solid-svg-icons';

const Support = () => {
	const [showModal1, setShowModal1] = useState(false);
	const [showModal2, setShowModal2] = useState(false);

	const handleShowModal1 = () => setShowModal1(true);
	const handleCloseModal1 = () => setShowModal1(false);

	const handleShowModal2 = () => setShowModal2(true);
	const handleCloseModal2 = () => setShowModal2(false);


	const [imageName, setImageName] = useState('');
	const [imageSrc, setImageSrc] = useState('assets/images/proof.svg');

	const fileInputRef = useRef(null);

	const handleUploadClick = () => {
		fileInputRef.current.click(); // Simulate click on hidden file input
	};
	const simpleBarRef = useRef(null);

	useEffect(() => {
		if (simpleBarRef.current) {
			const scrollElement =
				simpleBarRef.current.getScrollElement?.() ||
				simpleBarRef.current;

			scrollElement.scrollTop = scrollElement.scrollHeight;
		}
	}, []);

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			console.log("Selected file:", file.name);
			// You can now upload this file or display it
		}
	};

	// const readURL = (input) => {
	// 	if (input.files && input.files[0]) {
	// 		const reader = new FileReader();
	// 		reader.onload = function (e) {
	// 			setImageSrc(e.target.result);
	// 		};
	// 		reader.readAsDataURL(input.files[0]);
	// 	}
	// };

	// const handleFileChange = (event) => {
	// 	setImageName(event.target.files[0].name);
	// 	readURL(event.target);
	// };
	return (
		<div className="pagecontent gridpagecontent innerpagegrid  ">
			<div className="backgroundoverlay" id="backgroundoverlay"></div>
			<Userheader />
			<Leftsidemenu />
			<div className="innerpagecontent">
				<Container className="sitecontainer">
					<h2 className="h2 text-start">Support</h2>
					<div className="tabrightbox">
						<Button className="btn sitebtn" id="createticket" onClick={handleShowModal1}>Create Ticket</Button>
					</div>

				</Container>
			</div>
			<article className="gridparentbox">
				<Container className="sitecontainer supportbg">
					{/* <div className="panelcontentbox">
						<SimpleBar className="table-responsive sitescroll">
								<Table className="sitetable">
									<tbody>
										 <tr className="nodata">
												<td>
													<Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
													No record found
												</td>
											</tr> 
									</tbody>
								</Table>
							</SimpleBar>
					</div> */}

					<Tab.Container defaultActiveKey="ticket1">
						<div className="flexbox">
							<div className="panelcontentbox supporttable borderboxbg">
								<h1 className="subhead p-3">Ticket List</h1>
								<hr className="m-0" />
								<div className="supportsearch">
									<Form className="siteformbg">
										<Form.Group className="form-group mb-0">
											<InputGroup>
												<InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
												<Form.Control className="form-control" placeholder="Search" />
											</InputGroup>
										</Form.Group>
									</Form>
								</div>
								<SimpleBar className="supportlistscroll">
									<Nav className="nav nav-tabs tabbanner border-0" role="tablist">
										<Nav.Item className="nav-item">
											<Nav.Link eventKey="ticket1">
												<Table className="sitetable" id='table1'>
													<tbody>
														<tr>
															<td>Ticket ID: UI15658478 </td>
															<td className="text-end t-red">Closed</td>
														</tr>
														<tr>
															<td colSpan={2} className="t-gray">Title: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
														</tr>
														<tr>
															<td colSpan={2} className="ps-0 pe-0"><hr /></td>
														</tr>
														<tr>
															<td><span className="t-gray">Date</span><br />Mar 03,2025</td>
															<td className="text-end"><Button className="viewbtn" id="chat_message">Chat</Button></td>
														</tr>
													</tbody>
												</Table>
											</Nav.Link>
										</Nav.Item>
										<Nav.Item className="nav-item">
											<Nav.Link eventKey="ticket2">
												<Table className="sitetable" id='table2'>
													<tbody>
														<tr>
															<td>Ticket ID: UI15658478 </td>
															<td className="text-end t-red">Closed</td>
														</tr>
														<tr>
															<td colSpan={2} className="t-gray">Title: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
														</tr>
														<tr>
															<td colSpan={2}><hr /></td>
														</tr>
														<tr>
															<td><span className="t-gray">Date</span><br />Mar 03,2025</td>
															<td className="text-end"><Button className="viewbtn" id="chat_message">Chat</Button></td>
														</tr>
													</tbody>
												</Table>
											</Nav.Link>
										</Nav.Item>
										<Nav.Item className="nav-item">
											<Nav.Link eventKey="ticket3">
												<Table className="sitetable" id='table3'>
													<tbody>
														<tr>
															<td>Ticket ID: UI15658478 </td>
															<td className="text-end t-red">Closed</td>
														</tr>
														<tr>
															<td colSpan={2} className="t-gray">Title: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
														</tr>
														<tr>
															<td colSpan={2}><hr /></td>
														</tr>
														<tr>
															<td><span className="t-gray">Date</span><br />Mar 03,2025</td>
															<td className="text-end"><Button className="viewbtn" id="chat_message">Chat</Button></td>
														</tr>
													</tbody>
												</Table>
											</Nav.Link>
										</Nav.Item>
										<Nav.Item className="nav-item">
											<Nav.Link eventKey="ticket4">
												<Table className="sitetable" id='table4'>
													<tbody>
														<tr>
															<td>Ticket ID: UI15658478 </td>
															<td className="text-end t-red">Closed</td>
														</tr>
														<tr>
															<td colSpan={2} className="t-gray">Title: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
														</tr>
														<tr>
															<td colSpan={2}><hr /></td>
														</tr>
														<tr>
															<td><span className="t-gray">Date</span><br />Mar 03,2025</td>
															<td className="text-end"><Button className="viewbtn" id="chat_message">Chat</Button></td>
														</tr>
													</tbody>
												</Table>
											</Nav.Link>
										</Nav.Item>
										<Nav.Item className="nav-item">
											<Nav.Link eventKey="ticket5">
												<Table className="sitetable" id='table5'>
													<tbody>
														<tr>
															<td>Ticket ID: UI15658478 </td>
															<td className="text-end t-red">Closed</td>
														</tr>
														<tr>
															<td colSpan={2} className="t-gray">Title: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
														</tr>
														<tr>
															<td colSpan={2}><hr /></td>
														</tr>
														<tr>
															<td><span className="t-gray">Date</span><br />Mar 03,2025</td>
															<td className="text-end"><Button className="viewbtn" id="chat_message">Chat</Button></td>
														</tr>
													</tbody>
												</Table>
											</Nav.Link>
										</Nav.Item>
									</Nav>
								</SimpleBar>
							</div>
							<div className="panelcontentbox chatticketlist borderboxbg">
								<Tab.Content>
									<Tab.Pane eventKey="ticket1">
										<h1 className="subhead">
											<div className="d-flex chatflexticket">
												<div><Image src="assets/images/admin.png" width={40} height={40} alt="icon" id="adminimg" />Ticket ID : UI15658478</div>
											</div>
										</h1>
										<hr className="mb-0 mt-0" />
										<div className="chatbox ticketchat">
											<SimpleBar className="chat chatboxscroll"
												ref={simpleBarRef}>
												<li className="left clearfix">
													<div className="chat-img pull-left"><Image src="assets/images/admin.png"
														className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
													</div>
													<div className="chat-body clearfix">
														<div className="header">
															<h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
																2025 )</span></h4>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
														</div>
													</div>
												</li>
												<li className="right clearfix">
													<div className="chat-body clearfix">
														<div className="header">
															<h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
																2025 )</span></h4>
															<p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
															</p>
															<p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
															</p>
														</div>
													</div>
													<div className="chat-img pull-right"><Image src="assets/images/profile.svg"
														className="img-circle" width={50} height={50} alt="icon" />
													</div>
												</li>
												<li className="right clearfix">
													<div className="chat-body clearfix">
														<div className="header">
															<h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
																2025 )</span></h4>
															<p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
															</p>
															<p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
															</p>
														</div>
													</div>
													<div className="chat-img pull-right"><Image src="assets/images/profile.svg"
														className="img-circle" width={50} height={50} alt="icon" />
													</div>
												</li>
												<li className="left clearfix">
													<div className="chat-img pull-left"><Image src="assets/images/admin.png"
														className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
													</div>
													<div className="chat-body clearfix">
														<div className="header">
															<h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
																2025 )</span></h4>
															<p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
															</p>
															<p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
															</p>
														</div>
													</div>
												</li>
												<li className="left clearfix">
													<div className="chat-img pull-left"><Image src="assets/images/admin.png"
														className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
													</div>
													<div className="chat-body clearfix">
														<div className="header">
															<h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
																2025 )</span></h4>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
														</div>
													</div>
												</li>
												<li className="left clearfix">
													<div className="chat-img pull-left"><Image src="assets/images/admin.png"
														className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
													</div>
													<div className="chat-body clearfix">
														<div className="header">
															<h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
																2025 )</span></h4>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
														</div>
													</div>
												</li>
											</SimpleBar>
										</div>
										<div className="chat-foot">
											<Form className="siteformbg">
												<div className="tabrightbox imguploadbg">
													<Button href="#" className="btn sitebtn btn-sm" id="createticket" onClick={handleShowModal2}>
														<FontAwesomeIcon icon={faPaperclip} /> Attach Image
													</Button>
												</div>
												<div className="form-group mb-2">
													<Form.Label>Enter your message</Form.Label>
													<textarea className="form-control" rows={2} id="textarea1"></textarea>
												</div>
												<div className="form-group text-center mb-0">
													<Button className="btn sitebtn" id="chatsubmit">Send</Button>
												</div>
											</Form>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="ticket2">
										<h1 className="subhead pt-1 ps-2 pe-2 pb-2">
											<div className="d-flex chatflexticket">
												<div><Image src="assets/images/admin.png" width={50} height={50} alt="icon" id="adminimg" />#UI15658478</div>
												<div className="text-end"><Badge bg="success"><FontAwesomeIcon icon={faCircle} />Active</Badge></div>
											</div>
										</h1>
										<hr className="mb-0 mt-2" />
										<div className="chatbox ticketchat">
											<SimpleBar className="chat chatboxscroll">
												<li className="left clearfix">
													<div className="chat-img pull-left"><Image src="assets/images/admin.png"
														className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
													</div>
													<div className="chat-body clearfix">
														<div className="header">
															<h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
																2025 )</span></h4>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
														</div>
													</div>
												</li>
												<li className="right clearfix">
													<div className="chat-body clearfix">
														<div className="header">
															<h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
																2025 )</span></h4>
															<p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
															</p>
															<p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
															</p>
														</div>
													</div>
													<div className="chat-img pull-right"><Image src="assets/images/profile.svg"
														className="img-circle" width={50} height={50} alt="icon" />
													</div>
												</li>

											</SimpleBar>
										</div>
										<div className="chat-foot">
											<Form className="siteformbg">
												<div className="form-group mb-2">
													<Form.Label>Enter your message</Form.Label>
													<textarea className="form-control" rows={2} id="textarea1"></textarea>
												</div>

												<div className="form-group text-center mb-0">
													<Button className="btn sitebtn" id="chatsubmit">Send</Button>
												</div>
											</Form>

										</div>
									</Tab.Pane>

								</Tab.Content>
							</div>
						</div>
					</Tab.Container>
				</Container>
			</article>
			<Userfooter />
			<Modal className="modalbgt" show={showModal1} onHide={handleCloseModal1}
				aria-labelledby="contained-modal-title-vcenter"
				centered>
				<Modal.Header closeButton>
					<Modal.Title>Create Ticket</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className='siteformbg'>
						<Form.Group className="form-group">
							<Form.Label>Title</Form.Label>
							<Form.Control type="text" id="title" />
						</Form.Group>
						<Form.Group className="form-group">
							<Form.Label>Enter your message</Form.Label>
							<Form.Control as="textarea" rows={5} name="Message" id="message" />
						</Form.Group>
						<Form.Group className="form-group kycupload">
							<label>Upload Document <span className="t-red">*</span></label>
							<div className="kycproffbox">
								<div>
									<Image id="doc1" src={imageSrc} width={20} height={20} alt="front" />
								</div>
								<div className="uploadprofileiconbox text-end">
									<label className="custom-file-upload customupload" id="file-upload1">Upload here..</label>
									<input id="file_upload" onChange={handleFileChange} name="profile" type="file" />
								</div>
							</div>
						</Form.Group>
						<div className="text-center">
							<Button className='sitebtn' id="submit">Submit</Button>
						</div>
					</Form>

				</Modal.Body>
			</Modal>
			<Modal className="modalbgt" show={showModal2} onHide={handleCloseModal2}
				aria-labelledby="contained-modal-title-vcenter"
				centered backdrop="static"
				keyboard={false} >
				<Modal.Header closeButton>
					<Modal.Title>Image Upload</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className='siteformbg'>
						<Form.Group className="form-group kycupload">
							<div className="kycproffbox">
								<div>
									<Image id="doc1" src={imageSrc} width={20} height={20} alt="front" />
								</div>
								<div className="uploadprofileiconbox text-end">
									<label className="custom-file-upload customupload" id="file-upload1">Upload here..</label>
									<input id="file_upload" onChange={handleFileChange} name="profile" type="file" />
								</div>
							</div>
						</Form.Group>
						<div className="text-center">
							<Button className='sitebtn' id="submit">Submit</Button>
						</div>
					</Form>

				</Modal.Body>
			</Modal>
		</div >
	);
}

export default Support;