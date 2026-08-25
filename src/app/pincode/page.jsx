"use client";
import React, { useEffect, useRef, useState } from "react";
import '../../../public/assets/css/bootstrap-slider.css';
import Link from 'next/link';
import {
  Container, Image, Table, Button, Form, Nav, Row, Col, Modal, NavDropdown, InputGroup
} from 'react-bootstrap';
import 'simplebar-react/dist/simplebar.min.css';

const Personalwallet = () => {
  const [show, setShow] = useState(true);
  const inputRefs = useRef([]);

  useEffect(() => {
    document.body.style.paddingBottom = "0px";
    return () => {
      document.body.style.paddingBottom = "";
    };
  }, []);

  const handleInput = (e, index) => {
    const value = e.target.value;

    // Allow only one digit
    if (value.length > 1) {
      e.target.value = value.slice(0, 1);
    }

    // Move to next input if value entered
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Move back on backspace if current is empty
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        backdrop="static"
        keyboard={false}
        className="modalbgt-x-y"
      >
        <div className="summarymdal-x" aria-labelledby="contained-modal-title-vcenter">
          <Form className="siteformbg mx-auto">
            <div className="lightgraybg-x text-center coinlisticon-x">
              <Link href="/">
                <Image
                  src="assets/images/logo.png"
                  width={100}
                  height={57}
                  className="lightthemeicon mb-3"
                  alt="logo"
                />
                <Image
                  src="assets/images/logo-dark.png"
                  width={100}
                  height={57}
                  className="darkthemeicon mb-3"
                  alt="logo"
                />
              </Link>
            </div>

            <Form.Group className="form-group">
              <div className="subhead-pass">
                <h4 className="mb-3">
                  You have not used the site for 15 minutes. For safety reasons, we have disabled the browser session.
                </h4>
                <p className="pb-0 mb-3">To resume your session, enter the PIN code.</p>
              </div>
            </Form.Group>

            <Form.Group className="my-3">
              <InputGroup>
                {[0, 1, 2, 3].map((_, i) => (
                  <Form.Control
                    key={i}
                    type="number"
                    onInput={(e) => handleInput(e, i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    ref={(el) => (inputRefs.current[i] = el)}
                    className={i === 0 ? "active" : i === 3 ? "wrong-one" : ""}
                  />
                ))}
              </InputGroup>
            </Form.Group>

            <span className="wrong-text">
              <Image
                src="assets/images/wrong-icon.svg"
                width={20}
                height={20}
                alt="coin"
                className="wrong-icon"
              />{" "}
              Invalid PIN code. Attempts left 3
            </span>

            <Form.Group className="form-group d-flex dflexbtn my-3 mb-0">
              <Button
                type="button"
                className="sitebtn btn-block"
                id="submitbtn"
                onClick={() => setShow(false)}
              >
                Logout
              </Button>
            </Form.Group>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default Personalwallet;
