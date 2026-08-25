"use client"
import React, { useState, useEffect } from 'react'
import Countdown from 'react-countdown';
import '../../../public/assets/css/Checkout.css';
import { Container, Image, Row, Form, Col, Badge, Tooltip, OverlayTrigger, Alert, InputGroup, Button, NavDropdown, Nav, Accordion, Tab } from 'react-bootstrap'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faQuestionCircle, faCircleExclamation, faCopy, faExclamationCircle, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


const page = () => {
    const [show, setShow] = useState(true);
    const [singleOption, setSingleOption] = useState(null);
    const [showMore, setShowMore] = useState(false);
    const [showFaq, setShowFaq] = useState(false);
    const [faq, setFaq] = useState([]);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [search, setSearch] = useState("");

    return (
        <>
            <section className="fournotfour">
                <Container className="sitebannercontent">
                    <Row className="align-items-center">
                        <Col lg={12} md={12} sm={12}>
                            <div className="d-flex justify-content-center">
                                <Image src="assets/images/fournotfourwhite.png" className="fournotfour-img lightthemeicon" alt="icon" width={100} height={100} />
                                <Image src="assets/images/fournotfourdark.png" className="fournotfour-img darkthemeicon" alt="icon" width={100} height={100} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default page