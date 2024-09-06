import React from "react";
import { GoPersonFill } from "react-icons/go";
import { Navbar, Nav, Container } from "react-bootstrap";
import { ImExit } from "react-icons/im";

const NavigationBar = ({ openLogin, openSignup }) => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#">Smart Irrigation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#solution">Solution</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link onClick={openLogin}>
              <ImExit />
              Login
            </Nav.Link>
            <Nav.Link onClick={openSignup}>
              <GoPersonFill />
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* <button onClick={openLogin}>Login</button>
        <button onClick={openSignup}>Sign Up</button> */}
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
