import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import logo from "./../asserts/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar fixed="top" bg="light" expand="lg" className="p-3 rounded shadow">
        <Container>
          <Navbar.Brand href="/">
            <Image
              src={logo}
              alt="logo"
              roundedCircle
              width="50"
              height="50"
              style={{ marginTop: "-10px" }}
            />
            <strong style={{fontSize: "18px"}} className="d-lg-none text-secondary">
              <span style={{ color: "rgb(140, 77, 249)" }}>Background </span>
              remover
            </strong>
            <strong className="d-none d-lg-inline text-secondary">
              <span style={{ color: "rgb(140, 77, 249)" }}>Background </span>
              remover
            </strong>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleToggle}
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </Navbar.Toggle>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="justify-content-md-center text-center">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about-us">About</Nav.Link>
              <Nav.Link href="/contact-us">Contact</Nav.Link>
              <Nav.Link />
            </Nav>
            <Nav>
              <Button variant="outline-primary" href="/remove-background">
                Upload Image
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
